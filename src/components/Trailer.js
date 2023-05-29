import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

export default function Trailer({movies}) {
    const params=useParams();
    const movie=movies.filter((el)=>el.name==params.name)[0]
    console.log(movie)
  return (
    <div>
        
        <iframe  width="100%" height="455" style={{marginTop:"30px"}} src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
        <h1 style={{textAlign:"center"}}> {movie.name} </h1>
        <ReactStars classNames="star"
              count={5}
              edit={false}
              size={24}
              activeColor="#ffd700"
              value={movie.rating}
             
           />
        <h5 style={{textAlign:"center"}} > {movie.description} </h5>
        
        
    </div>
  )
}
