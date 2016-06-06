import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Input from './Input.js';

/*
    Form Component
 */
class Form extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    displayErrors(){
        let name = this.props.spec.name;
        if (this.props.displayErrors) {
            for (var id in this.state) {
                this.refs[name + '.' + id].showErrors();
            }
        }
    }
    
    gatherValues() {
        this.displayErrors();
        return this.state;
    }
    
    update(id, val, isValid) {
        this.state[id] = {val: val, isValid: isValid};
    }
    
    render() {
        let inputs = [];
        for (var i in this.props.spec.fields) {
            let id = this.props.spec.name + '.' + this.props.spec.fields[i].id;
            inputs.push(
                <Input 
                    ref={id}
                    key={id}
                    {...this.props.spec.fields[i]} 
                    updateForm={this.update.bind(this)}
                />
            );
        }
        return <div className="rfl-form-container">
                {inputs}
            </div>
    }
}

Form.propTypes = {
    spec: React.PropTypes.object.isRequired
}

export default Form