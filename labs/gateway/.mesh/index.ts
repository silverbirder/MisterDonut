// @ts-nocheck
import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  {
    [SubKey in K]?: Maybe<T[SubKey]>;
  };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  {
    [SubKey in K]: Maybe<T[SubKey]>;
  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Donut = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
};

export type Query = {
  donuts2?: Maybe<Array<Maybe<Donut>>>;
  donut?: Maybe<Donut>;
};

export type QuerydonutArgs = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type DonutInput = {
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Int"]>;
};

export type Mutation = {
  add_donut?: Maybe<Donut>;
  edit_donut?: Maybe<Donut>;
  delete_donut?: Maybe<Donut>;
};

export type Mutationadd_donutArgs = {
  input?: InputMaybe<DonutInput>;
};

export type Mutationedit_donutArgs = {
  id?: InputMaybe<Scalars["Int"]>;
  input?: InputMaybe<DonutInput>;
};

export type Mutationdelete_donutArgs = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type Subscription = {
  add_donut?: Maybe<Donut>;
  edit_donut?: Maybe<Donut>;
  delete_donut?: Maybe<Donut>;
};

export type Subscriptionedit_donutArgs = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type Subscriptiondelete_donutArgs = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Donut: ResolverTypeWrapper<Donut>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Query: ResolverTypeWrapper<{}>;
  DonutInput: DonutInput;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Donut: Donut;
  ID: Scalars["ID"];
  String: Scalars["String"];
  Int: Scalars["Int"];
  Query: {};
  DonutInput: DonutInput;
  Mutation: {};
  Subscription: {};
  Boolean: Scalars["Boolean"];
}>;

export type DonutResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Donut"] = ResolversParentTypes["Donut"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  donuts2?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Donut"]>>>,
    ParentType,
    ContextType
  >;
  donut?: Resolver<
    Maybe<ResolversTypes["Donut"]>,
    ParentType,
    ContextType,
    Partial<QuerydonutArgs>
  >;
}>;

export type MutationResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  add_donut?: Resolver<
    Maybe<ResolversTypes["Donut"]>,
    ParentType,
    ContextType,
    Partial<Mutationadd_donutArgs>
  >;
  edit_donut?: Resolver<
    Maybe<ResolversTypes["Donut"]>,
    ParentType,
    ContextType,
    Partial<Mutationedit_donutArgs>
  >;
  delete_donut?: Resolver<
    Maybe<ResolversTypes["Donut"]>,
    ParentType,
    ContextType,
    Partial<Mutationdelete_donutArgs>
  >;
}>;

export type SubscriptionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = ResolversObject<{
  add_donut?: SubscriptionResolver<
    Maybe<ResolversTypes["Donut"]>,
    "add_donut",
    ParentType,
    ContextType
  >;
  edit_donut?: SubscriptionResolver<
    Maybe<ResolversTypes["Donut"]>,
    "edit_donut",
    ParentType,
    ContextType,
    Partial<Subscriptionedit_donutArgs>
  >;
  delete_donut?: SubscriptionResolver<
    Maybe<ResolversTypes["Donut"]>,
    "delete_donut",
    ParentType,
    ContextType,
    Partial<Subscriptiondelete_donutArgs>
  >;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Donut?: DonutResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
}>;

import {
  MeshContext as BaseMeshContext,
  MeshInstance,
} from "@graphql-mesh/runtime";

import { InContextSdkMethod } from "@graphql-mesh/types";

export namespace DonatsTypes {
  export type Maybe<T> = T | null;
  export type InputMaybe<T> = Maybe<T>;
  export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
  };
  export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    {
      [SubKey in K]?: Maybe<T[SubKey]>;
    };
  export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    {
      [SubKey in K]: Maybe<T[SubKey]>;
    };
  /** All built-in and custom scalars, mapped to their actual values */
  export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
  };

  export type Donut = {
    id: Scalars["ID"];
    name?: Maybe<Scalars["String"]>;
    price?: Maybe<Scalars["Int"]>;
  };

  export type Query = {
    donuts2?: Maybe<Array<Maybe<Donut>>>;
    donut?: Maybe<Donut>;
  };

  export type QuerydonutArgs = {
    id?: InputMaybe<Scalars["Int"]>;
  };

  export type DonutInput = {
    name?: InputMaybe<Scalars["String"]>;
    price?: InputMaybe<Scalars["Int"]>;
  };

  export type Mutation = {
    add_donut?: Maybe<Donut>;
    edit_donut?: Maybe<Donut>;
    delete_donut?: Maybe<Donut>;
  };

  export type Mutationadd_donutArgs = {
    input?: InputMaybe<DonutInput>;
  };

  export type Mutationedit_donutArgs = {
    id?: InputMaybe<Scalars["Int"]>;
    input?: InputMaybe<DonutInput>;
  };

  export type Mutationdelete_donutArgs = {
    id?: InputMaybe<Scalars["Int"]>;
  };

  export type Subscription = {
    add_donut?: Maybe<Donut>;
    edit_donut?: Maybe<Donut>;
    delete_donut?: Maybe<Donut>;
  };

  export type Subscriptionedit_donutArgs = {
    id?: InputMaybe<Scalars["Int"]>;
  };

  export type Subscriptiondelete_donutArgs = {
    id?: InputMaybe<Scalars["Int"]>;
  };
}
export type QueryDonatsSdk = {
  /** undefined **/
  donuts2: InContextSdkMethod<DonatsTypes.Query["donuts2"], {}, MeshContext>;
  /** undefined **/
  donut: InContextSdkMethod<
    DonatsTypes.Query["donut"],
    DonatsTypes.QuerydonutArgs,
    MeshContext
  >;
};

export type MutationDonatsSdk = {
  /** undefined **/
  add_donut: InContextSdkMethod<
    DonatsTypes.Mutation["add_donut"],
    DonatsTypes.Mutationadd_donutArgs,
    MeshContext
  >;
  /** undefined **/
  edit_donut: InContextSdkMethod<
    DonatsTypes.Mutation["edit_donut"],
    DonatsTypes.Mutationedit_donutArgs,
    MeshContext
  >;
  /** undefined **/
  delete_donut: InContextSdkMethod<
    DonatsTypes.Mutation["delete_donut"],
    DonatsTypes.Mutationdelete_donutArgs,
    MeshContext
  >;
};

export type SubscriptionDonatsSdk = {
  /** undefined **/
  add_donut: InContextSdkMethod<
    DonatsTypes.Subscription["add_donut"],
    {},
    MeshContext
  >;
  /** undefined **/
  edit_donut: InContextSdkMethod<
    DonatsTypes.Subscription["edit_donut"],
    DonatsTypes.Subscriptionedit_donutArgs,
    MeshContext
  >;
  /** undefined **/
  delete_donut: InContextSdkMethod<
    DonatsTypes.Subscription["delete_donut"],
    DonatsTypes.Subscriptiondelete_donutArgs,
    MeshContext
  >;
};

export type DonatsContext = {
  ["Donats"]: {
    Query: QueryDonatsSdk;
    Mutation: MutationDonatsSdk;
    Subscription: SubscriptionDonatsSdk;
  };
};

export type MeshContext = DonatsContext & BaseMeshContext;

import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from "@graphql-mesh/runtime";
import { MeshStore, FsStoreStorageAdapter } from "@graphql-mesh/store";
import { path as pathModule } from "@graphql-mesh/cross-helpers";

const baseDir = pathModule.join(
  typeof __dirname === "string" ? __dirname : "/",
  ".."
);

const importFn = (moduleId: string) => {
  const relativeModuleId = (
    pathModule.isAbsolute(moduleId)
      ? pathModule.relative(baseDir, moduleId)
      : moduleId
  )
    .split("\\")
    .join("/")
    .replace(baseDir + "/", "");
  switch (relativeModuleId) {
    default:
      return Promise.reject(
        new Error(`Cannot find module '${relativeModuleId}'.`)
      );
  }
};

const rootStore = new MeshStore(
  ".mesh",
  new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "ts",
  }),
  {
    readonly: true,
    validate: false,
  }
);

import { findAndParseConfig } from "@graphql-mesh/cli";
function getMeshOptions() {
  console.warn(
    'WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts'
  );
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions()
      .then((meshOptions) => getMesh<MeshContext>(meshOptions))
      .then((mesh) => {
        const id$ = mesh.pubsub.subscribe("destroy", () => {
          meshInstance$ = undefined;
          id$
            .then((id) => mesh.pubsub.unsubscribe(id))
            .catch((err) => console.error(err));
        });
        return mesh;
      });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) =>
  getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) =>
  getBuiltMesh().then(({ subscribe }) => subscribe(...args));
