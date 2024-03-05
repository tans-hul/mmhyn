import { Link } from 'react-router-dom'
import shoppingCartIcon from '../../assets/icons/shopping_cart.svg'
import Notification from './Notification.jsx'
import { useSelector } from 'react-redux'

const Header = ({ totalQty }) => {
  const { products } = useSelector((state) => state.cart)

  return (
    <div className={'flex items-center justify-between'}>
      <button
        className="rounded-xl bg-secondary px-5 py-3 font-inter text-[14px] font-medium text-white transition duration-150 ease-in-out hover:bg-sm-primary"
        onClick={() => history.back()}
      >
        Go Back
      </button>
      <Link
        to={'/store/cart/'}
        className={
          'group flex items-center rounded-lg bg-sm-primary px-2 py-3 transition-all hover:shadow-2xl'
        }
        state={{ totalQty: totalQty }}
      >
        <img src={`${shoppingCartIcon}`} className={'mx-1'} />
        <p
          className={
            'mx-2 font-inter text-body font-[400] transition-all group-hover:bg-gradient group-hover:bg-clip-text group-hover:text-transparent'
          }
        >
          Shopping Cart
        </p>
        {products.length > 0 && (
          <Notification
            num={products.length}
            className={'mx-1 bg-gradient px-2 py-1 text-[10px]'}
          />
        )}
      </Link>
    </div>
  )
}

export default Header
