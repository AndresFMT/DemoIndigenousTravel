import {createClient} from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const apiKey = process.env.SANITY_API_DEPLOY_STUDIO;

// Sanity Client
// Import and create a new client instance, and use its methods to interact with your project's Content Lake.
// Using this client you should be able to create, read, update, and delete documents, as well as perform other operations.
// https://www.npmjs.com/package/@sanity/client
const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token: apiKey,
    useCdn: true
});

export default client;

