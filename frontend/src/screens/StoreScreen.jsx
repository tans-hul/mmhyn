import Navbar from '../components/StoreScreen/Navbar.jsx'
import ProductCard from '../components/StoreScreen/ProductCard.jsx'
import { useSelector } from 'react-redux'

function StoreScreen() {
  const { loading, error, data } = useSelector((state) => state.products)

  return (
    <div>
      <h1 className={'text-center text-main-heading'}>My Store</h1>

      <p
        className={
          'text-center text-secondary md:mx-[16.5rem] md:mb-20 md:mt-2'
        }
      >
        Welcome to my store and thank you for checking this page out. Feel free
        to browse and find something you like, some of the proceeds will go
        towards helping my freelance career grow and the rest will go to
        Bridging Tech and Tech Kids Unlimited.
      </p>

      <Navbar />

      <div className={'mx-8 flex flex-wrap items-center justify-evenly  py-16'}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data && data.length === 0 ? (
          <p>No Products Found</p>
        ) : (
          data &&
          data.map((product) => <ProductCard key={product.id} data={product} />)
        )}
      </div>
    </div>
  )
}

export default StoreScreen
