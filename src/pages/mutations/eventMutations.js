import { gql } from "@apollo/client";

const UPDATE_USERS = gql`
    mutation updateEventUsers($eventDate: String!, $eventTrip: String!, $users: InputEventUser!){
        updateEventUsers(eventDate: $eventDate, eventTrip: $eventTrip, users: $users)
    }
`;

const DELETE_USER = gql`
    mutation deleteEventUser($eventDate: String!, $eventTrip: String!, $users: [InputEventUser!]!){
        deleteEventUser(eventDate: $eventDate, eventTrip: $eventTrip, users: $users)
    }
`;

const UPDATE_STATUS = gql`
    mutation updateEventStatus($eventDate: String!, $eventTrip: String!, $eventStatus: String!){
        updateEventStatus(eventDate: $eventDate, eventTrip: $eventTrip, eventStatus: $eventStatus)
    }
`;

export { UPDATE_USERS, DELETE_USER, UPDATE_STATUS };