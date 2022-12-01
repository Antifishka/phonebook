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
                state.contacts.push(action.payload);
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
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1);
        },
    },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

// Экспортируем генераторы экшенов и редюсер
const contactsReducer = contactsSlice.reducer;
export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
export const { addContact, deleteContact } = contactsSlice.actions;

