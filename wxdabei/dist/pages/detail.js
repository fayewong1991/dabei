'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _focusItem = require('./../components/focusItem.js');

var _focusItem2 = _interopRequireDefault(_focusItem);

var _data = require('./../mixins/data.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var detail = function (_wepy$page) {
  _inherits(detail, _wepy$page);

  function detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = detail.__proto__ || Object.getPrototypeOf(detail)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      detailData: {}
    }, _this.$props = { "focusitem": { "xmlns:v-bind": "", "v-bind:avatar.once": "detailData.focusItem.avatar", "v-bind:name.once": "detailData.focusItem.name", "v-bind:title.once": "detailData.focusItem.title", "v-bind:imglist.once": "detailData.focusItem.imglist", "v-bind:horiimgitemhg.once": "detailData.focusItem.imgHoriSize", "v-bind:horiimgitemwd.once": "detailData.focusItem.imgVerticalSize" } }, _this.$events = {}, _this.components = {
      focusitem: _focusItem2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(detail, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.detailData = _data.masterDetailData[options.detailId];
    }
  }]);

  return detail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(detail , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJkZXRhaWwiLCJkYXRhIiwiZGV0YWlsRGF0YSIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZm9jdXNpdGVtIiwib3B0aW9ucyIsImRldGFpbElkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEksR0FBTztBQUNMQyxrQkFBWTtBQURQLEssUUFHUkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQiw2QkFBeEMsRUFBc0Usb0JBQW1CLDJCQUF6RixFQUFxSCxxQkFBb0IsNEJBQXpJLEVBQXNLLHVCQUFzQiw4QkFBNUwsRUFBMk4sNkJBQTRCLGtDQUF2UCxFQUEwUiw2QkFBNEIsc0NBQXRULEVBQWIsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLOzs7OzsyQkFHRkMsTyxFQUFTO0FBQ2YsV0FBS0wsVUFBTCxHQUFrQix1QkFBaUJLLFFBQVFDLFFBQXpCLENBQWxCO0FBQ0Q7Ozs7RUFYaUMsZUFBS0MsSTs7a0JBQXBCVCxNIiwiZmlsZSI6ImRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgZm9jdXNJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9jdXNJdGVtJ1xuICBpbXBvcnQge21hc3RlckRldGFpbERhdGF9IGZyb20gJy4uL21peGlucy9kYXRhLmpzJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBkZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICBkZXRhaWxEYXRhOiB7fVxuICAgIH1cbiAgICRwcm9wcyA9IHtcImZvY3VzaXRlbVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YXZhdGFyLm9uY2VcIjpcImRldGFpbERhdGEuZm9jdXNJdGVtLmF2YXRhclwiLFwidi1iaW5kOm5hbWUub25jZVwiOlwiZGV0YWlsRGF0YS5mb2N1c0l0ZW0ubmFtZVwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcImRldGFpbERhdGEuZm9jdXNJdGVtLnRpdGxlXCIsXCJ2LWJpbmQ6aW1nbGlzdC5vbmNlXCI6XCJkZXRhaWxEYXRhLmZvY3VzSXRlbS5pbWdsaXN0XCIsXCJ2LWJpbmQ6aG9yaWltZ2l0ZW1oZy5vbmNlXCI6XCJkZXRhaWxEYXRhLmZvY3VzSXRlbS5pbWdIb3JpU2l6ZVwiLFwidi1iaW5kOmhvcmlpbWdpdGVtd2Qub25jZVwiOlwiZGV0YWlsRGF0YS5mb2N1c0l0ZW0uaW1nVmVydGljYWxTaXplXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGZvY3VzaXRlbTogZm9jdXNJdGVtXG4gICAgfVxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgdGhpcy5kZXRhaWxEYXRhID0gbWFzdGVyRGV0YWlsRGF0YVtvcHRpb25zLmRldGFpbElkXVxuICAgIH1cbiAgfVxuIl19