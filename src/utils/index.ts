export const getUniqueID = (): string => '_' + Math.random().toString(36);

export const getRandomItemFromArray = (array: any[]) => array[Math.floor(Math.random() * array.length)];
