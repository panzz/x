import dynamic from 'next/dynamic';
import type { ProcessComponentProps } from 'types/contexts/process';

type RenderProcessProps = {
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow: boolean | undefined;
  id: string;
};

const Window = dynamic(() => import('components/system/Window'));

const RenderProcess = ({
  Component,
  hasWindow = false,
  id
}: RenderProcessProps): JSX.Element =>
  hasWindow ? (
    <Window id={id}>
      <Component id={id} />
    </Window>
  ) : (
    <Component id={id} />
  );

export default RenderProcess;
