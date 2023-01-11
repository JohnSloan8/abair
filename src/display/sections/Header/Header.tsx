import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { headerHeight } from '@/config';
import { FlexBox } from '@/display/utils/flex';
import supabase from '@/services/supabase';
import { useSession } from '@/store/auth';
import useSidebar from '@/store/sidebar';

import abairFullLogo from '/assets/images/brand/abair-logo-old.png';

interface HeaderProps {
  logoSize?: number;
}

const Header = ({ logoSize = 45 }: HeaderProps) => {
  const [, sidebarActions] = useSidebar();
  const { session } = useSession();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const logOut = async () => {
    console.log('logout called');
    const { error } = await supabase.auth.signOut();
    console.log('error:', error);
    navigate('/login', { replace: true });
  };

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
            <Button component={Link} to={'/'}>
              <img src={abairFullLogo} height={logoSize} />
            </Button>
          </FlexBox>
          <FlexBox>
            <Box sx={{ position: 'absolute', right: { xs: 46, sm: 56 }, top: 16 }}>
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
              <IconButton
                onClick={logOut}
                size="medium"
                edge="end"
                sx={{ color: 'primary.main' }}
                aria-label="log in"
              >
                <LogoutIcon />
              </IconButton>
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
