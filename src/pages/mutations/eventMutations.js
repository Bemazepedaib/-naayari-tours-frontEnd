import { gql } from "@apollo/client";

const UPDATE_USERS = gql`
    mutation updateEventUsers($eventDate: String!, $eventTrip: String!, $users: InputEventUser!){
        updateEventUsers(eventDate: $eventDate, eventTrip: $eventTrip, users: $users)
    }
`;

const UPDATE_USER = gql`
    mutation updateEventUser($eventDateFrom: String!, $eventTripFrom: String!, $eventDateTo: String!, $eventTripTo: String!, $user: String){
        updateEventUser(eventDateFrom: $eventDateFrom, eventTripFrom: $eventTripFrom, eventDateTo: $eventDateTo, eventTripTo: $eventTripTo, user: $user){
            userEmail
            companion {
                companionName
                companionType
                companionCell
            }
            advancePayment
            fullPayment
            advancePaid
            fullyPaid
            observations
        }
    }
`;

const DELETE_USER = gql`
    mutation deleteEventUser($eventDate: String!, $eventTrip: String!, $user: String!){
        deleteEventUser(eventDate: $eventDate, eventTrip: $eventTrip, user: $user){
            userEmail
            companion {
                companionName
                companionType
                companionCell
            }
            advancePayment
            fullPayment
            advancePaid
            fullyPaid
            observations
        }
    }
`;

const UPDATE_STATUS = gql`
    mutation updateEventStatus($eventDate: String!, $eventTrip: String!, $eventStatus: String!){
        updateEventStatus(eventDate: $eventDate, eventTrip: $eventTrip, eventStatus: $eventStatus)
    }
`;

const ADD_EVENT = gql`
    mutation addEvent($eventDate: String!, $eventTrip: String!,$eventType: String!,$eventStatus: String!,
        $eventGuide: String,$users: [InputEventUser!]!){
        addEvent(eventDate: $eventDate, eventTrip: $eventTrip,eventType: $eventType,eventStatus: $eventStatus,eventGuide:$eventGuide,
            users: $users)
    }
`;

export { UPDATE_USERS, DELETE_USER, UPDATE_USER, UPDATE_STATUS, ADD_EVENT };