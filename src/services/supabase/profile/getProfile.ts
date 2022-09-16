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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dialect: any = data.dialect;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gender: any = data.gender;
      setter({
        username: data.username,
        dialect: dialect.name,
        gender: gender.name,
        year: data.year,
      });
      console.log('profile data:', data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    alert(e.message);
  } finally {
    setLoader(false);
  }
};

export default getProfile;
