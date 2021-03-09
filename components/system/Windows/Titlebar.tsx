import { ProcessConsumer } from 'contexts/process';
import Button from 'styles/common/Button';
import StyledTitlebar from 'styles/components/system/Windows/StyledTitlebar';

type TitlebarProps = {
  id: string;
};

const Titlebar = ({ id }: TitlebarProps): JSX.Element => (
  <ProcessConsumer>
    {({
      close,
      processes: {
        [id]: { icon, title }
      }
    }) => (
      <StyledTitlebar>
        <h1>
          <figure>
            <img src={icon} alt={title} />
            <figcaption>{title}</figcaption>
          </figure>
        </h1>
        <nav>
          <Button onClick={() => console.log('minimize')}>_</Button>
          <Button onClick={() => console.log('maximize')}>□</Button>
          <Button onClick={() => close(id)}>X</Button>
        </nav>
      </StyledTitlebar>
    )}
  </ProcessConsumer>
);

export default Titlebar;
