# tamedevil

## 0.1.0-rc.1

### Patch Changes

- [`8a5a7c5`](https://github.com/graphile/crystal/commit/8a5a7c536fc4b9b702600c5cc3d413724670c327)
  Thanks [@benjie](https://github.com/benjie)! - Bump to release candidate

- Updated dependencies
  [[`8a5a7c5`](https://github.com/graphile/crystal/commit/8a5a7c536fc4b9b702600c5cc3d413724670c327)]:
  - @graphile/lru@5.0.0-rc.1

## 0.0.0-beta.9

### Patch Changes

- [#2692](https://github.com/graphile/crystal/pull/2692)
  [`3d5c464`](https://github.com/graphile/crystal/commit/3d5c4641df66b431066efd6c74b67ca0d38ba7f4)
  Thanks [@benjie](https://github.com/benjie)! - Allow forbidding certain
  objects/functions from being exported, and raise error as early as possible.

## 0.0.0-beta.8

### Patch Changes

- [#2482](https://github.com/graphile/crystal/pull/2482)
  [`459e1869a2ec58925b2bac5458af487c52a8ca37`](https://github.com/graphile/crystal/commit/459e1869a2ec58925b2bac5458af487c52a8ca37)
  Thanks [@benjie](https://github.com/benjie)! - Minimum version of Node.js
  bumped to Node 22 (the latest LTS).

- Updated dependencies
  [[`459e1869a2ec58925b2bac5458af487c52a8ca37`](https://github.com/graphile/crystal/commit/459e1869a2ec58925b2bac5458af487c52a8ca37)]:
  - @graphile/lru@5.0.0-beta.4

## 0.0.0-beta.7

### Patch Changes

- [#1973](https://github.com/graphile/crystal/pull/1973)
  [`b788dd868`](https://github.com/graphile/crystal/commit/b788dd86849e703cc3aa863fd9190c36a087b865)
  Thanks [@benjie](https://github.com/benjie)! - Add te.debug helper for
  debugging a te expression via printing a formatted version.

## 0.0.0-beta.6

### Patch Changes

- [#1958](https://github.com/graphile/crystal/pull/1958)
  [`8315e8d01`](https://github.com/graphile/crystal/commit/8315e8d01c118cebc4ebbc53a2f264b958b252ad)
  Thanks [@benjie](https://github.com/benjie)! - EXPORTABLE now accepts a third
  argument, `nameHint`, which is used to hint what variable name to use for the
  given value. Used this in `graphile-export` along with some fixes and
  optimizations to improve the exports further.

## 0.0.0-beta.5

### Patch Changes

- [#1935](https://github.com/graphile/crystal/pull/1935)
  [`49fd8afed`](https://github.com/graphile/crystal/commit/49fd8afed1afe573ea76a2a7a821dfa5d6288e2d)
  Thanks [@benjie](https://github.com/benjie)! - Add `te.runExportable` method,
  instead of simply calling the generated factory, it exports it in a way that's
  compatible with `graphile-export`.

- [#1924](https://github.com/graphile/crystal/pull/1924)
  [`ef44c29b2`](https://github.com/graphile/crystal/commit/ef44c29b24a1ad5a042ae1536a4546dd64b17195)
  Thanks [@benjie](https://github.com/benjie)! - 🚨 TypeScript is now configured
  to hide interfaces marked as `@internal`. This may result in a few errors
  where you're accessing things you oughtn't be, but also may hide some
  interfaces that should be exposed - please file an issue if an API you were
  dependent on has been removed from the TypeScript typings. If that API happens
  to be `step.dependencies`; you should first read this:
  https://benjie.dev/graphql/ancestors

- [#1935](https://github.com/graphile/crystal/pull/1935)
  [`8ea67f891`](https://github.com/graphile/crystal/commit/8ea67f8910693edaf70daa9952e35d8396166f38)
  Thanks [@benjie](https://github.com/benjie)! - Fix lots of things related to
  exporting a schema with `graphile-export`.

## 0.0.0-beta.4

### Patch Changes

- [#1902](https://github.com/graphile/crystal/pull/1902)
  [`1b6c2f636`](https://github.com/graphile/crystal/commit/1b6c2f6360a316a8dc550c60e28c61deea538f19)
  Thanks [@benjie](https://github.com/benjie)! - Forbid `__proto__` set even
  when `--disable-proto=delete` option is in use.

## 0.0.0-beta.3

### Patch Changes

- [#514](https://github.com/graphile/crystal-pre-merge/pull/514)
  [`c9848f693`](https://github.com/graphile/crystal-pre-merge/commit/c9848f6936a5abd7740c0638bfb458fb5551f03b)
  Thanks [@benjie](https://github.com/benjie)! - Update package.json repository
  information

- Updated dependencies
  [[`c9848f693`](https://github.com/graphile/crystal-pre-merge/commit/c9848f6936a5abd7740c0638bfb458fb5551f03b)]:
  - @graphile/lru@5.0.0-beta.3

## 0.0.0-beta.2

### Patch Changes

- [#496](https://github.com/benjie/crystal/pull/496)
  [`c9bfd9892`](https://github.com/benjie/crystal/commit/c9bfd989247f9433fb5b18c5175c9d8d64cd21a1)
  Thanks [@benjie](https://github.com/benjie)! - Update dependencies (sometimes
  through major versions).

- Updated dependencies
  [[`c9bfd9892`](https://github.com/benjie/crystal/commit/c9bfd989247f9433fb5b18c5175c9d8d64cd21a1)]:
  - @graphile/lru@5.0.0-beta.2

## 0.0.0-beta.1

### Patch Changes

- [`cbd987385`](https://github.com/benjie/crystal/commit/cbd987385f99bd1248bc093ac507cc2f641ba3e8)
  Thanks [@benjie](https://github.com/benjie)! - Bump all packages to beta

- Updated dependencies
  [[`cbd987385`](https://github.com/benjie/crystal/commit/cbd987385f99bd1248bc093ac507cc2f641ba3e8)]:
  - @graphile/lru@5.0.0-beta.1

## 0.0.0-alpha.4

### Patch Changes

- [#408](https://github.com/benjie/crystal/pull/408)
  [`f5dd38aa3`](https://github.com/benjie/crystal/commit/f5dd38aa34c10f5ef0e0fa8fa48b70534ac3c294)
  Thanks [@benjie](https://github.com/benjie)! - 'toJSON' export is now named
  'stringifyJSON'

- [#408](https://github.com/benjie/crystal/pull/408)
  [`088d83b1d`](https://github.com/benjie/crystal/commit/088d83b1de2782a1a37a5998747b202a6c2b27a2)
  Thanks [@benjie](https://github.com/benjie)! - Rename `dangerousKey` to
  `safeKeyOrThrow` for clarity.

## 0.0.0-alpha.3

### Patch Changes

- [#370](https://github.com/benjie/crystal/pull/370)
  [`339fe20d0`](https://github.com/benjie/crystal/commit/339fe20d0c6e8600d263ce8093cd85a6ea8adbbf)
  Thanks [@benjie](https://github.com/benjie)! - Allow multiple instances of
  pg-sql2 and tamedevil to help handle package manager shenanigans.

## 0.0.0-alpha.2

### Patch Changes

- [`87e6c65a7`](https://github.com/benjie/crystal/commit/87e6c65a7a687044895b3b6c9f131384984e7674)
  Thanks [@benjie](https://github.com/benjie)! - Performance overhaul and new
  caching functionality.

- [`7f857950a`](https://github.com/benjie/crystal/commit/7f857950a7e4ec763c936eb6bd1fb77824041d71)
  Thanks [@benjie](https://github.com/benjie)! - Upgrade to the latest
  TypeScript/tslib

- Updated dependencies
  [[`98ae00f59`](https://github.com/benjie/crystal/commit/98ae00f59a8ab3edc5718ad8437a0dab734a7d69),
  [`7f857950a`](https://github.com/benjie/crystal/commit/7f857950a7e4ec763c936eb6bd1fb77824041d71)]:
  - @graphile/lru@5.0.0-alpha.2

## 0.0.0-alpha.1

### Patch Changes

- [`759ad403d`](https://github.com/benjie/crystal/commit/759ad403d71363312c5225c165873ae84b8a098c)
  Thanks [@benjie](https://github.com/benjie)! - Alpha release - see
  https://postgraphile.org/news/2023-04-26-version-5-alpha

- Updated dependencies
  [[`759ad403d`](https://github.com/benjie/crystal/commit/759ad403d71363312c5225c165873ae84b8a098c)]:
  - @graphile/lru@5.0.0-alpha.1

## 0.0.0-1.1

### Patch Changes

- [#260](https://github.com/benjie/crystal/pull/260)
  [`d5312e6b9`](https://github.com/benjie/crystal/commit/d5312e6b968fbeb46d074b82a41b4bdbc166598c)
  Thanks [@benjie](https://github.com/benjie)! - TypeScript v5 is now required

- Updated dependencies
  [[`d5312e6b9`](https://github.com/benjie/crystal/commit/d5312e6b968fbeb46d074b82a41b4bdbc166598c)]:
  - @graphile/lru@5.0.0-1.1

## 0.0.0-0.4

### Patch Changes

- [`0ab95d0b1`](undefined) - Update sponsors.

## 0.0.0-0.3

### Patch Changes

- [`4ca7fce12`](undefined) - Make runnable in the browser for playground

## 0.0.0-0.2

### Patch Changes

- [`9b296ba54`](undefined) - More secure, more compatible, and lots of fixes
  across the monorepo

## 0.0.0-0.1

### Patch Changes

- [`cd37fd02a`](undefined) - Introduce new tamedevil package for managing JIT
  code
