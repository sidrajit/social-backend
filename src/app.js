import express from "express"
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/user", userRoutes);

export default app;