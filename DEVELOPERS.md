# Developing GitWonk

View our live website at [gitwonk.com](https://gitwonk.com/)

1. [Getting started](#getting-started)
   - [Install dependencies](#install-dependencies)
2. [Local development](#local-development)
   - [Fork the repository](#fork-the-repository)
   - [Clone the repo](#clone-the-repo)
   - [Running turborepo](#running-turborepo)
     - [Shared components](#shared-components)
     <!-- - [Installing packages](#installing-packages) -->
3. [Contributing](#contributing)
4. [Create a pull request](#create-a-pull-request)

- [Community channels](#community-channels)

## Getting Started

Welcome to our GitWonk community! We're glad you're here. This document will help you get started with GitWonk development.

Before you begin, read the [code of conduct](https://github.com/gitwonk/.github/blob/main/CODE_OF_CONDUCT.md) and check out the [existing issues](https://github.com/gitwonk/gitwonk/issues).

### Install dependencies

You need to install and configure the following dependencies on your machine to build [GitWonk](https://gitwonk.com/):

- [Git](http://git-scm.com/)
- [Node.js v16.x (LTS)](http://nodejs.org)
- [pnpm](https://pnpm.io/) version 7+

#### Haven't used pnpm before?

Then you can install it using the following command:

```sh
npm install -g pnpm
```

OR refer the [pnpm installation guide](https://pnpm.io/installation).

## Local development

This repository is configured as a monorepo using [Turborepo](https://turborepo.org/docs).

The Turborepo runs all the services in the [monorepo](https://turbo.build/repo/docs/handbook/what-is-a-monorepo) at once, which would significantly improve the developer workflow.

### Fork the repository

To contribute to [GitWonk](https://gitwonk.com/), you'll need to fork the [GitWonk repository](https://github.com/gitwonk/gitwonk) and clone it locally.

You can do this by clicking the `Fork` button in the top-right corner of the repository page.

### Clone the repo

1. Clone your GitHub forked repository:

   ```sh
   git clone https://github.com/<github_username>/gitwonk.git
   ```

2. Go to the GitWonk directory:
   ```sh
   cd gitwonk
   ```

### Running Turborepo

[GitWonk](https://gitwonk.com/) uses [Turborepo](https://turborepo.org/docs) to manage and run this monorepo.

1. Install the dependences in the root of the repo.

   ```sh
   pnpm install # install dependencies
   ```

2. Copy the `.env.example` file to `.env.local` 

   ```sh
   cp apps/www/.env.example apps/www/.env.local
   ```

3. You can then run the apps simultaneously with the following.
   ```sh
   pnpm run dev # to run all apps at once
   ```

Then visit, and edit, any of the following sites:

| Site                                | Directory   | Scope name | Description      | Local development server |
| ----------------------------------- | ----------- | ---------- | ---------------- | ------------------------ |
| [gitwonk.com](https://gitwonk.com/) | `/apps/www` | www        | The main website | http://localhost:3001    |

#### Running apps individually

You can run any of the apps individually by using the scope name. For example:

```sh
pnpm run dev --filter www
```

#### Shared components

The monorepo has a set of shared components under `/packages`:

- shared - contains all the shared components across apps like assets
- tsconfig - common tsconfig for all projects in the monorepo
- config - other common configs like tailwind, eslint etc

## Contributing

We happily welcome contributions. If you're interested to be a part of our community, please read our [contributing guidelines](https://github.com/gitwonk/.github/blob/main/CONTRIBUTING.md).

## Create a pull request

After making your changes, open a pull request (PR). Please follow the [guidelines](https://github.com/gitwonk/.github/blob/main/CONTRIBUTING.md#create-a-pull-request) for the same.

Once you submit your pull request, others from the GitWonk team/community will review it with you.

Did you have an issue, like a merge conflict, or don't know how to open a pull request? Check out [GitHub's pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests) tutorial on how to resolve merge conflicts and other issues. Once your PR has been merged, you will be proudly listed as a contributor in the [contributor chart](https://github.com/gitwonk/gitwonk/graphs/contributors).

## Community channels

Stuck somewhere? Have any questions? Join the [Discord Community Server](https://discord.gg/XvprRWPZKK) or the [Github Discussions](https://github.com/gitwonk/gitwonk/discussions). We are here to help!

## Special thanks

GitWonk is inspired by various open source projects and reused some of their code. We would like to give them credits for their work and encourage you to check them out.

- [Supabase](https://github.com/supabase/supabase)
- [Dub.sh](https://github.com/steven-tey/dub)
- [Cobe (WebGL globe)](https://github.com/shuding/cobe)
- [Cal.com](https://github.com/calcom/cal.com)
- [Lee Robinson's portfolio](https://github.com/leerob/leerob.io)
- [Taxonomy](https://github.com/shadcn/taxonomy)
