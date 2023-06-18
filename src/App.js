import React, { Component } from 'react';
import Home from './components/home'
import Aboutus from './components/About-us'
import Account from './components/Account'
import Products from './components/Products'
import Product from './components/product'
import Notfound from './components/notfound'
import './styles/mystyle.scss'

import { Link, Routes, Route,Navigate } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <>
        <div className='c1'>
          <button><Link to='/'>Home</Link></button>
          <button><Link to='aboutus'>About us</Link></button>
          <button><Link to='account'>Account</Link></button>
          <button><Link to='products'>Products</Link></button>

        </div>
        <div className='c2'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="aboutus"element={<Aboutus name='hamidreza'/>}></Route>
            <Route path="account"element={<Account />}></Route>
            <Route path="products"element={<Products />}></Route>
            <Route path="products/:id" element={<Product/>}></Route>
            <Route path="notfound"element={<Notfound />}></Route>

            <Route path="/*"element={<Navigate to="/notfound" />}></Route>

            
          </Routes>
        </div>
      </>
    );
  }
}



export default App;


