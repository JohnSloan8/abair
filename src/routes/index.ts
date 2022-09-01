import AppsIcon from '@mui/icons-material/Apps';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GroupsIcon from '@mui/icons-material/Groups';
import HearingIcon from '@mui/icons-material/Hearing';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Home]: {
    component: asyncComponentLoader(() => import('@/pages/Home')),
    path: '/',
    title: 'Home',
    icon: HomeIcon,
  },
  [Pages.SpeechSynthesis]: {
    component: asyncComponentLoader(() => import('@/pages/SpeechSynthesis')),
    path: '/speech-synthesis',
    title: 'Speech Synthesis',
    icon: RecordVoiceOverIcon,
  },
  [Pages.SpeechRecognition]: {
    component: asyncComponentLoader(() => import('@/pages/SpeechRecognition')),
    path: '/speech-recognition',
    title: 'Speech Recognition',
    icon: HearingIcon,
  },
  [Pages.Knowledge]: {
    component: asyncComponentLoader(() => import('@/pages/Knowledge')),
    path: '/knowledge',
    title: 'Knowledge',
    icon: MenuBookIcon,
  },
  [Pages.Applications]: {
    component: asyncComponentLoader(() => import('@/pages/Applications')),
    path: '/applications',
    title: 'Applications',
    icon: AppsIcon,
  },
  [Pages.Team]: {
    component: asyncComponentLoader(() => import('@/pages/Team')),
    path: '/team',
    title: 'Team',
    icon: GroupsIcon,
  },
  [Pages.Contact]: {
    component: asyncComponentLoader(() => import('@/pages/Contact')),
    path: '/contact',
    title: 'Contact',
    icon: ContactMailIcon,
  },
  [Pages.Login]: {
    component: asyncComponentLoader(() => import('@/pages/Login')),
    path: '/login',
    title: 'Login/Signup',
    icon: LoginIcon,
  },
  [Pages.Logout]: {
    component: asyncComponentLoader(() => import('@/pages/Logout')),
    path: '/logout',
    title: 'Logout',
    icon: LogoutIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
