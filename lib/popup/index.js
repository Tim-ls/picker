'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseModal = require('../modal/BaseModal');

var _BaseModal2 = _interopRequireDefault(_BaseModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  visible: _propTypes2.default.bool.isRequired,
  onConfirm: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired
};

var Popup = function (_React$Component) {
  _inherits(Popup, _React$Component);

  function Popup() {
    _classCallCheck(this, Popup);

    return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this));
  }

  _createClass(Popup, [{
    key: 'handleCancel',
    value: function handleCancel() {
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    }
  }, {
    key: 'handleConfirm',
    value: function handleConfirm() {
      if (this.props.onConfirm) {
        this.props.onConfirm();
      }
    }

    /**
     * 使用原生事件替代react事件
     * 当BaseModal modal使用原生事件来阻止冒泡时
     * 完成与取消按钮的react onClick会失效，所以使用原生事件而不使用react事件
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.refs.confirmButton && !this.refs.confirmButton.onclick) {

        this.refs.confirmButton.onclick = function (e) {
          e.stopPropagation();
          _this2.handleConfirm();
        };
        this.refs.cancelButton.onclick = function (e) {
          e.stopPropagation();
          _this2.handleCancel();
        };
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var isZh = !navigator.language || navigator.language.toLowerCase() === 'zh-cn' || navigator.language.toLowerCase() === 'zh';
      var text1 = !isZh ? 'Cancel' : '取消';
      var text2 = !isZh ? 'Finish' : '完成';
      return _react2.default.createElement(
        _BaseModal2.default,
        {
          onCancel: this.handleCancel.bind(this),
          visible: this.props.visible },
        _react2.default.createElement(
          'div',
          { className: 'ui-popup-title' },
          _react2.default.createElement(
            'span',
            { ref: 'cancelButton' },
            text1
          ),
          _react2.default.createElement(
            'span',
            { ref: 'confirmButton' },
            text2
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'ui-popup-content' },
          this.props.children
        )
      );
    }
  }]);

  return Popup;
}(_react2.default.Component);

Popup.propTypes = propTypes;

exports.default = Popup;
//# sourceMappingURL=index.js.map