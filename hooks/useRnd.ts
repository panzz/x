import type { Size } from 'hooks/useSessionContextState';
import { useCallback, useMemo, useState } from 'react';
import type { DraggableEventHandler } from 'react-draggable';
import type { Position, Props as RndProps, RndResizeCallback } from 'react-rnd';
import { useTheme } from 'styled-components';
import { DEFAULT_WINDOW_POSITION, DEFAULT_WINDOW_SIZE } from 'utils/constants';
import rndDefaults from 'utils/rndDefaults';

const useRnd = (
  initialPosition = DEFAULT_WINDOW_POSITION,
  initialSize = DEFAULT_WINDOW_SIZE,
  maximized = false
): RndProps => {
  const { sizes } = useTheme();
  const [{ x, y }, setPosition] = useState<Position>(initialPosition);
  const [{ height, width }, setSize] = useState<Size>(initialSize);
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
  const position = useMemo(
    () => ({
      x: maximized ? 0 : x,
      y: maximized ? 0 : y
    }),
    [maximized, x, y]
  );
  const size = useMemo(
    () => ({
      height: maximized
        ? `${window.innerHeight - sizes.taskbar.height}px`
        : height,
      width: maximized ? '100%' : width
    }),
    [height, maximized, sizes.taskbar.height, width]
  );

  return {
    disableDragging: maximized,
    enableResizing: !maximized,
    onDragStop: updatePosition,
    onResizeStop: updateSize,
    position,
    size,
    ...rndDefaults
  };
};

export default useRnd;
