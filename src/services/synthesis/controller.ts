import axios from 'axios';

interface synthesisControllerProps {
  requestOrigin: string;
  synthesisText: string;
}

const synthesisController = ({
  requestOrigin = 'main',
  synthesisText = 'dia duit',
}: synthesisControllerProps) => {
  console.log('in synthesisControllerFrom:', requestOrigin);
  console.log('in synthesisController:', synthesisText);
  getAudio(synthesisText);
  return true;
};

const getAudio = (text: string) => {
  axios
    .get('https://phoneticsrv3.lcs.tcd.ie/nemo/synthesise', {
      params: {
        voice: 'anb.nemo',
        input: text,
        speed: 1,
        mode: 'DNN',
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
export default synthesisController;
