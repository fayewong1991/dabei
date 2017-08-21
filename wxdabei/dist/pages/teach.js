'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _teachItem = require('./../components/teachItem.js');

var _teachItem2 = _interopRequireDefault(_teachItem);

var _data = require('./../mixins/data.js');

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
      navigationBarTitleText: '聊搭'
    }, _this.$props = { "teachitem1": { "xmlns:v-bind": { "for": "imageTextList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" }, "v-bind:teachType.once": { "for": "imageTextList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" }, "v-bind:src.once": { "for": "imageTextList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" }, "v-bind:head.once": { "for": "imageTextList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" }, "v-bind:content.once": { "for": "imageTextList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" }, "v-bind:read.once": { "for": "imageTextList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" }, "v-bind:collect.once": { "for": "imageTextList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" } }, "teachitem2": { "v-bind:teachType.once": { "for": "videoList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" }, "v-bind:src.once": { "for": "videoList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" }, "v-bind:head.once": { "for": "videoList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" }, "v-bind:content.once": { "for": "videoList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" }, "v-bind:read.once": { "for": "videoList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" }, "v-bind:collect.once": { "for": "videoList", "item": "item", "index": "index", "key": "*this", "value": "item.collect" } } }, _this.$events = {}, _this.components = {
      teachitem1: _teachItem2.default,
      teachitem2: _teachItem2.default
    }, _this.data = {
      imageTextList: _data.teachList['image'],
      videoList: _data.teachList['video'],
      imageShow: true,
      videoShow: false,
      teachType: 'image'
    }, _this.methods = {
      switchTab: function switchTab(event) {
        var theClickTab = event.target.dataset.tabType;
        if (theClickTab === 'image') {
          this.teachType = 'image';
          this.imageShow = true;
          this.videoShow = false;
        } else {
          this.teachType = 'video';
          this.imageShow = false;
          this.videoShow = true;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/teach'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGVhY2hpdGVtMSIsInRlYWNoaXRlbTIiLCJkYXRhIiwiaW1hZ2VUZXh0TGlzdCIsInZpZGVvTGlzdCIsImltYWdlU2hvdyIsInZpZGVvU2hvdyIsInRlYWNoVHlwZSIsIm1ldGhvZHMiLCJzd2l0Y2hUYWIiLCJldmVudCIsInRoZUNsaWNrVGFiIiwidGFyZ2V0IiwiZGF0YXNldCIsInRhYlR5cGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBQyxPQUFNLGVBQVAsRUFBdUIsUUFBTyxNQUE5QixFQUFxQyxTQUFRLE9BQTdDLEVBQXFELE9BQU0sT0FBM0QsRUFBbUUsU0FBUSxjQUEzRSxFQUFoQixFQUEyRyx5QkFBd0IsRUFBQyxPQUFNLGVBQVAsRUFBdUIsUUFBTyxNQUE5QixFQUFxQyxTQUFRLE9BQTdDLEVBQXFELE9BQU0sT0FBM0QsRUFBbUUsU0FBUSxjQUEzRSxFQUFuSSxFQUE4TixtQkFBa0IsRUFBQyxPQUFNLGVBQVAsRUFBdUIsUUFBTyxNQUE5QixFQUFxQyxTQUFRLE9BQTdDLEVBQXFELE9BQU0sT0FBM0QsRUFBbUUsU0FBUSxjQUEzRSxFQUFoUCxFQUEyVSxvQkFBbUIsRUFBQyxPQUFNLGVBQVAsRUFBdUIsUUFBTyxNQUE5QixFQUFxQyxTQUFRLE9BQTdDLEVBQXFELE9BQU0sT0FBM0QsRUFBbUUsU0FBUSxjQUEzRSxFQUE5VixFQUF5Yix1QkFBc0IsRUFBQyxPQUFNLGVBQVAsRUFBdUIsUUFBTyxNQUE5QixFQUFxQyxTQUFRLE9BQTdDLEVBQXFELE9BQU0sT0FBM0QsRUFBbUUsU0FBUSxjQUEzRSxFQUEvYyxFQUEwaUIsb0JBQW1CLEVBQUMsT0FBTSxlQUFQLEVBQXVCLFFBQU8sTUFBOUIsRUFBcUMsU0FBUSxPQUE3QyxFQUFxRCxPQUFNLE9BQTNELEVBQW1FLFNBQVEsY0FBM0UsRUFBN2pCLEVBQXdwQix1QkFBc0IsRUFBQyxPQUFNLGVBQVAsRUFBdUIsUUFBTyxNQUE5QixFQUFxQyxTQUFRLE9BQTdDLEVBQXFELE9BQU0sT0FBM0QsRUFBbUUsU0FBUSxjQUEzRSxFQUE5cUIsRUFBZCxFQUF3eEIsY0FBYSxFQUFDLHlCQUF3QixFQUFDLE9BQU0sV0FBUCxFQUFtQixRQUFPLE1BQTFCLEVBQWlDLFNBQVEsT0FBekMsRUFBaUQsT0FBTSxPQUF2RCxFQUErRCxTQUFRLGNBQXZFLEVBQXpCLEVBQWdILG1CQUFrQixFQUFDLE9BQU0sV0FBUCxFQUFtQixRQUFPLE1BQTFCLEVBQWlDLFNBQVEsT0FBekMsRUFBaUQsT0FBTSxPQUF2RCxFQUErRCxTQUFRLGNBQXZFLEVBQWxJLEVBQXlOLG9CQUFtQixFQUFDLE9BQU0sV0FBUCxFQUFtQixRQUFPLE1BQTFCLEVBQWlDLFNBQVEsT0FBekMsRUFBaUQsT0FBTSxPQUF2RCxFQUErRCxTQUFRLGNBQXZFLEVBQTVPLEVBQW1VLHVCQUFzQixFQUFDLE9BQU0sV0FBUCxFQUFtQixRQUFPLE1BQTFCLEVBQWlDLFNBQVEsT0FBekMsRUFBaUQsT0FBTSxPQUF2RCxFQUErRCxTQUFRLGNBQXZFLEVBQXpWLEVBQWdiLG9CQUFtQixFQUFDLE9BQU0sV0FBUCxFQUFtQixRQUFPLE1BQTFCLEVBQWlDLFNBQVEsT0FBekMsRUFBaUQsT0FBTSxPQUF2RCxFQUErRCxTQUFRLGNBQXZFLEVBQW5jLEVBQTBoQix1QkFBc0IsRUFBQyxPQUFNLFdBQVAsRUFBbUIsUUFBTyxNQUExQixFQUFpQyxTQUFRLE9BQXpDLEVBQWlELE9BQU0sT0FBdkQsRUFBK0QsU0FBUSxjQUF2RSxFQUFoakIsRUFBcnlCLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLHFDQURRO0FBRVJDO0FBRlEsSyxRQUlWQyxJLEdBQU87QUFDTEMscUJBQWUsZ0JBQVUsT0FBVixDQURWO0FBRUxDLGlCQUFXLGdCQUFVLE9BQVYsQ0FGTjtBQUdMQyxpQkFBVyxJQUhOO0FBSUxDLGlCQUFXLEtBSk47QUFLTEMsaUJBQVc7QUFMTixLLFFBT1BDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxLQURILEVBQ1U7QUFDaEIsWUFBSUMsY0FBY0QsTUFBTUUsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxPQUF2QztBQUNBLFlBQUlILGdCQUFnQixPQUFwQixFQUE2QjtBQUMzQixlQUFLSixTQUFMLEdBQWlCLE9BQWpCO0FBQ0EsZUFBS0YsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGVBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDRCxTQUpELE1BSU87QUFDTCxlQUFLQyxTQUFMLEdBQWlCLE9BQWpCO0FBQ0EsZUFBS0YsU0FBTCxHQUFpQixLQUFqQjtBQUNBLGVBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDRDtBQUNGO0FBWk8sSzs7OztFQWpCdUIsZUFBS1MsSTs7a0JBQW5CckIsSyIsImZpbGUiOiJ0ZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdGVhY2hJdGVtMSBmcm9tICcuLi9jb21wb25lbnRzL3RlYWNoSXRlbSdcbiAgaW1wb3J0IHRlYWNoSXRlbTIgZnJvbSAnLi4vY29tcG9uZW50cy90ZWFjaEl0ZW0nXG4gIGltcG9ydCB7dGVhY2hMaXN0fSBmcm9tICcuLi9taXhpbnMvZGF0YS5qcydcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrmkK0nXG4gICAgfVxuICAgJHByb3BzID0ge1widGVhY2hpdGVtMVwiOntcInhtbG5zOnYtYmluZFwiOntcImZvclwiOlwiaW1hZ2VUZXh0TGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcIip0aGlzXCIsXCJ2YWx1ZVwiOlwiaXRlbS5jb2xsZWN0XCJ9LFwidi1iaW5kOnRlYWNoVHlwZS5vbmNlXCI6e1wiZm9yXCI6XCJpbWFnZVRleHRMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiKnRoaXNcIixcInZhbHVlXCI6XCJpdGVtLmNvbGxlY3RcIn0sXCJ2LWJpbmQ6c3JjLm9uY2VcIjp7XCJmb3JcIjpcImltYWdlVGV4dExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIqdGhpc1wiLFwidmFsdWVcIjpcIml0ZW0uY29sbGVjdFwifSxcInYtYmluZDpoZWFkLm9uY2VcIjp7XCJmb3JcIjpcImltYWdlVGV4dExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIqdGhpc1wiLFwidmFsdWVcIjpcIml0ZW0uY29sbGVjdFwifSxcInYtYmluZDpjb250ZW50Lm9uY2VcIjp7XCJmb3JcIjpcImltYWdlVGV4dExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIqdGhpc1wiLFwidmFsdWVcIjpcIml0ZW0uY29sbGVjdFwifSxcInYtYmluZDpyZWFkLm9uY2VcIjp7XCJmb3JcIjpcImltYWdlVGV4dExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIqdGhpc1wiLFwidmFsdWVcIjpcIml0ZW0uY29sbGVjdFwifSxcInYtYmluZDpjb2xsZWN0Lm9uY2VcIjp7XCJmb3JcIjpcImltYWdlVGV4dExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIqdGhpc1wiLFwidmFsdWVcIjpcIml0ZW0uY29sbGVjdFwifX0sXCJ0ZWFjaGl0ZW0yXCI6e1widi1iaW5kOnRlYWNoVHlwZS5vbmNlXCI6e1wiZm9yXCI6XCJ2aWRlb0xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIqdGhpc1wiLFwidmFsdWVcIjpcIml0ZW0uY29sbGVjdFwifSxcInYtYmluZDpzcmMub25jZVwiOntcImZvclwiOlwidmlkZW9MaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiKnRoaXNcIixcInZhbHVlXCI6XCJpdGVtLmNvbGxlY3RcIn0sXCJ2LWJpbmQ6aGVhZC5vbmNlXCI6e1wiZm9yXCI6XCJ2aWRlb0xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIqdGhpc1wiLFwidmFsdWVcIjpcIml0ZW0uY29sbGVjdFwifSxcInYtYmluZDpjb250ZW50Lm9uY2VcIjp7XCJmb3JcIjpcInZpZGVvTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcIip0aGlzXCIsXCJ2YWx1ZVwiOlwiaXRlbS5jb2xsZWN0XCJ9LFwidi1iaW5kOnJlYWQub25jZVwiOntcImZvclwiOlwidmlkZW9MaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiKnRoaXNcIixcInZhbHVlXCI6XCJpdGVtLmNvbGxlY3RcIn0sXCJ2LWJpbmQ6Y29sbGVjdC5vbmNlXCI6e1wiZm9yXCI6XCJ2aWRlb0xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIqdGhpc1wiLFwidmFsdWVcIjpcIml0ZW0uY29sbGVjdFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgdGVhY2hpdGVtMTogdGVhY2hJdGVtMSxcbiAgICAgIHRlYWNoaXRlbTI6IHRlYWNoSXRlbTIsXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBpbWFnZVRleHRMaXN0OiB0ZWFjaExpc3RbJ2ltYWdlJ10sXG4gICAgICB2aWRlb0xpc3Q6IHRlYWNoTGlzdFsndmlkZW8nXSxcbiAgICAgIGltYWdlU2hvdzogdHJ1ZSxcbiAgICAgIHZpZGVvU2hvdzogZmFsc2UsXG4gICAgICB0ZWFjaFR5cGU6ICdpbWFnZSdcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHN3aXRjaFRhYiAoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRoZUNsaWNrVGFiID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFiVHlwZVxuICAgICAgICBpZiAodGhlQ2xpY2tUYWIgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICB0aGlzLnRlYWNoVHlwZSA9ICdpbWFnZSc7XG4gICAgICAgICAgdGhpcy5pbWFnZVNob3cgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudmlkZW9TaG93ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50ZWFjaFR5cGUgPSAndmlkZW8nO1xuICAgICAgICAgIHRoaXMuaW1hZ2VTaG93ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy52aWRlb1Nob3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=