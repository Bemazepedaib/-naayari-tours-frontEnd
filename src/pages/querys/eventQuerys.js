import { gql } from "@apollo/client";

const GET_EVENTS = gql `
    query getEvents {
        events {
            eventDate
            eventTrip
            eventType
            eventGuide
            eventStatus
            users {
                userEmail
                advancePayment
                fullPayment
                fullyPaid
                observations
            companion {
                companionType
                companionName
                companionCell
            }
        }
    }
}
`;

export { GET_EVENTS }