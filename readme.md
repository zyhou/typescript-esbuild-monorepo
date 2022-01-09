```bash
## Run
yarn workspace @project/api dev
yarn workspace @project/app dev

## Typecheck
yarn workspace @project/api typecheck
yarn workspace @project/app typecheck
yarn workspace @project/core typecheck

## test
yarn api:test:unit:watch
yarn core:test:unit:watch
yarn app:test:unit:watch

## Format && Lint

yarn format
yarn lint
```
