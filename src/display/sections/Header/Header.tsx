/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { AbMenu } from 'abair-components';

import { basePath, domain } from '@/config';
import { headerHeight } from '@/config';
import { FlexBox } from '@/display/utils/flex';
import supabase from '@/services/supabase';
import { useSession } from '@/store/auth';
import { useProfile } from '@/store/profile';
import useSidebar from '@/store/sidebar';

import abairFullLogo from '/assets/images/brand/abair-logo-old.png';

interface HeaderProps {
  logoSize?: number;
}

const Header = ({ logoSize = 45 }: HeaderProps) => {
  const { session, setSession } = useSession();
  const [, sidebarActions] = useSidebar();
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [items, setItems] = useState<string[]>([
    `${t('pages.auth.login')}/${t('pages.auth.signup')}`,
  ]);

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log('error:', error);
    setItems([`${t('pages.auth.login')}/${t('pages.auth.signup')}`]);
    setProfile(null);
    setSession(null);
    navigate(`${basePath}login`, { replace: true });
  };

  const handleMenuChoice = async (item: string) => {
    if (item === `${t('pages.auth.logout')}`) {
      logOut();
    } else if (item === `${t('pageTitles.profile')}`) {
      window.location.href = `${domain}/profile?origin=applications/bat-mirialta`;
    } else if (item === `${t('pages.auth.login')}/${t('pages.auth.signup')}`) {
      window.location.href = `${domain}/login?origin=applications/bat-mirialta`;
    }
  };

  useEffect(() => {
    if (profile) {
      // console.log('profile:', profile);
      if (profile.username !== null && profile.username !== undefined) {
        setItems([profile.username, `${t('pageTitles.profile')}`, `${t('pages.auth.logout')}`]);
      } else {
        setItems([`${t('pages.auth.login')}/${t('pages.auth.signup')}`]);
      }
    } else {
      // console.log('profile:', profile);
    }
  }, [profile, i18n.language]);

  const changeLang = () => {
    i18n.language === 'en' ? i18n.changeLanguage('ga') : i18n.changeLanguage('en');
  };

  return (
    <Box sx={{ flexGrow: 1 }} color="background">
      <AppBar color="inherit" elevation={0} position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between', height: headerHeight }}>
          <FlexBox>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              sx={{ color: 'primary.main' }}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </FlexBox>
          <FlexBox>
            <Button component={Link} to={`${basePath}`}>
              <img src={abairFullLogo} height={logoSize} />
            </Button>
          </FlexBox>
          <FlexBox>
            <Box sx={{ position: 'absolute', right: { xs: 66, sm: 86 }, top: 16 }}>
              <Typography color={'primary.dark'}>
                <Button onClick={changeLang}>
                  <Typography
                    variant="body2"
                    color={i18n.language === 'ga' ? 'primary.dark' : 'primary.medium'}
                  >
                    ga
                  </Typography>
                  <Typography
                    variant="body2"
                    color={i18n.language === 'en' ? 'primary.dark' : 'primary.medium'}
                  >
                    /en
                  </Typography>
                </Button>
              </Typography>
            </Box>
            {session ? (
              <AbMenu
                avatar={profile !== null ? String(profile.avatar) : ''}
                items={items}
                handleMenuChoice={handleMenuChoice}
              />
            ) : (
              <IconButton
                component={Link}
                to="/login"
                size="medium"
                edge="end"
                sx={{ color: 'primary.main' }}
                aria-label="log in"
              >
                <LoginIcon />
              </IconButton>
            )}
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
