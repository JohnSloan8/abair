import isMobile from '@/utils/is-mobile';

import type { Notifications } from './types';

const title = 'Abair';

const email = 'sloanjs@tcd.ie';

const repository = 'https://github.com/JohnSloan8/abair';

const rootURL = 'http://localhost:5173/';

const synthesisURL = 'https://abair.ie/api2/synthesise';
const synthesisMetadataURL = 'https://abair.ie/api2/meta';

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

const notifications: Notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 6000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Abair - Irish Speech & Language Technologies',
};
const giphy404 = 'https://c.tenor.com/0T9VEI1iM5YAAAAC/father-ted.gif';

export {
  loader,
  notifications,
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
};
