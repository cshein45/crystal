---
sidebar_position: 3
---

# Using with existing schema

If you already have a GraphQL.js schema and you're looking to migrate to
<Grafast /> then it's not necessary to translate everything into <Grafast />
plan resolvers from the get-go, instead <Grafast/> includes emulation of
GraphQL.js behaviors that allows it to run an existing GraphQL.js schema
directly in many cases (or with small modification in other cases).

## Requirements

To run an existing GraphQL.js schema with <Grafast /> you must ensure that the
following hold:

- Your resolvers are built into your schema as is the norm (not passed via
  `rootValue`)
- If any of your resolvers use `GraphQLResolveInfo` (the 4th argument to the
  resolver) then they must not rely on the `path` property since we can't
  currently populate that in an equivalent fashion
- `context` must be an object (anything suitable to be used as the key to a
  `WeakMap`); if you do not need a context then `{}` is perfectly acceptable
- `rootValue`, if specified, must be an object or `null`/`undefined`
- `resolveType` and `isTypeOf`, if specified, must return the
  GraphQL type name as a string (rather than returning the object type itself)
  and their version of `GraphQLResolveInfo` is even more cut down (but you
  shouldn't be using that anyway?). We only have tests of synchronous
  `resolveType` currently, so if you're going to rely on this we suggest you submit
  tests matching the patterns you use to our test suite.

(If you face any issues with your resolvers, please file an issue - it's
possible that this list of constraints is not complete.)

## Installation

Ensure that you have both the `graphql` and `grafast` modules installed:

```bash npm2yarn
npm install --save grafast graphql
```

## Running

Replace any calls to graphql.js' `graphql` or `execute` functions with Grafast's
`grafast` and `execute` respectively.

```diff
-import { graphql, execute } from 'graphql';
+import { grafast, execute } from 'grafast';

-const result = await graphql({
+const result = await grafast({
   schema,
   contextValue: {},
   source: ...
```

## Cache parse and validation

At this point you should be able to execute your GraphQL API as you previously
did, but unless you're using the `grafast` function we're not yet as optimal as
we could be.

Without further intervention, using `execute` directly makes it likely you'll
be planning each request every time, rather than reusing operation plans. To
solve this, you should cache the parsing of the GraphQL request so that when
the same document is seen again the exact same parsed document AST will be
passed to <Grafast />. You can either handle this yourself, use the `grafast`
function instead, or use a server/framework that does this for you; see
[Servers][].

## Replacing resolvers with plans

&ZeroWidthSpace;<Grafast /> automatically supports resolvers (with the
"Requirements" mentioned above) to help maintain compatibility with legacy
schemas, but if you're ready to get the next level of performance you can
replace the resolver with a plan on a field-by-field basis in a schema.

For more information, see [Plan Resolvers](../plan-resolvers).

[servers]: ../servers
