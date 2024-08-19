/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a date and time in the UTC
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string, including UTC timezone ("Z"). The parsed date and time string will
   * be converted to UTC if there is an offset.
   */
  DateTime: { input: any; output: any; }
  /**
   * The `Decimal` scalar type represents signed double-precision fractional
   * values parsed by the `Decimal` library. The Decimal appears in a JSON
   * response as a string to preserve precision.
   */
  Decimal: { input: any; output: any; }
  /** JSON field type in postgres */
  Json: { input: any; output: any; }
  /**
   * The `Naive DateTime` scalar type represents a naive date and time without
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string.
   */
  NaiveDateTime: { input: any; output: any; }
};

export enum AcceptStatusType {
  Accepted = 'ACCEPTED',
  AcceptedInvited = 'ACCEPTED_INVITED',
  Declined = 'DECLINED',
  Invited = 'INVITED',
  Rejected = 'REJECTED'
}

export enum AccessLevel {
  CSuite = 'C_SUITE',
  Ir = 'IR',
  SeniorManagement = 'SENIOR_MANAGEMENT'
}

export type ActivityDelegateInput = {
  attendanceConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  forumDelegateId: Scalars['ID']['input'];
  isOptional?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
};

export type ActivityDelegateSelfBookingInput = {
  attendanceConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  forumActivityId?: InputMaybe<Scalars['ID']['input']>;
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  isOptional?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  role?: InputMaybe<RoleType>;
};

export type ActivityDelegateUpdateInput = {
  attendanceConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  isOptional?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  role?: InputMaybe<RoleType>;
};

export enum ActivityMegaType {
  Mtg = 'MTG',
  Pre = 'PRE'
}

export type ActivityRequest = Request & {
  __typename?: 'ActivityRequest';
  cancelAt?: Maybe<Scalars['DateTime']['output']>;
  cancelBy?: Maybe<CancelByType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  forumActivity?: Maybe<ForumActivity>;
  forumDelegate: ForumDelegate;
  forumId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isIgnored?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  requestedActivity?: Maybe<ForumActivity>;
  type?: Maybe<RequestType>;
};

export type ActivitySlot = {
  __typename?: 'ActivitySlot';
  desc?: Maybe<Scalars['String']['output']>;
  duration: Scalars['Int']['output'];
  durationInHhMm?: Maybe<Scalars['String']['output']>;
  endTimeInHhMm?: Maybe<Scalars['String']['output']>;
  forumId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  timeslot: Scalars['Int']['output'];
  timeslotInHhMm?: Maybe<Scalars['String']['output']>;
};

export type ActivitySlotCreateInput = {
  desc?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  forumId: Scalars['ID']['input'];
  timeslot?: InputMaybe<Scalars['Int']['input']>;
};

export type ActivitySubtype = {
  __typename?: 'ActivitySubtype';
  activityType?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  desc: Scalars['String']['output'];
};

export enum ActivityType {
  Analyst = 'ANALYST',
  Corp = 'CORP',
  Group = 'GROUP',
  GuestSpeaker = 'GUEST_SPEAKER',
  Oma = 'OMA',
  OneOnOne = 'ONE_ON_ONE',
  PrivateSocialActivity = 'PRIVATE_SOCIAL_ACTIVITY',
  PublicSocialActivity = 'PUBLIC_SOCIAL_ACTIVITY'
}

export type AnalystCoverage = {
  __typename?: 'AnalystCoverage';
  contact?: Maybe<Contact>;
  sector?: Maybe<Sector>;
};

export type AuditCmsComponent = {
  __typename?: 'AuditCmsComponent';
  code: Scalars['String']['output'];
  contact: Contact;
  forumId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['Json']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};


export type AuditCmsComponentContactArgs = {
  types?: InputMaybe<Array<InputMaybe<ContactType>>>;
};

export type AuditForumActivityDescription = {
  __typename?: 'AuditForumActivityDescription';
  activityPublishState?: Maybe<Scalars['String']['output']>;
  activityTitle?: Maybe<Scalars['String']['output']>;
  desc?: Maybe<Scalars['String']['output']>;
  descState?: Maybe<Scalars['String']['output']>;
  forumActivityDescription?: Maybe<ForumActivityDescription>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['Json']['output']>;
  showToAllStaff?: Maybe<Scalars['Boolean']['output']>;
  showToAudience?: Maybe<Scalars['Boolean']['output']>;
  showToPresenter?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  updatedBy?: Maybe<Contact>;
};

export type AuditForumDelegate = {
  __typename?: 'AuditForumDelegate';
  acceptStatus: AcceptStatusType;
  acceptingMedia?: Maybe<Scalars['Boolean']['output']>;
  activityRequests: Array<ActivityRequest>;
  agreeToCompliance?: Maybe<Scalars['Boolean']['output']>;
  availableTo?: Maybe<Array<Maybe<AvailableToType>>>;
  checkedIn?: Maybe<Scalars['Boolean']['output']>;
  contact: Contact;
  corpRequests: Array<CorpRequest>;
  currentAuditVersion?: Maybe<Scalars['Int']['output']>;
  dietaryRequirementsComment?: Maybe<Scalars['String']['output']>;
  dietaryRequirementsVeg?: Maybe<Scalars['Boolean']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  forumActivities: Array<ForumActivity>;
  forumActivityDelegates: Array<ForumActivityDelegate>;
  forumCompany: ForumCompany;
  forumDelegateAvailabilities?: Maybe<Array<Maybe<ForumDelegateAvailability>>>;
  forumId: Scalars['String']['output'];
  forumInfo?: Maybe<ForumInfo>;
  forumTourDelegates: Array<ForumTourDelegate>;
  havePresentationMaterials?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isAttendingEvents?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  laptop?: Maybe<Scalars['Boolean']['output']>;
  laptopModel?: Maybe<Scalars['String']['output']>;
  largeGroupPresentationHoster?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Scalars['Json']['output']>;
  needsTranslator?: Maybe<Scalars['Boolean']['output']>;
  noticeOfUseCollectionDisclosure?: Maybe<Scalars['Boolean']['output']>;
  personalMobileNumber?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  presentationEquipmentSpecialRequests?: Maybe<Scalars['String']['output']>;
  primaryModeOfContact?: Maybe<PrimaryModeOfContact>;
  privateDesc?: Maybe<Scalars['String']['output']>;
  provideAccessToMaterials?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToClsaWebsite?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToLargeGroupPresentation?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToMedia?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToSmallGroupOrOneOnOne?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToPublishingRecordingsToClsaWebsite?: Maybe<Scalars['Boolean']['output']>;
  publicDesc?: Maybe<Scalars['String']['output']>;
  publicDescState?: Maybe<Scalars['String']['output']>;
  publishState?: Maybe<Scalars['String']['output']>;
  publishedSchedule: Array<MyActivity>;
  rank?: Maybe<Scalars['Int']['output']>;
  representative?: Maybe<Scalars['String']['output']>;
  representativeEmail?: Maybe<Scalars['String']['output']>;
  rexForumDelegatePageState?: Maybe<Array<Maybe<RexForumDelegatePageState>>>;
  speakerRequests: Array<SpeakerRequest>;
  specialRequests?: Maybe<Scalars['String']['output']>;
  subtype?: Maybe<DelegateSubtype>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  updatedBy?: Maybe<Contact>;
  walkIn?: Maybe<Scalars['Boolean']['output']>;
  zoomUrls?: Maybe<Array<Maybe<ZoomUrl>>>;
};


export type AuditForumDelegateContactArgs = {
  types?: InputMaybe<Array<InputMaybe<ContactType>>>;
};


export type AuditForumDelegateForumActivitiesArgs = {
  forumCompanyId?: InputMaybe<Scalars['ID']['input']>;
  megaTypes?: InputMaybe<Array<InputMaybe<ActivityMegaType>>>;
  showOnly?: InputMaybe<ShowOnlyType>;
};


export type AuditForumDelegateForumActivityDelegatesArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleType>>>;
};


export type AuditForumDelegateForumTourDelegatesArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleType>>>;
};


export type AuditForumDelegateZoomUrlsArgs = {
  forumActivitiesIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum AvailableToType {
  Group = 'GROUP',
  One = 'ONE',
  Presentation = 'PRESENTATION'
}

export enum CancelByType {
  Client = 'CLIENT',
  ClientRex = 'CLIENT_REX',
  Corp = 'CORP',
  Host = 'HOST',
  NoShowClient = 'NO_SHOW_CLIENT',
  NoShowCorp = 'NO_SHOW_CORP'
}

export type Client = {
  __typename?: 'Client';
  address?: Maybe<Scalars['String']['output']>;
  cdbId?: Maybe<Scalars['Int']['output']>;
  cisId?: Maybe<Scalars['Int']['output']>;
  company?: Maybe<Company>;
  forumDelegates: Array<ForumDelegate>;
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};


export type ClientForumDelegatesArgs = {
  onlyAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  subtype?: InputMaybe<DelegateSubtype>;
};

export type ClientCorpRequestCreateInput = {
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<CancelByType>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  equityShareholderStatus?: InputMaybe<Scalars['Boolean']['input']>;
  familarity?: InputMaybe<FamilarityType>;
  forumCompanyId: Scalars['ID']['input'];
  forumDelegateId: Scalars['ID']['input'];
  forumId?: InputMaybe<Scalars['ID']['input']>;
  isCancelledByDelegate?: InputMaybe<Scalars['String']['input']>;
  isIgnored?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<RequestType>;
};

export type ClientCorpRequestDeleteInput = {
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<CancelByType>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  equityShareholderStatus?: InputMaybe<Scalars['Boolean']['input']>;
  familarity?: InputMaybe<FamilarityType>;
  forumCompanyId?: InputMaybe<Scalars['ID']['input']>;
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  forumId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  isCancelledByDelegate?: InputMaybe<Scalars['String']['input']>;
  isIgnored?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<RequestType>;
};

export type ClientCorpRequestUpdateInput = {
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<CancelByType>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  equityShareholderStatus?: InputMaybe<Scalars['Boolean']['input']>;
  familarity?: InputMaybe<FamilarityType>;
  forumCompanyId?: InputMaybe<Scalars['ID']['input']>;
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  forumId?: InputMaybe<Scalars['ID']['input']>;
  isCancelledByDelegate?: InputMaybe<Scalars['String']['input']>;
  isIgnored?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<RequestType>;
};

export type ClientSpeakerRequestCreateInput = {
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<CancelByType>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  forumDelegateId: Scalars['ID']['input'];
  forumId?: InputMaybe<Scalars['ID']['input']>;
  forumSpeakerId: Scalars['ID']['input'];
  isCancelledByDelegate?: InputMaybe<Scalars['String']['input']>;
  isIgnored?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<RequestType>;
};

export type ClientSpeakerRequestDeleteInput = {
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<CancelByType>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  forumId?: InputMaybe<Scalars['ID']['input']>;
  forumSpeakerId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  isCancelledByDelegate?: InputMaybe<Scalars['String']['input']>;
  isIgnored?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<RequestType>;
};

export type ClientSpeakerRequestUpdateInput = {
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<CancelByType>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  forumId?: InputMaybe<Scalars['ID']['input']>;
  forumSpeakerId?: InputMaybe<Scalars['ID']['input']>;
  isCancelledByDelegate?: InputMaybe<Scalars['String']['input']>;
  isIgnored?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<RequestType>;
};

export type CmsComponent = {
  __typename?: 'CmsComponent';
  code: Scalars['String']['output'];
  forumInfo?: Maybe<ForumInfo>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['Json']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CmsComponentCreateInput = {
  code: Scalars['String']['input'];
  forumId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['Json']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Company = {
  __typename?: 'Company';
  address?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Maybe<Client>>>;
  companyCdbId?: Maybe<Scalars['Int']['output']>;
  companyCisId?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Maybe<Contact>>>;
  coverageStocks?: Maybe<Array<Maybe<CoverageStock>>>;
  forumCompanies?: Maybe<Array<Maybe<ForumCompany>>>;
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  marketCap?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  nameInNativeLanguage?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  sector?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  threeMadto?: Maybe<Scalars['Float']['output']>;
  ticker?: Maybe<Scalars['String']['output']>;
  tier?: Maybe<Scalars['String']['output']>;
  type: CompanyType;
};

export type CompanyCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyCdbId?: InputMaybe<Scalars['Int']['input']>;
  companyCisId?: InputMaybe<Scalars['Int']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  locationId: Scalars['ID']['input'];
  marketCap?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  nameInNativeLanguage?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  sector?: InputMaybe<Scalars['String']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  threeMadto?: InputMaybe<Scalars['Float']['input']>;
  ticker?: InputMaybe<Scalars['String']['input']>;
  tier?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CompanyType>;
};

export enum CompanySubtype {
  Citics = 'CITICS',
  Clsa = 'CLSA',
  Corporate = 'CORPORATE',
  FixedIncome = 'FIXED_INCOME',
  FuturesAndOptions = 'FUTURES_AND_OPTIONS',
  HedgeFund = 'HEDGE_FUND',
  Individual = 'INDIVIDUAL',
  Internal = 'INTERNAL',
  InvestmentBanking = 'INVESTMENT_BANKING',
  Investor = 'INVESTOR',
  LongFund = 'LONG_FUND',
  PrivateEquity = 'PRIVATE_EQUITY',
  SovereignWealthFund = 'SOVEREIGN_WEALTH_FUND',
  Speaker = 'SPEAKER'
}

export enum CompanyType {
  Corporate = 'CORPORATE',
  Host = 'HOST',
  Investor = 'INVESTOR',
  Speaker = 'SPEAKER'
}

export type CompanyUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyCdbId?: InputMaybe<Scalars['Int']['input']>;
  companyCisId?: InputMaybe<Scalars['Int']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  marketCap?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameInNativeLanguage?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  sector?: InputMaybe<Scalars['String']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  threeMadto?: InputMaybe<Scalars['Float']['input']>;
  ticker?: InputMaybe<Scalars['String']['input']>;
  tier?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CompanyType>;
};

export type Contact = {
  __typename?: 'Contact';
  analystCoverage?: Maybe<Array<Maybe<AnalystCoverage>>>;
  assistantEmail?: Maybe<Scalars['String']['output']>;
  assistantName?: Maybe<Scalars['String']['output']>;
  assistantPhone?: Maybe<Scalars['String']['output']>;
  auditCmsComponent?: Maybe<Array<Maybe<AuditCmsComponent>>>;
  client?: Maybe<Client>;
  company: Company;
  contactCoverages?: Maybe<Array<Maybe<Contact>>>;
  coveringContacts?: Maybe<Array<Maybe<Contact>>>;
  delegateCdbId?: Maybe<Scalars['Int']['output']>;
  emdCompanyId?: Maybe<Scalars['Int']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<Array<Maybe<Contact>>>;
  following?: Maybe<Array<Maybe<Contact>>>;
  forumDelegates: Array<ForumDelegate>;
  forumInterests?: Maybe<Array<Maybe<ForumInterest>>>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isClosed?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  nameInNativeLanguage?: Maybe<Scalars['String']['output']>;
  officeNumber?: Maybe<Scalars['String']['output']>;
  phones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  primaryEmail?: Maybe<Scalars['String']['output']>;
  primaryMobileNumber?: Maybe<Scalars['String']['output']>;
  representatives?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  salutation?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: ContactType;
  userid?: Maybe<Scalars['String']['output']>;
};


export type ContactForumDelegatesArgs = {
  onlyAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  subtype?: InputMaybe<DelegateSubtype>;
};


export type ContactLocationArgs = {
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactCreateInput = {
  assistantEmail?: InputMaybe<Scalars['String']['input']>;
  assistantName?: InputMaybe<Scalars['String']['input']>;
  assistantPhone?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  companyId: Scalars['ID']['input'];
  delegateCdbId?: InputMaybe<Scalars['Int']['input']>;
  emdCompanyId?: InputMaybe<Scalars['Int']['input']>;
  firstName: Scalars['String']['input'];
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  locationId: Scalars['ID']['input'];
  nameInNativeLanguage?: InputMaybe<Scalars['String']['input']>;
  officeNumber?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  primaryEmail?: InputMaybe<Scalars['String']['input']>;
  primaryMobileNumber?: InputMaybe<Scalars['String']['input']>;
  representatives?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ContactType>;
};

export enum ContactType {
  Corporate = 'CORPORATE',
  Host = 'HOST',
  Investor = 'INVESTOR',
  Speaker = 'SPEAKER'
}

export type ContactUpdateInput = {
  assistantEmail?: InputMaybe<Scalars['String']['input']>;
  assistantName?: InputMaybe<Scalars['String']['input']>;
  assistantPhone?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  companyId?: InputMaybe<Scalars['ID']['input']>;
  delegateCdbId?: InputMaybe<Scalars['Int']['input']>;
  emdCompanyId?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  nameInNativeLanguage?: InputMaybe<Scalars['String']['input']>;
  officeNumber?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  primaryEmail?: InputMaybe<Scalars['String']['input']>;
  primaryMobileNumber?: InputMaybe<Scalars['String']['input']>;
  representatives?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ContactType>;
};

export type CorpActivitySlot = {
  __typename?: 'CorpActivitySlot';
  accountCapacity: Scalars['Int']['output'];
  activitySlot: ActivitySlot;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  date: Scalars['String']['output'];
  delegateCapacity: Scalars['Int']['output'];
  forumCompany: ForumCompany;
  id: Scalars['ID']['output'];
  type: CorpActivitySlotType;
};

export enum CorpActivitySlotType {
  Group = 'GROUP',
  OneOnOne = 'ONE_ON_ONE',
  Presentation = 'PRESENTATION'
}

export type CorpActivitySlotUpdateInput = {
  accountCapacity?: InputMaybe<Scalars['Int']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  delegateCapacity?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  type?: InputMaybe<CorpActivitySlotType>;
};

export type CorpRequest = Request & {
  __typename?: 'CorpRequest';
  cancelAt?: Maybe<Scalars['DateTime']['output']>;
  cancelBy?: Maybe<CancelByType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  equityShareholderStatus?: Maybe<Scalars['Boolean']['output']>;
  familarity?: Maybe<FamilarityType>;
  forumCompany?: Maybe<ForumCompany>;
  forumDelegate: ForumDelegate;
  forumId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isCancelledByDelegate?: Maybe<Scalars['String']['output']>;
  isIgnored?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  requestedCorp: ForumCompany;
  type?: Maybe<RequestType>;
};

export type CorpRequestGroup = {
  __typename?: 'CorpRequestGroup';
  corpRequests: Array<CorpRequest>;
  id: Scalars['ID']['output'];
  priority?: Maybe<Scalars['Int']['output']>;
  requestedByCompany: ForumCompany;
  requestedCorp: ForumCompany;
  type?: Maybe<RequestType>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CoverageStock = {
  __typename?: 'CoverageStock';
  avgTurnUsd?: Maybe<Scalars['Float']['output']>;
  clsaId?: Maybe<Scalars['Int']['output']>;
  company: Company;
  id: Scalars['ID']['output'];
  market?: Maybe<Scalars['String']['output']>;
  marketCapUsd?: Maybe<Scalars['Float']['output']>;
  sector?: Maybe<Scalars['String']['output']>;
  stock?: Maybe<Scalars['String']['output']>;
  stockName?: Maybe<Scalars['String']['output']>;
  tickerBloomberg?: Maybe<Scalars['String']['output']>;
  tickerReuters?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export enum DelegateSubtype {
  Analyst = 'ANALYST',
  CaptialPartners = 'CAPTIAL_PARTNERS',
  Citics = 'CITICS',
  Clsa = 'CLSA',
  CompaniesAndReports = 'COMPANIES_AND_REPORTS',
  Corporate = 'CORPORATE',
  CsbHnw = 'CSB_HNW',
  Eqd = 'EQD',
  EventCoordinator = 'EVENT_COORDINATOR',
  FixedIncome = 'FIXED_INCOME',
  Ibk = 'IBK',
  Investor = 'INVESTOR',
  KeynoteSpeaker = 'KEYNOTE_SPEAKER',
  Observer = 'OBSERVER',
  Other = 'OTHER',
  Shepherd = 'SHEPHERD',
  Speaker = 'SPEAKER',
  SpecialistSpeaker = 'SPECIALIST_SPEAKER',
  Translator = 'TRANSLATOR'
}

export type DeviceToken = {
  __typename?: 'DeviceToken';
  contactId?: Maybe<Scalars['String']['output']>;
  deviceName?: Maybe<Scalars['String']['output']>;
  deviceToken: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type DeviceTokenInput = {
  contactId: Scalars['ID']['input'];
  deviceName?: InputMaybe<Scalars['String']['input']>;
  deviceToken?: InputMaybe<Scalars['String']['input']>;
};

export type Email = {
  __typename?: 'Email';
  body?: Maybe<Scalars['String']['output']>;
  forumId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  includeBcc?: Maybe<Scalars['Boolean']['output']>;
  includeCc?: Maybe<Scalars['Boolean']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
};

export type EmailCreateInput = {
  body: Scalars['String']['input'];
  forumId: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EmailUpdateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum FamilarityType {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type Feedback = {
  __typename?: 'Feedback';
  comments?: Maybe<Scalars['String']['output']>;
  forumActivity?: Maybe<ForumActivity>;
  forumActivityDelegate?: Maybe<ForumActivityDelegate>;
  forumDelegate: ForumDelegate;
  id?: Maybe<Scalars['ID']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
};

export type FeedbackCreateOrUpdateInput = {
  comments?: InputMaybe<Scalars['String']['input']>;
  feedbackActivityDelegateId?: InputMaybe<Scalars['ID']['input']>;
  feedbackActivityId?: InputMaybe<Scalars['ID']['input']>;
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type Filters = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  ilikes?: InputMaybe<Array<InputMaybe<KeywordListFilter>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orWhere?: InputMaybe<Array<InputMaybe<KeywordListFilter>>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderByFilter>>>;
  where?: InputMaybe<Array<InputMaybe<KeywordListFilter>>>;
};

export type Follower = {
  __typename?: 'Follower';
  followerId?: Maybe<Scalars['Int']['output']>;
  followingId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
};

export type FollowerInput = {
  followerId?: InputMaybe<Scalars['Int']['input']>;
  followingId?: InputMaybe<Scalars['Int']['input']>;
};

export type ForumActivity = {
  __typename?: 'ForumActivity';
  cancelAt?: Maybe<Scalars['String']['output']>;
  cancelBy?: Maybe<CancelByType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  capacity?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  durationInHhMm?: Maybe<Scalars['String']['output']>;
  endTimeInHhMm?: Maybe<Scalars['String']['output']>;
  feedbacks?: Maybe<Array<Maybe<Feedback>>>;
  forumActivityCompanies: Array<ForumActivityCompany>;
  forumActivityDelegates: Array<ForumActivityDelegate>;
  forumActivityDescriptions: Array<ForumActivityDescription>;
  forumCompanies: Array<ForumCompany>;
  forumConfRoomId?: Maybe<Scalars['ID']['output']>;
  forumDelegateRating?: Maybe<Array<Maybe<ForumDelegateRating>>>;
  forumDelegates: Array<ForumDelegate>;
  forumFiles?: Maybe<Array<Maybe<ForumFile>>>;
  forumId?: Maybe<Scalars['String']['output']>;
  forumRoom?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  megaType: ActivityMegaType;
  publishState?: Maybe<Scalars['String']['output']>;
  room?: Maybe<ForumRoom>;
  soaSeatTaken?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtype?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  timeslot?: Maybe<Scalars['Int']['output']>;
  timeslotInHhMm?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: ActivityType;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  updatedBy?: Maybe<Contact>;
  zoomUrls?: Maybe<Array<Maybe<ZoomUrl>>>;
};


export type ForumActivityFeedbacksArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
};


export type ForumActivityForumActivityDelegatesArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleType>>>;
};


export type ForumActivityForumActivityDescriptionsArgs = {
  companyId?: InputMaybe<Scalars['ID']['input']>;
};


export type ForumActivityForumDelegatesArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  onlyAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleType>>>;
  subtype?: InputMaybe<DelegateSubtype>;
};


export type ForumActivityZoomUrlsArgs = {
  forumDelegateIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ForumActivityCompany = {
  __typename?: 'ForumActivityCompany';
  forumActivity: ForumActivity;
  forumCompany: ForumCompany;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ForumActivityDelegate = {
  __typename?: 'ForumActivityDelegate';
  attendanceConfirmed?: Maybe<Scalars['Boolean']['output']>;
  cancelAt?: Maybe<Scalars['DateTime']['output']>;
  cancelBy?: Maybe<CancelByType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  feedbacks?: Maybe<Array<Maybe<Feedback>>>;
  forumActivity: ForumActivity;
  forumDelegate: ForumDelegate;
  id?: Maybe<Scalars['ID']['output']>;
  isOptional?: Maybe<Scalars['Boolean']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  role: RoleType;
  zoomUrl?: Maybe<ZoomUrl>;
};


export type ForumActivityDelegateFeedbacksArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
};

export type ForumActivityDescription = {
  __typename?: 'ForumActivityDescription';
  currentAuditVersion?: Maybe<AuditForumActivityDescription>;
  desc?: Maybe<Scalars['String']['output']>;
  descState?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['Json']['output']>;
  showToAllStaff?: Maybe<Scalars['Boolean']['output']>;
  showToAudience?: Maybe<Scalars['Boolean']['output']>;
  showToPresenter?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  updatedBy?: Maybe<Contact>;
};

export type ForumActivityDescriptionInput = {
  currentAuditVersionId?: InputMaybe<Scalars['ID']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  descState?: InputMaybe<Scalars['String']['input']>;
  forumActivityId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  showToAllStaff?: InputMaybe<Scalars['Boolean']['input']>;
  showToAudience?: InputMaybe<Scalars['Boolean']['input']>;
  showToPresenter?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ForumCompany = {
  __typename?: 'ForumCompany';
  acceptStatus?: Maybe<AcceptStatusType>;
  /** Inv only Requested vs Scheduled by Group/OneOnOne */
  actualHitrate?: Maybe<Array<Maybe<Hitrate>>>;
  allowMeetingRequests?: Maybe<Scalars['Boolean']['output']>;
  availableTo?: Maybe<Array<Maybe<AvailableToType>>>;
  blockSchedule?: Maybe<Scalars['Boolean']['output']>;
  clientRank?: Maybe<Scalars['Int']['output']>;
  company: Company;
  corpActivitySlots: Array<CorpActivitySlot>;
  encryptedForumCompanyId?: Maybe<Scalars['String']['output']>;
  forumActivities: Array<ForumActivity>;
  forumCompaniesComputed?: Maybe<Array<Maybe<ForumCompanyComputed>>>;
  forumCompanyDetails?: Maybe<ForumCompanyDetails>;
  forumDelegates: Array<ForumDelegate>;
  forumId: Scalars['String']['output'];
  forumInfo: ForumInfo;
  id: Scalars['ID']['output'];
  privateDesc?: Maybe<Scalars['String']['output']>;
  publicDesc?: Maybe<Scalars['String']['output']>;
  publishedInfo: Array<PublishedInfo>;
  representative?: Maybe<Scalars['String']['output']>;
  representativeEmail?: Maybe<Scalars['String']['output']>;
  /** Corp only: How many client delegates requested a meeting with this Corporate */
  requested: Scalars['Int']['output'];
  requestedBy: Array<CorpRequest>;
  /** Corp only: How many client delegates have a meeting scheduled with this Corporate */
  scheduled: Scalars['Int']['output'];
  showOnWebsite?: Maybe<Scalars['Boolean']['output']>;
  specialRequests?: Maybe<Scalars['String']['output']>;
  subtype?: Maybe<CompanySubtype>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Inv only (not implemented yet) */
  targetHitrate?: Maybe<Array<Maybe<Hitrate>>>;
  tier?: Maybe<Scalars['String']['output']>;
};


export type ForumCompanyForumActivitiesArgs = {
  forumCompanyId?: InputMaybe<Scalars['ID']['input']>;
  showOnly?: InputMaybe<ShowOnlyType>;
};


export type ForumCompanyForumDelegatesArgs = {
  onlyAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  onlyWithForumActivities?: InputMaybe<Scalars['Boolean']['input']>;
  subtype?: InputMaybe<DelegateSubtype>;
};

export type ForumCompanyComputed = {
  __typename?: 'ForumCompanyComputed';
  availableTo?: Maybe<Array<Maybe<AvailableToType>>>;
  forumCompanyId: Scalars['ID']['output'];
};

export type ForumCompanyCreateInput = {
  blockSchedule?: InputMaybe<Scalars['Boolean']['input']>;
  clientRank?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['ID']['input']>;
  forumCompanyDetails?: InputMaybe<ForumCompanyDetailsInput>;
  forumId?: InputMaybe<Scalars['String']['input']>;
  privateDesc?: InputMaybe<Scalars['String']['input']>;
  publicDesc?: InputMaybe<Scalars['String']['input']>;
  representative?: InputMaybe<Scalars['String']['input']>;
  representativeEmail?: InputMaybe<Scalars['String']['input']>;
  specialRequests?: InputMaybe<Scalars['String']['input']>;
  subtype?: InputMaybe<CompanySubtype>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tier?: InputMaybe<Scalars['String']['input']>;
};

export type ForumCompanyDetails = {
  __typename?: 'ForumCompanyDetails';
  hostGroup?: Maybe<Scalars['Boolean']['output']>;
  hostOneOnOne?: Maybe<Scalars['Boolean']['output']>;
  hostPresentation?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mediaActivity?: Maybe<Scalars['Boolean']['output']>;
  onsiteCancellationHandling?: Maybe<OnsiteCancellationHandling>;
};

export type ForumCompanyDetailsInput = {
  hostPresentation?: InputMaybe<Scalars['Boolean']['input']>;
  mediaActivity?: InputMaybe<Scalars['Boolean']['input']>;
  onsiteCancellationHandling?: InputMaybe<OnsiteCancellationHandling>;
};

export type ForumCompanyUpdateInput = {
  blockSchedule?: InputMaybe<Scalars['Boolean']['input']>;
  clientRank?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['ID']['input']>;
  forumCompanyDetails?: InputMaybe<ForumCompanyDetailsInput>;
  forumId?: InputMaybe<Scalars['String']['input']>;
  privateDesc?: InputMaybe<Scalars['String']['input']>;
  publicDesc?: InputMaybe<Scalars['String']['input']>;
  representative?: InputMaybe<Scalars['String']['input']>;
  representativeEmail?: InputMaybe<Scalars['String']['input']>;
  specialRequests?: InputMaybe<Scalars['String']['input']>;
  subtype?: InputMaybe<CompanySubtype>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tier?: InputMaybe<Scalars['String']['input']>;
};

export type ForumCreateActivityInput = {
  activityDelegates?: InputMaybe<Array<ActivityDelegateInput>>;
  date?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  forumActivityDescriptions?: InputMaybe<Array<ForumActivityDescriptionInput>>;
  forumConfRoomId?: InputMaybe<Scalars['ID']['input']>;
  forumId: Scalars['String']['input'];
  megaType: ActivityMegaType;
  publishState?: InputMaybe<Scalars['String']['input']>;
  subtype?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timeslot?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  type: ActivityType;
};

export type ForumDelegate = {
  __typename?: 'ForumDelegate';
  acceptStatus: AcceptStatusType;
  acceptingMedia?: Maybe<Scalars['Boolean']['output']>;
  activityRequests: Array<ActivityRequest>;
  agreeToCompliance?: Maybe<Scalars['Boolean']['output']>;
  auditForumDelegates?: Maybe<Array<Maybe<AuditForumDelegate>>>;
  availableTo?: Maybe<Array<Maybe<AvailableToType>>>;
  blockCompanySchedule?: Maybe<Scalars['Boolean']['output']>;
  checkedIn?: Maybe<Scalars['Boolean']['output']>;
  contact: Contact;
  corpRequests: Array<CorpRequest>;
  currentAuditVersion?: Maybe<AuditForumDelegate>;
  dietaryRequirementsComment?: Maybe<Scalars['String']['output']>;
  dietaryRequirementsVeg?: Maybe<Scalars['Boolean']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  emailOverride?: Maybe<Scalars['String']['output']>;
  feedback?: Maybe<Array<Maybe<Feedback>>>;
  forumActivities: Array<ForumActivity>;
  forumActivityDelegates: Array<ForumActivityDelegate>;
  forumCompany: ForumCompany;
  forumDelegateAvailabilities?: Maybe<Array<Maybe<ForumDelegateAvailability>>>;
  forumDelegateDetails?: Maybe<ForumDelegateDetails>;
  forumId: Scalars['String']['output'];
  forumInfo?: Maybe<ForumInfo>;
  forumTourDelegates: Array<ForumTourDelegate>;
  havePresentationMaterials?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isAttendingEvents?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  laptop?: Maybe<Scalars['Boolean']['output']>;
  laptopModel?: Maybe<Scalars['String']['output']>;
  largeGroupPresentationHoster?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Scalars['Json']['output']>;
  needsTranslator?: Maybe<Scalars['Boolean']['output']>;
  noticeOfUseCollectionDisclosure?: Maybe<Scalars['Boolean']['output']>;
  personalMobileNumber?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  presentationEquipmentSpecialRequests?: Maybe<Scalars['String']['output']>;
  primaryModeOfContact?: Maybe<PrimaryModeOfContact>;
  privateDesc?: Maybe<Scalars['String']['output']>;
  provideAccessToMaterials?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToClsaWebsite?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToLargeGroupPresentation?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToMedia?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToSmallGroupOrOneOnOne?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToPublishingRecordingsToClsaWebsite?: Maybe<Scalars['Boolean']['output']>;
  publicDesc?: Maybe<Scalars['String']['output']>;
  publicDescState?: Maybe<Scalars['String']['output']>;
  publishState?: Maybe<Scalars['String']['output']>;
  publishedSchedule: Array<MyActivity>;
  rank?: Maybe<Scalars['Int']['output']>;
  representative?: Maybe<Scalars['String']['output']>;
  representativeEmail?: Maybe<Scalars['String']['output']>;
  rexForumDelegatePageState?: Maybe<Array<Maybe<RexForumDelegatePageState>>>;
  sendEmail?: Maybe<Scalars['Boolean']['output']>;
  sendOutlookInvite?: Maybe<Scalars['Boolean']['output']>;
  speakerRequests: Array<SpeakerRequest>;
  specialRequests?: Maybe<Scalars['String']['output']>;
  subtype?: Maybe<DelegateSubtype>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tourRequests: Array<TourRequest>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  updatedBy?: Maybe<Contact>;
  walkIn?: Maybe<Scalars['Boolean']['output']>;
  zoomUrls?: Maybe<Array<Maybe<ZoomUrl>>>;
};


export type ForumDelegateContactArgs = {
  types?: InputMaybe<Array<InputMaybe<ContactType>>>;
};


export type ForumDelegateForumActivitiesArgs = {
  forumCompanyId?: InputMaybe<Scalars['ID']['input']>;
  megaTypes?: InputMaybe<Array<InputMaybe<ActivityMegaType>>>;
  showOnly?: InputMaybe<ShowOnlyType>;
  types?: InputMaybe<Array<InputMaybe<ActivityType>>>;
};


export type ForumDelegateForumActivityDelegatesArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleType>>>;
};


export type ForumDelegateForumTourDelegatesArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleType>>>;
};


export type ForumDelegateZoomUrlsArgs = {
  forumActivitiesIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ForumDelegateAvailability = {
  __typename?: 'ForumDelegateAvailability';
  date: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  durationInHhMm?: Maybe<Scalars['String']['output']>;
  endTimeInHhMm?: Maybe<Scalars['String']['output']>;
  forumDelegate: ForumDelegate;
  id: Scalars['ID']['output'];
  timeslot: Scalars['Int']['output'];
  timeslotInHhMm?: Maybe<Scalars['String']['output']>;
};

export type ForumDelegateAvailabilityInput = {
  date: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  timeslot: Scalars['Int']['input'];
};

export type ForumDelegateCreateInput = {
  acceptStatus?: InputMaybe<AcceptStatusType>;
  acceptingMedia?: InputMaybe<Scalars['Boolean']['input']>;
  agreeToCompliance?: InputMaybe<Scalars['Boolean']['input']>;
  availableTo?: InputMaybe<Array<InputMaybe<AvailableToType>>>;
  blockCompanySchedule?: InputMaybe<Scalars['Boolean']['input']>;
  checkedIn?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  contactId: Scalars['ID']['input'];
  currentAuditVersionId?: InputMaybe<Scalars['ID']['input']>;
  dietaryRequirementsComment?: InputMaybe<Scalars['String']['input']>;
  dietaryRequirementsVeg?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  forumCompanyId: Scalars['ID']['input'];
  forumDelegateAvailabilities?: InputMaybe<Array<ForumDelegateAvailabilityInput>>;
  forumDelegateDetails?: InputMaybe<ForumDelegateDetailsInput>;
  forumId?: InputMaybe<Scalars['String']['input']>;
  havePresentationMaterials?: InputMaybe<Scalars['Boolean']['input']>;
  isAttendingEvents?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  laptop?: InputMaybe<Scalars['Boolean']['input']>;
  laptopModel?: InputMaybe<Scalars['String']['input']>;
  largeGroupPresentationHoster?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  needsTranslator?: InputMaybe<Scalars['Boolean']['input']>;
  noticeOfUseCollectionDisclosure?: InputMaybe<Scalars['Boolean']['input']>;
  personalMobileNumber?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  presentationEquipmentSpecialRequests?: InputMaybe<Scalars['String']['input']>;
  primaryModeOfContact?: InputMaybe<PrimaryModeOfContact>;
  privateDesc?: InputMaybe<Scalars['String']['input']>;
  provideAccessToMaterials?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToClsaWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToLargeGroupPresentation?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToMedia?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToSmallGroupOrOneOnOne?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToPublishingRecordingsToClsaWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  publicDesc?: InputMaybe<Scalars['String']['input']>;
  publicDescState?: InputMaybe<Scalars['String']['input']>;
  publishState?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  representative?: InputMaybe<Scalars['String']['input']>;
  representativeEmail?: InputMaybe<Scalars['String']['input']>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  sendOutlookInvite?: InputMaybe<Scalars['Boolean']['input']>;
  specialRequests?: InputMaybe<Scalars['String']['input']>;
  subtype?: InputMaybe<DelegateSubtype>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  walkIn?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ForumDelegateDetails = {
  __typename?: 'ForumDelegateDetails';
  accessLevel?: Maybe<AccessLevel>;
  analystCoverage?: Maybe<Scalars['String']['output']>;
  companyOverride?: Maybe<Scalars['String']['output']>;
  encryptedId?: Maybe<Scalars['String']['output']>;
  excludeForOma?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invitedBy?: Maybe<Scalars['String']['output']>;
  ipiStatus?: Maybe<Scalars['String']['output']>;
  isIpi?: Maybe<Scalars['Boolean']['output']>;
};

export type ForumDelegateDetailsInput = {
  accessLevel?: InputMaybe<AccessLevel>;
  companyOverride?: InputMaybe<Scalars['String']['input']>;
  isIpi?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ForumDelegateRating = {
  __typename?: 'ForumDelegateRating';
  comment?: Maybe<Scalars['String']['output']>;
  forumActivity: ForumActivity;
  forumDelegate: ForumDelegate;
  id?: Maybe<Scalars['ID']['output']>;
  rating?: Maybe<Scalars['Decimal']['output']>;
};

export type ForumDelegateRatingCreateOrUpdateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  forumActivityId?: InputMaybe<Scalars['ID']['input']>;
  rating?: InputMaybe<Scalars['Decimal']['input']>;
};

export type ForumDelegateUpdateInput = {
  acceptStatus?: InputMaybe<AcceptStatusType>;
  acceptingMedia?: InputMaybe<Scalars['Boolean']['input']>;
  agreeToCompliance?: InputMaybe<Scalars['Boolean']['input']>;
  availableTo?: InputMaybe<Array<InputMaybe<AvailableToType>>>;
  blockCompanySchedule?: InputMaybe<Scalars['Boolean']['input']>;
  checkedIn?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  contactId?: InputMaybe<Scalars['ID']['input']>;
  currentAuditVersionId?: InputMaybe<Scalars['ID']['input']>;
  dietaryRequirementsComment?: InputMaybe<Scalars['String']['input']>;
  dietaryRequirementsVeg?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  forumCompanyId?: InputMaybe<Scalars['ID']['input']>;
  forumDelegateAvailabilities?: InputMaybe<Array<ForumDelegateAvailabilityInput>>;
  forumDelegateDetails?: InputMaybe<ForumDelegateDetailsInput>;
  forumId?: InputMaybe<Scalars['String']['input']>;
  havePresentationMaterials?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  isAttendingEvents?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  laptop?: InputMaybe<Scalars['Boolean']['input']>;
  laptopModel?: InputMaybe<Scalars['String']['input']>;
  largeGroupPresentationHoster?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  needsTranslator?: InputMaybe<Scalars['Boolean']['input']>;
  noticeOfUseCollectionDisclosure?: InputMaybe<Scalars['Boolean']['input']>;
  personalMobileNumber?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  presentationEquipmentSpecialRequests?: InputMaybe<Scalars['String']['input']>;
  primaryModeOfContact?: InputMaybe<PrimaryModeOfContact>;
  privateDesc?: InputMaybe<Scalars['String']['input']>;
  provideAccessToMaterials?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToClsaWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToLargeGroupPresentation?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToMedia?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToSmallGroupOrOneOnOne?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToPublishingRecordingsToClsaWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  publicDesc?: InputMaybe<Scalars['String']['input']>;
  publicDescState?: InputMaybe<Scalars['String']['input']>;
  publishState?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  representative?: InputMaybe<Scalars['String']['input']>;
  representativeEmail?: InputMaybe<Scalars['String']['input']>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  sendOutlookInvite?: InputMaybe<Scalars['Boolean']['input']>;
  specialRequests?: InputMaybe<Scalars['String']['input']>;
  subtype?: InputMaybe<DelegateSubtype>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  walkIn?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ForumFile = {
  __typename?: 'ForumFile';
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ForumInfo = {
  __typename?: 'ForumInfo';
  dates: Array<Scalars['ID']['output']>;
  extendedDates: Array<Scalars['ID']['output']>;
  forumRexPageState?: Maybe<Array<Maybe<ForumRexPageState>>>;
  id?: Maybe<Scalars['String']['output']>;
  info?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  rexBannerImageUrl?: Maybe<Scalars['String']['output']>;
  rexMetadata?: Maybe<Scalars['Json']['output']>;
  rexRoute?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  venue?: Maybe<VenueInfo>;
};

export type ForumInfoCreateInput = {
  dates?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rexBannerImageUrl?: InputMaybe<Scalars['String']['input']>;
  rexMetadata?: InputMaybe<Scalars['Json']['input']>;
  rexRoute?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  venueId?: InputMaybe<Scalars['ID']['input']>;
};

export type ForumInfoUpdateInput = {
  dates?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rexBannerImageUrl?: InputMaybe<Scalars['String']['input']>;
  rexMetadata?: InputMaybe<Scalars['Json']['input']>;
  rexRoute?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  venueId?: InputMaybe<Scalars['ID']['input']>;
};

export type ForumInterest = {
  __typename?: 'ForumInterest';
  contactId?: Maybe<Scalars['Int']['output']>;
  forumId?: Maybe<Scalars['String']['output']>;
};

export type ForumInterestInput = {
  contactId: Scalars['ID']['input'];
  forumId?: InputMaybe<Scalars['String']['input']>;
};

export type ForumRexPageState = {
  __typename?: 'ForumRexPageState';
  description?: Maybe<Scalars['String']['output']>;
  forumInfo: ForumInfo;
  id?: Maybe<Scalars['ID']['output']>;
  rexPage: RexPage;
  rule?: Maybe<Scalars['String']['output']>;
  show?: Maybe<Scalars['Boolean']['output']>;
};

export type ForumRoom = {
  __typename?: 'ForumRoom';
  name?: Maybe<Scalars['String']['output']>;
  roomNumber?: Maybe<Scalars['String']['output']>;
};

export type ForumTour = {
  __typename?: 'ForumTour';
  cancelAt?: Maybe<Scalars['String']['output']>;
  cancelBy?: Maybe<CancelByType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  capacity: Scalars['Int']['output'];
  dates: Array<TourDate>;
  enableSignup?: Maybe<Scalars['Boolean']['output']>;
  forumDelegates: Array<ForumDelegate>;
  forumId?: Maybe<Scalars['String']['output']>;
  forumTourDelegates: Array<ForumTourDelegate>;
  id: Scalars['ID']['output'];
  itinerary: Array<TourItinerary>;
  privateDesc?: Maybe<Scalars['String']['output']>;
  publicDesc?: Maybe<Scalars['String']['output']>;
  seatTaken?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  updatedBy?: Maybe<Contact>;
};


export type ForumTourForumDelegatesArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  onlyAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleType>>>;
  subtype?: InputMaybe<DelegateSubtype>;
};


export type ForumTourForumTourDelegatesArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleType>>>;
};

export type ForumTourDelegate = {
  __typename?: 'ForumTourDelegate';
  attendanceConfirmed?: Maybe<Scalars['Boolean']['output']>;
  cancelAt?: Maybe<Scalars['DateTime']['output']>;
  cancelBy?: Maybe<CancelByType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  forumDelegate: ForumDelegate;
  forumTour: ForumTour;
  id?: Maybe<Scalars['ID']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  role: RoleType;
};

export type ForumUpdateActivityInput = {
  activityDelegates?: InputMaybe<Array<ActivityDelegateInput>>;
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<Scalars['String']['input']>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  forumActivityDescriptions?: InputMaybe<Array<ForumActivityDescriptionInput>>;
  forumConfRoomId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  publishState?: InputMaybe<Scalars['String']['input']>;
  subtype?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timeslot?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ActivityType>;
};

export type Hitrate = {
  __typename?: 'Hitrate';
  canceled?: Maybe<Scalars['Int']['output']>;
  /** FIXME: make this field Enum */
  hitrateType?: Maybe<Scalars['String']['output']>;
  requested?: Maybe<Scalars['Int']['output']>;
  scheduled?: Maybe<Scalars['Int']['output']>;
};

export type InventoryItem = {
  __typename?: 'InventoryItem';
  country?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  fundType?: Maybe<Scalars['String']['output']>;
  interpreter?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  slotId?: Maybe<Scalars['ID']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum ItineraryItemType {
  Assemble = 'ASSEMBLE',
  Corp = 'CORP',
  Factory = 'FACTORY',
  Flight = 'FLIGHT',
  Hotel = 'HOTEL',
  Meal = 'MEAL',
  Train = 'TRAIN'
}

export type KeywordListFilter = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type LinkHit = {
  __typename?: 'LinkHit';
  action?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  forumActivityId?: Maybe<Scalars['ID']['output']>;
  forumDelegateId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  link: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type LinkHitCreateInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  forumActivityId?: InputMaybe<Scalars['ID']['input']>;
  forumDelegateId: Scalars['ID']['input'];
  link: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Location = {
  __typename?: 'Location';
  code: Scalars['String']['output'];
  contacts?: Maybe<Array<Maybe<Contact>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  venues?: Maybe<Array<Maybe<VenueInfo>>>;
};

export type LocationCreateInput = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type LocationUpdateInput = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type MyActivity = {
  __typename?: 'MyActivity';
  cancelAt?: Maybe<Scalars['String']['output']>;
  cancelBy?: Maybe<CancelByType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  durationInHhMm?: Maybe<Scalars['String']['output']>;
  endTimeInHhMm?: Maybe<Scalars['String']['output']>;
  forumActivityDelegates: Array<ForumActivityDelegate>;
  forumActivityDescriptions: Array<ForumActivityDescription>;
  forumConfRoomId?: Maybe<Scalars['ID']['output']>;
  forumRoom?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  megaType: ActivityMegaType;
  room?: Maybe<ForumRoom>;
  subtype?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  timeslot?: Maybe<Scalars['Int']['output']>;
  timeslotInHhMm?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: ActivityType;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  zoomUrls?: Maybe<Array<Maybe<ZoomUrl>>>;
};


export type MyActivityZoomUrlsArgs = {
  forumDelegateIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Notification = {
  __typename?: 'Notification';
  body?: Maybe<Scalars['String']['output']>;
  contactId: Scalars['ID']['output'];
  deviceTokens?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  firebaseResponse?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  params?: Maybe<Scalars['Json']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type NotificationInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  contactId: Scalars['ID']['input'];
  deviceTokens?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Scalars['Json']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationUpdateInput = {
  firebaseResponse?: InputMaybe<Scalars['Json']['input']>;
  id: Scalars['ID']['input'];
};

export enum OnsiteCancellationHandling {
  CheckBeforeReschedule = 'CHECK_BEFORE_RESCHEDULE',
  NoReschedule = 'NO_RESCHEDULE',
  RescheduleImmediately = 'RESCHEDULE_IMMEDIATELY'
}

export type OrderByFilter = {
  name: Scalars['String']['input'];
  sortNumber?: Scalars['Int']['input'];
  sortOrder?: SortOrder;
};

export enum PrimaryModeOfContact {
  MyselfAndMyAssistant = 'MYSELF_AND_MY_ASSISTANT',
  MyselfOnly = 'MYSELF_ONLY',
  MyAssistantOnly = 'MY_ASSISTANT_ONLY'
}

export type PublishedInfo = {
  __typename?: 'PublishedInfo';
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedBy?: Maybe<ForumDelegate>;
};

export type Request = {
  cancelAt?: Maybe<Scalars['DateTime']['output']>;
  cancelBy?: Maybe<CancelByType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  forumDelegate: ForumDelegate;
  forumId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isIgnored?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<RequestType>;
};

export enum RequestType {
  Group = 'GROUP',
  One = 'ONE',
  OneOrGroup = 'ONE_OR_GROUP',
  Presentation = 'PRESENTATION'
}

export type Result = {
  __typename?: 'Result';
  result?: Maybe<Scalars['String']['output']>;
};

export type RexClientActivityRequestCreateInput = {
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<CancelByType>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  forumId: Scalars['ID']['input'];
  isIgnored?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  requestedActivityId: Scalars['ID']['input'];
  type?: InputMaybe<RequestType>;
};

export type RexClientCorpRequestCreateInput = {
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<CancelByType>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  equityShareholderStatus?: InputMaybe<Scalars['Boolean']['input']>;
  familarity?: InputMaybe<FamilarityType>;
  forumCompanyId: Scalars['ID']['input'];
  forumId: Scalars['ID']['input'];
  isCancelledByDelegate?: InputMaybe<Scalars['String']['input']>;
  isIgnored?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<RequestType>;
};

export type RexClientCorpRequestUpdateInput = {
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<CancelByType>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  equityShareholderStatus?: InputMaybe<Scalars['Boolean']['input']>;
  familarity?: InputMaybe<FamilarityType>;
  forumCompanyId: Scalars['ID']['input'];
  forumId: Scalars['ID']['input'];
  isCancelledByDelegate?: InputMaybe<Scalars['String']['input']>;
  isIgnored?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<RequestType>;
};

export type RexClientSpeakerRequestCreateInput = {
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<CancelByType>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  forumId: Scalars['ID']['input'];
  forumSpeakerId: Scalars['ID']['input'];
  isCancelledByDelegate?: InputMaybe<Scalars['String']['input']>;
  isIgnored?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<RequestType>;
};

export type RexClientSpeakerRequestUpdateInput = {
  cancelAt?: InputMaybe<Scalars['DateTime']['input']>;
  cancelBy?: InputMaybe<CancelByType>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  forumId?: InputMaybe<Scalars['ID']['input']>;
  forumSpeakerId?: InputMaybe<Scalars['ID']['input']>;
  isCancelledByDelegate?: InputMaybe<Scalars['String']['input']>;
  isIgnored?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<RequestType>;
};

export type RexCompanyUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyCdbId?: InputMaybe<Scalars['Int']['input']>;
  companyCisId?: InputMaybe<Scalars['Int']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameInNativeLanguage?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  sector?: InputMaybe<Scalars['String']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ticker?: InputMaybe<Scalars['String']['input']>;
  tier?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CompanyType>;
};

export type RexContactUpdateInput = {
  assistantEmail?: InputMaybe<Scalars['String']['input']>;
  assistantName?: InputMaybe<Scalars['String']['input']>;
  assistantPhone?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  nameInNativeLanguage?: InputMaybe<Scalars['String']['input']>;
  officeNumber?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  primaryEmail?: InputMaybe<Scalars['String']['input']>;
  primaryMobileNumber?: InputMaybe<Scalars['String']['input']>;
  representatives?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ContactType>;
};

export type RexForumCompanyUpdateInput = {
  acceptStatus?: InputMaybe<AcceptStatusType>;
  privateDesc?: InputMaybe<Scalars['String']['input']>;
  publicDesc?: InputMaybe<Scalars['String']['input']>;
  specialRequests?: InputMaybe<Scalars['String']['input']>;
  subtype?: InputMaybe<CompanySubtype>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tier?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type RexForumDelegate = {
  __typename?: 'RexForumDelegate';
  acceptStatus: AcceptStatusType;
  acceptingMedia?: Maybe<Scalars['Boolean']['output']>;
  activityRequests: Array<ActivityRequest>;
  agreeToCompliance?: Maybe<Scalars['Boolean']['output']>;
  auditForumDelegates?: Maybe<Array<Maybe<AuditForumDelegate>>>;
  availableTo?: Maybe<Array<Maybe<AvailableToType>>>;
  blockCompanySchedule?: Maybe<Scalars['Boolean']['output']>;
  checkedIn?: Maybe<Scalars['Boolean']['output']>;
  contact: Contact;
  corpRequests: Array<CorpRequest>;
  currentAuditVersion?: Maybe<Scalars['Int']['output']>;
  dietaryRequirementsComment?: Maybe<Scalars['String']['output']>;
  dietaryRequirementsVeg?: Maybe<Scalars['Boolean']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  feedback?: Maybe<Array<Maybe<Feedback>>>;
  forumActivities: Array<ForumActivity>;
  forumActivityDelegates: Array<ForumActivityDelegate>;
  forumCompany: ForumCompany;
  forumDelegateAvailabilities?: Maybe<Array<Maybe<ForumDelegateAvailability>>>;
  forumDelegateDetails?: Maybe<ForumDelegateDetails>;
  forumDelegateRating?: Maybe<Array<Maybe<ForumDelegateRating>>>;
  forumInfo: ForumInfo;
  forumTourDelegates: Array<ForumTourDelegate>;
  forumTours: Array<ForumTour>;
  havePresentationMaterials?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isAttendingEvents?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  laptop?: Maybe<Scalars['Boolean']['output']>;
  laptopModel?: Maybe<Scalars['String']['output']>;
  largeGroupPresentationHoster?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Scalars['Json']['output']>;
  needsTranslator?: Maybe<Scalars['Boolean']['output']>;
  noticeOfUseCollectionDisclosure?: Maybe<Scalars['Boolean']['output']>;
  personalMobileNumber?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  presentationEquipmentSpecialRequests?: Maybe<Scalars['String']['output']>;
  primaryModeOfContact?: Maybe<PrimaryModeOfContact>;
  privateDesc?: Maybe<Scalars['String']['output']>;
  provideAccessToMaterials?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToClsaWebsite?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToLargeGroupPresentation?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToMedia?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToMaterialsToSmallGroupOrOneOnOne?: Maybe<Scalars['Boolean']['output']>;
  provideAccessToPublishingRecordingsToClsaWebsite?: Maybe<Scalars['Boolean']['output']>;
  publicDesc?: Maybe<Scalars['String']['output']>;
  publicDescState?: Maybe<Scalars['String']['output']>;
  publishState?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  representative?: Maybe<Scalars['String']['output']>;
  representativeEmail?: Maybe<Scalars['String']['output']>;
  rexForumDelegatePageState?: Maybe<Array<Maybe<RexForumDelegatePageState>>>;
  sendOutlookInvite?: Maybe<Scalars['Boolean']['output']>;
  speakerRequests: Array<SpeakerRequest>;
  specialRequests?: Maybe<Scalars['String']['output']>;
  subtype?: Maybe<DelegateSubtype>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tourRequests: Array<TourRequest>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  updatedBy?: Maybe<Contact>;
  walkIn?: Maybe<Scalars['Boolean']['output']>;
};


export type RexForumDelegateForumActivitiesArgs = {
  forumCompanyId?: InputMaybe<Scalars['ID']['input']>;
  megaTypes?: InputMaybe<Array<InputMaybe<ActivityMegaType>>>;
  showOnly?: InputMaybe<ShowOnlyType>;
  types?: InputMaybe<Array<InputMaybe<ActivityType>>>;
};


export type RexForumDelegateForumActivityDelegatesArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleType>>>;
};


export type RexForumDelegateForumTourDelegatesArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleType>>>;
};

export type RexForumDelegateAvailabilityCreateInput = {
  date: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  timeslot: Scalars['Int']['input'];
};

export type RexForumDelegateDetailsUpdateInput = {
  ipiStatus?: InputMaybe<Scalars['String']['input']>;
  isIpi?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RexForumDelegatePageState = {
  __typename?: 'RexForumDelegatePageState';
  forumDelegate: ForumDelegate;
  id?: Maybe<Scalars['ID']['output']>;
  rexPage: RexPage;
  show?: Maybe<Scalars['Boolean']['output']>;
};

export type RexForumDelegateUpdateInput = {
  acceptStatus?: InputMaybe<AcceptStatusType>;
  acceptingMedia?: InputMaybe<Scalars['Boolean']['input']>;
  agreeToCompliance?: InputMaybe<Scalars['Boolean']['input']>;
  checkedIn?: InputMaybe<Scalars['Boolean']['input']>;
  dietaryRequirementsComment?: InputMaybe<Scalars['String']['input']>;
  dietaryRequirementsVeg?: InputMaybe<Scalars['Boolean']['input']>;
  havePresentationMaterials?: InputMaybe<Scalars['Boolean']['input']>;
  isAttendingEvents?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  laptop?: InputMaybe<Scalars['Boolean']['input']>;
  laptopModel?: InputMaybe<Scalars['String']['input']>;
  largeGroupPresentationHoster?: InputMaybe<Scalars['Boolean']['input']>;
  needsTranslator?: InputMaybe<Scalars['Boolean']['input']>;
  noticeOfUseCollectionDisclosure?: InputMaybe<Scalars['Boolean']['input']>;
  personalMobileNumber?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  presentationEquipmentSpecialRequests?: InputMaybe<Scalars['String']['input']>;
  primaryModeOfContact?: InputMaybe<Scalars['String']['input']>;
  privateDesc?: InputMaybe<Scalars['String']['input']>;
  provideAccessToMaterials?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToClsaWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToLargeGroupPresentation?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToMedia?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToMaterialsToSmallGroupOrOneOnOne?: InputMaybe<Scalars['Boolean']['input']>;
  provideAccessToPublishingRecordingsToClsaWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  publicDesc?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  representative?: InputMaybe<Scalars['String']['input']>;
  representativeEmail?: InputMaybe<Scalars['String']['input']>;
  specialRequests?: InputMaybe<Scalars['String']['input']>;
  subtype?: InputMaybe<DelegateSubtype>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  walkIn?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RexForumDelegatesAvailabilities = {
  __typename?: 'RexForumDelegatesAvailabilities';
  availability: Array<Timeslot>;
  date: Scalars['String']['output'];
};

export type RexMeetingsPageForumDelegateUpdateInput = {
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sendOutlookInvite?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RexPage = {
  __typename?: 'RexPage';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum RoleType {
  Attendee = 'ATTENDEE',
  Chaperone = 'CHAPERONE',
  ConsecutiveInterpreter = 'CONSECUTIVE_INTERPRETER',
  EventCoordinator = 'EVENT_COORDINATOR',
  Moderator = 'MODERATOR',
  ModeratorShepherd = 'MODERATOR_SHEPHERD',
  ModeratorWriteup = 'MODERATOR_WRITEUP',
  SelfBooked = 'SELF_BOOKED',
  Shepherd = 'SHEPHERD',
  SimultaneousInterpreter = 'SIMULTANEOUS_INTERPRETER',
  Speaker = 'SPEAKER',
  VirtualAttendee = 'VIRTUAL_ATTENDEE',
  Writeup = 'WRITEUP'
}

export type RootMutationType = {
  __typename?: 'RootMutationType';
  create?: Maybe<DeviceToken>;
  /** Create an ActivitySlot */
  createActivitySlot?: Maybe<ActivitySlot>;
  /** Create a ClientCorpRequest */
  createClientCorpRequest?: Maybe<CorpRequest>;
  /** Create a ClientSpeakerRequest */
  createClientSpeakerRequest?: Maybe<SpeakerRequest>;
  /** Create a Company */
  createCompany?: Maybe<Company>;
  /** Create a Contact */
  createContact?: Maybe<Contact>;
  /** Create Email */
  createEmail?: Maybe<Email>;
  /** Create a Forum */
  createForum?: Maybe<ForumInfo>;
  /** Create Forum Activity */
  createForumActivity?: Maybe<ForumActivity>;
  /** Create a ForumCompany */
  createForumCompany?: Maybe<ForumCompany>;
  /** Create a ForumDelegate */
  createForumDelegate?: Maybe<ForumDelegate>;
  /** Create a Forum Interest */
  createForumInterest?: Maybe<ForumInterest>;
  /** Create a LinkHit */
  createLinkHit?: Maybe<LinkHit>;
  /** Create a Location */
  createLocation?: Maybe<Location>;
  createNotification?: Maybe<Notification>;
  /** Create a Cms Component */
  createOrUpdateCmsComponent?: Maybe<CmsComponent>;
  /** Create or Update a Feedback */
  createOrUpdateFeedback?: Maybe<Feedback>;
  createOrUpdateFeedbacks?: Maybe<Array<Maybe<Feedback>>>;
  /** Create or Update forum_activity_description */
  createOrUpdateForumActivityDescription?: Maybe<ForumActivityDescription>;
  /** Create or Update a ForumDelegateRating */
  createOrUpdateForumDelegateRating?: Maybe<ForumDelegateRating>;
  /** Create a PreSigned Put/Get URL */
  createPresignedUrl?: Maybe<Scalars['String']['output']>;
  /** Create a Sector */
  createSector?: Maybe<Sector>;
  /** Create a VenueInfo */
  createVenue?: Maybe<VenueInfo>;
  deactivate?: Maybe<DeviceToken>;
  /** Delete an ActivitySlot */
  deleteActivitySlot?: Maybe<ActivitySlot>;
  /** Deletes ClientCorpRequests */
  deleteClientCorpRequests?: Maybe<Result>;
  /** Deletes ClientSpeakerRequests */
  deleteClientSpeakerRequests?: Maybe<Result>;
  /** Delete a Cms Component */
  deleteCmsComponent?: Maybe<CmsComponent>;
  /** Delete Forum Activity */
  deleteForumActivity?: Maybe<ForumActivity>;
  /** Delete forum_activity_delegate */
  deleteForumActivityDelegate?: Maybe<Result>;
  follow?: Maybe<Follower>;
  /** Create a Company */
  publishCompanySchedule?: Maybe<Scalars['String']['output']>;
  /** REX: cancel a meeting */
  rexCancelForumActivity?: Maybe<ForumActivity>;
  /** Create a ClientCorpRequest */
  rexCreateClientCorpRequest?: Maybe<CorpRequest>;
  /** Create a ClientSpeakerRequest */
  rexCreateClientSpeakerRequest?: Maybe<SpeakerRequest>;
  /** Create or Update Multiple ClientCorpRequests */
  rexCreateOrUpdateClientCorpRequests?: Maybe<Array<Maybe<CorpRequest>>>;
  /** Create or Update Multiple ClientSpeakerRequests */
  rexCreateOrUpdateClientSpeakerRequests?: Maybe<Array<Maybe<SpeakerRequest>>>;
  rexMeetingsPage?: Maybe<RexForumDelegate>;
  /** REX: Registration Form */
  rexRegistrationForm?: Maybe<RexForumDelegate>;
  /** REX: Meetings Page */
  rexSendMailForMeetingsPage?: Maybe<RexForumDelegate>;
  /** Update a ClientCorpRequest */
  rexUpdateClientCorpRequest?: Maybe<CorpRequest>;
  /** Update a ClientSpeakerRequest */
  rexUpdateClientSpeakerRequest?: Maybe<SpeakerRequest>;
  /** Self Booking for current_user to given forum_activity */
  selfBookingForActivity?: Maybe<ForumActivityDelegate>;
  /** Self Booking for current_user to given public soa forum_activity */
  selfBookingForPublicSoa?: Maybe<SignUpResult>;
  /** Self Booking for current_user to given forum_tour */
  selfBookingForTour?: Maybe<TourSignUpResult>;
  /** Self Cancel for current_user to given public soa forum_activity */
  selfCancelForPublicSoa?: Maybe<SignUpResult>;
  /** Self Cancel for current_user to given forum_tour */
  selfCancelForTour?: Maybe<TourSignUpResult>;
  /** Send Email */
  sendEmail?: Maybe<Email>;
  sendEmails?: Maybe<Email>;
  /** Update forum_activity_delegate for cpt status */
  setCptStatus?: Maybe<ForumActivityDelegate>;
  unfollow?: Maybe<Follower>;
  /** Update Activity Attendance - For Staff users */
  updateAttendance?: Maybe<ForumActivityDelegate>;
  /** Update a ClientCorpRequest */
  updateClientCorpRequest?: Maybe<CorpRequest>;
  /** Update a ClientSpeakerRequest */
  updateClientSpeakerRequest?: Maybe<SpeakerRequest>;
  /** Update a Company */
  updateCompany?: Maybe<Company>;
  /** Update a Contact */
  updateContact?: Maybe<Contact>;
  /** Update CorpActivitySlot */
  updateCorpActivitySlot?: Maybe<CorpActivitySlot>;
  /** Update Email */
  updateEmail?: Maybe<Email>;
  /** Update a Forum */
  updateForum?: Maybe<ForumInfo>;
  /** Update Forum Activity */
  updateForumActivity?: Maybe<ForumActivity>;
  /** Update a ForumCompany */
  updateForumCompany?: Maybe<ForumCompany>;
  /** Update a ForumDelegate */
  updateForumDelegate?: Maybe<ForumDelegate>;
  /** Update a Location */
  updateLocation?: Maybe<Location>;
  updateNotification?: Maybe<Notification>;
  /** Update Rating of a forum activity */
  updateRating?: Maybe<ForumActivityDelegate>;
  /** Update a Sector */
  updateSector?: Maybe<Sector>;
  /** Update a VenueInfo */
  updateVenueInfo?: Maybe<VenueInfo>;
};


export type RootMutationTypeCreateArgs = {
  input: DeviceTokenInput;
};


export type RootMutationTypeCreateActivitySlotArgs = {
  input: ActivitySlotCreateInput;
};


export type RootMutationTypeCreateClientCorpRequestArgs = {
  input: ClientCorpRequestCreateInput;
};


export type RootMutationTypeCreateClientSpeakerRequestArgs = {
  input: ClientSpeakerRequestCreateInput;
};


export type RootMutationTypeCreateCompanyArgs = {
  input: CompanyCreateInput;
};


export type RootMutationTypeCreateContactArgs = {
  input: ContactCreateInput;
};


export type RootMutationTypeCreateEmailArgs = {
  input: EmailCreateInput;
};


export type RootMutationTypeCreateForumArgs = {
  input: ForumInfoCreateInput;
};


export type RootMutationTypeCreateForumActivityArgs = {
  input: ForumCreateActivityInput;
};


export type RootMutationTypeCreateForumCompanyArgs = {
  input: ForumCompanyCreateInput;
};


export type RootMutationTypeCreateForumDelegateArgs = {
  input: ForumDelegateCreateInput;
};


export type RootMutationTypeCreateForumInterestArgs = {
  input: ForumInterestInput;
};


export type RootMutationTypeCreateLinkHitArgs = {
  input: LinkHitCreateInput;
};


export type RootMutationTypeCreateLocationArgs = {
  input: LocationCreateInput;
};


export type RootMutationTypeCreateNotificationArgs = {
  input: NotificationInput;
};


export type RootMutationTypeCreateOrUpdateCmsComponentArgs = {
  input: CmsComponentCreateInput;
};


export type RootMutationTypeCreateOrUpdateFeedbackArgs = {
  input: FeedbackCreateOrUpdateInput;
};


export type RootMutationTypeCreateOrUpdateFeedbacksArgs = {
  input?: InputMaybe<Array<InputMaybe<FeedbackCreateOrUpdateInput>>>;
};


export type RootMutationTypeCreateOrUpdateForumActivityDescriptionArgs = {
  input: ForumActivityDescriptionInput;
};


export type RootMutationTypeCreateOrUpdateForumDelegateRatingArgs = {
  forumId?: InputMaybe<Scalars['ID']['input']>;
  input: ForumDelegateRatingCreateOrUpdateInput;
};


export type RootMutationTypeCreatePresignedUrlArgs = {
  filePath: Scalars['String']['input'];
  method?: InputMaybe<Scalars['String']['input']>;
};


export type RootMutationTypeCreateSectorArgs = {
  input: SectorCreateInput;
};


export type RootMutationTypeCreateVenueArgs = {
  input: VenueInfoCreateInput;
};


export type RootMutationTypeDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type RootMutationTypeDeleteActivitySlotArgs = {
  id: Scalars['ID']['input'];
};


export type RootMutationTypeDeleteClientCorpRequestsArgs = {
  input?: InputMaybe<Array<InputMaybe<ClientCorpRequestDeleteInput>>>;
  listOfCorpRequestsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type RootMutationTypeDeleteClientSpeakerRequestsArgs = {
  input?: InputMaybe<Array<InputMaybe<ClientSpeakerRequestDeleteInput>>>;
  listOfSpeakerRequestsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type RootMutationTypeDeleteCmsComponentArgs = {
  code: Scalars['String']['input'];
  forumId: Scalars['String']['input'];
};


export type RootMutationTypeDeleteForumActivityArgs = {
  id: Scalars['ID']['input'];
};


export type RootMutationTypeDeleteForumActivityDelegateArgs = {
  forumActivityId: Scalars['ID']['input'];
  forumId: Scalars['ID']['input'];
};


export type RootMutationTypeFollowArgs = {
  input: FollowerInput;
};


export type RootMutationTypePublishCompanyScheduleArgs = {
  forumCompanyId: Scalars['ID']['input'];
};


export type RootMutationTypeRexCancelForumActivityArgs = {
  cancelReason: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type RootMutationTypeRexCreateClientCorpRequestArgs = {
  input: RexClientCorpRequestCreateInput;
};


export type RootMutationTypeRexCreateClientSpeakerRequestArgs = {
  input: RexClientSpeakerRequestCreateInput;
};


export type RootMutationTypeRexCreateOrUpdateClientCorpRequestsArgs = {
  input?: InputMaybe<Array<InputMaybe<RexClientCorpRequestCreateInput>>>;
};


export type RootMutationTypeRexCreateOrUpdateClientSpeakerRequestsArgs = {
  input?: InputMaybe<Array<InputMaybe<RexClientSpeakerRequestCreateInput>>>;
};


export type RootMutationTypeRexMeetingsPageArgs = {
  forumDelegateAvailabilitiesInput?: InputMaybe<Array<InputMaybe<RexForumDelegateAvailabilityCreateInput>>>;
  forumDelegateUpdateInput?: InputMaybe<RexMeetingsPageForumDelegateUpdateInput>;
  forumId: Scalars['String']['input'];
  listOfDeleteActivityRequestsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  listOfDeleteCorpRequestsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  listOfDeleteSpeakerRequestsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  rexClientActivityRequestsCreateOrUpdateInput?: InputMaybe<Array<InputMaybe<RexClientActivityRequestCreateInput>>>;
  rexClientCorpRequestsCreateOrUpdateInput?: InputMaybe<Array<InputMaybe<RexClientCorpRequestCreateInput>>>;
  rexClientSpeakerRequestsCreateOrUpdateInput?: InputMaybe<Array<InputMaybe<RexClientSpeakerRequestCreateInput>>>;
};


export type RootMutationTypeRexRegistrationFormArgs = {
  companyUpdateInput?: InputMaybe<RexCompanyUpdateInput>;
  contactUpdateInput?: InputMaybe<RexContactUpdateInput>;
  forumCompanyUpdateInput?: InputMaybe<RexForumCompanyUpdateInput>;
  forumDelegateAvailabilitiesInput?: InputMaybe<Array<InputMaybe<RexForumDelegateAvailabilityCreateInput>>>;
  forumDelegateDetailsUpdateInput?: InputMaybe<RexForumDelegateDetailsUpdateInput>;
  forumDelegateUpdateInput?: InputMaybe<RexForumDelegateUpdateInput>;
  forumId: Scalars['String']['input'];
  primaryEmail?: InputMaybe<Scalars['String']['input']>;
  sendMail?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RootMutationTypeRexSendMailForMeetingsPageArgs = {
  forumId: Scalars['String']['input'];
};


export type RootMutationTypeRexUpdateClientCorpRequestArgs = {
  id: Scalars['ID']['input'];
  input: RexClientCorpRequestUpdateInput;
};


export type RootMutationTypeRexUpdateClientSpeakerRequestArgs = {
  id: Scalars['ID']['input'];
  input: RexClientSpeakerRequestUpdateInput;
};


export type RootMutationTypeSelfBookingForActivityArgs = {
  forumId: Scalars['ID']['input'];
  input: ActivityDelegateSelfBookingInput;
};


export type RootMutationTypeSelfBookingForPublicSoaArgs = {
  forumId: Scalars['ID']['input'];
  input: ActivityDelegateSelfBookingInput;
};


export type RootMutationTypeSelfBookingForTourArgs = {
  forumId: Scalars['ID']['input'];
  input: TourDelegateSelfBookingInput;
};


export type RootMutationTypeSelfCancelForPublicSoaArgs = {
  forumActivityId: Scalars['ID']['input'];
  forumId: Scalars['ID']['input'];
};


export type RootMutationTypeSelfCancelForTourArgs = {
  forumId: Scalars['ID']['input'];
  forumTourId: Scalars['ID']['input'];
};


export type RootMutationTypeSendEmailArgs = {
  forumId: Scalars['String']['input'];
  input: SendEmailInput;
};


export type RootMutationTypeSendEmailsArgs = {
  acceptStatuses?: InputMaybe<Array<InputMaybe<AcceptStatusType>>>;
  contactTypes?: InputMaybe<Array<InputMaybe<ContactType>>>;
  input: SendEmailsInput;
  subtypes?: InputMaybe<Array<InputMaybe<DelegateSubtype>>>;
  tier?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RootMutationTypeSetCptStatusArgs = {
  forumActivityId: Scalars['ID']['input'];
  forumDelegateId: Scalars['ID']['input'];
};


export type RootMutationTypeUnfollowArgs = {
  input: FollowerInput;
};


export type RootMutationTypeUpdateAttendanceArgs = {
  attendanceConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  forumActivityId: Scalars['ID']['input'];
  forumDelegateId: Scalars['ID']['input'];
};


export type RootMutationTypeUpdateClientCorpRequestArgs = {
  id: Scalars['ID']['input'];
  input: ClientCorpRequestUpdateInput;
};


export type RootMutationTypeUpdateClientSpeakerRequestArgs = {
  id: Scalars['ID']['input'];
  input: ClientSpeakerRequestUpdateInput;
};


export type RootMutationTypeUpdateCompanyArgs = {
  id: Scalars['ID']['input'];
  input: CompanyUpdateInput;
};


export type RootMutationTypeUpdateContactArgs = {
  id: Scalars['ID']['input'];
  input: ContactUpdateInput;
};


export type RootMutationTypeUpdateCorpActivitySlotArgs = {
  input: CorpActivitySlotUpdateInput;
};


export type RootMutationTypeUpdateEmailArgs = {
  id: Scalars['ID']['input'];
  input: EmailUpdateInput;
};


export type RootMutationTypeUpdateForumArgs = {
  id: Scalars['ID']['input'];
  input: ForumInfoUpdateInput;
};


export type RootMutationTypeUpdateForumActivityArgs = {
  input: ForumUpdateActivityInput;
};


export type RootMutationTypeUpdateForumCompanyArgs = {
  id: Scalars['ID']['input'];
  input: ForumCompanyUpdateInput;
};


export type RootMutationTypeUpdateForumDelegateArgs = {
  id: Scalars['ID']['input'];
  input: ForumDelegateUpdateInput;
};


export type RootMutationTypeUpdateLocationArgs = {
  id: Scalars['ID']['input'];
  input: LocationUpdateInput;
};


export type RootMutationTypeUpdateNotificationArgs = {
  input: NotificationUpdateInput;
};


export type RootMutationTypeUpdateRatingArgs = {
  forumActivityId: Scalars['ID']['input'];
  forumId: Scalars['ID']['input'];
  input: ActivityDelegateUpdateInput;
};


export type RootMutationTypeUpdateSectorArgs = {
  id: Scalars['ID']['input'];
  input: SectorUpdateInput;
};


export type RootMutationTypeUpdateVenueInfoArgs = {
  id: Scalars['ID']['input'];
  input: VenueInfoUpdateInput;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  activitySlots: Array<ActivitySlot>;
  activitySubtypes: Array<ActivitySubtype>;
  auditCmsComponent?: Maybe<Array<Maybe<AuditCmsComponent>>>;
  auditCmsComponents?: Maybe<Array<Maybe<AuditCmsComponent>>>;
  auditForumActivityDescription?: Maybe<AuditForumActivityDescription>;
  auditForumActivityDescriptions?: Maybe<Array<Maybe<AuditForumActivityDescription>>>;
  auditForumDelegate?: Maybe<AuditForumDelegate>;
  auditForumDelegates?: Maybe<Array<Maybe<AuditForumDelegate>>>;
  cmsComponent?: Maybe<CmsComponent>;
  cmsComponents?: Maybe<Array<Maybe<CmsComponent>>>;
  companies: Array<Company>;
  company?: Maybe<Company>;
  contact?: Maybe<Contact>;
  contacts: Array<Contact>;
  corpActivitySlots?: Maybe<Array<Maybe<CorpActivitySlot>>>;
  corpRequestGroups: Array<CorpRequestGroup>;
  corpRequests: Array<CorpRequest>;
  /** delegate published schedule */
  delegateSchedule: Array<MyActivity>;
  deviceTokens?: Maybe<Array<Maybe<DeviceToken>>>;
  email?: Maybe<Email>;
  /** Get forum activities with optional filtering */
  forumActivities: Array<ForumActivity>;
  forumActivity?: Maybe<ForumActivity>;
  forumCompanies: Array<ForumCompany>;
  forumCompany?: Maybe<ForumCompany>;
  forumDelegate: ForumDelegate;
  forumDelegates: Array<ForumDelegate>;
  forumInfo?: Maybe<ForumInfo>;
  forumInfos?: Maybe<Array<Maybe<ForumInfo>>>;
  forumTour?: Maybe<ForumTour>;
  /** Get forum tours with optional filtering */
  forumTours: Array<ForumTour>;
  impersonatingUser?: Maybe<Contact>;
  /** List Email Templates */
  listEmailTemplates: Array<Email>;
  locations?: Maybe<Array<Maybe<Location>>>;
  /** my published schedule */
  mySchedule: Array<MyActivity>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  /** REX: available inventory */
  rexAvailableInventory?: Maybe<Array<Maybe<InventoryItem>>>;
  /** REX: rex_forum_delegate */
  rexForumDelegate?: Maybe<RexForumDelegate>;
  rexForumDelegatesAvailability: Array<RexForumDelegatesAvailabilities>;
  /** REX: waitlist of inventory item */
  rexSlotWaitlist?: Maybe<Array<Maybe<WaitlistItem>>>;
  sector?: Maybe<Sector>;
  sectors: Array<Sector>;
  speakerRequestGroups: Array<SpeakerRequestGroup>;
  speakerRequests: Array<SpeakerRequest>;
  tags: Array<Tag>;
  venues?: Maybe<Array<Maybe<VenueInfo>>>;
  whoami?: Maybe<Contact>;
};


export type RootQueryTypeActivitySlotsArgs = {
  forumId: Scalars['String']['input'];
};


export type RootQueryTypeAuditCmsComponentArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  forumId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeAuditCmsComponentsArgs = {
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filters?: InputMaybe<Filters>;
  forumId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RootQueryTypeAuditForumActivityDescriptionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeAuditForumActivityDescriptionsArgs = {
  forumActivityDescriptionId?: InputMaybe<Scalars['ID']['input']>;
  forumActivityId?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeAuditForumDelegateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeAuditForumDelegatesArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeCmsComponentArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  forumId?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeCmsComponentsArgs = {
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filters?: InputMaybe<Filters>;
  forumId?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RootQueryTypeCompaniesArgs = {
  filters?: InputMaybe<Filters>;
  notInvitedFor?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Array<InputMaybe<CompanyType>>>;
};


export type RootQueryTypeCompanyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeContactArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeContactsArgs = {
  filters?: InputMaybe<Filters>;
};


export type RootQueryTypeCorpActivitySlotsArgs = {
  forumId: Scalars['String']['input'];
};


export type RootQueryTypeCorpRequestGroupsArgs = {
  requestedByCompanyId?: InputMaybe<Scalars['ID']['input']>;
  requestedCorpId?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeCorpRequestsArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  requestedCorpId?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeDelegateScheduleArgs = {
  forumDelegateId: Scalars['ID']['input'];
};


export type RootQueryTypeDeviceTokensArgs = {
  contactId: Scalars['ID']['input'];
};


export type RootQueryTypeEmailArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeForumActivitiesArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
  forumId: Scalars['String']['input'];
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  megaType?: InputMaybe<ActivityMegaType>;
  showOnly?: InputMaybe<ShowOnlyType>;
  slot?: InputMaybe<Scalars['Int']['input']>;
  timeslot?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ActivityType>;
};


export type RootQueryTypeForumActivityArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryTypeForumCompaniesArgs = {
  acceptStatuses?: InputMaybe<Array<InputMaybe<AcceptStatusType>>>;
  companyTypes?: InputMaybe<Array<InputMaybe<CompanyType>>>;
  filters?: InputMaybe<Filters>;
  forumId: Scalars['String']['input'];
  onlyAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  onlyFetchForumCompaniesWithActivities?: InputMaybe<Scalars['Boolean']['input']>;
  subtype?: InputMaybe<CompanySubtype>;
  subtypes?: InputMaybe<Array<InputMaybe<CompanySubtype>>>;
  type?: InputMaybe<CompanyType>;
};


export type RootQueryTypeForumCompanyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeForumDelegateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeForumDelegatesArgs = {
  acceptStatuses?: InputMaybe<Array<InputMaybe<AcceptStatusType>>>;
  contactLocationCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactTypes?: InputMaybe<Array<InputMaybe<ContactType>>>;
  excludeForOma?: InputMaybe<Scalars['Boolean']['input']>;
  filters?: InputMaybe<Filters>;
  forumId: Scalars['String']['input'];
  onlyAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  onlyFetchForumDelegatesWithActivities?: InputMaybe<Scalars['Boolean']['input']>;
  onlySpeakers?: InputMaybe<Scalars['Boolean']['input']>;
  subtype?: InputMaybe<DelegateSubtype>;
  subtypes?: InputMaybe<Array<InputMaybe<DelegateSubtype>>>;
};


export type RootQueryTypeForumInfoArgs = {
  forumId: Scalars['String']['input'];
};


export type RootQueryTypeForumTourArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryTypeForumToursArgs = {
  forumId: Scalars['String']['input'];
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ActivityType>;
};


export type RootQueryTypeListEmailTemplatesArgs = {
  forumId: Scalars['String']['input'];
};


export type RootQueryTypeLocationsArgs = {
  contactTypes?: InputMaybe<Array<InputMaybe<ContactType>>>;
  filters?: InputMaybe<Filters>;
};


export type RootQueryTypeMyScheduleArgs = {
  forumId: Scalars['String']['input'];
};


export type RootQueryTypeNotificationsArgs = {
  contactId: Scalars['ID']['input'];
};


export type RootQueryTypeRexAvailableInventoryArgs = {
  forumId: Scalars['String']['input'];
};


export type RootQueryTypeRexForumDelegateArgs = {
  forumId: Scalars['String']['input'];
};


export type RootQueryTypeRexForumDelegatesAvailabilityArgs = {
  delegateIds: Array<Scalars['ID']['input']>;
};


export type RootQueryTypeRexSlotWaitlistArgs = {
  forumId: Scalars['String']['input'];
  slotId: Scalars['ID']['input'];
};


export type RootQueryTypeSectorArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeSpeakerRequestGroupsArgs = {
  forumSpeakerId?: InputMaybe<Scalars['ID']['input']>;
  requestedByCompanyId?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeSpeakerRequestsArgs = {
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  forumSpeakerId?: InputMaybe<Scalars['ID']['input']>;
};

export type Sector = {
  __typename?: 'Sector';
  analystCoverage?: Maybe<Array<Maybe<AnalystCoverage>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SectorCreateInput = {
  name: Scalars['String']['input'];
};

export type SectorUpdateInput = {
  name: Scalars['String']['input'];
};

export type SendEmailInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  includeBcc?: InputMaybe<Scalars['Boolean']['input']>;
  includeCc?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type SendEmailsInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  includeBcc?: InputMaybe<Scalars['String']['input']>;
  includeCc?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum ShowOnlyType {
  All = 'ALL',
  Canceled = 'CANCELED',
  Conflicts = 'CONFLICTS',
  Scheduled = 'SCHEDULED',
  Unroomed = 'UNROOMED',
  Unscheduled = 'UNSCHEDULED'
}

export type SignUpResult = {
  __typename?: 'SignUpResult';
  activityRequest?: Maybe<ActivityRequest>;
  forumActivity?: Maybe<ForumActivity>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SpeakerRequest = Request & {
  __typename?: 'SpeakerRequest';
  cancelAt?: Maybe<Scalars['DateTime']['output']>;
  cancelBy?: Maybe<CancelByType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  forumDelegate: ForumDelegate;
  forumId?: Maybe<Scalars['String']['output']>;
  forumSpeaker: ForumDelegate;
  id: Scalars['ID']['output'];
  isCancelledByDelegate?: Maybe<Scalars['String']['output']>;
  isIgnored?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<RequestType>;
};

export type SpeakerRequestGroup = {
  __typename?: 'SpeakerRequestGroup';
  forumSpeaker: ForumDelegate;
  id: Scalars['ID']['output'];
  priority?: Maybe<Scalars['Int']['output']>;
  requestedByCompany: ForumCompany;
  speakerRequests: Array<SpeakerRequest>;
  type?: Maybe<RequestType>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Tag = {
  __typename?: 'Tag';
  code: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  desc: Scalars['String']['output'];
};

export type Timeslot = {
  __typename?: 'Timeslot';
  duration: Scalars['Int']['output'];
  timeslot: Scalars['Int']['output'];
};

export type TourDate = {
  __typename?: 'TourDate';
  date: Scalars['String']['output'];
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type TourDelegateSelfBookingInput = {
  attendanceConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  forumDelegateId?: InputMaybe<Scalars['ID']['input']>;
  forumTourId?: InputMaybe<Scalars['ID']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  role?: InputMaybe<RoleType>;
};

export type TourItinerary = {
  __typename?: 'TourItinerary';
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']['output']>;
  date: Scalars['String']['output'];
  desc?: Maybe<Scalars['String']['output']>;
  displayTime?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  enableSignup?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  timeslot?: Maybe<Scalars['Int']['output']>;
  type: ItineraryItemType;
};

export type TourRequest = Request & {
  __typename?: 'TourRequest';
  cancelAt?: Maybe<Scalars['DateTime']['output']>;
  cancelBy?: Maybe<CancelByType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  forumDelegate: ForumDelegate;
  forumId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isIgnored?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  requestedTour?: Maybe<ForumTour>;
  type?: Maybe<RequestType>;
};

export type TourSignUpResult = {
  __typename?: 'TourSignUpResult';
  forumTour?: Maybe<ForumTour>;
  tourRequest?: Maybe<TourRequest>;
};

export type VenueInfo = {
  __typename?: 'VenueInfo';
  address?: Maybe<Scalars['String']['output']>;
  cancellationPolicy?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactPerson?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAccomodation?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  megaTypes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  membership?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  shuttleInfo?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type VenueInfoCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cancellationPolicy?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAccomodation?: InputMaybe<Scalars['Boolean']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  megaTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  membership?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shuttleInfo?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type VenueInfoUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cancellationPolicy?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAccomodation?: InputMaybe<Scalars['Boolean']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  megaTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  membership?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shuttleInfo?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type WaitlistItem = {
  __typename?: 'WaitlistItem';
  account?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['Int']['output']>;
  existingMeetingDate?: Maybe<Scalars['String']['output']>;
  existingMeetingTimeslot?: Maybe<Scalars['String']['output']>;
  existingMeetingTitle?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  requestType?: Maybe<Scalars['String']['output']>;
  tier?: Maybe<Scalars['String']['output']>;
};

export type ZoomUrl = {
  __typename?: 'ZoomUrl';
  forumActivity: ForumActivity;
  forumDelegate: ForumDelegate;
  id?: Maybe<Scalars['ID']['output']>;
  zoomUrl?: Maybe<Scalars['String']['output']>;
};

export type WhoamiQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoamiQuery = { __typename?: 'RootQueryType', whoami?: (
    { __typename: 'Contact' }
    & { ' $fragmentRefs'?: { 'CoreContactFieldsFragment': CoreContactFieldsFragment } }
  ) | null };

export type CoreContactFieldsFragment = { __typename?: 'Contact', contactCoverages?: Array<{ __typename: 'Contact', type: ContactType, title?: string | null, primaryEmail?: string | null, primaryMobileNumber?: string | null, salutation?: string | null, officeNumber?: string | null, nameInNativeLanguage?: string | null, fullName: string, id: string } | null> | null } & { ' $fragmentName'?: 'CoreContactFieldsFragment' };

export const CoreContactFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreContactFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Contact"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactCoverages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"primaryEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryMobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"salutation"}},{"kind":"Field","name":{"kind":"Name","value":"officeNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nameInNativeLanguage"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<CoreContactFieldsFragment, unknown>;
export const WhoamiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"whoami"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"whoami"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreContactFields"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreContactFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Contact"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactCoverages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"primaryEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryMobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"salutation"}},{"kind":"Field","name":{"kind":"Name","value":"officeNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nameInNativeLanguage"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<WhoamiQuery, WhoamiQueryVariables>;
