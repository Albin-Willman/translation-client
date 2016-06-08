'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Well = require('react-bootstrap/lib/Well');

var _Well2 = _interopRequireDefault(_Well);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _InputGroup = require('react-bootstrap/lib/InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
  _inherits(LoginPage, _React$Component);

  function LoginPage() {
    _classCallCheck(this, LoginPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginPage).apply(this, arguments));
  }

  _createClass(LoginPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var onUsernameChange = _props.onUsernameChange;
      var onPasswordChange = _props.onPasswordChange;
      var submit = _props.submit;
      var title = _props.title;
      var user = _props.user;

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Col2.default,
          { md: 4, mdOffset: 4 },
          _react2.default.createElement(
            _Well2.default,
            null,
            _react2.default.createElement(
              _FormGroup2.default,
              null,
              _react2.default.createElement(_FormControl2.default, {
                type: 'text',
                placeholder: 'Username',
                onChange: function onChange(e) {
                  return onUsernameChange(e.target.value);
                },
                value: user.username
              })
            ),
            _react2.default.createElement(
              _FormGroup2.default,
              null,
              _react2.default.createElement(_FormControl2.default, {
                type: 'password',
                placeholder: 'Password',
                onChange: function onChange(e) {
                  return onPasswordChange(e.target.value);
                },
                value: user.password
              })
            ),
            _react2.default.createElement(
              _Button2.default,
              { block: true, bsStyle: 'primary', onClick: submit },
              title
            )
          )
        )
      );
    }
  }]);

  return LoginPage;
}(_react2.default.Component);

LoginPage.defaultProps = {
  user: {},
  onUsernameChange: function onUsernameChange($) {},
  onPasswordChange: function onPasswordChange($) {},
  submit: function submit($) {},
  title: ''
};

exports.default = LoginPage;