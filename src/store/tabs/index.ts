import { atom, useRecoilState } from 'recoil';

const frontPageTabsState = atom<number>({
  key: 'front-page-tabs-state',
  default: 0,
});

const useFrontPageTabs = () => {
  const [frontPageTabs, setFrontPageTabs] = useRecoilState(frontPageTabsState);
  return { frontPageTabs, setFrontPageTabs };
};

export { useFrontPageTabs };
