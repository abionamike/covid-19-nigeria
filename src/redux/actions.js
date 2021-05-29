import { COVID_DATA_FAIL, COVID_DATA_REQUEST, COVID_DATA_SUCCESS } from "./constants"

const get_covid_data = () => async (dispatch) => {
  try {
    dispatch({ type: COVID_DATA_REQUEST });
  
    const res = await fetch('https://covidnigeria.herokuapp.com/api');
    const { data } = await res.json();
    if(data) {
      dispatch({ type: COVID_DATA_SUCCESS, payload: data });
    } else {
      throw Error('Unable to fetch data from the API. Try again later');
    }
  } catch (error) {
    dispatch({ type: COVID_DATA_FAIL, payload: error.message })
  }
}

export default get_covid_data;