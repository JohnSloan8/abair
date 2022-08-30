import axios from 'axios';

import { synthesisMetadataURL } from '@/config';
import { APIVoiceOptionsModel } from '@/store/synthesis';

const getSynthesisMetadata = async () => {
  const res = await axios.get(synthesisMetadataURL);
  const { data } = res.data;
  data.forEach((o: APIVoiceOptionsModel) => {
    o.variant = 'outlined';
  });
  return data;
};

export default getSynthesisMetadata;
