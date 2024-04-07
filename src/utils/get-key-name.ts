import { Note } from 'tonal';

export const getKeyName = (key: string | number) => {
  let keyName = key;
  if (typeof keyName === 'number') {
    keyName = Note.fromMidi(keyName);
  }

  return Note.get(keyName).name;
};
