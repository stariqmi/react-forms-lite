// npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showErrorText: false
        };
        
        if (this.props.type === 'datepicker') {
            this.state.startDate = moment();
            this.state.value = moment().format('YYYY/MM/DD');
        }
        
        this.update = this.update.bind(this);
    }
    
    update(e) {
        let val;
        if (this.props.type === 'datepicker') {
            val = e.format('YYYY/MM/DD')
            this.setState({startDate: e, value: val});
        }
        else {
            val = e.target.value;
            this.setState({value: e.target.value});
        }
        var isValid = this.props.validate(val);
        
        this.props.updateForm(this.props.id, val, isValid);
    }
    
    showErrors() {
        this.setState({showErrorText: true});
    }
    
    componentDidMount() {
        this.props.updateForm(this.props.id, this.state.value, this.props.validate(this.state.value));
    }
    
    render() {
        let element;
        let type = (this.props.type === 'datepicker') ? 'text' : this.props.type;
        if (this.props.type === 'datepicker') {
            element = <DatePicker
                key="datepicker"
                selected={this.state.startDate}
                onChange={this.update}
                className={this.props.className} />
        }
        else {
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
        
        return <div>
            <label>{this.props.label}</label> 
            <div>{elements}</div>
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
    errorText: React.PropTypes.string
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