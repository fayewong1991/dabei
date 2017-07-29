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

var searchBar = function (_wepy$component) {
  _inherits(searchBar, _wepy$component);

  function searchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, searchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchBar.__proto__ || Object.getPrototypeOf(searchBar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      recommendList: {}
    }, _this.data = {
      searchPlaceholder: '搜索',
      inputHasFocus: false
    }, _this.methods = {
      searchFocus: function searchFocus() {
        this.inputHasFocus = true;
      },
      searchBlur: function searchBlur(event) {
        if (event.target.value === '') {
          this.inputHasFocus = false;
        }
      },
      clearRecommendData: function clearRecommendData() {
        this.recommendList = null;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return searchBar;
}(_wepy2.default.component);

exports.default = searchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaEJhci5qcyJdLCJuYW1lcyI6WyJzZWFyY2hCYXIiLCJwcm9wcyIsInJlY29tbWVuZExpc3QiLCJkYXRhIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJpbnB1dEhhc0ZvY3VzIiwibWV0aG9kcyIsInNlYXJjaEZvY3VzIiwic2VhcmNoQmx1ciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjbGVhclJlY29tbWVuZERhdGEiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxxQkFBZTtBQURULEssUUFHUkMsSSxHQUFPO0FBQ0xDLHlCQUFtQixJQURkO0FBRUxDLHFCQUFlO0FBRlYsSyxRQUlQQyxPLEdBQVU7QUFDUkMsaUJBRFEseUJBQ087QUFDYixhQUFLRixhQUFMLEdBQXFCLElBQXJCO0FBQ0QsT0FITztBQUlSRyxnQkFKUSxzQkFJSUMsS0FKSixFQUlXO0FBQ2pCLFlBQUlBLE1BQU1DLE1BQU4sQ0FBYUMsS0FBYixLQUF1QixFQUEzQixFQUErQjtBQUM3QixlQUFLTixhQUFMLEdBQXFCLEtBQXJCO0FBQ0Q7QUFDRixPQVJPO0FBU1JPLHdCQVRRLGdDQVNjO0FBQ3BCLGFBQUtWLGFBQUwsR0FBcUIsSUFBckI7QUFDRDtBQVhPLEs7Ozs7RUFSMkIsZUFBS1csUzs7a0JBQXZCYixTIiwiZmlsZSI6InNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaEJhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgcmVjb21tZW5kTGlzdDoge31cbiAgfVxuICBkYXRhID0ge1xuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAn5pCc57SiJyxcbiAgICBpbnB1dEhhc0ZvY3VzOiBmYWxzZVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VhcmNoRm9jdXMgKCkge1xuICAgICAgdGhpcy5pbnB1dEhhc0ZvY3VzID0gdHJ1ZVxuICAgIH0sXG4gICAgc2VhcmNoQmx1ciAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuaW5wdXRIYXNGb2N1cyA9IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBjbGVhclJlY29tbWVuZERhdGEgKCkge1xuICAgICAgdGhpcy5yZWNvbW1lbmRMaXN0ID0gbnVsbFxuICAgIH1cbiAgfVxufVxuIl19