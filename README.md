<p align="center">
<a href="https://abair.ie/" target="_blank" rel="noreferrer">
 <img width="100px" src="./public/assets/images/brand/abair-logo-old.png" title="Abair Website">
</a>
</p>

<p align="center">Providing State-of-the-Art Irish Speech and Language Technologies to the Public since 2011</p>

# Description

This is the source code for the [main website](https://abair.ie) of the Abair project developed by the [Phonetics and Speech Laboratory](https://www.tcd.ie/slscs/clcs/psl/) at [Trinity College Dublin](https://www.tcd.ie/).

# Aims of the Website

The codebase was developed for two audiences:

- Public
- Developers

The public must be able to easily and reliably access the speech technologies and applications developed by the Abair group.

New developers (often students) must experience a frictionless onboarding process where they can quickly understand the codebase and become active contributors.

# Design Philosophy

The design for the Abair website follows the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle).

Code should be minimal, modular, with clear documentation and arranged in a logical structure.

The tools employed, e.g. [React](https://reactjs.org/), [Supabase](https://supabase.com/), are widely used, well maintained and with comprehensive documentation.

# Tools, Libraries, Packages...

[This template](https://github.com/suren-atoyan/react-pwa) was used to initally structure the project (not all features are used).

Abair is built using the following:

### Language

- [TypeScript](https://www.typescriptlang.org/)

### Build Tool

- [Vite](https://vitejs.dev/)

### Front-end Framework

- [React](https://reactjs.org/)

### Router

- [React Router](https://reactrouter.com/en/main)

### UI Framework

- [Material UI](https://mui.com/)

### Component Library

- [Abair Component Library](https://abair-components.pages.dev/)
  - Built using [Storybook](https://storybook.js.org/) (See [github repository](https://github.com/JohnSloan8/abair-components) for more details)

### State Management

- [Recoil](https://recoiljs.org/)

### Back End as a Service (BaaS)

- [Supabase](https://supabase.com/)

### Dev Tools

- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [husky](https://typicode.github.io/husky/#/)
- [lint-staged](https://github.com/okonet/lint-staged)

# Getting Started 1: Front End

Clone project from Github:

```js
git clone https://github.com/JohnSloan8/abair.git
```

Install dependencies:

```js
npm install
```

Run dev environment:

```js
npm run dev
```

Build:

```js
npm run build
```

Run a preview of the build from the dist folder in http:

```js
npm run preview
```

Same with https:

```js
npm run https-preview
```

# Getting Started 2: Back End

[Supabase]() is used as the back-end for this site. This includes the following open-source tools out of the box:

- Database - [PostgreSQL](https://www.postgresql.org/)
- API endpoints - [PostgREST](https://postgrest.org/en/stable/)
- Authentication - [GoTrue](https://github.com/supabase/gotrue)
- Storage - [AWS](https://aws.amazon.com/)

You will need to request access to the Abair project from the project manager. Once granted, create a _.env_ file in the root of the project for environment variables:

```js
/.env

VITE_SUPABASE_URL=https://gheiwof...
VITE_SUPABASE_ANON_KEY=fhIend9wqb...
```

# Front End File Structure

The directories in the _src_ folder are:

:open_file_folder: config\
:open_file_folder: [display](#display)\
:open_file_folder: error-handling\
:open_file_folder: [models](#models)\
:open_file_folder: [routes](#routes)\
:open_file_folder: [services](#services)\
:open_file_folder: [store](#store)

## Display

Each page on Abair consists of [:open_file_folder: components](#components), [:open_file_folder: controllers](#controllers), and [:open_file_folder: sections](#sections). Each is explained below

### components

These are independent, reusable pieces of code. They are hosted in a seperate npm package which is built using [Storybook](https://storybook.js.org/) and can be accessed [here](https://abair-components.pages.dev/).

- [Material UI](https://mui.com/) is the styling library utilised for components
- Recoil State is always passed to components as arguments.
- React useState may be utilised within the component.
- Components tend to have a lot of parameters as many argments are passed.

Example: The AbSlider component has 8 parameters, 5 of which are predefined.

```js
const AbSlider = ({
  min = 0,
  max = 100,
  value,
  step = 1,
  onChange,
  icon,
  iconSize = 'medium',
  color = 'secondary.main',
}: AbSliderProps) => {
  return (
    <Stack
      spacing={2}
      py={{ sm: 2, xs: 0.5 }}
      sx={{ width: '100%' }}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {icon !== undefined && <SvgIcon component={icon} sx={{ color: color }} fontSize={iconSize} />}
      <Slider
        aria-label="Speed"
        valueLabelDisplay="auto"
        value={value}
        min={min}
        step={step}
        max={max}
        sx={{ color: color }}
        onChange={onChange}
      />
    </Stack>
  );
};
```

### controllers

Controllers interact with the [state library](https://recoiljs.org/). They access (and update) state, passing it as arguments to components if necessary.

- They never use parameters.
- May or may not return HTML.

Example: The SynthesisSpeed Controller subscribes to the Recoil _useSynthesisSpeed()_ and _useSynthesisVoiceIndex()_ functions to get (and set) state variables. These are then passed as arguments to the AbSlider component (described above).

```js
/src/controllers/Synthesis/SynthesisSpeed/SynthesisSpeed.tsx

...
const SynthesisSpeed = () => {
  const { synthesisSpeed, setSynthesisSpeed } = useSynthesisSpeed();
  const { synthesisVoiceIndex } = useSynthesisVoiceIndex();

  return synthesisVoiceIndex !== -1 ? (
    <AbSlider
      min={0.5}
      value={synthesisSpeed}
      max={1.5}
      onChange={(e) => setSynthesisSpeed(parseFloat((e.target as HTMLInputElement).value))}
      step={0.1}
      icon={SpeedIcon}
    />
  ) : null;
};
```

### sections

A _section_ is a block of reusable code which may contain a number of controllers and/or components, e.g. Headers and Footers.

### pages

A _page_ may contain any number of _sections_, _controllers_, and _components_.

Example: The SynthesisSpeed controller is used on the _abair.ie/synthesis_ page, alongside the SynthesisVoiceButtons, Gender, SynthesisPitch, and SynthesisModel controllers.

```js
/src/pages/SpeechSynthesis/SpeechSynthesis.tsx

...
<Grid>
  <Box minHeight={'69px'}>
    <SynthesisVoiceButtons />
  </Box>
  <GenderChoices />
  <Box width={'90%'}>
    <Box minHeight={{ sm: '62px', xs: '52px' }}>
      <SynthesisSpeed />
    </Box>
    <Box minHeight={{ sm: '62px', xs: '52px' }}>
      <SynthesisPitch />
    </Box>
  </Box>
  <Box minHeight={'77px'}>
    <SynthesisModel />
  </Box>
</Grid>
...
```

## Models

Contains type descriptions for the objects used in the project.

```js
interface synthesisVoiceModel {
  name: string;
  gender: string;
  locale: string;
  mode?: string;
  shortCode: string;
  voices: string[];
  pitchRange: number[];
  speedRange: number[];
  pitch: number;
  speed: number;
}
```

## Routes

All routes for the project are listed in the _src/routes/index.ts_ file, with redering handled by [React Router](https://reactrouter.com/en/main) taking place in _src/routes/Pages/Pages.tsx_. A new route can be added by appending to the list:

```js
const routes: Routes = {
    [Pages.Home]: {
        component: asyncComponentLoader(() => import('@/display/pages/Home')),
        path: '/',
        title: 'home',
        icon: HomeIcon,
        showInSidebar: true,
    },
    [Pages.SpeechSynthesis]: {
        component: asyncComponentLoader(() => import('@/display/pages/SpeechSynthesis')),
        path: '/speech-synthesis',
        ...
```

## Services

All calls to external APIs take place here. These involve requests to the Abair speech API for synthesis and recognition, and to Supabase for data stored there (e.g. profile information, publications, images, request history etc.)

## Store

All state management is managed here. Each piece of state is defined with a custom React hook exported.

```js
/src/store/synthesis/audio.ts

...
const synthesisAudioState = atom<string>({
  key: 'synthesis-audio-state',
  default: '',
});

const useSynthesisAudio = () => {
  const [synthesisAudio, setSynthesisAudio] = useRecoilState(synthesisAudioState);
  return { synthesisAudio, setSynthesisAudio };
};
...
```

As much as possible, state operations should be done in the store rather than in components (selecting, filtering etc.). For example, determining whether the text box for typing a synthesis request is empty or not:

```js
/src/store/synthesis/audio.ts

...
const isSynthesisAudioEmpty = selector({
  key: 'synthesis-audio-empty-state',
  get: ({ get }) => {
    const data = get(synthesisAudioState);
    return data.length > 0 ? false : true;
  },
});
...
```

## License

[MIT](./LICENSE)
