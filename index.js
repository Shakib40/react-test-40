"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Input = exports.Input = function Input() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Input");
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Textarea = exports.Textarea = function Textarea() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Textarea");
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Input = _interopRequireDefault(require("./hooks/Input"));
var _Textarea = _interopRequireDefault(require("./hooks/Textarea"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  Input: _Input["default"],
  Textarea: _Textarea["default"]
};
