import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { getUserName } from '../../redux/auth/authSelectors';
import { Container, Name, UserBtn } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <Container>
      <Name>Welcome {name}</Name>
      <UserBtn
        type="submit"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
      </UserBtn>
    </Container>
  );
}
