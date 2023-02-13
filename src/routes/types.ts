import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

enum Pages {
  Home,
  SpeechSynthesis,
  SpeechRecognition,
  Applications,
  News,
  Knowledge,
  Geabaire,
  About,
  NewsItem,
  Login,
  Profile,
  Contact,
  NotFound,
}

type PathRouteCustomProps = {
  title?: string;
  component: FC;
  icon?: FC<SvgIconProps>;
  showInSidebar: boolean;
  loggedIn: boolean;
  loggedOut: boolean;
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
