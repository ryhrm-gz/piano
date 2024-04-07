import { useMemo, useState } from 'react';
import { DEFAULT_KEY_RANGE } from './constants';
import { Note, PianoOptions, PianoApi } from './types';
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

  const handleKeyDown = (key: string) => {
    setActiveKeys((prev) => [...prev, key]);
  };

  const handleKeyUp = (key: string) => {
    setActiveKeys((prev) => prev.filter((k) => k !== key));
  };

  const keyboard: Note[] = useMemo(
    () =>
      keysInRange.map((key) => {
        const note = TonalNote.get(key);
        return {
          name: note.name,
          midi: note.midi ?? 0,
          freq: note.freq ?? 0,
          isActive: activeKeys.includes(key),
          type: note.alt === 0 ? 'white' : 'black',
          handleKeyDown: () => handleKeyDown(key),
          handleKeyUp: () => handleKeyUp(key),
        };
      }),
    [activeKeys, keysInRange]
  );

  return {
    keyboard,
  };
};
