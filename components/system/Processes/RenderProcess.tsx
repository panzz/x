import dynamic from 'next/dynamic';
import type { ProcessComponentProps } from 'types/contexts/process';

type RenderProcessProps = {
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow: boolean;
  id: string;
};

const Window = dynamic(() => import('components/system/Windows/Window'));

const withWindow = (
  id: string,
  Component: React.ComponentType<ProcessComponentProps>
) => (
  <Window id={id}>
    <Component id={id} />
  </Window>
);

const RenderProcess = ({
  Component,
  hasWindow,
  id
}: RenderProcessProps): JSX.Element =>
  hasWindow ? withWindow(id, Component) : <Component id={id} />;

export default RenderProcess;
