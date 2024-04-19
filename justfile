# DepositDuck nest - local development tooling
#
# (c) 2024 Alberto Morón Hernández

default:
  @just --list

# run a hot-reloading local server on :8080
serve:
  npx @11ty/eleventy --serve

# build the site and place static assets in the `dist/` directory
build:
  npx @11ty/eleventy
  npx html-minifier \
    --input-dir ./dist \
    --output-dir ./dist \
    --collapse-whitespace \
    --file-ext html
