import supabase from '@/services/supabase';

const getDialects = async () => {
  console.log('in getDialects');
  try {
    const { data, error } = await supabase.from('dialects').select(`*`);

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

export default getDialects;
