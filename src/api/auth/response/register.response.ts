import { PublicUser } from "../user.js";

export interface RegisterUserResponse {
  success: boolean;
  data: { user: PublicUser };
}

//success is a boolean.
// data is an object.
// data contains user.
// user uses your existing PublicUser type

// How does this connect to your controller?
// Your controller:
// successResponse(res, 201, { user });

// Your response helper:
// return res.status(statusCode).json({ success: true, data });
