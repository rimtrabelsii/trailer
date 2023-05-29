import React from "react";



// import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function MovieCard({ el }) {
  return (
<div>
<Link  style={{textDecoration:"none"}} to = {`/trailer/${el.name}`}>
<article className="card">
  <img
    className="card__background"
    src={el.posterurl}  alt="error "
    width="1920"
    height="2193"
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title"> {el.name} </h2>
      <ReactStars
              count={5}
              edit={false}
              size={24}
              activeColor="#ffd700"
              value={el.rating}
             
           />
      <p className="card__description">
       {el.description} </p>
       
   
      
  
    <button class="card__button">Read more</button>
  </div>
  </div>
</article>
</Link>
</div>
)
}




  
   
      

export default MovieCard;
