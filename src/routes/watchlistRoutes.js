import express from "express";
import {addToWatchlist, removeFromWatchlist, updateWatchlistItem} from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();

router.use(authMiddleware)

router.post("/", addToWatchlist);
router.delete("/:id", removeFromWatchlist)
router.put("/:id", updateWatchlistItem)


// router.post("/login",  login);
// router.post("/logout", logout);

export default router;