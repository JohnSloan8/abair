import { atom, useRecoilState } from 'recoil';

import { AbNewsStoryModel } from '@/models/news';

const newsStoriesState = atom<AbNewsStoryModel[]>({
  key: 'news-stories-state',
  default: [],
});

const useNewsStories = () => {
  const [newsStories, setNewsStories] = useRecoilState(newsStoriesState);
  return { newsStories, setNewsStories };
};

const posterShownState = atom<boolean>({
  key: 'poster-shown-state',
  default: false,
});

const usePosterShown = () => {
  const [posterShown, setPosterShown] = useRecoilState(posterShownState);
  return { posterShown, setPosterShown };
};

export { useNewsStories, usePosterShown };
