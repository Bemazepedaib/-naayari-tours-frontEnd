import { gql } from "@apollo/client";

const GET_REQUESTS = gql`
query getRequests{
    requests{
        requestUser
        requestCell
        requestDate
        requestTrip
        requestStatus
    }
}`

export {GET_REQUESTS};