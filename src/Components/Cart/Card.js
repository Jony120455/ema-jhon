import React from 'react';
import './Cart.css'

const Card = (props) => {
    const {card} = props;
    let total= 0;
    for(const product of card){
        total= total + product.price;
    }
    const shipping = total > 0 ? 10 : 0;
    const tax = (total + shipping)*.9
    const grandTotal= (total + shipping + tax)

    return (
        <div>
             <div className='card'>
            <div className='card-details'>
            <h1>Order Summary</h1>
            <h2>Items ordered:{props.card.length}</h2>
            <p>total:{total}</p>
            <p>Shipping:{shipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>Grandtotal:{grandTotal}</p>
            </div>
        </div>
        </div>
    );
};

export default Card;