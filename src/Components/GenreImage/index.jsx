// GenreImage.js
import React from "react";
import { motion } from "framer-motion";
import "../../Pages/GenrePage/GenrePage.css";

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

export const GenreImage = ({ genreName }) => {
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

  const imageUrl = imageMap[formattedGenreName];

  return (
    <motion.img
      src={imageUrl}
      alt={genreName}
      className="genre-img"
      whileHover={{
        scale: 1.1,
        y: -10,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
        },
      }}
    />
  );
};

export default GenreImage;
