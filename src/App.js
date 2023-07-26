import React from "react";
import Movies from "./components/Movies";
import "./index.css";
import loveAndBasketball from "./img/love-and-basketball-1-1024.0.jpg"

function App() {
  const movies = [
    {
      name: "Love & Basketball",
      year: "2000",
      rating: "PG-13",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7zyjpsVEAt9OYPOGKLBD_3XZMS8jVW9OSXpIVbtUGuHLyzfmw"
    },

    {
      name: "Dragon Ball Super: Broly",
      year: "2018",
      rating: "PG",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pb6euKoLxZrRukhNBJuJz-1iUQSXWwLkLhPqS2gT2Nljmjiu",
    },
    {
      name: "Spirited Away",
      year: "2001",
      rating: "PG",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqTEoJUOlTg4HakvM3SHU0a7a3gFpAQ1HrBL21fBAr1OYOeocP",
    },
    {
      name: "Akira",
      year: "1988",
      rating: "R",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6wAMW5FJ6P0VRoUxwiQY8lMRfI_k3icJXVIeYe6ofcI2zRVF",
    },
    {
      name: "Wolf Children",
      year: "2012",
      rating: "PG",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9eyBTSQKT046KVw4JqBy_lC-LSgkW5eZ382LHYMFw31zSIA4",
    },
  ];

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;