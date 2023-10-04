import { createClient } from 'next-sanity';

import {
  sanityProjectId,
  sanityDataset,
  sanityApiVersion,
} from './environment';

// Sanity Client
// Import and create a new client instance, and use its methods to interact with your project's Content Lake.
// Using this client you should be able to create, read, update, and delete documents, as well as perform other operations.
// https://www.npmjs.com/package/@sanity/client

const client = createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: true
});

export default client;

