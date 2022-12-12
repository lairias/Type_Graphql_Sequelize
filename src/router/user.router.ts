import express from "express";
import db from "../../models";
// import people from "../../models/People/people";
// import Usuario from "../../models/People/users";
const router = express.Router();
 router.get("/",async (_req, res) => {
    //  const user = 
    const users = await db.pe_people.findAll();
        
    res.json(users);
});
export default router;