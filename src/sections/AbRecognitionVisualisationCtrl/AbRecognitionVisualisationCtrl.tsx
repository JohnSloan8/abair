/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

import { useStream } from '@/store/recognition';

const AbRecognitionVisualisationCtrl = () => {
  const [audioCtx, setAudioCtx] = useState<AudioContext>();
  const { stream } = useStream();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (stream) {
      if (!audioCtx) {
        setAudioCtx(new AudioContext());
      }
    }
  }, [stream]);

  useEffect(() => {
    if (audioCtx) {
      visualize(stream);
    }
  }, [audioCtx]);

  const visualize = (stream: MediaStream | undefined) => {
    if (stream && audioCtx && canvasRef.current !== null) {
      const source = audioCtx.createMediaStreamSource(stream);

      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 2048;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const canvasCtx = canvasRef.current.getContext('2d');
      source.connect(analyser);
      //analyser.connect(audioCtx.destination);

      const WIDTH = canvasRef.current.width;
      const HEIGHT = canvasRef.current.height;

      const draw = () => {
        console.log('in draw');
        requestAnimationFrame(draw);
        if (canvasCtx !== null) {
          analyser.getByteTimeDomainData(dataArray);

          canvasCtx.fillStyle = 'rgb(200, 200, 200)';
          canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

          canvasCtx.lineWidth = 2;
          canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

          canvasCtx.beginPath();

          const sliceWidth = (WIDTH * 1.0) / bufferLength;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * HEIGHT) / 2;

            if (i === 0) {
              canvasCtx.moveTo(x, y);
            } else {
              canvasCtx.lineTo(x, y);
            }

            x += sliceWidth;
          }
          if (canvasRef.current !== null) {
            canvasCtx.lineTo(canvasRef.current.width, canvasRef.current.height / 2);
            canvasCtx.stroke();
          }
        }
      };
      draw();
    }
  };

  return <canvas width="400px" style={{ position: 'absolute' }} ref={canvasRef}></canvas>;
};

export default AbRecognitionVisualisationCtrl;
