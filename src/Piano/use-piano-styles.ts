import { PianoStyles } from '../types';

type RequiredPianoStyles = Required<PianoStyles>;

const DEFAULT_PIANO_STYLES: RequiredPianoStyles = {
  direction: 'horizontal',
  keyGap: 0,
};

export const usePianoStyles = (
  styles: PianoStyles | undefined
): RequiredPianoStyles => {
  return {
    ...DEFAULT_PIANO_STYLES,
    ...styles,
  };
};
