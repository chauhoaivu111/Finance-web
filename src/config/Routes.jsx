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

const Routers = () => {
  return (
    <Switch>
      <>
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

        <Footer />
      </>
    </Switch>
  );
};

export default Routers;
