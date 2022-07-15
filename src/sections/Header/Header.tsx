import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import { FlexBox } from '@/components/styled';
import useSidebar from '@/store/sidebar';

import abairFullLogo from '/abairFullLogo.png';

function Header() {
  const [, sidebarActions] = useSidebar();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox>
            <Button>
              <img src={abairFullLogo} height={50} />
            </Button>
          </FlexBox>
          <FlexBox sx={{ alignItems: 'center' }}>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="end"
              color="primary"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
