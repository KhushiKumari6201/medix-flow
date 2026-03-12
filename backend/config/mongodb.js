import mongoose from "mongoose";

export const connectDb = async () => {
   try {
      const connectionInstance = await mongoose.connect(process.env.MONGO_URI);

      console.log(
         "Database connection successfully",
         connectionInstance.connection.host,
      );
   } catch (error) {
      console.log("Database connection error", error);
      process.exit(1);
   }
};
