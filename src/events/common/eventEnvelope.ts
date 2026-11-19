export interface EventEnvelope<Tpayload> {
  version: number;
  occurredAt: number;
  eventId: string;
  payload: Tpayload;
}
