import { useCallback, useState } from 'react';
import type { DraggableEventHandler } from 'react-draggable';
import type { Position, Props as RndProps, RndResizeCallback } from 'react-rnd';
import { DEFAULT_WINDOW_POSITION, DEFAULT_WINDOW_SIZE } from 'utils/constants';
import rndDefaults from 'utils/rndDefaults';

export type Size = {
  width: string;
  height: string;
};

const useRnd = (maximized = false): RndProps => {
  const [{ x, y }, setPosition] = useState<Position>(DEFAULT_WINDOW_POSITION);
  const [{ height, width }, setSize] = useState<Size>(DEFAULT_WINDOW_SIZE);
  const updatePosition = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) =>
      setPosition({ x: positionX, y: positionY }),
    []
  );
  const updateSize = useCallback<RndResizeCallback>(
    (
      _event,
      _direction,
      { style: { height: elementHeight, width: elementWidth } },
      _delta,
      { x: positionX, y: positionY }
    ) => {
      setSize({ height: elementHeight, width: elementWidth });
      setPosition({ x: positionX, y: positionY });
    },
    []
  );

  return {
    disableDragging: maximized,
    enableResizing: !maximized,
    onDragStop: updatePosition,
    onResizeStop: updateSize,
    position: {
      x: maximized ? 0 : x,
      y: maximized ? 0 : y
    },
    size: {
      height: maximized ? '100%' : height,
      width: maximized ? '100%' : width
    },
    ...rndDefaults
  };
};

export default useRnd;
