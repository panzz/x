import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import useRnd from 'hooks/useRnd';
import type { Size } from 'hooks/useSessionContextState';
import { useEffect } from 'react';
import type { Position } from 'react-rnd';
import { Rnd } from 'react-rnd';
import StyledWindow from 'styles/components/system/Window/StyledWindow';

const Window: React.FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();
  const {
    windowStates: { [id]: windowState },
    setWindowStates
  } = useSession();
  const {
    maximized: initialMaximized,
    position: initialPosition,
    size: initialSize
  } = windowState || {};
  const { position, size, ...rndProps } = useRnd(
    initialPosition,
    initialSize,
    maximized ?? initialMaximized
  );

  useEffect(
    () => () =>
      setWindowStates((windowStates) => ({
        ...windowStates,
        [id]: {
          maximized: Boolean(maximized),
          position: position as Position,
          size: size as Size
        }
      })),
    [id, maximized, position, setWindowStates, size]
  );

  return (
    <Rnd position={position} size={size} {...rndProps}>
      <StyledWindow minimized={minimized}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
