export type KeyboardNote = {
  name: string;
  midi: number;
  freq: number;
  type: 'white' | 'black';
  isActive: boolean;
  handleKeyDown: () => void;
  handleKeyUp: () => void;
};

export type Note = Omit<KeyboardNote, 'handleKeyDown' | 'handleKeyUp'>;

export type KeyRange = [string | number, string | number];

export type PianoOptions = {
  /**
   * The key range of the piano.
   *
   * @default ['C3', 'G5'] or [48, 79]
   */
  keyRange?: KeyRange;
  onKeyDown?: (note: Note) => void;
  onKeyUp?: (note: Note) => void;
};

export type PianoApi = {
  keyboard: KeyboardNote[];
};

export type PianoStyles = {
  /**
   * The direction of the piano.
   *
   * @default 'horizontal'
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * The gap between keys.
   *
   * @default 0
   */
  keyGap?: number;
};

export type KeyStyles = {
  /**
   * The width of a key.
   *
   * @default 40
   */
  keyWidth?: number;
  /**
   * The height of a key.
   *
   * @default 200
   */
  keyHeight?: number;
  /**
   * The color of white keys.
   *
   * @default '#fafafa'
   */
  whiteKeyColor?: string;
  /**
   * The color of active white keys.
   *
   * @default '#eee'
   */
  whiteKeyActiveColor?: string;
  /**
   * The border color of white keys.
   *
   * @default '#aaa'
   */
  whiteKeyBorderColor?: string;
  /**
   * The border radius of white keys.
   *
   * @default 0
   */
  whiteKeyBorderRadius?: number;
  /**
   * The color of black keys.
   *
   * @default '#333'
   */
  blackKeyColor?: string;
  /**
   * The color of active black keys.
   *
   * @default '#444'
   */
  blackKeyActiveColor?: string;
  /**
   * The border color of black keys.
   *
   * @default '#aaa'
   */
  blackKeyBorderColor?: string;
  /**
   * The border radius of black keys.
   *
   * @default 0
   */
  blackKeyBorderRadius?: number;
};

export type PianoProps = {
  keyboard: KeyboardNote[];
  pianoStyles?: PianoStyles;
  keyStyles?: KeyStyles;
};

export type KeyProps = {
  isVertical: boolean;
  name: string;
  color: string;
  activeColor: string;
  borderColor: string;
  borderRadius: number;
  isActive: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
  onKeyDown: () => void;
  onKeyUp: () => void;
};
