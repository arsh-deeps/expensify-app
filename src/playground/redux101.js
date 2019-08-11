import {createStore} from 'redux';


//action generator - a function that return action object
const incrementCount = ({incrementBy=1}={}) => ({
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy=1}={}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({count}) => ({
    type: 'SET',
    count
})

//reducer - how the application state changes in response to actions sent to the store
//1. reducer is a pure function (output is only dependent on input)
//2. never change state or action

const countReducer = (state = {count: 0},action) => {
    
    switch(action.type){
        case 'INCREMENT':
            return {
                count : state.count + action.incrementBy
            }
        case 'DECREMENT' :
            return {
                count : state.count - action.decrementBy
            }
        case 'RESET' :
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default :
            return state;
    }
    
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch(incrementCount({
    incrementBy: 5
}));
store.dispatch(incrementCount());


store.dispatch(decrementCount({
    decrementBy : 10
}));

store.dispatch(resetCount());


store.dispatch(setCount({
    count: 121
}))