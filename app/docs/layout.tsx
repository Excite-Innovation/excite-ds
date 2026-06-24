import { source } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { baseOptions } from "@/lib/layout.shared"
import { Banner } from "fumadocs-ui/components/banner";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      
      sidebar={{ 
        enabled: true,
        prefetch: false 
      }}
      containerProps={{ className: "..." }}
      // links={[]}
      tabs={[
        {
          title: 'Componentsh',
          description: 'Hello World!',
          // active for `/docs/components` and sub routes like `/docs/components/button`
          url: '/docs/components',
          // optionally, you can specify a set of urls which activates the item
          // urls: new Set(['/docs/test', '/docs/components']),
        },
      ]}
    >
      {/* <Banner variant="rainbow" changeLayout={false} className=""> Work in Progress! </Banner> */}
      {children}
    </DocsLayout>
    
  )
}
