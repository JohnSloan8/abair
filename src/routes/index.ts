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

import { basePath } from '@/config';
import asyncComponentLoader from '@/display/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Home]: {
    component: asyncComponentLoader(() => import('@/display/pages/Home')),
    path: `${basePath}`,
    title: 'home',
    icon: HomeIcon,
    showInSidebar: true,
    loggedIn: true,
    loggedOut: true,
  },
  [Pages.SpeechSynthesis]: {
    component: asyncComponentLoader(() => import('@/display/pages/SpeechSynthesis')),
    path: `${basePath}speech-synthesis`,
    title: 'synthesis',
    icon: RecordVoiceOverIcon,
    showInSidebar: true,
    loggedIn: true,
    loggedOut: true,
  },
  [Pages.SpeechRecognition]: {
    component: asyncComponentLoader(() => import('@/display/pages/SpeechRecognition')),
    path: `${basePath}speech-recognition`,
    title: 'recognition',
    icon: HearingIcon,
    showInSidebar: true,
    loggedIn: true,
    loggedOut: true,
  },
  [Pages.Applications]: {
    component: asyncComponentLoader(() => import('@/display/pages/Applications')),
    path: `${basePath}applications`,
    title: 'applications',
    icon: AppsIcon,
    showInSidebar: true,
    loggedIn: true,
    loggedOut: true,
  },
  [Pages.News]: {
    component: asyncComponentLoader(() => import('@/display/pages/News')),
    path: `${basePath}news`,
    title: 'news',
    icon: NewspaperIcon,
    showInSidebar: true,
    loggedIn: false,
    loggedOut: true,
  },
  [Pages.Knowledge]: {
    component: asyncComponentLoader(() => import('@/display/pages/Knowledge')),
    path: `${basePath}knowledge`,
    title: 'knowledge',
    icon: MenuBookIcon,
    showInSidebar: true,
    loggedIn: true,
    loggedOut: true,
  },
  [Pages.Geabaire]: {
    component: asyncComponentLoader(() => import('@/display/pages/Geabaire')),
    path: `${basePath}geabaire`,
    title: 'geabaire',
    showInSidebar: false,
    loggedIn: true,
    loggedOut: true,
  },
  [Pages.About]: {
    component: asyncComponentLoader(() => import('@/display/pages/About')),
    path: `${basePath}about`,
    title: 'about',
    icon: GroupsIcon,
    showInSidebar: true,
    loggedIn: true,
    loggedOut: true,
  },

  [Pages.NewsItem]: {
    component: asyncComponentLoader(() => import('@/display/pages/NewsItem')),
    path: `${basePath}news/:newsID`,
    title: 'NewsItem',
    showInSidebar: false,
    loggedIn: true,
    loggedOut: true,
  },
  [Pages.Contact]: {
    component: asyncComponentLoader(() => import('@/display/pages/Contact')),
    path: `${basePath}contact`,
    title: 'contact',
    icon: ContactMailIcon,
    showInSidebar: true,
    loggedIn: true,
    loggedOut: true,
  },
  [Pages.Login]: {
    component: asyncComponentLoader(() => import('@/display/pages/Login')),
    path: `${basePath}login`,
    title: 'loginSignup',
    icon: LoginIcon,
    showInSidebar: true,
    loggedIn: false,
    loggedOut: true,
  },
  [Pages.Profile]: {
    component: asyncComponentLoader(() => import('@/display/pages/Profile')),
    path: `${basePath}profile`,
    title: 'profile',
    icon: PersonIcon,
    showInSidebar: true,
    loggedIn: true,
    loggedOut: false,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/display/pages/NotFound')),
    path: '*',
    showInSidebar: false,
    loggedIn: false,
    loggedOut: true,
  },
};

export default routes;
