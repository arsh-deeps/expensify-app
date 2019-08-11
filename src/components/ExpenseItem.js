import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>
            <h3>{props.description}</h3>
        </Link>
        <p>{numeral(props.amount/100).format('$0,0.00')} - {moment(props.createdAt).format('Do MMMM,YYYY')}</p>
        
    </div>
);

export default connect()(ExpenseItem);