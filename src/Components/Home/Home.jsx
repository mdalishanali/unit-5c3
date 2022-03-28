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

  const Main = styled.div`
    width: "100%";
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20%;
    width: 30%;
  `;

  const SortByName = (e) => {
    if (e.target.innerText === "sortByTitleAsc") {
      const sortedData = [...book].sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      });
      setBook(sortedData);
    }
  };

  const DescName = () => {
    const sortedData = [...book].sort((a, b) => {
      return a.title > b.title ? -1 : 1;
    });
    setBook(sortedData);
  };

  const SortByPrice = () => {
    const sortedData = [...book].sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
    setBook(sortedData);
  };

  const DescPrice = () => {
    const sortedData = [...book].sort((a, b) => {
      return a.price > b.price ? -1 : 1;
    });

    setBook(sortedData);
  };

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={SortByName}
        DescName={DescName}
        SortByPrice={SortByPrice}
        DescPrice={DescPrice}
      />


      <Main className="mainContainer">
        {book.map((ele) => {
          return (
            <BookCard
              key={ele.id}
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
