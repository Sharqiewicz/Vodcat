import { NormalLayout } from '../../layouts/NormalLayout';
import Form from '../../components/AlcoholForm/AlcoholForm';
import { useSelector } from 'react-redux';
import { Item } from '../../components/Item/index';
import { Container, RouteButton } from '../../styles/elements';
import { RootState } from '../../storage/store';
import { Alcohol } from '../../types';
import { useValidation } from '../../hooks/useValidation';

const ChoicePage = () => {
  const items: Alcohol[] = useSelector((state: RootState) => state.alcohol.items);
  const isEmpty = useValidation({ dependency: items, defaultValue: false });

  return (
    <div style={{ width: '60%', margin: 'auto' }}>
      <NormalLayout>
        <Container>
          {items.map((item: Alcohol) => (
            <Item {...item} key={item.id} />
          ))}
          <Form />
          <RouteButton to="players" className={isEmpty ? 'disabled' : ''}>
            NEXT
          </RouteButton>
        </Container>
      </NormalLayout>
    </div>
  );
};

export default ChoicePage;
