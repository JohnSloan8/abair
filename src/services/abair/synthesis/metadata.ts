import { SetterOrUpdater } from 'recoil';

import axios from 'axios';

import { synthesisMetadataURL } from '@/config';
import { synthesisVoiceModel } from '@/store/synthesis/voiceOptions';

const getSynthesisMetadata = async (setter: SetterOrUpdater<synthesisVoiceModel[]>) => {
  await axios
    .get(synthesisMetadataURL)
    .then((res) => {
      res.data.data.map((v: synthesisVoiceModel) => {
        v.speedRange = [0.5, 1.5];
        v.pitchRange = [0.5, 1.5];
      });
      setter(res.data.data);
    })
    .catch((error) => {
      alert('error:' + error);
    });
};

export default getSynthesisMetadata;
