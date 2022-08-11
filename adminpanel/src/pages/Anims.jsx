import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Anims = () => {
  const [Anims, setAnims] = useState([]);
  const fetchAnims = async () => {
    const res = await fetch("/api/anims");
    const data = await res.json();
    console.log(data);
    setAnims(data);
  };

  useEffect(() => {
    fetchAnims();
  }, []);
  const handledelete = (e) => {
    // e.preventDefault();
    console.log(e);
    axios
      .delete(`/api/anims/${e}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="posts">
      <h1>Anims</h1>
      <br />
      <br />
      <br />

      <Link to="/animsDetail">
        <div className="addbtn">
          <i className="fa fa-add"></i>
          <p>ADD POSTS</p>
        </div>
      </Link>
      <br />
      <br />

      <ul>
        {Anims.map((Anims) => (
          <div className="card" key={Anims._id}>
            <div className="deletebtn" onClick={(e) => handledelete(Anims._id)}>
              <i className="fa fa-trash"></i>
            </div>
            <div
              className="left-card"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={Anims.image}
                alt={Anims.title}
              />
            </div>
            <div className="right-card" style={{ paddingTop: "20px" }}>
              <h2>{Anims.title}</h2>
              <a href={Anims.link}>{Anims.link}</a>
              <br />
              <Link className="updatebtn" to={`/animUpdate/${Anims._id}`}>
                Update
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Anims;
