import { gql } from "@apollo/client";

const ADD_PREFERENCE = gql`
    mutation addPreference($preferenceType: String!, $preferenceDescription: String!, $preferenceIcon: String!){
        addPreference(preferenceType: $preferenceType, preferenceDescription: $preferenceType, preferenceIcon: $preferenceIcon){
            preferenceType
            preferenceDescription
            preferenceIcon
        }
    }
`

const DELETE_PREFERENCE = gql`
    mutation deletePreference($preferenceType: String!){
        deletePreference(preferenceType: $preferenceType){
            preferenceType
            preferenceDescription
            preferenceIcon
        }
    }
`


export { ADD_PREFERENCE }