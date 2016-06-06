'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Form = require('./Form.js');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // npm modules


// Components


/*
    A "spec" is needed to generate input elements along with id, className
    and type.
    
    An "onSubmit" prop function is needed to communicate the values of the forms
 */

var Forms = function (_React$Component) {
    _inherits(Forms, _React$Component);

    function Forms(props) {
        _classCallCheck(this, Forms);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Forms).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Forms, [{
        key: 'submitClick',
        value: function submitClick() {
            var formValues = {};
            for (var i in this.props.specs) {
                var values = this.refs[i].gatherValues();
                formValues[i] = values;
            }
            this.props.onSubmit(formValues);
        }
    }, {
        key: 'render',
        value: function render() {
            var forms = [];
            for (var key in this.props.specs) {
                forms.push(_react2.default.createElement(_Form2.default, {
                    ref: key,
                    key: key,
                    spec: this.props.specs[key],
                    className: this.props.formContainerClass
                }));
            }

            return _react2.default.createElement(
                'div',
                { className: this.props.containerClass },
                _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '../node_modules/react-datepicker/dist/react-datepicker.min.css' }),
                forms,
                _react2.default.createElement(
                    'div',
                    { className: this.props.submitBtnContainerClass },
                    _react2.default.createElement(
                        'button',
                        { onClick: this.submitClick.bind(this) },
                        'Submit'
                    )
                )
            );
        }
    }]);

    return Forms;
}(_react2.default.Component);

Forms.propTypes = {
    specs: _react2.default.PropTypes.object.isRequired,
    containerClass: _react2.default.PropTypes.string,
    submitBtnContainerClass: _react2.default.PropTypes.string,
    formContainerClass: _react2.default.PropTypes.string,
    onSubmit: _react2.default.PropTypes.func.isRequired
};

Forms.defaultProps = {
    containerClass: 'rfl-forms-container',
    submitBtnContainerClass: 'rfl-submit-btn-container',
    formContainerClass: 'rfl-form-container'
};

exports.default = Forms;
module.exports = exports['default'];
//# sourceMappingURL=Forms.js.map