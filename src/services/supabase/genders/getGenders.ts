import { SetterOrUpdater } from 'recoil';

import { GenderModel } from '@/models/profile';
import { supabase } from '@/services/supabase';

const getGenders = async (dataSetter: SetterOrUpdater<GenderModel[]>) => {
  console.log('in getGenders');
  try {
    const { data, error, status } = await supabase.from('genders').select(`id, name`);

    if (error && status !== 406) {
      throw error;
    } else {
      console.log('error:', error);
    }

    if (data) {
      console.log('data:', data);
      dataSetter(data);
    }
  } catch (e) {
    alert(e.message);
  }
};

export default getGenders;
