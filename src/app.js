import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';  
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();
console.log(store);
console.log(addExpense);

const expenseOne = store.dispatch(addExpense({description:'rent',amount:2001,createdAt:-1233 }));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:2000}));
const expenseThree = store.dispatch(addExpense({description:'electricity bill',amount:201,createdAt:33 }));
const expenseFour = store.dispatch(addExpense({description:'water bill',amount:2009,createdAt:1200}));  
store.dispatch(setTextFilter(''));
const state = store.getState();
const expenses = getVisibleExpenses(state.expenses,state.filters);
console.log(expenses); 

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));


