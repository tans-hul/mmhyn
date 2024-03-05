import { DEV_BACKEND_URL } from '../../redux/constants/backend_url.js'
import QuantityField from './QuantityField.jsx'
import { useState } from 'react'

const CartItem = ({ product, totalQty, className }) => {
  const [quantity, setQuantity] = useState(product.quantity)

  return (
    <div
      className={`flex h-48 items-center justify-between bg-sm-primary px-3 py-3 lg:max-h-[142px] ${className}`}
    >
      <div className={'flex h-full items-start'}>
        <div className={'mr-3 h-full max-w-[120px] bg-golden md:w-48'}>
          <img
            src={`${DEV_BACKEND_URL}${product.image}`}
            className={'h-full w-full'}
          />
        </div>
        <div>
          <h1 className={'font-publicsans text-cart-item-heading font-medium'}>
            {product.name}
          </h1>
          <div className={'my-2'}>
            <p className={'font-publicsans text-cart-item-text'}>
              Size:{' '}
              {product.size && product.size.size ? product.size.size : 'Error'}
            </p>
            <div
              className={
                'flex items-center font-publicsans text-cart-item-text'
              }
            >
              Quantity:{' '}
              <QuantityField
                quantity={quantity}
                setQuantity={setQuantity}
                qty={parseInt(totalQty)}
                setCartWhenUsingButtons
                product={product}
                className={'ml-2 w-1/4 border-none'}
              />
            </div>
          </div>
          <h1 className={'font-publicsans text-cart-item-heading font-medium'}>
            ${product.total}
          </h1>
        </div>
      </div>
      <div className={'flex h-full items-end justify-center'}>
        <button className={'underline hover:font-medium'}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem
