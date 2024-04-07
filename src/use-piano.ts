import { useCallback, useMemo, useState } from 'react';
import { DEFAULT_KEY_RANGE } from './constants';
import { PianoOptions, PianoApi, KeyboardNote, Note } from './types';
import { createKeysInRange } from './utils/create-keys-in-range';
import { getKeyName } from './utils/get-key-name';
import { Note as TonalNote } from 'tonal';
import { usePianoOptions } from './use-piano-options';

export const usePiano = (_options?: PianoOptions): PianoApi => {
  const options = usePianoOptions(_options);

  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const keyRangeNames = useMemo(
    () => [
      getKeyName(options.keyRange?.[0] ?? '') || DEFAULT_KEY_RANGE[0],
      getKeyName(options.keyRange?.[1] ?? '') || DEFAULT_KEY_RANGE[1],
    ],
    [options?.keyRange]
  );

  const keysInRange = useMemo(
    () => createKeysInRange(keyRangeNames),
    [keyRangeNames]
  );

  const handleKeyDown = useCallback(
    (note: Note) => {
      const key = note.name;
      setActiveKeys((prev) => [...prev, key]);
      options.onKeyDown(note);
    },
    [options]
  );

  const handleKeyUp = useCallback(
    (note: Note) => {
      const key = note.name;
      setActiveKeys((prev) => prev.filter((k) => k !== key));
      options.onKeyUp(note);
    },
    [options]
  );

  const keyboard: KeyboardNote[] = useMemo(
    () =>
      keysInRange.map((key) => {
        const tonalNote = TonalNote.get(key);
        const note: Note = {
          name: tonalNote.name,
          midi: tonalNote.midi ?? 0,
          freq: tonalNote.freq ?? 0,
          isActive: activeKeys.includes(key),
          type: tonalNote.alt === 0 ? 'white' : 'black',
        };
        return {
          ...note,
          handleKeyDown: () => handleKeyDown(note),
          handleKeyUp: () => handleKeyUp(note),
        };
      }),
    [activeKeys, handleKeyDown, handleKeyUp, keysInRange]
  );

  return {
    keyboard,
  };
};
