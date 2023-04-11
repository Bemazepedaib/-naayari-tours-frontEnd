import { gql } from "@apollo/client";

const GET_TRIPS = gql
  `query getTrips {
    trips{
    id
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
      photo
    }
    tripRating
    tripStatus
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

const GET_TRIP_PRICES = gql
`query getTripPrices($tripName: String){
  trip(tripName:$tripName){
    tripInformation {
      price {
        priceType
        priceAmount
      }
      discount {
        dateStart
        dateEnd
        amount
        available
      }
    }
  }
}
`

const GET_TRIP = gql
  `query getTrip($tripName: String){
    trip(tripName:$tripName){
    tripName
    tripInformation{
      description
      place
      date
      activities{
        activityName
        activityPhoto
      }
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


export { GET_TRIPTYPES, GET_TRIPS, GET_TRIP, GET_TRIP_PRICES }