import { transcriptionModel } from '@/models/transcription';
import { supabase } from '@/services/supabase';

const storeTranscriptions = async (
  username: string,
  transcriptions: transcriptionModel[],
  filenamePrefix: string,
) => {
  try {
    const { error, status } = await supabase.from('transcriptions').insert([
      {
        user: username,
        transcription_data: transcriptions,
        filename_prefix: filenamePrefix,
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

export default storeTranscriptions;
