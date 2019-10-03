import React from 'react';
import Star from './Star';


function StarRating (props) {
  console.log(props.max)
  const stars =[];
  for (let i = 0; i < props.max; i++) {
    if (i < props.current){
    stars.push(<Star style={{color: "red"}} />)
    } else {
    stars.push(<Star style={{color: "black" }}/>)
    }
  }
  console.log("MY STARS ==>", stars)
  return (
     stars.map( (star) => ( 
      <div className = "item">
      <div className="ui avatar image">
      {star}
      </div>
      </div>
    ))
  )
}

export default StarRating;
