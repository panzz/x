export type ProcessComponentProps = {
  id: string;
};

export type Process = {
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  icon: string;
  maximized?: boolean;
  minimized?: boolean;
  title: string;
};

export type Processes = {
  [id: string]: Process;
};
