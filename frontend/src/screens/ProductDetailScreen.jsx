import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/actions/ecommerce_store/productActions.js'
import { useLocation } from 'react-router-dom'

import ImageGallery from '../components/StoreScreen/ImageGallery.jsx'
import AddToCart from '../components/StoreScreen/AddToCart.jsx'
import Header from '../components/StoreScreen/Header.jsx'

const ProductDetailScreen = () => {
  const location = useLocation()
  const { id } = location.state

  const dispatch = useDispatch()
  const { loading, data, error } = useSelector((state) => state.product_detail)

  const [sizeIdx, setSizeIdx] = useState(0)
  const [colorIdx, setColorIdx] = useState(0)

  useEffect(() => {
    dispatch(getProduct(id))
  }, [dispatch, id])

  useEffect(() => {
    setColorIdx(0)
  }, [sizeIdx])

  return (
    <div className={'mx-20 pb-10'}>
      {loading ? (
        <div
          className={'flex h-screen items-center justify-center text-center'}
        >
          Loading...
        </div>
      ) : error ? (
        <div className={'h-screen text-center'}>{error}</div>
      ) : (
        data && (
          <>
            <Header
              totalQty={
                data.variants[sizeIdx].color[colorIdx]?.count_of_product
              }
            />
            <div className={'mt-10 flex items-start justify-start '}>
              <ImageGallery
                images={data.variants[sizeIdx].color[colorIdx]?.images}
              />
              <div className={'ml-10'}>
                <h1 className={'text-section-heading'}>{data.name}</h1>
                <h3
                  className={
                    'bg-gradient bg-clip-text text-button text-transparent'
                  }
                >
                  ${data.price}
                </h3>
                <p className={'mb-4 mt-2 text-body'}>{data.description}</p>
                <p className={'mb-3'}>
                  by <span className={'font-bold'}>{data.provider.name}</span>
                </p>

                <div className={'mb-3'}>
                  <p className={'mb-2 font-bold'}>Size</p>
                  <div className={'flex items-center justify-start'}>
                    {data.variants.map((variant, index) => (
                      <button
                        key={index}
                        className={`mr-2 bg-sm-primary px-5 py-3 text-center text-body shadow-lg transition-all hover:scale-105 hover:font-bold hover:shadow-2xl ${index === sizeIdx && 'scale-105 font-bold shadow-2xl'}`}
                        onClick={() => setSizeIdx(index)}
                      >
                        {variant.size}
                      </button>
                    ))}
                  </div>
                </div>

                {data.variants[sizeIdx].color && (
                  <div className={'mb-3'}>
                    <p className={'mb-2 text-secondary'}>Color</p>
                    <div className={'flex items-center justify-start'}>
                      {data.variants[sizeIdx].color.map((color, index) => (
                        <div
                          key={index}
                          className={`mr-2 h-16 w-16 cursor-pointer rounded-2xl text-center text-body shadow-lg ${index === colorIdx && 'border-2 border-white'}`}
                          style={{ backgroundColor: `#${color.color_code}` }}
                          onClick={() => setColorIdx(index)}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                <AddToCart
                  price={data.price}
                  qty={data.variants[sizeIdx].color[colorIdx]?.count_of_product}
                  sizeIdx={sizeIdx}
                  colorIdx={colorIdx}
                  product={data}
                />

                <div
                  className={
                    'mt-3 flex items-center text-[14px] text-secondary'
                  }
                >
                  <p className={'mr-3'}>Free Standard Shipping</p>
                  <p className={'underline'}>Free Returns</p>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  )
}

export default ProductDetailScreen
