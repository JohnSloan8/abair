// import { transcriptionModel } from '@/models/transcription';
import { supabase } from '@/services/supabase';

const storeTranscription = async (
  userID: string,
  text: string,
  filenamePrefix: string,
  model: string,
) => {
  try {
    const { error, status } = await supabase.from('transcriptions').insert([
      {
        user: userID,
        text: text,
        filename_prefix: filenamePrefix,
        model: model,
      },
    ]);

    console.log('transcription status:', status);

    if (error) {
      throw error;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default storeTranscription;
