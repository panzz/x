import type { Position } from 'hooks/useDraggable';
import { stripUnit } from 'utils/styleFunctions';

// eslint-disable-next-line import/prefer-default-export
export const centerDesktopPosition = (
  height: string,
  width: string,
  taskbarHeight: string
): Position => {
  const desktopHeight =
    window.innerHeight - stripUnit(height) - stripUnit(taskbarHeight);
  const desktopWidth = window.innerWidth - stripUnit(width);

  return {
    x: Math.floor(desktopWidth / 2),
    y: Math.floor(desktopHeight / 2)
  };
};
