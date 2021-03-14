import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';
import useDraggable from 'hooks/useDraggable';
import useResizeable from 'hooks/useResizeable';
import { Rnd } from 'react-rnd';
import StyledWindow from 'styles/components/system/Window/StyledWindow';
import type { ProcessComponentProps } from 'types/contexts/process';
import rndDefaults from 'utils/rndDefaults';

const Window: React.FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();
  const { height, width, updateSize } = useResizeable(maximized);
  const { x, y, updatePosition } = useDraggable(height, width, maximized);

  return (
    <Rnd
      disableDragging={maximized}
      enableResizing={!maximized}
      onDragStop={updatePosition}
      onResize={updateSize}
      position={{ x, y }}
      size={{ height, width }}
      {...rndDefaults}
    >
      <StyledWindow minimized={minimized}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
