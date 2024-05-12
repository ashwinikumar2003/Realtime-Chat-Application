import mongoose from 'mongoose';
import { config } from 'dotenv';
config()
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ChatApp"
    });
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
};

export default connectDB;
