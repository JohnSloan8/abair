import { atom, useRecoilState } from 'recoil';

import { publicationModel } from '@/models/publication';

const publicationsState = atom<publicationModel[]>({
  key: 'publications',
  default: [],
});

const usePublications = () => {
  const [publications, setPublications] = useRecoilState(publicationsState);
  return { publications, setPublications };
};

export { usePublications };
