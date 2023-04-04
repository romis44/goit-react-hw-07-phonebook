import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContactAction: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContactAction: {
      reducer: (store, { payload }) => {
        return store.filter(({ id }) => id !== payload.id);
      },
      prepare: id => {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export default contactsSlice.reducer;
