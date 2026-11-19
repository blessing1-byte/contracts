import { UserRole } from "../../types/auth/userRoles.js";
import { EventEnvelope } from "../common/eventEnvelope.js";
import { EventHeaders } from "../common/eventHeaders.js";

export type UserCreatedPayload = {
  id: string;
  name: string;
  role: UserRole;
  message: string;
};

export interface UserCreatedEvent {
  header: EventHeaders;
  message: EventEnvelope<UserCreatedPayload>;
}
