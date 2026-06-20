import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Book } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/Excite-Innovation/excite-ds',
    links: [
      {
        icon: <Book />,
        text: 'Blog',
        url: '/blog',
        // secondary items will be displayed differently on navbar
        secondary: false,
        active: 'nested-url',
        label: 'Visit Blog',
      },
      {
        type: 'custom',
        children: <Button variant="default">Login</Button>,
        secondary: true,
      },
      {
        type: 'menu',
        text: 'Guide',
        items: [
          {
            text: 'Getting Started',
            description: 'Learn to use Fumadocs',
            url: '/docs',
          },
        ],
      },
    ],
    nav: {
      title: 'Excite! DS',
    },
  };
}
