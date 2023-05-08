import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactsContainer, Title } from './Contacts.styled';

const Contacts = () => {
  return (
    <ContactsContainer>
      <Title>Enter a name and phone number to add a contact</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </ContactsContainer>
  );
};

export default Contacts;
