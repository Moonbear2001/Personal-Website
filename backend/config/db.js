import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Connect specifically to contactMessages db
export const connectContactMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_CONTACT_URI);
    console.log(`MongoDB Contact DB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}