// import { SetterOrUpdater } from 'recoil';
import axios from 'axios';

import { recognitionURL } from '@/config';

// import { transcriptionModel } from '@/models/transcription';

// const postAudioBlob = async (blob: string | undefined, filename: string): transcriptionModel[] => {
const postAudio = async (audioData: string) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: recognitionURL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        recogniseBlob: audioData,
        developer: true,
        method: 'online2bin',
      },
      timeout: 10000,
    });
    if (data) {
      return data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
    return false;
  }
};

export default postAudio;
