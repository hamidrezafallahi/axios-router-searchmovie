import React, { Component } from 'react';
import Home from './components/Home'
import Aboutus from './components/Aboutus'
// import Movies from './components/Movies'
 import Aside from './components/Aside'
import Movie from './components/Movie'
import style from './styles/style.module.css'
import './styles/mystyle.scss'
import axios from "axios";
import { Link, Routes, Route } from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      temple: [],
      Genres: [],
      Genres2:[],
      btngenre:[],
    }
    axios.get('./json/movies.json')
    .then(res => this.setState({ movies: res.data, temple: res.data }))
  }
  search = (event) => {
    const {movies}=this.state;
    const targets = [];
    for (let index = 0; index < movies.length; index++) {
        const element = movies[index];
        if (element.Title.toLowerCase().includes(event.target.value)) { targets.push(element) }
    }
    this.setState({ movies: targets })
}
setter=()=>{
    this.setState({ movies: this.state.temple})
}
/////////////////////////////////////////////////////////////////////////////////////
setgenres=()=>{
  let array1 = this.genrestoarray();
  let array2 = this.clearwhitespace(array1);
  let array3 = this.filter(array2);
  this.setState({ Genres:array3})
}

genrestoarray = () => {
  let str = "";
  var array = [];
  for (let index = 0; index < this.state.temple.length; index++) {
      const element = this.state.temple[index].Genre;
      str += ("," + element);
      array = str.split(",");
      array.shift();
  }
  return array;
}
clearwhitespace = (array) => {
  let array2 = [];
  for (let index = 0; index < array.length; index++) {
      const element = array[index];
      const element2 = element.trim();
      array2.push(element2)
  }
  return array2;
}
filter = (array) => {
  let array2 = array.filter((c, index) => {
      return array.indexOf(c) === index;
  });
  return array2;
}
btngenre=(genre)=>{
  var target=[];
  this.state.temple.map((movie)=>{
    let array = movie.Genre.split(",")
    var arr1 = this.clearwhitespace(array)
     if(arr1.includes(genre)){
       target.push(movie)
      }
    })
    this.setState({movies:target})  
}
  render() {

    return (
      <>
        <div>
          <div className="container">
            <div className="buttonlist">
              <ul className={style.list1}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Aboutus'>About Us</Link></li>
                <li><Link to='/Movies'> MOVIES</Link></li>
              </ul>
            </div>
            <hr />
            <div className="content">
              <main>
                <Routes>
                  <Route path="/" element={<Home slidehandler={this.slidehandler} />}></Route>
                  <Route path="/Aboutus" element={<Aboutus movies={this.state.movies} />}></Route>
                  <Route path="/Movies" element={<div className="movie-container">{this.state.movies.map(film => <Movie key={film.Id} poster={film.Poster} title={film.Title} year={film.Year} director={film.Director} country={film.Country} genre={film.Genre} />)}</div>}></Route>
                </Routes>
              </main>
              <Aside className="aside"search = {this.search} setter={this.setter} Genres={this.state.Genres} btngenre={this.btngenre} setgenres={this.setgenres} />
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default App;