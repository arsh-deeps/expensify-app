import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

const ExpenseSummary = (props) => (
    <div>
        {props.count===0? <p></p> : <p>Total expenses: {props.count} Sum: {numeral(props.sum/100).format('$0,0.00')}</p> }
        {!props.count && <p>No Expenses to show</p>}
    </div>
)

const mapStateToProps = (state) => {
    return {
        sum : selectExpensesTotal(state.expenses,state.filters).sum,
        count : selectExpensesTotal(state.expenses,state.filters).count
    }
}

export default connect(mapStateToProps)(ExpenseSummary);