import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async ({ name, number }) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async contactId => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
