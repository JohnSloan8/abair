/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';

// import { AbRecognitionWaveVisual } from 'abair-components';
import { CenteredFlexBox } from '@/display/utils/flex';
import { useStream } from '@/store/recognition';
import { useVoiceRecording } from '@/store/recognition';
import { useAudioContext } from '@/store/recognition';
import { useBreakpointSize } from '@/store/viewDimensions';

const RecognitionWaveVisual = () => {
  const { stream } = useStream();
  const { breakpointSize } = useBreakpointSize();
  const { voiceRecording } = useVoiceRecording();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { audioContext, setAudioContext } = useAudioContext();

  const height = breakpointSize === 'xs' ? 75 : 100;
  const width = breakpointSize === 'xs' ? 400 : 484;

  useEffect(() => {
    if (stream) {
      if (!audioContext) {
        setAudioContext(new AudioContext());
      }
    }
  }, [stream]);

  useEffect(() => {
    if (audioContext) {
      visualize(stream, 'rgb(255, 255, 255)');
    }
  }, [audioContext]);

  const visualize = (stream: MediaStream | undefined, fillColor: string) => {
    console.log('visualise called');
    if (stream && audioContext && canvasRef.current !== null) {
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const canvasCtx = canvasRef.current.getContext('2d');
      source.connect(analyser);
      //analyser.connect(audioCtx.destination);

      const draw = () => {
        console.log('draw');
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
    } else {
      console.log('not visualising');
    }
  };

  return (
    <CenteredFlexBox
      sx={{
        width: '100%',
        position: 'relative',
        visibility: voiceRecording ? 'visible' : 'hidden',
      }}
    >
      <Box sx={{ position: 'absolute', bottom: { sm: 16, xs: -5 } }}>
        {/* <AbRecognitionWaveVisual
          stream={stream}
          breakpointSize={breakpointSize}
          audioCtx={audioCtx}
          canvasRef={canvasRef}
          height={breakpointSize === 'xs' ? 75 : 100}
          width={breakpointSize === 'xs' ? 400 : 484}
        /> */}
        <canvas width={width} height={height} ref={canvasRef}></canvas>
      </Box>
    </CenteredFlexBox>
  );
};

export default RecognitionWaveVisual;
