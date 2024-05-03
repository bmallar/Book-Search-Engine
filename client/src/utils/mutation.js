import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
mutation login($email: String, $password: String){

    login(email: $email, password: $password){
        token
        user {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }

}

`
export const ADD_USER = gql`
mutation addUser($username: String, $email: String, $password: String){

    addUser(username: $username, email: $email, password: $password){
        token
        user {
            email
            username
        }
    }
}
`
export const SAVE_BOOK = gql`
mutation saveBook ($bookData: bookInput) {
    saveBook(bookData:$bookData){
        username
        email
        savedBooks {
            title
            authors
            link
            description
            image
            bookId
        }
    }
}
`
export const REMOVE_BOOK= gql`
mutation removeBook ($bookId: ID) {
    removeBook(bookId: $bookId){
        username
        email
        savedBooks {
            title
            authors
            link
            description
            image
            bookId
        }
    }
}
`
