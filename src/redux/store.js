import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./reducers/searchReducer";
import userReducer from "./reducers/userReducer";
import flightReducer from "./reducers/flightReducer";

const store = configureStore({
    reducer: {
        searchReducer,
        userReducer,
        flightReducer,
    }
});

export default store;