/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import { synthesisMetadataURL } from '@/config';

const getSynthesisMetadata = async () => {
  try {
    const { data } = await axios({
      method: 'get',
      url: synthesisMetadataURL,
    });

    if (data) {
      return data.data;
    }
  } catch (error: any) {
    alert('error:' + error);
  }
};

export default getSynthesisMetadata;
