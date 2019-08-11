import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


const ExpenseItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>
            <h3>{props.description}</h3>
        </Link>
        <p>{props.amount} - {props.createdAt}</p>
        
    </div>
);

export default connect()(ExpenseItem);