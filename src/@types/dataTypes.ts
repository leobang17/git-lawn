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
  payload: { [key: string]: unknown };
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

// API Feature Types
export interface CommitRowType {
  date: Date;
  count: number;
}
