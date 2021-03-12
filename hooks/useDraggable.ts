import { useCallback, useEffect, useState } from 'react';
import type { DraggableEventHandler } from 'react-draggable';
import { useTheme } from 'styled-components';
import { centerDesktopPosition } from 'utils/windowFunctions';

export type Position = {
  x: number;
  y: number;
};

type Draggable = Position & {
  updatePosition: DraggableEventHandler;
};

const defaultWindowPosition: Position = { x: 0, y: 0 };

const useDraggable = (
  height: string,
  width: string,
  maximized = false
): Draggable => {
  const [{ x, y }, setPosition] = useState<Position>(defaultWindowPosition);
  const updatePosition = useCallback<DraggableEventHandler>(
    (_event, { x: offsetX, y: offsetY }) =>
      setPosition({
        x: offsetX,
        y: offsetY
      }),
    []
  );
  const { sizes } = useTheme();

  useEffect(
    () =>
      setPosition(centerDesktopPosition(height, width, sizes.taskbar.height)),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return {
    x: maximized ? 0 : x,
    y: maximized ? 0 : y,
    updatePosition
  };
};

export default useDraggable;
