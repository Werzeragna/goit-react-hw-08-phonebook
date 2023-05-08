import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/contacts/contactsSlice';
import {
  getContacts,
  addContact,
  deleteContact,
} from '../redux/contacts/contactsOperations';

export const useContacts = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const isLoaging = useSelector(state => state.contacts.loader);
  const error = useSelector(state => state.contacts.error);

  const setFilter = value => {
    dispatch(changeFilter(value));
  };

  const inGetContacts = () => {
    dispatch(getContacts());
  };

  const inAddContact = data => {
    dispatch(addContact(data));
  };

  const inDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return {
    filter,
    contacts,
    isLoaging,
    error,
    setFilter,
    inGetContacts,
    inAddContact,
    inDeleteContact,
  };
};
