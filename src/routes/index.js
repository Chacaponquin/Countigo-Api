import { Router } from "express";

const app = Router();

app.get("/", (req, res) => res.send("Hello World"));

export default app;