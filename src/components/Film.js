import React from 'react';

function Film({children, url}){
  return(
    <li>
      <a href={url}><h4>{children}</h4></a>
    </li>
  )
}

export default Film;
