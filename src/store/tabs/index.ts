import { atom, useRecoilState } from 'recoil';

const frontPageTabsState = atom<number>({
  key: 'front-page-tabs-state',
  default: 0,
});

const useFrontPageTabs = () => {
  const [frontPageTabs, setFrontPageTabs] = useRecoilState(frontPageTabsState);
  return { frontPageTabs, setFrontPageTabs };
};

const appTabsState = atom<number>({
  key: 'app-tabs-state',
  default: 0,
});

const useAppTabs = () => {
  const [appTabs, setAppTabs] = useRecoilState(appTabsState);
  return { appTabs, setAppTabs };
};
export { useFrontPageTabs, useAppTabs };
