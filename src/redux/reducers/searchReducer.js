import { UPDATE_FROM_LOCATION, UPDATE_TO_LOCATION } from "../actionTypes";

const initialState = {
    from: {
        city: "Delhi",
        airportName: "Delhi Airport India",
        IATA: "DEL",
    },
    to: {
        city: "Bengaluru",
        airportName: "Bengaluru Airport India",
        IATA: "BLR",
    },
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FROM_LOCATION: {
            const { city, airportName, IATA } = action.payload;
            return {
                ...state,
                from: {
                    city,
                    airportName,
                    IATA,
                },
                to: {
                    ...state.to,
                },
            };
        }

        case UPDATE_TO_LOCATION: {
            const { city, airportName, IATA } = action.payload;
            return {
                ...state,

                from: {
                    ...state.from,
                },

                to: {
                    city,
                    airportName,
                    IATA,
                },
            };
        }

        default: {
            return state;
        }
    }
}
