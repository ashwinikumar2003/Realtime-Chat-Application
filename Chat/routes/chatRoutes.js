import express from 'express';
import chatController from '../controllers/chatController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/send', authMiddleware, chatController.sendMessage);
router.get('/messages', authMiddleware, chatController.getMessages);

export default router;
