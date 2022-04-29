import User from "../../../db/models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const adminLogin = async(req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email });

        if (userFound) {
            const correctPassword = await bcrypt.compare(
                password,
                userFound.password
            );

            if (correctPassword) {
                const { _id, email } = userFound;
                const token = jwt.sign({ _id, email }, process.env.SECRET_WORD);

                res.json({ user: { _id, token, email } }).status(203);
            } else {
                res
                    .json({ error: "Usuario o contraseña incorrecta" })
                    .status(400)
                    .end();
            }
        } else {
            res.json({ error: "Usuario o contraseña incorrecta" }).status(400).end();
        }
    } catch (error) {
        console.log(error);
        res.json({ error }).status(500).end();
    }
};