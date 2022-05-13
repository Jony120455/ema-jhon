import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Card';
import Product from '../Product/Product';
import { addToDb } from '../Utilities/Fakedata';
import './Shop.css'

const Shop = () => {
    const [products, setproducts ]= useState([])
    const [card, setCard] = useState([]);
    const [disply, setDisply] = useState([]);
    useEffect(() =>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setproducts(data)
            setDisply(data)
        })

    },[])
    const handleAddToCard =(product)=>{
        const newCard =[...card,product];
        setCard(newCard);
        // console.log(product)
        addToDb(product.id);
    }
    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisply  (matchProduct);
        console.log(matchProduct.length)
    }

    return (
        <div className='container'>
            <div className="search-container">
                <input 
                onChange={handleSearch}
                type="text"
                 placeholder='Search product' />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {/* <h2>products: {products.length}</h2> */}
                    {
                        disply.map(product => <Product product={product}
                        handleAddToCard={handleAddToCard}
                        ></Product> )
                    }
                </div>
                <div className="card-container">
                    <Cart card={card}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;