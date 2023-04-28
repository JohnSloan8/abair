import supabase from '@/services/supabase';

const updateProfileLanguage = async (id: string, language: string) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .upsert({
        id: id,
        language_preference: language,
      })
      .select()
      .single();

    if (error) {
      throw error;
    } else {
      return data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default updateProfileLanguage;
