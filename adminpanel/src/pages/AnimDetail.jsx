import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
// import { useHistory } from "react-router-dom"; // version 5.2.0
import { useNavigate } from "react-router-dom";

const AnimDetail = () => {
  // const { id } = useParams();
  let navigate = useNavigate();

  const [flag, setflag] = useState(false);
  const [err, seterr] = useState("");

  const [post, setPost] = useState({
    title: "",
    image: "",
    link: "",
  });

  function onTextChangeField(e) {
    setflag(false);
    // console.log(post);
    setPost({ ...post, [e.target.name]: e.target.value });
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    try {
      const res = await axios.post("/api/anims", post);
      console.log(res);
      setflag(true);
      navigate("/anims", { replace: true });
    } catch (err) {
      seterr(err.message);
      console.log(err);
    }
  };

  return (
    <form id="form" onSubmit={handlesubmit}>
      <h1>ADD Anim</h1>

      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={(e) => onTextChangeField(e)}
      />

      <input
        type="text"
        name="image"
        placeholder="image"
        onChange={(e) => onTextChangeField(e)}
      />

      <input
        type="text"
        name="link"
        placeholder="link"
        onChange={(e) => onTextChangeField(e)}
      />

      <button>Submit </button>
      <p>{flag ? "submitted" : err}</p>
    </form>
  );
};

export default AnimDetail;
