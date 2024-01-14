import "./GenrePage.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ListPage from "../ListPage";
import GenreImage from "../../Components/GenreImage";

const GenrePage = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    console.log(`Genre clicked: ${genre.name}`);
    // Add any action you want to perform on click
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("http://localhost:4000/genres");
        const data = await response.json();
        console.log(data);

        if (Array.isArray(data)) {
          setGenres(data);
        } else {
          console.error("Invalid data format: Data should be an array.");
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  //List animation
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="genre-page">
      <h1 className="genre-h1">Genres</h1>

      <motion.ul className="genre-list-container">
        <motion.div
          className="genre-list"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {genres.length > 0 &&
            genres.map((genre, index) => (
              <motion.li
                key={genre.id}
                className="genre-item"
                onClick={() => handleGenreClick(genre)}
                whileTap={{ scale: 0.9, duration: 0.2 }}
                variants={item}
                initial="hidden"
                animate="visible"
                transition={{
                  ease: "easeOut",
                  duration: 1.5,
                  delay: index * 0.1,
                }}
              >
                <GenreImage genreName={genre.name} />
              </motion.li>
            ))}
        </motion.div>
      </motion.ul>

      <ListPage selectedGenre={selectedGenre} />
    </div>
  );
};

export default GenrePage;
