import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import { CenteredFlexBox } from '@/components/styled';

import routes from '..';

// import { getPageHeight } from './utils';

function Pages() {
  return (
    <CenteredFlexBox>
      <Box maxWidth="md">
        <Routes>
          {Object.values(routes).map(({ path, component: Component }) => {
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </Box>
    </CenteredFlexBox>
  );
}

export default Pages;
