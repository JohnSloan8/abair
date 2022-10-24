import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

enum Pages {
  Home,
  SpeechSynthesis,
  SpeechRecognition,
  Knowledge,
  Applications,
  Geabaire,
  Team,
  News,
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
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
