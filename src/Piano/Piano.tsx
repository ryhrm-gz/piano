import { PianoProps } from '../types';
import { Key } from './Key';
import { useKeyStyles } from './use-key-styles';
import { usePianoStyles } from './use-piano-styles';

export const Piano = ({
  keyboard,
  pianoStyles: _PianoStyles,
  keyStyles: _KeyStyles,
}: PianoProps) => {
  const pianoStyles = usePianoStyles(_PianoStyles);
  const keyStyles = useKeyStyles(_KeyStyles);

  const isVertical = pianoStyles.direction === 'vertical';

  const whiteKeys = keyboard.filter(({ type }) => type === 'white');

  const whiteKeyWidth = isVertical ? keyStyles.keyHeight : keyStyles.keyWidth;
  const whiteKeyHeight = isVertical ? keyStyles.keyWidth : keyStyles.keyHeight;
  const blackKeyWidthRatio = 0.55;
  const blackKeyHeightRatio = 0.65;
  const blackKeyWidth = whiteKeyWidth * blackKeyWidthRatio;
  const blackKeyHeight = whiteKeyHeight * blackKeyHeightRatio;

  const calcContainerWidth = () => {
    if (isVertical) {
      return whiteKeyWidth;
    }
    return (
      whiteKeyWidth * whiteKeys.length + pianoStyles.keyGap * whiteKeys.length
    );
  };

  const calcContainerHeight = () => {
    if (isVertical) {
      return (
        whiteKeyHeight * whiteKeys.length +
        pianoStyles.keyGap * whiteKeys.length
      );
    }
    return whiteKeyHeight;
  };

  const renderKeys = () => {
    const getX = (index: number) => {
      if (isVertical) {
        return 0;
      } else {
        return index * whiteKeyWidth + index * pianoStyles.keyGap;
      }
    };
    const getY = (index: number) => {
      if (isVertical) {
        return (
          calcContainerHeight() -
          index * whiteKeyHeight +
          index * -pianoStyles.keyGap -
          whiteKeyHeight
        );
      } else {
        return 0;
      }
    };

    let blackKeyCount = 0;
    const whiteKeys = [];
    const blackKeys = [];

    for (let i = 0; i < keyboard.length; i++) {
      const key = keyboard[i];
      const isBlack = key.type === 'black';

      if (isBlack) {
        blackKeyCount++;
        const getXOffset = () => {
          return isVertical ? 0 : -blackKeyWidth / 2;
        };
        const getYOffset = () => {
          return isVertical ? -blackKeyHeight / 2 + whiteKeyHeight : 0;
        };

        blackKeys.push(
          <Key
            isVertical={isVertical}
            key={key.name}
            name={key.name}
            x={getX(i - blackKeyCount + 1) + getXOffset()}
            y={getY(i - blackKeyCount + 1) + getYOffset()}
            width={blackKeyWidth}
            height={blackKeyHeight}
            color={keyStyles.blackKeyColor}
            activeColor={keyStyles.blackKeyActiveColor}
            borderColor={keyStyles.blackKeyBorderColor}
            borderRadius={keyStyles.blackKeyBorderRadius}
            isActive={key.isActive}
            onKeyDown={key.handleKeyDown}
            onKeyUp={key.handleKeyUp}
          />
        );
      } else {
        whiteKeys.push(
          <Key
            isVertical={isVertical}
            key={key.name}
            name={key.name}
            x={getX(i - blackKeyCount)}
            y={getY(i - blackKeyCount)}
            width={whiteKeyWidth}
            height={whiteKeyHeight}
            color={keyStyles.whiteKeyColor}
            activeColor={keyStyles.whiteKeyActiveColor}
            borderColor={keyStyles.whiteKeyBorderColor}
            borderRadius={keyStyles.whiteKeyBorderRadius}
            isActive={key.isActive}
            onKeyDown={key.handleKeyDown}
            onKeyUp={key.handleKeyUp}
          />
        );
      }
    }

    return (
      <>
        {whiteKeys}
        {blackKeys}
      </>
    );
  };

  return (
    <svg width={calcContainerWidth()} height={calcContainerHeight()}>
      {renderKeys()}
    </svg>
  );
};
