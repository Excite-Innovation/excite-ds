// @ts-nocheck
import * as __fd_glob_4 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/get-started.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/get-started.cn.mdx?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.cn.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.cn.json": __fd_glob_0, "meta.json": __fd_glob_1, }, {"get-started.cn.mdx": __fd_glob_2, "get-started.mdx": __fd_glob_3, "index.mdx": __fd_glob_4, });