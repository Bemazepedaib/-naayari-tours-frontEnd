import { gql } from "@apollo/client";

const GET_USERS = gql`
    query getUsers {
    users {
        name
        cellphone
        birthDate
        email
        password
        sex
        userType
        userLevel
        membership
        coupons {
            couponType
            couponDescription
            couponAmount
            couponDate
            couponApplied
        }
        preferences {
            preferenceType
        }
      }
    }
`;

const GET_USER = gql`
    query getUser($email: String){
        user {
            name
            cellphone
            birthDate
            email
            password
            sex
            userType
            userLevel
            membership
            coupons {
                couponType
               couponDescription
               couponAmount
               couponDate
               couponApplied
            }
            preferences {
            preferenceType
            }
        }
    }
`;

export { GET_USERS, GET_USER };