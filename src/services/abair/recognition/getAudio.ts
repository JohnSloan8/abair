import axios from 'axios';

import { recogniseAudioURL } from '@/config';

const getAudio = async (audioID: string) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: recogniseAudioURL,
      params: {
        path: audioID,
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

export default getAudio;
