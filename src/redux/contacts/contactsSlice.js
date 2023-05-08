import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const extraActions = [getContacts, addContact, deleteContact];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(...extraActions.map(extraAction => extraAction.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...extraActions.map(extraAction => extraAction.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(extraAction => extraAction.rejected)),
        handleRejected
      );
  },
});

export const contactsReduser = contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;
