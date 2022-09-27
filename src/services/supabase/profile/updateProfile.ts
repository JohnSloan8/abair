import { Session } from '@supabase/supabase-js';

import { DialectModel, GenderModel, ProfileModel } from '@/models/profile';
import supabase from '@/services/supabase';

const updateProfile = async (
  sess: Session | null,
  profile: ProfileModel,
  updatedDialect: DialectModel,
  updatedGender: GenderModel,
) => {
  try {
    // setLoading(true);
    if (sess) {
      const { user } = sess;

      const updates = {
        id: user.id,
        username: profile.username,
        dialect: updatedDialect.id,
        gender: updatedGender.id,
        year: profile.year,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates);

      if (error) {
        throw error;
      }
    } else {
      alert('no session');
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default updateProfile;
