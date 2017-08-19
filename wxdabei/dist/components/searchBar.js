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
      recommendlist: {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaEJhci5qcyJdLCJuYW1lcyI6WyJzZWFyY2hCYXIiLCJwcm9wcyIsInJlY29tbWVuZGxpc3QiLCJkYXRhIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJpbnB1dEhhc0ZvY3VzIiwibWV0aG9kcyIsInNlYXJjaEZvY3VzIiwic2VhcmNoQmx1ciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjbGVhclJlY29tbWVuZERhdGEiLCJyZWNvbW1lbmRMaXN0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTkMscUJBQWU7QUFEVCxLLFFBR1JDLEksR0FBTztBQUNMQyx5QkFBbUIsSUFEZDtBQUVMQyxxQkFBZTtBQUZWLEssUUFJUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHlCQUNPO0FBQ2IsYUFBS0YsYUFBTCxHQUFxQixJQUFyQjtBQUNELE9BSE87QUFJUkcsZ0JBSlEsc0JBSUlDLEtBSkosRUFJVztBQUNqQixZQUFJQSxNQUFNQyxNQUFOLENBQWFDLEtBQWIsS0FBdUIsRUFBM0IsRUFBK0I7QUFDN0IsZUFBS04sYUFBTCxHQUFxQixLQUFyQjtBQUNEO0FBQ0YsT0FSTztBQVNSTyx3QkFUUSxnQ0FTYztBQUNwQixhQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0Q7QUFYTyxLOzs7O0VBUjJCLGVBQUtDLFM7O2tCQUF2QmQsUyIsImZpbGUiOiJzZWFyY2hCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hCYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHJlY29tbWVuZGxpc3Q6IHt9XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ+aQnOe0oicsXG4gICAgaW5wdXRIYXNGb2N1czogZmFsc2VcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNlYXJjaEZvY3VzICgpIHtcbiAgICAgIHRoaXMuaW5wdXRIYXNGb2N1cyA9IHRydWVcbiAgICB9LFxuICAgIHNlYXJjaEJsdXIgKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnJykge1xuICAgICAgICB0aGlzLmlucHV0SGFzRm9jdXMgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgY2xlYXJSZWNvbW1lbmREYXRhICgpIHtcbiAgICAgIHRoaXMucmVjb21tZW5kTGlzdCA9IG51bGxcbiAgICB9XG4gIH1cbn1cbiJdfQ==