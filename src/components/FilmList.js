import React, {Fragment} from 'react';
import Film from './Film';
import './FilmList.css';

function FilmList({films}){

  const filmComponents  = films.map( film => {
    return (
      <Film
      key={film.id}
      url={film.url}
      >
      {film.title}
      </Film>
    )})

    return (
      <Fragment>
        <ul className="film-list">
          {filmComponents}
        </ul>
      </Fragment>
    )

  }
  export default FilmList;
