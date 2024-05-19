import PicCard from "./PicCard";
import picCards from "../utils/mockData";

let picCardsNew = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    rating: 4.5,
    timming: "38 min",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
    rating: 3.2,
    timming: "28 min",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
    rating: 4.1,
    timming: "15 min",
  },
];

const Body = () => {
  return (
    <div className="main-body">
      <hr />
      <div className="filter">
        <button
          onClick={() => {
            picCardsNew = picCardsNew.filter((pic) => pic.rating > 4);
            console.log(picCardsNew);
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
