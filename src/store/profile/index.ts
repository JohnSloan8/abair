import { atom, useRecoilState } from 'recoil';

import { DialectModel, GenderModel, ProfileModel } from '@/models/profile';

const profileState = atom<ProfileModel>({
  key: 'profile',
  default: undefined,
});

const useProfile = () => {
  const [profile, setProfile] = useRecoilState(profileState);
  return { profile, setProfile };
};

const dialectsState = atom<DialectModel[]>({
  key: 'dialects',
  default: undefined,
});

const useDialects = () => {
  const [dialects, setDialects] = useRecoilState(dialectsState);
  return { dialects, setDialects };
};

const gendersState = atom<GenderModel[]>({
  key: 'genders',
  default: undefined,
});

const useGenders = () => {
  const [genders, setGenders] = useRecoilState(gendersState);
  return { genders, setGenders };
};
export { useProfile, useDialects, useGenders };
