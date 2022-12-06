import { MediaRecorder, register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';

const initMediaRecorder = async () => {
  await register(await connect());
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/wav' });
  return mediaRecorder;
};

export default initMediaRecorder;
