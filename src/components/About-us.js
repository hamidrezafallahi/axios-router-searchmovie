import React, { Component } from 'react'
import '../styles/mystyle.scss'

class Aboutus extends Component {
    render() {
        return (
            <div className='aboutus'>
                <h3>Aboutus</h3>
                <h5>{this.props.name}</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, fugit.</p>
            </div>
        )
    }
}

export default Aboutus;