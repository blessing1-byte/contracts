contracts/
└── src/
├── types/
│ ├── user.ts
│ └── user-role.ts
│
├── events/
│ └── auth/
│ ├── user-created.ts
│ ├── user-updated.ts
│ └── user-password-updated.ts
│
├── api/
│ └── auth/
│ ├── register.ts
│ ├── login.ts
│ └── user.ts
│
└── index.ts

for auth contracts, we worked with the schema per service(input from client) to get the request interfaces and we worked with the service controller(output to client) to get the response interface.
