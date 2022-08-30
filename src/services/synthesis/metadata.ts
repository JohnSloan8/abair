import axios from 'axios';

import { synthesisMetadataURL } from '@/config';
import { APIVoiceOptionsModel } from '@/store/synthesis';

const getSynthesisMetadata = async () => {
  const res = await axios.get(synthesisMetadataURL);
  const { data } = res.data;
  data.forEach((o: APIVoiceOptionsModel, i: number) => {
    i === 0 ? (o.selected = true) : (o.selected = false);
  });
  return data;
};

export default getSynthesisMetadata;
