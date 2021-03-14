import { CloseIcon, MaximizeIcon, MinimizeIcon } from 'components/system/Icons';
import { ProcessConsumer } from 'contexts/process';
import Button from 'styles/common/Button';
import StyledTitlebar from 'styles/components/system/Window/StyledTitlebar';

type TitlebarProps = {
  id: string;
};

const Titlebar = ({ id }: TitlebarProps): JSX.Element => (
  <ProcessConsumer>
    {({
      close,
      maximize,
      minimize,
      processes: {
        [id]: { icon, title }
      }
    }) => (
      <StyledTitlebar className="handle">
        <h1>
          <figure>
            <img src={icon} alt={title} />
            <figcaption>{title}</figcaption>
          </figure>
        </h1>
        <nav className="cancel">
          <Button title="Minimize" onClick={() => minimize(id)}>
            <MinimizeIcon />
          </Button>
          <Button title="Maximize" onClick={() => maximize(id)}>
            <MaximizeIcon />
          </Button>
          <Button title="Close" onClick={() => close(id)}>
            <CloseIcon />
          </Button>
        </nav>
      </StyledTitlebar>
    )}
  </ProcessConsumer>
);

export default Titlebar;
