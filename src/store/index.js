
import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import authReducer from './authSlice'



// configureStore combines createStore and combineReducers, so we can have multiple reducers
const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
});


export default store;

