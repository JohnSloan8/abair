/* eslint-disable @typescript-eslint/no-explicit-any */
import { Session } from '@supabase/supabase-js';

import supabase from '@/services/supabase';

const getProfile = async (sess: Session) => {
  try {
    const { user } = sess;

    const { data, error } = await supabase.from('profiles').select(`*`).eq('id', user.id);

    if (error) {
      console.log('error:', error);
      return;
    } else {
      return data;
    }
  } catch (e: any) {
    alert(e.message);
  }
};

export default getProfile;
