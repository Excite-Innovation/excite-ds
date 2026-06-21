import { Button } from "@/components/ui/button"
import { FilePlusCorner, GitPullRequestCreate, SunMoon, Keyboard } from 'lucide-react';
import { DocsPage, DocsDescription, DocsTitle, DocsBody } from 'fumadocs-ui/layouts/docs/page';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          {/* <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p> */}
          <div className="w-full flex justify-start gap-1">
            <Button variant={"default"} size={"icon-sm"}>
              <FilePlusCorner />
            </Button>
            <Button variant={"default"} size={"sm"}>
              Add to version control <GitPullRequestCreate />
            </Button>
            <Button variant={"outline"} size={"sm"}>
              <div className="font-mono text-xs text-muted-foreground w-full flex justify-start gap-1">
              <Keyboard /> <kbd>D</kbd>  Switch theme
              </div>
            </Button>
            <DocsPage>
              {/* <InlineTOC items={page.data.toc}>
                Table of Contents
              </InlineTOC> */}
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
            </DocsPage>
          </div>
        </div>
      </div>
    </div>
  )
}
