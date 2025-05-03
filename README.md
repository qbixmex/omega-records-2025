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

## Generate Auth Secret Key

```bash
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"

# It will generate something like this:
'1f135548a57a4e2c043d6eb6a6b5e144 and more ...'

# ------- Alternative with Open SSL -------
openssl rand -base64 32

# It will generate something like this:
'W4w2IBUAoVqqTI3ODmyvmJa ...'
```

### Copy the generated numbers and paste them into: .env -> ```AUTH_SECRET``` environment variable value:

```ini
AUTH_SECRET="1f135548a57a4e2c043d6eb6a6b5e144 ..."
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
## Docker

```bash
docker compose -p omega_records up -d

# -p container name
# -d detach mode
```

## Database


**Create your migrations:**

```bash
npx prisma migrate dev --name init

# --name migration_name
```

**Prisma Client:**

```bash
npx prisma generate
```

## Prisma Studio

**You can check your database in the browser**

```bash
npx prisma studio
```