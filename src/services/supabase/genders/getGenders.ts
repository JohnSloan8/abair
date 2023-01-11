import supabase from '@/services/supabase';

const getGenders = async () => {
  try {
    const { data, error } = await supabase.from('genders').select(`*`);

    if (error) {
      console.log('error:', error);
      return;
    } else {
      return data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    alert(e.message);
  }
};

export default getGenders;
