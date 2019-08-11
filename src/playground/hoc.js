// higher order component - a component that renders other component
//reuse code
//prop hijacking
//prop manipulation
//abstract state
       
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>info is {props.info}</p>
    </div>
);

ReactDOM.render(<Info info="detail" ></Info>,document.getElementById('app'));
