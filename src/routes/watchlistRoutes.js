import express from "express";
import {addToWatchlist, removeFromWatchlist} from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();

router.use(authMiddleware)

router.post("/", addToWatchlist);
router.delete("/:id", removeFromWatchlist)


// router.post("/login",  login);
// router.post("/logout", logout);

export default router;