import React, { createContext, useContext, useEffect, useReducer } from "react";
import { actionTypes } from "../state/ProductState/actionTypes";
import {
  initialState,
  productReducer,
} from "../state/ProductState/ProductReducer";

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
      )
      .catch(() => dispatch({ type: actionTypes.FETCHING_ERROR }));
  }, []);

  console.log(state);

  const value = {
    state,
    dispatch,
  };

  return (
    <div>
      <PRODUCT_CONTEXT.Provider value={value}>
        {children}
      </PRODUCT_CONTEXT.Provider>
    </div>
  );
};

export const useProduct = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
