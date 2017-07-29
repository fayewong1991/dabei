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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/master'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNlYXJjaCIsImltZ3dhbGwiLCJkYXRhIiwiaW1nV2FsbERhdGEiLCJpbmRleFRhYkxpc3QiLCJ0eXBlVGl0bGUiLCJ0eXBlRGF0YSIsImNvbXB1dGVkIiwidGFiSXRlbVdpZHRoIiwibGVuZ3RoIiwibWV0aG9kcyIsIm9uTG9hZCIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInNlbGVjdFRhYiIsImV2ZW50IiwiY3VycmVudFRhYkluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0YWJJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiw4QkFBNkIscUJBQWhELEVBQVYsRUFBaUYsV0FBVSxFQUFDLGdDQUErQixhQUFoQyxFQUEzRixFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxpQ0FEUTtBQUVSQztBQUZRLEssUUFLVkMsSSxHQUFPO0FBQ0xDLG1CQUFhLEVBRFI7QUFFTEMsb0JBQWMsQ0FBQztBQUNiQyxtQkFBVyxJQURFO0FBRWJDLGtCQUFVO0FBRkcsT0FBRCxFQUdYO0FBQ0RELG1CQUFXLElBRFY7QUFFREMsa0JBQVU7QUFGVCxPQUhXLEVBTVg7QUFDREQsbUJBQVcsSUFEVjtBQUVEQyxrQkFBVTtBQUZULE9BTlcsRUFTWDtBQUNERCxtQkFBVyxRQURWO0FBRURDLGtCQUFVO0FBRlQsT0FUVztBQUZULEssUUFnQlBDLFEsR0FBVztBQUNUQyxrQkFEUywwQkFDTztBQUNkLGVBQU8sSUFBSyxLQUFLSixZQUFMLENBQWtCSyxNQUF2QixHQUFpQyxHQUFqQyxHQUF1QyxHQUE5QztBQUNEO0FBSFEsSyxRQU1YQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBLGFBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFVQyxRQUFWLEVBQW9CO0FBQzNDLGNBQUlBLFFBQUosRUFBYztBQUNaSCxpQkFBS0csUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUNGLFNBSkQ7QUFLRCxPQVJPO0FBU1JDLGVBVFEscUJBU0dDLEtBVEgsRUFTVTtBQUNoQixZQUFJQyxrQkFBa0JELE1BQU1FLGFBQU4sQ0FBb0JDLE9BQXBCLENBQTRCQyxRQUFsRDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZTCxlQUFaO0FBQ0Q7QUFaTyxLOzs7O0VBakN1QixlQUFLTSxJOztrQkFBbkI5QixLIiwiZmlsZSI6Im1hc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgc2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoQmFyJ1xuICBpbXBvcnQgaW1nV2FsbCBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4d2FsbCdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmkK3lkZcnXG4gICAgfVxuICAgJHByb3BzID0ge1wic2VhcmNoXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpyZWNvbW1lbmQtbGlzdC5vbmNlXCI6XCJzZWFyY2hSZWNvbW1lbmREYXRhXCJ9LFwiaW1nd2FsbFwiOntcInYtYmluZDp3YWxsLWltYWdlLWxpbmVzLm9uY2VcIjpcImltZ1dhbGxEYXRhXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHNlYXJjaDogc2VhcmNoQmFyLFxuICAgICAgaW1nd2FsbDogaW1nV2FsbFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbWdXYWxsRGF0YTogW10sXG4gICAgICBpbmRleFRhYkxpc3Q6IFt7XG4gICAgICAgIHR5cGVUaXRsZTogJ+WcuuaZrycsXG4gICAgICAgIHR5cGVEYXRhOiBbXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlVGl0bGU6ICfouqvmnZAnLFxuICAgICAgICB0eXBlRGF0YTogW11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZVRpdGxlOiAn6aOO5qC8JyxcbiAgICAgICAgdHlwZURhdGE6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGVUaXRsZTogJ0ZvciBNZScsXG4gICAgICAgIHR5cGVEYXRhOiBbXVxuICAgICAgfV1cbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICB0YWJJdGVtV2lkdGggKCkge1xuICAgICAgICByZXR1cm4gMSAvICh0aGlzLmluZGV4VGFiTGlzdC5sZW5ndGgpICogMTAwICsgJyUnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG4gICAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgc2VsZWN0VGFiIChldmVudCkge1xuICAgICAgICBsZXQgY3VycmVudFRhYkluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRhYkluZGV4XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYWJJbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==