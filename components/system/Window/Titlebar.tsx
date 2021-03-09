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
          <Button title="Minimize" onClick={() => console.log('minimize')}>
            <svg data-radium="true" viewBox="0 0 10.2 1">
              <path d="M0 0h10.2v1H0z" />
            </svg>
          </Button>
          <Button title="Maximize" onClick={() => console.log('maximize')}>
            <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" data-radium="true">
              <path d="M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z" />
            </svg>
          </Button>
          <Button title="Close" onClick={() => close(id)}>
            <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" data-radium="true">
              <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 " />
            </svg>
          </Button>
        </nav>
      </StyledTitlebar>
    )}
  </ProcessConsumer>
);

export default Titlebar;
