- HTTP contracts describe how another service or client communicates with Auth through HTTP.
  question: arre they intertwined? like is the http req intertwined with the event. because we did not create an interface for the login user?
- Event contracts describe the messages Auth publishes through Kafka for other services to consume.

The api folder will hold HTTP request and response types. The events folder will hold Kafka event structures.

What events does Auth publish?
This is where we need to distinguish an HTTP operation from an event.

An HTTP request does not automatically mean an event should be published. Auth publishes an event when something happens that another service may need to know about.

So your event communication has three parts:
Kafka message

1. Headers
   {
   producer_service: "auth-service",
   event_type: "user.created"
   }

2. Message value
   {
   //event envelope refers to the common look of the message object across every event
   version: 1,
   occurredAt: 1795000000000,
   eventId: "event-uuid",
   payload: {
   // event-specific data
   }
   }

3. Message key
   "user-uuid"

a simple rule for your contracts:

- Object structure → interface
- Union / combination / special type construction → type

so basically, the interface defines how each field should look including its field names and types
plus it defines what is usually usable by the consumers
Exactly! You've understood the central idea.

An event contract defines:

Field names: What should each property be called?

Data types: Should the property be a string, number, boolean, etc.?

Expected structure: Which properties should exist in the event?

Consumer expectations: What information can consuming services expect to receive?

There's one subtle distinction I want you to understand:

The contract doesn't necessarily define everything a consumer will use. It defines what the producer promises to provide. Consumers decide which parts they need.

UPDATE VERSION OF YOUR PACKAGE
npm version patch
npm version minor
npm version major

the correct order is:

1. Modify your contracts inside src.
2. Build to generate updated dist.
3. Update version using patch, minor, or major.
4. Publish the new version.

how to view the added files
npm pack @blessing1-byte/contracts@1.0.0
