# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```

## Running with Docker

Use Docker Compose to run the app in development with hot reload:

1. Make sure Docker and Docker Compose are installed.
2. From the project root, start the container:

```bash
docker compose up
```

3. Open the app in your browser:

```text
http://localhost:3300/docs
```

4. To stop the container, run:

```bash
docker compose down
```

The first start will install dependencies inside the container. After that, file changes in the repository are reflected automatically through Next.js dev mode.
