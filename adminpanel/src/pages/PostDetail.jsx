import React, { useState, useEffect } from "react";
import axios from "axios";

// import { useHistory } from "react-router-dom"; // version 5.2.0
import { useNavigate, Link } from "react-router-dom";

const PostDetail = () => {
  let navigate = useNavigate();
  const [flag, setflag] = useState(false);
  const [err, seterr] = useState("");

  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    source: "",
    alt: "",
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
      const res = await axios.post("/api/posts", post);
      console.log(res);
      setflag(true);
      navigate("/", { replace: true });
    } catch (err) {
      seterr(err.message);
      console.log(err);
    }
  };

  return (
    <form id="form" onSubmit={handlesubmit}>
      <h1>ADD POST</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={(e) => onTextChangeField(e)}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
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
        name="source"
        placeholder="src"
        onChange={(e) => onTextChangeField(e)}
      />
      <input
        type="text"
        name="alt"
        placeholder="alt"
        onChange={(e) => onTextChangeField(e)}
      />
      <button style={{ background: "#256D85", color: "white" }}>Submit </button>
      <br />
      <>
        <Link
          style={{
            width: "100%",
            padding: "10px",
            color: "white",
            background: "gray",
          }}
          to="/"
        >
          {" "}
          Back
        </Link>
      </>
      <p>{flag ? "submitted" : err}</p>
    </form>
  );
};

export default PostDetail;
