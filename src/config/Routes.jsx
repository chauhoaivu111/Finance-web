import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../page/home/Home";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Service from "../page/service/Service";
import About from "../page/about/About";
import News from "../page/news/News";
import Login from "../page/login/Login";
import SignUp from "../page/signup/SignUp";
import Consult from "../page/consult/Consult";
import LoanService from "../page/loanservice/LoanService";
import PostDetail from "../page/postdetail/PostDetail";
import Version from "../page/moreabout/version/Version";
import Mission from "../page/moreabout/mission/Mission";
import Value from "../page/moreabout/value/Value";
import Manager from "../page/moreabout/manager/Manager";
import { UserContext } from "../UserContext";
import { useState } from "react";



const Routers = () => {

  const [valueUser,setValueUser] = useState(false)


  return (
    <Switch>


      <>
      <UserContext.Provider value={{valueUser,setValueUser}}>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/Service" component={Service} />
        <Route path="/About" component={About} />
        <Route path="/News" component={News} />
        <Route path="/Consult" component={Consult} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/LoanService" component={LoanService} />
        <Route path="/Post/detail/:id" component={PostDetail} />

        
        
        <Route path='/Abouts/Version' component={Version}/>

        <Route path = '/Abouts/Mission' component={Mission}/>
        <Route path = '/Abouts/Value' component={Value}/>
        <Route path = '/Abouts/Manager' component={Manager}/>

        
        

        <Footer />
        </UserContext.Provider>
      </>
    </Switch>
  );
};

export default Routers;
