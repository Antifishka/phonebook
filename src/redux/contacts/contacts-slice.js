import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./contacts-operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending](state, _){
            state.isLoading = true;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload.id);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
        [updateContact.pending]: handlePending,
        [updateContact.fulfilled](state, action){
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload.id);
            state.items.splice(index, 1, action.payload);
        },
        [updateContact.rejected]: handleRejected,
    },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

