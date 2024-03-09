import mongoose from "mongoose";

const DB = process.env.CONNECT_DB;

export const connectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(DB);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
