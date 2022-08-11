import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Langs = () => {
  const [Langs, setLangs] = useState([]);
  const fetchLangs = async () => {
    const res = await fetch("/api/langs");
    const data = await res.json();
    console.log(data);
    setLangs(data);
  };

  useEffect(() => {
    fetchLangs();
  }, []);

  const handledelete = (e) => {
    // e.preventDefault();
    console.log(e);
    axios
      .delete(`/api/langs/${e}`)
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
      <h1>Langs</h1>
      <Link to="/langDetail">
        <div className="addbtn">
          <i className="fa fa-add"></i>
          <p>ADD Langs</p>
        </div>
      </Link>
      <br />
      <br />
      <br />
      <ul>
        {Langs.map((lang) => (
          <div className="card" key={lang._id}>
            <div className="deletebtn" onClick={(e) => handledelete(lang._id)}>
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
              <i style={{ fontSize: "5rem" }} className={lang.logo}></i>
            </div>
            <div className="right-card" style={{ paddingTop: "20px" }}>
              <h2>{lang.title}</h2>
              <p>{lang.langname}</p>
              <Link className="updatebtn" to={`/langUpdate/${lang._id}`}>Update</Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Langs;
