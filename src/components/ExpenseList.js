import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>  
        <h1>Expense List</h1>
        <div>
        {props.expenses.map((expense)=>(<ExpenseItem id={expense.id} key={expense.id} description={expense.description} amount = {expense.amount} createdAt = {expense.createdAt} />))}
        </div>
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses : selectExpenses(state.expenses,state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);

