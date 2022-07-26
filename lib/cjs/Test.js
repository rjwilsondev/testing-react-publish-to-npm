"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = Test;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Test(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? "World" : _ref$name;
  return /*#__PURE__*/_react["default"].createElement("div", null, "Hello ", name);
}