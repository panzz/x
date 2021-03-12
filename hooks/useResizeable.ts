import { useCallback, useState } from 'react';
import type { RndResizeCallback } from 'react-rnd';

type Size = {
  height: string;
  width: string;
};

type Resizeable = Size & {
  updateSize: RndResizeCallback;
};

const defaultWindowSize: Size = {
  height: '200px',
  width: '320px'
};

const useResizeable = (maximized = false): Resizeable => {
  const [{ height, width }, setSize] = useState<Size>(defaultWindowSize);
  const updateSize = useCallback<RndResizeCallback>(
    (_event, _direction, { offsetHeight, offsetWidth }) =>
      setSize({
        height: `${offsetHeight}px`,
        width: `${offsetWidth}px`
      }),
    []
  );

  return {
    height: maximized ? '100%' : height,
    width: maximized ? '100%' : width,
    updateSize
  };
};

export default useResizeable;
