import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import VideoInfo from "./components/Videos/VideoInfo";
import Home from "./components/layout/Home";

import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
