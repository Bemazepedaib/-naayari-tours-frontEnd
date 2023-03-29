import { gql } from "@apollo/client";

const GET_TRIPS = gql
`query getTrips {
    trips{
    tripName
    tripInformation{
      description
      place
      price{
        priceType
        priceAmount
      }
      discount{
        dateStart
        dateEnd
        amount
        available
      }
      itinerary
      securityAdvice
      restrictions
      recomendations
      photo
    }
    tripKit
    tripType
    tripRating
    tripStatus
    tripReview{
      user
      rating
      review
      date
      photo
    }
  }
}
    `;

const GET_TRIPTYPES = gql`
    query getTripTypes {
        trips {
            tripName
            tripType
        }
    }
`;

export { GET_TRIPTYPES, GET_TRIPS }