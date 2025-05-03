<div align="center">
  <img src="./public/images/omega-records-logo.png" alt="Omega Records Logo" />
</div>

<h1 align="center">Music Recording and Production Studio</h1>

## Install all dependencies

```bash
# NPM
npm install

# BUN
bun install
```

## Generate Secret for Authentication

```bash
openssl rand -base64 32
```

***Then paste generated secret to .env***

```ini
...
AUTH_SECRET="RNBUvICd9zpIPyIVAs80Z ..."
```

## Run Development Mode

```bash
# NPM
npm run dev

# BUN
bun dev
```

## Build the project

```bash
# NPM
npm run build

# BUN
bun run build
```

## Preview Locally

**Note: You must run build before running this command**

```bash
# NPM
npm start

# BUN
bun start
```