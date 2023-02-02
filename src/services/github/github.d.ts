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
  created_at: string;
  number: number;
  title: string;
}

export interface IssuesData {
  items: IssuesItem[];
  total_count: number;
}
