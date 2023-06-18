import React, { Component } from 'react'
import '../styles/mystyle.scss'
import {Link} from 'react-router-dom'
class Products extends Component {
    render() {
        return (
            <div className='products'>
                <ul>
                    <li><Link to="/products/1">Product1</Link></li>
                    <li><Link to="/products/2">Product2</Link></li>
                    <li><Link to="/products/3">Product3</Link></li>
                    <li><Link to="/products/4">Product4</Link></li>
                    <li><Link to="/products/5">Product5</Link></li>
                    <li><Link to="/products/6">Product6</Link></li>
                </ul>
            </div>
        )
    }
}
export default  Products;