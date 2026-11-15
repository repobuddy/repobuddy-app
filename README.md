# repobuddy

> [!NOTE]
> This repository is archived. It was the Probot starter for the retired `repobuddy-bot` GitHub App.
> The `repobuddy` GitHub App now lives in [repobuddy/github-app](https://github.com/repobuddy/github-app).

Handles the boring work of repository management.

## Setup

```sh
# Install dependencies
yarn

# Run the bot
yarn start
```

## Docker

```sh
# 1. Build container
docker build -t repobuddy .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> syncbuddy
```
