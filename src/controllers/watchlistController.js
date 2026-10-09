import { prisma} from "../config/db.js";


const addToWatchlist = async (req, res) => {
    const {movieId, status, rating, notes} = req.body;


    const movie = await prisma.movie.findUnique({
      where: {id: movieId}
    });

    if(!movie){
        return res.status(404).json({error: "Movie not found"}); 
    }

     const exisitngInWatchlist = await prisma.watchlistItem.findUnique({
      where: {userId_movieId: {
        userId: req.user.id,
        movieId: movieId,
      },
    },
    });

    if(exisitngInWatchlist){
        return res.status(400).json({error: "Movie already in the watchlist"}); 
    }

    const watchlistItem = await prisma.watchlistItem.create({
      data: {
        userId: req.user.id,
        movieId,
        status: status || "PLANNED",
        rating,
        notes,
      },
    });

    res.status(201).json({
      status: "success",
      data: {
        watchlistItem,
      }
    })

};

const removeFromWatchlist = async (req, res) => {
    const watchlistItem = await prisma.watchlistItem.findUnique({
      where: {id: req.params.id},
    });

    if(!watchlistItem){
      return res.status(404).json({error: "Watchlsit item not found"});
    }


    if(watchlistItem.userId !== req.params.id){
      return res.status(403).json({
        error: "Not allowed to update watchlist item"
      });
    }

    await prisma.watchlistItem.delete({
      where: {id: req.params.id},
    });
    res.status(200).json({
      status: "Success",
      message: "Movie removed from watchlist",
    });


};




export {addToWatchlist, removeFromWatchlist}