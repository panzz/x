import type { Position } from 'hooks/useDraggable';
import { stripUnit } from 'polished';

// eslint-disable-next-line import/prefer-default-export
export const centerDesktopPosition = (
  height: string,
  width: string,
  taskbarHeight: string
): Position => {
  const desktopHeight =
    window.innerHeight -
    Number(stripUnit(height)) -
    Number(stripUnit(taskbarHeight));
  const desktopWidth = window.innerWidth - Number(stripUnit(width));

  return {
    x: Math.floor(desktopWidth / 2),
    y: Math.floor(desktopHeight / 2)
  };
};
