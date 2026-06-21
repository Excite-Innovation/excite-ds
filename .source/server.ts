// @ts-nocheck
import * as __fd_glob_13 from "../content/docs/my-folder/index.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/my-folder/get-started.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/my-folder/files.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/my-folder/drop-zone.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/my-folder/content.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/my-folder/button.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/get-started.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/files.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/drop-zone.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/content.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/button.mdx?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/my-folder/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "my-folder/meta.json": __fd_glob_1, }, {"button.mdx": __fd_glob_2, "content.mdx": __fd_glob_3, "drop-zone.mdx": __fd_glob_4, "files.mdx": __fd_glob_5, "get-started.mdx": __fd_glob_6, "index.mdx": __fd_glob_7, "my-folder/button.mdx": __fd_glob_8, "my-folder/content.mdx": __fd_glob_9, "my-folder/drop-zone.mdx": __fd_glob_10, "my-folder/files.mdx": __fd_glob_11, "my-folder/get-started.mdx": __fd_glob_12, "my-folder/index.mdx": __fd_glob_13, });