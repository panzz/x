import type { Position } from 'hooks/useDraggable';
import { stripUnit } from 'polished';

// eslint-disable-next-line import/prefer-default-export
export const centerPosition = (
  height: string,
  width: string,
  taskbarHeight: string
): Position => ({
  x: Math.floor((window.innerWidth - Number(stripUnit(width))) / 2),
  y: Math.floor(
    (window.innerHeight -
      Number(stripUnit(height)) -
      Number(stripUnit(taskbarHeight))) /
      2
  )
});
