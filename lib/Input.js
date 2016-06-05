'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // npm modules


var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

        _this.state = {
            value: '',
            showErrorText: false
        };

        if (_this.props.type === 'datepicker') {
            _this.state.startDate = (0, _moment2.default)();
            _this.state.value = (0, _moment2.default)().format('YYYY/MM/DD');
        }

        _this.update = _this.update.bind(_this);
        return _this;
    }

    _createClass(Input, [{
        key: 'update',
        value: function update(e) {
            var val = void 0;
            if (this.props.type === 'datepicker') {
                val = e.format('YYYY/MM/DD');
                this.setState({ startDate: e, value: val });
            } else {
                val = e.target.value;
                this.setState({ value: e.target.value });
            }
            var isValid = this.props.validate(val);

            this.props.updateForm(this.props.id, val, isValid);
        }
    }, {
        key: 'showErrors',
        value: function showErrors() {
            this.setState({ showErrorText: true });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.updateForm(this.props.id, this.state.value, this.props.validate(this.state.value));
        }
    }, {
        key: 'render',
        value: function render() {
            var element = void 0;
            var type = this.props.type === 'datepicker' ? 'text' : this.props.type;
            if (this.props.type === 'datepicker') {
                element = _react2.default.createElement(_reactDatepicker2.default, {
                    key: 'datepicker',
                    selected: this.state.startDate,
                    onChange: this.update,
                    className: this.props.className });
            } else {
                element = _react2.default.createElement('input', {
                    key: 'input',
                    id: this.props.id,
                    type: type,
                    className: this.props.className,
                    placeholder: this.props.placeholder,
                    onChange: this.update,
                    value: this.state.value
                });
            }

            var elements = [element];
            if (this.state.showErrorText && !this.props.validate(this.state.value)) {
                elements.push(_react2.default.createElement(
                    'p',
                    { key: 'error-text', className: 'error-text' },
                    this.props.errorText
                ));
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    this.props.label
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    elements
                )
            );
        }
    }]);

    return Input;
}(_react2.default.Component);

Input.propTypes = {
    id: _react2.default.PropTypes.string.isRequired,
    label: _react2.default.PropTypes.string.isRequired,
    className: _react2.default.PropTypes.string,
    type: _react2.default.PropTypes.string,
    required: _react2.default.PropTypes.bool,
    placeholder: _react2.default.PropTypes.string,
    validate: _react2.default.PropTypes.func,
    errorText: _react2.default.PropTypes.string
};

Input.defaultProps = {
    className: '',
    type: 'text',
    required: false,
    placeholder: '',
    validate: function validate(prop) {
        // Default: not empty string
        return prop !== '';
    },
    errorText: 'This field cannot be empty.'
};

exports.default = Input;
module.exports = exports['default'];
//# sourceMappingURL=Input.js.map