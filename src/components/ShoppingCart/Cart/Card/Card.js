import React from "react";
import styled from "styled-components";
const Div = styled.div`
  width: 100%;
  border: 2px solid green;
  margin: 0 auto;
`;
const Card = ({ produto,setCart,cart }) => {
  console.log(produto);

  const del = (id) => {
    const produto = cart.find((item) => item.id === id);
 
    if (produto.amount > 1) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...produto, amount: produto.amount - 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      const novoCarro = cart.filter((item) => item.id !== id);
      setCart(novoCarro);
    }
  };
   
  return (
    
    <Div>
      <h3>{produto.titulo}</h3>
      <p>
        {produto.name}
        <span> x {produto.amount}</span>
      </p>
      <p>R$ {produto.value}</p>
      <button onClick={()=>del(produto.id)}>Remove</button>
    </Div>
    

  );
};

export default Card;
