import Titlebar from 'components/system/Windows/Titlebar';
import StyledWindow from 'styles/components/system/Windows/StyledWindow';
import type { ProcessComponentProps } from 'types/contexts/process';

const Window: React.FC<ProcessComponentProps> = ({ children, id }) => (
  <StyledWindow>
    <Titlebar id={id} />
    {children}
  </StyledWindow>
);

export default Window;
