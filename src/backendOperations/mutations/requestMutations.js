import { gql } from "@apollo/client";

const ADD_REQUEST = gql`
    mutation addRequest($requestUser: String!, $requestName: String!, $requestCell: String!, $requestDate: String!, 
        $requestTrip: String!, $requestStatus: String!){
        addRequest(requestUser: $requestUser, requestName: $requestName, requestCell: $requestCell, requestDate: $requestDate, 
            requestTrip: $requestTrip, requestStatus: $requestStatus)
    }
`;

const UPDATE_REQUEST = gql`
    mutation updateRequest($requestUser:String!,$requestStatus:String!){
        updateRequest(requestUser:$requestUser,requestStatus:$requestStatus)
    }
`

export { ADD_REQUEST, UPDATE_REQUEST };