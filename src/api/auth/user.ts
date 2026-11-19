import type { UserRole } from "../../types/auth/userRoles.js";

export interface PublicUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

//your API sends JSON. JavaScript serializes Date objects into ISO date strings.

// PublicUser describes the public representation of a user. It can be reused by multiple API responses and even event payloads.
// api/auth/responses/ should contain the complete response structures returned by specific endpoints.
