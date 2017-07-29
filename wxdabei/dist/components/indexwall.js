'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var indexwall = function (_wepy$component) {
  _inherits(indexwall, _wepy$component);

  function indexwall() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, indexwall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = indexwall.__proto__ || Object.getPrototypeOf(indexwall)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      wallImageLines: {}
    }, _this.methods = {
      imgClick: function imgClick(event) {
        var theImgLink = event.target.dataset.imglink;
        (0, _utils.goto)(theImgLink);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return indexwall;
}(_wepy2.default.component);

exports.default = indexwall;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4d2FsbC5qcyJdLCJuYW1lcyI6WyJpbmRleHdhbGwiLCJwcm9wcyIsIndhbGxJbWFnZUxpbmVzIiwibWV0aG9kcyIsImltZ0NsaWNrIiwiZXZlbnQiLCJ0aGVJbWdMaW5rIiwidGFyZ2V0IiwiZGF0YXNldCIsImltZ2xpbmsiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxzQkFBZ0I7QUFEVixLLFFBR1JDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNFQyxLQURGLEVBQ1M7QUFDZixZQUFJQyxhQUFhRCxNQUFNRSxNQUFOLENBQWFDLE9BQWIsQ0FBcUJDLE9BQXRDO0FBQ0EseUJBQUtILFVBQUw7QUFDRDtBQUpPLEs7Ozs7RUFKMkIsZUFBS0ksUzs7a0JBQXZCVixTIiwiZmlsZSI6ImluZGV4d2FsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7Z290b30gZnJvbSAnLi4vdXRpbHMuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmRleHdhbGwgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHdhbGxJbWFnZUxpbmVzOiB7fVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaW1nQ2xpY2sgKGV2ZW50KSB7XG4gICAgICBsZXQgdGhlSW1nTGluayA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmltZ2xpbmtcbiAgICAgIGdvdG8odGhlSW1nTGluaylcbiAgICB9XG4gIH1cbn1cbiJdfQ==