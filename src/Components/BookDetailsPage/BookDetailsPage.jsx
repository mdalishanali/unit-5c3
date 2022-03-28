import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookDetailsPage = () => {
  const [data, setData] = useState([]);

  const { ID } = useParams();

  useEffect(() => {
    getReq();
  }, []);

  const getReq = () => {
    axios.get(`http://localhost:8080/books/${ID}`).then(({ data }) => {
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
          <li></li>
        </ul>
      </div>
    </>
  );
};
