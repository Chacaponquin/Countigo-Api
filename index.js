import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./src/routes/index.js";
import adminRoutes from "./src/routes/admin.js";

import "./src/db/mongo.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/", routes);
app.use("/admin", adminRoutes);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));