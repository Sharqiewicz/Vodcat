import * as S from './Item.styles';
import { Alcohol } from '../../types/';

type ItemProps = Alcohol & { remove: () => void };

export const Item = (props: ItemProps) => {
  const { name, percentage, color, bonus, id, remove } = props;

  return (
    <S.ItemContainer {...{ theme: { bonus, background: color } }} key={id}>
      <S.ItemName>{name}</S.ItemName>
      <S.ItemPercentage>{percentage}%</S.ItemPercentage>
      <S.ItemStats>
        <S.ItemColor color={color} />
        <S.ItemBonus>{bonus && 'BONUS'}</S.ItemBonus>
        <S.ItemRemove onClick={remove}>X</S.ItemRemove>
      </S.ItemStats>
    </S.ItemContainer>
  );
};
