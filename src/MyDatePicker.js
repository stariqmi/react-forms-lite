import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class MyDatePicker extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            startDate: moment()
        }
    }
    
    componentDidMount() {
        this.props.update({
            target: {
                value: moment().format('YYYY/MM/DD')
            }
        });
    }
    
    update(date) {
        this.setState({startDate: date});
        this.props.update({
            target: {
                value: date.format('YYYY/MM/DD')
            }
        });
    }
    
    render() {
        return <div>
                <link rel="stylesheet" type="text/css" href="../node_modules/react-datepicker/dist/react-datepicker.min.css" />
                <DatePicker
                selected={this.state.startDate}
                onChange={this.update.bind(this)}
                className={this.props.className} />
            </div>
    }
}

export default MyDatePicker