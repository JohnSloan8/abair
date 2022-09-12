import { atom, useRecoilState } from 'recoil';

import { AbNewsStoryModel } from '@/components/AbNewsStory/types';

const newsStoriesState = atom<AbNewsStoryModel[]>({
  key: 'news-stories-state',
  default: [],
});

const useNewsStories = () => {
  const [newsStories, setNewsStories] = useRecoilState(newsStoriesState);
  return { newsStories, setNewsStories };
};

export { useNewsStories };
