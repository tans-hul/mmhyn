/* eslint-disable no-case-declarations */
import {
  ADD_TO_CART,
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  REMOVE_FROM_CART,
} from '../../constants/ecommerce_store/product.js'

export const getAllProducts = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return { loading: true }
    case GET_ALL_PRODUCTS_SUCCESS:
      return { loading: false, data: action.payload }
    case GET_ALL_PRODUCTS_ERROR:
      return { loading: false, error: action.error }
    default:
      return state
  }
}

export const getProduct = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true }
    case GET_PRODUCT_SUCCESS:
      return { loading: false, data: action.payload }
    case GET_PRODUCT_ERROR:
      return { loading: false, error: action.error }
    default:
      return state
  }
}

export const cart = (state = { products: [] }, action) => {
  function checkEquality(x, item) {
    return (
      x.id === item.id &&
      x.color.name === item.color.name &&
      x.size.size === item.size.size
    )
  }

  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload
      const existItem = state.products.find((x) => checkEquality(x, item))

      // If item exists then, update the quantity
      if (existItem) {
        return {
          products: state.products.map((x) =>
            checkEquality(x, item) ? item : x,
          ),
        }
      }
      //else add the item
      return { products: [...state.products, item] }

    case REMOVE_FROM_CART:
      return { products: action.payload }
    default:
      return state
  }
}
