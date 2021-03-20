import { useState } from 'react';
import type { Props as RndProps } from 'react-rnd';

export type Size = {
  width: string | number;
  height: string | number;
};

type WindowStates = {
  [key: string]: RndProps;
};

export type SessionContextState = {
  themeName: string;
  setThemeName: React.Dispatch<React.SetStateAction<string>>;
  windowStates: WindowStates;
  setWindowStates: React.Dispatch<React.SetStateAction<WindowStates>>;
};

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');
  const [windowStates, setWindowStates] = useState({});

  return { themeName, setThemeName, windowStates, setWindowStates };
};

export default useSessionContextState;
