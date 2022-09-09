import { Dispatch } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Session } from '@supabase/supabase-js';

import { ProfileModel } from '@/models/profile';
import { supabase } from '@/services/supabase';

const getProfile = async (
  sess: Session,
  setter: SetterOrUpdater<ProfileModel>,
  setLoader: Dispatch<boolean>,
) => {
  try {
    const { user } = sess;

    const { data, error, status } = await supabase
      .from('profiles')
      .select(`username, dialect(name), gender(name), year`)
      .eq('id', user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    } else {
      console.log('error:', error);
    }

    if (data) {
      setter({
        username: data.username,
        dialect: data.dialect.name,
        gender: data.gender.name,
        year: data.year,
      });
      console.log('profile data:', data);
    }
  } catch (e) {
    alert(e.message);
  } finally {
    setLoader(false);
  }
};

export default getProfile;
