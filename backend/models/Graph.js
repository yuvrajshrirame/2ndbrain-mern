import mongoose from 'mongoose';

const NodeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    default: 'Untitled'
  },
  val: {
    type: Number,
    default: 3
  },
  content: {
    type: String
  },
  folder: {
    type: String, // Or ObjectId if mapping to Folder directly, but frontend uses strings mostly
    default: null
  }
}, { timestamps: true });

const LinkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  source: {
    type: String, // Storing as String to match frontend IDs
    required: true
  },
  target: {
    type: String,
    required: true
  }
}, { timestamps: true });

const FolderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const Node = mongoose.model('Node', NodeSchema);
export const Link = mongoose.model('Link', LinkSchema);
export const Folder = mongoose.model('Folder', FolderSchema);
