import { configureStore } from '@reduxjs/toolkit'

import { test as testReducer } from './redux/reducers/test.js'
import { myblogReducer } from './redux/reducers/myblogReducers.js'
import {
  cart,
  getAllProducts,
  getProduct,
} from './redux/reducers/ecommerce_store/productReducers.js'

const reducer = {
  test: testReducer,
  blog: myblogReducer,

  products: getAllProducts,
  product_detail: getProduct,
  cart: cart,
}

const cartFromStorage = localStorage.getItem('cart')
const initialCart = cartFromStorage ? JSON.parse(cartFromStorage) : []

const initialState = {
  cart: {
    products: initialCart,
  },
}

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
})

export default store
