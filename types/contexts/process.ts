export type Process = {
  Component: React.ComponentType;
  hasWindow?: boolean;
  icon: string;
  maximized?: boolean;
  minimized?: boolean;
  title: string;
};

export type Processes = {
  [id: string]: Process;
};
