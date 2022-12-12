import { atom, useRecoilState } from 'recoil';

const streamState = atom<MediaStream | undefined>({
  key: 'stream-state',
  default: undefined,
});

const useStream = () => {
  const [stream, setStream] = useRecoilState(streamState);

  return { stream, setStream };
};

const mediaRecorderExistsState = atom<boolean>({
  key: 'media-recorder-exists-state',
  default: false,
});

const useMediaRecorderExists = () => {
  const [mediaRecorderExists, setMediaRecorderExists] = useRecoilState(mediaRecorderExistsState);

  return { mediaRecorderExists, setMediaRecorderExists };
};

export { useStream, useMediaRecorderExists };
