import Message from '../models/message.js';
import mongoose from 'mongoose';

const saveMessage = async (senderId, receiverId, content) => {
  try {
    const message = new Message({
      sender: senderId,
      receiver: receiverId,
      content,
    });
    await message.save();
    return message;
  } catch (error) {
    console.error('Error saving message:', error);
    throw error;
  }
};

const getMessagesByUsers = async (user1Id, user2Id) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: user1Id, receiver: user2Id },
        { sender: user2Id, receiver: user1Id }
      ],
    }).sort({ timestamp: 1 });
    return messages;
  } catch (error) {
    console.error('Error fetching messages by users:', error);
    throw error;
  }
};

export default { saveMessage, getMessagesByUsers };
