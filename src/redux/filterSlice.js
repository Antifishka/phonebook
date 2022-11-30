import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    filter: '',
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setFilter(state, { payload }) {
            return payload;
        },
    },
});

// Экспортируем генераторы экшенов и редюсер
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;