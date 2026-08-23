import express from 'express';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';
import auth from '../middleware/auth.js';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const router = express.Router();

const generateToken = (user) => {
  return jwt.sign(
    { user: { id: user._id, isAnonymous: user.isAnonymous } },
    process.env.JWT_SECRET || 'fallback_secret',
    { expiresIn: '30d' }
  );
};

// @route   POST /api/auth/google
// @desc    Authenticate user with Google & get token
router.post('/google', async (req, res) => {
  const { credential } = req.body; // This is the access_token now

  try {
    const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${credential}` }
    });
    
    if (!userInfoRes.ok) {
      throw new Error('Failed to fetch user info from Google');
    }
    
    const payload = await userInfoRes.json();
    const { email, name } = payload;

    let user = await User.findOne({ email });
    
    if (!user) {
      user = new User({ 
        email, 
        displayName: name, 
        isAnonymous: false,
      });
      await user.save();
    }

    const token = generateToken(user);
    res.json({ token, user: { id: user._id, email: user.email, displayName: user.displayName } });
  } catch (err) {
    console.error('Google Auth Error:', err);
    res.status(500).json({ message: 'Google authentication failed', details: err.message });
  }
});

// @route   GET /api/auth/me
// @desc    Get user data
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
