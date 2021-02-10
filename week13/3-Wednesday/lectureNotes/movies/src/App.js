import React, { useEffect } from 'react'

const App = () => {

  useEffect(() => {

    const getMovieData = async () => {
      
      let apiCall = await fetch (`http://www.omdbapi.com/?s=batman&apikey=3e97afb3`)
      let data = await apiCall.json();

      setMovieData(data.Search)
    }

    getMovieData();

    console.log(movieData);

  }, [])

  const handleClicked = () => {
    console.log('Clicked');
  }
  

  return (
    <>
      {movieData.map(movieObj => {
        return (<button onClick={handleClicked}>
          <h3>{movieObj.Title}</h3>
          <img height='150px' src={movieObj.Poster} alt=""/>
        </button>)
      }
      )}
    </>
  )
}

export default App

