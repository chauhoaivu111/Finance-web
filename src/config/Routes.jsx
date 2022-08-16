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
import More from "../page/moreabout/more/More";
import PlanTicket from "../page/moreabout/planticket/PlanTicket";
import Ticket from "../page/moreabout/ticket/Ticket";
import Finance from "../page/moreabout/finance/Finance";
import { UserContext } from "../UserContext";
import { useState } from "react";
import ProductDetail from "../page/productdetail/ProductDetail";

import FinanceNew from "../page/morenew/finance/Finance";
import PlanTicketNew from "../page/morenew/planticket/PlanTicket";
import TicketNew from "../page/morenew/ticket/Ticket";
import MoreNew from '../page/morenew/more/More';

import User from "../page/user/User";



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
        <Route path="/New" component={News} />
        <Route path="/Consult" component={Consult} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/LoanService" component={LoanService} />
        <Route path="/Post/detail/:id" component={PostDetail} />
        <Route path="/Product/Detail/:id" component={ProductDetail}/>


        
        
        <Route path='/Services/Finance' component={Finance}/>

        <Route path = '/Services/Planticket' component={PlanTicket}/>
        <Route path = '/Services/Ticket' component={Ticket}/>
        <Route path = '/Services/More' component={More}/>


        <Route path="/Posts/Finance"component={FinanceNew}/>

        <Route path = "/Posts/Planticket"component={PlanTicketNew}/>
        <Route path ="/Posts/Ticket" component={TicketNew}/>
        <Route path = "/Posts/More" component={MoreNew}/>
        <Route path = '/User' component={User}/>

        
        

        <Footer />
        </UserContext.Provider>
      </>
    </Switch>
  );
};

export default Routers;
