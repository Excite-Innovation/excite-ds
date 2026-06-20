import { remarkMdxFiles } from 'fumadocs-core/mdx-plugins/remark-mdx-files';
import { defineConfig } from 'fumadocs-mdx/config';
import { defineDocs } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxFiles],
  },
});

export const docs = defineDocs({
  docs: {
    postprocess: {
      extractLinkReferences: true,
    },
  },
});
