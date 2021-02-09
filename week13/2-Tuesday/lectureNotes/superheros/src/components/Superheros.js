import React from 'react'
import{useState, useEffect} from 'react'

const Superheros = () => {


    useEffect(() => {

        const fetchDataAndSetSuperheros = async () => {
            const url = `http://www.omdbapi.com/?s=batman&apikey=3e97afb3`

            const response = await fetch(url)
            const data = await response.json()

            console.log(data)
            SetSuperheros(data.Search)

            fetchDataAndSetSuperheros()
        }}, [superheros])

        handleInput = (event) => {
            SetSuperheros(event.target.value)
        }

    // let filteredList = superheros.filter(superheroObj => {
    //     return superheroObj.title.toLowerCase().includes(s)
    // })
    let movieList = superheros.map((movie, imdbID) => {
        return <li key={imdbID}>
            <h4>{superhero.Title}</h4>
            <h6>{superhero.Year}</h6>
            <img src={superhero.Poster} alt=""/>
        </li>
    })
  return (
    <>
      <div class="Superheros">
          <h1>Movies</h1>
          {/* <input type="text" value={} onChange={}></input> */}
          {movieList}
      </div>
    </>
  )
}

export default Superheros

