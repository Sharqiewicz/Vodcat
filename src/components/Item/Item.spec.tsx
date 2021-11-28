import { Index } from './index';
import { Alcohol } from '../../types';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../storage/store';

const itemWithBonus: Alcohol = {
  name: 'Vodka',
  percentage: 40,
  color: 'white',
  bonus: true,
  id: 'v0dk-1a',
};

describe('<Item/> shows proper elements', () => {
  it("If item has a bonus, display 'BONUS' text", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Index {...itemWithBonus} />
      </Provider>
    );

    getByText('BONUS');
    getByText(itemWithBonus.name);
  });
});
