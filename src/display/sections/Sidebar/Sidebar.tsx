import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import DefaultIcon from '@mui/icons-material/Deblur';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import routes from '@/routes';
import { useSession } from '@/store/auth';
import useSidebar from '@/store/sidebar';

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();
  const { t } = useTranslation();
  const { session } = useSession();

  return (
    <SwipeableDrawer
      anchor="left"
      open={isSidebarOpen}
      onClose={sidebarActions.close}
      onOpen={sidebarActions.open}
      disableBackdropTransition={false}
      swipeAreaWidth={20}
      transitionDuration={500}
    >
      <List
        sx={{
          width: 280,
          pt: (theme) => `${theme.mixins.toolbar.minHeight}px`,
        }}
      >
        {Object.values(routes)
          .filter(
            (route) =>
              route.showInSidebar && ((route.loggedIn && session) || (route.loggedOut && !session)),
          )
          .map(({ path, title, icon: Icon }) => (
            <ListItem sx={{ py: 0, px: 1 }} key={path}>
              <ListItemButton onClick={sidebarActions.close} component={Link} to={path}>
                <ListItemIcon sx={{ color: 'primary.dark' }}>
                  {Icon ? <Icon /> : <DefaultIcon />}
                </ListItemIcon>
                <ListItemText sx={{ color: 'secondary.main' }}>
                  {t(`pageTitles.${title}`)}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
  );
}

export default Sidebar;
