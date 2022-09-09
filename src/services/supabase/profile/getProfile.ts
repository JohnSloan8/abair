import { supabase } from '@/services/supabase';

const getProfile = async () => {
  try {
    setLoading(true);
    const { user } = session;

    const { data, error, status } = await supabase
      .from('profiles')
      .select(`username, dialect, gender, year`)
      .eq('id', user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    } else {
      console.log('error:', error);
    }

    if (data) {
      setUsername(data.username);
      setDialect(data.dialect);
      setYear(data.year);
      setGender(data.gender);
    }
  } catch (e) {
    alert(e.message);
  } finally {
    setLoading(false);
  }
};

export default getProfile;
