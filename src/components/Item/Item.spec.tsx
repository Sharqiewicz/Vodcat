import { Item } from './index';
import { Alcohol } from '../../types';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../storage/store';
import { addItem, removeItem, getAlcohol } from '../../storage/alcoholSlice';

const itemWithBonus: Alcohol = {
  name: 'Vodka',
  percentage: 40,
  color: 'white',
  bonus: true,
  id: 'v0dk-1a',
};

const itemToAdd: Alcohol = {
  name: 'Kustosz Mocny',
  percentage: 11,
  color: 'brown',
  bonus: false,
  id: 'kus-tosz-117',
};

describe('<Item/> shows proper elements', () => {
  it("If item has a bonus, display 'BONUS' text", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Item {...itemWithBonus} />
      </Provider>
    );

    getByText('BONUS');
    getByText(itemWithBonus.name);
  });

  it('Adding a new element works', () => {
    store.dispatch(addItem(itemToAdd));
    const { getByText } = render(
      <Provider store={store}>
        {getAlcohol(store.getState()).map((item: Alcohol) => (
          <Item {...item} key={item.id} />
        ))}
      </Provider>
    );

    getByText(itemToAdd.percentage.toString() + '%');
    getByText(itemToAdd.name, { exact: false });
  });

  it('Erasing an element works', () => {
    const firstItemInDefaultState: Alcohol = getAlcohol(store.getState())[0];
    store.dispatch(removeItem(firstItemInDefaultState.id));
    const { queryByText } = render(
      <Provider store={store}>
        {getAlcohol(store.getState()).map((item: Alcohol) => (
          <Item {...item} key={item.id} />
        ))}
      </Provider>
    );
    expect(queryByText(firstItemInDefaultState.name)).toBeNull();
    expect(queryByText(firstItemInDefaultState.percentage.toString() + '%')).toBeNull();
  });
});
