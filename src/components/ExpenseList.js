import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>  
        <div>
        {props.expenses.map((expense)=>(<ExpenseItem id={expense.id} key={expense.id} description={expense.description} amount = {expense.amount} createdAt = {expense.createdAt} />))}
        {props.expenses.length == 0? <p> No expenses to show.</p>:<p></p>}
        </div>
        
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses : selectExpenses(state.expenses,state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);

