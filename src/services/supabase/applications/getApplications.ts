import supabase from '@/services/supabase';

const getApplications = async () => {
  try {
    const { data, error } = await supabase
      .from('applications')
      .select(`name, url, category, description_en, description_ga, image`);

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

export default getApplications;
