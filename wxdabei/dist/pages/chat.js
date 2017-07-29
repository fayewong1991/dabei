'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _searchBar = require('./../components/searchBar.js');

var _searchBar2 = _interopRequireDefault(_searchBar);

var _indexwall = require('./../components/indexwall.js');

var _indexwall2 = _interopRequireDefault(_indexwall);

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
      navigationBarTitleText: '搭呗'
    }, _this.$props = { "search": { "xmlns:v-bind": "", "v-bind:recommend-list.once": "searchRecommendData" }, "imgwall": { "v-bind:wall-image-lines.once": "imgWallData" } }, _this.$events = {}, _this.components = {
      search: _searchBar2.default,
      imgwall: _indexwall2.default
    }, _this.data = {
      imgWallData: [],
      indexTabList: [{
        typeTitle: '场景',
        typeData: []
      }, {
        typeTitle: '身材',
        typeData: []
      }, {
        typeTitle: '风格',
        typeData: []
      }, {
        typeTitle: 'For Me',
        typeData: []
      }]
    }, _this.computed = {
      tabItemWidth: function tabItemWidth() {
        return 1 / this.indexTabList.length * 100 + '%';
      }
    }, _this.methods = {
      onLoad: function onLoad() {
        var self = this;
        this.$parent.getUserInfo(function (userInfo) {
          if (userInfo) {
            self.userInfo = userInfo;
          }
        });
      },
      selectTab: function selectTab(event) {
        var currentTabIndex = event.currentTarget.dataset.tabIndex;
        console.log(currentTabIndex);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/chat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzZWFyY2giLCJpbWd3YWxsIiwiZGF0YSIsImltZ1dhbGxEYXRhIiwiaW5kZXhUYWJMaXN0IiwidHlwZVRpdGxlIiwidHlwZURhdGEiLCJjb21wdXRlZCIsInRhYkl0ZW1XaWR0aCIsImxlbmd0aCIsIm1ldGhvZHMiLCJvbkxvYWQiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJzZWxlY3RUYWIiLCJldmVudCIsImN1cnJlbnRUYWJJbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGFiSW5kZXgiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsOEJBQTZCLHFCQUFoRCxFQUFWLEVBQWlGLFdBQVUsRUFBQyxnQ0FBK0IsYUFBaEMsRUFBM0YsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsaUNBRFE7QUFFUkM7QUFGUSxLLFFBS1ZDLEksR0FBTztBQUNMQyxtQkFBYSxFQURSO0FBRUxDLG9CQUFjLENBQUM7QUFDYkMsbUJBQVcsSUFERTtBQUViQyxrQkFBVTtBQUZHLE9BQUQsRUFHWDtBQUNERCxtQkFBVyxJQURWO0FBRURDLGtCQUFVO0FBRlQsT0FIVyxFQU1YO0FBQ0RELG1CQUFXLElBRFY7QUFFREMsa0JBQVU7QUFGVCxPQU5XLEVBU1g7QUFDREQsbUJBQVcsUUFEVjtBQUVEQyxrQkFBVTtBQUZULE9BVFc7QUFGVCxLLFFBZ0JQQyxRLEdBQVc7QUFDVEMsa0JBRFMsMEJBQ087QUFDZCxlQUFPLElBQUssS0FBS0osWUFBTCxDQUFrQkssTUFBdkIsR0FBaUMsR0FBakMsR0FBdUMsR0FBOUM7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0U7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQSxhQUFLQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUIsVUFBVUMsUUFBVixFQUFvQjtBQUMzQyxjQUFJQSxRQUFKLEVBQWM7QUFDWkgsaUJBQUtHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7QUFDRixTQUpEO0FBS0QsT0FSTztBQVNSQyxlQVRRLHFCQVNHQyxLQVRILEVBU1U7QUFDaEIsWUFBSUMsa0JBQWtCRCxNQUFNRSxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkMsUUFBbEQ7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUwsZUFBWjtBQUNEO0FBWk8sSzs7OztFQWpDdUIsZUFBS00sSTs7a0JBQW5COUIsSyIsImZpbGUiOiJjaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBzZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hCYXInXG4gIGltcG9ydCBpbWdXYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXh3YWxsJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aQreWRlydcbiAgICB9XG4gICAkcHJvcHMgPSB7XCJzZWFyY2hcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnJlY29tbWVuZC1saXN0Lm9uY2VcIjpcInNlYXJjaFJlY29tbWVuZERhdGFcIn0sXCJpbWd3YWxsXCI6e1widi1iaW5kOndhbGwtaW1hZ2UtbGluZXMub25jZVwiOlwiaW1nV2FsbERhdGFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgc2VhcmNoOiBzZWFyY2hCYXIsXG4gICAgICBpbWd3YWxsOiBpbWdXYWxsXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGltZ1dhbGxEYXRhOiBbXSxcbiAgICAgIGluZGV4VGFiTGlzdDogW3tcbiAgICAgICAgdHlwZVRpdGxlOiAn5Zy65pmvJyxcbiAgICAgICAgdHlwZURhdGE6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGVUaXRsZTogJ+i6q+adkCcsXG4gICAgICAgIHR5cGVEYXRhOiBbXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlVGl0bGU6ICfpo47moLwnLFxuICAgICAgICB0eXBlRGF0YTogW11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZVRpdGxlOiAnRm9yIE1lJyxcbiAgICAgICAgdHlwZURhdGE6IFtdXG4gICAgICB9XVxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHRhYkl0ZW1XaWR0aCAoKSB7XG4gICAgICAgIHJldHVybiAxIC8gKHRoaXMuaW5kZXhUYWJMaXN0Lmxlbmd0aCkgKiAxMDAgKyAnJSdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbiAodXNlckluZm8pIHtcbiAgICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBzZWxlY3RUYWIgKGV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50VGFiSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFiSW5kZXhcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhYkluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19