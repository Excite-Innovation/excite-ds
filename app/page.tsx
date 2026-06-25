import { Button } from "@/components/ui/button"
import { ArrowRight, Keyboard, ExternalLink } from 'lucide-react';
import Link from "next/link";
import { DocsPage, DocsDescription, DocsTitle, DocsBody } from 'fumadocs-ui/layouts/docs/page';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-bold">Excite! Design System</h1>
          <p>Excite! Design System is a reusable set of UI components, styles, and guidelines for building consistent and scalable products. It standardizes design and development to speed up workflows and ensure a unified user experience across all Excite products.</p>
          <p>Built on top of Shadcn as its foundation, the design system extends and customizes components through the shadcn directory, enabling consistent enhancements while staying aligned with the underlying architecture.</p>
          <div className="w-full flex justify-start gap-1">
            <Link href={"/docs"}>
              <Button variant={"default"} size={"sm"}>
                Get Started <ArrowRight />
              </Button>
            </Link>
            <Link 
              href="https://github.com/Excite-Innovation/excite-ds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"outline"} size={"sm"}>
                <div className="font-mono text-xs text-muted-foreground w-full flex justify-start gap-1">
                {/* <Keyboard /> <kbd>D</kbd>  Switch theme */}
                Visit GitHub
                <ExternalLink />
                </div>
              </Button>
            </Link>
            {/* <DocsPage>
              <InlineTOC items={page.data.toc}>
                Table of Contents
              </InlineTOC>
              <DocsTitle>
                title
              </DocsTitle>
              <DocsDescription>
                description
              </DocsDescription>
              <DocsBody>
                <h2>This heading looks good!</h2>
                It applies the Typography styles, wrap your content here.
              </DocsBody>
            </DocsPage> */}
          </div>
        </div>
      </div>
    </div>
  )
}
