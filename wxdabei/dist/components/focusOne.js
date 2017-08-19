'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      isdetail: {},
      isneedtitle: {
        type: Boolean,
        default: true
      },
      isneedfocus: {
        type: Boolean,
        default: true
      }
    }, _this.data = {
      focusStatus: '＋关注'
    }, _this.computed = {
      avatarSize: function avatarSize() {
        return this.isdetail ? '168rpx' : '80rpx';
      },
      avatarMr: function avatarMr() {
        return this.isdetail ? '36rpx' : '18rpx';
      },
      nameFontsize: function nameFontsize() {
        return this.isdetail ? '48rpx' : '30rpx';
      }
    }, _this.methods = {
      addFocus: function addFocus() {
        this.focusStatus = '已关注';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return focusItem;
}(_wepy2.default.component);

exports.default = focusItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvY3VzT25lLmpzIl0sIm5hbWVzIjpbImZvY3VzSXRlbSIsInByb3BzIiwiYXZhdGFyIiwibmFtZSIsInRpdGxlIiwiaXNkZXRhaWwiLCJpc25lZWR0aXRsZSIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsImlzbmVlZGZvY3VzIiwiZGF0YSIsImZvY3VzU3RhdHVzIiwiY29tcHV0ZWQiLCJhdmF0YXJTaXplIiwiYXZhdGFyTXIiLCJuYW1lRm9udHNpemUiLCJtZXRob2RzIiwiYWRkRm9jdXMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxjQUFRLEVBREY7QUFFTkMsWUFBTSxFQUZBO0FBR05DLGFBQU8sRUFIRDtBQUlOQyxnQkFBVSxFQUpKO0FBS05DLG1CQUFhO0FBQ1hDLGNBQU1DLE9BREs7QUFFWEMsaUJBQVM7QUFGRSxPQUxQO0FBU05DLG1CQUFhO0FBQ1hILGNBQU1DLE9BREs7QUFFWEMsaUJBQVM7QUFGRTtBQVRQLEssUUFjUkUsSSxHQUFPO0FBQ0xDLG1CQUFhO0FBRFIsSyxRQUdQQyxRLEdBQVc7QUFDVEMsZ0JBRFMsd0JBQ0s7QUFDWixlQUFPLEtBQUtULFFBQUwsR0FBZ0IsUUFBaEIsR0FBMkIsT0FBbEM7QUFDRCxPQUhRO0FBSVRVLGNBSlMsc0JBSUc7QUFDVixlQUFPLEtBQUtWLFFBQUwsR0FBZ0IsT0FBaEIsR0FBMEIsT0FBakM7QUFDRCxPQU5RO0FBT1RXLGtCQVBTLDBCQU9PO0FBQ2QsZUFBTyxLQUFLWCxRQUFMLEdBQWdCLE9BQWhCLEdBQTBCLE9BQWpDO0FBQ0Q7QUFUUSxLLFFBV1hZLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNJO0FBQ1YsYUFBS04sV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBSE8sSzs7OztFQTdCMkIsZUFBS08sUzs7a0JBQXZCbkIsUyIsImZpbGUiOiJmb2N1c09uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvY3VzSXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgYXZhdGFyOiB7fSxcbiAgICBuYW1lOiB7fSxcbiAgICB0aXRsZToge30sXG4gICAgaXNkZXRhaWw6IHt9LFxuICAgIGlzbmVlZHRpdGxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgaXNuZWVkZm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgZm9jdXNTdGF0dXM6ICfvvIvlhbPms6gnXG4gIH1cbiAgY29tcHV0ZWQgPSB7XG4gICAgYXZhdGFyU2l6ZSAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc2RldGFpbCA/ICcxNjhycHgnIDogJzgwcnB4J1xuICAgIH0sXG4gICAgYXZhdGFyTXIgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNkZXRhaWwgPyAnMzZycHgnIDogJzE4cnB4J1xuICAgIH0sXG4gICAgbmFtZUZvbnRzaXplICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzZGV0YWlsID8gJzQ4cnB4JyA6ICczMHJweCdcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhZGRGb2N1cyAoKSB7XG4gICAgICB0aGlzLmZvY3VzU3RhdHVzID0gJ+W3suWFs+azqCdcbiAgICB9XG4gIH1cbn1cbiJdfQ==