import supabase from '@/services/supabase';

const getConsent = async (userID: string) => {
  try {
    const { data, error } = await supabase.from('consent').select(`*`).eq('id', userID).single();

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

export default getConsent;
