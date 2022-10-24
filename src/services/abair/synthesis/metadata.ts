/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import { synthesisMetadataURL } from '@/config';

const getSynthesisMetadata = async () => {
  try {
    const { data } = await axios({
      method: 'get',
      url: synthesisMetadataURL,
      timeout: 10000,
    });

    if (data) {
      return data.data;
    }
  } catch (error: any) {
    alert('error:' + error);
    return false;
  }
};

export default getSynthesisMetadata;
