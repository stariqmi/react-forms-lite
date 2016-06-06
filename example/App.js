import React from 'react';
import ReactDOM from 'react-dom';

import Forms from '../src/Forms.js';

let specs = {
    mySpec: {
        name: 'mySpec',
        fields: {
            myInput: {id: 'my-input', className: 'my-input', label: 'Text Field'},
            myDatePicker: {id: 'datepicker', type: 'datepicker', label: 'DatePicker'},
            mySelect: {id: 'my-select', 
                type: 'select', 
                label: 'Select', 
                options: [
                    {label: '1', value: 1},
                    {label: '2', value: 2}
                ]
            }
        }
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    onFormsSubmit(formData) {
        console.log(formData);
    }
    
    render() {
        return <div>
                <Forms specs={specs} onSubmit={this.onFormsSubmit} />
            </div>
    }
}

export default App;

