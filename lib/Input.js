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

var _MyDatePicker = require('./MyDatePicker.js');

var _MyDatePicker2 = _interopRequireDefault(_MyDatePicker);

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
            value: ''
        };

        _this.update = _this.update.bind(_this);
        return _this;
    }

    _createClass(Input, [{
        key: 'update',
        value: function update(e) {
            var val = void 0;
            val = e.target.value;
            this.setState({ value: e.target.value });
            var isValid = this.props.validate(val);

            this.props.updateForm(this.props.id, val, isValid);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var isValid = this.props.validate(this.state.value);
            this.props.updateForm(this.props.id, this.state.value, isValid);
        }
    }, {
        key: 'render',
        value: function render() {
            var element = void 0;
            var type = this.props.type;

            switch (type) {
                case 'datepicker':
                    element = _react2.default.createElement(_MyDatePicker2.default, {
                        id: this.props.id,
                        update: this.update,
                        className: this.props.className });
                    break;
                case 'select':
                    var options = [];
                    for (var i in this.props.options) {
                        var option = this.props.options[i];
                        options.push(_react2.default.createElement(
                            'option',
                            { key: option.value, value: option.value },
                            option.label
                        ));
                    }
                    element = _react2.default.createElement(
                        'select',
                        { className: this.props.className,
                            id: this.props.id,
                            value: '',
                            onChange: this.update },
                        options
                    );
                    break;
                case 'textarea':
                    element = _react2.default.createElement('textarea', { id: this.props.id, onChange: this.update });
                    break;
                case 'text':
                default:
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

            return _react2.default.createElement(
                'div',
                { className: 'rfl-field-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'rfl-label-container' },
                    _react2.default.createElement(
                        'label',
                        null,
                        this.props.label
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'rfl-input-container' },
                    element
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
    type: _react2.default.PropTypes.oneOf(['text', 'textarea', 'select', 'datepicker']),
    required: _react2.default.PropTypes.bool,
    placeholder: _react2.default.PropTypes.string,
    validate: _react2.default.PropTypes.func,
    options: _react2.default.PropTypes.array
};

Input.defaultProps = {
    className: '',
    type: 'text',
    required: false,
    placeholder: '',
    validate: function validate(prop) {
        // Default: not empty string
        return prop !== '';
    }
};

exports.default = Input;
module.exports = exports['default'];
//# sourceMappingURL=Input.js.map