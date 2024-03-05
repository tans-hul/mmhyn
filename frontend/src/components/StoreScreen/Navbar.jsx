import '../../assets/css/Store Screen/StoreNavbar.css'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../../redux/actions/ecommerce_store/productActions.js'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()

  const [activeNavbarItem, setActiveNavbarItem] = useState(1)

  useEffect(() => {
    dispatch(getAllProducts(activeNavbarItem))
  }, [dispatch, activeNavbarItem])

  const navbarItems = [
    'All',
    'T-Shirts',
    'Sweat Pants',
    'Sweaters',
    'Accessories',
  ]

  return (
    <nav className={'flex flex-wrap items-center bg-sm-primary py-3'}>
      <div
        className={
          'flex w-2/3 flex-wrap items-center border-b-2 border-b-golden border-opacity-25 bg-sm-primary md:ml-20'
        }
      >
        {navbarItems.map((item, idx) => (
          <div
            key={idx}
            id={'navbar-item'}
            className={`${idx === activeNavbarItem && 'active'} hover:active cursor-pointer text-body`}
            onClick={() => setActiveNavbarItem(idx)}
          >
            <p className={'px-8 py-2 font-medium'}>{item}</p>
          </div>
        ))}
      </div>
    </nav>
  )
}
export default Navbar
