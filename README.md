# @ryhrm-gz/Piano

React hooks and components for piano.

## usePiano

```tsx
const { keyboard } = usePiano({
  keyRange,
  onKeyDown,
  onKeyUp,
});
```

### Options

- `keyRange: [string | number, string | number]`
  - Default: `['C3', 'G5']`
  - The range of keys to be displayed.
- `onKeyDown: (note: Note) => void`
  - Default: `() => {}`
  - A callback function that is called when a key is pressed.
- `onKeyUp: (note: Note) => void`
  - Default: `() => {}`
  - A callback function that is called when a key is released.

## Piano

```tsx
<Piano
  keyboard={keyboard}
  pianoStyles={{
    direction,
    keyGap,
  }}
  keyStyles={{
    keyWidth,
    keyHeight,
    whiteKeyColor,
    whiteKeyActiveColor,
    whiteKeyBorderColor,
    whiteKeyBorderRadius,
    blackKeyColor,
    blackKeyActiveColor,
    blackKeyBorderColor,
    blackKeyBorderRadius,
  }}
/>
```
