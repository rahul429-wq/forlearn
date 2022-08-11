import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
// import { useHistory } from "react-router-dom"; // version 5.2.0
import { useNavigate } from "react-router-dom";

const LangDetail = () => {
  // const { id } = useParams();
  let navigate = useNavigate();

  const [flag, setflag] = useState(false);
  const [err, seterr] = useState("");

  const [post, setPost] = useState({
    title: "",
    langname: "",
    logo: "",
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
      const res = await axios.post("/api/langs", post);
      console.log(res);
      setflag(true);
      navigate("/langs", { replace: true });
    } catch (err) {
      seterr(err.message);
      console.log(err);
    }
  };

  return (
    <form id="form" onSubmit={handlesubmit}>
      <h1>ADD Lang</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={(e) => onTextChangeField(e)}
      />

      <input
        type="text"
        name="langname"
        placeholder="langname"
        onChange={(e) => onTextChangeField(e)}
      />

      <input
        type="text"
        name="logo"
        placeholder="logo"
        onChange={(e) => onTextChangeField(e)}
      />

      <button>Submit </button>
      <p>{flag ? "submitted" : err}</p>
    </form>
  );
};

export default LangDetail;
