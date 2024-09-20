[![Blitz.js](https://raw.githubusercontent.com/blitz-js/art/master/github-cover-photo.png)](https://blitzjs.com)

This is a [Blitz.js](https://github.com/blitz-js/blitz) app.

# ****ITM****

## Getting Started
- [nvm](https://github.com/nvm-sh/nvm) node version manager
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Blitz.js](https://github.com/blitz-js/blitz)
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli)

## Install Dependencies
npm install

## Clone Repository
  git clone https://github.com/indigpro/indigenous-travel-manitoba.git
  - https://github.com/indigpro/indigenous-travel-manitoba.git

## Sanity Studio Login
[https://indigenoustourismmanitoba.sanity.studio/studio]

## Github Instructions
  1. **Ensure you are in the root directory**
  2. **Fetch the latest changes to update**
    - git fetch
  3. **Create a New Branch**
    - git checkout -b feature/*branch-name* (branch name generally named after what is being done)
  4. **Create Pull Request to Main**
    - git add .
    - git commit -m "Your Message Here"
    - git push origin feature/*branch-name*
  5. **Pull the Latest Changes to Main**
    - git checkout main (changes branch to main)
    - git pull origin main (pulls latest changes from remote repository)
    - git merge feature/*branch-name* (merge branch into main)
    - resolve any conflicts
    - git push origin main (push the merged changes to the remote repository)
  5. **Deploying Changes to Live**
    - to deploy changes, go to - https://vercel.com/indigpro/indigpro-home/deployments
      - click the elipses button in the top right of page, above the current/previous deployments
      - select "Create Deployment", select the branch you wish to deploy from (99.999% of the time 'main')
      - click "Create Deployment" button at bottom right of modal window.
      - Vercel should take a couple minutes to deploy the changes.

Run your app in the development mode.

**Change Directory to Web*
cd web
```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Ensure the `.env.local` file has required environment variables:

```
DATABASE_URL=postgresql://<YOUR_DB_USERNAME>@localhost:5432/web
```

Ensure the `.env.test.local` file has required environment variables:

```
DATABASE_URL=postgresql://<YOUR_DB_USERNAME>@localhost:5432/web_test
```

## Tests

Runs your tests using Jest.

```
npm run test (vitest run --passWithNoTests)
```

Blitz comes with a test setup using [Vitest](https://vitest.dev/) and [react-testing-library](https://testing-library.com/).

## Commands

Blitz comes with a powerful CLI that is designed to make development easy and fast. You can install it with `npm i -g blitz`

```
  blitz [COMMAND]

  dev       Start a development server
  build     Create a production build
  start     Start a production server
  export    Export your Blitz app as a static application
  prisma    Run prisma commands
  generate  Generate new files for your Blitz project
  console   Run the Blitz console REPL
  install   Install a recipe
  help      Display help for blitz
  test      Run project tests
```

You can read more about it on the [CLI Overview](https://blitzjs.com/docs/cli-overview) documentation.

## What's included?

Here is the starting structure of your app.

```
web
├── src/
│   ├── api/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── mutations/
│   │   │   ├── changePassword.ts
│   │   │   ├── forgotPassword.test.ts
│   │   │   ├── forgotPassword.ts
│   │   │   ├── login.ts
│   │   │   ├── logout.ts
│   │   │   ├── resetPassword.test.ts
│   │   │   ├── resetPassword.ts
│   │   │   └── signup.ts
│   │   ├── pages/
│   │   │   ├── forgot-password.tsx
│   │   │   ├── login.tsx
│   │   │   ├── reset-password.tsx
│   │   │   └── signup.tsx
│   │   └── validations.ts
│   ├── core/
│   │   ├── components/
│   │   │   ├── Form.tsx
│   │   │   └── LabeledTextField.tsx
│   │   └── layouts/
│   │       └── Layout.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── 404.tsx
│   │   ├── index.test.tsx
│   │   └── index.tsx
│   └── users/
│       ├── hooks/
│       │   └── useCurrentUser.ts
│       └── queries/
│           └── getCurrentUser.ts
├── db/
│   ├── migrations/
│   ├── index.ts
│   ├── schema.prisma
│   └── seeds.ts
├── integrations/
├── mailers/
│   └── forgotPasswordMailer.ts
├── public/
│   ├── favicon.ico
│   └── logo.png
├── test/
│   ├── setup.ts
│   └── utils.tsx
├── .eslintrc.js
├── babel.config.js
├── blitz.config.ts
├── vitest.config.ts
├── package.json
├── README.md
├── tsconfig.json
└── types.ts
```

These files are:

- The `src/` folder is a container for most of your project. This is where you’ll put any pages or API routes.

- `db/` is where your database configuration goes. If you’re writing models or checking migrations, this is where to go.

- `public/` is a folder where you will put any static assets. If you have images, files, or videos which you want to use in your app, this is where to put them.

- `integrations/` is a folder to put all third-party integrations like with Stripe, Sentry, etc.

- `test/` is a folder where you can put test utilities and integration tests.

- `package.json` contains information about your dependencies and devDependencies. If you’re using a tool like `npm` or `yarn`, you won’t have to worry about this much.

- `tsconfig.json` is our recommended setup for TypeScript.

- `.babel.config.js`, `.eslintrc.js`, `.env`, etc. ("dotfiles") are configuration files for various bits of JavaScript tooling.

- `blitz.config.ts` is for advanced custom configuration of Blitz. [Here you can learn how to use it](https://blitzjs.com/docs/blitz-config).

- `vitest.config.ts` contains config for Vitest tests. You can [customize it if needed](https://vitejs.dev/config/).

You can read more about it in the [File Structure](https://blitzjs.com/docs/file-structure) section of the documentation.

### Tools included

Blitz comes with a set of tools that corrects and formats your code, facilitating its future maintenance. You can modify their options and even uninstall them.

- **ESLint**: It lints your code: searches for bad practices and tell you about it. You can customize it via the `.eslintrc.js`, and you can install (or even write) plugins to have it the way you like it. It already comes with the [`blitz`](https://github.com/blitz-js/blitz/tree/canary/packages/eslint-config) config, but you can remove it safely. [Learn More](https://blitzjs.com/docs/eslint-config).
- **Husky**: It adds [githooks](https://git-scm.com/docs/githooks), little pieces of code that get executed when certain Git events are triggerd. For example, `pre-commit` is triggered just before a commit is created. You can see the current hooks inside `.husky/`. If are having problems commiting and pushing, check out ther [troubleshooting](https://typicode.github.io/husky/#/?id=troubleshoot) guide. [Learn More](https://blitzjs.com/docs/husky-config).
- **Prettier**: It formats your code to look the same everywhere. You can configure it via the `.prettierrc` file. The `.prettierignore` contains the files that should be ignored by Prettier; useful when you have large files or when you want to keep a custom formatting. [Learn More](https://blitzjs.com/docs/prettier-config).

## Learn more

Read the [Blitz.js Documentation](https://blitzjs.com/docs/getting-started) to learn more.

The Blitz community is warm, safe, diverse, inclusive, and fun! Feel free to reach out to us in any of our communication channels.

- [Website](https://blitzjs.com)
- [Discord](https://blitzjs.com/discord)
- [Report an issue](https://github.com/blitz-js/blitz/issues/new/choose)
- [Forum discussions](https://github.com/blitz-js/blitz/discussions)
- [How to Contribute](https://blitzjs.com/docs/contributing)
- [Sponsor or donate](https://github.com/blitz-js/blitz#sponsors-and-donations)
