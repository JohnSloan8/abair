import { Session } from '@supabase/supabase-js';

import { DialectModel, GenderModel, ProfileModel } from '@/models/profile';
import { supabase } from '@/services/supabase';

const updateProfile = async (
  sess: Session,
  profile: ProfileModel,
  updatedDialect: DialectModel,
  updatedGender: GenderModel,
) => {
  try {
    // setLoading(true);
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
  } catch (error) {
    alert(error.message);
  }
};

export default updateProfile;
