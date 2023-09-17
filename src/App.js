import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import AnimeInfo from "./components/Anime/AnimeInfo";
import AnimeList from "./components/Anime/AnimeList";

import AnimeState from "./context/AnimeState";

import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <AnimeState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/list' element={<AnimeList />} />
              <Route path='/info/:id' element={<AnimeInfo />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </AnimeState>
  );
}

export default App;
