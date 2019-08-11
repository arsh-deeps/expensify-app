import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
//console.log(moment().format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense? (props.expense.amount / 100).toString() :'',
            createdAt: props.expense? moment(props.expense.createdAt):moment(),
            calenderFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=> ({description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=>({note}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calenderFocused: focused}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=> ({error: 'Please provide description and amount.'}))
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form>
                    <input type="text" value={this.state.description} placeholder="description" onChange={this.onDescriptionChange} autoFocus/>
                    <input type="text" value={this.state.amount} placeholder="amount" onChange={this.onAmountChange}/>
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>{false}}
                    />
                    <textarea placeholder="Add a note(optional)." onChange={this.onNoteChange}/>
                    <button onClick={this.onSubmit}>Add Expense</button>
                </form>
            </div>
        )
    }
}