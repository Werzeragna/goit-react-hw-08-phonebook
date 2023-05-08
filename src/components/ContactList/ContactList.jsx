import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from '../../hooks/useHooks';
import { getContacts } from '../../redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { Btn, Contacts, ContactsItem, User } from './ContactList.styled';
import { deleteToast } from '../Toasts';

export const ContactList = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();
  const { contacts, isLoaging, filter, inDeleteContact, setFilter } =
    useContacts();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <>
      {isLoaging && <Loader />}
      {isLoggedIn && (
        <Contacts>
          {contacts &&
            filteredContacts.map(({ id, name, number }) => {
              return (
                <ContactsItem key={id}>
                  <User>
                    {name}: {number}
                  </User>
                  <Btn
                    type="button"
                    onClick={() => {
                      inDeleteContact(id);
                      deleteToast(`${name} tel:${number} is deleted`);
                      setFilter('');
                    }}
                  >
                    Delete
                  </Btn>
                </ContactsItem>
              );
            })}
        </Contacts>
      )}
    </>
  );
};
