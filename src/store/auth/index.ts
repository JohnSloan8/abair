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

const sessionIDState = atom<string>({
  key: 'session-ID',
  default: undefined,
});

const useSessionID = () => {
  const [sessionID, setSessionID] = useRecoilState(sessionIDState);
  return { sessionID, setSessionID };
};

export { useSession, useSessionID };
