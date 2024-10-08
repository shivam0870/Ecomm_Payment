import React, { useEffect, useState } from 'react'
import AppContext from './AppContext'
import axios from 'axios';

const AppState = (props) => {

  const url = "http://localhost:1000/api";
  const [products, setProducts] = useState([]);
  useEffect(() => {

    const fetchProducts = async () => {
      const api = await axios.get(`${url}/product/all`, {
        headers: {
          'Content-Type': 'Application/json',
        },
        withCredentials: true
      });
      console.log(api);
      setProducts(api.data.products);
    }
    fetchProducts();
  }, [])
  return (
    <AppContext.Provider value={{
      // adding the state here
      products
    }}>{props.children}</AppContext.Provider>
  )
}

export default AppState