import React from 'react'
import { useDispatch } from 'react-redux'
import { v1 as uuidv1 } from 'uuid'
import { addProduct } from '../../actions/cartActions'

const AddProduct = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        //dispatch(addProduct(product))

        let product = {
            in: uuidv1(),
            productName: e.target.name.value,
            price: e.target.price.value
        }

        dispatch(addProduct(product));

        e.target.name.value = "";
        e.target.price.value = "";
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            
            <input type="text" id="name" placeHolder="Product Name"/> <br/>
            <input type="text" id="price" placeHolder="Product Price"/> <br/>

            <button type="submit">Submit</button>

        </form>
    </>
  )
}

export default AddProduct
