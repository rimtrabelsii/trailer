import React from 'react'
import MovieCard from './MovieCard';
import Addmovie from './Addmovie';

function Movielist({movies,setmovies, text,rate}) {
  return (  
    
    <div>
    <div className='add1' marginTop="25px">
      <Addmovie movies={movies} setmovies={setmovies}  />
    </div>
    <div style={{backgroundColor:"#66a2f038" ,marginTop:"-30px"}} >
      <div  >
         <h5 style={{marginTop:"30px",color:"blue"}}>ONLINE STREAMING</h5>
      
<h2 style={{color:"blue"}}>Upcoming Movies</h2>
<div className='butt'  >
<button variant="outline-success" className='but' >Movies</button> 
<button variant="outline-success" className='but'>Action</button>
<button variant="outline-success" className='but'>Comedy</button>
<button variant="outline-success" className='but'>Horror</button>
</div>
</div>
    <div className='hello' style={{backgroundImage:"https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/bg/ucm_bg_shape.png"}}>
        {movies.filter((el)=> el.name.toLowerCase().includes(text.toLowerCase()) && el.rating >= rate).map((el)=>
         <MovieCard el={el} />).reverse() }
    </div>
    </div>
    </div>
  )
}

export default Movielist