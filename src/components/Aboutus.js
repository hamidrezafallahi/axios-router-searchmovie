import React, { Component } from 'react'
// import style from '../styles/style.module.css'
// import '../styles/mystyle.scss'
import '../styles/card.css'
import pic1 from "../images/5.jpg"
import pic2 from "../images/8.jpg"
import pic3 from "../images/6.jpg"
class Aboutus extends Component {


    clickHandler = (event) => {
        let circle = document.querySelector(".color-option");
        let target = event.target
        if (target.classList.contains("circle")) {
            circle.querySelector('.active').classList.remove('active')
            target.classList.add("active");
            document.querySelector(".main-images .active").classList.remove('active');
            document.querySelector(`.main-images .${target.id}`).classList.add('active');
        }

    }


    render() {


        return (
            <>
                <div className="product-card">
                    <div className="logo-cart">
                        <i className='fas fa-wallet'></i>

                    </div>
                    <div className="main-images">
                        <img id="blue" className="blue active" src={pic1} alt="blue" />
                        <img id="pink" className="pink " src={pic2} alt="pink" />
                        <img id="yellow" className="yellow " src={pic3} alt="yellow" />
                    </div>
                    <div className="card-details">
                        <span className="product-name">Movies</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates hic reprehenderit rerum!</p>
                    </div>
                    <div className="color-price">
                        <div className="color-option">
                            <span className="color">color : </span>
                            <div className="circles">
                                <span onClick={this.clickHandler} className="circle blue active" id="blue"></span>
                                <span onClick={this.clickHandler} className="circle pink " id="pink"></span>
                                <span onClick={this.clickHandler} className="circle yellow " id="yellow"></span>
                            </div>
                        </div>
                        <div className="price">
                            <span className="price-num">$12</span>
                            <span className="price-letter">twelve dollars only</span>

                        </div>
                    </div>
                    <div className="button">
                        <div className="button-layer"></div>
                        <button >add to card</button>
                    </div>
                </div>

            </>
        )
    }
}
export default Aboutus;