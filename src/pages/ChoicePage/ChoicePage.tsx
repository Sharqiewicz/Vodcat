import { NormalLayout } from '../../layouts/NormalLayout';
import Form from '../../components/AlcoholForm/AlcoholForm';
import { useSelector } from 'react-redux';
import { Item } from '../../components/Item/Item';
import { Container, RouteButton } from '../../styles/elements';
import { RootState } from '../../app/store';
import { Alcohol } from '../../types';
import { useValidation } from '../../hooks/useValidation';

const ChoicePage = () => {
  const items: Alcohol[] = useSelector((state: RootState) => state.alcohol.items);
  const isEmpty = useValidation({ dependency: items, defaultValue: false });

  console.log(isEmpty);
  return (
    <NormalLayout>
      <Container>
        {items.map((item: any) => (
          <Item {...item} />
        ))}
        <Form />
        <RouteButton to="players" className={isEmpty ? 'disabled' : ''}>
          NEXT
        </RouteButton>
      </Container>
    </NormalLayout>
  );
};

export default ChoicePage;
