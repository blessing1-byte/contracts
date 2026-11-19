export interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
} //req.body for both user and agent creation

// Contracts: Define what data must be provided.
// Zod schema: Checks whether the provided data is valid.
//For example, your contract says password must be a string. Your Zod schema adds the rule that it must contain at least six characters.
