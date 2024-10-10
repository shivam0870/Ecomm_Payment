import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Link } from 'react-router-dom';

const ShowProduct = () => {
  const { products } = useContext(AppContext);
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">


        <div className="row container d-flex justify-content-center align-items-center my-5">

          {products?.map((product) => {
           return (<div key={product._id} className='my-2 col-md-4 d-flex justify-content-center align-items-center'>
            <div className="card bg-dark text-light text-center" style={{ width: "18rem" }}>
              <Link to={`/product/${product._id}`} className='d-flex justify-content-center align-items-center p-3'>
                <img src={product.imgSrc} className="card-img-top" alt="..." style={{ width: '280px', height: '200px', borderRadius: '15', border: '2px solid blue' }} />
              </Link>

              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-price">{"₹"} {product.price}</h5>
                  <div className="d-flex">
                    <button className="btn btn-primary mx-2">Buy Now</button>
                    <button className="btn btn-warning mx-2">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>)})}
        </div>
      </div>
    </>
  )
}

export default ShowProduct;