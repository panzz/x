import Titlebar from 'components/system/Window/Titlebar';
import { ProcessConsumer } from 'contexts/process';
import StyledWindow from 'styles/components/system/Window/StyledWindow';
import type { ProcessComponentProps } from 'types/contexts/process';

// TODO: Pass maximized and minimized as StyledWindow props

const Window: React.FC<ProcessComponentProps> = ({ children, id }) => (
  <ProcessConsumer>
    {({
      processes: {
        [id]: { minimized }
      }
    }) =>
      !minimized && (
        <StyledWindow>
          <Titlebar id={id} />
          {children}
        </StyledWindow>
      )
    }
  </ProcessConsumer>
);

export default Window;
