import React, {useState} from 'react';
import { Header } from './components/Header/Header';
import Cart from './containers/Cart/Cart';
import { Meals } from './containers/Meals/Meals';

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);


  const showCart = () => {
    setCartVisibility(true);
  }

  const hideCart = () => {
    setCartVisibility(false);
  }


  return (
    <>
      <Header  
        showCart={showCart}
      />

      <main>
        <Meals />

        {cartVisibility && 
          <Cart 
            close={hideCart}
            order={() => {}}
          /> 
        }


        
      </main>
      
    </>
  );
}

export default App;
