// npm modules
import React from 'react';

// Components
import Form from './Form.js';

/*
    A "spec" is needed to generate input elements along with id, className
    and type.
    
    An "onSubmit" prop function is needed to communicate the values of the forms
 */

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    submitClick() {
        let formValues = {};
        for (var i in this.props.specs) {
            let values = this.refs[i].gatherValues();
            formValues[i] = values;
        }
        this.props.onSubmit(formValues);
    }
    
    render() {
        let forms = [];
        for (var key in this.props.specs) {
            forms.push(
                <Form 
                    ref={key} 
                    key={key}
                    spec={this.props.specs[key]} 
                    displayErrors={this.props.displayErrors}
                />
            );
        }
        
        return <div>
                <link rel="stylesheet" type="text/css" href="../node_modules/react-datepicker/dist/react-datepicker.min.css" />
                {forms}
                <button onClick={this.submitClick.bind(this)}>Submit</button>
            </div>
    }
}

Forms.propTypes = {
    specs: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired
}

export default Forms