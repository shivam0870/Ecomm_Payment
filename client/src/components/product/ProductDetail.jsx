import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct';

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
            // console.log(api.data.product.category);
            setProduct(api.data.product);
            
        }
        fetchProducts();
    }, [id])
    return (
        <>
        <div className="container my-5 text-center" style={{
            display : 'flex',
            justifyContent : 'space-evenly',
            alignItems : 'center'
        }}>
            <div className="left">
                <img src={product?.imgSrc} style={{width : '350px' , height : '250px' , borderRadius : '10px', border : '2px solid yellow' }} alt="" />
            </div>
            <div className="right">
                <h1>{product?.title}</h1>
                {/* <h3>{product.category}</h3> */}
                
                <p>{product?.description}</p>
                <h1>{"₹"}{" "}{product?.price}</h1>
                {/* <h3>{product.category}</h3> */}

                <div className='my-5'>
                    <button className='btn btn-danger mx-3' style={{fontWeight : 'bold'}}>Buy Now</button>
                    <button className='btn btn-warning' style={{fontWeight : 'bold'}}>Add To Cart</button>
                </div>
            </div>
        </div>
        <RelatedProduct category = {product?.category}/>
        </>
    )
}

export default ProductDetail