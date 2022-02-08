import { INCREMENT, DECREMENT, GET_CITIES } from "./Action1";
import { ADDITION, SUBTRACTION } from "./Action1";

const initialState = {
    counter: 0,
    cities: [],
};

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 5 };

        case DECREMENT:
            return { ...state, counter: state.counter - 5 };

        case GET_CITIES:
            return { ...state, cities: action.payload };



        default:
            return state;
    }
}