import { SetterOrUpdater } from 'recoil';

import axios from 'axios';

import { recognitionURL } from '@/config';
import { transcriptionModel } from '@/models/transcription';

// const postAudioBlob = async (blob: string | undefined, filename: string): transcriptionModel[] => {
const postAudio = async (
  audioData: string,
  userID: string | null,
  sessStart: string,
  setter: SetterOrUpdater<transcriptionModel>,
) => {
  await axios({
    method: 'post',
    url: recognitionURL,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      recogniseBlob: audioData,
      userID: 1,
      sessionID: 1,
      developer: true,
    },
  })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(function (response: any) {
      setter({
        user: userID,
        session_start: sessStart,
        audio_file_path: response.data.audioFilePath,
        duration: parseFloat(response.data.duration),
        recognition_response: response.data.transcriptions,
      });
      return true;
    })
    .catch(function (error) {
      alert('error:' + error);
      return 'problem';
    })
    .then(function () {
      console.log('recognition complete');
    });
};

export default postAudio;
