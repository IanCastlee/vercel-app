import { db } from "../conn.js";

export const add = (req, res) => {

    const q =
        "INSERT INTO reg (`name`,`lname`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.lname,

    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Posted succesfully!");
    });
}