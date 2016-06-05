import React from 'react';
import ReactDOM from 'react-dom';

import Forms from '../src/Forms.js';

let specs = {
    mySpec: {
        name: 'mySpec',
        fields: {
            myInput: {id: 'my-input', className: 'my-input', label: 'Text Field'},
            myDatePicker: {id: 'datepicker', type: 'datepicker', label: 'DatePicker'}
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
                <Forms specs={specs} onSubmit={this.onFormsSubmit} displayErrors={true}/>
            </div>
    }
}

export default App;

