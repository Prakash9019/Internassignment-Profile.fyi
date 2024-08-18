import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URI);
  console.log("Connect");
};

export default dbConnect;
