import React, {Component} from "react";
import './App.css';
import  "bootstrap/dist/css/bootstrap.min.css";
// import {FaHome} from 'react-icons/fa';
// import styled from 'styled-components';

import Home from "./pages/HomePage.js";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage.js";
import Products from "./pages/Productspage";
import Contact from "./pages/ContactPage.js";
import SingleProduct from "./pages/SingleProductPage.js";
import Default from "./pages/Default.js";

import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return (
      <>
        {/* navbar , sidebar , cart */}
        <Navbar/>
        <Sidebar/>
        <SideCart/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/product/:id" component={SingleProduct}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Footer/>
      </>
    );
  }
}
// const color='#f15025';
// const Button = styled.button`
// color:white;
// background:${color};

// font-size:${props =>(props.large ? "3rem": "1rem")};`
// ;

export default App;
