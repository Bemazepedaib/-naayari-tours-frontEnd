import { gql } from "@apollo/client";

const DO_RESERVATIONS = gql`
    mutation updateEventUsers($eventDate: String!, $eventTrip: String!, $users: InputEventUser!){
        updateEventUsers(eventDate: $eventDate, eventTrip: $eventTrip, users: $users)
    }
`;

export { DO_RESERVATIONS };