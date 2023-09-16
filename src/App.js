import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import VideoInfo from "./components/Videos/VideoInfo";

import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <VideoInfo />
      </div>
    </Fragment>
  );
}

export default App;
