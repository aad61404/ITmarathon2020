import React from 'react';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {

    return (

      <div>
        <Header />
          <HelloWorld />
        <Footer />
      </div>
    )
  }

export default App;