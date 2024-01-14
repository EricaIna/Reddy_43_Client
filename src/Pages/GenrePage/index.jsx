import "./GenrePage.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ListPage from "../ListPage";

// IMG IMPORT

import ActionImg from "../../assets/Action.png";
import AdventureImg from "../../assets/Adventure.png";
import AnimationImg from "../../assets/Animation.png";
import ComedyImg from "../../assets/Comedy.png";
import CrimeImg from "../../assets/Crime.png";
import DocumentaryImg from "../../assets/Documentary.png";
import DramaImg from "../../assets/Drama.png";
import FamilyImg from "../../assets/Family.png";
import FantasyImg from "../../assets/Fantasy.png";
import HistoryImg from "../../assets/History.png";
import HorrorImg from "../../assets/Horror.png";
import MusicImg from "../../assets/Music.png";
import MysteryImg from "../../assets/Mystery.png";
import RomanceImg from "../../assets/Romance.png";
import ScienceFictionImg from "../../assets/Science-Fiction.png";
import TV_MovieImg from "../../assets/TV.Movie.png";
import ThrillerImg from "../../assets/Thriller.png";
import WarImg from "../../assets/War.png";
import WesternImg from "../../assets/Western.png";

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

  //  get genre image
  const getGenreImageUrl = (genreName) => {
    const formattedGenreName = genreName.replace(/ /g, "_");
    const imageMap = {
      Action: ActionImg,
      Adventure: AdventureImg,
      Animation: AnimationImg,
      Comedy: ComedyImg,
      Crime: CrimeImg,
      Documentary: DocumentaryImg,
      Drama: DramaImg,
      Family: FamilyImg,
      Fantasy: FantasyImg,
      History: HistoryImg,
      Horror: HorrorImg,
      Music: MusicImg,
      Mystery: MysteryImg,
      Romance: RomanceImg,
      Science_Fiction: ScienceFictionImg,
      TV_Movie: TV_MovieImg,
      Thriller: ThrillerImg,
      War: WarImg,
      Western: WesternImg,
    };

    return imageMap[genreName];
  };

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
                <motion.img
                  src={getGenreImageUrl(genre.name)}
                  alt={genre.name}
                  className="genre-img"
                  whileHover={{
                    scale: 1.1,
                    cursor: "pointer",
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.li>
            ))}
        </motion.div>
      </motion.ul>
      <ListPage selectedGenre={selectedGenre} />
    </div>
  );
};

export default GenrePage;
