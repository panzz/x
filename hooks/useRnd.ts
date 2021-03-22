import useDraggable from 'hooks/useDraggable';
import useResizable from 'hooks/useResizable';
import { useCallback } from 'react';
import type { DraggableEventHandler } from 'react-draggable';
import type { Props, RndResizeCallback } from 'react-rnd';
import rndDefaults from 'utils/rndDefaults';

const useRnd = (maximized = false): Props => {
  // TODO: Get previous position/size from session
  const [size, setSize] = useResizable(maximized);
  const [position, setPosition] = useDraggable(maximized);
  const onDragStop = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) =>
      setPosition({ x: positionX, y: positionY }),
    [setPosition]
  );
  const onResizeStop = useCallback<RndResizeCallback>(
    (
      _event,
      _direction,
      { style: { height: elementHeight, width: elementWidth } },
      _delta,
      { x: positionX, y: positionY }
    ) => {
      setPosition({ x: positionX, y: positionY });
      setSize({ height: elementHeight, width: elementWidth });
    },
    [setPosition, setSize]
  );

  // TODO: Save position/size to session

  return {
    disableDragging: maximized,
    enableResizing: !maximized,
    onDragStop,
    onResizeStop,
    size,
    position,
    ...rndDefaults
  };
};

export default useRnd;
