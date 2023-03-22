import express from "express"
import { Create, getAll, getOne, Remove, Update } from "../controllers/control";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", Create);
router.put("/:id", Update);
router.delete("/:id", Remove);

export default router;