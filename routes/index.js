import express from "express";
import { getAllTheData, createCommentsDetails } from "../models/index.js";
const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const body = await getAllTheData()

  res.json({ 
    success: true,
    payload: body
   });
});

router.post("/", async function (req, res){
const body = req.body;
const createNew = await createCommentsDetails(body);

console.log(createNew);

  res.json({
    success: true,
    payload: createNew
  })
})



export default router;

