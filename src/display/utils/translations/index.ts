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
            about: 'About Us',
            news: 'News',
            login: 'Login',
            signUp: 'Sign Up',
            profile: 'Profile',
            contact: 'Contact',
            neartu: 'Neartú',
            APIs: 'APIs',
            corpora: 'Corpora',
            consent: 'Consent',
            forgotPassword: 'Forgot Password',
            updatePassword: 'Update Password',
          },
          infoHeader: {
            home: {
              main: {
                title: 'State-of-the-art Speech and Language Technologies for Irish',
              },
              mileGlor: {
                title: 'A Thousand Voices',
                description: 'ABAIR in the studio',
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
                description: "Check out what's been going on recently in the world of ABAIR",
              },
              knowledge: {
                title: 'Knowledge Base',
                description:
                  'Learn about the linguistic research being carried out which informs the technological development',
              },
              neartu: {
                title: 'Neartú',
                description: 'Working for equal rights for people with disabilities',
              },
              APIs: {
                title: 'APIs',
                description: 'Access all the ABAIR APIs',
              },
              corpora: {
                title: 'Corpora',
                description: 'Access all the ABAIR Corpora',
              },
              profile: {
                title: 'Profile',
                description: 'Please provide the following information',
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
              logout: 'Log Out',

              incorrectEmailOrPassword: 'Your email address or password is incorrect.',
              signup: 'Sign Up',
              emailAddress: 'Email Address',
              validEmail: 'Must be a valid email address',
              password: 'Password',
              confirmPassword: 'Confirm Password',
              createAccount: 'Create an ABAIR Account',
              forgotPassword: 'Forgot password',
              passwordUpdating:
                'If this email is registered, a password recovery link is now being sent',

              haveAccount: 'I already have an account',
              name: 'Name',
              sendEmail: 'Send email',
              updatePassword: 'Update Password',
              iAm: 'I am',
              over16: 'Over 16',
              under16: 'Under 16',
              minEight:
                'minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
              passwordsDontMatch: "Passwords don't match",
            },
            neartu: {
              expressionInterest: 'Expression of Interest',
              validName: 'Name must be at least 2 letters',
              interest: 'The aspect in which you are most interested',
              otherInfo: 'Any other details you would like to inform us of',
              consent:
                'I confirm that I am willing to have my details added to the ABAIR.ie list of contacts',
              send: 'send',
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
            about: {
              aboutUsTitle: 'About Us',
              aboutUsPin:
                "ABAIR is a project of the Phonetics and Speech Laboratory at the School of Linguistic, Speech and Communication Sciences, Trinity College Dublin. We've been developing synthetic voices for Irish since 2008. We've covered all three major dialects – Ulster, Connaught and Munster Irish. We're also in the process of developing a speech recognition system for Irish.",
              aboutUs:
                "Synthetic voices and speech recognition have been in high demand for the last few years. Devices like Alexa are very popular and there are many uses for speech synthesis. There is no doubt that speech technology will flourish in the future especially now that Artificial Intelligence is improving. We've been providing speech technology for Irish since 2008 and have come a long way. Today ABAIR's technology is used in the fields of education and accessibility and we are planning to develop more. We are currently in the porcess of developing a speech recognition system.",
              synthesisTitle: 'Synthesis',
              synthesis:
                ' There are a lot of use cases for text-to-speech (TTS) synthesis. It is used in public places, e.g. for announcements at train stations or aiports. TTS synthesis is extremely important for the visually impaired, because it enables them to use computers or smart phones. The amount of teaching material that incorporates TTS synthesis is constantly increasing too. People also like to use TTS synthesis to have newspaper articles read out to them while they are driving or jogging. In fact, TTS synthesis is a must for any language these days.',
              speechRecognitionTitle: 'Speech Recognition',
              speechRecognition:
                "Speech recognition enables us to interact with computers by simply 'talking' to them, e.g. when you tell your GPS where to go or when you ask your smart phone for the weather forecast. There's an increasing demand for a speech recognition system for Irish, and ABAIR is currently developing one.",
              challengeTitle: 'The Challenge',
              challenge:
                "Compared to major languages such as English and Spanish, there aren't as many resources available for minority languages like Irish. There are far less speakers and thus it is more difficult to build up a data base of recorded speech, which is indispensable for developing synthetic voices or speech recognition systems. Furthermore, experts are needed who understand the sound system and the structure of the language as well as engineers who are skilled in speech processing. That's why there is usually only a handful of people who develop speech technology for minority languages.",
              aheadTitle: 'Ahead',
              ahead:
                'Machine learning has improved considerably over the last couple of years and we are always trying to use the latest technology to improve our software and to provide facilities to the public.',
            },
            applications: {
              comingSoon: 'coming soon',
            },
            recognition: {
              privacyTitle: 'Privacy',
              privacyRecordings:
                'If you are over 16, you can use this feature anonymously. Your audio data will not be stored for longer than necessary to complete recognition. If you wish to help us improve our recognition models, please consider signing up for an account and consenting to use of your audio recordings for this purpose.',
              downloadConsent: 'Download the consent form',
              over16: 'I confirm that I am 16 years of age or older.',
              accept: 'accept',
              reject: 'reject',
            },
            profile: {
              thanks: 'Your profile has been updated',
              updated: 'Profile Updated',
              username: 'Username',
              birthYear: 'Year of Birth',
              dialect: 'Dialect',
              gender: 'Gender',
              male: 'Male',
              female: 'Female',
              ulster: 'Ulster',
              connemara: 'Connemara',
              munster: 'Munster',
              minimumThreeLetters: 'At least 3 letters',
              save: 'save',
            },
          },
          errorMessages: {
            app: {
              crash: {
                title: 'Hmmmm... something went wrong. You can:',
                options: {
                  email: 'contact the Abair team through this email - sloanjs@tcd.ie',
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
          },
        },
      },
      ga: {
        translation: {
          pageTitles: {
            home: 'Baile',
            synthesis: 'Guthanna Sintéiseacha',
            recognition: 'Aithint Chainte',
            knowledge: 'Taighde',
            applications: 'Feidhmchláir',
            about: 'Eolas Fúinn',
            news: 'Nuacht',
            login: 'Logáil Isteach',
            signUp: 'Clarú',
            neartu: 'Neartú',
            profile: 'Próifíl',
            contact: 'Teagmháil',
            APIs: 'APIs',
            corpora: 'Corpora',
            consent: 'Consent',
            forgotPassword: 'Dearmad ar Pasfhocal',
            updatePassword: 'Pasfhocal a Nuashonrú',
          },
          infoHeader: {
            home: {
              main: {
                title: 'Teicneolaíocht Urlabhra agus Teanga don Ghaeilge',
              },
              mileGlor: {
                title: 'Míle Glór',
                description: 'ABAIR sa Stiúideo',
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
                title: 'Cillín na Saíochta: Taighde',
                description:
                  'Féach anseo ar an taighde teangeolaíochta atá á dhéanamh sa tSaotharlann Foghraíochta agus Urlabhra, agus atá ina chrann taca do na forbairtí teicneolaíochta',
              },
              neartu: {
                title: 'Neartú',
                description: 'Ag obair ar son cearta comhionanna do dhaoine faoi mhíchumas',
              },
              APIs: {
                title: 'APIs',
                description: 'Access all the ABAIR APIs',
              },
              corpora: {
                title: 'Corpora',
                description: 'Access all the ABAIR Corpora',
              },
              profile: {
                title: 'Próifíl',
                description: 'Líon isteach an t-eolas seo a leanas, le do thoil',
              },
            },
          },
          pages: {
            home: {
              speak: 'ABAIR',
              listen: 'ÉIST',
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
              login: 'Logáil Isteach',
              logout: 'Logáil Amach',
              incorrectEmailOrPassword: 'Tá do ríomhphost nó pasfhocal mícheart.',
              signup: 'Cláraigh',
              emailAddress: 'Seoladh ríomhphoist',
              validEmail: 'Cuir seoladh bailí ríomphoist ar fáil, le do thoil',
              password: 'Pasfhocal',
              confirmPassword: 'Deimhnigh an Pasfhocal',
              createAccount: 'Cruthaigh Cuntas ABAIR',
              forgotPassword: 'Pasfhocal dearmadta',
              updatePassword: 'Pasfhocal a Nuashonrú',
              passwordUpdating:
                '(GA) Má tá an ríomhphost seo cláraithe, tá nasc athshlánaithe pasfhocail á sheoladh anois',
              haveAccount: 'Tá cuntas agam cheana féin',
              name: 'Ainm',
              sendEmail: 'Ríomhphost a sheoladh',
              iAm: 'Tá mé',
              over16: 'os cionn 16',
              under16: 'faoi bhun 16',
              minEight:
                '8 gcarachtar ar a laghad, ar a laghad ceannlitir amháin, litir bheag amháin, uimhir amháin agus carachtar speisialta amháin',
              passwordsDontMatch: 'Ní hionann na pasfhocail',
            },
            neartu: {
              expressionInterest: 'Léiriú spéise',
              validName: '2 charachtar ar a laghad',
              interest: 'An ghné a bhfuil spéis agat ann',
              otherInfo: 'Aon sonraí eile a mba mhaith leat a chur in iúl dúinn',
              consent:
                'Tá mé sásta go gcuirfí ar liosta teagmhála de chuid an tionscadail ABAIR.ie mé',
              send: 'seol sonraí',
              requestSubmitted: 'Glacadh le do chuid sonraí. Beimid chugat go luath.',
            },
            geabaire: {
              description: 'Córas cumarsáide AAC le Gaeilge',
              whatIsAACQuestion: 'Céard atá i gceist le AAC?',
              whatIsAACAnswer:
                'Séard atá i gceist le AAC ná córas cumarsáide a ligeann do dhaoine atá faoi mhíchumas urlabhra cumarsáid a dhéanamh. Tá réimse mhór córas AAC ar fáil; cuid acu– cosúil le gothaí agus an teanga comharthaíochta - nach bhfuil gá le hacmhainn ar bith len iad a úsáid, cuid eile ina mbaintear úsáid as acmhainní bunúsacha cosúil le pictiúir nó clár litreacha agus cuid eile atá ag brath ar acmhainní teicneolaíochta agus a bhaineann úsáid as teicneolaíocht na hurlabhra le siombail agus méarchlár. Is acmhainn teicneolaíochta é an córas AAC – Geabaire - atá á fhorbairt sa tSaotharlann Foghraíochta agus Urlabhra, ina gcuirtear foclóir leathan ar fáil agus a fhágann gur féidir le daoine bheith páirteach i ngach réimse den saol agus den tsochaí.',
              exampleVideo: 'Físeán Samplach',
              projectDetailsTitle: 'Sonraí an tionscadail',
              projectDetailsDescription:
                'Is é an chéad chóras AAC don Ghaeilge é Geabaire. Thosaigh an tionscadal seo le cruthú coincheapa a tógadh ar an ardán Coughdrop, agus tá súil againn leagan a thógáil a bheidh ar fáil ar shuíomh ABAIR sar i bhfad. Is le maoiniú ó An Chomhairle um Oideachas Gaeltachta agus Gaelscolaíochta (COGG) atá an acmhainn seo á fhorbairt. Is deacracht ar leith é an easpa acmhainní cumarsáide do theaghlaigh a labhraíonn Gaeilge sa Ghaeltacht agus sa Ghalltacht chomh maith. Is constaic mhór í chomh maith ó thaobh an oideachais de, go háirithe dóibh siúd ag freastal ar Ghaelscoileanna nó ar scoileanna Gaeltachta. Táimid ag súil le córas dátheangach AAC a chur ar fáil a ligfidh don úsáideoir Gaeilge agus Béarla a úsáid in aon abairt amháin, más mian leo. Beidh gá le seiceálaithe gramadaí a bheith leabaithe sa chóras chomh maith le foclóir atá oiriúnach don chomhthéacs cultúrta (e.g. an CLG, focail a bhaineann le tíreolaíocht na hÉireann, etc). Cuirfear pacáiste traenalá ar fáil freisin do mhúinteoirí bunaithe ar bhealaí le Geabaire a úsáid sa seomra ranga. Fágann an comhpháirtíocht le tionscadal ABAIR go gcuirfear guthanna sintéiseacha atá oiriúnach do pháistí ar fáil sna príomhchanúintí sna blianta atá amach romhainn laistigh de chóras Geabaire. ',
              contactDetailsTitle: 'Sonraí teagmhála',
            },
            about: {
              aboutUsTitle: 'Eolas Fúinn',
              aboutUsPin:
                'Is tionscadal de chuid na Saotharlainne Foghraíochta agus Urlabhra ag Scoil na nEolaíochtaí Teangeolaíochta, Urlabhra agus Cumarsáide, Coláiste na Tríonóide, BÁC, é ABAIR. Tá muid ag forbairt glórtha sintéise don Ghaeilge ó 2008. Tá na trí mhórchanúíntí clúdaithe againn – Gaeilge Uladh, Chonnacht agus na Mumhan. Chomh maith leis sin, tá muid ag obair ar chóras aithint chainte don Ghaeilge faoi láthair.',
              aboutUs:
                'Tá borradh faoi ghlórtha sintéise agus aithint chainte le cúpla bliain anuas. Tá an-éileamh ar threalamh fearacht Alexa agus is iomaí feidhm a bhaintear as glórtha sintéise. Níl aon dabht ach go dtiocfaidh tuilleadh fáis ar theicneolaíocht urlabhra sna blianta atá amach romhainn agus an Intleacht Shaorga ag dul i bhfeabhas an t-am ar fad. Tá muid ag cur teicneolaíocht urlabhra don Ghaeilge ar fáil ó bhí 2008 ann agus is iomaí dul chun cinn atá déanta againn ó shin i leith. Sa lá atá inniú ann, baintear úsáid as teicneolaíochtaí de chuid ABAIR i réimse an oideachais agus na rochtana agus tá muid meáite ar a thuilleadh teicneolaíochta a fhorbairt. Tá córas aithint chainte ar na bacáin againn faoi láthair.',
              synthesisTitle: 'Sintéis',
              synthesis:
                "Is iomaí feidhm atá leis an tsintéis Téacs-go-hUrlabhra ('Text-to-Speech'). Úsáidtear í i gcórais phoiblí, m. sh. le haghaidh fógraí sa stáisiún traenach nó ag an aerfort. Tá sí thar a bheith tábhachtach do dhaoine atá faoi mhíchumas radhairc ionas go bhfuil siad in ann ríomhairí agus gutháin chliste a úsáid gan stró. Tá líon na n-acmhainní teagaisc ar dlúthchuid díobh í an tsintéis ag fás ó lá go lá. Agus is minic a bhaineann daoine úsáid as sintéis chun éisteacht leis na scéalta nuaíochta is deireanaí agus iad ag tiomaint sa gcarr nó ag bogshodar. Go deimhin, is rud nach foláir a bheith ag teanga na laethanta seo é sintéis Teacs-go-hUrlabhra. ",
              speechRecognitionTitle: 'Aithint Chainte',
              speechRecognition:
                'Cuireann aithint chainte ar ár gcumas plé le ríomhairí go héasca trína bheith ag "caint leo", cuir i gcás ainm baile a thabhairt don chóras GPS sa gcarr nó scéal na haimsire a fhiosrú den ghuthán cliste. Tá éileamh mór ar chóras aithint chainte don Ghaeilge agus tá ABAIR ag díriú ar an mbearna a líonadh',
              challengeTitle: 'An Dúshlán',
              challenge:
                'Murab ionann is mórtheangacha dála an Bhéarla nó na Spáinnise, ní bhíonn an oiread céanna acmhainní ag mionteanga fearacht na Gaeilge. Tá líon na gcainteoirí i bhfad níos lú agus is deacair bunachar mór taifeadtaí a chur le chéile, rud a theastaíonn le haghaidh glórtha sintéise is córais aithint chainte a fhorbairt. Chomh maith leis sin, teastaíonn saineolaithe a bhfuil léargas acu ar fhoghraíocht agus struchtúr na teanga agus is gá le hinnealltóirí a bhfuil tuisicnit mhaith ar phróiseáil urlabhra acu. Mar sin, ní bhíonn ach dornán beag daoine ag obair ar theicneolaíocht urlabhra do mhionteangacha.',
              aheadTitle: 'Chun Cinn',
              ahead:
                'Tá feabhas thar chuimse tagtha ar an ríomhfhoghlaim le cúpla bliain anuas agus bíonn muid i gcónaí ag iarraidh leas a bhaint as na teicneolaíochtaí is nua chun snas a chur ar ár gcuid bogearraí agus áiseanna nua a chur ar fáil don phobal.',
            },
            applications: {
              comingSoon: 'le teacht',
            },
            recognition: {
              privacyTitle: 'Príobháideachas',
              privacyRecordings:
                'GA - If you are over 16, you can use this feature anonymously. Your audio data will not be stored for longer than necessary to complete recognition. If you wish to help us improve our recognition models, please consider signing up for an account and consenting to use of your audio recordings for this purpose.',
              downloadConsent: 'Íoslódáil an Fhoirm Thoilithe',
              over16: "Dearbhaím go bhfuilim 16 bliana d'aois nó níos sine.",
              accept: 'glac leis',
              reject: 'diúltaigh',
            },
            profile: {
              thanks: 'Go raibh maith agat as an eolas seo a sholáthar',
              updated: 'Próifíl Nuashonraithe',
              username: 'Ainm Úsáideora',
              birthYear: 'Bliain Breithe',
              dialect: 'Canúint',
              gender: 'Inscne',
              male: 'Fireann',
              female: 'Baineann',
              ulster: 'Ulaidh',
              connemara: 'Connachta',
              munster: 'Mumha',
              minimumThreeLetters: '3 litir ar a laghad',
              save: 'sábháil',
            },
          },
          errorMessages: {
            app: {
              crash: {
                title: 'Hmmmmm… chlis ar an gcóras. Is féidir leat:',
                options: {
                  email: 'Dul i dteagmháil le foireann ABAIR ag an seoladh - sloanjs@tcd.ie',
                  reset: 'Brúigh anseo chun an feidhmchlár a athshocrú',
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
          },
        },
      },
    },
  });

export default i18n;
