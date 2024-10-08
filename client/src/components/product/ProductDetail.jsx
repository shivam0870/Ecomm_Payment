import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetail = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    console.log(id);
    const url = "http://localhost:1000/api";

    useEffect(() => {

        const fetchProducts = async () => {
            const api = await axios.get(`${url}/product/${id}`, {
                headers: {
                    'Content-Type': 'Application/json',
                },
                withCredentials: true
            });
            // console.log(api);
            // setProducts(api.data.products);

        }
        fetchProducts();
    }, [])
    return (
        <div>ProductDetail = {id}</div>
    )
}

export default ProductDetail