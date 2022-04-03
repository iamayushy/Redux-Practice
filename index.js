const redux = require("redux")
const { createStore, combineReducers} = require("redux")
const { createLogger } = require("redux-logger")
// Import Apply middleware
const logger = createLogger()
const applyMiddleWare = redux.applyMiddleware
// Action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'


// Action Creator
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Action'
    }
}
function buyIce(){
    return{
        type: BUY_ICE,
        info: 'Second'
    }
}


// Reducer
const initialState = {
    numberOfCake: 10
}

const initialCream = {
    numberOfIce: 20
}
function reducer(state = initialState, action){
    switch(action.type){
        case BUY_CAKE:return{
            numberOfCake: state.numberOfCake - 1,
        }
        default : return state
    }
}
function creamReducer(state = initialCream, action){
    switch(action.type){
        case BUY_ICE:return{
            numberOfIce: state.numberOfIce - 1,
        }
        default : return state
    }
}
// comining two recducer
const rootRecucer = combineReducers({
    cake: reducer,
    ice: creamReducer
})
// Pass it in the store and add the task you want like logging the programs
const store = createStore(rootRecucer, applyMiddleWare(logger))
console.log(store.getState().cake.numberOfCake, store.getState().ice.numberOfIce);
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyIce())
store.dispatch(buyIce())
store.dispatch(buyIce())
unsubscribe()
