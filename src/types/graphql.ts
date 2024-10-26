export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export interface User {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    role: Role;
}

export interface AuthResponse {
    token: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
    acceptTerms: boolean;
}

export interface Token {
    sub: string;
    role: string;
    id: string;
    exp: number;
    iat: number;
}

export interface UpdateUserInput {
    id: string;
    name: string;
    cellphone: string;
    email: string;
}
