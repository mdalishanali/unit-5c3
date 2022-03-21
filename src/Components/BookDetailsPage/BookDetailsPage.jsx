import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookDetailsPage = () => {
  const [data, setData] = useState([]);
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const { id } = useParams();

  useEffect(() => {
    getReq();
  }, []);
  const getReq = () => {
    axios.get(`http://localhost:8080/books/${id}`).then(({ data }) => {
      setData(data);
      console.log(data);
    });
  };

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{data.title}</h2>
        <img className="image" src={data.imageUrl} alt="#" />
        <div className="author">{data.author}</div>
        <div className="description">{data.description}</div>
        <div className="price">{data.price}</div>
        <div className="section">{data.section}</div>
        <div className="isbnNumber">{data.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}

          {/* {data.reviews.map((ele) => {
            return <li>{ele}</li>;
          })} */}
        </ul>
      </div>
    </>
  );
};
