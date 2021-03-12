import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';
import useDraggable from 'hooks/useDraggable';
import useResizeable from 'hooks/useResizeable';
import { Rnd } from 'react-rnd';
import rndDefaults from 'styles/components/system/Window/rndDefaults';
import StyledWindow from 'styles/components/system/Window/StyledWindow';
import type { ProcessComponentProps } from 'types/contexts/process';

const Window: React.FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();
  const { height, width, updateSize } = useResizeable(maximized);
  const { x, y, updatePosition } = useDraggable(height, width);

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
      <StyledWindow minimized={Boolean(minimized)} style={{ height, width }}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
