import { Range } from 'tonal';

export const createKeysInRange = (keyRangeNames: string[]) => {
  return Range.chromatic(keyRangeNames);
};
