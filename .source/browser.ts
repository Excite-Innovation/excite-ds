// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"button.mdx": () => import("../content/docs/button.mdx?collection=docs"), "content.mdx": () => import("../content/docs/content.mdx?collection=docs"), "drop-zone.mdx": () => import("../content/docs/drop-zone.mdx?collection=docs"), "files.mdx": () => import("../content/docs/files.mdx?collection=docs"), "get-started.mdx": () => import("../content/docs/get-started.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), }),
};
export default browserCollections;