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
        reference
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
        user(email: $email) {
            name
            cellphone
            birthDate
            email
            password
            sex
            reference
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

const GET_PI_USERS = gql`
    query getUsers {
    users {
        name
        cellphone
        email
    }
}
`

export { ME, GET_USERS, GET_USER,GET_PI_USERS };