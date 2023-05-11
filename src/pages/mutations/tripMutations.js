import { gql } from "@apollo/client";

const ADD_TRIP = gql`
    mutation addTrip($tripName: String!, $tripInformation: InputTripInformation!, $tripKit: String!, $tripRating: Int!, 
        $tripStatus: Boolean!, $tripReview: [InputTripReview!]){
            addTrip(tripName: $tripName, tripInformation: $tripInformation, tripKit: $tripKit, tripRating: $tripRating, 
                tripStatus: $tripStatus, tripReview: $tripReview)
    }
`;
const DELETE_TRIP = gql`
    mutation deleteTrip($tripName: String!) {
        deleteTrip(tripName: $tripName)
    }
`;
export { ADD_TRIP,DELETE_TRIP}