import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import "./App.css";

import Navbar from "./comps/Navbar";
import Langs from "./pages/Langs";
import Anims from "./pages/Anims";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import Error from "./pages/Error";
import AnimDetail from "./pages/AnimDetail";
import LangDetail from "./pages/LangDetail";
import Postupdate from "./pages/Postupdate";
import LangUpdate from "./pages/LangUpdate";
import AnimUpdate from "./pages/AnimUpdate";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="left">
          <Navbar />
        </div>
        <div className="right">
          <Routes>
            {/* posts */}
            <Route path="/" element={<Posts />} />
            <Route path="/postUpdate/:id" exact element={<Postupdate />} />
            <Route path="/postDetail/" exact element={<PostDetail />} />
            {/* lang */}
            <Route path="/langs" element={<Langs />} />
            <Route path="/langDetail/" element={<LangDetail />} />
            <Route path="/langUpdate/:id" element={<LangUpdate />} />
            {/* anims */}
            <Route path="/anims" element={<Anims />} />
            <Route path="/animsDetail/" element={<AnimDetail />} />
            <Route path="/animUpdate/:id" element={<AnimUpdate />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
