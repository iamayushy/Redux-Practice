const redux = require('redux')
const { createStore } = require("redux");

// Action
const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';

// Action Creator
/*
Returs the type of the action with payload and other things
*/
const deposit = (payload) =>{
    return{
        type: DEPOSIT,
        payload : payload
    }
}
const withdraw = (payload) => {
    return{
        type: WITHDRAW,
        payload: payload
    }
}

// Reducer []
const initalState = {
    balance: 10000
}
const reducer = (state = initalState, action) => {
    switch(action.type){
        case DEPOSIT: return{
            ...state,
            balance: state.balance + action.payload
        }
        case WITHDRAW: return{
            ...state,
            balance: state.balance - action.payload
        }
        default: return state
    }
}

// Store
const bank = new createStore(reducer);
console.log('Initial Balance', bank.getState());
const unsubscribe = bank.subscribe(() =>  console.log('Updated Balance', bank.getState()));
bank.dispatch(deposit(1200));
bank.dispatch(deposit(23000));
bank.dispatch(withdraw(2388));
unsubscribe();
