import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import auth from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/ai/generate
// @desc    Generate content with Gemini
router.post('/generate', auth, async (req, res) => {
  const { query, documentText } = req.body;

  if (!query || !documentText) {
    return res.status(400).json({ message: 'Query and document text are required' });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); 
    
    const promptText = `You are an AI co-pilot inside a high-fidelity Zettelkasten note-taking app. 
    Here is the current document's context:\n"${documentText}"\n\n
    The user wants you to do the following: "${query}"
    Respond using rich Markdown formatting (headings, bullet points, bold text, and code blocks). 
    
    CRITICAL MERMAID INSTRUCTIONS:
    If the user asks for a diagram, flowchart, graph, or visual representation, you MUST ALWAYS generate it using valid Mermaid.js syntax inside a \`\`\`mermaid code block.
    To prevent severe parser crashes, YOU MUST strictly follow these rules:
    1. ALWAYS declare an ID for every node. NEVER define a node solely by its text string.
       - INCORRECT: Java Virtual Machine (JVM) --> C
       - CORRECT: A["Java Virtual Machine (JVM)"] --> C["Node C"]
    2. ALWAYS wrap node labels in DOUBLE QUOTES inside the brackets/parentheses to safely escape special characters like ( ) and [ ].
       - INCORRECT: B[Compiler (JIT)]
       - CORRECT: B["Compiler (JIT)"]
    3. NEVER put double quotes around link text. Link text must be unquoted or wrapped in pipes.
       - INCORRECT: A -- "compiles to" --> B
       - CORRECT: A -- compiles to --> B
       - CORRECT: A -->|compiles to| B
    4. NEVER use backslashes for line breaks.`;

    const result = await model.generateContent(promptText);
    const response = await result.response;
    const text = response.text();

    res.json({ text });
  } catch (err) {
    console.error('AI Generation Error:', err);
    res.status(500).json({ message: 'Failed to generate response' });
  }
});

export default router;
