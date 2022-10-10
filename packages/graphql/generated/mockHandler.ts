import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

/** Boolean expression comparing fields on type "Float" */
type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "Int" */
type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression comparing fields on type "JSON" */
type JsonFilter = {
  eq?: InputMaybe<Scalars['JSON']>;
  neq?: InputMaybe<Scalars['JSON']>;
};

/** The root type for creating and mutating data */
type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the collection */
  deleteFrommisterdonutCollection: MisterdonutDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromorder_historyCollection: Order_HistoryDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromorder_history_detailCollection: Order_History_DetailDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromprofileCollection: ProfileDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromschema_migrationsCollection: Schema_MigrationsDeleteResponse;
  /** Adds one or more `misterdonutInsertResponse` records to the collection */
  insertIntomisterdonutCollection?: Maybe<MisterdonutInsertResponse>;
  /** Adds one or more `order_historyInsertResponse` records to the collection */
  insertIntoorder_historyCollection?: Maybe<Order_HistoryInsertResponse>;
  /** Adds one or more `order_history_detailInsertResponse` records to the collection */
  insertIntoorder_history_detailCollection?: Maybe<Order_History_DetailInsertResponse>;
  /** Adds one or more `profileInsertResponse` records to the collection */
  insertIntoprofileCollection?: Maybe<ProfileInsertResponse>;
  /** Adds one or more `schema_migrationsInsertResponse` records to the collection */
  insertIntoschema_migrationsCollection?: Maybe<Schema_MigrationsInsertResponse>;
  /** Updates zero or more records in the collection */
  updatemisterdonutCollection: MisterdonutUpdateResponse;
  /** Updates zero or more records in the collection */
  updateorder_historyCollection: Order_HistoryUpdateResponse;
  /** Updates zero or more records in the collection */
  updateorder_history_detailCollection: Order_History_DetailUpdateResponse;
  /** Updates zero or more records in the collection */
  updateprofileCollection: ProfileUpdateResponse;
  /** Updates zero or more records in the collection */
  updateschema_migrationsCollection: Schema_MigrationsUpdateResponse;
};


/** The root type for creating and mutating data */
type MutationDeleteFrommisterdonutCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<MisterdonutFilter>;
};


/** The root type for creating and mutating data */
type MutationDeleteFromorder_HistoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Order_HistoryFilter>;
};


/** The root type for creating and mutating data */
type MutationDeleteFromorder_History_DetailCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Order_History_DetailFilter>;
};


/** The root type for creating and mutating data */
type MutationDeleteFromprofileCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfileFilter>;
};


/** The root type for creating and mutating data */
type MutationDeleteFromschema_MigrationsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Schema_MigrationsFilter>;
};


/** The root type for creating and mutating data */
type MutationInsertIntomisterdonutCollectionArgs = {
  objects: Array<MisterdonutInsertInput>;
};


/** The root type for creating and mutating data */
type MutationInsertIntoorder_HistoryCollectionArgs = {
  objects: Array<Order_HistoryInsertInput>;
};


/** The root type for creating and mutating data */
type MutationInsertIntoorder_History_DetailCollectionArgs = {
  objects: Array<Order_History_DetailInsertInput>;
};


/** The root type for creating and mutating data */
type MutationInsertIntoprofileCollectionArgs = {
  objects: Array<ProfileInsertInput>;
};


/** The root type for creating and mutating data */
type MutationInsertIntoschema_MigrationsCollectionArgs = {
  objects: Array<Schema_MigrationsInsertInput>;
};


/** The root type for creating and mutating data */
type MutationUpdatemisterdonutCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<MisterdonutFilter>;
  set: MisterdonutUpdateInput;
};


/** The root type for creating and mutating data */
type MutationUpdateorder_HistoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Order_HistoryFilter>;
  set: Order_HistoryUpdateInput;
};


/** The root type for creating and mutating data */
type MutationUpdateorder_History_DetailCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Order_History_DetailFilter>;
  set: Order_History_DetailUpdateInput;
};


/** The root type for creating and mutating data */
type MutationUpdateprofileCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfileFilter>;
  set: ProfileUpdateInput;
};


/** The root type for creating and mutating data */
type MutationUpdateschema_MigrationsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Schema_MigrationsFilter>;
  set: Schema_MigrationsUpdateInput;
};

/** Defines a per-field sorting order */
type OrderByDirection =
  /** Ascending order, nulls first */
  | 'AscNullsFirst'
  /** Ascending order, nulls last */
  | 'AscNullsLast'
  /** Descending order, nulls first */
  | 'DescNullsFirst'
  /** Descending order, nulls last */
  | 'DescNullsLast';

type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `misterdonut` */
  misterdonutCollection?: Maybe<MisterdonutConnection>;
  /** A pagable collection of type `order_history` */
  order_historyCollection?: Maybe<Order_HistoryConnection>;
  /** A pagable collection of type `order_history_detail` */
  order_history_detailCollection?: Maybe<Order_History_DetailConnection>;
  /** A pagable collection of type `profile` */
  profileCollection?: Maybe<ProfileConnection>;
  /** A pagable collection of type `schema_migrations` */
  schema_migrationsCollection?: Maybe<Schema_MigrationsConnection>;
};


/** The root type for querying data */
type QueryMisterdonutCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MisterdonutFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MisterdonutOrderBy>>;
};


/** The root type for querying data */
type QueryOrder_HistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Order_HistoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Order_HistoryOrderBy>>;
};


/** The root type for querying data */
type QueryOrder_History_DetailCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Order_History_DetailFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Order_History_DetailOrderBy>>;
};


/** The root type for querying data */
type QueryProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProfileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProfileOrderBy>>;
};


/** The root type for querying data */
type QuerySchema_MigrationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Schema_MigrationsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Schema_MigrationsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  neq?: InputMaybe<Scalars['UUID']>;
};

type Misterdonut = {
  __typename?: 'misterdonut';
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  img?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order_history_detailCollection?: Maybe<Order_History_DetailConnection>;
  price?: Maybe<Scalars['BigInt']>;
  row?: Maybe<Scalars['JSON']>;
};


type MisterdonutOrder_History_DetailCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Order_History_DetailFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Order_History_DetailOrderBy>>;
};

type MisterdonutConnection = {
  __typename?: 'misterdonutConnection';
  edges: Array<MisterdonutEdge>;
  pageInfo: PageInfo;
};

type MisterdonutDeleteResponse = {
  __typename?: 'misterdonutDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Misterdonut>;
};

type MisterdonutEdge = {
  __typename?: 'misterdonutEdge';
  cursor: Scalars['String'];
  node: Misterdonut;
};

type MisterdonutFilter = {
  category?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  img?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<BigIntFilter>;
};

type MisterdonutInsertInput = {
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['BigInt']>;
  row?: InputMaybe<Scalars['JSON']>;
};

type MisterdonutInsertResponse = {
  __typename?: 'misterdonutInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Misterdonut>;
};

type MisterdonutOrderBy = {
  category?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  img?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
};

type MisterdonutUpdateInput = {
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['BigInt']>;
  row?: InputMaybe<Scalars['JSON']>;
};

type MisterdonutUpdateResponse = {
  __typename?: 'misterdonutUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Misterdonut>;
};

type Order_History = {
  __typename?: 'order_history';
  created_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['BigInt'];
  order_date?: Maybe<Scalars['Datetime']>;
  order_history_detailCollection?: Maybe<Order_History_DetailConnection>;
  profile?: Maybe<Profile>;
  profile_id?: Maybe<Scalars['UUID']>;
};


type Order_HistoryOrder_History_DetailCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Order_History_DetailFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Order_History_DetailOrderBy>>;
};

type Order_HistoryConnection = {
  __typename?: 'order_historyConnection';
  edges: Array<Order_HistoryEdge>;
  pageInfo: PageInfo;
};

type Order_HistoryDeleteResponse = {
  __typename?: 'order_historyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Order_History>;
};

type Order_HistoryEdge = {
  __typename?: 'order_historyEdge';
  cursor: Scalars['String'];
  node: Order_History;
};

type Order_HistoryFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  order_date?: InputMaybe<DatetimeFilter>;
  profile_id?: InputMaybe<UuidFilter>;
};

type Order_HistoryInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  order_date?: InputMaybe<Scalars['Datetime']>;
  profile_id?: InputMaybe<Scalars['UUID']>;
};

type Order_HistoryInsertResponse = {
  __typename?: 'order_historyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Order_History>;
};

type Order_HistoryOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  order_date?: InputMaybe<OrderByDirection>;
  profile_id?: InputMaybe<OrderByDirection>;
};

type Order_HistoryUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  order_date?: InputMaybe<Scalars['Datetime']>;
  profile_id?: InputMaybe<Scalars['UUID']>;
};

type Order_HistoryUpdateResponse = {
  __typename?: 'order_historyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Order_History>;
};

type Order_History_Detail = {
  __typename?: 'order_history_detail';
  created_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['BigInt'];
  misterdonut?: Maybe<Misterdonut>;
  misterdonut_id?: Maybe<Scalars['BigInt']>;
  order_history?: Maybe<Order_History>;
  order_history_id?: Maybe<Scalars['BigInt']>;
};

type Order_History_DetailConnection = {
  __typename?: 'order_history_detailConnection';
  edges: Array<Order_History_DetailEdge>;
  pageInfo: PageInfo;
};

type Order_History_DetailDeleteResponse = {
  __typename?: 'order_history_detailDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Order_History_Detail>;
};

type Order_History_DetailEdge = {
  __typename?: 'order_history_detailEdge';
  cursor: Scalars['String'];
  node: Order_History_Detail;
};

type Order_History_DetailFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  misterdonut_id?: InputMaybe<BigIntFilter>;
  order_history_id?: InputMaybe<BigIntFilter>;
};

type Order_History_DetailInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  misterdonut_id?: InputMaybe<Scalars['BigInt']>;
  order_history_id?: InputMaybe<Scalars['BigInt']>;
};

type Order_History_DetailInsertResponse = {
  __typename?: 'order_history_detailInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Order_History_Detail>;
};

type Order_History_DetailOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  misterdonut_id?: InputMaybe<OrderByDirection>;
  order_history_id?: InputMaybe<OrderByDirection>;
};

type Order_History_DetailUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  misterdonut_id?: InputMaybe<Scalars['BigInt']>;
  order_history_id?: InputMaybe<Scalars['BigInt']>;
};

type Order_History_DetailUpdateResponse = {
  __typename?: 'order_history_detailUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Order_History_Detail>;
};

type Profile = {
  __typename?: 'profile';
  avatar_url?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  order_historyCollection?: Maybe<Order_HistoryConnection>;
  updated_at?: Maybe<Scalars['Datetime']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};


type ProfileOrder_HistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Order_HistoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Order_HistoryOrderBy>>;
};

type ProfileConnection = {
  __typename?: 'profileConnection';
  edges: Array<ProfileEdge>;
  pageInfo: PageInfo;
};

type ProfileDeleteResponse = {
  __typename?: 'profileDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

type ProfileEdge = {
  __typename?: 'profileEdge';
  cursor: Scalars['String'];
  node: Profile;
};

type ProfileFilter = {
  avatar_url?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  username?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
};

type ProfileInsertInput = {
  avatar_url?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

type ProfileInsertResponse = {
  __typename?: 'profileInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

type ProfileOrderBy = {
  avatar_url?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  username?: InputMaybe<OrderByDirection>;
  website?: InputMaybe<OrderByDirection>;
};

type ProfileUpdateInput = {
  avatar_url?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

type ProfileUpdateResponse = {
  __typename?: 'profileUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

type Schema_Migrations = {
  __typename?: 'schema_migrations';
  version: Scalars['String'];
};

type Schema_MigrationsConnection = {
  __typename?: 'schema_migrationsConnection';
  edges: Array<Schema_MigrationsEdge>;
  pageInfo: PageInfo;
};

type Schema_MigrationsDeleteResponse = {
  __typename?: 'schema_migrationsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Schema_Migrations>;
};

type Schema_MigrationsEdge = {
  __typename?: 'schema_migrationsEdge';
  cursor: Scalars['String'];
  node: Schema_Migrations;
};

type Schema_MigrationsFilter = {
  version?: InputMaybe<StringFilter>;
};

type Schema_MigrationsInsertInput = {
  version?: InputMaybe<Scalars['String']>;
};

type Schema_MigrationsInsertResponse = {
  __typename?: 'schema_migrationsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Schema_Migrations>;
};

type Schema_MigrationsOrderBy = {
  version?: InputMaybe<OrderByDirection>;
};

type Schema_MigrationsUpdateInput = {
  version?: InputMaybe<Scalars['String']>;
};

type Schema_MigrationsUpdateResponse = {
  __typename?: 'schema_migrationsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Schema_Migrations>;
};

type MyProfileQueryVariables = Exact<{
  uid: Scalars['UUID'];
}>;


type MyProfileQuery = { __typename?: 'Query', profileCollection?: { __typename?: 'profileConnection', edges: Array<{ __typename?: 'profileEdge', node: { __typename?: 'profile', avatar_url?: string | null, id: any, username?: string | null } }> } | null };

type DonutsQueryVariables = Exact<{ [key: string]: never; }>;


type DonutsQuery = { __typename?: 'Query', misterdonutCollection?: { __typename?: 'misterdonutConnection', edges: Array<{ __typename?: 'misterdonutEdge', node: { __typename?: 'misterdonut', category?: string | null, created_at?: any | null, description?: string | null, id: any, img?: string | null, name?: string | null, price?: any | null } }> } | null };

type InsertOrderHistoryMutationVariables = Exact<{
  objects: Array<Order_HistoryInsertInput> | Order_HistoryInsertInput;
}>;


type InsertOrderHistoryMutation = { __typename?: 'Mutation', insertIntoorder_historyCollection?: { __typename?: 'order_historyInsertResponse', records: Array<{ __typename?: 'order_history', id: any }> } | null };


/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockMyProfileQuery((req, res, ctx) => {
 *   const { uid } = req.variables;
 *   return res(
 *     ctx.data({ profileCollection })
 *   )
 * })
 */
export const mockMyProfileQuery = (resolver: ResponseResolver<GraphQLRequest<MyProfileQueryVariables>, GraphQLContext<MyProfileQuery>, any>) =>
  graphql.query<MyProfileQuery, MyProfileQueryVariables>(
    'MyProfile',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDonutsQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ misterdonutCollection })
 *   )
 * })
 */
export const mockDonutsQuery = (resolver: ResponseResolver<GraphQLRequest<DonutsQueryVariables>, GraphQLContext<DonutsQuery>, any>) =>
  graphql.query<DonutsQuery, DonutsQueryVariables>(
    'Donuts',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInsertOrderHistoryMutation((req, res, ctx) => {
 *   const { objects } = req.variables;
 *   return res(
 *     ctx.data({ insertIntoorder_historyCollection })
 *   )
 * })
 */
export const mockInsertOrderHistoryMutation = (resolver: ResponseResolver<GraphQLRequest<InsertOrderHistoryMutationVariables>, GraphQLContext<InsertOrderHistoryMutation>, any>) =>
  graphql.mutation<InsertOrderHistoryMutation, InsertOrderHistoryMutationVariables>(
    'InsertOrderHistory',
    resolver
  )
