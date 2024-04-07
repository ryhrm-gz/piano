import { PianoOptions } from './types';

type RequiredPianoOptions = Required<PianoOptions>;

const DEFAULT_PIANO_OPTIONS: RequiredPianoOptions = {
  keyRange: ['C3', 'G5'],
  onKeyDown: () => {},
  onKeyUp: () => {},
};

export const usePianoOptions = (
  options?: PianoOptions
): RequiredPianoOptions => {
  return {
    ...DEFAULT_PIANO_OPTIONS,
    ...options,
  };
};
