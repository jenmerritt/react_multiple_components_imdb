import React, {Component} from 'react';
import FilmList from '../components/FilmList'
import './FilmBox.css';

class FilmBox extends Component{

  constructor(props){
    super(props)
    this.state={
      films: [
        {
          id: 1,
          title: "Onward",
          url: "https://www.imdb.com/title/tt7146812"
        },
        {
          id: 2,
          title: "Military Wives",
          url: "https://www.imdb.com/title/tt8951692"
        },
        {
          id: 3,
          title: "Mulan",
          url: "https://www.imdb.com/title/tt4566758"
        },
        {
          id: 4,
          title: "No Time To Die",
          url: "https://www.imdb.com/title/tt2382320"
        },
        {
          id: 5,
          title: "Peter Rabbit 2",
          url: "https://www.imdb.com/title/tt8376234"
        }
      ]
    }
  }


  render(){
    return(
      <section id="film-box">
        <h1>Upcoming Film Releases for UK</h1>
        <hr />
        <FilmList films={this.state.films} />
        <a href="https://www.imdb.com/calendar/?region=gb"><button class="view-more">View more upcoming releases...</button></a>
      </section>
    )
  }

}

export default FilmBox;
