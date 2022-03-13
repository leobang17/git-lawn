// Component Property Type
export interface GitLawnProps {
  username: string;
  grassSpan?: number;
  color?: ColorType;
  month?: number;
}

export type LawnProps = Required<GitLawnProps>;

export type GrassProps = {
  grassSpan: number;
  color: string;
  commitCount: number;
  visibility: boolean;
};

export interface LawnStyleProps {
  lawnHeight: number;
  lawnWidth: number;
}

export interface ContributionBoxProps extends CommitRowType {
  span: number;
}

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

// Color Property Type
export type ColorIdx = 0 | 1 | 2 | 3 | 4;

export type ColorType = "GREEN" | "BLUE";

// API Feature Types
export interface CommitRowType {
  date: Date;
  count: number;
}

export interface YMD {
  year: number;
  month: number;
  date: number;
}
