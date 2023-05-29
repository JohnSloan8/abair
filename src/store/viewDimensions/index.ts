import { atom, selector, useRecoilState } from 'recoil';

const viewHeightState = atom<number>({
  key: 'view-height',
  default: 0,
});

const useViewHeight = () => {
  const [viewHeight, setViewHeight] = useRecoilState(viewHeightState);
  return { viewHeight, setViewHeight };
};

const viewWidthState = atom<number>({
  key: 'view-width',
  default: 0,
});

const useViewWidth = () => {
  const [viewWidth, setViewWidth] = useRecoilState(viewWidthState);
  return { viewWidth, setViewWidth };
};

const breakpointSizeState = atom<'lg' | 'md' | 'sm' | 'xs'>({
  key: 'breakpoint-size',
  default: 'xs',
});

const useBreakpointSize = () => {
  const [breakpointSize, setBreakpointSize] = useRecoilState(breakpointSizeState);
  return { breakpointSize, setBreakpointSize };
};

const frontPageSelectionBoxSize = selector({
  key: 'front-page-selection-box-size-state',
  get: ({ get }) => {
    const breakpointSize = get(breakpointSizeState);
    const viewHeight = get(viewHeightState);
    if (breakpointSize === 'xs') {
      return viewHeight - 400;
    }
    return viewHeight - 450;
  },
});

export { useViewHeight, useBreakpointSize, useViewWidth, frontPageSelectionBoxSize };
