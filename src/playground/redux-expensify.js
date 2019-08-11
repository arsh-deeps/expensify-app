import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

// const arsh = {one: 2,two: 3};
// console.log({...arsh,three:3});  spreading objects using babel

//actions
const addExpense = (
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    }={}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id 
});

const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text='') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

//expneses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState,action) => {
    switch(action.type){
        case 'ADD_EXPENSE': 
            return [...state,action.expense];
        case 'REMOVE_EXPENSE' :
            return state.filter((expense) => expense.id != action.id);
        case 'EDIT_EXPENSE' :
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates   
                    }
                }
                else {
                    return expense;
                }
            })
        default:
            return state;
    }
};


//filters reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState,action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE' :
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE' :
            return {
                ...state,
                endDate: action.endDate
            }    
        default:
            return state;
    }
}

//get visible expenses

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt? 1 : -1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

//create store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const expenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(expenses); 
});

const expenseOne = store.dispatch(addExpense({description:'rent',amount:2001,createdAt:-1233 }));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:2000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense( expenseTwo.expense.id,{amount:1200}));

// store.dispatch(setTextFilter('ffee'));
// store.dispatch(setTextFilter());    

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2112));

const demoState = {
    expenses: [{
        id: 'opiajfoiadsjf',
        description: 'rent',
        note: 'final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}
