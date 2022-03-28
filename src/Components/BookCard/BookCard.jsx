import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({ id, imageUrl, title, price }) => {
  return (
    <Link to={`bookdetailspage/${id}`}>
      {
        <div className="bookCard">
          <img src={imageUrl} alt="" />
          <h2 className="title">{title}</h2>
          <h2 className="price">{price}</h2>
        </div>
      }
    </Link>
  );
};
