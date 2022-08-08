import { Link } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import { FlexBox } from '@/components/styled';
import useSidebar from '@/store/sidebar';

import abairFullLogo from '/assets/images/brand/abairFullLogoWhite.png';

interface HeaderProps {
  logoSize?: number;
}

const Header = ({ logoSize = 50 }: HeaderProps) => {
  const [, sidebarActions] = useSidebar();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              sx={{ color: 'white' }}
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
            <IconButton
              onClick={() => {
                alert('login/logout here');
              }}
              size="large"
              edge="end"
              sx={{ color: 'white' }}
              aria-label="log in"
            >
              <LoginIcon />
            </IconButton>
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
