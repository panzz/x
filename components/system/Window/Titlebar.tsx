import { CloseIcon, MaximizeIcon, MinimizeIcon } from 'components/system/Icons';
import { useProcesses } from 'contexts/process';
import useWindowActions from 'hooks/useWindowActions';
import { useCallback } from 'react';
import Button from 'styles/common/Button';
import Image from 'styles/common/Image';
import StyledTitlebar from 'styles/components/system/Window/StyledTitlebar';

type TitlebarProps = {
  id: string;
  onClose: React.MouseEventHandler;
};

const Titlebar = ({
  id,
  onClose: closeCallback
}: TitlebarProps): JSX.Element => {
  const {
    processes: {
      [id]: { icon, title }
    }
  } = useProcesses();
  const { onClose: closeWindow, onMaximize, onMinimize } = useWindowActions(id);
  const onClose = useCallback<React.MouseEventHandler>(
    (event) => {
      closeWindow(event);
      closeCallback(event);
    },
    [closeCallback, closeWindow]
  );

  return (
    <StyledTitlebar className="handle">
      <h1>
        <figure>
          <Image src={icon} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav className="cancel">
        <Button onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button onClick={onMaximize}>
          <MaximizeIcon />
        </Button>
        <Button className="close" onClick={onClose}>
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitlebar>
  );
};

export default Titlebar;
