
export type RegistrationForm = {
  firstName: string
  lastName: string
  email: string
  password: string
  timezone: string
  lang: string
  brandName: string
}

export type LoginForm = {
  email: string
  password: string
  timezone: string
  lang: string
  brandName: string
}

export type Currencies = "GC" | "SC" | "USD";

export type RealMoneyCurrencies = "USD" | "SC";

export type Currency = {
  currency: Currencies;
  amount: number;
  redeemable: number;
  unplayed: number;
};

export type LevelCategories = "free_level" | "vip_level";

export type SubscriptionType = {
  code: string;
  offerCode: string;
};

export type ILevel = {
  level: number;
  current: number;
  threshold: number;
  range: number;
  category: LevelCategories;
  name: string;
  levelChanged: boolean;
  bonus?: number;
  sweepstakeBonus?: number;
  vipPoints?: number;
  currentMonthPoints?: string;
  currentYearPoints?: string;
  baseMonthlyLevel?: number;
  nextMonthlyLevel?: number;
  monthlyLevelProgress?: string;
  annualLevelProgress?: string;
  baseAnnualLevel?: number;
  nextAnnualLevel?: number;
  levelValidUntil?: string;
};

export type UserInvitationInfo = {
  gold: number;
  goldFirstPurchase: number;
  goldPurchase: number;
  goldSignUp: number;
  invited: number;
  purchases: number;
  purchasesQualified: number;
  sweepstake: number;
  sweepstakeFirstPurchase: number;
  sweepstakeFirstWithdraw: number;
  sweepstakePurchase: number;
  sweepstakeSignUp: number;
  sweepstakeWithdraw: number;
  withdraws: number;
  withdrawsQualified: number;
};

export type Address = {
  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  city: string;
  country: string;
  state: string;
  zip: string;
};

export type SoftKycForm = Address & {
  email: string;
  birthDate: Date;
  day?: string;
  month?: string;
  year?: string;
};

export type LegalRules = {
  setting: "Tickbox" | "Popup" | "Nothing";
  text: string;
  type: "TC" | "SR" | "PP";
};

export type UserPersonalInfo = Address & {
  birthDate: string;
};

// remove static level
export type User = {
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  oauth: Array<string>;
  username?: string;
  phoneNumber: string;
  tcVersion: string;
  acceptedTcVersion: string;
  tcVersionGC: string;
  acceptedTcVersionGC: string;
  srVersion: string;
  acceptedSrVersion: string;
  ppVersion: string;
  acceptedPpVersion: string;
  ppVersionGC: string;
  acceptedPpVersionGC: string;
  acceptedPpVersionNonUSGC: string;
  acceptedTcVersionNonUSGC: string;
  ppVersionNonUSGC: string;
  tcVersionNonUSGC: string;
  id: string;
  customerId: string;
  bot?: boolean;
  guest?: boolean;
  country?: string;
  xpLevel: ILevel;
  vipLevel: ILevel;
  kycStatus:
    | "initial"
    | "in_review"
    | "confirmed"
    | "id_confirmed"
    | "doc_review"
    | "doc_declined"
    | "declined"
    | "blocked";
  firstOffer?: null | string;
  firstOfferAt?: null | string;
  subscriptions?: Array<SubscriptionType> | null;
  createdAt?: string;
  lastDeposit?: string;
  lastWithdraw?: string;
  mode:
    | "default"
    | "sweepstake_preview"
    | "sweepstake_preview_web"
    | "sweepstake"
    | "gold"
    | "gold_free";
  sentWelcomeEmail: boolean;
  invitation: UserInvitationInfo;
  restrictions: ("no_game" | "no_purchase" | "no_redeem")[];
  realEmail?: string;
  admin?: boolean;
  firstDeposit?: string;
  softKycInfo?: Address;
  kycInfo?: Address;
  emailVerified: boolean;
  purchaseVipLevel?: string;
  birthDate?: string;
  balances?: Array<Currency>;
  locked: boolean;
  doNotSendEmails: boolean;
  doNotSendPushes: boolean;
  doNotSendSms: boolean;
  legalRuleDate?: string;
  legalRules?: Array<LegalRules>;
  status?: string;
  personalInfo: UserPersonalInfo | null;
  freeGoldCoins?: boolean;
};

export type TokenData = {
  type: 'GetTemporaryTokenResponse'
  counterparty: string
  token: string
  subject: string
  country: string
}
