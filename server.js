import app from "./src/app.js"
import dotenv from "dotenv"
import connectDB from "./src/config/mongoDB.js";

dotenv.config();

connectDB().then(
    () => {
        const port = process.env.PORT || 3000
        app.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`)
        })
    }
).catch(
    (error) => {
        console.log("MongoDB connection failed", error);
    }
)