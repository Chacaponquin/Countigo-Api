import User from "../../../db/models/User.js";
import bcrypt from "bcrypt";

export const adminCreateUser = async(req, res) => {
    const { username, password, email } = req.body;

    try {
        //HASHEAR LA CONTRASEÑA
        const hashPassword = await bcrypt.hash(password, 10);

        //CREAR EL USUARIO
        const newUser = new User({
            username,
            email,
            password: hashPassword,
        });

        await newUser.save();

        res.json(newUser).status(200).end();
    } catch (error) {
        res.json({ error }).status(500).end();
    }
};