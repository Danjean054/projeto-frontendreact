import { useState } from "react";

import {
  Conteiner,
  Header,
  DivFather,
  DivSon,
  BoxHeader,
  Box,
  Img,
  Button
} from "./HomeStyle";

const Home = (
  {
  productsList,
  cart,
  setCart,
  minFilter,
  maxFilter,
  searchFilter,
}) => {
  const [ordination, setOrdination] = useState("");
  const addCart = (product) => {
    const newProduct = cart.find((item) => item.id === product.id);
    if (newProduct === undefined) {
      setCart([...cart, { ...product, amount: 1 }]);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...newProduct, amount: newProduct.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };
  console.log(ordination);
  return (
    <>
      <Conteiner>
        <Header>
          <span>Quantidade de produtos:</span>

          <BoxHeader>
            <span>Ordenação:</span>
            <select
              value={ordination}
              onChange={(e) => setOrdination(e.target.value)}
              name=""
              id=""
            >
              <option value="">Selecione</option>
              <option value="cres">Cresente</option>
              <option value="dec">Decresente</option>
            </select>
          </BoxHeader>
        </Header>
        <DivFather>
          <DivSon>
            <Box>
              {productsList
                .filter((item) =>
                  item.name.toLowerCase().includes(searchFilter.toLowerCase())
                )
                .filter((item) => {
                  if (minFilter > 0) {
                    return item.value >= minFilter;
                  } else {
                    return item;
                  }
                }).filter((item) =>{
                  if (maxFilter > 0) {
                    return item.value <= maxFilter
                  }else{
                    return item
                  }

                })
                .sort((a, b) => {
                  if (ordination === "dec") {
                    return b.name.localeCompare(a.name);
                  } else {
                    return a.name.localeCompare(b.name);
                  }
                })
              
               
                .map((item) => (
                  <div key={item.id}>
                    <Img src={item.imageUrl} alt={item.name} />
                    <p>Nome do produto: {item.name}</p>
                    <p>Valor: {item.value}</p>
                    <Button onClick={() => addCart(item)}>
                      Adicionar ao carrinho
                    </Button>
                  </div>
                ))}
            </Box>
          </DivSon>
        </DivFather>
      </Conteiner>
    </>
  );
};

export default Home;
