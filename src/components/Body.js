import PicCard from "./PicCard";
import picCards from "../utils/mockData";

const Body = () => {
  return (
    <div className="main-body">
      <hr />
      <div className="search">Search</div>
      <div className="pic-container">
        {picCards.map((picCards) => (
          <PicCard key={picCards.id} picCard={picCards} />
        ))}
      </div>
    </div>
  );
};
export default Body;
