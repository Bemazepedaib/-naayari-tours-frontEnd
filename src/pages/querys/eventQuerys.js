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

const GET_EVENT = gql `
    query getEvent($eventDate: String, $eventTrip: String) {
        event(eventDate: $eventDate, eventTrip: $eventTrip) {
            eventDate
            eventTrip
            eventType
            eventGuide
            eventStatus
            users {
                userEmail
                advancePayment
                fullPayment
                advancePaid
                fullyPaid
                observations
                companion {
                    companionType
                    companionName
                    companionCell
                    companionBirthdate
                }
            }
        }
    }
`;

export { GET_EVENTS, GET_EVENT }