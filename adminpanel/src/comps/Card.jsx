import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Card.css";
import axios from "axios";
const Card = ({ props }) => {
  // const navigate = useNavigate();
  // const handleclick = () => {
  //   console.log("first");
  //   navigate(`/postdetail/${props._id}`);
  // };
  const handledelete = (e) => {
    // e.preventDefault();
    console.log(e);
    axios
      .delete(`/api/posts/${e}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card">
      <div className="deletebtn" onClick={(e) => handledelete(props._id)}>
        <i className="fa fa-trash"> </i>
      </div>

      <div className="left-card">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="right-card">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.source}>Link</a>
        <p>{props.createdAt}</p>
        <Link to={`/postUpdate/${props._id}`}>Update</Link>
      </div>
    </div>
  );
};

export default Card;
