import { useEffect } from 'react';

import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useBreakpointSize } from '@/store/viewDimensions';

const Sizing = () => {
  const theme = useTheme();
  const { breakpointSize, setBreakpointSize } = useBreakpointSize();
  const xSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const small = useMediaQuery(theme.breakpoints.up('sm'));
  const medium = useMediaQuery(theme.breakpoints.up('md'));
  const large = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    large
      ? setBreakpointSize('lg')
      : medium
      ? setBreakpointSize('md')
      : small
      ? setBreakpointSize('sm')
      : setBreakpointSize('xs');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xSmall, small, medium, large]);

  useEffect(() => {
    console.log('breakpointSize:', breakpointSize);
  }, [breakpointSize]);

  return null;
};

export default Sizing;
