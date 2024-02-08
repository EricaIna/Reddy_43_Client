import "./GenrePage.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ListPage from "../ListPage";
import GenreImage from "../../Components/GenreImage";
import { useLocation } from "react-router-dom";

const GenrePage = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);

  //check url location of page
  const location = useLocation();

  const handleGenreClick = (genre) => {
    setSelectedGenre((prevSelectedGenres) => {
      // Check if the genre is already in the selected genres list
      if (prevSelectedGenres.includes(genre.name)) {
        // If it is, return a new array excluding this genre
        return prevSelectedGenres.filter((g) => g !== genre.name);
      } else {
        // If it's not, add this genre to the array
        return [...prevSelectedGenres, genre.name];
      }
    });
    console.log(`Genre clicked: ${genre.name}`);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "http://moviestest-env-4.eba-t3hctzae.eu-west-2.elasticbeanstalk.com/genres"
        );
        const data = await response.json();
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
    <div className="genrePage-wrapper">
      <h1 className="genre-h1">Genres</h1>
      <div className="genre-page">
        <motion.ul className="genre-list-container">
          <motion.div
            className="genre-list"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            {genres.length > 0 &&
              genres.map((genre, index) => {
                const isSelected = selectedGenre.includes(genre.name);
                return (
                  <motion.li
                    key={genre.id}
                    className={
                      isSelected ? "genre-item-selected" : "genre-item"
                    }
                    onClick={() => handleGenreClick(genre)}
                    whileTap={{ scale: 0.9, duration: 0.2 }}
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      ease: "easeOut",
                      duration: 3.0,
                      delay: index * 0.1,
                    }}
                  >
                    <GenreImage genreName={genre.name} />
                  </motion.li>
                );
              })}
          </motion.div>
        </motion.ul>

        {location.pathname !== "/genre" && (
          <ListPage selectedGenre={selectedGenre} />
        )}
      </div>
    </div>
  );
};

export default GenrePage;
