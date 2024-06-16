# Next.js Template Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and integrated with [Chakra UI](https://chakra-ui.com/).

## Project Structure

The project follows the latest Next.js appRouter method and includes examples of various types of page routes and endpoint routes. The structure is as follows:

```
NextjsTemplate/
├── app/
│   ├── api/
│   │   ├── data.route.ts
│   │   ├── requests.tsx
│   ├── layout.tsx
│   ├── page.tsx
├── public/
├── styles/
│   ├── globals.css
├── next.config.js
├── package.json
├── README.md
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## API Routes

The project includes examples of various API routes with different HTTP methods. You can find these routes in the `app/api` directory.

- `GET /api/data`: Fetches data from an external API.
- `POST /api/requests`: Handles POST requests.
- `PUT /api/requests`: Handles PUT requests.
- `PATCH /api/requests`: Handles PATCH requests.
- `DELETE /api/requests`: Handles DELETE requests.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Netlify

The project is deployed on Netlify. You can access the deployed application at the following URL: [http://clinquant-meerkat-65d0dd.netlify.app](http://clinquant-meerkat-65d0dd.netlify.app).

To deploy your own version, use the following command:

```bash
deploy_netlify <build_dir>
```

Make sure to include the Netlify site token for future updates: `8eed03774e5c48a9af7d9c82e1a6c05b`.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
