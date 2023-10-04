// sanity.cli.js
import { defineCliConfig } from "sanity/cli";
import { sanityDataset, sanityProjectId } from "./environment";

export default defineCliConfig({
  api: {
    projectId: sanityProjectId,
    dataset: sanityDataset,
  }
});

