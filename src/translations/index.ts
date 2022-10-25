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
              mileGlor: {
                title: 'A Thousand Voices',
                description: 'Abair in the studio',
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
              go: 'go',
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
            geabaire: {
              description: 'Providing Irish voices to AAC users',
              whatIsAACQuestion: 'What is AAC?',
              whatIsAACAnswer:
                'Augmentative and Alternative Communication (AAC) offers life changing access to communication for those with speech related disabilities.  AAC is a variety of strategies, tools and devices that supplement or replace speech including, no-tech methods such as gesture or sign language, low-tech systems including pictures and letterboards and high-tech options which use voice technology, often combining symbols and a keyboard, to offer a full robust vocabulary which afford the user the ability to communicate and engage fully with society.',
              exampleVideo: 'Example Video',
              projectDetailsTitle: 'Project Details',
              projectDetailsDescription:
                'AAC don Ghaeilge aims to make the Irish language available to AAC users.  This project builds on an initial prototype using CoughDrop and previous accessibility projects by the ABAIR group. It is supported by An Chomhairle um Oideachas Gaeltachta agus Gaelscolaíochta (COGG). Lack of access to high-tech AAC in Irish is a particular problem for those in Irish speaking families both in the Gaeltacht and outside the Gaeltacht and can be a major roadblock in AAC using children’s’ education particularly for those attending gaelscoileanna. The speech output will feature synthetic children’s voices developed within ABAIR for the main dialects of Irish.  We aim for the AAC system to be bilingual with the ability to toggle between Irish and English midsentence, to have built in grammar correctors and to use culturally appropriate language i.e., words specific to Ireland e.g., the GAA, Irish geography etc. A crucial element to this project is a training package for teachers in how to use and integrate AAC don Ghaeilge into their teaching. ',
              contactDetailsTitle: 'Contact Details',
            },
          },
        },
      },
      ga: {
        translation: {
          pageTitles: {
            home: 'Baile',
            synthesis: 'Guthanna ‘Sintéiseacha',
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
                title: 'Teicneolaíocht Urlabhra agus Teanga don Ghaeilge',
              },
              mileGlor: {
                title: 'Míle Glór',
                description: 'Abair sa Stiúideo',
              },
              core: {
                title: 'Bonnteicneolaíochtaí',
                description:
                  'Faigh grinnsmacht ar ghuthanna sintéiseacha ABAIR, agus faigh an t-aschur ó chóras aitheanta cainte ÉIST.',
              },
              applications: {
                title: 'Feidhmchláir',
                description:
                  'Tá teacht anseo ar réimse leathan feidhmchlár atá bunaithe ar bhonnteicneolaíochtaí ABAIR i réimsí oiriúnaithe don phobal i gcoitinne, don oideachas agus don inrochtaineacht.',
              },
              news: {
                title: 'An Nuacht is Déanaí',
                description:
                  'Lean na scéalta is déanaí ón tSaotharlann Foghraíochta agus Urlabhra, Coláiste na Tríonóide',
              },
              knowledge: {
                title: 'Cillín na Saíochta',
                description:
                  'Féach anseo ar an taighde teangeolaíochta atá á dhéanamh sa tSaotharlann Foghraíochta agus Urlabhra, agus atá ina chrann taca do na forbairtí teicneolaíochta',
              },
            },
          },
          pages: {
            home: {
              speak: 'abair',
              listen: 'éist',
              writeHere: 'scríobh anseo',
              speakInstructions: 'roghnaigh canúint & inscne > scríobh rud éigin > déan sintéis',
              listenInstructions: 'téigh go háit chiúin > cliceáil ar an micreafón > labhair amach',
              seeAll: 'féach gach scéal',
              readPublications: 'foilseacháin',
              technologyCards: {
                synthesis: {
                  description:
                    'Cliceáil anseo chun triail a bhaint as guthanna sintéiseacha ABAIR. Tá teacht ar ár múnlaí rialaithe, socruithe luais agus tuinairde',
                },
                recognition: {
                  description: 'Bain triail as córas ÉIST agus féach siar ar do chuid iarrachtaí',
                },
              },
              go: 'ar aghaidh',
            },
            auth: {
              login: 'Logáil isteach',
              signup: 'Cláraigh',
              emailAddress: 'Seoladh ríomhphoist',
              password: 'Pasfhocal',
              confirmPassword: 'Deimhnigh an Pasfhocal',
              createAccount: 'Cruthaigh Cuntas Abair',
              haveAccount: 'Tá cuntas agam cheana féin',
            },
            geabaire: {
              description: 'Córas cumarsáide AAC le Gaeilge',
              whatIsAACQuestion: 'Céard atá i gceist le AAC?',
              whatIsAACAnswer:
                'Séard atá i gceist le AAC ná córas cumarsáide a ligeann do dhaoine atá faoi mhíchumas urlabhra cumarsáid a dhéanamh. Tá réimse mhór córas AAC ar fáil; cuid acu– cosúil le gothaí agus an teanga comharthaíochta - nach bhfuil gá le hacmhainn ar bith len iad a úsáid, cuid eile ina mbaintear úsáid as acmhainní bunúsacha cosúil le pictiúir nó clár litreacha agus cuid eile atá ag brath ar acmhainní teicneolaíochta agus a bhaineann úsáid as teicneolaíocht na hurlabhra le siombail agus méarchlár. Is acmhainn teicneolaíochta é an córas AAC – Geabaire - atá á fhorbairt sa tSaotharlann Foghraíochta agus Urlabhra, ina gcuirtear foclóir leathan ar fáil agus a fhágann gur féidir le daoine bheith páirteach i ngach réimse den saol agus den tsochaí.',
              exampleVideo: 'Físeán Shampla',
              projectDetailsTitle: 'Sonraí an tionsacadail',
              projectDetailsDescription:
                'Is é an chéad chóras AAC don Ghaeilge é Geabaire. Thosaigh an tionscadal seo le cruthú coincheapa a tógadh ar an ardán Coughdrop, agus tá súil againn leagan a thógáil a bheidh ar fáil ar shuíomh ABAIR sar i bhfad. Is le maoiniú ó An Chomhairle um Oideachas Gaeltachta agus Gaelscolaíochta (COGG) atá an acmhainn seo á fhorbairt. Is deacracht ar leith é an easpa acmhainní cumarsáide do theaghlaigh a labhraíonn Gaeilge sa Ghaeltacht agus sa Ghalltacht chomh maith. Is constaic mhór í chomh maith ó thaobh an oideachais de, go háirithe dóibh siúd ag freastal ar Ghaelscoileanna nó ar scoileanna Gaeltachta. Táimid ag súil le córas dátheangach AAC a chur ar fáil a ligfidh don úsáideoir Gaeilge agus Béarla a úsáid in aon abairt amháin, más mian leo. Beidh gá le seiceálaithe gramadaí a bheith leabaithe sa chóras chomh maith le foclóir atá oiriúnach don chomhthéacs cultúrta (e.g. an CLG, focail a bhaineann le tíreolaíocht na hÉireann, etc). Cuirfear pacáiste traenalá ar fáil freisin do mhúinteoirí bunaithe ar bhealaí le Geabaire a úsáid sa seomra ranga. Fágann an comhpháirtíocht le tionscadal ABAIR go gcuirfear guthanna sintéiseacha atá oiriúnach do pháistí ar fáil sna príomhchanúintí sna blianta atá amach romhainn laistigh de chóras Geabaire. ',
              contactDetailsTitle: 'Sonraí teagmhála',
            },
          },
        },
      },
    },
  });

export default i18n;
