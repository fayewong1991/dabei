'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _horiImgList = require('./horiImgList.js');

var _horiImgList2 = _interopRequireDefault(_horiImgList);

var _focusOne = require('./focusOne.js');

var _focusOne2 = _interopRequireDefault(_focusOne);

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
      imglist: {},
      horiimgitemhg: '',
      horiimgitemwd: ''
    }, _this.data = {
      isDetail: false
    }, _this.$props = { "focusitemimgs": { "v-bind:imglist.once": "imglist", "v-bind:horiimgitemhg.once": "horiimgitemhg", "v-bind:horiimgitemwd.once": "horiimgitemwd" }, "focusone": { "xmlns:v-bind": "", "v-bind:avatar.once": "avatar", "v-bind:name.once": "name", "v-bind:title.once": "title", "v-bind:isdetail.once": "isDetail" } }, _this.$events = {}, _this.components = {
      focusitemimgs: _horiImgList2.default,
      focusone: _focusOne2.default
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return focusItem;
}(_wepy2.default.component);

exports.default = focusItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvY3VzSXRlbS5qcyJdLCJuYW1lcyI6WyJmb2N1c0l0ZW0iLCJwcm9wcyIsImF2YXRhciIsIm5hbWUiLCJ0aXRsZSIsImltZ2xpc3QiLCJob3JpaW1naXRlbWhnIiwiaG9yaWltZ2l0ZW13ZCIsImRhdGEiLCJpc0RldGFpbCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZm9jdXNpdGVtaW1ncyIsImZvY3Vzb25lIiwibWV0aG9kcyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxjQUFRLEVBREY7QUFFTkMsWUFBTSxFQUZBO0FBR05DLGFBQU8sRUFIRDtBQUlOQyxlQUFTLEVBSkg7QUFLTkMscUJBQWUsRUFMVDtBQU1OQyxxQkFBZTtBQU5ULEssUUFRUkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBREwsSyxRQUdSQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyx1QkFBc0IsU0FBdkIsRUFBaUMsNkJBQTRCLGVBQTdELEVBQTZFLDZCQUE0QixlQUF6RyxFQUFqQixFQUEySSxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsc0JBQXFCLFFBQXhDLEVBQWlELG9CQUFtQixNQUFwRSxFQUEyRSxxQkFBb0IsT0FBL0YsRUFBdUcsd0JBQXVCLFVBQTlILEVBQXRKLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLDBDQURVO0FBRVZDO0FBRlUsSyxRQUlaQyxPLEdBQVUsRTs7OztFQWxCMkIsZUFBS0MsUzs7a0JBQXZCaEIsUyIsImZpbGUiOiJmb2N1c0l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgaG9yaUltZ0xpc3QgZnJvbSAnLi9ob3JpSW1nTGlzdCdcbmltcG9ydCBmb2N1c09uZSBmcm9tICcuL2ZvY3VzT25lJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZm9jdXNJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBhdmF0YXI6IHt9LFxuICAgIG5hbWU6IHt9LFxuICAgIHRpdGxlOiB7fSxcbiAgICBpbWdsaXN0OiB7fSxcbiAgICBob3JpaW1naXRlbWhnOiAnJyxcbiAgICBob3JpaW1naXRlbXdkOiAnJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaXNEZXRhaWw6IGZhbHNlXG4gIH1cbiAkcHJvcHMgPSB7XCJmb2N1c2l0ZW1pbWdzXCI6e1widi1iaW5kOmltZ2xpc3Qub25jZVwiOlwiaW1nbGlzdFwiLFwidi1iaW5kOmhvcmlpbWdpdGVtaGcub25jZVwiOlwiaG9yaWltZ2l0ZW1oZ1wiLFwidi1iaW5kOmhvcmlpbWdpdGVtd2Qub25jZVwiOlwiaG9yaWltZ2l0ZW13ZFwifSxcImZvY3Vzb25lXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphdmF0YXIub25jZVwiOlwiYXZhdGFyXCIsXCJ2LWJpbmQ6bmFtZS5vbmNlXCI6XCJuYW1lXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2RldGFpbC5vbmNlXCI6XCJpc0RldGFpbFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgZm9jdXNpdGVtaW1nczogaG9yaUltZ0xpc3QsXG4gICAgZm9jdXNvbmU6IGZvY3VzT25lXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxufVxuIl19