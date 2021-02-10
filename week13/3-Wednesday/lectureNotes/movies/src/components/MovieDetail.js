import React from 'react';

export default function MovieDetail(props) {
    console.log(props.movie);

    const {Poster, Title, Year, Rated, Director} = props.movie

  return (
    <>
    <h3>{Title}</h3>
    <img src={Poster} height="200px" alt=""/>
    <div>{Director}</div>
    <div>{Rated}</div>
    <div>{Year}</div>
    </>
  );
}
