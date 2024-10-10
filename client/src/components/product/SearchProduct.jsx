import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SearchProduct = () => {
    const products = useContext(AppContext);
    const arr = products.products;
    const [searchProduct, setSearchProduct] = useState([]);
    const { term } = useParams();
    const [debouncedTerm, setDebouncedTerm] = useState(term); // Local state for debounced search term

    useEffect(() => {
        // Set a timeout to update debouncedTerm after 1000ms
        const handler = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        // Cleanup the timeout if the term changes or component unmounts
        return () => {
            clearTimeout(handler);
        };
    }, [term]);

    useEffect(() => {
        // Filter products based on debounced term
        setSearchProduct(
            arr.filter((data) => data?.title?.toLowerCase().includes(debouncedTerm.toLowerCase()))
        );
    }, [debouncedTerm, products.products]);

    return (
        <>
            <div className="container text-center">
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row container d-flex justify-content-center align-items-center my-5">
                        {searchProduct?.map((product) => {
                            return (
                                <div key={product._id} className='my-2 col-md-4 d-flex justify-content-center align-items-center'>
                                    <div className="card bg-dark text-light text-center" style={{ width: "18rem" }}>
                                        <Link to={`/product/${product._id}`} className='d-flex justify-content-center align-items-center p-3'>
                                            <img src={product.imgSrc} className="card-img-top" alt="..." style={{ width: '280px', height: '200px', borderRadius: '15', border: '2px solid blue' }} />
                                        </Link>

                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
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
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchProduct;
