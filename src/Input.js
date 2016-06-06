// npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';

import MyDatePicker from './MyDatePicker.js';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showErrorText: false
        };
        
        this.update = this.update.bind(this);
    }
    
    update(e) {
        let val;
        val = e.target.value;
        this.setState({value: e.target.value});
        var isValid = this.props.validate(val);
        
        this.props.updateForm(this.props.id, val, isValid);
    }
    
    showErrors() {
        this.setState({showErrorText: true});
    }
    
    componentDidMount() {
        let isValid = this.props.validate(this.state.value);
        this.props.updateForm(this.props.id, this.state.value, isValid);
    }
    
    render() {
        let element;
        let type = this.props.type;
        
        switch (type) {
            case 'datepicker':
                element = <MyDatePicker
                    key={this.props.id}
                    update={this.update}
                    className={this.props.className} /> 
                break;
            case 'select':
                let options = [];
                for (var i in this.props.options) {
                    let option = this.props.options[i];
                    options.push(<option key={option.value} value={option.value}>{option.label}</option>);
                }
                element = <select key={this.props.id} value={''} onChange={this.update}>{options}</select>
                break;
            case 'textarea':
                element = <textarea key={this.props.id} onChange={this.update} />
                break;
            default:
                element = <input
                            key="input"
                            id={this.props.id}
                            type={type}
                            className={this.props.className}
                            placeholder={this.props.placeholder}
                            onChange={this.update}
                            value={this.state.value}
                        />
        }
        
        let elements = [element];
        if (this.state.showErrorText && !this.props.validate(this.state.value)) {
            elements.push(<p key="error-text" className="error-text">{this.props.errorText}</p>);
        }
        
        return <div className="field">
            <label>{this.props.label}</label> 
            <div className="input-wrapper">{elements}</div>
        </div>;
    }
}

Input.propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    type: React.PropTypes.string,
    required: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    validate: React.PropTypes.func,
    errorText: React.PropTypes.string,
    options: React.PropTypes.array
}

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

export default Input