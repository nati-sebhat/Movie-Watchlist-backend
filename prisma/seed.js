import { PrismaClient } from "@prisma/client";

    const prisma = new PrismaClient()

    const userId = "29abe210-8ace-4430-9dc0-319052dc5c40";


    const movies = [
    {
        title: "The Shawshank Redemption",
        overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        releaseYear: 1994,
        genres: ["Drama"],
        runtime: 142,
        posterUrl: "https://example.com/shawshank.jpg",
        createdBy: userId,
    },
    {
        title: "The Godfather",
        overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
        releaseYear: 1972,
        genres: ["Crime", "Drama"],
        runtime: 175,
        posterUrl: "https://example.com/godfather.jpg",
        createdBy: userId,
    },
    {
        title: "The Dark Knight",
        overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        releaseYear: 2008,
        genres: ["Action", "Crime", "Drama"],
        runtime: 152,
        posterUrl: "https://example.com/darkknight.jpg",
        createdBy: userId,
    },
    {
        title: "The Godfather Part II",
        overview: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the crime syndicate.",
        releaseYear: 1974,
        genres: ["Crime", "Drama"],
        runtime: 202,
        posterUrl: "https://example.com/godfather2.jpg",
        createdBy: userId,
    },
    {
        title: "12 Angry Men",
        overview: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
        releaseYear: 1957,
        genres: ["Crime", "Drama"],
        runtime: 96,
        posterUrl: "https://example.com/12angrymen.jpg",
        createdBy: userId,
    },
    {
        title: "Schindler's List",
        overview: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        releaseYear: 1993,
        genres: ["Biography", "Drama", "History"],
        runtime: 195,
        posterUrl: "https://example.com/schindlerslist.jpg",
        createdBy: userId,
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        overview: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        releaseYear: 2003,
        genres: ["Action", "Adventure", "Drama"],
        runtime: 201,
        posterUrl: "https://example.com/lotr3.jpg",
        createdBy: userId,
    },
    {
        title: "Pulp Fiction",
        overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        releaseYear: 1994,
        genres: ["Crime", "Drama"],
        runtime: 154,
        posterUrl: "https://example.com/pulpfiction.jpg",
        createdBy: userId,
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        overview: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        releaseYear: 2001,
        genres: ["Action", "Adventure", "Drama"],
        runtime: 178,
        posterUrl: "https://example.com/lotr1.jpg",
        createdBy: userId,
    },
    {
        title: "GoodFellas",
        overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        releaseYear: 1990,
        genres: ["Biography", "Crime", "Drama"],
        runtime: 146,
        posterUrl: "https://example.com/goodfellas.jpg",
        createdBy: userId,
    }
];

const main = async  () => {
    console.log("Seeding movies...");

    for(const movie of movies){
        await prisma.movie.create({
            data:movie,
        });
        console.log(`Created movie: ${movie.title}`);
    }
    console.log("Seeding Completed!");
};

main()
 .catch((err) => {
    console.error(err);
    process.exit(1);
 })
 .finally(async () => {
    await prisma.$disconnect();
 });