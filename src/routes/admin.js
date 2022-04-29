import { Router } from "express";
import { adminCreateUser } from "../tasks/admin/Users/createUser.js";
import { adminLogin } from "../tasks/admin/Users/login.js";

const app = Router();

app.get("/login", adminLogin);
app.get("/createUser", adminCreateUser);

export default app;