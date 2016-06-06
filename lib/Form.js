'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Input = require('./Input.js');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


/*
    Form Component
 */

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Form, [{
        key: 'displayErrors',
        value: function displayErrors() {
            var name = this.props.spec.name;
            if (this.props.displayErrors) {
                for (var id in this.state) {
                    this.refs[name + '.' + id].showErrors();
                }
            }
        }
    }, {
        key: 'gatherValues',
        value: function gatherValues() {
            this.displayErrors();
            return this.state;
        }
    }, {
        key: 'update',
        value: function update(id, val, isValid) {
            this.state[id] = { val: val, isValid: isValid };
        }
    }, {
        key: 'render',
        value: function render() {
            var inputs = [];
            for (var i in this.props.spec.fields) {
                var id = this.props.spec.name + '.' + this.props.spec.fields[i].id;
                inputs.push(_react2.default.createElement(_Input2.default, _extends({
                    ref: id,
                    key: id
                }, this.props.spec.fields[i], {
                    updateForm: this.update.bind(this)
                })));
            }
            return _react2.default.createElement(
                'div',
                { className: this.props.className },
                inputs
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

Form.propTypes = {
    spec: _react2.default.PropTypes.object.isRequired,
    className: _react2.default.PropTypes.string
};

exports.default = Form;
module.exports = exports['default'];
//# sourceMappingURL=Form.js.map