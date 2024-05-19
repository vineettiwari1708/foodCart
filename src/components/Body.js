import PicCard from "./PicCard";
import picCards from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [picCardsNew, setPicCardsNew] = useState(picCards);
  return (
    <div className="main-body">
      <hr />
      <div className="filter">
        <button
          onClick={() => {
            const filteredpicCards = picCardsNew.filter(
              (pic) => pic.rating > 4
            );
            setPicCardsNew(filteredpicCards);
          }}
          className="filter-btn"
        >
          Top Rated Pic
        </button>
      </div>
      <div className="pic-container">
        {picCardsNew.map((picCards) => (
          <PicCard key={picCards.id} picCard={picCards} />
        ))}
      </div>
    </div>
  );
};
export default Body;
