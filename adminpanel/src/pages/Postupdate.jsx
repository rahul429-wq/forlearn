import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

const Postupdate = () => {
  const { id } = useParams();
  console.log(id);
  let navigate = useNavigate();
  const [flag, setflag] = useState(false);
  const [err, seterr] = useState("");

  const [post, setPosts] = useState({
    title: "",
    description: "",
    image: "",
    source: "",
    alt: "",
  });

  const fetchPosts = async () => {
    const res = await fetch(`/api/posts/${id}`);
    const data = await res.json();
    // console.log(data.title);
    setPosts({
      title: data.title,
      description: data.description,
      image: data.image,
      source: data.source,
      alt: data.alt,
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  function onTextChangeField(e) {
    setflag(false);
    // console.log(post);
    setPosts({ ...post, [e.target.name]: e.target.value });
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    try {
      const res = await axios.patch(`/api/posts/${id}`, post);
      console.log(res);
      setflag(true);
      navigate("/", { replace: true });
    } catch (err) {
      seterr(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <form id="form" onSubmit={handlesubmit}>
        <h1>ADD POST</h1>
        <input
          type="text"
          name="title"
          value={post.title}
          placeholder="Title"
          onChange={(e) => onTextChangeField(e)}
        />
        <input
          type="text"
          name="description"
          value={post.description}
          placeholder="description"
          onChange={(e) => onTextChangeField(e)}
        />
        <input
          type="text"
          name="image"
          value={post.image}
          placeholder="image"
          onChange={(e) => onTextChangeField(e)}
        />
        <input
          type="text"
          name="source"
          value={post.source}
          placeholder="src"
          onChange={(e) => onTextChangeField(e)}
        />
        <input
          type="text"
          name="alt"
          value={post.alt}
          placeholder="alt"
          onChange={(e) => onTextChangeField(e)}
        />
        <button>Submit </button>
        <p>{flag ? "submitted" : err}</p>
      </form>
    </div>
  );
};

export default Postupdate;  
