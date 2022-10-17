import { MediaRecorder, register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';

const initMediaRecorder = async () => {
  await register(await connect());
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  console.log('stream:', stream);
  const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/wav' });
  console.log('mediaRecorder:', mediaRecorder);
  // visualize(stream);
  return mediaRecorder;
};

// let audioCtx;
// const canvas = document.querySelector('.visualizer');
// const canvasCtx = canvas.getContext('2d');

// const visualize = (stream: MediaStream) => {
//   if (!audioCtx) {
//     audioCtx = new AudioContext();
//   }

//   const source = audioCtx.createMediaStreamSource(stream);

//   const analyser = audioCtx.createAnalyser();
//   analyser.fftSize = 2048;
//   const bufferLength = analyser.frequencyBinCount;
//   const dataArray = new Uint8Array(bufferLength);

//   source.connect(analyser);
//   //analyser.connect(audioCtx.destination);

//   draw();

//   function draw() {
//     const WIDTH = canvas.width;
//     const HEIGHT = canvas.height;

//     requestAnimationFrame(draw);

//     analyser.getByteTimeDomainData(dataArray);

//     canvasCtx.fillStyle = 'rgb(200, 200, 200)';
//     canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

//     canvasCtx.lineWidth = 2;
//     canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

//     canvasCtx.beginPath();

//     let sliceWidth = (WIDTH * 1.0) / bufferLength;
//     let x = 0;

//     for (let i = 0; i < bufferLength; i++) {
//       let v = dataArray[i] / 128.0;
//       let y = (v * HEIGHT) / 2;

//       if (i === 0) {
//         canvasCtx.moveTo(x, y);
//       } else {
//         canvasCtx.lineTo(x, y);
//       }

//       x += sliceWidth;
//     }

//     canvasCtx.lineTo(canvas.width, canvas.height / 2);
//     canvasCtx.stroke();
//   }
// };

export default initMediaRecorder;
