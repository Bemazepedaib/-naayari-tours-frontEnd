import { gql } from "@apollo/client";

const ADD_REQUEST = gql`
    mutation addRequest($requestUser: String!, $requestCell: String!, $requestDate: String!, $requestTrip: String!, 
        $requestStatus: String!){
        addRequest(requestUser: $requestUser, requestCell: $requestCell, requestDate: $requestDate, requestTrip: $requestTrip, 
            requestStatus: $requestStatus)
    }
`;

export { ADD_REQUEST };