import React, { useEffect, useState } from 'react'
import AppContext from './AppContext'
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AppState = (props) => {

  const url = "http://localhost:1000/api";
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filteredData,setFilteredData] = useState(products);
  const [user,setUser] = useState();
  const[cart,setCart] = useState();
  useEffect(() => {

    const fetchProducts = async () => {
      const api = await axios.get(`${url}/product/all`, {
        headers: {
          'Content-Type': 'Application/json',
        },
        withCredentials: true
      });
      // console.log(api);
      setProducts(api.data.products);
      setFilteredData(api.data.products)
      userProfile();
    };
    fetchProducts();
  }, [token])

useEffect(() => {
  let lstoken = localStorage.getItem('token');
  if(lstoken) 
  {
    setToken(lstoken);
    setIsAuthenticated(true);
  }

// setToken(localStorage.getItem('token'));
},[])


  // Register user

  // const register = async (name,email,password) => {
  //   const api = await axios.post(`${url}/user/register`, {
  //     name,email,password
  //   }, {
  //     headers: {
  //       'Content-Type': 'Application/json',
  //     },
  //     withCredentials: true
  //   });
  //   // alert(api.data.message);
  // //  console.log("user register",api);
  // toast.success(api.data.message, {
  //   position: "top-right",
  //   autoClose: 2000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "dark",
  //   transition: Bounce,
  //   });
  // return api.data;  
  // }

  // const register = async (name, email, password) => {
  //   try {
  //     const api = await axios.post(`${url}/user/register`, {
  //       name, email, password
  //     }, {
  //       headers: {
  //         'Content-Type': 'Application/json',
  //       },
  //       withCredentials: true
  //     });
  //     toast.success(api.data.message, {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       transition: Bounce,
  //     });
  //     return api.data;
  //   } catch (error) {
  //     if (error.response.status === 400) {
  //       toast.error('Email already registered', {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "dark",
  //         transition: Bounce,
  //       });
  //     } else {
  //       console.error(error);
  //     }
  //   }
  // }

  const register = async (name, email, password) => {
    try {
      const api = await axios.post(`${url}/user/register`, {
        name, email, password
      }, {
        headers: {
          'Content-Type': 'Application/json',
        },
        withCredentials: true
      });
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return { success: true, message: api.data.message };
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Email already registered', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        return { success: false, message: 'Email already registered' };
      } else {
        console.error(error);
        return { success: false, message: 'An error occurred' };
      }
    }
  }



  // const login = async (email, password) => {
  //   try {
  //     const api = await axios.post(`${url}/user/login`, {
  //       email, password
  //     }, {
  //       headers: {
  //         'Content-Type': 'Application/json',
  //       },
  //       withCredentials: true
  //     });
  //     toast.success(api.data.message, {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       transition: Bounce,
  //     });
  //     return { success: true, message: api.data.message };
  //   } catch (error) {
  //     if (error.response.status === 400) {
  //       toast.error(error.response.data.message, {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "dark",
  //         transition: Bounce,
  //       });
  //       return { success: false, message: error.response.data.message };
  //     } else {
  //       console.error(error);
  //       return { success: false, message: 'An error occurred' };
  //     }
  //   }
  // }

  // const login = async (email, password) => {
  //   const api = await axios.post(
  //     `${url}/user/login`,
  //     { email, password },
  //     {
  //       headers: {
  //         "Content-Type": "Application/json",
  //       },
  //       withCredentials: true,
  //     }
  //   );
  //   // alert(api.data.message)
  //   toast.success(api.data.message, {
  //     position: "top-right",
  //     autoClose: 1500,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //     transition: Bounce,
  //   });

  //   console.log("user login ",api.data)
  //   localStorage.setItem("token", api.data.token);
  //   return api.data;
  // };


  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    // alert(api.data.message)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    // console.log("user login ",api.data)
    console.log(api);
    setToken(api.data.token);
    localStorage.setItem('token', api.data.token);
    setIsAuthenticated(true);

    return api.data;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(" ");
    localStorage.removeItem('token');
    toast.success("Logout Successful", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }


  const userProfile = async () => {
    const api = await axios.get(`${url}/user/profile`, {
      headers: {
        'Content-Type': 'Application/json',
        'Auth' : token
      },
      withCredentials: true
    });
   console.log("User profile",api.data);
   setUser(api.data.user);
  }

  const addToCart = async (productId, title, price, qty, imgSrc) => {
    // console.log("product id = ", productId);
    const api = await axios.post(
      `${url}/cart/add`,
      { productId, title, price, qty, imgSrc },
      {
        headers: {
          "Content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
    // setReload(!reload);
    //  console.log("my cart ",api)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };


  //user cart 

  const userCart = async (productId, title, price, qty, imgSrc) => {
    // console.log("product id = ", productId);
    const api = await axios.get(
      `${url}/cart/user`,
      { productId, title, price, qty, imgSrc },
      {
        headers: {
          "Content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
    // setReload(!reload);
    //  console.log("my cart ",api)
  
    setUser
  };


  return (
    <AppContext.Provider value={{
      // adding the state here
      products, register, login, url, token, setIsAuthenticated, isAuthenticated, filteredData,setFilteredData, logout,user, addToCart
    }}>{props.children}</AppContext.Provider>
  )
}

export default AppState