import { atom, useRecoilState } from 'recoil';

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
export { useViewHeight, useViewWidth };
