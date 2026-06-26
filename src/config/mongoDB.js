import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB connected successfully! Host: ${connection.connection.host}`);

    } catch (error) {
        console.log("Mongo DB connect failed", error.message);
        process.exit(0);
    }
}

export default connectDB;