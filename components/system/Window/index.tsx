import Titlebar from 'components/system/Window/Titlebar';
import { ProcessConsumer } from 'contexts/process';
import StyledWindow from 'styles/components/system/Window/StyledWindow';
import type { ProcessComponentProps } from 'types/contexts/process';

const Window: React.FC<ProcessComponentProps> = ({ children, id }) => (
  <ProcessConsumer>
    {({
      processes: {
        [id]: { maximized, minimized }
      }
    }) => (
      <StyledWindow
        maximized={Boolean(maximized)}
        minimized={Boolean(minimized)}
      >
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    )}
  </ProcessConsumer>
);

export default Window;
