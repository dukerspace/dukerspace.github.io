---
title: "From code push to live site: a simple deploy workflow guide"
description: "A plain-language walkthrough of this site's GitHub Actions workflow, from a push to main to a new Cloudflare Worker deployment."
date: 2026-10-27
---

After changing a website, we do not want to build and upload it by hand every time. This post walks through `.github/workflows/deploy.yml` and explains what happens after code is pushed to GitHub.

## When does this workflow run?

The workflow runs when code is pushed to the `main` branch. It can also be started manually from GitHub Actions, which is useful when a deployment needs to be repeated without creating a new commit.

## Getting ready to deploy

The job runs on a team-managed runner (`self-host`) and has a 20-minute time limit. The workflow then:

1. Downloads the code for the commit being deployed.
2. Sets up Bun version `1.4.2`.
3. Installs dependencies with `bun install --frozen-lockfile`.

`--frozen-lockfile` means dependencies must match the versions already recorded in the lockfile. If the dependency manifest and lockfile do not match, installation stops instead of silently changing the lockfile. This makes the dependency set used for the build more predictable.

## Build, then deploy to production

Once the environment is ready, the workflow runs `bun run build` to create the site files. Then `prepare-gh-pages.mjs` arranges those files for the deployment step.

Finally, Wrangler deploys to the Cloudflare Worker environment named `production`. Sensitive values, such as the Cloudflare API token and account ID, are passed to the command through GitHub Secrets instead of being written into the workflow file.

## Why limit permissions and queue deployments?

The workflow only requests permission to read the repository because it does not need to write code back to GitHub. `concurrency` queues deployments in the same production group and does not cancel a deployment already in progress. That helps avoid overlapping deployments.

## What this workflow does not do yet

This workflow builds and deploys the site, but it does not run tests or lint checks first. To make those checks a requirement before production deployment, add them as steps before the deploy command.

In short: push to `main` → prepare Bun and dependencies → build the site → prepare the files → deploy with Wrangler using secrets for authentication.
