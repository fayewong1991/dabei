'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _horiImgList = require('./horiImgList.js');

var _horiImgList2 = _interopRequireDefault(_horiImgList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var focusItem = function (_wepy$component) {
  _inherits(focusItem, _wepy$component);

  function focusItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, focusItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = focusItem.__proto__ || Object.getPrototypeOf(focusItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      avatar: {},
      name: {},
      title: {},
      imglist: {}
    }, _this.data = {
      focusStatus: '＋关注'
    }, _this.$props = { "focusitemimgs": { "xmlns:v-bind": "", "v-bind:imglist.once": "imglist" } }, _this.$events = {}, _this.components = {
      focusitemimgs: _horiImgList2.default
    }, _this.methods = {
      addFocus: function addFocus() {
        this.focusStatus = '已关注';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return focusItem;
}(_wepy2.default.component);

exports.default = focusItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvY3VzSXRlbS5qcyJdLCJuYW1lcyI6WyJmb2N1c0l0ZW0iLCJwcm9wcyIsImF2YXRhciIsIm5hbWUiLCJ0aXRsZSIsImltZ2xpc3QiLCJkYXRhIiwiZm9jdXNTdGF0dXMiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImZvY3VzaXRlbWltZ3MiLCJtZXRob2RzIiwiYWRkRm9jdXMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLGNBQVEsRUFERjtBQUVOQyxZQUFNLEVBRkE7QUFHTkMsYUFBTyxFQUhEO0FBSU5DLGVBQVM7QUFKSCxLLFFBTVJDLEksR0FBTztBQUNMQyxtQkFBYTtBQURSLEssUUFHUkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQWpCLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUdaQyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDSTtBQUNWLGFBQUtOLFdBQUwsR0FBbUIsS0FBbkI7QUFDRDtBQUhPLEs7Ozs7RUFmMkIsZUFBS08sUzs7a0JBQXZCZCxTIiwiZmlsZSI6ImZvY3VzSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBob3JpSW1nTGlzdCBmcm9tICcuL2hvcmlJbWdMaXN0LndweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvY3VzSXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgYXZhdGFyOiB7fSxcbiAgICBuYW1lOiB7fSxcbiAgICB0aXRsZToge30sXG4gICAgaW1nbGlzdDoge31cbiAgfVxuICBkYXRhID0ge1xuICAgIGZvY3VzU3RhdHVzOiAn77yL5YWz5rOoJ1xuICB9XG4gJHByb3BzID0ge1wiZm9jdXNpdGVtaW1nc1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW1nbGlzdC5vbmNlXCI6XCJpbWdsaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBmb2N1c2l0ZW1pbWdzOiBob3JpSW1nTGlzdFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYWRkRm9jdXMgKCkge1xuICAgICAgdGhpcy5mb2N1c1N0YXR1cyA9ICflt7LlhbPms6gnXG4gICAgfVxuICB9XG59XG4iXX0=