import { Prisma } from "../config/db.js";


const addToWatchlist = async (req, res) => {
    const {movieId, status, rating, notes, userId} = req.body;


    const movie = await prisma.movie.findUnique({
      where: {id: movieId}
    });

    if(!movie){
        return res.status(404).json({error: "Movie not found"}); 
    }

     const exisitngInWatchlist = await prisma.watchlistItem.findUnique({
      where: {id: movieId}
    });

}