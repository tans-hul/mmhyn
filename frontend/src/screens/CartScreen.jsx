import Header from '../components/StoreScreen/Header.jsx'
import CartItem from '../components/StoreScreen/CartItem.jsx'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartScreen = () => {
  const { products } = useSelector((state) => state.cart)

  const location = useLocation()
  const { totalQty } = location.state
  console.log(totalQty)

  return (
    <div className={'mx-20 pb-10'}>
      <Header totalQty={totalQty} />
      <div className={'mt-10'}>
        <div className={'mb-4'}>
          <h1 className={'text-section-heading font-medium'}>Shopping Cart</h1>
          <h3 className={'mt-1 font-publicsans text-body font-light'}>
            Not ready to checkout?{' '}
            <Link
              to={'/store'}
              className={
                'trannsition-all font-publicsans font-medium hover:underline'
              }
            >
              {' '}
              Continue Shopping
            </Link>
          </h3>
        </div>

        <div className={'mb-7'}>
          {products.map((product, idx) => (
            <CartItem
              key={idx}
              product={product}
              totalQty={totalQty}
              className={idx < products.length - 1 && 'mb-4'}
            />
          ))}
        </div>

        <div className={'flex items-center justify-center'}>
          <Link
            to={'/store/checkout/'}
            className={'bg-gradient px-7 py-3 font-publicsans font-medium'}
          >
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
