import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const {id,img,name,seller,price,stock,ratings} = props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className=''>
                <h3>Id:{id}</h3>
                <h3>Name:{name}</h3>
                <h3>Price:{price}</h3>
                <p>only {stock} left in stock - order soon</p>
                <p>by:{seller}</p>
                <Rating 
                initialRating={ratings}
                emptySymbol=" far fa-star rating"
                fullSymbol=" fas fa-star rating"
                readonly
                > 
                </Rating> <br /><br />
                <button 
                 onClick={() => props.handleAddToCard(props.product)}
                className='btn-card'>{element}add to card</button>
            </div>
        </div>
    );
};

export default Product;