'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _focusItem = require('./../components/focusItem.js');

var _focusItem2 = _interopRequireDefault(_focusItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搭配师'
    }, _this.$props = { "masteritem": { "xmlns:v-bind": "", "v-bind:name.once": "masterItem.name", "v-bind:avatar.once": "masterItem.avatar", "v-bind:title.once": "masterItem.title", "v-bind:imglist.once": "masterItem.imglist", "v-bind:horiimgitemhg.once": "masterItem.imgHgSize", "v-bind:horiimgitemwd.once": "imgWdSize" } }, _this.$events = {}, _this.components = {
      masteritem: _focusItem2.default
    }, _this.data = {
      masterList: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/masterlist'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlcmxpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtYXN0ZXJpdGVtIiwiZGF0YSIsIm1hc3Rlckxpc3QiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLGlCQUF0QyxFQUF3RCxzQkFBcUIsbUJBQTdFLEVBQWlHLHFCQUFvQixrQkFBckgsRUFBd0ksdUJBQXNCLG9CQUE5SixFQUFtTCw2QkFBNEIsc0JBQS9NLEVBQXNPLDZCQUE0QixXQUFsUSxFQUFkLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJLEdBQU87QUFDTEMsa0JBQVk7QUFEUCxLOzs7O0VBVDBCLGVBQUtDLEk7O2tCQUFuQlQsSyIsImZpbGUiOiJtYXN0ZXJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBtYXN0ZXJJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9jdXNJdGVtJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aQremFjeW4iCdcbiAgICB9XG4gICAkcHJvcHMgPSB7XCJtYXN0ZXJpdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpuYW1lLm9uY2VcIjpcIm1hc3Rlckl0ZW0ubmFtZVwiLFwidi1iaW5kOmF2YXRhci5vbmNlXCI6XCJtYXN0ZXJJdGVtLmF2YXRhclwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcIm1hc3Rlckl0ZW0udGl0bGVcIixcInYtYmluZDppbWdsaXN0Lm9uY2VcIjpcIm1hc3Rlckl0ZW0uaW1nbGlzdFwiLFwidi1iaW5kOmhvcmlpbWdpdGVtaGcub25jZVwiOlwibWFzdGVySXRlbS5pbWdIZ1NpemVcIixcInYtYmluZDpob3JpaW1naXRlbXdkLm9uY2VcIjpcImltZ1dkU2l6ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBtYXN0ZXJpdGVtOiBtYXN0ZXJJdGVtXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBtYXN0ZXJMaXN0OiBbXVxuICAgIH1cbiAgfVxuIl19