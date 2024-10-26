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

export const GET_USER = gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      id
      fullName
      email
      phoneNumber
      role
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      success
      message
      user {
        id
        name
        cellphone
        email
      }
    }
  }
`;