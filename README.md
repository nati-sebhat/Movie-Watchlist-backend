# Movie Watchlist Backend 

A production-ready RESTful API built with [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [Prisma](https://www.prisma.io/), and [PostgreSQL](https://www.postgresql.org/). This project features secure user authentication, complete movie management, and a personalized watchlist tracking system.

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.18+-lightgrey.svg)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-282A36.svg)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1.svg)](https://www.postgresql.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#️-database-schema)

---

## 🚀 Features

- **User Authentication:** Secure registration, login, and session handling using JSON Web Tokens (JWT) and password hashing with `bcryptjs`.
- **Movie Management:** Full CRUD operations to manage movie titles, overviews, release years, genres, runtimes, and poster URLs.
- **Personal Watchlist:** Add movies to a personal list, track watch status (`PLANNED`, `WATCHING`, `COMPLETED`, `DROPPED`), leave custom ratings, and add notes.
- **Data Validation:** Request payload validation using [Zod](https://zod.dev/).

---

## ⚙️ Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Authentication:** [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) & [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- **Validation:** [Zod](https://zod.dev/)

---

## 📁 Project Structure

```text
movie-watchlist-backend9/
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   └── server.js
├── .env
├── package.json
└── README.md