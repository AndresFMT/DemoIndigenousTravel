#Indigenous Travel Manitoba Website

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Initial Setup Requirements
    - [npm](https://www.npmjs.com/)
    - [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli)

## Cloning the Repo 
    [https://github.com/indigpro/indigenous-travel-manitoba.git]

## Usage
    The IndigPro Studio file is used to format the headless CMS Sanity to be used to create and edit the content on the IndigPro Website. Build & Deploy 

## Install Dependencies
    npm install

## Running Studio
*change directory to studio*
cd studio

npm run start
localhost:3333/ (run Sanity Studio locally)

- https://indigpro.sanity.studio/desk - making changes to live Sanity Studio
- to deploy changes, go to - https://vercel.com/indigpro/indigpro-home/deployments
- click the elipses button in the top right of page, above the current/previous deployments
- select "Create Deployment", select the branch you wish to deploy from (most likely 'main')
- click "Create Deployment" button at bottom right of modal window.
- Vercel should take a couple minutes to deploy the changes.

## Sanity Login
- npm run login

## Building & Deploying
- [Build project for production] - npm run build
- [Deploy the studio] - npm run deploy

## Creating a new schema
Create a new schema file under the schemas folder (ie. newSchema.js)
- Simple schema layout example:
- - - - - - - - - - - - - - - -
    export default {
        name: 'post',
        title: 'Post',
        type: 'document',
        fields: [
            {
            name: 'title',
            title: 'Title',
            type: 'string',
            },
            {
            name: 'body',
            title: 'Body',
            type: 'text',
            },
        ],
    };
- - - - - - - - - - - - - - - -

# Sanity Blogging Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- Check out the example frontend: [React/Next.js](https://github.com/sanity-io/tutorial-sanity-blog-react-next)
- [Read the blog post about this template](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
