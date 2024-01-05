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
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _Input.Input;
  }
});
Object.defineProperty(exports, "Textarea", {
  enumerable: true,
  get: function get() {
    return _Textarea.Textarea;
  }
});
var _Input = require("./hooks/Input.js");
var _Textarea = require("./hooks/Textarea.js");
