import supabase from '@/services/supabase';

const getPublications = async () => {
  try {
    const { data, error } = await supabase
      .from('ab_publications')
      .select(`id, created_at, title, abstract, pdf_url, year_published, authors`)
      .order('year_published', { ascending: false });

    if (data) {
      return data;
    }

    if (error) {
      throw error;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default getPublications;
