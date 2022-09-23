export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Account = {
  __typename?: 'Account';
  displayName?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type Award = {
  __typename?: 'Award';
  created?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  modified?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  created?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  modified?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
};

export type Channel = {
  __typename?: 'Channel';
  category: Category;
  color?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  favourite: Scalars['Boolean'];
  feedImage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: Scalars['String'];
  modified?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
  type?: Maybe<Type>;
  url: Scalars['String'];
};

export type ChannelCategoryFilter = {
  name?: InputMaybe<Scalars['String']>;
};

export type ChannelContains = {
  contains?: InputMaybe<Scalars['String']>;
};

export type ChannelFilter = {
  orderBy?: InputMaybe<ChannelOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChannelWhereFilter>;
};

export type ChannelOrderBy = {
  name?: InputMaybe<ChannelOrderDirection>;
};

export enum ChannelOrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type ChannelWhereFilter = {
  category?: InputMaybe<ChannelCategoryFilter>;
  categoryId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<ChannelContains>;
};

export type Feed = {
  __typename?: 'Feed';
  awardId: Scalars['ID'];
  category: Category;
  categoryId: Scalars['ID'];
  channel: Channel;
  channelId: Scalars['ID'];
  created: Scalars['Date'];
  id: Scalars['ID'];
  image: Scalars['String'];
  index: Scalars['Int'];
  likes: Scalars['Int'];
  modified?: Maybe<Scalars['Date']>;
  saved?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: Type;
  url: Scalars['String'];
  viewed?: Maybe<Scalars['Boolean']>;
  views: Scalars['Int'];
};

export type FeedOrderBy = {
  created?: InputMaybe<FeedOrderDirection>;
  index?: InputMaybe<FeedOrderDirection>;
};

export enum FeedOrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type FeedWhereAwardFilter = {
  name?: InputMaybe<Scalars['String']>;
};

export type FeedWhereCategoryFilter = {
  name?: InputMaybe<Scalars['String']>;
};

export type FeedWhereFilter = {
  award?: InputMaybe<FeedWhereAwardFilter>;
  awardId?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<FeedWhereCategoryFilter>;
  categoryId?: InputMaybe<Scalars['ID']>;
  channelId?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<FeedWhereTitleFilter>;
};

export type FeedWhereTitleFilter = {
  contains?: InputMaybe<Scalars['String']>;
};

export type FeedsFilter = {
  cursor?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeedOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeedWhereFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  channels: Array<Channel>;
  deleteAccount?: Maybe<Scalars['Boolean']>;
  feedDelete: Feed;
  feedOpen: Feed;
  feedSave: Feed;
  followChannel: Channel;
  saveChannels: Array<Channel>;
  unfollowChannel: Channel;
};


export type MutationChannelsArgs = {
  channels: Array<Scalars['ID']>;
};


export type MutationFeedDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationFeedOpenArgs = {
  id: Scalars['ID'];
};


export type MutationFeedSaveArgs = {
  id: Scalars['ID'];
};


export type MutationFollowChannelArgs = {
  id: Scalars['ID'];
};


export type MutationSaveChannelsArgs = {
  channels: Array<Scalars['ID']>;
};


export type MutationUnfollowChannelArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  awards: Array<Award>;
  categories: Array<Category>;
  channel?: Maybe<Channel>;
  channels: Array<Maybe<Channel>>;
  feeds: Array<Maybe<Feed>>;
  feedsSaved: Array<Feed>;
  tags: Array<Tag>;
  types: Array<Type>;
  user: User;
  userStats: UserStats;
};


export type QueryChannelArgs = {
  id: Scalars['ID'];
};


export type QueryChannelsArgs = {
  filter?: InputMaybe<ChannelFilter>;
};


export type QueryFeedsArgs = {
  filter?: InputMaybe<FeedsFilter>;
  personalized?: InputMaybe<Scalars['Boolean']>;
  saved?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFeedsSavedArgs = {
  categoryId?: InputMaybe<Scalars['ID']>;
  cursor?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type Tag = {
  __typename?: 'Tag';
  created?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  modified?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
};

export type Type = {
  __typename?: 'Type';
  created?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  modified?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Maybe<Account>>>;
  created?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
};

export type UserStats = {
  __typename?: 'UserStats';
  channelsCount: Scalars['Int'];
  channelsFollowing: Scalars['Int'];
  feedCount: Scalars['Int'];
  feedFavourites: Scalars['Int'];
  feedViews: Scalars['Int'];
};
