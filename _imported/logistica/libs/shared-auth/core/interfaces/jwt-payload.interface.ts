export interface JwtPayload {
  sub: string;
  username: string;
  rol?: string;
  role_name?: string;
  roles?: string[]; // Roles secundarios
  zona?: string;
  permissions?: Record<string, boolean>;
  exp: number;
  iat: number;
}
