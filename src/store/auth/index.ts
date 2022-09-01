import { atom, useRecoilState } from 'recoil';

const sessionState = atom({
  key: 'session',
  default: undefined,
});

const useSession = () => {
  const [session, setSession] = useRecoilState(sessionState);
  return { session, setSession };
};

export { useSession };
