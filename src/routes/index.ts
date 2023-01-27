import AppsIcon from '@mui/icons-material/Apps';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GroupsIcon from '@mui/icons-material/Groups';
import HearingIcon from '@mui/icons-material/Hearing';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PersonIcon from '@mui/icons-material/Person';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

import { rootURL } from '@/config';
import asyncComponentLoader from '@/display/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Home]: {
    component: asyncComponentLoader(() => import('@/display/pages/Home')),
    path: `${rootURL}`,
    title: 'home',
    icon: HomeIcon,
    showInSidebar: true,
  },
  [Pages.SpeechSynthesis]: {
    component: asyncComponentLoader(() => import('@/display/pages/SpeechSynthesis')),
    path: `${rootURL}speech-synthesis`,
    title: 'synthesis',
    icon: RecordVoiceOverIcon,
    showInSidebar: true,
  },
  [Pages.SpeechRecognition]: {
    component: asyncComponentLoader(() => import('@/display/pages/SpeechRecognition')),
    path: `${rootURL}speech-recognition`,
    title: 'recognition',
    icon: HearingIcon,
    showInSidebar: true,
  },
  [Pages.Applications]: {
    component: asyncComponentLoader(() => import('@/display/pages/Applications')),
    path: `${rootURL}applications`,
    title: 'applications',
    icon: AppsIcon,
    showInSidebar: true,
  },
  [Pages.News]: {
    component: asyncComponentLoader(() => import('@/display/pages/News')),
    path: `${rootURL}news`,
    title: 'news',
    icon: NewspaperIcon,
    showInSidebar: true,
  },
  [Pages.Knowledge]: {
    component: asyncComponentLoader(() => import('@/display/pages/Knowledge')),
    path: `${rootURL}knowledge`,
    title: 'knowledge',
    icon: MenuBookIcon,
    showInSidebar: true,
  },
  [Pages.Geabaire]: {
    component: asyncComponentLoader(() => import('@/display/pages/Geabaire')),
    path: `${rootURL}geabaire`,
    title: 'geabaire',
    showInSidebar: false,
  },
  [Pages.About]: {
    component: asyncComponentLoader(() => import('@/display/pages/About')),
    path: `${rootURL}about`,
    title: 'about',
    icon: GroupsIcon,
    showInSidebar: true,
  },

  [Pages.NewsItem]: {
    component: asyncComponentLoader(() => import('@/display/pages/NewsItem')),
    path: `${rootURL}news/:newsID`,
    title: 'NewsItem',
    showInSidebar: false,
  },
  [Pages.Contact]: {
    component: asyncComponentLoader(() => import('@/display/pages/Contact')),
    path: `${rootURL}contact`,
    title: 'contact',
    icon: ContactMailIcon,
    showInSidebar: true,
  },
  [Pages.Login]: {
    component: asyncComponentLoader(() => import('@/display/pages/Login')),
    path: `${rootURL}login`,
    title: 'loginSignup',
    icon: LoginIcon,
    showInSidebar: true,
  },
  [Pages.Profile]: {
    component: asyncComponentLoader(() => import('@/display/pages/Profile')),
    path: `${rootURL}profile`,
    title: 'profile',
    icon: PersonIcon,
    showInSidebar: true,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/display/pages/NotFound')),
    path: '*',
    showInSidebar: false,
  },
};

export default routes;
