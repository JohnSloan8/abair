import supabase from '@/services/supabase';

import { Database } from '../../../../types/supabase';

const updateProfile = async (profile: Database['public']['Tables']['profiles']['Row']) => {
  console.log('profile:', profile);
  try {
    const { data, error } = await supabase
      .from('profiles')
      .upsert({
        id: profile.id,
        username: profile.username,
        dialect: profile.dialect,
        gender: profile.gender,
        year: profile.year,
      })
      .select()
      .single();

    if (error) {
      throw error;
    } else {
      return data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default updateProfile;
