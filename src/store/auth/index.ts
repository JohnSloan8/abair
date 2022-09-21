import { atom, useRecoilState } from 'recoil';

import { Session } from '@supabase/supabase-js';

const sessionState = atom<Session | null>({
  key: 'session',
  default: undefined,
});

const useSession = () => {
  const [session, setSession] = useRecoilState(sessionState);
  return { session, setSession };
};

const sessionStartState = atom<string>({
  key: 'session-start',
  default: undefined,
});

const useSessionStart = () => {
  const [sessionStart, setSessionStart] = useRecoilState(sessionStartState);
  return { sessionStart, setSessionStart };
};

export { useSession, useSessionStart };
