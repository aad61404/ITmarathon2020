import React from 'react';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <HelloWorld />
        <ul>
          <li>
            <Link to="/" className="text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500">
              About
            </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-2xl">This is the home page</h1>
          </Route>
          <Route path="/about">
            <h1 className="font-bold text-2xl">About us</h1>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
