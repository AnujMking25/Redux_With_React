// import {createStore} from 'redux'
import { createSlice ,configureStore} from '@reduxjs/toolkit';
// export const INCREMENT='increment'
const initialCounterState={counter:0,showCounter:true};

const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        }
        ,
        decrement(state){
            state.counter--;
        },
        incrementBy(state,action){
            state.counter=state.counter+action.payload;
        },
         decrementBy(state,action){
            state.counter=state.counter-action.payload;
        },
        toggle(state){
            state.showCounter=!state.showCounter;
        }
    }
})

const initialAuthState={
    isAuthenticated:false
}

const AuthSlice=createSlice({
    name:'authentication',
initialState:initialAuthState,
reducers:{
    login(state){
state.isAuthenticated=true
    },
    logout(state){
        state.isAuthenticated=false
    }
}
})

// const counterReducer=(state= initialState,action)=>{
// if(action.type===INCREMENT){
//     return {
//         counter:state.counter+1,
//         showCounter:state.showCounter
//     }
// }
// if(action.type==='decrement'){
//     return {
//         counter:state.counter-1,
//         showCounter:state.showCounter
//     }
// }
// if(action.type==='incrementBy'){
//     return {
//         counter:state.counter+action.amount,
//         showCounter:state.showCounter
//     }
// }
// if(action.type==='decrementBy'){
//     return {
//         counter:state.counter-action.amount,
//         showCounter:state.showCounter
//     }
// }

// if(action.type==='toggel'){
//     return {
//         counter:state.counter,
//         showCounter:!state.showCounter
//     }
// }
// return state
// } 

const store=configureStore({
    reducer:{conuter:counterSlice.reducer,auth:AuthSlice.reducer}
})
export const counterAction=counterSlice.actions;
export const authAction=AuthSlice.actions;
export default store;