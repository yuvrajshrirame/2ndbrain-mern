import express from 'express';
import auth from '../middleware/auth.js';
import { Node, Link, Folder } from '../models/Graph.js';

const router = express.Router();

// Helper to format Mongo docs to match frontend expected ID format
const formatDoc = (doc) => {
  const obj = doc.toObject();
  obj.id = obj._id.toString();
  delete obj._id;
  delete obj.__v;
  return obj;
};

// @route   GET /api/graph
// @desc    Get all graph data for user
router.get('/', auth, async (req, res) => {
  try {
    const nodes = await Node.find({ userId: req.user.id });
    const links = await Link.find({ userId: req.user.id });
    const folders = await Folder.find({ userId: req.user.id }).sort({ createdAt: 1 });

    res.json({
      nodes: nodes.map(formatDoc),
      links: links.map(formatDoc),
      folders: folders.map(formatDoc)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// NODES
router.post('/nodes', auth, async (req, res) => {
  try {
    const node = new Node({ ...req.body, userId: req.user.id });
    await node.save();
    const formatted = formatDoc(node);
    
    req.io.to(req.user.id).emit('node_added', formatted);
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/nodes/:id', auth, async (req, res) => {
  try {
    const node = await Node.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { $set: req.body },
      { new: true }
    );
    if (!node) return res.status(404).json({ message: 'Node not found' });
    
    const formatted = formatDoc(node);
    req.io.to(req.user.id).emit('node_updated', formatted);
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/nodes/:id', auth, async (req, res) => {
  try {
    const node = await Node.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!node) return res.status(404).json({ message: 'Node not found' });
    
    req.io.to(req.user.id).emit('node_deleted', req.params.id);
    res.json({ message: 'Node deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// LINKS
router.post('/links', auth, async (req, res) => {
  try {
    const link = new Link({ ...req.body, userId: req.user.id });
    await link.save();
    
    const formatted = formatDoc(link);
    req.io.to(req.user.id).emit('link_added', formatted);
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/links/:id', auth, async (req, res) => {
  try {
    const link = await Link.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!link) return res.status(404).json({ message: 'Link not found' });
    
    req.io.to(req.user.id).emit('link_deleted', req.params.id);
    res.json({ message: 'Link deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// FOLDERS
router.post('/folders', auth, async (req, res) => {
  try {
    const folder = new Folder({ ...req.body, userId: req.user.id });
    await folder.save();
    
    const formatted = formatDoc(folder);
    req.io.to(req.user.id).emit('folder_added', formatted);
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/folders/:id', auth, async (req, res) => {
  try {
    const folder = await Folder.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { $set: req.body },
      { new: true }
    );
    if (!folder) return res.status(404).json({ message: 'Folder not found' });
    
    const formatted = formatDoc(folder);
    req.io.to(req.user.id).emit('folder_updated', formatted);
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/folders/:id', auth, async (req, res) => {
  try {
    const folder = await Folder.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!folder) return res.status(404).json({ message: 'Folder not found' });
    
    req.io.to(req.user.id).emit('folder_deleted', req.params.id);
    res.json({ message: 'Folder deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
