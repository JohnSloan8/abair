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

const emailPasswordOKState = atom<boolean>({
  key: 'email-password-OK',
  default: false,
});

const useEmailPasswordOK = () => {
  const [emailPasswordOK, setEmailPasswordOK] = useRecoilState(emailPasswordOKState);
  return { emailPasswordOK, setEmailPasswordOK };
};

const AdultConsentOKState = atom<boolean>({
  key: 'adult-consent-OK',
  default: false,
});

const useAdultConsentOK = () => {
  const [adultConsentOK, setAdultConsentOK] = useRecoilState(AdultConsentOKState);
  return { adultConsentOK, setAdultConsentOK };
};

const ParentConsentOKState = atom<boolean>({
  key: 'Parent-consent-OK',
  default: false,
});

const useParentConsentOK = () => {
  const [parentConsentOK, setParentConsentOK] = useRecoilState(ParentConsentOKState);
  return { parentConsentOK, setParentConsentOK };
};

const childConsentOKState = atom<boolean>({
  key: 'Child-consent-OK',
  default: false,
});

const useChildConsentOK = () => {
  const [childConsentOK, setChildConsentOK] = useRecoilState(childConsentOKState);
  return { childConsentOK, setChildConsentOK };
};

const ParentEmailNameOKState = atom<boolean>({
  key: 'parent-email-name-OK',
  default: false,
});

const useParentEmailNameOK = () => {
  const [parentEmailNameOK, setParentEmailNameOK] = useRecoilState(ParentEmailNameOKState);
  return { parentEmailNameOK, setParentEmailNameOK };
};

export {
  useSession,
  useSessionID,
  useEmailPasswordOK,
  useAdultConsentOK,
  useParentConsentOK,
  useChildConsentOK,
  useParentEmailNameOK,
};
