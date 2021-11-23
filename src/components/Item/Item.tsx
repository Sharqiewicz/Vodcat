import * as S from './Item.styles';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../storage/alcoholSlice';
import { Alcohol } from '../../types/';

export const Item = (props: Alcohol) => {
  const { name, percentage, color, bonus, id } = props;
  const dispatch = useDispatch();

  return (
    <S.ItemContainer {...{ theme: { bonus, background: color } }}>
      <S.ItemName>{name}</S.ItemName>
      <S.ItemPercentage>{percentage}%</S.ItemPercentage>
      <S.ItemStats>
        <S.ItemColor color={color} />
        <S.ItemBonus>{bonus && 'BONUS'}</S.ItemBonus>
        <S.ItemRemove
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          X
        </S.ItemRemove>
      </S.ItemStats>
    </S.ItemContainer>
  );
};
