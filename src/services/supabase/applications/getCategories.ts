import supabase from '@/services/supabase';

const getCategories = async () => {
  try {
    const { data, error } = await supabase
      .from('application_categories')
      .select(`id, name_en, name_ga`);

    if (error) {
      throw error;
    }

    if (data) {
      return data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    alert(e.message);
  }
};

export default getCategories;
