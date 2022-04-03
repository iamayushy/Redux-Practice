const redux = require("redux")
const { createStore} = require("redux")

// Action
const BUY_CAKE = 'BUY_CAKE'

// Action Creator
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Action'
    }
}



// Reducer
const initialState = {
    numberOfCake: 10
}
function reducer(state = initialState, action){
    switch(action.type){
        case BUY_CAKE:return{
            numberOfCake: state.numberOfCake - 1,
        }
        default : return state
    }
}

const store = createStore(reducer)
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
