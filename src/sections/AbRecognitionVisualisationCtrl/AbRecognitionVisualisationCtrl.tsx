/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

import { useStream } from '@/store/recognition';
import { useBreakpointSize } from '@/store/viewDimensions';

const AbRecognitionVisualisationCtrl = () => {
  const [audioCtx, setAudioCtx] = useState<AudioContext>();
  const { stream } = useStream();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { breakpointSize } = useBreakpointSize();
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(75);

  useEffect(() => {
    if (stream) {
      if (!audioCtx) {
        setAudioCtx(new AudioContext());
      }
    }
  }, [stream]);

  useEffect(() => {
    if (breakpointSize === 'xs') {
      setWidth(400);
      setHeight(75);
    } else {
      setWidth(484);
      setHeight(100);
    }
  }, [breakpointSize]);

  useEffect(() => {
    if (audioCtx) {
      visualize(stream, 'rgb(255, 255, 255)');
    }
  }, [audioCtx]);

  const visualize = (stream: MediaStream | undefined, fillColor: string) => {
    if (stream && audioCtx && canvasRef.current !== null) {
      const source = audioCtx.createMediaStreamSource(stream);
      console.log('fillColor:', fillColor);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 2048;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const canvasCtx = canvasRef.current.getContext('2d');
      source.connect(analyser);
      //analyser.connect(audioCtx.destination);

      const draw = () => {
        if (canvasCtx !== null) {
          analyser.getByteTimeDomainData(dataArray);

          canvasCtx.fillStyle = fillColor;
          canvasCtx.fillRect(0, 0, width, height);

          canvasCtx.lineWidth = 1.5;
          canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

          canvasCtx.beginPath();

          const sliceWidth = (width * 1.01) / bufferLength;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * height) / 2;

            if (i === 0) {
              canvasCtx.moveTo(x, y);
            } else {
              canvasCtx.lineTo(x, y);
            }

            x += sliceWidth;
          }
          if (canvasRef.current !== null) {
            canvasCtx.lineTo(width, height / 2);
            canvasCtx.stroke();
          }
        }
        requestAnimationFrame(draw);
      };
      draw();
    }
  };

  return <canvas width={width} height="100%" ref={canvasRef}></canvas>;
};

export default AbRecognitionVisualisationCtrl;
