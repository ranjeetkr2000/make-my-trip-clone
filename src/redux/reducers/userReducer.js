import {LOGIN, LOGOUT} from "../actionTypes";

const initialState = {
    userData : {}
}

export default function userReducer(state= initialState, action) {
    switch (action.type){
        case LOGIN : {
            return {
                ...state,
                userData: action.payload,
            }
        }
        case LOGOUT : {
            return {
                ...state,
                userData: {},
            }
        }

        default: {
            return state;
        }
    }
}