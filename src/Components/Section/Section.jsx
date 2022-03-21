import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  const { a } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    getReq();
  }, []);
  const getReq = () => {
    axios.get(`http://localhost:8080/books/section:${a}`).then(({ data }) => {
      setBook(data);
      console.log(data);
    });
  };

  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const Main = styled.div`
    /* Same as Homepage */
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
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
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
      </Main>
    </>
  );
};
