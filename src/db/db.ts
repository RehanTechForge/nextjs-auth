import mongoose, { mongo } from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log(`Mongodb Connected Successfully!`);
    });
    connection.on("error", (error) => {
      console.log(`Mongodb Not Connected || ${error.message}`);
      process.exit(1);
    });
  } catch (error: any) {
    console.log(`Error While Connecting Mongodb: ${error.message}`);
  }
}
