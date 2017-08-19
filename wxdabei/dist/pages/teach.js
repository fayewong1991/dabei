'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      navigationBarTitleText: '教搭'
    }, _this.$props = { "imgwall": { "xmlns:v-bind": "", "v-bind:wall-image-lines.once": "imgWallData" } }, _this.$events = {}, _this.components = {
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
      selectTab: function selectTab(event) {
        var currentTabIndex = event.currentTarget.dataset.tabIndex;
        console.log(currentTabIndex);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/teach'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaW1nd2FsbCIsImRhdGEiLCJpbWdXYWxsRGF0YSIsImluZGV4VGFiTGlzdCIsInR5cGVUaXRsZSIsInR5cGVEYXRhIiwiY29tcHV0ZWQiLCJ0YWJJdGVtV2lkdGgiLCJsZW5ndGgiLCJtZXRob2RzIiwic2VsZWN0VGFiIiwiZXZlbnQiLCJjdXJyZW50VGFiSW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRhYkluZGV4IiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixnQ0FBK0IsYUFBbEQsRUFBWCxFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLG1CQUFhLEVBRFI7QUFFTEMsb0JBQWMsQ0FBQztBQUNiQyxtQkFBVyxJQURFO0FBRWJDLGtCQUFVO0FBRkcsT0FBRCxFQUdYO0FBQ0RELG1CQUFXLElBRFY7QUFFREMsa0JBQVU7QUFGVCxPQUhXLEVBTVg7QUFDREQsbUJBQVcsSUFEVjtBQUVEQyxrQkFBVTtBQUZULE9BTlcsRUFTWDtBQUNERCxtQkFBVyxRQURWO0FBRURDLGtCQUFVO0FBRlQsT0FUVztBQUZULEssUUFnQlBDLFEsR0FBVztBQUNUQyxrQkFEUywwQkFDTztBQUNkLGVBQU8sSUFBSyxLQUFLSixZQUFMLENBQWtCSyxNQUF2QixHQUFpQyxHQUFqQyxHQUF1QyxHQUE5QztBQUNEO0FBSFEsSyxRQU1YQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsS0FESCxFQUNVO0FBQ2hCLFlBQUlDLGtCQUFrQkQsTUFBTUUsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJDLFFBQWxEO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlMLGVBQVo7QUFDRDtBQUpPLEs7Ozs7RUFoQ3VCLGVBQUtNLEk7O2tCQUFuQnhCLEsiLCJmaWxlIjoidGVhY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGltZ1dhbGwgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleHdhbGwnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pWZ5pCtJ1xuICAgIH1cbiAgICRwcm9wcyA9IHtcImltZ3dhbGxcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOndhbGwtaW1hZ2UtbGluZXMub25jZVwiOlwiaW1nV2FsbERhdGFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgaW1nd2FsbDogaW1nV2FsbFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbWdXYWxsRGF0YTogW10sXG4gICAgICBpbmRleFRhYkxpc3Q6IFt7XG4gICAgICAgIHR5cGVUaXRsZTogJ+WcuuaZrycsXG4gICAgICAgIHR5cGVEYXRhOiBbXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlVGl0bGU6ICfouqvmnZAnLFxuICAgICAgICB0eXBlRGF0YTogW11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZVRpdGxlOiAn6aOO5qC8JyxcbiAgICAgICAgdHlwZURhdGE6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGVUaXRsZTogJ0ZvciBNZScsXG4gICAgICAgIHR5cGVEYXRhOiBbXVxuICAgICAgfV1cbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICB0YWJJdGVtV2lkdGggKCkge1xuICAgICAgICByZXR1cm4gMSAvICh0aGlzLmluZGV4VGFiTGlzdC5sZW5ndGgpICogMTAwICsgJyUnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNlbGVjdFRhYiAoZXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYWJJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YWJJbmRleFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFiSW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=