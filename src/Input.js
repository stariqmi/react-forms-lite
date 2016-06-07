// npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';

import MyDatePicker from './MyDatePicker.js';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
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
                    id={this.props.id}
                    update={this.update}
                    className={this.props.className} /> 
                break;
            case 'select':
                let options = [];
                for (var i in this.props.options) {
                    let option = this.props.options[i];
                    options.push(<option key={option.value} value={option.value}>{option.label}</option>);
                }
                element = <select className={this.props.className} 
                        id={this.props.id} 
                        value={''} 
                        onChange={this.update}>
                            {options}
                        </select>
                break;
            case 'textarea':
                element = <textarea id={this.props.id} onChange={this.update} />
                break;
            case 'text':
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
        
        return <div className="rfl-field-container">
            <div className="rfl-label-container"><label>{this.props.label}</label></div>
            <div className="rfl-input-container">{element}</div>
        </div>;
    }
}

Input.propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    type: React.PropTypes.oneOf(['text','textarea','select','datepicker']),
    required: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    validate: React.PropTypes.func,
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
    }
}

export default Input