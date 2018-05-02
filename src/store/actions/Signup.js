import * as actionTypes from './actionTypes'
import axios from 'axios'
import firebaseApp from '../../js/firebase'
import userModel from '../../js/models/user'



const SIGN_UP_API = 'http://192.168.1.2:3000/api/auth/register'

const onSignupStart = ()=>{
    return {
        type:actionTypes.ON_SIGNUP_START
    }
}

const onSignupSuccess = (id, imageUrl, userName, email, token, isOnline, isAdmin, loggedOutAt)=>{
    return {
        type:actionTypes.ON_SIGNUP_SUCCESS,
        userId: id,
        imageUrl: imageUrl,
        userName: userName,
        userMail: email,
        authToken: token,
        isOnline: isOnline,
        isAdmin: isAdmin,
        loggedOutAt: loggedOutAt
    }
}


const onSignupFailed = ()=>{
    return {
        type:actionTypes.ON_SIGNUP_FAILED
    }
}

export const onSignup = (userData,navigation)=>{
    return dispatch => {
        dispatch(onSignupStart())
        axios.post(SIGN_UP_API,userData).then(res=>{
            if (res.data.isRegistered) {
                console.warn('user is already registered')
              } else {
                console.log('status :', res.status)
                // var token = res.headers['x-auth']; /fetch x-auth from the header .
                var id = res.data._id
                var email = res.data.email
                var imageUrl = res.data.userImage
                var isAdmin = res.data.isAdmin
                var userName = res.data.username
                var isOnline = res.data.isOnline
                var loggedOutAt = res.data.loggedOutAt
                var token = res.data.tokens[0].token
                
                let database = firebaseApp.database()
                let user = userModel(id, imageUrl, userName, email, token, isOnline, false, loggedOutAt)
                dispatch(onSignupSuccess(id, imageUrl, userName, email, token, isOnline, isAdmin, loggedOutAt))
               
        
                database.ref('/users/' + id).set(user).then(() => {               
                  console.log('user added to firebase successfully') 
                  navigation.navigate('Main')                
                }).catch((err) => {
                  console.log('failed to add user to firebase', err)
                })
              }
        }).catch(err=>{
            dispatch(onSignupFailed())
            console.log(err)
        })
    }
}

/*
 var userName = res.data.username
            dispatch(onSignupSuccess(userName))
            console.log(res.data.username)

*/