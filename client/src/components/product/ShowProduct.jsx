import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const ShowProduct = () => {
  const { products } = useContext(AppContext);
  return (
    <>
    <div className="row container">
      
      {products?.map((product) => <div key={product._id} className='my-2 col-md-4'>
        <div className="card bg-dark text-light text-center" style={{ width: "18rem" }}>
          <div className='d-flex justify-content-center align-items-center p-3'>
            <img src={product.imgSrc} className="card-img-top" alt="..." style={{ width: '280px', height: '200px', borderRadius: '15', border: '2px solid blue' }} />
          </div>

          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>)}
      </div>
    </>
  )
}

export default ShowProduct