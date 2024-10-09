import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($request: LoginRequest!) {
    login(request: $request) {
      token
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation Register($request: RegisterRequest!) {
    register(request: $request) {
      token
    }
  }
`;