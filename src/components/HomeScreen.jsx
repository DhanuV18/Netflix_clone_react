import React from 'react'
import '../css/HomeScreen.css'
import Navbar from './Navbar'
import Banner from './Banner'
import requests from '../requests'
import Row from './Row'
import '../css/Row.css'


function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}  />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}  />
          
    </div>
  )
}

export default HomeScreen