import axios from 'axios';

import { synthesisMetadataURL } from '@/config';

const getSynthesisMetadata = async () => {
  const res = await axios.get(synthesisMetadataURL);
  const { data } = res.data;
  return data;
};

export default getSynthesisMetadata;
