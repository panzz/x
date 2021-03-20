import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import useRnd from 'hooks/useRnd';
import { useEffect } from 'react';
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
  const { position: initialPosition, size: initialSize } = windowState || {};
  const rndProps = useRnd(initialPosition, initialSize, maximized);

  useEffect(
    () => () => {
      if (!maximized) {
        setWindowStates((windowStates) => ({
          ...windowStates,
          [id]: rndProps
        }));
      }
    },
    [id, maximized, rndProps, setWindowStates]
  );

  return (
    <Rnd {...rndProps}>
      <StyledWindow minimized={minimized}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
