import { useState } from 'react';
import { useContacts } from '../../hooks/useHooks';
import { Form, Input, Btn } from './ContactForm.styled';
import { infoToast, successToast } from '../Toasts';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts, inAddContact } = useContacts();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const enterContacts = contacts.some(
      i => i.name.toLowerCase() === name.toLowerCase() || i.number === number
    );
    enterContacts
      ? infoToast(`${name} is already in contacts`)
      : inAddContact({ name, number });
    !enterContacts && successToast('The contact is in the list!');

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};
