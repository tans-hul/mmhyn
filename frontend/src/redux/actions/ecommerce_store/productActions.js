import {
  ADD_TO_CART,
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from '../../constants/ecommerce_store/product.js'
import axios from 'axios'
import { DEV_BACKEND_URL } from '../../constants/backend_url.js'

const url = `${DEV_BACKEND_URL}/product`
export const getAllProducts = (type) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PRODUCTS_REQUEST })

    let allProducts
    if (type > 0 && type < 5) {
      allProducts = await axios.get(`${url}/all?type=${type}`)
    } else {
      allProducts = await axios.get(`${url}/all`)
    }

    const { data } = allProducts

    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data })
  } catch (e) {
    console.log(e)
    dispatch({
      type: GET_ALL_PRODUCTS_ERROR,
      error: e.response.data.detail ? e.response.data.detail : e.response.data,
    })
  }
}

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST })

    const { data } = await axios.get(`${url}/${id}`)

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data })
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_ERROR,
      error: e.response.data.detail ? e.response.data.detail : e.response.data,
    })
  }
}

export const addToCart = (product) => (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART, payload: product })

  const { products } = getState().cart
  localStorage.setItem('cart', JSON.stringify(products))
}
