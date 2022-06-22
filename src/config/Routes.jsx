
import React from 'react'

import { Route, Switch } from 'react-router-dom';

import Home from '../page/home/Home';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


const Routers = () => {
  return (
    <Switch>



 
    <Route path='/' exact component = {Home}/>
   

    
  

  
</Switch>
  )
}

export default Routers