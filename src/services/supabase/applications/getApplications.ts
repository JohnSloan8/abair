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
      console.log('data:', data);
      dataSetter(data);
    }
  } catch (e) {
    alert(e.message);
  } finally {
    console.log('done getting applications');
  }
};

export default getApplications;
