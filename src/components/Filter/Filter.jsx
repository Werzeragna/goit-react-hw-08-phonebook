import { useContacts } from '../../hooks/useHooks';
import { Input, Form } from './Filter.styled';

export const Filter = () => {
  const { filter, setFilter } = useContacts();
  return (
    <Form>
      <label>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          placeholder="Find contacts by name"
        />
      </label>
    </Form>
  );
};
