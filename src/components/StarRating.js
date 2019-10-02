import React from 'react';
import Star from './Star';
import {emptyStatement} from '@babel/types';

function StarRating (props) {
  console.log(props.max)
  const stars =[];
  for (let i = 0; i < props.max; i++) {
    if 
    stars.push(<Star />)
  }
  console.log("MY STARS ==>", stars)
  return (
    stars.map( (star) => (
      <h1>{star}</h1>
    ))
  )
}

export default StarRating;
