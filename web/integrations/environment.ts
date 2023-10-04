import {
  projectId,
  dataset,
  apiVersion,
  useCdn,
  previewSecretId,
  token,
} from './sanity.api';

export const sanityProjectId = process.env.SANITY_STUDIO_PROJECT_ID || projectId;
export const sanityDataset = process.env.SANITY_STUDIO_DATASET || dataset;
export const sanityApiVersion = process.env.SANITY_STUDIO_API_VERSION || apiVersion;
export const sanityToken = process.env.SANITY_STUDIO_API_DEPLOY_STUDIO || token;

export const sanityPreviewTokenNext = process.env.SANITY_STUDIO_PREVIEW_TOKEN_NEXT || previewSecretId;

