import { useState } from 'react';
import type { Position } from 'react-rnd';

export type Size = {
  width: string;
  height: string;
};

type WindowStates = {
  [key: string]: {
    size: Size;
    position: Position;
  };
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
