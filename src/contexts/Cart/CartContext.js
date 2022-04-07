import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const initialValue = {
  cartValue: 0,
  cartItems: [],
  wishlistItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const isExisting = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (isExisting) {
        return {
          ...state,
          cartItems: state.cartItems.map((e) =>
            e.id === action.payload ? { ...e, qty: e.qty + 1 } : e
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((e) => e.id !== action.payload.id),
      };

    case "ADD_QTY":
      //spreads the object first and then modifies the quantity.
      return {
        ...state,
        cartItems: state.cartItems.map((e) =>
          e.id === action.payload ? { ...e, qty: e.qty + 1 } : e
        ),
      };

    case "REMOVE_QTY":
      //spreads the object first and then modifies the quantity.
      //return{...state, cartItems:state.cartItems.map(e=> e.id === action.payload ? {...e,qty:e.qty-1} : e  ) }
      let updatedCartItems;
      const existingItem = state.cartItems.find((e) => e.id === action.payload);
      if (existingItem.qty === 1) {
        updatedCartItems = state.cartItems.filter(
          (e) => e.id !== action.payload
        );
      } else {
        updatedCartItems = state.cartItems.map((e) =>
          e.id === action.payload ? { ...e, qty: e.qty - 1 } : e
        );
      }
      return { ...state, cartItems: updatedCartItems };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (e) => e.id !== action.payload.id
        ),
      };

    case "REMOVE_ITEM_FROM_WISHLIST":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (e) => e.id !== action.payload.id
        ),
      };

    default:
      throw new Error('dispatch not found');
  }
};

const CartData = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialValue);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartData };
