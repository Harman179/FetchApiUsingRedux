export const INCREMENT = 'ADDITION';
export const DECREMENT = 'SUBTRACTION';

export const GET_CITIES = 'GET_CITIES';
const API_URL = 'https://mocki.io/v1/4e06e238-a678-430d-93eb-6ecd685cdef5';
export const getCities = () => {
  try {
    return async dispatch => {
        const result = await fetch(API_URL,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const json = await result.json();
        if(json){
            dispatch({
              type: GET_CITIES,
              payload: json
            });
        }else{
            console.log('Unable to fetch!')
        }
    }
  } catch (error) {
    console.log(error);
  }
}

export const addition = () => { 
    return {
        type: "ADDITION",
        payload:1
    }
}

export const subtraction = () => { 
    return{
        type: "SUBTRACTION",
        payload:1
    }
}

export const setName = name => dispatch => {
  dispatch({
      type: SET_USER_NAME,
      payload: name,
  });
};

export const setAge = age => dispatch => {
  dispatch({
      type: SET_USER_AGE,
      payload: age,
  });
};
