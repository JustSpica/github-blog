import { api } from "api/github";

import { UserData } from "./github";

/**
 * Change the findUser function in the future to accept a dynamic username according to the login.
 */

export async function findUser() {
  try {
    const { data } = await api.get<UserData>("/users/JustSpica");

    return data;
  } catch (error) {
    console.log(error);
  }
}
