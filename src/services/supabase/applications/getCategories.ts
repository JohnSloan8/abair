import { SetterOrUpdater } from 'recoil';

import { ApplicationCategoryModel } from '@/components/AbApplicationCard/types';
// import { ApplicationModel } from '@/components/AbApplicationCard/types';
import { supabase } from '@/services/supabase';

const getCategories = async (dataSetter: SetterOrUpdater<ApplicationCategoryModel[]>) => {
  try {
    const { data, error, status } = await supabase
      .from('application_categories')
      .select(`id, name`);

    if (error && status !== 406) {
      throw error;
    } else {
      console.log('error:', error);
    }

    if (data) {
      console.log('categories:', data);
      dataSetter(data);
    }
  } catch (e) {
    alert(e.message);
  }
};

export default getCategories;
