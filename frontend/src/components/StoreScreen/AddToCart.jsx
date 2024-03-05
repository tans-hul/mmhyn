/* eslint-disable */
import { useEffect, useState } from 'react'

import '../../assets/css/Store Screen/AddToCart.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/ecommerce_store/productActions.js'
import QuantityField from './QuantityField.jsx'

const AddToCart = ({ price, qty, sizeIdx, colorIdx, product }) => {
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(quantity * price)

  const dispatch = useDispatch()

  function makePayload(product, price, quantity, sizeIdx, colorIdx) {
    product = {
      id: product.id,
      name: product.name,
      total: total,
      price: price,
      quantity: quantity,
      color: {
        idx: colorIdx,
        name: product.variants[sizeIdx].color[colorIdx].name,
      },
      size: { idx: sizeIdx, size: product.variants[sizeIdx].size },
      image: product.variants[sizeIdx].color[colorIdx]?.images[0]?.image,
    }

    return product
  }

  function addToCartHandler() {
    product = makePayload(product, price, quantity, sizeIdx, colorIdx)

    dispatch(addToCart(product))
  }

  useEffect(() => {
    setTotal(quantity * price)
  }, [quantity])

  return (
    <div className={'flex flex-col md:flex-row'}>
      <button
        className={
          'mr-5 w-4/5 bg-gradient py-4 font-arial text-button font-bold text-white'
        }
        onClick={addToCartHandler}
      >
        Add to Cart - ${total}
      </button>
      <QuantityField qty={qty} setQuantity={setQuantity} quantity={quantity} />
    </div>
  )
}

export default AddToCart
