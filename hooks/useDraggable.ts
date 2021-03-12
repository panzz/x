import { useCallback, useEffect, useState } from 'react';
import type { DraggableEventHandler } from 'react-draggable';
import { useTheme } from 'styled-components';
import { centerPosition } from 'utils/windowFunctions';

export type Position = {
  x: number;
  y: number;
};

type Draggable = Position & {
  updatePosition: DraggableEventHandler;
};

const useDraggable = (height: string, width: string): Draggable => {
  const { sizes } = useTheme();
  const [{ x, y }, setPosition] = useState<Position>({ x: 0, y: 0 });
  const updatePosition = useCallback<DraggableEventHandler>(
    (_event, { x: offsetX, y: offsetY }) =>
      setPosition({
        x: offsetX,
        y: offsetY
      }),
    []
  );

  useEffect(() => {
    setPosition(centerPosition(height, width, sizes.taskbar.height));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { x, y, updatePosition };
};

export default useDraggable;
