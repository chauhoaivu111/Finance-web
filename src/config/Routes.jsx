
import React from 'react'

import { Route, Switch } from 'react-router-dom';

import Home from '../page/home/Home';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import About from '../page/about/About';


const Routers = () => {
  return (
    <Switch>

       
         <Route path="/About" component={About}/>

       
  
    
    <>
    <Header/>
    <Route path='/' exact component = {Home}/>
    <Footer/>
    </>
   
   
   
   
   

    
  

  
</Switch>
  )
}

export default Routers