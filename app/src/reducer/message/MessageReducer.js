import { SUCCESS, ERROR, LOADING } from '../../constants/ActionTypes'

export default function reducer(state, action) {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
        error: false,
        success: false,
        message: '',
      }
    case SUCCESS:
      return {
        success: true,
        error: false,
        loading: false,
        message: action.message,
      }
    case ERROR:
      return {
        error: true,
        success: false,
        loading: false,
        message: action.message,
      }
    default:
      return {
        loading: false,
        success: false,
        error: false,
        message: '',
      }
  }
}
