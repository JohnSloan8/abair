import supabase from '@/services/supabase';

const createProfile = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .insert({
        id: id,
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

export default createProfile;
