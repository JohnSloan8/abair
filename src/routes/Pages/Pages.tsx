import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import Footer from '@/display/sections/Footer';
import ScrollToTop from '@/display/utils/scrollToTop';
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
    <Box>
      <Box minHeight={'100vh'}>
        <Box sx={{ height: '64px' }}></Box>
        <ScrollToTop>
          <Routes>
            {Object.values(routes).map(({ path, component: Component }) => {
              return <Route key={path} path={path} element={<Component />} />;
            })}
            {/* <Route key={'/'} path={'/'} element={<Navigate to="/dev" />} /> */}
          </Routes>
        </ScrollToTop>
      </Box>
      <Footer />
    </Box>
  );
}

export default Pages;
