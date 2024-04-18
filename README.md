# DepositDuck nest

DepositDuck's static marketing site.

## Develop

[![pnpm](https://img.shields.io/badge/pnpm-4e4e4e?logo=pnpm&logoColor=f69220)](https://sass-lang.com/dart-sass/)
[![11ty](https://img.shields.io/badge/static-ffffff?logo=eleventy&logoColor=222222)](https://github.com/11ty/eleventy/)
[![pre-commit](https://img.shields.io/badge/pre--commit-FAB040?logo=pre-commit&logoColor=1f2d23)](https://github.com/pre-commit/pre-commit)

### Prerequisites

To develop DepositDuck nest the following must be available locally:

- [just](https://github.com/casey/just)
- [pnpm](https://pnpm.io/installation)
- [pre-commit](https://pre-commit.com/)

### Quickstart: run locally

A `justfile` defines common development tasks. Run `just` to show all available recipes.

```sh

```

### Development workflow

This repo follows trunk-based development. This means:

- the `main` branch should always be in a releasable state
- use short-lived feature branches

Pre-commit hooks are available to prevent common gotchas and to lint & format code.

```sh
# install pre-commit hooks
pre-commit install
```

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
guidelines when writing commit messages.
`commitlint` is enabled as a pre-commit hook. Valid commit types are defined in `.commitlintrc.yaml`.

## Project structure

## Styles

The frontend is styled using Bootstrap 5. Specifically, a project-specific version
customised to use the DepositDuck palette which lives at [albertomh/speculum](https://github.com/albertomh/speculum).

Static assets (Bootstrap, Bootstrap Icons, htmx) are hosted in a public Cloudflare R2 bucket
with CORS enabled to allow GET from `localhost:8000`.

## Deploy

### Cut a release

---

&copy; 2024 Alberto MH  
This work is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
