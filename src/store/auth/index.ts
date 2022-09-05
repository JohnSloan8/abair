import { atom, useRecoilState } from 'recoil';

const sessionState = atom({
  key: 'session',
  default: undefined,
});

const useSession = () => {
  const [session, setSession] = useRecoilState(sessionState);
  return { session, setSession };
};

const usernameState = atom({
  key: 'username',
  default: undefined,
});

const useUsername = () => {
  const [username, setUsername] = useRecoilState(usernameState);
  return { username, setUsername };
};

export { useSession, useUsername };
