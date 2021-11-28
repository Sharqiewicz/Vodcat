import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../storage/alcoholSlice';
import { Alcohol } from '../../types/';
import { Item as View } from './Item';

export const Item = memo((props: Alcohol) => {
  const { id } = props;
  const dispatch = useDispatch();
  const remove = () => dispatch(removeItem(id));

  return <View {...props} remove={remove} />;
});
