import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsFormLoading = state => state.contacts.isFormLoading;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
     // Массив входных селекторов
    [selectContacts, selectFilter],
    // Функция преобразователь
    (contacts, filter) => {
        // Выполняем вычисления и возвращаем результат
        console.log("Now memoized!");

        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
        );
});