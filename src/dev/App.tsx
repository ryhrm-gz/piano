import { Piano } from '../Piano/Piano';
import { usePiano } from '../use-piano';

function App() {
  const { keyboard } = usePiano({
    keyRange: ['C3', 'G5'],
  });

  return (
    <div>
      <Piano
        keyboard={keyboard}
        pianoStyles={{
          keyGap: 0,
        }}
        keyStyles={{
          whiteKeyBorderRadius: 0,
          blackKeyBorderRadius: 0,
          keyWidth: 40,
        }}
      />
    </div>
  );
}

export default App;
