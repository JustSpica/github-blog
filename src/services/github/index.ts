import { api } from "api/github";

import { UserData, IssuesData } from "./github";

/**
 * A function that request user data from github.
 *
 * @todo Change this function to accept dynamic user parameter
 */

export async function findUser() {
  try {
    const { data } = await api.get<UserData>("/users/JustSpica");

    return data;
  } catch (error) {
    console.log(error);
  }
}

/**
 * A function that request the issues from a repo fetched by the 1st parameter and returns them
 *
 * @param { string } content 1st parameter
 */

export async function findIssuesByContent(content: string) {
  try {
    const { data } = await api.get<IssuesData>(
      `/search/issues?q=${content} repo:JustSpica/github-blog`,
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}
