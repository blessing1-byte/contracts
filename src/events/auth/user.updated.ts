import { EventEnvelope } from "../common/eventEnvelope.js";
import { EventHeaders } from "../common/eventHeaders.js";

export type UpdatedUserPayload = {
  user_id: string;
  name: string;
  email: string;
  message: string;
};

export interface UpdateUserEvent {
  headers: EventHeaders;
  message: EventEnvelope<UpdatedUserPayload>;
}
