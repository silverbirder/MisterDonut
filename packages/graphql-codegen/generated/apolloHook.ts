import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
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
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression comparing fields on type "JSON" */
export type JsonFilter = {
  eq?: InputMaybe<Scalars['JSON']>;
  neq?: InputMaybe<Scalars['JSON']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the collection */
  deleteFrombuydonutCollection: BuydonutDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFrommisterdonutCollection: MisterdonutDeleteResponse;
  /** Adds one or more `buydonutInsertResponse` records to the collection */
  insertIntobuydonutCollection?: Maybe<BuydonutInsertResponse>;
  /** Adds one or more `misterdonutInsertResponse` records to the collection */
  insertIntomisterdonutCollection?: Maybe<MisterdonutInsertResponse>;
  /** Updates zero or more records in the collection */
  updatebuydonutCollection: BuydonutUpdateResponse;
  /** Updates zero or more records in the collection */
  updatemisterdonutCollection: MisterdonutUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrombuydonutCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<BuydonutFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommisterdonutCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<MisterdonutFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntobuydonutCollectionArgs = {
  objects: Array<BuydonutInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomisterdonutCollectionArgs = {
  objects: Array<MisterdonutInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatebuydonutCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<BuydonutFilter>;
  set: BuydonutUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatemisterdonutCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<MisterdonutFilter>;
  set: MisterdonutUpdateInput;
};

/** Defines a per-field sorting order */
export type OrderByDirection =
  /** Ascending order, nulls first */
  | 'AscNullsFirst'
  /** Ascending order, nulls last */
  | 'AscNullsLast'
  /** Descending order, nulls first */
  | 'DescNullsFirst'
  /** Descending order, nulls last */
  | 'DescNullsLast';

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `buydonut` */
  buydonutCollection?: Maybe<BuydonutConnection>;
  /** A pagable collection of type `misterdonut` */
  misterdonutCollection?: Maybe<MisterdonutConnection>;
};


/** The root type for querying data */
export type QueryBuydonutCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<BuydonutFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BuydonutOrderBy>>;
};


/** The root type for querying data */
export type QueryMisterdonutCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MisterdonutFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MisterdonutOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type Buydonut = {
  __typename?: 'buydonut';
  buy_date?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['BigInt'];
  misterdonut?: Maybe<Misterdonut>;
  misterdonut_id?: Maybe<Scalars['BigInt']>;
  user_id?: Maybe<Scalars['UUID']>;
};

export type BuydonutConnection = {
  __typename?: 'buydonutConnection';
  edges: Array<BuydonutEdge>;
  pageInfo: PageInfo;
};

export type BuydonutDeleteResponse = {
  __typename?: 'buydonutDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Buydonut>;
};

export type BuydonutEdge = {
  __typename?: 'buydonutEdge';
  cursor: Scalars['String'];
  node: Buydonut;
};

export type BuydonutFilter = {
  buy_date?: InputMaybe<DateFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  misterdonut_id?: InputMaybe<BigIntFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type BuydonutInsertInput = {
  buy_date?: InputMaybe<Scalars['Date']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  misterdonut_id?: InputMaybe<Scalars['BigInt']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type BuydonutInsertResponse = {
  __typename?: 'buydonutInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Buydonut>;
};

export type BuydonutOrderBy = {
  buy_date?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  misterdonut_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type BuydonutUpdateInput = {
  buy_date?: InputMaybe<Scalars['Date']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  misterdonut_id?: InputMaybe<Scalars['BigInt']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type BuydonutUpdateResponse = {
  __typename?: 'buydonutUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Buydonut>;
};

export type Misterdonut = {
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


export type MisterdonutBuydonutCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<BuydonutFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BuydonutOrderBy>>;
};

export type MisterdonutConnection = {
  __typename?: 'misterdonutConnection';
  edges: Array<MisterdonutEdge>;
  pageInfo: PageInfo;
};

export type MisterdonutDeleteResponse = {
  __typename?: 'misterdonutDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Misterdonut>;
};

export type MisterdonutEdge = {
  __typename?: 'misterdonutEdge';
  cursor: Scalars['String'];
  node: Misterdonut;
};

export type MisterdonutFilter = {
  category?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  img?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<BigIntFilter>;
};

export type MisterdonutInsertInput = {
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['BigInt']>;
  row?: InputMaybe<Scalars['JSON']>;
};

export type MisterdonutInsertResponse = {
  __typename?: 'misterdonutInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Misterdonut>;
};

export type MisterdonutOrderBy = {
  category?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  img?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
};

export type MisterdonutUpdateInput = {
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['BigInt']>;
  row?: InputMaybe<Scalars['JSON']>;
};

export type MisterdonutUpdateResponse = {
  __typename?: 'misterdonutUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Misterdonut>;
};

export type DonutsQueryVariables = Exact<{ [key: string]: never; }>;


export type DonutsQuery = { __typename?: 'Query', misterdonutCollection?: { __typename?: 'misterdonutConnection', edges: Array<{ __typename?: 'misterdonutEdge', node: { __typename?: 'misterdonut', category?: string | null, created_at?: any | null, description?: string | null, id: any, img?: string | null, name?: string | null, price?: any | null } }> } | null };


export const DonutsDocument = gql`
    query Donuts {
  misterdonutCollection {
    edges {
      node {
        category
        created_at
        description
        id
        img
        name
        price
      }
    }
  }
}
    `;

/**
 * __useDonutsQuery__
 *
 * To run a query within a React component, call `useDonutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDonutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDonutsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDonutsQuery(baseOptions?: Apollo.QueryHookOptions<DonutsQuery, DonutsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DonutsQuery, DonutsQueryVariables>(DonutsDocument, options);
      }
export function useDonutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DonutsQuery, DonutsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DonutsQuery, DonutsQueryVariables>(DonutsDocument, options);
        }
export type DonutsQueryHookResult = ReturnType<typeof useDonutsQuery>;
export type DonutsLazyQueryHookResult = ReturnType<typeof useDonutsLazyQuery>;
export type DonutsQueryResult = Apollo.QueryResult<DonutsQuery, DonutsQueryVariables>;