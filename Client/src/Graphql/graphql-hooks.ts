import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
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
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: "Aggregate";
  count: Scalars["Int"];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: "Asset";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars["String"];
  /** The file handle */
  handle: Scalars["String"];
  /** The height of the file */
  height?: Maybe<Scalars["Float"]>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  imageBurger: Array<Burger>;
  imageKebab: Array<Kebab>;
  imagePizza: Array<Pizza>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars["Float"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars["String"];
  /** The file width */
  width?: Maybe<Scalars["Float"]>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetImageBurgerArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<BurgerOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BurgerWhereInput>;
};

/** Asset system model */
export type AssetImageKebabArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<KebabOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<KebabWhereInput>;
};

/** Asset system model */
export type AssetImagePizzaArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PizzaOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PizzaWhereInput>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: "AssetConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: InputMaybe<Scalars["Float"]>;
  imageBurger?: InputMaybe<BurgerCreateManyInlineInput>;
  imageKebab?: InputMaybe<KebabCreateManyInlineInput>;
  imagePizza?: InputMaybe<PizzaCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: "AssetEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  imageBurger_every?: InputMaybe<BurgerWhereInput>;
  imageBurger_none?: InputMaybe<BurgerWhereInput>;
  imageBurger_some?: InputMaybe<BurgerWhereInput>;
  imageKebab_every?: InputMaybe<KebabWhereInput>;
  imageKebab_none?: InputMaybe<KebabWhereInput>;
  imageKebab_some?: InputMaybe<KebabWhereInput>;
  imagePizza_every?: InputMaybe<PizzaWhereInput>;
  imagePizza_none?: InputMaybe<PizzaWhereInput>;
  imagePizza_some?: InputMaybe<PizzaWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  imageBurger?: InputMaybe<BurgerUpdateManyInlineInput>;
  imageKebab?: InputMaybe<KebabUpdateManyInlineInput>;
  imagePizza?: InputMaybe<PizzaUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars["Float"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  imageBurger_every?: InputMaybe<BurgerWhereInput>;
  imageBurger_none?: InputMaybe<BurgerWhereInput>;
  imageBurger_some?: InputMaybe<BurgerWhereInput>;
  imageKebab_every?: InputMaybe<KebabWhereInput>;
  imageKebab_none?: InputMaybe<KebabWhereInput>;
  imageKebab_some?: InputMaybe<KebabWhereInput>;
  imagePizza_every?: InputMaybe<PizzaWhereInput>;
  imagePizza_none?: InputMaybe<PizzaWhereInput>;
  imagePizza_some?: InputMaybe<PizzaWhereInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars["Float"]>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars["Float"]>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type BatchPayload = {
  __typename?: "BatchPayload";
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars["Long"];
};

export type Burger = Node & {
  __typename?: "Burger";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Burger>;
  /** List of Burger versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  image?: Maybe<Asset>;
  ingredients: Array<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type BurgerCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type BurgerDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type BurgerHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type BurgerImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type BurgerPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type BurgerScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type BurgerUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type BurgerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BurgerWhereUniqueInput;
};

/** A connection to a list of items. */
export type BurgerConnection = {
  __typename?: "BurgerConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BurgerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BurgerCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type BurgerCreateManyInlineInput = {
  /** Connect multiple existing Burger documents */
  connect?: InputMaybe<Array<BurgerWhereUniqueInput>>;
  /** Create and connect multiple existing Burger documents */
  create?: InputMaybe<Array<BurgerCreateInput>>;
};

export type BurgerCreateOneInlineInput = {
  /** Connect one existing Burger document */
  connect?: InputMaybe<BurgerWhereUniqueInput>;
  /** Create and connect one Burger document */
  create?: InputMaybe<BurgerCreateInput>;
};

/** An edge in a connection. */
export type BurgerEdge = {
  __typename?: "BurgerEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Burger;
};

/** Identifies documents */
export type BurgerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BurgerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BurgerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BurgerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  ingredients_contains_all?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  ingredients_contains_none?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  ingredients_contains_some?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  ingredients_not?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<Scalars["Float"]>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BurgerOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IngredientsAsc = "ingredients_ASC",
  IngredientsDesc = "ingredients_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type BurgerUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
};

export type BurgerUpdateManyInlineInput = {
  /** Connect multiple existing Burger documents */
  connect?: InputMaybe<Array<BurgerConnectInput>>;
  /** Create and connect multiple Burger documents */
  create?: InputMaybe<Array<BurgerCreateInput>>;
  /** Delete multiple Burger documents */
  delete?: InputMaybe<Array<BurgerWhereUniqueInput>>;
  /** Disconnect multiple Burger documents */
  disconnect?: InputMaybe<Array<BurgerWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Burger documents */
  set?: InputMaybe<Array<BurgerWhereUniqueInput>>;
  /** Update multiple Burger documents */
  update?: InputMaybe<Array<BurgerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Burger documents */
  upsert?: InputMaybe<Array<BurgerUpsertWithNestedWhereUniqueInput>>;
};

export type BurgerUpdateManyInput = {
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
};

export type BurgerUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BurgerUpdateManyInput;
  /** Document search */
  where: BurgerWhereInput;
};

export type BurgerUpdateOneInlineInput = {
  /** Connect existing Burger document */
  connect?: InputMaybe<BurgerWhereUniqueInput>;
  /** Create and connect one Burger document */
  create?: InputMaybe<BurgerCreateInput>;
  /** Delete currently connected Burger document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Burger document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Burger document */
  update?: InputMaybe<BurgerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Burger document */
  upsert?: InputMaybe<BurgerUpsertWithNestedWhereUniqueInput>;
};

export type BurgerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BurgerUpdateInput;
  /** Unique document search */
  where: BurgerWhereUniqueInput;
};

export type BurgerUpsertInput = {
  /** Create document if it didn't exist */
  create: BurgerCreateInput;
  /** Update document if it exists */
  update: BurgerUpdateInput;
};

export type BurgerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BurgerUpsertInput;
  /** Unique document search */
  where: BurgerWhereUniqueInput;
};

/** Identifies documents */
export type BurgerWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BurgerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BurgerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BurgerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  ingredients_contains_all?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  ingredients_contains_none?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  ingredients_contains_some?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  ingredients_not?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<Scalars["Float"]>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Burger record uniquely */
export type BurgerWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: "Color";
  css: Scalars["String"];
  hex: Scalars["Hex"];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars["Hex"]>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars["ID"]>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars["ID"]>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars["Boolean"]>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars["Boolean"]>;
};

export enum Count {
  Four = "four",
  One = "one",
  Three = "three",
  Two = "two",
}

export enum DocumentFileTypes {
  Doc = "doc",
  Docx = "docx",
  Html = "html",
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Pdf = "pdf",
  Png = "png",
  Ppt = "ppt",
  Pptx = "pptx",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Xls = "xls",
  Xlsx = "xlsx",
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: "DocumentVersion";
  createdAt: Scalars["DateTime"];
  data?: Maybe<Scalars["Json"]>;
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = "scale",
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars["Int"]>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars["Int"]>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type Kebab = Node & {
  __typename?: "Kebab";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Kebab>;
  /** List of Kebab versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  image?: Maybe<Asset>;
  ingredients: Array<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type KebabCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type KebabDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type KebabHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type KebabImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type KebabPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type KebabScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type KebabUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type KebabConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: KebabWhereUniqueInput;
};

/** A connection to a list of items. */
export type KebabConnection = {
  __typename?: "KebabConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<KebabEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type KebabCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type KebabCreateManyInlineInput = {
  /** Connect multiple existing Kebab documents */
  connect?: InputMaybe<Array<KebabWhereUniqueInput>>;
  /** Create and connect multiple existing Kebab documents */
  create?: InputMaybe<Array<KebabCreateInput>>;
};

export type KebabCreateOneInlineInput = {
  /** Connect one existing Kebab document */
  connect?: InputMaybe<KebabWhereUniqueInput>;
  /** Create and connect one Kebab document */
  create?: InputMaybe<KebabCreateInput>;
};

/** An edge in a connection. */
export type KebabEdge = {
  __typename?: "KebabEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Kebab;
};

/** Identifies documents */
export type KebabManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<KebabWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<KebabWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<KebabWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  ingredients_contains_all?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  ingredients_contains_none?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  ingredients_contains_some?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  ingredients_not?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<Scalars["Float"]>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum KebabOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IngredientsAsc = "ingredients_ASC",
  IngredientsDesc = "ingredients_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type KebabUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
};

export type KebabUpdateManyInlineInput = {
  /** Connect multiple existing Kebab documents */
  connect?: InputMaybe<Array<KebabConnectInput>>;
  /** Create and connect multiple Kebab documents */
  create?: InputMaybe<Array<KebabCreateInput>>;
  /** Delete multiple Kebab documents */
  delete?: InputMaybe<Array<KebabWhereUniqueInput>>;
  /** Disconnect multiple Kebab documents */
  disconnect?: InputMaybe<Array<KebabWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Kebab documents */
  set?: InputMaybe<Array<KebabWhereUniqueInput>>;
  /** Update multiple Kebab documents */
  update?: InputMaybe<Array<KebabUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Kebab documents */
  upsert?: InputMaybe<Array<KebabUpsertWithNestedWhereUniqueInput>>;
};

export type KebabUpdateManyInput = {
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
};

export type KebabUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: KebabUpdateManyInput;
  /** Document search */
  where: KebabWhereInput;
};

export type KebabUpdateOneInlineInput = {
  /** Connect existing Kebab document */
  connect?: InputMaybe<KebabWhereUniqueInput>;
  /** Create and connect one Kebab document */
  create?: InputMaybe<KebabCreateInput>;
  /** Delete currently connected Kebab document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Kebab document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Kebab document */
  update?: InputMaybe<KebabUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Kebab document */
  upsert?: InputMaybe<KebabUpsertWithNestedWhereUniqueInput>;
};

export type KebabUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: KebabUpdateInput;
  /** Unique document search */
  where: KebabWhereUniqueInput;
};

export type KebabUpsertInput = {
  /** Create document if it didn't exist */
  create: KebabCreateInput;
  /** Update document if it exists */
  update: KebabUpdateInput;
};

export type KebabUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: KebabUpsertInput;
  /** Unique document search */
  where: KebabWhereUniqueInput;
};

/** Identifies documents */
export type KebabWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<KebabWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<KebabWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<KebabWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  ingredients_contains_all?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  ingredients_contains_none?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  ingredients_contains_some?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  ingredients_not?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<Scalars["Float"]>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Kebab record uniquely */
export type KebabWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = "en",
  Fr = "fr",
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: "Location";
  distance: Scalars["Float"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

export type Mutation = {
  __typename?: "Mutation";
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one burger */
  createBurger?: Maybe<Burger>;
  /** Create one kebab */
  createKebab?: Maybe<Kebab>;
  /** Create one pizza */
  createPizza?: Maybe<Pizza>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one burger from _all_ existing stages. Returns deleted document. */
  deleteBurger?: Maybe<Burger>;
  /** Delete one kebab from _all_ existing stages. Returns deleted document. */
  deleteKebab?: Maybe<Kebab>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Burger documents
   * @deprecated Please use the new paginated many mutation (deleteManyBurgersConnection)
   */
  deleteManyBurgers: BatchPayload;
  /** Delete many Burger documents, return deleted documents */
  deleteManyBurgersConnection: BurgerConnection;
  /**
   * Delete many Kebab documents
   * @deprecated Please use the new paginated many mutation (deleteManyKebabsConnection)
   */
  deleteManyKebabs: BatchPayload;
  /** Delete many Kebab documents, return deleted documents */
  deleteManyKebabsConnection: KebabConnection;
  /**
   * Delete many Pizza documents
   * @deprecated Please use the new paginated many mutation (deleteManyPizzasConnection)
   */
  deleteManyPizzas: BatchPayload;
  /** Delete many Pizza documents, return deleted documents */
  deleteManyPizzasConnection: PizzaConnection;
  /** Delete one pizza from _all_ existing stages. Returns deleted document. */
  deletePizza?: Maybe<Pizza>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one burger */
  publishBurger?: Maybe<Burger>;
  /** Publish one kebab */
  publishKebab?: Maybe<Kebab>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Burger documents
   * @deprecated Please use the new paginated many mutation (publishManyBurgersConnection)
   */
  publishManyBurgers: BatchPayload;
  /** Publish many Burger documents */
  publishManyBurgersConnection: BurgerConnection;
  /**
   * Publish many Kebab documents
   * @deprecated Please use the new paginated many mutation (publishManyKebabsConnection)
   */
  publishManyKebabs: BatchPayload;
  /** Publish many Kebab documents */
  publishManyKebabsConnection: KebabConnection;
  /**
   * Publish many Pizza documents
   * @deprecated Please use the new paginated many mutation (publishManyPizzasConnection)
   */
  publishManyPizzas: BatchPayload;
  /** Publish many Pizza documents */
  publishManyPizzasConnection: PizzaConnection;
  /** Publish one pizza */
  publishPizza?: Maybe<Pizza>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one burger */
  schedulePublishBurger?: Maybe<Burger>;
  /** Schedule to publish one kebab */
  schedulePublishKebab?: Maybe<Kebab>;
  /** Schedule to publish one pizza */
  schedulePublishPizza?: Maybe<Pizza>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one burger from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBurger?: Maybe<Burger>;
  /** Unpublish one kebab from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishKebab?: Maybe<Kebab>;
  /** Unpublish one pizza from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPizza?: Maybe<Pizza>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one burger from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBurger?: Maybe<Burger>;
  /** Unpublish one kebab from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishKebab?: Maybe<Kebab>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Burger documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBurgersConnection)
   */
  unpublishManyBurgers: BatchPayload;
  /** Find many Burger documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBurgersConnection: BurgerConnection;
  /**
   * Unpublish many Kebab documents
   * @deprecated Please use the new paginated many mutation (unpublishManyKebabsConnection)
   */
  unpublishManyKebabs: BatchPayload;
  /** Find many Kebab documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyKebabsConnection: KebabConnection;
  /**
   * Unpublish many Pizza documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPizzasConnection)
   */
  unpublishManyPizzas: BatchPayload;
  /** Find many Pizza documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPizzasConnection: PizzaConnection;
  /** Unpublish one pizza from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPizza?: Maybe<Pizza>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one burger */
  updateBurger?: Maybe<Burger>;
  /** Update one kebab */
  updateKebab?: Maybe<Kebab>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many burgers
   * @deprecated Please use the new paginated many mutation (updateManyBurgersConnection)
   */
  updateManyBurgers: BatchPayload;
  /** Update many Burger documents */
  updateManyBurgersConnection: BurgerConnection;
  /**
   * Update many kebabs
   * @deprecated Please use the new paginated many mutation (updateManyKebabsConnection)
   */
  updateManyKebabs: BatchPayload;
  /** Update many Kebab documents */
  updateManyKebabsConnection: KebabConnection;
  /**
   * Update many pizzas
   * @deprecated Please use the new paginated many mutation (updateManyPizzasConnection)
   */
  updateManyPizzas: BatchPayload;
  /** Update many Pizza documents */
  updateManyPizzasConnection: PizzaConnection;
  /** Update one pizza */
  updatePizza?: Maybe<Pizza>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one burger */
  upsertBurger?: Maybe<Burger>;
  /** Upsert one kebab */
  upsertKebab?: Maybe<Kebab>;
  /** Upsert one pizza */
  upsertPizza?: Maybe<Pizza>;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationCreateBurgerArgs = {
  data: BurgerCreateInput;
};

export type MutationCreateKebabArgs = {
  data: KebabCreateInput;
};

export type MutationCreatePizzaArgs = {
  data: PizzaCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteBurgerArgs = {
  where: BurgerWhereUniqueInput;
};

export type MutationDeleteKebabArgs = {
  where: KebabWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyBurgersArgs = {
  where?: InputMaybe<BurgerManyWhereInput>;
};

export type MutationDeleteManyBurgersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BurgerManyWhereInput>;
};

export type MutationDeleteManyKebabsArgs = {
  where?: InputMaybe<KebabManyWhereInput>;
};

export type MutationDeleteManyKebabsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<KebabManyWhereInput>;
};

export type MutationDeleteManyPizzasArgs = {
  where?: InputMaybe<PizzaManyWhereInput>;
};

export type MutationDeleteManyPizzasConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PizzaManyWhereInput>;
};

export type MutationDeletePizzaArgs = {
  where: PizzaWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishBurgerArgs = {
  to?: Array<Stage>;
  where: BurgerWhereUniqueInput;
};

export type MutationPublishKebabArgs = {
  to?: Array<Stage>;
  where: KebabWhereUniqueInput;
};

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyBurgersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<BurgerManyWhereInput>;
};

export type MutationPublishManyBurgersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<BurgerManyWhereInput>;
};

export type MutationPublishManyKebabsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<KebabManyWhereInput>;
};

export type MutationPublishManyKebabsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<KebabManyWhereInput>;
};

export type MutationPublishManyPizzasArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PizzaManyWhereInput>;
};

export type MutationPublishManyPizzasConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<PizzaManyWhereInput>;
};

export type MutationPublishPizzaArgs = {
  to?: Array<Stage>;
  where: PizzaWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishBurgerArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: BurgerWhereUniqueInput;
};

export type MutationSchedulePublishKebabArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: KebabWhereUniqueInput;
};

export type MutationSchedulePublishPizzaArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: PizzaWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishBurgerArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: BurgerWhereUniqueInput;
};

export type MutationScheduleUnpublishKebabArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: KebabWhereUniqueInput;
};

export type MutationScheduleUnpublishPizzaArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: PizzaWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: AssetWhereUniqueInput;
};

export type MutationUnpublishBurgerArgs = {
  from?: Array<Stage>;
  where: BurgerWhereUniqueInput;
};

export type MutationUnpublishKebabArgs = {
  from?: Array<Stage>;
  where: KebabWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyBurgersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<BurgerManyWhereInput>;
};

export type MutationUnpublishManyBurgersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<BurgerManyWhereInput>;
};

export type MutationUnpublishManyKebabsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<KebabManyWhereInput>;
};

export type MutationUnpublishManyKebabsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<KebabManyWhereInput>;
};

export type MutationUnpublishManyPizzasArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PizzaManyWhereInput>;
};

export type MutationUnpublishManyPizzasConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PizzaManyWhereInput>;
};

export type MutationUnpublishPizzaArgs = {
  from?: Array<Stage>;
  where: PizzaWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateBurgerArgs = {
  data: BurgerUpdateInput;
  where: BurgerWhereUniqueInput;
};

export type MutationUpdateKebabArgs = {
  data: KebabUpdateInput;
  where: KebabWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyBurgersArgs = {
  data: BurgerUpdateManyInput;
  where?: InputMaybe<BurgerManyWhereInput>;
};

export type MutationUpdateManyBurgersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: BurgerUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BurgerManyWhereInput>;
};

export type MutationUpdateManyKebabsArgs = {
  data: KebabUpdateManyInput;
  where?: InputMaybe<KebabManyWhereInput>;
};

export type MutationUpdateManyKebabsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: KebabUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<KebabManyWhereInput>;
};

export type MutationUpdateManyPizzasArgs = {
  data: PizzaUpdateManyInput;
  where?: InputMaybe<PizzaManyWhereInput>;
};

export type MutationUpdateManyPizzasConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: PizzaUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PizzaManyWhereInput>;
};

export type MutationUpdatePizzaArgs = {
  data: PizzaUpdateInput;
  where: PizzaWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpsertBurgerArgs = {
  upsert: BurgerUpsertInput;
  where: BurgerWhereUniqueInput;
};

export type MutationUpsertKebabArgs = {
  upsert: KebabUpsertInput;
  where: KebabWhereUniqueInput;
};

export type MutationUpsertPizzaArgs = {
  upsert: PizzaUpsertInput;
  where: PizzaWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars["Int"]>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type Pizza = Node & {
  __typename?: "Pizza";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Pizza>;
  /** List of Pizza versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  image?: Maybe<Asset>;
  ingredients: Array<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type PizzaCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PizzaDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type PizzaHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type PizzaImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PizzaPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PizzaScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type PizzaUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PizzaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PizzaWhereUniqueInput;
};

/** A connection to a list of items. */
export type PizzaConnection = {
  __typename?: "PizzaConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PizzaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PizzaCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PizzaCreateManyInlineInput = {
  /** Connect multiple existing Pizza documents */
  connect?: InputMaybe<Array<PizzaWhereUniqueInput>>;
  /** Create and connect multiple existing Pizza documents */
  create?: InputMaybe<Array<PizzaCreateInput>>;
};

export type PizzaCreateOneInlineInput = {
  /** Connect one existing Pizza document */
  connect?: InputMaybe<PizzaWhereUniqueInput>;
  /** Create and connect one Pizza document */
  create?: InputMaybe<PizzaCreateInput>;
};

/** An edge in a connection. */
export type PizzaEdge = {
  __typename?: "PizzaEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Pizza;
};

/** Identifies documents */
export type PizzaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PizzaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PizzaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PizzaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  ingredients_contains_all?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  ingredients_contains_none?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  ingredients_contains_some?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  ingredients_not?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<Scalars["Float"]>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PizzaOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IngredientsAsc = "ingredients_ASC",
  IngredientsDesc = "ingredients_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type PizzaUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
};

export type PizzaUpdateManyInlineInput = {
  /** Connect multiple existing Pizza documents */
  connect?: InputMaybe<Array<PizzaConnectInput>>;
  /** Create and connect multiple Pizza documents */
  create?: InputMaybe<Array<PizzaCreateInput>>;
  /** Delete multiple Pizza documents */
  delete?: InputMaybe<Array<PizzaWhereUniqueInput>>;
  /** Disconnect multiple Pizza documents */
  disconnect?: InputMaybe<Array<PizzaWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Pizza documents */
  set?: InputMaybe<Array<PizzaWhereUniqueInput>>;
  /** Update multiple Pizza documents */
  update?: InputMaybe<Array<PizzaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Pizza documents */
  upsert?: InputMaybe<Array<PizzaUpsertWithNestedWhereUniqueInput>>;
};

export type PizzaUpdateManyInput = {
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
};

export type PizzaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PizzaUpdateManyInput;
  /** Document search */
  where: PizzaWhereInput;
};

export type PizzaUpdateOneInlineInput = {
  /** Connect existing Pizza document */
  connect?: InputMaybe<PizzaWhereUniqueInput>;
  /** Create and connect one Pizza document */
  create?: InputMaybe<PizzaCreateInput>;
  /** Delete currently connected Pizza document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Pizza document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Pizza document */
  update?: InputMaybe<PizzaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Pizza document */
  upsert?: InputMaybe<PizzaUpsertWithNestedWhereUniqueInput>;
};

export type PizzaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PizzaUpdateInput;
  /** Unique document search */
  where: PizzaWhereUniqueInput;
};

export type PizzaUpsertInput = {
  /** Create document if it didn't exist */
  create: PizzaCreateInput;
  /** Update document if it exists */
  update: PizzaUpdateInput;
};

export type PizzaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PizzaUpsertInput;
  /** Unique document search */
  where: PizzaWhereUniqueInput;
};

/** Identifies documents */
export type PizzaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PizzaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PizzaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PizzaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  ingredients?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  ingredients_contains_all?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  ingredients_contains_none?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  ingredients_contains_some?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  ingredients_not?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<Scalars["Float"]>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Pizza record uniquely */
export type PizzaWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: "Query";
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single burger */
  burger?: Maybe<Burger>;
  /** Retrieve document version */
  burgerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple burgers */
  burgers: Array<Burger>;
  /** Retrieve multiple burgers using the Relay connection interface */
  burgersConnection: BurgerConnection;
  /** Retrieve a single kebab */
  kebab?: Maybe<Kebab>;
  /** Retrieve document version */
  kebabVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple kebabs */
  kebabs: Array<Kebab>;
  /** Retrieve multiple kebabs using the Relay connection interface */
  kebabsConnection: KebabConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single pizza */
  pizza?: Maybe<Pizza>;
  /** Retrieve document version */
  pizzaVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pizzas */
  pizzas: Array<Pizza>;
  /** Retrieve multiple pizzas using the Relay connection interface */
  pizzasConnection: PizzaConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};

export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryBurgerArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BurgerWhereUniqueInput;
};

export type QueryBurgerVersionArgs = {
  where: VersionWhereInput;
};

export type QueryBurgersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BurgerOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<BurgerWhereInput>;
};

export type QueryBurgersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BurgerOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<BurgerWhereInput>;
};

export type QueryKebabArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: KebabWhereUniqueInput;
};

export type QueryKebabVersionArgs = {
  where: VersionWhereInput;
};

export type QueryKebabsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<KebabOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<KebabWhereInput>;
};

export type QueryKebabsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<KebabOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<KebabWhereInput>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
  locales?: Array<Locale>;
  stage?: Stage;
};

export type QueryPizzaArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PizzaWhereUniqueInput;
};

export type QueryPizzaVersionArgs = {
  where: VersionWhereInput;
};

export type QueryPizzasArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PizzaOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<PizzaWhereInput>;
};

export type QueryPizzasConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PizzaOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<PizzaWhereInput>;
};

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: "RGBA";
  a: Scalars["RGBATransparency"];
  b: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  r: Scalars["RGBAHue"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars["RGBATransparency"];
  b: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  r: Scalars["RGBAHue"];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: "RichText";
  /** Returns HTMl representation */
  html: Scalars["String"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** Returns AST representation */
  raw: Scalars["RichTextAST"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: "ScheduledOperation";
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars["String"]>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars["Json"];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Burger | Kebab | Pizza;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: "ScheduledOperationConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: "ScheduledOperationEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = "CANCELED",
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: "ScheduledRelease";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars["String"]>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** Whether scheduled release should be run */
  isActive: Scalars["Boolean"];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars["Boolean"];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars["DateTime"]>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars["String"]>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: "ScheduledReleaseConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: "ScheduledReleaseEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  IsImplicitAsc = "isImplicit_ASC",
  IsImplicitDesc = "isImplicit_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  ReleaseAtAsc = "releaseAt_ASC",
  ReleaseAtDesc = "releaseAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  Published = "PUBLISHED",
}

export enum SystemDateTimeFieldVariation {
  Base = "BASE",
  Combined = "COMBINED",
  Localization = "LOCALIZATION",
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: "User";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** Flag to determine if user is active or not */
  isActive: Scalars["Boolean"];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars["String"];
  /** Profile Picture url */
  picture?: Maybe<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
};

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: "UserConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: "UserEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = "MEMBER",
  Pat = "PAT",
  Public = "PUBLIC",
  Webhook = "WEBHOOK",
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PictureAsc = "picture_ASC",
  PictureDesc = "picture_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars["DateTime"]>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Version = {
  __typename?: "Version";
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export enum _FilterKind {
  And = "AND",
  Not = "NOT",
  Or = "OR",
  Contains = "contains",
  ContainsAll = "contains_all",
  ContainsNone = "contains_none",
  ContainsSome = "contains_some",
  EndsWith = "ends_with",
  Eq = "eq",
  EqNot = "eq_not",
  Gt = "gt",
  Gte = "gte",
  In = "in",
  Lt = "lt",
  Lte = "lte",
  NotContains = "not_contains",
  NotEndsWith = "not_ends_with",
  NotIn = "not_in",
  NotStartsWith = "not_starts_with",
  RelationalEvery = "relational_every",
  RelationalNone = "relational_none",
  RelationalSingle = "relational_single",
  RelationalSome = "relational_some",
  Search = "search",
  StartsWith = "starts_with",
}

export enum _MutationInputFieldKind {
  Enum = "enum",
  Relation = "relation",
  RichText = "richText",
  RichTextWithEmbeds = "richTextWithEmbeds",
  Scalar = "scalar",
  Union = "union",
  Virtual = "virtual",
}

export enum _MutationKind {
  Create = "create",
  Delete = "delete",
  DeleteMany = "deleteMany",
  Publish = "publish",
  PublishMany = "publishMany",
  SchedulePublish = "schedulePublish",
  ScheduleUnpublish = "scheduleUnpublish",
  Unpublish = "unpublish",
  UnpublishMany = "unpublishMany",
  Update = "update",
  UpdateMany = "updateMany",
  Upsert = "upsert",
}

export enum _OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum _RelationInputCardinality {
  Many = "many",
  One = "one",
}

export enum _RelationInputKind {
  Create = "create",
  Update = "update",
}

export enum _RelationKind {
  Regular = "regular",
  Union = "union",
}

export enum _SystemDateTimeFieldVariation {
  Base = "base",
  Combined = "combined",
  Localization = "localization",
}

export type GetMealsQueryVariables = Exact<{ [key: string]: never }>;

export type GetMealsQuery = {
  __typename?: "Query";
  kebabs: Array<{
    __typename?: "Kebab";
    id: string;
    name?: string | null;
    price?: number | null;
    ingredients: Array<string>;
    publishedAt?: any | null;
    image?: { __typename?: "Asset"; url: string; id: string } | null;
  }>;
  pizzas: Array<{
    __typename?: "Pizza";
    id: string;
    name?: string | null;
    price?: number | null;
    ingredients: Array<string>;
    publishedAt?: any | null;
    image?: { __typename?: "Asset"; url: string; id: string } | null;
  }>;
  burgers: Array<{
    __typename?: "Burger";
    id: string;
    name?: string | null;
    price?: number | null;
    ingredients: Array<string>;
    publishedAt?: any | null;
    image?: { __typename?: "Asset"; url: string; id: string } | null;
  }>;
};

export const GetMealsDocument = gql`
  query GetMeals {
    kebabs {
      id
      name
      price
      ingredients
      publishedAt
      image {
        url
        id
      }
    }
    pizzas {
      id
      name
      price
      ingredients
      publishedAt
      image {
        url
        id
      }
    }
    burgers {
      id
      name
      price
      ingredients
      publishedAt
      image {
        url
        id
      }
    }
  }
`;

/**
 * __useGetMealsQuery__
 *
 * To run a query within a React component, call `useGetMealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMealsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMealsQuery(baseOptions?: Apollo.QueryHookOptions<GetMealsQuery, GetMealsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMealsQuery, GetMealsQueryVariables>(GetMealsDocument, options);
}
export function useGetMealsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMealsQuery, GetMealsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMealsQuery, GetMealsQueryVariables>(GetMealsDocument, options);
}
export type GetMealsQueryHookResult = ReturnType<typeof useGetMealsQuery>;
export type GetMealsLazyQueryHookResult = ReturnType<typeof useGetMealsLazyQuery>;
export type GetMealsQueryResult = Apollo.QueryResult<GetMealsQuery, GetMealsQueryVariables>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Node: ["Asset", "Burger", "Kebab", "Pizza", "ScheduledOperation", "ScheduledRelease", "User"],
    ScheduledOperationAffectedDocument: ["Asset", "Burger", "Kebab", "Pizza"],
  },
};
export default result;
