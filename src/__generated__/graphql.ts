/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type EnrollParticipant = {
  __typename?: 'EnrollParticipant';
  hadCovid?: Maybe<Scalars['Boolean']['output']>;
  hasDiabetes?: Maybe<Scalars['Boolean']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  trialId: Scalars['String']['output'];
  weight?: Maybe<Scalars['Int']['output']>;
};

export type EnrollParticipantResponse = {
  __typename?: 'EnrollParticipantResponse';
  id: Scalars['String']['output'];
  isEligible: Scalars['Boolean']['output'];
};

export type GetParticipant = {
  __typename?: 'GetParticipant';
  id: Scalars['String']['output'];
  trialId?: Maybe<Scalars['String']['output']>;
};

export type MedicalFile = {
  __typename?: 'MedicalFile';
  hadCovid?: Maybe<Scalars['Boolean']['output']>;
  hasDiabetes?: Maybe<Scalars['Boolean']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  participant: Participant;
  participantId: Scalars['String']['output'];
  weight?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  enrollParticipant: Array<EnrollParticipant>;
};

export type Participant = {
  __typename?: 'Participant';
  id: Scalars['String']['output'];
  medicalFile: MedicalFile;
  name: Scalars['String']['output'];
  trial: Trial;
  trialId: Scalars['String']['output'];
};

export type ParticipantsCount = {
  __typename?: 'ParticipantsCount';
  participants: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  participants: Array<Participant>;
  trials: Array<Trial>;
};

export type Trial = {
  __typename?: 'Trial';
  _count?: Maybe<ParticipantsCount>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  participants?: Maybe<Array<Participant>>;
};
