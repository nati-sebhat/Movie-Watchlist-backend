import express from "express"
import { config } from "dotenv";

import movieRoutes from "./routes/movieRoutes.js";

config();

const app = express()

app.use("/movies", movieRoutes);


const PORT = 5001;
const server = app.listen(PORT, () => {
   console.log(`Server running on PORT ${PORT}`);
});

app.get("/hello", (req, res) =>{

    res.json({message: "Hello World"});
});