export interface UserData {
  avatar_url: string;
  bio: string;
  company: string;
  followers: number;
  html_url: string;
  login: string;
  name: string;
}

interface IssuesItem {
  body: string;
  comments: number;
  created_at: string;
  html_url: string;
  number: number;
  title: string;
  user: Pick<UserData, "avatar_url" | "html_url" | "login">;
}

export interface IssuesData {
  items: IssuesItem[];
  total_count: number;
}
