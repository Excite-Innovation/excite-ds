import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Book, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/Excite-Innovation/excite-ds',
    links: [
      {
        icon: <Book />,
        text: 'Get Started',
        url: '/get-started',
        // secondary items will be displayed differently on navbar
        secondary: true,
        active: 'nested-url',
        label: 'Visit Blog',
      },
      {
        icon: <FileText />,
        text: 'Blog',
        url: '/blog',
        // secondary items will be displayed differently on navbar
        secondary: false,
        active: 'nested-url',
        label: 'Visit Blog',
      },
      // {
      //   type: 'custom',
      //   children: <Button variant="default">Login</Button>,
      //   secondary: true,
      // },
      {
        type: 'menu',
        text: 'Guide',
        items: [
          {
            text: 'Getting Started',
            description: 'Learn to use Fumadocs',
            url: '/docs/content',
          },
        ],
      },
    ],
    nav: {
      title: 'Excite! DS',
      transparentMode: 'top',
    },
  };
}
