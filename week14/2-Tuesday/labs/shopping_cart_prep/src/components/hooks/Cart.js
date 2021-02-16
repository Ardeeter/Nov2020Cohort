import React from 'react'
import { useSelector } from 'react-redux'
import AddProduct from './AddProduct';
import DeleteProduct from './AddProduct';


const Cart = () => {

    const products = useSelector(state => state.cart);
    const totalCost = useSelector(state => state.totalCost);

  return (
    <>
        <h1>Shoppping Cart</h1>

        <AddProduct />

        Total Cost: $ {totalCost}

        <ul>
            {products.map(p => {
                return <li key={p.id}>{p.productName} ${p.price}</li>
            })}
        </ul>
    </>
  )
}

export default Cart
