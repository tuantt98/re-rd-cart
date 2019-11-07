import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Message from './components/Message'
import Cart from './components/Cart'
import ProductContainer from './containers/ProductContainer'
import CartContainer from './containers/CartContainer'

class App extends React.Component {
  render(){
    return (
      <div>

      {/* Header */}
      <Header></Header>
      
      <main id="mainContainer">
        <div className="container">

          {/* Products */}
          {/* <Products></Products> */}
          <ProductContainer></ProductContainer>
          {/* Message */}
          <Message></Message>

          {/* Cart */}
          {/* <Cart></Cart> */}
          <CartContainer></CartContainer>
          
        </div>
      </main>
      
      {/* Footer */}
      <Footer></Footer>
    </div>
    
    );
  }
}

export default App;
