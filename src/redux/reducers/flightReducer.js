import { INIT_FLIGHTS, ADD_FILTER, REMOVE_FILTER, BOOK_FLIGHT } from "../actionTypes";

const initialState = {
    allFlights: [],
    filters: [],
    priceFilter: Number.MAX_SAFE_INTEGER,
    bookFlight: {}
}

export default function flightReducer(state = initialState, action){
    switch(action.type){
        case INIT_FLIGHTS: {
            
            const data = action.payload;

            return {
                ...state,
                allFlights: data,
            }
        }

        case ADD_FILTER: {
            const filterName = action.payload;

            return {
                ...state,
                filters: [...state.filters, filterName]
            }
        }

        case REMOVE_FILTER: {
            const filterName = action.payload;
            const filteredData = state.filters.filter((currFilter) => {
                return currFilter !== filterName;
            })

            return {
                ...state,
                filters: filteredData,
            }
        }

        case BOOK_FLIGHT: {
            return {
                ...state,
                bookFlight: action.payload
            }
        }

        default : {
            return state;
        }
    }
}