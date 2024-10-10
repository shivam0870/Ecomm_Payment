import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

const RelatedProduct = ({category}) => {
    const products = useContext(AppContext);
    console.log("sample", products.products);
    const arr = products.products;
    const [relatedProduct, setRelatedProduct] = useState([]);

    useEffect(() => {
   setRelatedProduct(arr.filter((data) => data?.category?.toLowerCase() === category?.toLowerCase()));
    }, [category,products.products]);

// useEffect(() => {
//     if (Array.isArray(products)) {
//       setRelatedProduct(products.filter((data) => data.category.toLowerCase() == category.toLowerCase()));
//     } else {
//       console.error("Products is not an array:", products);
//     }
//   }, [category, products]);
    return (
        <>
            <div className="container text-center">
                <h1>Related Product</h1>
                <div className="container d-flex justify-content-center align-items-center">


<div className="row container d-flex justify-content-center align-items-center my-5">

  {relatedProduct?.map((product) => {console.log(product._id);
   return (<div key={product._id} className='my-2 col-md-4 d-flex justify-content-center align-items-center'>
    <div className="card bg-dark text-light text-center" style={{ width: "18rem" }}>
      <Link to={`/product/${product._id}`} className='d-flex justify-content-center align-items-center p-3'>
        <img src={product.imgSrc} className="card-img-top" alt="..." style={{ width: '280px', height: '200px', borderRadius: '15', border: '2px solid blue' }} />
      </Link>

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        <div className='my-3'>
          <button className="btn btn-primary mx-3">
            {product.price} {"₹"}
          </button>

          <button className="btn btn-warning">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>)})}
</div>
</div>
            </div>
        </>
    )
}

export default RelatedProduct