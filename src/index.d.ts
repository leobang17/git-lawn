// Component Property Type
export interface LawnProps {
  grassSpan?: number;
  color?: ColorType;
  month?: number;
  darkmode?: boolean;
  grassShape?: GrassShape;
}

export interface GitLawnProps extends LawnProps {
  username: string;
}

export type LawnPropsRequired = Required<LawnProps>;

export type GrassProps = {
  grassSpan: number;
  date: Date;
  commitCount: number;
  color: string;
  visibility: boolean;
};

export interface LawnStyleProps {
  lawnHeight: number;
  lawnWidth: number;
}

export interface ContributionBoxProps extends CommitRowType {}

// Github API Types
export interface PublicEventRequirements {
  username: string;
  per_page?: number;
  page?: number;
}

export interface EventType {
  id: number;
  type: string;
  actor: ActorType;
  repo: RepoType;
  payload: PushEventType | { [key: string]: unknown };
  created_at: string;
}

export interface ActorType {
  id: number;
  login: string;
  displayed_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface RepoType {
  id: number;
  name: string;
  url: string;
}

export interface PushEventType {
  push_id: number;
  size: number;
  distinct_size: number;
  ref: string;
  head: string;
  before: string;
  commits: Array<unknown>;
}

// Style Property Type
export type ColorIdx = 0 | 1 | 2 | 3 | 4;

export type ColorType = "GREEN" | "BLUE";

export type ThemeType = "DARK" | "LIGHT";

export type GeneralColorProps = {
  font: string;
  subFont: string;
  contributionFont: string;
  background: string;
  contributionBackground: string;
};

export type GrassShape = "Rectangle" | "Circle";

export type ThemeColor = { [theme in ThemeType]: GeneralColorProps };

export type GeneralStyle = {
  theme: ThemeColor;
  font?: Object;
};

export type GrassColor = {
  theme: ThemeGrassColor;
};

export type ThemeGrassColor = {
  [theme in ThemeType]: GrassGradation;
};

export type GrassGradation = {
  [color in ColorType]: string[];
};

// API Feature Types
export interface CommitRowType {
  readonly date: Date;
  count: number;
}

// API의 getCommitHistory의 return type
export interface CommitHistoryType {
  commitRows: CommitRow[];
  maxCount: number;
  totalCount: number;
}

export interface YMD {
  year: number;
  month: number;
  date: number;
}
