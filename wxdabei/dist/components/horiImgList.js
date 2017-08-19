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

var horiImgList = function (_wepy$component) {
  _inherits(horiImgList, _wepy$component);

  function horiImgList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, horiImgList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = horiImgList.__proto__ || Object.getPrototypeOf(horiImgList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      imglist: {},
      horiimgitemhg: {},
      horiimgitemwd: {}
    }, _this.methods = {
      imgClick: function imgClick(event) {
        var theImgLink = event.target.dataset.imglink;
        (0, _utils.goto)(theImgLink);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return horiImgList;
}(_wepy2.default.component);

exports.default = horiImgList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcmlJbWdMaXN0LmpzIl0sIm5hbWVzIjpbImhvcmlJbWdMaXN0IiwicHJvcHMiLCJpbWdsaXN0IiwiaG9yaWltZ2l0ZW1oZyIsImhvcmlpbWdpdGVtd2QiLCJtZXRob2RzIiwiaW1nQ2xpY2siLCJldmVudCIsInRoZUltZ0xpbmsiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaW1nbGluayIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsSyxHQUFRO0FBQ05DLGVBQVMsRUFESDtBQUVOQyxxQkFBZSxFQUZUO0FBR05DLHFCQUFlO0FBSFQsSyxRQUtSQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDRUMsS0FERixFQUNTO0FBQ2YsWUFBSUMsYUFBYUQsTUFBTUUsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxPQUF0QztBQUNBLHlCQUFLSCxVQUFMO0FBQ0Q7QUFKTyxLOzs7O0VBTjZCLGVBQUtJLFM7O2tCQUF6QlosVyIsImZpbGUiOiJob3JpSW1nTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7Z290b30gZnJvbSAnLi4vdXRpbHMuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob3JpSW1nTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgaW1nbGlzdDoge30sXG4gICAgaG9yaWltZ2l0ZW1oZzoge30sXG4gICAgaG9yaWltZ2l0ZW13ZDoge31cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGltZ0NsaWNrIChldmVudCkge1xuICAgICAgbGV0IHRoZUltZ0xpbmsgPSBldmVudC50YXJnZXQuZGF0YXNldC5pbWdsaW5rXG4gICAgICBnb3RvKHRoZUltZ0xpbmspXG4gICAgfVxuICB9XG59XG4iXX0=