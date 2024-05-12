import User from '../models/user.js';

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};

const updateUserStatus = async (userId, status) => {
  try {
    const user = await User.findByIdAndUpdate(userId, { status }, { new: true });
    return user;
  } catch (error) {
    console.error('Error updating user status:', error);
    throw error;
  }
};

export default { getUserById, updateUserStatus };
