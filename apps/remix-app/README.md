# Setup
1. Install dependencies. pnpm MUST be used:
```sh
pnpm  i
```

2. Create .env file with this variables:
```sh
BRAND_NAME=
GATEWAY=
SERVER_FETCH_URL=
IMG_ORIGIN=
WEBSOCKET=
```

## Development

Run the dev server:

```shellscript
pnpm dev
```

## Deployment

First, build your app for production:

```sh
pnpm  build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## Adding new component from shadcn
Add shadcn component:
```sh
pnpm dlx shadcn@canary add [COMPONENT]
```
