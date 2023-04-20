import { gql } from "@apollo/client";

const LOGIN = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password)
    }
`;

const ADD_USER = gql`
    mutation addUser($name: String!, $cellphone: String!, $birthDate: String!, $email: String!, $password: String!, $sex: String!, 
                     $reference: String!, $userType: String!, $userLevel: String!, $membership: Boolean!, $verified: Boolean!){
        addUser(name: $name, cellphone: $cellphone, birthDate: $birthDate, email: $email, password: $password, sex: $sex,
                    reference: $reference, userType: $userType, userLevel: $userLevel, membership: $membership, verified: $verified)
    }
`;

const UPDATE_USER_PREFERENCES = gql`
    mutation updateUserPreferences($newPref: [InputUserPreference!]!, $email: String){
        updateUserPreferences(newPref: $newPref, email: $email)
    }
`;

const DELETE_USER = gql`
    mutation deleteUser($email: String!) {
        deleteUser(email: $email)
    }
`;

export { LOGIN, ADD_USER, DELETE_USER, UPDATE_USER_PREFERENCES }