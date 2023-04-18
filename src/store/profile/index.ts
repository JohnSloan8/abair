import { atom, useRecoilState } from 'recoil';

// import { DialectModel, GenderModel, ProfileModel } from '@/models/profile';
import { Database } from '../../../types/supabase';

const profileState = atom<Database['public']['Tables']['profiles']['Row'] | null>({
  key: 'profile',
  default: null,
});

const useProfile = () => {
  const [profile, setProfile] = useRecoilState(profileState);
  return { profile, setProfile };
};

const dialectsState = atom<Database['public']['Tables']['dialects']['Row'][]>({
  key: 'dialects',
  default: undefined,
});

const useDialects = () => {
  const [dialects, setDialects] = useRecoilState(dialectsState);
  return { dialects, setDialects };
};

const gendersState = atom<Database['public']['Tables']['genders']['Row'][]>({
  key: 'genders',
  default: undefined,
});

const useGenders = () => {
  const [genders, setGenders] = useRecoilState(gendersState);
  return { genders, setGenders };
};
export { useProfile, useDialects, useGenders };
