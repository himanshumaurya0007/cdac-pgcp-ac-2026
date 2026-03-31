import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./reducers/clockReducer";

const store = configureStore({
    reducer: {
        clock: clockReducer,
    },
});

export default store;