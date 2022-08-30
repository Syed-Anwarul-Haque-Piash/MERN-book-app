import React from "react";
import Button from "@mui/material/Button";
import './Book.css';
import {Link} from 'react-router-dom';

const Book = (props) => {
  const { _id,name, author, description, price,image } = props.book;
  return (
    <div className="card">
      <img src={image} alt="" />
      <p>{name}</p>
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      
      <h2>BDT {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`} variant="text">Update</Button>
      <Button variant="outlined" color="error">
        Delete
      </Button>
    </div>
  );
};

export default Book;
