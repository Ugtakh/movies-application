import { Router } from "express";
import { getWebHook, postWebHook } from "../controllers/chatBotController";

const router = Router();

router.route("/").get(getWebHook);
router.route("/").get(postWebHook);

export default router;
