import { NormalLayout } from '../../layouts/NormalLayout';
import Form from '../../components/AlcoholForm/AlcoholForm';
import { useSelector } from 'react-redux';
import { Item } from '../../components/Item/Item';
import { Container, RouteButton } from '../../styles/elements';
import { RootState } from '../../app/store';
import { Alcohol } from '../../types';

const ChoicePage = () => {
  const items: Alcohol[] = useSelector((state: RootState) => state.alcohol.items);
  return (
    <NormalLayout>
      <Container>
        {items.map((item: any) => (
          <Item {...item} />
        ))}
        <Form />
        <RouteButton to="players">NEXT</RouteButton>
      </Container>
    </NormalLayout>
  );
};

export default ChoicePage;
