import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  function onAdd(product, quantity) {
    const checkProductInCart = cartItems.find(
      (items) => items._id === product._id
    );
    setTotalPrice((prevPrice) => prevPrice + product.price * quantity);
    setTotalQuantities((prevQty) => prevQty + quantity);

    if (checkProductInCart) {
      const updateCartItems = cartItems.map((cartProd) => {
        if (cartProd._id === product._id)
          return {
            ...cartProd,
            quantity: cartProd.quantity.quantity
          };
      });
      setCartItems(updateCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} colocado en el carrito`);
  }
  function onRemove(product) {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id != product._id);

    setTotalPrice(prevTotal => prevTotal - foundProduct.price * foundProduct.quantity)
    setTotalQuantities( prev => prev - foundProduct.quantity)
    setCartItems(newCartItems)
  }

  function toggleCartItemQuantity(id, value) {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);

    if (value == "inc") {
      setCartItems((prevCart) => {
        const sumQty = prevCart.map((element) => {
          if (element._id === id) {
            console.log("this passes 1");
            return { ...element, quantity: element.quantity + 1 };
          } else {
            console.log("thispases 2");
            return { ...element };
          }
        });
        return sumQty;
      });

      setTotalPrice((prev) => prev + foundProduct.price);
      setTotalQuantities((prev) => prev + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems((prevItems) => {
          const changeQty = prevItems.map((item) => {
            if (item._id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return { ...item };
            }
          });
          return changeQty;
        });
        setTotalPrice((prev) => prev - foundProduct.price);
        setTotalQuantities((prev) => prev - 1);
      }
    }
  }

  console.log(cartItems);

  function incQty() {
    setQty((prevQty) => prevQty + 1);
  }

  function decQty() {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  return useContext(Context);
};
