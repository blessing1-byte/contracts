import { PublicUser } from "../user.js";

export interface LoginResponse {
  success: boolean;
  data: { user: PublicUser };
}
