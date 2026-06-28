import express from "express"
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import apiResponse from "./common/apiResponse.js";

const app = express();

app.use(express.json());

// 1. Register base response handler
app.use(apiResponse());

// adding default headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// 2. Define routes
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/user", userRoutes);

// 3. Centralized error handling middleware AFTER routes
app.use((error, req, res, next) => {
  let code = req.body.code || 400;
  let data = req.body.data || {};
  next();
  return res.error(code, (error.message || error), data);
});

export default app;