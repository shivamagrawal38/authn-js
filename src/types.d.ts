interface Credentials {
  [index: string]: string;
  username: string;
  password: string;
}

interface JWTClaims {
  iss: string;
  aud: string;
  sub: number;
  iat: number;
  exp: number;
}

declare class Session {
  readonly token: string;
  readonly claims: JWTClaims;

  constructor(token: string);

  iat(): number;

  exp(): number;

  halflife(): number;
}

interface SessionStore {
  read(): string | undefined;
  update(val: string): void;
  delete(): void;
}

interface StringMap {
  [index: string]: string | undefined;
}

interface KeratinError {
  field?: string;
  message: string;
}