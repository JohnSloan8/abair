import supabase from '@/services/supabase';

import { Database } from '../../../../types/supabase';

const updateProfile = async (profile: Database['public']['Tables']['profiles']['Row']) => {
  try {
    const { data, error } = await supabase.from('profiles').upsert(profile);

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
