import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbNAME: "school",
    };

    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("connect successfully");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;