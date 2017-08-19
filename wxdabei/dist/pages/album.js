'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _indexwall = require('./../components/indexwall.js');

var _indexwall2 = _interopRequireDefault(_indexwall);

var _data = require('./../mixins/data.js');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var album = function (_wepy$page) {
  _inherits(album, _wepy$page);

  function album() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, album);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = album.__proto__ || Object.getPrototypeOf(album)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      isAlbumNeedLike: false,
      albumImageLines: []
    }, _this.$props = { "albumwall": { "xmlns:v-bind": "", "v-bind:wallimagelines.once": "albumImageLines", "v-bind:isneedshowlike.once": "isAlbumNeedLike", "imgunitwd": "246rpx", "imunit-hg": "246rpx" } }, _this.$events = {}, _this.components = {
      albumwall: _indexwall2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(album, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.albumImageLines = _data2.default[options.masterId];
    }
  }]);

  return album;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(album , 'pages/album'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLmpzIl0sIm5hbWVzIjpbImFsYnVtIiwiZGF0YSIsImlzQWxidW1OZWVkTGlrZSIsImFsYnVtSW1hZ2VMaW5lcyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYWxidW13YWxsIiwib3B0aW9ucyIsIm1hc3RlcklkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSSxHQUFPO0FBQ0xDLHVCQUFpQixLQURaO0FBRUxDLHVCQUFpQjtBQUZaLEssUUFJUkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDhCQUE2QixpQkFBaEQsRUFBa0UsOEJBQTZCLGlCQUEvRixFQUFpSCxhQUFZLFFBQTdILEVBQXNJLGFBQVksUUFBbEosRUFBYixFLFFBQ1ZDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEs7Ozs7OzJCQUdKQyxPLEVBQVM7QUFDZixXQUFLTCxlQUFMLEdBQXVCLGVBQWtCSyxRQUFRQyxRQUExQixDQUF2QjtBQUNEOzs7O0VBWmdDLGVBQUtDLEk7O2tCQUFuQlYsSyIsImZpbGUiOiJhbGJ1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBhbGJ1bVdhbGwgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleHdhbGwnXG5pbXBvcnQgbWFzdGVyUGVyc29uYUltZ3MgZnJvbSAnLi4vbWl4aW5zL2RhdGEuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhbGJ1bSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgaXNBbGJ1bU5lZWRMaWtlOiBmYWxzZSxcbiAgICBhbGJ1bUltYWdlTGluZXM6IFtdXG4gIH1cbiAkcHJvcHMgPSB7XCJhbGJ1bXdhbGxcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOndhbGxpbWFnZWxpbmVzLm9uY2VcIjpcImFsYnVtSW1hZ2VMaW5lc1wiLFwidi1iaW5kOmlzbmVlZHNob3dsaWtlLm9uY2VcIjpcImlzQWxidW1OZWVkTGlrZVwiLFwiaW1ndW5pdHdkXCI6XCIyNDZycHhcIixcImltdW5pdC1oZ1wiOlwiMjQ2cnB4XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBhbGJ1bXdhbGw6IGFsYnVtV2FsbFxuICB9XG4gIG9uTG9hZCAob3B0aW9ucykge1xuICAgIHRoaXMuYWxidW1JbWFnZUxpbmVzID0gbWFzdGVyUGVyc29uYUltZ3Nbb3B0aW9ucy5tYXN0ZXJJZF1cbiAgfVxufVxuIl19