import userService from '../services/userService.js';

// Update user status
const setStatus = async (req, res) => {
  const { status } = req.body;
  const userId = req.user.id;

  try {
    const user = await userService.updateUserStatus(userId, status);
    res.json({ user });
  } catch (error) {
    console.error('Error updating user status:', error);
    res.status(500).send('Server Error');
  }
};

// Get user status
const getUserStatus = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json({ status: user.status });
  } catch (error) {
    console.error('Error fetching user status:', error);
    res.status(500).send('Server Error');
  }
};

export default { setStatus, getUserStatus };
