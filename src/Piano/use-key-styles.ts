import { KeyStyles } from '../types';

type RequiredKeyStyles = Required<KeyStyles>;

const DEFAULT_KEY_STYLES: RequiredKeyStyles = {
  keyWidth: 40,
  keyHeight: 200,
  whiteKeyColor: '#fafafa',
  whiteKeyActiveColor: '#eaeaea',
  whiteKeyBorderColor: '#aaa',
  whiteKeyBorderRadius: 0,
  blackKeyColor: '#333',
  blackKeyActiveColor: '#444',
  blackKeyBorderColor: '#aaa',
  blackKeyBorderRadius: 0,
};

export const useKeyStyles = (
  styles: KeyStyles | undefined
): RequiredKeyStyles => {
  return {
    ...DEFAULT_KEY_STYLES,
    ...styles,
  };
};
