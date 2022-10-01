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
  deleteFrombuydonutCollection: BuydonutDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFrommisterdonutCollection: MisterdonutDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromprofileCollection: ProfileDeleteResponse;
  /** Adds one or more `buydonutInsertResponse` records to the collection */
  insertIntobuydonutCollection?: Maybe<BuydonutInsertResponse>;
  /** Adds one or more `misterdonutInsertResponse` records to the collection */
  insertIntomisterdonutCollection?: Maybe<MisterdonutInsertResponse>;
  /** Adds one or more `profileInsertResponse` records to the collection */
  insertIntoprofileCollection?: Maybe<ProfileInsertResponse>;
  /** Updates zero or more records in the collection */
  updatebuydonutCollection: BuydonutUpdateResponse;
  /** Updates zero or more records in the collection */
  updatemisterdonutCollection: MisterdonutUpdateResponse;
  /** Updates zero or more records in the collection */
  updateprofileCollection: ProfileUpdateResponse;
};


/** The root type for creating and mutating data */
type MutationDeleteFrombuydonutCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<BuydonutFilter>;
};


/** The root type for creating and mutating data */
type MutationDeleteFrommisterdonutCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<MisterdonutFilter>;
};


/** The root type for creating and mutating data */
type MutationDeleteFromprofileCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfileFilter>;
};


/** The root type for creating and mutating data */
type MutationInsertIntobuydonutCollectionArgs = {
  objects: Array<BuydonutInsertInput>;
};


/** The root type for creating and mutating data */
type MutationInsertIntomisterdonutCollectionArgs = {
  objects: Array<MisterdonutInsertInput>;
};


/** The root type for creating and mutating data */
type MutationInsertIntoprofileCollectionArgs = {
  objects: Array<ProfileInsertInput>;
};


/** The root type for creating and mutating data */
type MutationUpdatebuydonutCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<BuydonutFilter>;
  set: BuydonutUpdateInput;
};


/** The root type for creating and mutating data */
type MutationUpdatemisterdonutCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<MisterdonutFilter>;
  set: MisterdonutUpdateInput;
};


/** The root type for creating and mutating data */
type MutationUpdateprofileCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfileFilter>;
  set: ProfileUpdateInput;
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
  /** A pagable collection of type `buydonut` */
  buydonutCollection?: Maybe<BuydonutConnection>;
  /** A pagable collection of type `misterdonut` */
  misterdonutCollection?: Maybe<MisterdonutConnection>;
  /** A pagable collection of type `profile` */
  profileCollection?: Maybe<ProfileConnection>;
};


/** The root type for querying data */
type QueryBuydonutCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<BuydonutFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BuydonutOrderBy>>;
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
type QueryProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProfileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProfileOrderBy>>;
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

type Buydonut = {
  __typename?: 'buydonut';
  buy_date?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['BigInt'];
  misterdonut?: Maybe<Misterdonut>;
  misterdonut_id?: Maybe<Scalars['BigInt']>;
  user_id?: Maybe<Scalars['UUID']>;
};

type BuydonutConnection = {
  __typename?: 'buydonutConnection';
  edges: Array<BuydonutEdge>;
  pageInfo: PageInfo;
};

type BuydonutDeleteResponse = {
  __typename?: 'buydonutDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Buydonut>;
};

type BuydonutEdge = {
  __typename?: 'buydonutEdge';
  cursor: Scalars['String'];
  node: Buydonut;
};

type BuydonutFilter = {
  buy_date?: InputMaybe<DateFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  misterdonut_id?: InputMaybe<BigIntFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

type BuydonutInsertInput = {
  buy_date?: InputMaybe<Scalars['Date']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  misterdonut_id?: InputMaybe<Scalars['BigInt']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

type BuydonutInsertResponse = {
  __typename?: 'buydonutInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Buydonut>;
};

type BuydonutOrderBy = {
  buy_date?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  misterdonut_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

type BuydonutUpdateInput = {
  buy_date?: InputMaybe<Scalars['Date']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  misterdonut_id?: InputMaybe<Scalars['BigInt']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

type BuydonutUpdateResponse = {
  __typename?: 'buydonutUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Buydonut>;
};

type Misterdonut = {
  __typename?: 'misterdonut';
  buydonutCollection?: Maybe<BuydonutConnection>;
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  img?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigInt']>;
  row?: Maybe<Scalars['JSON']>;
};


type MisterdonutBuydonutCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<BuydonutFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BuydonutOrderBy>>;
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

type Profile = {
  __typename?: 'profile';
  avatar_url?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  updated_at?: Maybe<Scalars['Datetime']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
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

type DonutsQueryVariables = Exact<{ [key: string]: never; }>;


type DonutsQuery = { __typename?: 'Query', misterdonutCollection?: { __typename?: 'misterdonutConnection', edges: Array<{ __typename?: 'misterdonutEdge', node: { __typename?: 'misterdonut', category?: string | null, created_at?: any | null, description?: string | null, id: any, img?: string | null, name?: string | null, price?: any | null } }> } | null };

type MyProfileQueryVariables = Exact<{
  uid: Scalars['UUID'];
}>;


type MyProfileQuery = { __typename?: 'Query', profileCollection?: { __typename?: 'profileConnection', edges: Array<{ __typename?: 'profileEdge', node: { __typename?: 'profile', avatar_url?: string | null, id: any, username?: string | null } }> } | null };


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
