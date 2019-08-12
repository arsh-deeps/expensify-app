import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

const ExpenseSummary = (props) => (
    <div>
        { <h1>Showing total {props.count} expenses with sum of {numeral(props.sum/100).format('$0,0.00')}</h1> }
    </div>
)

const mapStateToProps = (state) => {
    return {
        sum : selectExpensesTotal(state.expenses,state.filters).sum,
        count : selectExpensesTotal(state.expenses,state.filters).count
    }
}

export default connect(mapStateToProps)(ExpenseSummary);