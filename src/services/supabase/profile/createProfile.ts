import supabase from '@/services/supabase';

const createProfile = async (
  id: string,
  group: string,
  parentName: string,
  parentEmail: string,
) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .insert({
        id: id,
        over_16: group === 'over 16' ? true : false,
        parent_caregiver_name: parentName === '' ? null : parentName,
        parent_caregiver_email: parentEmail === '' ? null : parentEmail,
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
