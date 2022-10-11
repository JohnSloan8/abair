import { synthesisRequestModel } from '@/models/synthesis';
import supabase from '@/services/supabase';

const postSynthesisRequest = async (synthesisRequestData: synthesisRequestModel) => {
  try {
    const { error } = await supabase.from('synthesis_requests').insert([synthesisRequestData]);

    if (error) {
      throw error;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default postSynthesisRequest;
