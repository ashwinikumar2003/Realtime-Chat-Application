import express from 'express';
import userController from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.put('/status', authMiddleware, userController.setStatus);
router.get('/:userId/status', authMiddleware, userController.getUserStatus);

export default router;
