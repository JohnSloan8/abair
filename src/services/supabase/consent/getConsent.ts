import supabase from '@/services/supabase';

const getConsent = async (consentGroup: string) => {
  try {
    const { data, error } = await supabase
      .from('ab_consent')
      .select(`*`)
      .eq('consent_group', consentGroup);

    if (error) {
      throw error;
      console.log('error', error);
    }

    if (data) {
      console.log('data', data);
      return data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    alert(e.message);
  }
};

export default getConsent;
