import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import useRnd from 'hooks/useRnd';
import { useCallback } from 'react';
import { Rnd } from 'react-rnd';
import StyledWindow from 'styles/components/system/Window/StyledWindow';

type WindowProps = ProcessComponentProps & {
  children: React.ReactNode;
};

const Window = ({ children, id }: WindowProps): JSX.Element => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();
  const { position, size, ...rndProps } = useRnd(id, maximized);
  const { setWindowStates } = useSession();
  const onClose = useCallback<React.MouseEventHandler>(
    () =>
      setWindowStates((currentWindowStates) => ({
        ...currentWindowStates,
        [id]: {
          position,
          size
        }
      })),
    [id, position, size, setWindowStates]
  );

  return (
    <Rnd position={position} size={size} {...rndProps}>
      <StyledWindow minimized={minimized}>
        <Titlebar id={id} onClose={onClose} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
