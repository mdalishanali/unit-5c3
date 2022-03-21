import { BookCard } from "../BookCard/BookCard";
import styled from "styled-components";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    getReq();
  }, []);

  const getReq = () => {
    axios.get("http://localhost:8080/books").then(({ data }) => {
      setBook(data);
    });
  };
  // get all books when user lands on the page
  // populate them as mentioned below

  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;
  const Sort = () => {
    let da = book.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    setBook(da);
  };
  
  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons handleSort={Sort} />
      <button
        onClick={() => {
          Sort();
        }}
      >
        {" "}
        Wow
      </button>
      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {console.log(book)}

        {book.map((ele) => {
          return (
            <BookCard
              id={ele.id}
              imageUrl={ele.imageUrl}
              title={ele.title}
              price={ele.price}
            />
          );
        })}
        
      </Main>
    </div>
  );
};
