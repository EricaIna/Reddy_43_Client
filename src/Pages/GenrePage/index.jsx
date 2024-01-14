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

  return (
    <div className="genre-page container">
      <h1>Genres</h1>
      <motion.div
        className="genre-list-container slider_wrapper"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div className="genre-list inner_crousel">
          {genres.length > 0 &&
            genres.map((genre) => (
              <motion.div
                key={genre.id}
                className="genre-item"
                onClick={() => handleGenreClick(genre)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* <span
                    style={{
                      color: "#eee",
                      lineHeight: 1,
                      fontSize: "4vw",
                      marginBottom: "2vw",
                      display: "inline-block",
                      position: "relative",
                    }}
                  >
                    {genre.name}
                  </span> */}
                <img
                  src={getGenreImageUrl(genre.name)}
                  alt={genre.name}
                  className="genre-img"
                />
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
      <ListPage selectedGenre={selectedGenre} />
    </div>
  );
};

export default GenrePage;
