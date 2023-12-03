import { Roles } from "../types/authentication.types";

export class AuthenticationDTO {
  user: string;
  password: string;
}

export class AuthenticationResponseDTO {
  message: string;
  role: Roles;
}
