import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  const { section } = useParams();
  console.log(section);
  const [book, setBook] = useState([]);

  useEffect(() => {
    getReq();
  }, []);
  const getReq = () => {
    axios.get(`http://localhost:8080/books`).then(({ data }) => {
      setBook(data);
      console.log(data);
    });
  };



  const Main = styled.div`
    /* Same as Homepage */
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
    <>
      <h2 style={{ textAlign: "center" }}>{<h1>{section}</h1>}</h2>
      <SortAndFilterButtons
        handleSort={SortByName}
        DescName={DescName}
        SortByPrice={SortByPrice}
        DescPrice={DescPrice}
      />

      <Main className="sectionContainer">
        {book
          .filter((ele) => ele.section.includes(section))
          .map((ele) => {
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
    </>
  );
};
