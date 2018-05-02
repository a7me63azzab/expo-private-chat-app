import {combineReducers} from 'redux';
import authReducer from './Auth'

const rootReducer = combineReducers({
    Auth:authReducer
})
export default rootReducer