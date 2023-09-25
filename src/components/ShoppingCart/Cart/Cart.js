import { Divs } from "./CartStyle"
import Card from "./Card/Card"

export const Cart = (
  {
  cart,
  setCart,
}) => {
  console.log(cart.value);
  return (
    <>
    <Divs> 
    <h1>Cart</h1>
    <ul>
      {cart.map((item) =>( 
        <li key={item.id}>
          <Card
          produto = {item}
          setCart = {setCart}
          cart = {cart}
          />
        </li>
      ))}
      <p>Valor total {setCart.value} </p>
    </ul>
   
    </Divs>
    </>
  )
}
