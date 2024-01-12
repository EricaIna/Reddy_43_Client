import "./GenrePage.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GenrePage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("http://localhost:4000/genres");
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const getGenreImageUrl = (genreName) => {
    const formattedGenreName = genreName.replace(/ /g, "_");
    const imageMap = {
      Action: "https://example.com/action.jpg",
      Adventure: "https://example.com/adventure.jpg",
      Animation: "https://example.com/animation.jpg",
      Comedy: "https://example.com/comedy.jpg",
      Crime: "https://example.com/crime.jpg",
      Documentary: "https://example.com/documentary.jpg",
      Drama: "https://example.com/drama.jpg",
      Family: "https://example.com/family.jpg",
      Fantasy: "https://example.com/fantasy.jpg",
      History: "https://example.com/history.jpg",
      Horror: "https://example.com/horror.jpg",
      Music: "https://example.com/music.jpg",
      Mystery: "https://example.com/mystery.jpg",
      Romance: "https://example.com/romance.jpg",
      Science_Fiction: "https://example.com/science-fiction.jpg",
      TV_Movie: "https://example.com/tv-movie.jpg",
      Thriller: "https://example.com/thriller.jpg",
      War: "https://example.com/war.jpg",
      Western: "https://example.com/western.jpg",
    };

    return imageMap[genreName] || "https://example.com/default.jpg";
  };

  return (
    <div role="genre-return" className="genre-page">
      <h1>Genres</h1>
      <ul className="genre-list">
        {genres.map((genre) => (
          <motion.li
            key={genre.id}
            className="genre-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="genre-img-cover"></div>
            <img
              src={getGenreImageUrl(genre.name)}
              alt={genre.name}
              className="genre-img"
            />
            {genre.name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default GenrePage;
