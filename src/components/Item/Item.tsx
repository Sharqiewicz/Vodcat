import React from 'react';
import { ItemContainer, ItemName, ItemPercentage, ItemColor, ItemStats, ItemBonus, ItemRemove } from './Item.styles';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../storage/alcoholSlice';

export const Item = (props: any) => {
  console.log(props);
  const dispatch = useDispatch();

  return (
    <ItemContainer {...{ theme: { bonus: props.bonus, background: props.color } }}>
      <ItemName>{props.name}</ItemName>
      <ItemPercentage>{props.percentage}%</ItemPercentage>
      <ItemStats>
        <ItemColor color={props.color} />
        <ItemBonus>{props.bonus && 'BONUS'}</ItemBonus>
        <ItemRemove
          onClick={() => {
            console.log('click');
            dispatch(removeItem(props.id));
          }}
        >
          X
        </ItemRemove>
      </ItemStats>
    </ItemContainer>
  );
};
