import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AnimUpdate = () => {
  const { id } = useParams();
  console.log(id);
  let navigate = useNavigate();
  const [flag, setflag] = useState(false);
  const [err, seterr] = useState("");

  const [post, setPosts] = useState({
    title: "",
    image: "",
    link: "",
  });

  const fetchPosts = async () => {
    const res = await fetch(`/api/anims/${id}`);
    const data = await res.json();
    console.log(data);

    setPosts({
      title: data.title,
      image: data.image,
      link: data.link,
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
      const res = await axios.patch(`/api/anims/${id}`, post);
      console.log(res);
      setflag(true);
      navigate("/anims", { replace: true });
    } catch (err) {
      seterr(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <form id="form" onSubmit={handlesubmit}>
        <h1>Update Anims</h1>
        <input
          type="text"
          name="title"
          value={post.title}
          placeholder="langname"
          onChange={(e) => onTextChangeField(e)}
        />
        <input
          type="text"
          name="image"
          value={post.image}
          placeholder="logo"
          onChange={(e) => onTextChangeField(e)}
        />
        <input
          type="text"
          name="link"
          value={post.link}
          placeholder="Title"
          onChange={(e) => onTextChangeField(e)}
        />

        <button>Submit </button>
        <p>{flag ? "submitted" : err}</p>
      </form>
    </div>
  );
};

export default AnimUpdate;
