import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/layout/Home";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Episode from "./components/Videos/Episode";
import AnimeInfo from "./components/Anime/AnimeInfo";
import AnimeList from "./components/Anime/AnimeList";
import AnimeRecent from "./components/Anime/AnimeRecent";

import AlertState from "./context/alert/AlertState";
import AnimeState from "./context/AnimeState";
// eslint-disable-next-line
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <AnimeState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/list' element={<AnimeList />} />
                <Route path='/recent' element={<AnimeRecent />} />
                <Route path='/info/:id' element={<AnimeInfo />} />
                <Route path='/episode/:id' element={<Episode />} />
              </Routes>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </AnimeState>
  );
}

export default App;
