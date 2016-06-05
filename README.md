# react-forms-lite

## What is it?
**react-forms-lite** is a minimal, opinionated React Component for building forms. It consists of the 3 following Components:
 - Forms
 - Form
 - Input

**Forms** is a wrapper around **Form**. The basic idea is that you can have multiple **Form**(s) that are submitted via 1 submit button as part of the **Forms** component. This helps in specifying different **specs** for each **Form** yet submit it as one. For example a reservation page will have the reservation detail **Form** but may also have the payment **Form**. You will want to submit them both as one but it helps in tracking them separately.

**Forms** properties:
 - *specs*: Object, required
 - *onSubmit*: Function(values), required
 - *displayErrors*: Boolean, default false

**onSubmit** is a function attribute of the Component that owns **Forms**. This function is called when the submit button is clicked. The **values** argument is structured like the **specs** such that each **spec** has it's values based on the **id**(s) passed along with an additional **isValid** property.
 
**spec** object must have:
 - *name*: String,
 - *fields*: Array[Object]


Each *field* corresponds to an **Input**. The following code from the **Input** Component explains which properties are required and which are optional.

```javascript
// All properties and their types
Input.propTypes = {
    id: React.PropTypes.string.isRequired, // REQUIRED
    label: React.PropTypes.string.isRequired, // REQUIRED
    className: React.PropTypes.string,
    type: React.PropTypes.string,
    required: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    validate: React.PropTypes.func,
    errorText: React.PropTypes.string
}

// Default values for some properties
Input.defaultProps = {
    className: '',
    type: 'text',
    required: false,
    placeholder: '',
    validate: function(prop) {
        // Default: not empty string
        return prop !== '';
    },
    errorText: 'This field cannot be empty.'
}
```

### A minimal example
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import Forms from './lib/Forms.js';

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

ReactDOM.render(<App />, document.getElementById('app'));
```


