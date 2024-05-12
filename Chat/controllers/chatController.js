import chatService from '../services/chatService.js';
import { mockLLMResponse } from '../mockLLM.js'; // Import the mockLLMResponse function

// Send a chat message
const sendMessage = async (req, res) => {
  const { sender, receiver, content } = req.body;

  try {
    // Check if the receiver is available
    const receiverStatus = await chatService.getUserStatus(receiver);
    
    if (receiverStatus === 'AVAILABLE') {
      // Receiver is available, proceed with sending the message
      const message = await chatService.saveMessage(sender, receiver, content);
      res.json({ message });
    } else {
      // Receiver is busy, generate a mock LLM response
      const mockResponse = await mockLLMResponse(content);
      res.json({ message: mockResponse });
    }
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send('Server Error');
  }
};

// Get chat messages between users
const getMessages = async (req, res) => {
  const { user1Id, user2Id } = req.query;

  try {
    const messages = await chatService.getMessagesByUsers(user1Id, user2Id);
    res.json({ messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).send('Server Error');
  }
};

export default {sendMessage, getMessages};