import { RotatingLines } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

export const Loader = () => {
  return (
    <Loading>
      <RotatingLines
        strokeColor="rgba(178 146 171 / 50%)"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </Loading>
  );
};
export default Loader;
