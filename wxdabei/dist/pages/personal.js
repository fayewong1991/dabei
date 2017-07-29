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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/personal'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2VhcmNoIiwiaW1nd2FsbCIsImRhdGEiLCJpbWdXYWxsRGF0YSIsImluZGV4VGFiTGlzdCIsInR5cGVUaXRsZSIsInR5cGVEYXRhIiwiY29tcHV0ZWQiLCJ0YWJJdGVtV2lkdGgiLCJsZW5ndGgiLCJtZXRob2RzIiwib25Mb2FkIiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwic2VsZWN0VGFiIiwiZXZlbnQiLCJjdXJyZW50VGFiSW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRhYkluZGV4IiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDhCQUE2QixxQkFBaEQsRUFBVixFQUFpRixXQUFVLEVBQUMsZ0NBQStCLGFBQWhDLEVBQTNGLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGlDQURRO0FBRVJDO0FBRlEsSyxRQUtWQyxJLEdBQU87QUFDTEMsbUJBQWEsRUFEUjtBQUVMQyxvQkFBYyxDQUFDO0FBQ2JDLG1CQUFXLElBREU7QUFFYkMsa0JBQVU7QUFGRyxPQUFELEVBR1g7QUFDREQsbUJBQVcsSUFEVjtBQUVEQyxrQkFBVTtBQUZULE9BSFcsRUFNWDtBQUNERCxtQkFBVyxJQURWO0FBRURDLGtCQUFVO0FBRlQsT0FOVyxFQVNYO0FBQ0RELG1CQUFXLFFBRFY7QUFFREMsa0JBQVU7QUFGVCxPQVRXO0FBRlQsSyxRQWdCUEMsUSxHQUFXO0FBQ1RDLGtCQURTLDBCQUNPO0FBQ2QsZUFBTyxJQUFLLEtBQUtKLFlBQUwsQ0FBa0JLLE1BQXZCLEdBQWlDLEdBQWpDLEdBQXVDLEdBQTlDO0FBQ0Q7QUFIUSxLLFFBTVhDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsYUFBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVVDLFFBQVYsRUFBb0I7QUFDM0MsY0FBSUEsUUFBSixFQUFjO0FBQ1pILGlCQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBQ0YsU0FKRDtBQUtELE9BUk87QUFTUkMsZUFUUSxxQkFTR0MsS0FUSCxFQVNVO0FBQ2hCLFlBQUlDLGtCQUFrQkQsTUFBTUUsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJDLFFBQWxEO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlMLGVBQVo7QUFDRDtBQVpPLEs7Ozs7RUFqQ3VCLGVBQUtNLEk7O2tCQUFuQjlCLEsiLCJmaWxlIjoicGVyc29uYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaEJhcidcbiAgaW1wb3J0IGltZ1dhbGwgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleHdhbGwnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pCt5ZGXJ1xuICAgIH1cbiAgICRwcm9wcyA9IHtcInNlYXJjaFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cmVjb21tZW5kLWxpc3Qub25jZVwiOlwic2VhcmNoUmVjb21tZW5kRGF0YVwifSxcImltZ3dhbGxcIjp7XCJ2LWJpbmQ6d2FsbC1pbWFnZS1saW5lcy5vbmNlXCI6XCJpbWdXYWxsRGF0YVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBzZWFyY2g6IHNlYXJjaEJhcixcbiAgICAgIGltZ3dhbGw6IGltZ1dhbGxcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaW1nV2FsbERhdGE6IFtdLFxuICAgICAgaW5kZXhUYWJMaXN0OiBbe1xuICAgICAgICB0eXBlVGl0bGU6ICflnLrmma8nLFxuICAgICAgICB0eXBlRGF0YTogW11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZVRpdGxlOiAn6Lqr5p2QJyxcbiAgICAgICAgdHlwZURhdGE6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGVUaXRsZTogJ+mjjuagvCcsXG4gICAgICAgIHR5cGVEYXRhOiBbXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlVGl0bGU6ICdGb3IgTWUnLFxuICAgICAgICB0eXBlRGF0YTogW11cbiAgICAgIH1dXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgdGFiSXRlbVdpZHRoICgpIHtcbiAgICAgICAgcmV0dXJuIDEgLyAodGhpcy5pbmRleFRhYkxpc3QubGVuZ3RoKSAqIDEwMCArICclJ1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvbkxvYWQgKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uICh1c2VySW5mbykge1xuICAgICAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHNlbGVjdFRhYiAoZXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYWJJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YWJJbmRleFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFiSW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=