// import isMobile from '@/display/utils/is-mobile';

const title = 'Abair';

const email = 'sloanjs@tcd.ie';

const repository = 'https://github.com/JohnSloan8/abair';

const rootURL = 'http://localhost:5173/';

const synthesisURL = 'https://abair.ie/api2/synthesise';
const synthesisMetadataURL = 'https://abair.ie/api2/meta';
const recognitionURL = 'https://phoneticsrv3.lcs.tcd.ie/asr_api/recognise';
const recogniseAudioURL = 'https://phoneticsrv3.lcs.tcd.ie/asr_api/recognise_audio';

const recognitionTimeLimit = 10;
const headerHeight = '64px';

const messages = {
  app: {
    crash: {
      title: 'Hmmmm... something went wrong. You can:',
      options: {
        email: `contact the Abair team through this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'There is something wrong with this component loading process... please try again later',
  },
  images: {
    failed: 'something went wrong during image loading :(',
  },
  404: 'No route for this URL',
};

const dateFormat = 'MMMM DD, YYYY';

const loader = {
  // no more blinking in your app
  delay: 0, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 500, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Abair - Irish Speech & Language Technologies',
};
const giphy404 = 'https://c.tenor.com/0T9VEI1iM5YAAAAC/father-ted.gif';

export {
  loader,
  dateFormat,
  messages,
  repository,
  email,
  title,
  defaultMetaTags,
  giphy404,
  rootURL,
  synthesisURL,
  synthesisMetadataURL,
  recognitionURL,
  recogniseAudioURL,
  recognitionTimeLimit,
  headerHeight,
};
