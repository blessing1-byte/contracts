import { PublicUser } from "../user.js";

export interface GetCurrentUserResponse {
  success: boolean;
  data: { user: PublicUser };
}
