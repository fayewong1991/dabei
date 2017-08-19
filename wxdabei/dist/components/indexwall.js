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
      wallimagelines: {},
      isneedshowlike: {
        type: Boolean,
        default: true
      },
      imgunitwd: {
        type: String,
        default: '338rpx'
      },
      imgunithg: {
        type: String,
        default: '606rpx'
      }
    }, _this.methods = {
      imgClick: function imgClick(event) {
        var theImgLink = event.target.dataset.imglink;
        if (this.isNeedShowLike) {
          (0, _utils.goto)(theImgLink);
        } else {
          _wepy2.default.previewImage({
            urls: [theImgLink]
          });
        }
      },
      addLike: function addLike(event) {
        var theImgItem = event.target.dataset.belongItem;
        theImgItem.likeNumber && theImgItem.likeNumber++;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return indexwall;
}(_wepy2.default.component);

exports.default = indexwall;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4d2FsbC5qcyJdLCJuYW1lcyI6WyJpbmRleHdhbGwiLCJwcm9wcyIsIndhbGxpbWFnZWxpbmVzIiwiaXNuZWVkc2hvd2xpa2UiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJpbWd1bml0d2QiLCJTdHJpbmciLCJpbWd1bml0aGciLCJtZXRob2RzIiwiaW1nQ2xpY2siLCJldmVudCIsInRoZUltZ0xpbmsiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaW1nbGluayIsImlzTmVlZFNob3dMaWtlIiwicHJldmlld0ltYWdlIiwidXJscyIsImFkZExpa2UiLCJ0aGVJbWdJdGVtIiwiYmVsb25nSXRlbSIsImxpa2VOdW1iZXIiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxzQkFBZ0IsRUFEVjtBQUVOQyxzQkFBZ0I7QUFDZEMsY0FBTUMsT0FEUTtBQUVkQyxpQkFBUztBQUZLLE9BRlY7QUFNTkMsaUJBQVc7QUFDVEgsY0FBTUksTUFERztBQUVURixpQkFBUztBQUZBLE9BTkw7QUFVTkcsaUJBQVc7QUFDVEwsY0FBTUksTUFERztBQUVURixpQkFBUztBQUZBO0FBVkwsSyxRQWVSSSxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDRUMsS0FERixFQUNTO0FBQ2YsWUFBSUMsYUFBYUQsTUFBTUUsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxPQUF0QztBQUNBLFlBQUksS0FBS0MsY0FBVCxFQUF5QjtBQUN2QiwyQkFBS0osVUFBTDtBQUNELFNBRkQsTUFFTztBQUNMLHlCQUFLSyxZQUFMLENBQWtCO0FBQ2hCQyxrQkFBTSxDQUFDTixVQUFEO0FBRFUsV0FBbEI7QUFHRDtBQUNGLE9BVk87QUFXUk8sYUFYUSxtQkFXQ1IsS0FYRCxFQVdRO0FBQ2QsWUFBSVMsYUFBYVQsTUFBTUUsTUFBTixDQUFhQyxPQUFiLENBQXFCTyxVQUF0QztBQUNBRCxtQkFBV0UsVUFBWCxJQUEwQkYsV0FBV0UsVUFBWCxFQUExQjtBQUNEO0FBZE8sSzs7OztFQWhCMkIsZUFBS0MsUzs7a0JBQXZCeEIsUyIsImZpbGUiOiJpbmRleHdhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge2dvdG99IGZyb20gJy4uL3V0aWxzLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5kZXh3YWxsIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICB3YWxsaW1hZ2VsaW5lczoge30sXG4gICAgaXNuZWVkc2hvd2xpa2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBpbWd1bml0d2Q6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICczMzhycHgnXG4gICAgfSxcbiAgICBpbWd1bml0aGc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICc2MDZycHgnXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaW1nQ2xpY2sgKGV2ZW50KSB7XG4gICAgICBsZXQgdGhlSW1nTGluayA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmltZ2xpbmtcbiAgICAgIGlmICh0aGlzLmlzTmVlZFNob3dMaWtlKSB7XG4gICAgICAgIGdvdG8odGhlSW1nTGluaylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICB1cmxzOiBbdGhlSW1nTGlua11cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZExpa2UgKGV2ZW50KSB7XG4gICAgICBsZXQgdGhlSW1nSXRlbSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmJlbG9uZ0l0ZW1cbiAgICAgIHRoZUltZ0l0ZW0ubGlrZU51bWJlciAmJiAodGhlSW1nSXRlbS5saWtlTnVtYmVyICsrKVxuICAgIH1cbiAgfVxufVxuIl19