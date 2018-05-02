import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";


const initialState={
    ownerId:null,
    userImage:null,
    ownerName:null,
    token:null,
    email:null,
    isOnline:false,
    isAdmin:false,
    loggedOutAt:null,
    isAuth:false,
    loading:false
};

const onSignupStart =(state,action)=>{
    return updateObject(state,{
        loading:true
    });
};



const onSignupSuccess =(state,action)=>{
    return updateObject(state,{
        ownerId:action.userId,
        userImage:action.imageUrl,
        ownerName:action.userName,
        email:action.userMail,
        token:action.authToken,
        isOnline:action.isOnline,
        isAdmin:action.isAdmin,
        loggedOutAt:action.loggedOutAt,
        isAuth:true,
        loading:false,
    });
};

const onSignupFail =(state,action)=>{
    return updateObject(state,{
        isAuth:false,
        loading:false
    });
};



const reducer = (state=initialState,action)=>{
    switch(action.type){
        //register reducers
        case actionTypes.ON_SIGNUP_START: return onSignupStart(state,action);
        case actionTypes.ON_LOGIN_SUCCESS: return onSignupSuccess(state,action);
        case actionTypes.ON_LOGIN_FAILED: return onSignupFail(state,action);
        
        default: return state;
    }
};

export default reducer;