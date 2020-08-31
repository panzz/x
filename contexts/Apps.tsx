import type { Dispatch, FC } from 'react';
import { createContext, useReducer } from 'react';
import App from '@/contexts/App';

import Blog from '@/components/Blog';
import DOS from '@/components/Dos';
import CommanderKeen from '@/components/Games/CommanderKeen';
import Doom from '@/components/Games/Doom';
import Winamp from '@/components/Winamp';

export type Apps = Array<App>;

type AppAction = {
  update: Partial<App>;
  id: string;
};

const initialApps: Apps = [Blog, DOS, CommanderKeen, Doom, Winamp];

const appReducer = (apps: Apps, { update, id }: AppAction) =>
  apps.map((app) => (app.id === id ? { ...app, ...update } : app));

export const AppsContext = createContext<{
  apps: Apps;
  updateApps: Dispatch<AppAction>;
}>({
  apps: [],
  updateApps: () => null
});

export const AppsProvider: FC = ({ children }) => {
  const [apps, updateApps] = useReducer(appReducer, initialApps);

  return (
    <AppsContext.Provider value={{ apps, updateApps }}>
      {children}
    </AppsContext.Provider>
  );
};
