import React from 'react'
import "./App.css";
import Banner from './Banner';
import Nav from './Nav';
import Requests from './Requests';
import Row from './Row';

 function App() {
  return (
    <div className="app1">
  
      <Nav />
      <Banner />
      {/* <h1>NetFlix Project</h1> */}
      <Row title="NETFIX ORIGNALS"fetchUrl={Requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />

    </div>
  )
}
export default App;

// My key from Netflix movie
//96a306e8e5746a7f8ce5c8acde287c26
// videos https://www.youtube.com/c/SonnySangha