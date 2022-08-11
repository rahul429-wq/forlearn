import React, { useEffect, useState } from "react";
import "../comps/Card.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    console.log(data);
    setPosts(data);
  };

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
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="posts">
      <h1>POSTS</h1>
      <br />
      <br />
      <Link to="/postDetail">
        <div className="addbtn">
          <i className="fa fa-add"></i>
          <p>ADD POSTS</p>
        </div>
      </Link>

      <br />
      <ul>
        {posts.map((post) => (
          <div className="card" key={post._id}>
            <div className="deletebtn" onClick={(e) => handledelete(post._id)}>
              <i className="fa fa-trash"> </i>
            </div>

            <div className="left-card">
              <img src={post.image} alt={post.alt} />
            </div>
            <div className="right-card">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a href={post.source}>Link</a>
              <p>{post.createdAt}</p>
              <Link className="updatebtn" to={`/postUpdate/${post._id}`}>
                Update
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
