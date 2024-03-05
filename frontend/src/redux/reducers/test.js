import { ERROR, REQUEST, SUCCESS } from '../constants/test'

export const test = (state = {}, action) => {
  switch (action) {
    case REQUEST:
      return { loading: true }
    case SUCCESS:
      return {
        loading: false,
        data: 'success',
      }
    case ERROR:
      return {
        loading: false,
        data: 'error',
      }
    default:
      return state
  }
}
