import React from "react";
import { Redirect, Route,  Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
// import Socialplatform from "./components/Socialplatform";
import Footer from './components/Footer';
import CovidApi from './components/CovidApi';


const Apps = () => {
    return ( 
        <>
            <Navbar/>
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path ="/about" component={About} />
                <Route exact path ="/service" component={Service} />
                <Route exact path ="/contact" component={Contact} />
                <Route exact path='/covidApi' component={CovidApi} />
                {/* <Route exact path ="/Socialplatform" component={Socialplatform} /> */}
                <Redirect to="/" />
            </Switch>
            <Footer/>
        </>
    )
}
export default Apps;
