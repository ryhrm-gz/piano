import { KeyProps } from '../types';

export const Key = ({
  isVertical,
  name,
  color,
  activeColor,
  borderColor,
  borderRadius,
  width,
  height,
  x,
  y,
  isActive,
  onKeyDown,
  onKeyUp,
}: KeyProps) => {
  const isC = name.includes('C');
  const isNatural = name.length === 2;

  const path = isVertical
    ? `M ${x},${y} h ${
        width - borderRadius
      } a ${borderRadius},${borderRadius} 0 0 1 ${borderRadius},${borderRadius} v ${
        height - borderRadius * 2
      } a ${borderRadius},${borderRadius} 0 0 1 -${borderRadius},${borderRadius} h -${
        width - borderRadius
      } z`
    : `
    M ${x},${y} h ${width} v ${
        height - borderRadius
      } a ${borderRadius},${borderRadius} 0 0 1 -${borderRadius},${borderRadius} h -${
        width - borderRadius * 2
      } a ${borderRadius},${borderRadius} 0 0 1 -${borderRadius},-${borderRadius} z
  `;
  return (
    <g onMouseDown={onKeyDown} onMouseUp={onKeyUp}>
      <path
        d={path}
        fill={isActive ? activeColor : color}
        stroke={borderColor}
      />
      {isC && isNatural && (
        <text
          x={isVertical ? x + width - 20 : x + width / 2}
          y={isVertical ? y + height / 2 : y + height - 20}
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="sans-serif"
          fill="#777"
          fontSize={10}
          style={{
            userSelect: 'none',
          }}
        >
          {name}
        </text>
      )}
    </g>
  );
};
