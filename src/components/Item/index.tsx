import { useDispatch } from 'react-redux';
import { removeItem } from '../../storage/alcoholSlice';
import { Alcohol } from '../../types/';
import { Item } from './Item';

export const Index = (props: Alcohol) => {
  const { name, percentage, color, bonus, id } = props;
  const dispatch = useDispatch();

  const remove = () => dispatch(removeItem(id));

  return <Item {...props} remove={remove} />;
};
