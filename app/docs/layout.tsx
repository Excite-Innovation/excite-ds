import { source } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { baseOptions } from "@/lib/layout.shared"
import type { ReactNode } from 'react';

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{ enabled: true }}
      containerProps={{ className: "..." }}
      // tree={source.getPageTree()}
      // links={[]}
    >
      {children}
    </DocsLayout>
  )
}
