import { gql } from "@apollo/client";

const GET_PREFERENCES = gql`
    query getPreferences {
        preferences {
            preferenceType
            preferenceDescription
            preferenceIcon
        }
    }
`;

export { GET_PREFERENCES }