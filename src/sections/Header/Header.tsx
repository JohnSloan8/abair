import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import FaceIcon from '@mui/icons-material/Face';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

// import Typography from '@mui/material/Typography';
import { FlexBox } from '@/components/styled';
import supabase from '@/services/supabase';
import { useSession } from '@/store/auth';
import useSidebar from '@/store/sidebar';

import abairFullLogo from '/assets/images/brand/abairFullLogo.png';

interface HeaderProps {
  logoSize?: number;
}

const Header = ({ logoSize = 50 }: HeaderProps) => {
  const [, sidebarActions] = useSidebar();
  const { session } = useSession();
  const navigate = useNavigate();

  const logOut = async () => {
    console.log('logout called');
    const { error } = await supabase.auth.signOut();
    console.log('error:', error);
    navigate('/login', { replace: true });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="inherit"
        elevation={0}
        position="fixed"
        sx={{ borderBottom: 1, borderColor: 'primary.light' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
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
            {session ? (
              //   <Chip icon={<FaceIcon />} label="" variant="outlined" />
              // ) : (
              <IconButton
                onClick={logOut}
                size="large"
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
                size="large"
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
