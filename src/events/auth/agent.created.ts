import { UserRole } from "../../types/auth/userRoles.js";
import { EventEnvelope } from "../common/eventEnvelope.js";
import type { EventHeaders } from "../common/eventHeaders.js";

export type AgentCreatedPayload = {
  agent_id: string;
  name: string;
  role: UserRole;
  message: string;
}; //This describes the business information associated with an agent-created event.

export interface AgentCreatedEvent {
  headers: EventHeaders;
  message: EventEnvelope<AgentCreatedPayload>;
}

//Your payload describes the business information, but your publisher also adds some general information:
