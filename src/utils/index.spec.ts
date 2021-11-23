import { getRandomItemFromArray, getUniqueID } from './index';

describe('getUniqueID', () => {
  it('random ID is a string', () => {
    expect(typeof getUniqueID()).toBe('string');
  });
  it('random ID starts with " _ " symbol', () => {
    const randomID = getUniqueID();
    expect(randomID.startsWith('_')).toBeTruthy();
  });
});

describe('getRandomItemFromArray', () => {
  it('getting random item from multiple items array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const randomItem = getRandomItemFromArray(array);
    expect(array.some((i) => i === randomItem)).toBeTruthy();
  });
  it('getting undefined when array is empty', () => {
    const array: any[] = [];
    const randomItem = getRandomItemFromArray(array);
    console.log('randomItem');
    console.log(randomItem);
    expect(randomItem).toBeUndefined();
  });
});
