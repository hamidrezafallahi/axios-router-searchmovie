import React, { Component } from 'react'
 class Movie extends Component {
    render() {
        const{poster,title,country,genre,year,director}=this.props;
        return (
            <>
                <div className="movie-cart">
                        <div className="poster-container">
                            <img src={poster} alt="" />
                        </div>
                        <div className="movie-info">
                            <h3>{title}</h3>
                            <div className="author">
                                <span>{director}</span>
                                <span>{year}</span>
                                <span>{country}</span>
                            </div>
                            <p>{genre}</p>
                        </div>
                    </div>
            </>
        )
    }
}
export default Movie;