import React, { useEffect, useState } from 'react'
import MovieDetail from './components/MovieDetail';

const App = () => {

  const [movieData, setMovieData] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {

    const getMovieData = async () => {
      
      let apiCall = await fetch (`http://www.omdbapi.com/?s=batman&apikey=3e97afb3`)
      let data = await apiCall.json();

      setMovieData(data.Search)
    }

    getMovieData();

    console.log(movieData);

  }, [])

  const handleClicked = async () => {
    console.log('Clicked');

    const apiData = await fetch `http://www.omdbapi.com/?i=${movieData.imdbID}&apikey=74b5f590`
    const data = await apiData.json(); 
    setCurrentMovie(data);
  }
  

  return (
    <>
      {movieData.map(movieObj => {
        return (<button onClick={handleClicked} key={movieObj.imdbID}>
          <h3>{movieObj.Title}</h3>
          <img height='150px' src={movieObj.Poster} alt=""/>
        </button>)
      })}

      <MovieDetail movie={currentMovie}/>
    </>
  )
}

export default App

