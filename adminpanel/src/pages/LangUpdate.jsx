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
    langname: "",
    logo: "",
    title: "",
  });

  const fetchPosts = async () => {
    const res = await fetch(`/api/langs/${id}`);
    const data = await res.json();
    console.log(data);

    setPosts({
      langname: data.langname,
      logo: data.logo,
      title: data.title,
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
      const res = await axios.patch(`/api/langs/${id}`, post);
      console.log(res);
      setflag(true);
      navigate("/langs", { replace: true });
    } catch (err) {
      seterr(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <form id="form" onSubmit={handlesubmit}>
        <h1>Update Lang</h1>
        <input
          type="text"
          name="langname"
          value={post.langname}
          placeholder="langname"
          onChange={(e) => onTextChangeField(e)}
        />
        <input
          type="text"
          name="logo"
          value={post.logo}
          placeholder="logo"
          onChange={(e) => onTextChangeField(e)}
        />
        <input
          type="text"
          name="title"
          value={post.title}
          placeholder="Title"
          onChange={(e) => onTextChangeField(e)}
        />

        <button>Submit </button>
        <p>{flag ? "submitted" : err}</p>
      </form>
    </div>
  );
};

export default Postupdate;
