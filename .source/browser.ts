// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"button.mdx": () => import("../content/docs/button.mdx?collection=docs"), "content.mdx": () => import("../content/docs/content.mdx?collection=docs"), "drop-zone.mdx": () => import("../content/docs/drop-zone.mdx?collection=docs"), "files.mdx": () => import("../content/docs/files.mdx?collection=docs"), "get-started.mdx": () => import("../content/docs/get-started.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "upload.mdx": () => import("../content/docs/upload.mdx?collection=docs"), "my-folder/button.mdx": () => import("../content/docs/my-folder/button.mdx?collection=docs"), "my-folder/content.mdx": () => import("../content/docs/my-folder/content.mdx?collection=docs"), "my-folder/drop-zone.mdx": () => import("../content/docs/my-folder/drop-zone.mdx?collection=docs"), "my-folder/files.mdx": () => import("../content/docs/my-folder/files.mdx?collection=docs"), "my-folder/get-started.mdx": () => import("../content/docs/my-folder/get-started.mdx?collection=docs"), "my-folder/index.mdx": () => import("../content/docs/my-folder/index.mdx?collection=docs"), }),
};
export default browserCollections;