import React from 'react';
import App from './App';

/*
function sum(a, b) {
  return a + b;
}

const sum = () => {
             let i = 0;
             let x = 0;
     while (i < arguments.length) {
         x += parseInt(arguments[i]);
         i++;
    };
    return x;
};
*/


const sum = (a = 0, b = 0) => {
    if (a == '') {a = 0};
    if (b == '') {b = 0};
    return a + b;
};

export default class Numbers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numbers: '0'};
    }
    updateNumbers(event) {
        this.setState({
            numbers: event.target.value
        });
    }
    render () {
            return (
              <div>
                <input type='text' name='numbers' value={this.state.numbers} onChange={event => this.updateNumbers(event)} />
                <p>{this.state.numbers}</p>
              </div>
                 );
            };
}

//export default Summation;