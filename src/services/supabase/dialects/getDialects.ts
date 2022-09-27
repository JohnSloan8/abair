import { SetterOrUpdater } from 'recoil';

import { DialectModel } from '@/models/profile';
import supabase from '@/services/supabase';

const getDialects = async (dataSetter: SetterOrUpdater<DialectModel[]>) => {
  console.log('in getDialects');
  try {
    const { data, error, status } = await supabase.from('dialects').select(`id, name`);

    if (error && status !== 406) {
      throw error;
    } else {
      console.log('error:', error);
    }

    if (data) {
      console.log('data:', data);
      dataSetter(data);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    alert(e.message);
  }
};

export default getDialects;
