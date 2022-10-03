import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import { FullSizeBox } from '@/components/styled';
import { useViewHeight, useViewWidth } from '@/store/viewDimensions';

import routes from '..';

function Pages() {
  const { setViewHeight } = useViewHeight();
  const { setViewWidth } = useViewWidth();

  const handleResize = () => {
    setViewHeight(window.innerHeight);
    setViewWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FullSizeBox justifyContent="center">
      <Box border={1} sx={{ height: '64px' }}></Box>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </FullSizeBox>
  );
}

export default Pages;
