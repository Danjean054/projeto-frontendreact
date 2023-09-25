import './App.css';
import Filters from './components/Filters/Filters';
import Home from './components/ProductList/Home/Home';
import {Cart}  from './components/ShoppingCart/Cart/Cart';
import productsList from './assets/productsList';
import { useState } from 'react';






function App() {
const [product, setProduct] = useState([])
const [minFilter, setMinFilter] = useState() 
const [maxFilter, setMaxFilter] = useState()
const [searchFilter, setSearchFilter] = useState("") 
const [cart, setCart] = useState([])



const addToCart = (productToAdd) => {
  const productInCart = cart.find(product => product.id === productToAdd.id);

  if (productInCart) {
    const updatedCart = cart.map(product => {
      if (product.id === productToAdd.id) {
        return { ...product, quantity: (product.quantity || 1) + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  } else {
    setCart([...cart, { ...productToAdd, quantity: 1 }]);
  }
};

  return (
  <div style={{ display: 'flex' }}> 
  <Filters 
  minFilter = {minFilter}
  maxFilter = {maxFilter}
  searchFilter = {searchFilter}
  product = {product}
  setMinFilter = {setMinFilter}
  setMaxFilter = {setMaxFilter}
  setSearchFilter = {setSearchFilter}
  setProduct = {setProduct}
  />
  <Home 
  productsList = {productsList}
  cart = {cart}
  product = {product}
  addToCart = {addToCart}
  searchFilter = {searchFilter}
  maxFilter = {maxFilter}
  setCart = {setCart}
  minFilter = {minFilter}
  />
  
  <Cart
  cart = {cart}
  setCart = {setCart}
  /> 
  
  </div>
  
  );
}

export default App