import React, { Component } from 'react'
// import style from '../styles/style.module.css'
import '../styles/mystyle.scss'
import Slide1 from "../images/slider/slider-1.jpg"
import Slide2 from "../images/slider/slider-2.jpg"
import Slide3 from "../images/slider/slider-3.jpg"
import thumb1 from "../images/slider/thumb-1.jpg"
import thumb2 from "../images/slider/thumb-2.jpg"
import thumb3 from "../images/slider/thumb-3.jpg"
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slidenumber: 0
        }
    }
    slidehandler = (event) => {
        var images = document.getElementsByClassName("slide-images");
        for(let i = 0 ;i<images.length;i++){images[i].setAttribute("style","display:none")}
        this.setState({ slidenumber: Number(event.target.id) });
        images[this.state.slidenumber].setAttribute("style", "display:block")
    }

    render() {
        return (
            <div>
                <div className="slider">
                    <div className="slides" onLoad={this.autoslider}>
                        <img className="slide-images" src={Slide1} alt="" />
                        <img className="slide-images" src={Slide2} alt="" />
                        <img className="slide-images" src={Slide3} alt="" />
                        <ul className='indicate'>
                            <li ><img id="0" onClick={this.slidehandler} src={thumb1} alt="" /></li>
                            <li ><img id="1" onClick={this.slidehandler} src={thumb2} alt="" /></li>
                            <li ><img id="2" onClick={this.slidehandler} src={thumb3} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;