import { MediaRecorder, register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';

const initStream = async () => {
  await register(await connect());
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  return stream;
};

const initMediaRecorder = async (stream: MediaStream) => {
  const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/wav' });
  console.log('mediaRecorder:', mediaRecorder);
  return mediaRecorder;
};

export { initStream, initMediaRecorder };
