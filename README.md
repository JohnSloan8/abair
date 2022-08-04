<a href="https://abair.ie/" target="_blank" rel="noreferrer">
 <img src="./public/favicon.svg" title="Abair Website">
</a>

# Abair

**Irish Language Technologies**

## Synopsis

This is the source code for the abair.ie project.
It is extended from [this template](https://github.com/suren-atoyan/react-pwa)

## Motivation

---

## Features

- ✅ [Vite](#vite)
- ✅ [React](#react)
  - `v18` 🔥
- ✅ [TypeScript](#typescript)
- ✅ [Router](#router)
  - `React Router v6`
- ✅ [UI-framework](#ui-framework)
  - `MUI v5`
- ✅ [Store](#store)
  - `Recoil`
- ✅ [Notifications](#notifications)
- ✅ [Theme](#theme)
- ✅ [Base file/folder structure](#base-filefolder-structure)
- ✅ [PWA](#pwa)
- ✅ [Performance](#performance)
- ✅ [Hotkeys](#hotkeys)
- ✅ [Error Handling](#error-handling)
- ✅ [Pages](#pages)
- ✅ [Dev tools](#dev-tools)
  - ✅ eslint
  - ✅ prettier
  - ✅ husky
  - ✅ lint-staged
  - ✅ https localhost

#### Vite

[Vite](https://vitejs.dev/) is a blazingly fast build tool based on [native ES modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), [rollup](https://rollupjs.org/guide/en/), and [esbuild](https://esbuild.github.io/). `React-PWA` v1 was based on [CRA](https://reactjs.org/docs/create-a-new-react-app.html). We still love `CRA` and really think it's a great tool, but `Vite` provides a much better developer experience and it's unconditionally faster (maybe, we will also create a `CRA` version of `React-PWA` v2 in near future).

#### React

The latest version (v18) is used here. All dependencies support [React](https://reactjs.org/) v18 and the `v2` is refactored according to the latest changes and requirements of `React` v18.

#### TypeScript

"Not using [TypeScript](https://www.typescriptlang.org/) is like driving without a seatbelt" - [Matt Howard](https://twitter.com/MattDotHow).

For those who are not familiar with `TypeScript` - don't worry, you will love it, as we all did. `TypeScript` is a superset of `JavaScript`; it should be very easy to work with if you know `JavaScript`.

#### Router

[React Router v6](https://reactrouter.com/) is used here. You can find routing in the [src/routes](./src/routes/) folder.

#### UI-framework

[MUI](https://mui.com/) v5 is used here. `MUI` is a fully-loaded component library, super customizable, and easy to use.

#### Store

As a store management tool [Recoil](https://recoiljs.org/) is used. Check the [src/store](./src/store) folder for more information.

#### Notifications

Out of the box you have a notification system. To show a simple notification you can use `useNotification` hook:

```js
import { useNotifications } from '@/store/notifications';

function MyCoolComponent() {
  const [notifications, actions] = useNotification();

  function showNotification() {
    actions.push({ message: 'Բարև, կարմի՛ր արև' });
  }

  return (
    ...
  );
}

```

#### Theme

The [theme system](./src/theme/) is based on [MUI Theme](https://mui.com/material-ui/customization/theming/#main-content). To get the current theme mode or to change it you can use `useTheme` hook:

```js
...
import { useTheme } from '@/store/theme';

function MyCoolComponent() {
  const [theme, actions] = useTheme();

  // check the current theme mode
  console.log(theme);

  // if you want to change the theme, call an appropriate action
  function toggleTheme() {
    actions.toggle();
  }

  ...
}
```

You have access to `theme` object via `sx` prop and `styled-components`:

```js
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

// styled-components
const MyCoolButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
  color: theme.palette.text.disabled,
}));

// sx prop
function MyCoolComponent() {
  return <Box sx={{ borderRadius: theme.shape.borderRadius }}>...</Box>;
}
```

Also, you can redefine the theme in the theme configuration file. Check the [src/theme/themes.ts](./src/theme/themes.ts) file for more information.

#### Base file/folder structure

Here how the base file/folder structure looks like:

<img src="./public/file-folder-structure.png" title="file folder structure">

#### PWA

Out of the box, it's a `Progressive Web Application`. It can be installed on mobile and desktop devices 🙂, it can work offline, and many more. Check more about PWAs [here](https://web.dev/progressive-web-apps/)

Your users will also be informed about the new version of your app:

<img src="./public/pwa-reload.png" width="600" title="pwa reload">

#### Error Handling

Nobody likes white screens and crashes without any notes. In [src/error-handling](./src/error-handling) you can find the error handling implementation. Here you can find `withErrorHandler` high order component. You can wrap any component by this HOC and it will catch all errors and show a default or your custom fallback. Currently, the main APP component is wrapped by `withErrorHandler` HOC.

#### Pages

From a layout point of view the application consists of 3 main parts:

- Header
- Sidebar
- Pages

The last one is a router-based switcher. All routes are defined in [src/routes](./src/routes/index.ts). By default, pages are being loaded asynchronously via [asyncComponentLoader](src/utils/loader/loader.tsx). You can use it to asynchronously load any `React` component you want. It uses `React.Suspense` and `React.lazy` with some magic 🧙‍♂️

# Dev tools

- [eslint](https://eslint.org/)

  The latest version of `eslint` with the latest recommended collection of `eslint` rules is available out of the box. It contains:

  - eslint:recommended
  - react/recommended
  - @typescript-eslint/recommended

  Check the [.eslintrc.json](./eslintrc.json) file for more information.

- [prettier](https://prettier.io/)

  Stop fighting about styling in code reviews; save your time and energy - configure it once and let the machine format/correct your code.

  Check the [.prettierrc.json](./prettierrc.json) file for more information.

  There is an additional configuration for your import statements. They will be automatically ordered and grouped by the given rules (check the `.prettierrc.js`) - one more topic for debates in code reviews :)

- [husky](https://typicode.github.io/husky/#/)

  You can use it to lint your commit messages, run tests, lint code, etc.

  Currently, only `pre-commit` hook is set up. Every time you try to do a commit it will run `prettier` and `eslint` to be sure that everything is according to the rules.

- [lint-staged](https://github.com/okonet/lint-staged)

  `lint-staged` helps to run `eslint` and `prettier` only on staged files - it makes the linting process super fast and sensible.

- [https localhost](https://github.com/daquinoaldo/https-localhost)

  It's a simple way to run your application on localhost with https.

  Just run:

  ```bash
  npm run https-preview # or yarn https-preview
  ```

  after:

  ```bash
  npm run build # or yarn build
  ```

  and check `https://localhost` in your browser.

  NOTE: first time it will ask you about installing localhost certificate. For more info check [this](https://github.com/daquinoaldo/https-localhost#root-required)

## Usage

Install dependencies:

```bash
npm install # or yarn
```

In order to run it in development, run:

```bash
npm run dev # or yarn dev
```

In order to do a production build, run:

```bash
npm run build # yarn build
```

There are two more scripts:

`preview` and `https-preview`

- `preview` command will boot up local static web server that serves the files from `dist` folder. It's an easy way to check if the production build looks OK in your local environment.
- `https-preview` is the same, but with HTTPS. It's handy for testing your PWA capabilities in your local environment.

## License

[MIT](./LICENSE)
