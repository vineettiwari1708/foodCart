import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcEBQYDAgj/xABEEAABAwIDBAYGBQgLAAAAAAABAAIDBAUGERIHITFBE1FhcYGRFCJCYqGxMlJyssEjJDQ1NnOC8BYXM0NTZHSi0eHx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAMEAgH/xAAjEQEAAgICAgICAwAAAAAAAAAAAQIDEQQhEjEyQTNDEyKB/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREzQEUZhC4DiQglF5CpgJ0iaPPq1BemY60NpRRmFKAiIgIiICIiAiIgIiICIiAiKCcggFRqC1t5vtvstP01xqGxD2Wje53cOaq7EW0G5XYmltbHUcDjpGk5yyeI4eHmq48N8ncekr5a1d/iXGVrsWqN8vT1YG6CI5kHtPJVXiDGV2vchElR6PT+zTwO0jLtPEn4Le4c2bVdaG1N6ndSxO39AzfI77RPD4nuXeUWFcP2qPVHQ040/3k3rHzK0Vthxeo3KMxlydz1ChhJk7UJCD9YO/FdVhzHd1tDmxzSGupP8ADldm5v2XcfNWwauxtOjp7ePd1MXjVYew/d4yZaGjlBGWuNoB8wup5NLRq1OnMYbRO62Th7E9svzPzOcCcDN8D9z2+HPvC3YcOCrC+7NZKYirw5VO1sOpsD3ZOH2Xjn3+a8LFtErbXP6BiSCSQRnS6UDKRneOfzULYYt/bHO1q5Zjq62BvRYVtulHdKZtRQTsmiPNp4dhHIrNWf0vsREQEREBERAREQEREBajEt4ZY7NU10oDtDcmMzy1PO4DzW3VfbYZHNslFGNzX1XreDXZKmKvneKuMk+NZlWFwrau7Vz6mqkfNUSnIZZnua0dXYu5w5s6rTEysrK6SgqPpMbBlrZ3nr7k2U4fbVTyXqpYHRwvLKcEZjVzd4cB4qzaqVtNA57stw4ndvWvkciYn+PGy4sUTHnZW90xTf8ACgmtVZ0dbLxpq544ty35j2iFwdxu1xukhkuNZNO478nP9UdwG4BZuJrnJfb1LOwuMDT0UOfVnuPe47/ELUyxmMgP3am6h/Pw8Fpw4qxG5jtDJe0zrfTzyGfALIoaysopGvt9RPDLnmDE4gnw5rHV24Dw1T2mzwyywsfWVDA+WRzcyMx9EdgXvIy1x17jbzDjm89NDhTaI+SZlFiENY525lUG5DP3xy71vca4Vp8Q0bqilYwXGNn5KQbhIOOk9nUeS88Z4RpLpRPmgjayojBILRy/nlz8lr9mV9llZNY692qelJMTid7mDiO3I/A9iwTr8mLrTZG/hf7V3ZLvXYeunTwl7Hsdpmhdu1gcWuHWr7ttdFcaGnrKdwdDPGHtPYVVe1izso7pDc4GgR1ebZB74H4j5LstmD3SYPpdW8Mkka3sAeV3yNXxxkhzgiaXmjrealQpWJrEREBERAREQEREBV3tkOVmoD/mT9wqxFXe2b9S0P8AqT9wq2D8kJZvhLqcI0YoMNW6ADIiFrnfadvJ8yVUW0GqdVYtrjqzELhE0dQAH4kq6LI9slmoXsObTBGQfBUdjRjo8V3QOGRM5PmAr8SItmnaHI6xxEJsUMdXDJG/NoY4Mc7joZIQ0P8A4X6StherTJLbZZBHpmgznyHUXaJmfwyAO7nlanDFVHTXqBtT+i1GdPPv9h40nyJB8FbtFY5XkOqg0/X1e0S3RJ4OAYe8KufLbHdPFTzrpRzcgQTwzX6QoHtfRwOYQWmNpGXVkvz3eqE2y61dETqEMjmtPW3PcrO2b4qgqLdFba2YMng9SMv3a28t6cyk3pF4dca0Vt4y714zGWWap2scLHtJpZItzTMxr+5xMZ+ACuFzm5Z57gqSxHVtu+0FhpjqYKqGGMjnpcMz55rNxo3No+tK8idRCwtptKKjCNS7LfA9krT1ZHI/AlRst/ZCD97L94rL2hPazB9y1H6UYaO8kLE2W/sjD2zS/eK5/R/rv9rr1KgKVBYREQEREBERAREQFXm2T9UW/q9JP3CrDXF7U7dJXYZMsALn0komIHNu8O8gc1XDMRkiZTyxukp2YXZtww3HTOd+cURMTgTv08Wny3eCw8X4CZdbjNdIq7oXPaNcfQ6t4HHPP8FXeF79Ph+6trIgXxn1Zowfps/56leFqutFeKNlRRTslic3eOY6wRyV81bYMk2qjjmuSnjZ+fJ4pKaeSCZpbLE8tcDyI3KysJ7RH1NTT2+7U8cevTGypjcd54DUD19a5naKKL+kcnoT+kkDQ2oLd41ezv8Aradx7ly3HeDl1EcltmleRSN+2aLTivqPTKuvTOulb6Tn0wqJBJq5EOOa8aeaWnmZLC8te3mOa3OJG+mQUN7Y39NjDajLlOwAO88s1ojw5+CpSYtROerbWFT4wrK/BV2jecq2mYxvSA/Sje4NLu8Zla3ZlaX1+ImVb25w0Y1l3vkeqPmVg4IoprjcqygjYejq6KWF78s2sO4tJ8R8VbNktlDhSxdGZGtZEDJUVDt2p3Mn5LDltGLyrX3LVjib6m3qHO7XbkIbRTW9p9epl1u3+w3/ALy8lstln7IQfvpR/uKqvFN7kxBepa1zXCP6ELDxa0cPEq5MD26S14YoaeobpmLdcjepzjnl8VPLX+PBFZ9u8dvPLMx6b8KVA4qVkahERAREQEREBERAXnIxr43NcAQ4ZEEcV6KF4KoxZs6mjklq7E3pInbzSk5Oafd6x2Lh6N7qKt01XpMTQ7TNHE8xSZdW/wDEL9HFaXEOF7bf48qyACUD1J2bnt8efctuLlTEeN+4Zb8eJndWswpSYYrbG+ntscVRBJvnZP60hPv57/w6lqrrsuoZXOktdZJTEn+zlGto7jxA81y18wZe8N1BraKSSaKPe2ops2vaPeA/8X1bto1+pGhs7oKtg5yNyPmF3GO/yxW24m9fWSro6PANbHYq+01NXA9sj2y00gDvUeOOfYQvi37LIWPDrlcHyt5xwN0A+JzKw/61azIg2mAu/fOy+Swa7aVfakBlLHT02rcNDC9x7s0inJ7+jywQsnTZcKWwkCCipm+bj83FVjirFFwxZWi3WqnlNLn6kLBm+U/Wd1D5LMtOCb3iOobXYgqpYYjwMvrSuHUBwaP5yVk2SxW+yQdDb6ZsY9p/F7u8qW6Yp3vyl3q+SNa1DisHbPTSTR196LXysydHTt3hp63HmQrJAHUo5cF9KF8lrzuy9KVpGoERFw7EREBERAREQEREBERAREQfLm6u5cniDANpu8jp4mmjqTxkgAAd3t4ePFdcoyXVbTXuJc2rFvar27KJdfrXZujsh3/Ndbh7Blpsf5SKIz1POebe4dw4DwXR5Jku7Zslo1MuK4qV9Qhoy7l9IikqIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/2Q=="
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

const PicCard = () => {
  return (
    <div className="pic-card">
      <img
        className="img-container"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
      ></img>
      <h3>Krishna Restorent</h3>
      <h4>chinese, food</h4>
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
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
        <PicCard />
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
