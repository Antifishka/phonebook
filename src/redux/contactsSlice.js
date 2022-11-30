import { createSlice, nanoid } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist'

const contactsInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsReducer = contactsSlice.reducer;
export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
export const { addContact, deleteContact } = contactsSlice.actions;

