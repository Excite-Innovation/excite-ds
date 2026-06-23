import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import {
  remarkAutoTypeTable,
  createGenerator,
  createFileSystemGeneratorCache,
} from 'fumadocs-typescript';

import { transformerTwoslash } from 'fumadocs-twoslash';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import { createFileSystemTypesCache } from 'fumadocs-twoslash/cache-fs';

// Docs source
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

// Type generator for Auto Type Table
const generator = createGenerator({
  cache: createFileSystemGeneratorCache('.next/fumadocs-typescript'),
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      remarkMath,
      [remarkAutoTypeTable, { generator }],
    ],

    rehypePlugins: (v) => [rehypeKatex, ...v],

    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },

      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash({
          typesCache: createFileSystemTypesCache(),
        }),
      ],

      langs: ['js', 'jsx', 'ts', 'tsx'],
    },
  },
});