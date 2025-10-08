import { PgDeleteSingleStep, PgExecutor, TYPES, assertPgClassSingleStep, enumCodec, listOfCodec, makeRegistry, pgDeleteSingle, pgInsertSingle, pgSelectFromRecord, pgUpdateSingle, recordCodec, sqlValueWithCodec } from "@dataplan/pg";
import { ConnectionStep, EdgeStep, ObjectStep, __ValueStep, access, assertExecutableStep, bakedInputRuntime, connection, constant, context, createObjectAndApplyChildren, first, get as get2, inhibitOnNull, inspect, lambda, list, makeDecodeNodeId, makeGrafastSchema, object, rootValue, specFromNodeId } from "grafast";
import { GraphQLError, Kind } from "graphql";
import { sql } from "pg-sql2";
const nodeIdHandler_Query = {
  typeName: "Query",
  codec: {
    name: "raw",
    encode: Object.assign(function rawEncode(value) {
      return typeof value === "string" ? value : null;
    }, {
      isSyncAndSafe: true
    }),
    decode: Object.assign(function rawDecode(value) {
      return typeof value === "string" ? value : null;
    }, {
      isSyncAndSafe: true
    })
  },
  match(specifier) {
    return specifier === "query";
  },
  getIdentifiers(_value) {
    return [];
  },
  getSpec() {
    return "irrelevant";
  },
  get() {
    return rootValue();
  },
  plan() {
    return constant`query`;
  }
};
const nodeIdCodecs_base64JSON_base64JSON = {
  name: "base64JSON",
  encode: (() => {
    function base64JSONEncode(value) {
      return Buffer.from(JSON.stringify(value), "utf8").toString("base64");
    }
    base64JSONEncode.isSyncAndSafe = true; // Optimization
    return base64JSONEncode;
  })(),
  decode: (() => {
    function base64JSONDecode(value) {
      return JSON.parse(Buffer.from(value, "base64").toString("utf8"));
    }
    base64JSONDecode.isSyncAndSafe = true; // Optimization
    return base64JSONDecode;
  })()
};
const nodeIdCodecs = {
  __proto__: null,
  raw: nodeIdHandler_Query.codec,
  base64JSON: nodeIdCodecs_base64JSON_base64JSON,
  pipeString: {
    name: "pipeString",
    encode: Object.assign(function pipeStringEncode(value) {
      return Array.isArray(value) ? value.join("|") : null;
    }, {
      isSyncAndSafe: true
    }),
    decode: Object.assign(function pipeStringDecode(value) {
      return typeof value === "string" ? value.split("|") : null;
    }, {
      isSyncAndSafe: true
    })
  }
};
const executor = new PgExecutor({
  name: "main",
  context() {
    const ctx = context();
    return object({
      pgSettings: "pgSettings" != null ? ctx.get("pgSettings") : constant(null),
      withPgClient: ctx.get("withPgClient")
    });
  }
});
const geomIdentifier = sql.identifier("geometry", "geom");
const pointArrayCodec = listOfCodec(TYPES.point, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_point"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "pointArray"
});
const lineArrayCodec = listOfCodec(TYPES.line, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_line"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "lineArray"
});
const lsegArrayCodec = listOfCodec(TYPES.lseg, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_lseg"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "lsegArray"
});
const boxArrayCodec = listOfCodec(TYPES.box, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_box"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ";",
  description: undefined,
  name: "boxArray"
});
const pathArrayCodec = listOfCodec(TYPES.path, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_path"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "pathArray"
});
const polygonArrayCodec = listOfCodec(TYPES.polygon, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_polygon"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "polygonArray"
});
const circleArrayCodec = listOfCodec(TYPES.circle, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_circle"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "circleArray"
});
const geomCodec = recordCodec({
  name: "geom",
  identifier: geomIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    point: {
      description: undefined,
      codec: TYPES.point,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    points: {
      description: undefined,
      codec: pointArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    line: {
      description: undefined,
      codec: TYPES.line,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    lines: {
      description: undefined,
      codec: lineArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    lseg: {
      description: undefined,
      codec: TYPES.lseg,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    lsegs: {
      description: undefined,
      codec: lsegArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    box: {
      description: undefined,
      codec: TYPES.box,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    boxes: {
      description: undefined,
      codec: boxArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    open_path: {
      description: undefined,
      codec: TYPES.path,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    open_paths: {
      description: undefined,
      codec: pathArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    closed_path: {
      description: undefined,
      codec: TYPES.path,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    closed_paths: {
      description: undefined,
      codec: pathArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    polygon: {
      description: undefined,
      codec: TYPES.polygon,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    polygons: {
      description: undefined,
      codec: polygonArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    circle: {
      description: undefined,
      codec: TYPES.circle,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    circles: {
      description: undefined,
      codec: circleArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "geometry",
      name: "geom"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const geomUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const resource_geomPgResource = makeRegistry({
  pgExecutors: {
    __proto__: null,
    main: executor
  },
  pgCodecs: {
    __proto__: null,
    text: TYPES.text,
    varchar: TYPES.varchar,
    bpchar: TYPES.bpchar,
    int4: TYPES.int,
    point: TYPES.point,
    geom: geomCodec,
    pointArray: pointArrayCodec,
    line: TYPES.line,
    lineArray: lineArrayCodec,
    lseg: TYPES.lseg,
    lsegArray: lsegArrayCodec,
    box: TYPES.box,
    boxArray: boxArrayCodec,
    path: TYPES.path,
    pathArray: pathArrayCodec,
    polygon: TYPES.polygon,
    polygonArray: polygonArrayCodec,
    circle: TYPES.circle,
    circleArray: circleArrayCodec,
    LetterAToDEnum: enumCodec({
      name: "LetterAToDEnum",
      identifier: TYPES.text.sqlType,
      values: [{
        value: "A",
        description: "The letter A"
      }, {
        value: "B",
        description: "The letter B"
      }, {
        value: "C",
        description: "The letter C"
      }, {
        value: "D",
        description: "The letter D"
      }],
      extensions: {
        isEnumTableEnum: true,
        enumTableEnumDetails: {
          serviceName: "main",
          schemaName: "enum_tables",
          tableName: "abcd",
          constraintType: "p",
          constraintName: "abcd_pkey"
        },
        tags: {
          name: "LetterAToD"
        }
      }
    }),
    LetterAToDViaViewEnum: enumCodec({
      name: "LetterAToDViaViewEnum",
      identifier: TYPES.text.sqlType,
      values: [{
        value: "A",
        description: "The letter A"
      }, {
        value: "B",
        description: "The letter B"
      }, {
        value: "C",
        description: "The letter C"
      }, {
        value: "D",
        description: "The letter D"
      }],
      extensions: {
        isEnumTableEnum: true,
        enumTableEnumDetails: {
          serviceName: "main",
          schemaName: "enum_tables",
          tableName: "abcd_view",
          constraintType: "p",
          constraintName: "FAKE_enum_tables_abcd_view_primaryKey_5"
        },
        tags: {
          name: "LetterAToDViaView"
        }
      }
    }),
    EnumTheFirstEnum: enumCodec({
      name: "EnumTheFirstEnum",
      identifier: TYPES.text.sqlType,
      values: [{
        value: "a1",
        description: "Desc A1"
      }, {
        value: "a2",
        description: "Desc A2"
      }, {
        value: "a3",
        description: "Desc A3"
      }, {
        value: "a4",
        description: "Desc A4"
      }],
      extensions: {
        isEnumTableEnum: true,
        enumTableEnumDetails: {
          serviceName: "main",
          schemaName: "enum_tables",
          tableName: "lots_of_enums",
          constraintType: "u",
          constraintName: "enum_1"
        },
        tags: {
          name: "EnumTheFirst"
        }
      }
    }),
    EnumTheSecondEnum: enumCodec({
      name: "EnumTheSecondEnum",
      identifier: TYPES.varchar.sqlType,
      values: [{
        value: "b1",
        description: "Desc B1"
      }, {
        value: "b2",
        description: "Desc B2"
      }, {
        value: "b3",
        description: "Desc B3"
      }, {
        value: "b4",
        description: "Desc B4"
      }],
      extensions: {
        isEnumTableEnum: true,
        enumTableEnumDetails: {
          serviceName: "main",
          schemaName: "enum_tables",
          tableName: "lots_of_enums",
          constraintType: "u",
          constraintName: "enum_2"
        },
        tags: {
          name: "EnumTheSecond"
        }
      }
    }),
    LotsOfEnumsEnum3Enum: enumCodec({
      name: "LotsOfEnumsEnum3Enum",
      identifier: TYPES.bpchar.sqlType,
      values: [{
        value: "c1",
        description: "Desc C1"
      }, {
        value: "c2",
        description: "Desc C2"
      }, {
        value: "c3",
        description: "Desc C3"
      }, {
        value: "c4",
        description: "Desc C4"
      }],
      extensions: {
        isEnumTableEnum: true,
        enumTableEnumDetails: {
          serviceName: "main",
          schemaName: "enum_tables",
          tableName: "lots_of_enums",
          constraintType: "u",
          constraintName: "enum_3"
        },
        tags: {
          name: "LotsOfEnumsEnum3"
        }
      }
    }),
    LotsOfEnumsEnum4Enum: enumCodec({
      name: "LotsOfEnumsEnum4Enum",
      identifier: TYPES.text.sqlType,
      values: [{
        value: "d1",
        description: "Desc D1"
      }, {
        value: "d2",
        description: "Desc D2"
      }, {
        value: "d3",
        description: "Desc D3"
      }, {
        value: "d4",
        description: "Desc D4"
      }],
      extensions: {
        isEnumTableEnum: true,
        enumTableEnumDetails: {
          serviceName: "main",
          schemaName: "enum_tables",
          tableName: "lots_of_enums",
          constraintType: "u",
          constraintName: "enum_4"
        },
        tags: {
          name: "LotsOfEnumsEnum4"
        }
      }
    }),
    SimpleEnumEnum: enumCodec({
      name: "SimpleEnumEnum",
      identifier: TYPES.text.sqlType,
      values: [{
        value: "Foo",
        description: "The first metasyntactic variable"
      }, {
        value: "Bar",
        description: null
      }, {
        value: "Baz",
        description: "The third metasyntactic variable, very similar to its predecessor"
      }, {
        value: "Qux",
        description: null
      }],
      extensions: {
        isEnumTableEnum: true,
        enumTableEnumDetails: {
          serviceName: "main",
          schemaName: "enum_tables",
          tableName: "simple_enum",
          constraintType: "p",
          constraintName: "simple_enum_pkey"
        },
        tags: {
          name: "SimpleEnum"
        }
      }
    }),
    EntityKindsEnum: enumCodec({
      name: "EntityKindsEnum",
      identifier: TYPES.text.sqlType,
      values: [{
        value: "photos",
        description: undefined
      }, {
        value: "locations",
        description: undefined
      }, {
        value: "profiles",
        description: undefined
      }],
      extensions: {
        isEnumTableEnum: true,
        enumTableEnumDetails: {
          serviceName: "main",
          schemaName: "partitions",
          tableName: "entity_kinds",
          constraintType: "p",
          constraintName: "entity_kinds_pkey"
        },
        tags: {
          name: "EntityKinds"
        }
      }
    }),
    EnumTableTransportationEnum: enumCodec({
      name: "EnumTableTransportationEnum",
      identifier: TYPES.text.sqlType,
      values: [{
        value: "CAR",
        description: undefined
      }, {
        value: "BIKE",
        description: undefined
      }, {
        value: "SUBWAY",
        description: undefined
      }],
      extensions: {
        isEnumTableEnum: true,
        enumTableEnumDetails: {
          serviceName: "main",
          schemaName: "function_returning_enum",
          tableName: "enum_table",
          constraintType: "u",
          constraintName: "transportation_enum"
        },
        tags: {
          name: "EnumTableTransportation"
        }
      }
    }),
    LengthStatusEnum: enumCodec({
      name: "LengthStatusEnum",
      identifier: TYPES.text.sqlType,
      values: [{
        value: "ok",
        description: undefined
      }, {
        value: "too_short",
        description: undefined
      }],
      extensions: {
        isEnumTableEnum: true,
        enumTableEnumDetails: {
          serviceName: "main",
          schemaName: "function_returning_enum",
          tableName: "length_status",
          constraintType: "p",
          constraintName: "length_status_pkey"
        },
        tags: {
          name: "LengthStatus"
        }
      }
    }),
    StageOptionsEnum: enumCodec({
      name: "StageOptionsEnum",
      identifier: TYPES.text.sqlType,
      values: [{
        value: "pending",
        description: undefined
      }, {
        value: "round 1",
        description: undefined
      }, {
        value: "round 2",
        description: undefined
      }, {
        value: "rejected",
        description: undefined
      }, {
        value: "hired",
        description: undefined
      }],
      extensions: {
        isEnumTableEnum: true,
        enumTableEnumDetails: {
          serviceName: "main",
          schemaName: "function_returning_enum",
          tableName: "stage_options",
          constraintType: "p",
          constraintName: "stage_options_pkey"
        },
        tags: {
          name: "StageOptions"
        }
      }
    })
  },
  pgResources: {
    __proto__: null,
    geom: {
      executor: executor,
      name: "geom",
      identifier: "main.geometry.geom",
      from: geomIdentifier,
      codec: geomCodec,
      uniques: geomUniques,
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "geometry",
          name: "geom"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    }
  },
  pgRelations: {
    __proto__: null
  }
}).pgResources["geom"];
const nodeIdHandler_Geom = {
  typeName: "Geom",
  codec: nodeIdCodecs_base64JSON_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("geoms", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return resource_geomPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "geoms";
  }
};
const specForHandlerCache = new Map();
function specForHandler(handler) {
  const existing = specForHandlerCache.get(handler);
  if (existing) {
    return existing;
  }
  function spec(nodeId) {
    // We only want to return the specifier if it matches
    // this handler; otherwise return null.
    if (nodeId == null) return null;
    try {
      const specifier = handler.codec.decode(nodeId);
      if (handler.match(specifier)) {
        return specifier;
      }
    } catch {
      // Ignore errors
    }
    return null;
  }
  spec.displayName = `specifier_${handler.typeName}_${handler.codec.name}`;
  spec.isSyncAndSafe = true; // Optimization
  specForHandlerCache.set(handler, spec);
  return spec;
}
const nodeFetcher_Geom = $nodeId => {
  const $decoded = lambda($nodeId, specForHandler(nodeIdHandler_Geom));
  return nodeIdHandler_Geom.get(nodeIdHandler_Geom.getSpec($decoded));
};
function qbWhereBuilder(qb) {
  return qb.whereBuilder();
}
const nodeIdHandlerByTypeName = {
  __proto__: null,
  Query: nodeIdHandler_Query,
  Geom: nodeIdHandler_Geom
};
const decodeNodeId = makeDecodeNodeId(Object.values(nodeIdHandlerByTypeName));
function findTypeNameMatch(specifier) {
  if (!specifier) return null;
  for (const [typeName, typeSpec] of Object.entries(nodeIdHandlerByTypeName)) {
    const value = specifier[typeSpec.codec.name];
    if (value != null && typeSpec.match(value)) {
      return typeName;
    }
  }
  return null;
}
function CursorSerialize(value) {
  return "" + value;
}
const specFromArgs_Geom = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(nodeIdHandler_Geom, $nodeId);
};
const specFromArgs_Geom2 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(nodeIdHandler_Geom, $nodeId);
};
const getPgSelectSingleFromMutationResult = (resource, pkAttributes, $mutation) => {
  const $result = $mutation.getStepForKey("result", true);
  if (!$result) return null;
  if ($result instanceof PgDeleteSingleStep) {
    return pgSelectFromRecord($result.resource, $result.record());
  } else {
    const spec = pkAttributes.reduce((memo, attributeName) => {
      memo[attributeName] = $result.get(attributeName);
      return memo;
    }, Object.create(null));
    return resource.find(spec);
  }
};
const pgMutationPayloadEdge = (resource, pkAttributes, $mutation, fieldArgs) => {
  const $select = getPgSelectSingleFromMutationResult(resource, pkAttributes, $mutation);
  if (!$select) return constant(null);
  fieldArgs.apply($select, "orderBy");
  const $connection = connection($select);
  return new EdgeStep($connection, first($connection));
};
export const typeDefs = /* GraphQL */`"""The root query type which gives access points into the data universe."""
type Query implements Node {
  """
  Exposes the root query type nested one level down. This is helpful for Relay 1
  which can only query top level fields if they are in a particular form.
  """
  query: Query!

  """
  The root query type must be a \`Node\` to work well with Relay 1 mutations. This just resolves to \`query\`.
  """
  nodeId: ID!

  """Fetches an object given its globally unique \`ID\`."""
  node(
    """The globally unique \`ID\`."""
    nodeId: ID!
  ): Node

  """Get a single \`Geom\`."""
  geomById(id: Int!): Geom

  """Reads a single \`Geom\` using its globally unique \`ID\`."""
  geom(
    """The globally unique \`ID\` to be used in selecting a single \`Geom\`."""
    nodeId: ID!
  ): Geom

  """Reads and enables pagination through a set of \`Geom\`."""
  allGeoms(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: GeomCondition

    """The method to use when ordering \`Geom\`."""
    orderBy: [GeomsOrderBy!] = [PRIMARY_KEY_ASC]
  ): GeomsConnection
}

"""An object with a globally unique \`ID\`."""
interface Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
}

type Geom implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int!
  point: Point
  points: [Point]
  line: Line
  lines: [Line]
  lseg: LineSegment
  lsegs: [LineSegment]
  box: Box
  boxes: [Box]
  openPath: Path
  openPaths: [Path]
  closedPath: Path
  closedPaths: [Path]
  polygon: Polygon
  polygons: [Polygon]
  circle: Circle
  circles: [Circle]
}

"""A cartesian point."""
type Point {
  x: Float!
  y: Float!
}

"""An infinite line that passes through points 'a' and 'b'."""
type Line {
  a: Point!
  b: Point!
}

"""An finite line between points 'a' and 'b'."""
type LineSegment {
  a: Point!
  b: Point!
}

"""A rectangular box defined by two opposite corners 'a' and 'b'"""
type Box {
  a: Point!
  b: Point!
}

"""A path (open or closed) made up of points"""
type Path {
  points: [Point!]!

  """True if this is a closed path (similar to a polygon), false otherwise."""
  isOpen: Boolean!
}

"""A polygon made up of points"""
type Polygon {
  points: [Point!]!
}

"""A circle about the given center point with the given radius"""
type Circle {
  center: Point!
  radius: Float!
}

"""A connection to a list of \`Geom\` values."""
type GeomsConnection {
  """A list of \`Geom\` objects."""
  nodes: [Geom]!

  """
  A list of edges which contains the \`Geom\` and cursor to aid in pagination.
  """
  edges: [GeomsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Geom\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Geom\` edge in the connection."""
type GeomsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Geom\` at the end of the edge."""
  node: Geom
}

"""A location in a connection that can be used for resuming pagination."""
scalar Cursor

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: Cursor

  """When paginating forwards, the cursor to continue."""
  endCursor: Cursor
}

"""
A condition to be used against \`Geom\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input GeomCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`point\` field."""
  point: PointInput

  """Checks for equality with the object’s \`points\` field."""
  points: [PointInput]

  """Checks for equality with the object’s \`line\` field."""
  line: LineInput

  """Checks for equality with the object’s \`lines\` field."""
  lines: [LineInput]

  """Checks for equality with the object’s \`lseg\` field."""
  lseg: LineSegmentInput

  """Checks for equality with the object’s \`lsegs\` field."""
  lsegs: [LineSegmentInput]

  """Checks for equality with the object’s \`box\` field."""
  box: BoxInput

  """Checks for equality with the object’s \`boxes\` field."""
  boxes: [BoxInput]

  """Checks for equality with the object’s \`openPath\` field."""
  openPath: PathInput

  """Checks for equality with the object’s \`openPaths\` field."""
  openPaths: [PathInput]

  """Checks for equality with the object’s \`closedPath\` field."""
  closedPath: PathInput

  """Checks for equality with the object’s \`closedPaths\` field."""
  closedPaths: [PathInput]

  """Checks for equality with the object’s \`polygon\` field."""
  polygon: PolygonInput

  """Checks for equality with the object’s \`polygons\` field."""
  polygons: [PolygonInput]

  """Checks for equality with the object’s \`circle\` field."""
  circle: CircleInput

  """Checks for equality with the object’s \`circles\` field."""
  circles: [CircleInput]
}

"""A cartesian point."""
input PointInput {
  x: Float!
  y: Float!
}

"""An infinite line that passes through points 'a' and 'b'."""
input LineInput {
  a: PointInput!
  b: PointInput!
}

"""An finite line between points 'a' and 'b'."""
input LineSegmentInput {
  a: PointInput!
  b: PointInput!
}

"""A rectangular box defined by two opposite corners 'a' and 'b'"""
input BoxInput {
  a: PointInput!
  b: PointInput!
}

"""A path (open or closed) made up of points"""
input PathInput {
  points: [PointInput!]!

  """True if this is a closed path (similar to a polygon), false otherwise."""
  isOpen: Boolean
}

"""A polygon made up of points"""
input PolygonInput {
  points: [PointInput!]!
}

"""A circle about the given center point with the given radius"""
input CircleInput {
  center: PointInput!
  radius: Float!
}

"""Methods to use when ordering \`Geom\`."""
enum GeomsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  POINT_ASC
  POINT_DESC
  LINE_ASC
  LINE_DESC
  LSEG_ASC
  LSEG_DESC
  BOX_ASC
  BOX_DESC
  OPEN_PATH_ASC
  OPEN_PATH_DESC
  CLOSED_PATH_ASC
  CLOSED_PATH_DESC
  POLYGON_ASC
  POLYGON_DESC
  CIRCLE_ASC
  CIRCLE_DESC
}

"""
The root mutation type which contains root level fields which mutate data.
"""
type Mutation {
  """Creates a single \`Geom\`."""
  createGeom(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateGeomInput!
  ): CreateGeomPayload

  """Updates a single \`Geom\` using its globally unique id and a patch."""
  updateGeom(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateGeomInput!
  ): UpdateGeomPayload

  """Updates a single \`Geom\` using a unique key and a patch."""
  updateGeomById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateGeomByIdInput!
  ): UpdateGeomPayload

  """Deletes a single \`Geom\` using its globally unique id."""
  deleteGeom(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteGeomInput!
  ): DeleteGeomPayload

  """Deletes a single \`Geom\` using a unique key."""
  deleteGeomById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteGeomByIdInput!
  ): DeleteGeomPayload
}

"""The output of our create \`Geom\` mutation."""
type CreateGeomPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Geom\` that was created by this mutation."""
  geom: Geom

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Geom\`. May be used by Relay 1."""
  geomEdge(
    """The method to use when ordering \`Geom\`."""
    orderBy: [GeomsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): GeomsEdge
}

"""All input for the create \`Geom\` mutation."""
input CreateGeomInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Geom\` to be created by this mutation."""
  geom: GeomInput!
}

"""An input for mutations affecting \`Geom\`"""
input GeomInput {
  id: Int
  point: PointInput
  points: [PointInput]
  line: LineInput
  lines: [LineInput]
  lseg: LineSegmentInput
  lsegs: [LineSegmentInput]
  box: BoxInput
  boxes: [BoxInput]
  openPath: PathInput
  openPaths: [PathInput]
  closedPath: PathInput
  closedPaths: [PathInput]
  polygon: PolygonInput
  polygons: [PolygonInput]
  circle: CircleInput
  circles: [CircleInput]
}

"""The output of our update \`Geom\` mutation."""
type UpdateGeomPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Geom\` that was updated by this mutation."""
  geom: Geom

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Geom\`. May be used by Relay 1."""
  geomEdge(
    """The method to use when ordering \`Geom\`."""
    orderBy: [GeomsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): GeomsEdge
}

"""All input for the \`updateGeom\` mutation."""
input UpdateGeomInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`Geom\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`Geom\` being updated.
  """
  geomPatch: GeomPatch!
}

"""Represents an update to a \`Geom\`. Fields that are set will be updated."""
input GeomPatch {
  id: Int
  point: PointInput
  points: [PointInput]
  line: LineInput
  lines: [LineInput]
  lseg: LineSegmentInput
  lsegs: [LineSegmentInput]
  box: BoxInput
  boxes: [BoxInput]
  openPath: PathInput
  openPaths: [PathInput]
  closedPath: PathInput
  closedPaths: [PathInput]
  polygon: PolygonInput
  polygons: [PolygonInput]
  circle: CircleInput
  circles: [CircleInput]
}

"""All input for the \`updateGeomById\` mutation."""
input UpdateGeomByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`Geom\` being updated.
  """
  geomPatch: GeomPatch!
}

"""The output of our delete \`Geom\` mutation."""
type DeleteGeomPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Geom\` that was deleted by this mutation."""
  geom: Geom
  deletedGeomId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Geom\`. May be used by Relay 1."""
  geomEdge(
    """The method to use when ordering \`Geom\`."""
    orderBy: [GeomsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): GeomsEdge
}

"""All input for the \`deleteGeom\` mutation."""
input DeleteGeomInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`Geom\` to be deleted.
  """
  nodeId: ID!
}

"""All input for the \`deleteGeomById\` mutation."""
input DeleteGeomByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}`;
export const objects = {
  Query: {
    assertStep() {
      return true;
    },
    plans: {
      allGeoms: {
        plan() {
          return connection(resource_geomPgResource.find());
        },
        args: {
          first(_, $connection, arg) {
            $connection.setFirst(arg.getRaw());
          },
          last(_, $connection, val) {
            $connection.setLast(val.getRaw());
          },
          offset(_, $connection, val) {
            $connection.setOffset(val.getRaw());
          },
          before(_, $connection, val) {
            $connection.setBefore(val.getRaw());
          },
          after(_, $connection, val) {
            $connection.setAfter(val.getRaw());
          },
          condition(_condition, $connection, arg) {
            const $select = $connection.getSubplan();
            arg.apply($select, qbWhereBuilder);
          },
          orderBy(parent, $connection, value) {
            const $select = $connection.getSubplan();
            value.apply($select);
          }
        }
      },
      geom(_$parent, args) {
        const $nodeId = args.getRaw("nodeId");
        return nodeFetcher_Geom($nodeId);
      },
      geomById(_$root, {
        $id
      }) {
        return resource_geomPgResource.get({
          id: $id
        });
      },
      node(_$root, fieldArgs) {
        return fieldArgs.getRaw("nodeId");
      },
      nodeId($parent) {
        const specifier = nodeIdHandler_Query.plan($parent);
        return lambda(specifier, nodeIdCodecs[nodeIdHandler_Query.codec.name].encode);
      },
      query() {
        return rootValue();
      }
    }
  },
  Mutation: {
    assertStep: __ValueStep,
    plans: {
      createGeom: {
        plan(_, args) {
          const $insert = pgInsertSingle(resource_geomPgResource, Object.create(null));
          args.apply($insert);
          const plan = object({
            result: $insert
          });
          return plan;
        },
        args: {
          input(_, $object) {
            return $object;
          }
        }
      },
      deleteGeom: {
        plan(_$root, args) {
          const $delete = pgDeleteSingle(resource_geomPgResource, specFromArgs_Geom2(args));
          args.apply($delete);
          return object({
            result: $delete
          });
        },
        args: {
          input(_, $object) {
            return $object;
          }
        }
      },
      deleteGeomById: {
        plan(_$root, args) {
          const $delete = pgDeleteSingle(resource_geomPgResource, {
            id: args.getRaw(['input', "id"])
          });
          args.apply($delete);
          return object({
            result: $delete
          });
        },
        args: {
          input(_, $object) {
            return $object;
          }
        }
      },
      updateGeom: {
        plan(_$root, args) {
          const $update = pgUpdateSingle(resource_geomPgResource, specFromArgs_Geom(args));
          args.apply($update);
          return object({
            result: $update
          });
        },
        args: {
          input(_, $object) {
            return $object;
          }
        }
      },
      updateGeomById: {
        plan(_$root, args) {
          const $update = pgUpdateSingle(resource_geomPgResource, {
            id: args.getRaw(['input', "id"])
          });
          args.apply($update);
          return object({
            result: $update
          });
        },
        args: {
          input(_, $object) {
            return $object;
          }
        }
      }
    }
  },
  CreateGeomPayload: {
    assertStep: assertExecutableStep,
    plans: {
      clientMutationId($mutation) {
        const $insert = $mutation.getStepForKey("result");
        return $insert.getMeta("clientMutationId");
      },
      geom($object) {
        return $object.get("result");
      },
      geomEdge($mutation, fieldArgs) {
        return pgMutationPayloadEdge(resource_geomPgResource, geomUniques[0].attributes, $mutation, fieldArgs);
      },
      query() {
        return rootValue();
      }
    }
  },
  DeleteGeomPayload: {
    assertStep: ObjectStep,
    plans: {
      clientMutationId($mutation) {
        const $result = $mutation.getStepForKey("result");
        return $result.getMeta("clientMutationId");
      },
      deletedGeomId($object) {
        const $record = $object.getStepForKey("result");
        const specifier = nodeIdHandler_Geom.plan($record);
        return lambda(specifier, nodeIdCodecs_base64JSON_base64JSON.encode);
      },
      geom($object) {
        return $object.get("result");
      },
      geomEdge($mutation, fieldArgs) {
        return pgMutationPayloadEdge(resource_geomPgResource, geomUniques[0].attributes, $mutation, fieldArgs);
      },
      query() {
        return rootValue();
      }
    }
  },
  Geom: {
    assertStep: assertPgClassSingleStep,
    plans: {
      closedPath($record) {
        return $record.get("closed_path");
      },
      closedPaths($record) {
        return $record.get("closed_paths");
      },
      nodeId($parent) {
        const specifier = nodeIdHandler_Geom.plan($parent);
        return lambda(specifier, nodeIdCodecs[nodeIdHandler_Geom.codec.name].encode);
      },
      openPath($record) {
        return $record.get("open_path");
      },
      openPaths($record) {
        return $record.get("open_paths");
      }
    },
    planType($specifier) {
      const spec = Object.create(null);
      for (const pkCol of geomUniques[0].attributes) {
        spec[pkCol] = get2($specifier, pkCol);
      }
      return resource_geomPgResource.get(spec);
    }
  },
  GeomsConnection: {
    assertStep: ConnectionStep,
    plans: {
      totalCount($connection) {
        return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
      }
    }
  },
  UpdateGeomPayload: {
    assertStep: ObjectStep,
    plans: {
      clientMutationId($mutation) {
        const $result = $mutation.getStepForKey("result");
        return $result.getMeta("clientMutationId");
      },
      geom($object) {
        return $object.get("result");
      },
      geomEdge($mutation, fieldArgs) {
        return pgMutationPayloadEdge(resource_geomPgResource, geomUniques[0].attributes, $mutation, fieldArgs);
      },
      query() {
        return rootValue();
      }
    }
  }
};
export const interfaces = {
  Node: {
    planType($nodeId) {
      const $specifier = decodeNodeId($nodeId);
      const $__typename = lambda($specifier, findTypeNameMatch, true);
      return {
        $__typename,
        planForType(type) {
          const spec = nodeIdHandlerByTypeName[type.name];
          if (spec) {
            return spec.get(spec.getSpec(access($specifier, [spec.codec.name])));
          } else {
            throw new Error(`Failed to find handler for ${type.name}`);
          }
        }
      };
    }
  }
};
export const inputObjects = {
  CreateGeomInput: {
    plans: {
      clientMutationId(qb, val) {
        qb.setMeta("clientMutationId", val);
      },
      geom(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  DeleteGeomByIdInput: {
    plans: {
      clientMutationId(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    }
  },
  DeleteGeomInput: {
    plans: {
      clientMutationId(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    }
  },
  GeomCondition: {
    plans: {
      box($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "box",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.box)}`;
          }
        });
      },
      boxes($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "boxes",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, boxArrayCodec)}`;
          }
        });
      },
      circle($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "circle",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.circle)}`;
          }
        });
      },
      circles($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "circles",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, circleArrayCodec)}`;
          }
        });
      },
      closedPath($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "closed_path",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.path)}`;
          }
        });
      },
      closedPaths($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "closed_paths",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, pathArrayCodec)}`;
          }
        });
      },
      id($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "id",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
          }
        });
      },
      line($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "line",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.line)}`;
          }
        });
      },
      lines($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "lines",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, lineArrayCodec)}`;
          }
        });
      },
      lseg($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "lseg",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.lseg)}`;
          }
        });
      },
      lsegs($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "lsegs",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, lsegArrayCodec)}`;
          }
        });
      },
      openPath($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "open_path",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.path)}`;
          }
        });
      },
      openPaths($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "open_paths",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, pathArrayCodec)}`;
          }
        });
      },
      point($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "point",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.point)}`;
          }
        });
      },
      points($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "points",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, pointArrayCodec)}`;
          }
        });
      },
      polygon($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "polygon",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.polygon)}`;
          }
        });
      },
      polygons($condition, val) {
        $condition.where({
          type: "attribute",
          attribute: "polygons",
          callback(expression) {
            return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, polygonArrayCodec)}`;
          }
        });
      }
    }
  },
  GeomInput: {
    baked: createObjectAndApplyChildren,
    plans: {
      box(obj, val, {
        field,
        schema
      }) {
        obj.set("box", bakedInputRuntime(schema, field.type, val));
      },
      boxes(obj, val, {
        field,
        schema
      }) {
        obj.set("boxes", bakedInputRuntime(schema, field.type, val));
      },
      circle(obj, val, {
        field,
        schema
      }) {
        obj.set("circle", bakedInputRuntime(schema, field.type, val));
      },
      circles(obj, val, {
        field,
        schema
      }) {
        obj.set("circles", bakedInputRuntime(schema, field.type, val));
      },
      closedPath(obj, val, {
        field,
        schema
      }) {
        obj.set("closed_path", bakedInputRuntime(schema, field.type, val));
      },
      closedPaths(obj, val, {
        field,
        schema
      }) {
        obj.set("closed_paths", bakedInputRuntime(schema, field.type, val));
      },
      id(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      },
      line(obj, val, {
        field,
        schema
      }) {
        obj.set("line", bakedInputRuntime(schema, field.type, val));
      },
      lines(obj, val, {
        field,
        schema
      }) {
        obj.set("lines", bakedInputRuntime(schema, field.type, val));
      },
      lseg(obj, val, {
        field,
        schema
      }) {
        obj.set("lseg", bakedInputRuntime(schema, field.type, val));
      },
      lsegs(obj, val, {
        field,
        schema
      }) {
        obj.set("lsegs", bakedInputRuntime(schema, field.type, val));
      },
      openPath(obj, val, {
        field,
        schema
      }) {
        obj.set("open_path", bakedInputRuntime(schema, field.type, val));
      },
      openPaths(obj, val, {
        field,
        schema
      }) {
        obj.set("open_paths", bakedInputRuntime(schema, field.type, val));
      },
      point(obj, val, {
        field,
        schema
      }) {
        obj.set("point", bakedInputRuntime(schema, field.type, val));
      },
      points(obj, val, {
        field,
        schema
      }) {
        obj.set("points", bakedInputRuntime(schema, field.type, val));
      },
      polygon(obj, val, {
        field,
        schema
      }) {
        obj.set("polygon", bakedInputRuntime(schema, field.type, val));
      },
      polygons(obj, val, {
        field,
        schema
      }) {
        obj.set("polygons", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  GeomPatch: {
    baked: createObjectAndApplyChildren,
    plans: {
      box(obj, val, {
        field,
        schema
      }) {
        obj.set("box", bakedInputRuntime(schema, field.type, val));
      },
      boxes(obj, val, {
        field,
        schema
      }) {
        obj.set("boxes", bakedInputRuntime(schema, field.type, val));
      },
      circle(obj, val, {
        field,
        schema
      }) {
        obj.set("circle", bakedInputRuntime(schema, field.type, val));
      },
      circles(obj, val, {
        field,
        schema
      }) {
        obj.set("circles", bakedInputRuntime(schema, field.type, val));
      },
      closedPath(obj, val, {
        field,
        schema
      }) {
        obj.set("closed_path", bakedInputRuntime(schema, field.type, val));
      },
      closedPaths(obj, val, {
        field,
        schema
      }) {
        obj.set("closed_paths", bakedInputRuntime(schema, field.type, val));
      },
      id(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      },
      line(obj, val, {
        field,
        schema
      }) {
        obj.set("line", bakedInputRuntime(schema, field.type, val));
      },
      lines(obj, val, {
        field,
        schema
      }) {
        obj.set("lines", bakedInputRuntime(schema, field.type, val));
      },
      lseg(obj, val, {
        field,
        schema
      }) {
        obj.set("lseg", bakedInputRuntime(schema, field.type, val));
      },
      lsegs(obj, val, {
        field,
        schema
      }) {
        obj.set("lsegs", bakedInputRuntime(schema, field.type, val));
      },
      openPath(obj, val, {
        field,
        schema
      }) {
        obj.set("open_path", bakedInputRuntime(schema, field.type, val));
      },
      openPaths(obj, val, {
        field,
        schema
      }) {
        obj.set("open_paths", bakedInputRuntime(schema, field.type, val));
      },
      point(obj, val, {
        field,
        schema
      }) {
        obj.set("point", bakedInputRuntime(schema, field.type, val));
      },
      points(obj, val, {
        field,
        schema
      }) {
        obj.set("points", bakedInputRuntime(schema, field.type, val));
      },
      polygon(obj, val, {
        field,
        schema
      }) {
        obj.set("polygon", bakedInputRuntime(schema, field.type, val));
      },
      polygons(obj, val, {
        field,
        schema
      }) {
        obj.set("polygons", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateGeomByIdInput: {
    plans: {
      clientMutationId(qb, val) {
        qb.setMeta("clientMutationId", val);
      },
      geomPatch(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateGeomInput: {
    plans: {
      clientMutationId(qb, val) {
        qb.setMeta("clientMutationId", val);
      },
      geomPatch(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  }
};
export const scalars = {
  Cursor: {
    serialize: CursorSerialize,
    parseValue: CursorSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"Cursor" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  }
};
export const enums = {
  GeomsOrderBy: {
    values: {
      BOX_ASC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "box",
          direction: "ASC"
        });
      },
      BOX_DESC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "box",
          direction: "DESC"
        });
      },
      CIRCLE_ASC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "circle",
          direction: "ASC"
        });
      },
      CIRCLE_DESC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "circle",
          direction: "DESC"
        });
      },
      CLOSED_PATH_ASC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "closed_path",
          direction: "ASC"
        });
      },
      CLOSED_PATH_DESC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "closed_path",
          direction: "DESC"
        });
      },
      ID_ASC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "id",
          direction: "ASC"
        });
        queryBuilder.setOrderIsUnique();
      },
      ID_DESC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "id",
          direction: "DESC"
        });
        queryBuilder.setOrderIsUnique();
      },
      LINE_ASC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "line",
          direction: "ASC"
        });
      },
      LINE_DESC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "line",
          direction: "DESC"
        });
      },
      LSEG_ASC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "lseg",
          direction: "ASC"
        });
      },
      LSEG_DESC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "lseg",
          direction: "DESC"
        });
      },
      OPEN_PATH_ASC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "open_path",
          direction: "ASC"
        });
      },
      OPEN_PATH_DESC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "open_path",
          direction: "DESC"
        });
      },
      POINT_ASC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "point",
          direction: "ASC"
        });
      },
      POINT_DESC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "point",
          direction: "DESC"
        });
      },
      POLYGON_ASC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "polygon",
          direction: "ASC"
        });
      },
      POLYGON_DESC(queryBuilder) {
        queryBuilder.orderBy({
          attribute: "polygon",
          direction: "DESC"
        });
      },
      PRIMARY_KEY_ASC(queryBuilder) {
        geomUniques[0].attributes.forEach(attributeName => {
          queryBuilder.orderBy({
            attribute: attributeName,
            direction: "ASC"
          });
        });
        queryBuilder.setOrderIsUnique();
      },
      PRIMARY_KEY_DESC(queryBuilder) {
        geomUniques[0].attributes.forEach(attributeName => {
          queryBuilder.orderBy({
            attribute: attributeName,
            direction: "DESC"
          });
        });
        queryBuilder.setOrderIsUnique();
      }
    }
  }
};
export const schema = makeGrafastSchema({
  typeDefs: typeDefs,
  objects: objects,
  interfaces: interfaces,
  inputObjects: inputObjects,
  scalars: scalars,
  enums: enums
});
