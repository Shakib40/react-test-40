"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Input = function Input() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Input");
};
var _default = exports["default"] = Input;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Textarea = function Textarea() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Textarea");
};
var _default = exports["default"] = Textarea;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _Input["default"];
  }
});
Object.defineProperty(exports, "Textarea", {
  enumerable: true,
  get: function get() {
    return _Textarea["default"];
  }
});
var _Input = _interopRequireDefault(require("./hooks/Input.js"));
var _Textarea = _interopRequireDefault(require("./hooks/Textarea.js"));
var _Convert = _interopRequireDefault(require("./hooks/Convert.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
