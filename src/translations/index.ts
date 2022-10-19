import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //   .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'ga',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          pageTitles: {
            home: 'Home',
            synthesis: 'Speech Synthesis',
            recognition: 'Speech Recognition',
            knowledge: 'Knowledge',
            applications: 'Applications',
            team: 'Team',
            news: 'News',
            loginSignup: 'Login/Signup',
            profile: 'Profile',
            contact: 'Contact',
          },
          infoHeader: {
            home: {
              main: {
                title: 'State-of-the-art Speech and Language Technologies for Irish',
              },
              core: {
                title: 'Core Technologies',
                description:
                  'Get fine-grained control over parameters for our speech synthesis, and view the output for a range of recognition models.',
              },
              applications: {
                title: 'Applications',
                description:
                  'Access a wide range of applications developed using our core technologies for public, education, and accessibility.',
              },
              news: {
                title: 'Latest News',
                description: "Check out what's been going on recently in the world of Abair",
              },
              knowledge: {
                title: 'Knowledge Base',
                description:
                  'Learn about the linguistic research being carried out which informs the technological development',
              },
            },
          },
          pages: {
            home: {
              speak: 'speak',
              listen: 'listen',
              writeHere: 'type here',
              speakInstructions: 'choose dialect & gender > type > synthesise',
              listenInstructions: 'go to a quiet space > tap microphone > speak',
              seeAll: 'see all',
              readPublications: 'read publications',
              technologyCards: {
                synthesis: {
                  description: 'Access all our voices and control models, speed & pitch',
                },
                recognition: {
                  description: 'View all speech recognition requests',
                },
              },
            },
            auth: {
              login: 'Log In',
              signup: 'Sign Up',
              emailAddress: 'Email Address',
              password: 'Password',
              confirmPassword: 'Confirm Password',
              createAccount: 'Create an Abair Account',
              haveAccount: 'I already have an account',
            },
          },
        },
      },
      ga: {
        translation: {
          pageTitles: {
            home: 'Baile',
            synthesis: 'Sintéis Urlabhra',
            recognition: 'Aithint Chainte',
            knowledge: 'Eolas',
            applications: 'Iarratais',
            team: 'An Fhoireann',
            news: 'Nuacht',
            loginSignup: 'Logáil Isteach/Clarú',
            profile: 'Próifíl',
            contact: 'Teagmháil',
          },
          infoHeader: {
            home: {
              main: {
                title: 'Teicneolaíocht Úrscothach Urlabhra agus Teanga don Ghaeilge',
              },
              core: {
                title: 'Croítheicneolaíochtaí',
                description:
                  'Faigh smacht mín ar pharaiméadair dár sintéis cainte, agus féach ar an aschur do raon samhlacha aitheantais.',
              },
              applications: {
                title: 'Iarratais',
                description:
                  'Rochtain a fháil ar raon leathan feidhmchlár a fhorbraítear ag baint úsáide as ár bpríomhtheicneolaíochtaí don phobal, don oideachas agus don inrochtaineacht.',
              },
              news: {
                title: 'An Nuacht is Déanaí',
                description: 'Seiceáil cad atá ar siúl le déanaí i saol Abair',
              },
              knowledge: {
                title: 'Eolas Cúlra',
                description:
                  'Foghlaim faoin taighde teangeolaíoch atá á dhéanamh a thugann eolas don fhorbairt teicneolaíochta',
              },
            },
          },
          pages: {
            home: {
              speak: 'abair',
              listen: 'éist',
              writeHere: 'scríobh anseo',
              speakInstructions: 'roghnaigh canúint & inscne > clóscríobh > sintéis',
              listenInstructions: 'téigh go dtí spás ciúin > tapáil micreafón > labhair',
              seeAll: 'gach rud a fheicáil',
              readPublications: 'foilseacháin a léamh',
              technologyCards: {
                synthesis: {
                  description:
                    'Faigh rochtain ar ár nguthanna go léir agus ár múnlaí rialaithe, luas agus tuinairde',
                },
                recognition: {
                  description: 'Féach ar gach iarratas aitheantais cainte',
                },
              },
            },
            auth: {
              login: 'Logáil isteach',
              signup: 'Clarú',
              emailAddress: 'Seoladh ríomhphoist',
              password: 'Pasfhocal',
              confirmPassword: 'Deimhnigh Pasfhocal',
              createAccount: 'Cruthaigh Cuntas Abair',
              haveAccount: 'Tá cuntas agam cheana féin',
            },
          },
        },
      },
    },
  });

export default i18n;
