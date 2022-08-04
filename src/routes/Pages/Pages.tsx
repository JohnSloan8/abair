import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import routes from '..';

// import { getPageHeight } from './utils';

function Pages() {
  return (
    <Box /*sx={{ height: (theme) => getPageHeight(theme) }}*/>
      <Container maxWidth="md">
        <Routes>
          {Object.values(routes).map(({ path, component: Component }) => {
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </Container>
    </Box>
  );
}

export default Pages;
