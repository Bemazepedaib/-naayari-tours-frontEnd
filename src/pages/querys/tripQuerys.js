import { gql } from "@apollo/client";

const GET_TRIPS = gql`
    query getTrips {
        trips {
            tripName
            tripInformation
            tripKit
            tripType
            tripRating
            tripStatus
            tripReviews
        }
    }
`

const GET_TRIPTYPES = gql`
    query getTripTypes {
        trips {
            tripName
            tripType
        }
    }
`;

export { GET_TRIPTYPES, GET_TRIPS }