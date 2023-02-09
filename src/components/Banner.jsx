import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/Banner.css'
import '../App.css'
import requests from '../requests';
import instance from '../axios';



function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
          
        ]
      );
      return request;
    }

    fetchData();

  }, []);

  // console.log(movie);
  

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header className='banner' style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
          
    }}>
          
    <div className='banner__contents'>
        <h1 className='banner__title'>{ movie?.title || movie?.name || movie?.original_name}</h1>
              <div className='banner__buttons'>
                  <button className='btn banner__button'>Play</button>
                  <button className='btn banner__button'>My List</button>
              </div>
        <p className='banner__description'>{truncate(movie?.overview, 150)}</p>
          </div>
          <div className='banner--fadeBottom' />
          
    </header>
  )
}

export default Banner