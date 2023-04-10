import { gql } from "@apollo/client";

const ME = gql`
    query getMe {
        me {
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

export { ME, GET_USERS, GET_USER };