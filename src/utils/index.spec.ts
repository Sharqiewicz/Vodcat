import { getUniqueID } from './index';

describe('getUniqueID works correctly', () => {
  it('random ID is a string', () => {
    expect(typeof getUniqueID()).toBe('string');
  });
  it('random ID starts with " _ " symbol', () => {
    const randomID = getUniqueID();
    expect(randomID.startsWith('_')).toBeTruthy();
  });
});
