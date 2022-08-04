import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
// import React, { Component, useEffect, useState } from "react";


import Header from "./component/Header/Header";
import Navigation from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";

//pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";

const api= process.env.REACT_APP_MY_API_KEY
console.log(api)



function App() {

  return (
        // new api method on router v5
        <BrowserRouter>
        <Router>
        <div>
          {/* <Navigation /> */}
          <Header/>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/mac" exact component={Mac} />
            <Route path="/iphone" exact component={Iphone} />
            <Route path="/iphone/:pid" exact component={Productpage} />
            <Route path="/" component={Four04} />
          </Switch>
          <Footer />
          
        </div>
      </Router>
      </BrowserRouter>






    // // old way
    // <div>
    // <Header />
    // <Main/>
    // <Footer />
    // </div>
  );
}
export default App;
