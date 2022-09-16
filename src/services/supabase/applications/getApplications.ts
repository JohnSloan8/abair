import { SetterOrUpdater } from 'recoil';

import { ApplicationModel } from '@/components/AbApplicationCard/types';
import { supabase } from '@/services/supabase';

const getApplications = async (dataSetter: SetterOrUpdater<ApplicationModel[]>) => {
  try {
    // setLoading(true);

    const { data, error, status } = await supabase
      .from('applications')
      .select(`name, url, category, description, image`);

    if (error && status !== 406) {
      throw error;
    } else {
      console.log('error:', error);
    }

    if (data) {
      console.log('applications data:', data);
      dataSetter(data);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    alert(e.message);
  }
};

export default getApplications;
