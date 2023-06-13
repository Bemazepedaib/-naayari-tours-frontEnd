import { gql } from "@apollo/client";

const GET_TRIPS = gql
  `query getTrips {
    trips{
    tripName
    tripInformation{
      description
      place
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
      photo
    }
    tripRating
    tripStatus
  }
}
    `;
const GET_PI_TRIPS  = gql
  `query getTrips {
    trips{
    tripName
    tripInformation{
      place
      price{
        priceType
        priceAmount
      }
      discount{
        available
      }
    }
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

const GET_TRIP_PRICES = gql`
  query getTripPrices($tripName: String){
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
      duration
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
      recomendations
      photo
    }
    tripKit
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

export { GET_TRIPTYPES, GET_TRIPS, GET_TRIP, GET_TRIP_PRICES,GET_PI_TRIPS};