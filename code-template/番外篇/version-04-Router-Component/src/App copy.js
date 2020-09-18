import React from 'react';
// import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home'
import About from './Views/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Router>
        <Header />
        {/* <HelloWorld /> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
