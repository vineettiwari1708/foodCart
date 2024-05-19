import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="menu-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const picCards = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f",
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97",
  },
  {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14",
  },
  {
    albumId: 1,
    id: 11,
    title: "nihil at amet non hic quia qui",
    url: "https://via.placeholder.com/600/1ee8a4",
    thumbnailUrl: "https://via.placeholder.com/150/1ee8a4",
  },
  {
    albumId: 1,
    id: 12,
    title:
      "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    url: "https://via.placeholder.com/600/66b7d2",
    thumbnailUrl: "https://via.placeholder.com/150/66b7d2",
  },
  {
    albumId: 1,
    id: 13,
    title: "repudiandae iusto deleniti rerum",
    url: "https://via.placeholder.com/600/197d29",
    thumbnailUrl: "https://via.placeholder.com/150/197d29",
  },
  {
    albumId: 1,
    id: 14,
    title: "est necessitatibus architecto ut laborum",
    url: "https://via.placeholder.com/600/61a65",
    thumbnailUrl: "https://via.placeholder.com/150/61a65",
  },
  {
    albumId: 1,
    id: 15,
    title: "harum dicta similique quis dolore earum ex qui",
    url: "https://via.placeholder.com/600/f9cee5",
    thumbnailUrl: "https://via.placeholder.com/150/f9cee5",
  },
  {
    albumId: 1,
    id: 16,
    title: "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
    url: "https://via.placeholder.com/600/fdf73e",
    thumbnailUrl: "https://via.placeholder.com/150/fdf73e",
  },
  {
    albumId: 1,
    id: 17,
    title: "natus doloribus necessitatibus ipsa",
    url: "https://via.placeholder.com/600/9c184f",
    thumbnailUrl: "https://via.placeholder.com/150/9c184f",
  },
  {
    albumId: 1,
    id: 18,
    title: "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    url: "https://via.placeholder.com/600/1fe46f",
    thumbnailUrl: "https://via.placeholder.com/150/1fe46f",
  },
  {
    albumId: 1,
    id: 19,
    title: "perferendis nesciunt eveniet et optio a",
    url: "https://via.placeholder.com/600/56acb2",
    thumbnailUrl: "https://via.placeholder.com/150/56acb2",
  },
  {
    albumId: 1,
    id: 20,
    title:
      "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    url: "https://via.placeholder.com/600/8985dc",
    thumbnailUrl: "https://via.placeholder.com/150/8985dc",
  },
  {
    albumId: 1,
    id: 21,
    title: "ad et natus qui",
    url: "https://via.placeholder.com/600/5e12c6",
    thumbnailUrl: "https://via.placeholder.com/150/5e12c6",
  },
  {
    albumId: 1,
    id: 22,
    title: "et ea illo et sit voluptas animi blanditiis porro",
    url: "https://via.placeholder.com/600/45601a",
    thumbnailUrl: "https://via.placeholder.com/150/45601a",
  },
  {
    albumId: 1,
    id: 23,
    title: "harum velit vero totam",
    url: "https://via.placeholder.com/600/e924e6",
    thumbnailUrl: "https://via.placeholder.com/150/e924e6",
  },
  {
    albumId: 1,
    id: 24,
    title: "beatae officiis ut aut",
    url: "https://via.placeholder.com/600/8f209a",
    thumbnailUrl: "https://via.placeholder.com/150/8f209a",
  },
  {
    albumId: 1,
    id: 25,
    title: "facere non quis fuga fugit vitae",
    url: "https://via.placeholder.com/600/5e3a73",
    thumbnailUrl: "https://via.placeholder.com/150/5e3a73",
  },
  {
    albumId: 1,
    id: 26,
    title: "asperiores nobis voluptate qui",
    url: "https://via.placeholder.com/600/474645",
    thumbnailUrl: "https://via.placeholder.com/150/474645",
  },
  {
    albumId: 1,
    id: 27,
    title: "sit asperiores est quos quis nisi veniam error",
    url: "https://via.placeholder.com/600/c984bf",
    thumbnailUrl: "https://via.placeholder.com/150/c984bf",
  },
  {
    albumId: 1,
    id: 28,
    title: "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
    url: "https://via.placeholder.com/600/392537",
    thumbnailUrl: "https://via.placeholder.com/150/392537",
  },
  {
    albumId: 1,
    id: 29,
    title: "aut ipsam quos ab placeat omnis",
    url: "https://via.placeholder.com/600/602b9e",
    thumbnailUrl: "https://via.placeholder.com/150/602b9e",
  },
  {
    albumId: 1,
    id: 30,
    title: "odio enim voluptatem quidem aut nihil illum",
    url: "https://via.placeholder.com/600/372c93",
    thumbnailUrl: "https://via.placeholder.com/150/372c93",
  },
];

const PicCard = (props) => {
  const { picCard } = props;
  return (
    <div className="pic-card">
      <img className="img-container" src={picCard.url}></img>
      <h3>{picCard.title}</h3>
      <h4>{picCard.id}</h4>
      <h4>4.5 stars</h4>
      <h4>38 mins</h4>
    </div>
  );
};
const Pic = () => {
  return (
    <div className="main-body">
      <div className="search">Search</div>

      <div className="pic-container">
        <PicCard picCard={picCards[0]} />
        <PicCard picCard={picCards[1]} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Pic />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
