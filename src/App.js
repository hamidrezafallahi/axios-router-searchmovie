import React, { Component } from 'react';
import Home from './components/Home'
import Aboutus from './components/Aboutus'
// import Movies from './components/Movies'
// import Aside from './components/Aside'
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
      names: [],
      Genres: [],
    }


    axios.get('./json/movies.json')
      .then(res => this.setState({ movies: res.data }))
      .then(console.log(this.state.movies))

  }
  setnames = ()=>{
    var movienames=[]; 
      this.state.movies.map(movie=>movienames.push(movie.Title))
       this.setState({names:movienames})
  }
  changehandler=(event)=>{
    const temple=this.state.movies;
    const targets = [];
    for (let index = 0; index < this.state.movies.length; index++) {
      const element = this.state.movies[index];
      if (element.Title.includes(event.target.value)){targets.push(element)}
    }
    console.log(temple)
    console.log(targets)
    this.setState({movies:targets})

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
              <aside className="aside">
                <label htmlFor="">Search here :</label><br />
                <input type="text" onFocus={this.setnames} onChange={this.changehandler}/>
                <hr />
                <div className="filters">
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                </div>
              </aside>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default App;