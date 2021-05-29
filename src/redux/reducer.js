import { COVID_DATA_REQUEST, COVID_DATA_SUCCESS, COVID_DATA_FAIL } from './constants'

export const covidDataReducer = (state = [], action) => {
  switch (action.type) {
    case COVID_DATA_REQUEST:
      return {
        loading: true,
      }
    case COVID_DATA_SUCCESS:
      return {
        loading: false,
        covidData: action.payload
      }
    case COVID_DATA_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}