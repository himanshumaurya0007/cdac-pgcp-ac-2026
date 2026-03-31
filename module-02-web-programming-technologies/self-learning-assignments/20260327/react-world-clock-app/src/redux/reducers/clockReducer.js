import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clocks: [
        { id: 1, country: "India", timezone: "Asia/Kolkata" },
        { id: 2, country: "USA (New York)", timezone: "America/New_York" },
        { id: 3, country: "Japan", timezone: "Asia/Tokyo" },
    ],
};

const clockSlice = createSlice({
    name: "clock",
    initialState,
    reducers: {
        addClock: (state, action) => {
            const exists = state.clocks.some(
                (clock) => clock.timezone === action.payload.timezone
            );

            if (!exists) {
                state.clocks.push({
                    id: Date.now(),
                    ...action.payload,
                });
            }
        },

        removeClock: (state, action) => {
            state.clocks = state.clocks.filter(
                (clock) => clock.id !== action.payload
            );
        },
    },
});

export const { addClock, removeClock } = clockSlice.actions;
export default clockSlice.reducer;