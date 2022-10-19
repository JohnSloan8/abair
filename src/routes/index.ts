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

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Home]: {
    component: asyncComponentLoader(() => import('@/pages/Home')),
    path: '/',
    title: 'home',
    icon: HomeIcon,
    showInSidebar: true,
  },
  [Pages.SpeechSynthesis]: {
    component: asyncComponentLoader(() => import('@/pages/SpeechSynthesis')),
    path: '/speech-synthesis',
    title: 'synthesis',
    icon: RecordVoiceOverIcon,
    showInSidebar: true,
  },
  [Pages.SpeechRecognition]: {
    component: asyncComponentLoader(() => import('@/pages/SpeechRecognition')),
    path: '/speech-recognition',
    title: 'recognition',
    icon: HearingIcon,
    showInSidebar: true,
  },
  [Pages.Knowledge]: {
    component: asyncComponentLoader(() => import('@/pages/Knowledge')),
    path: '/knowledge',
    title: 'knowledge',
    icon: MenuBookIcon,
    showInSidebar: true,
  },
  [Pages.Applications]: {
    component: asyncComponentLoader(() => import('@/pages/Applications')),
    path: '/applications',
    title: 'applications',
    icon: AppsIcon,
    showInSidebar: true,
  },
  [Pages.AAC]: {
    component: asyncComponentLoader(() => import('@/pages/AAC')),
    path: '/aac',
    title: 'aac',
    showInSidebar: false,
  },
  [Pages.Team]: {
    component: asyncComponentLoader(() => import('@/pages/Team')),
    path: '/team',
    title: 'team',
    icon: GroupsIcon,
    showInSidebar: true,
  },
  [Pages.News]: {
    component: asyncComponentLoader(() => import('@/pages/News')),
    path: '/news',
    title: 'news',
    icon: NewspaperIcon,
    showInSidebar: true,
  },
  [Pages.NewsItem]: {
    component: asyncComponentLoader(() => import('@/pages/NewsItem')),
    path: '/news/:newsID',
    title: 'NewsItem',
    showInSidebar: false,
  },
  [Pages.Contact]: {
    component: asyncComponentLoader(() => import('@/pages/Contact')),
    path: '/contact',
    title: 'contact',
    icon: ContactMailIcon,
    showInSidebar: true,
  },
  [Pages.Login]: {
    component: asyncComponentLoader(() => import('@/pages/Login')),
    path: '/login',
    title: 'loginSignup',
    icon: LoginIcon,
    showInSidebar: true,
  },
  [Pages.Profile]: {
    component: asyncComponentLoader(() => import('@/pages/Profile')),
    path: '/profile',
    title: 'profile',
    icon: PersonIcon,
    showInSidebar: true,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
    showInSidebar: false,
  },
};

export default routes;
