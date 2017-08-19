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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref, _this$data;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搭呗'
    }, _this.$props = { "search": { "xmlns:v-bind": "", "v-bind:recommendlist.once": "searchRecommendData" }, "imgwall": { "v-bind:wallimagelines.once": "imgWallData" } }, _this.$events = {}, _this.components = {
      search: _searchBar2.default,
      imgwall: _indexwall2.default
    }, _this.data = (_this$data = {
      isShowWall: true,
      isShowBodyCount: false,
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
    }, _defineProperty(_this$data, 'imgWallData', []), _defineProperty(_this$data, 'bodyCountStep0Sshow', true), _defineProperty(_this$data, 'bodyCountStep1Sshow', false), _defineProperty(_this$data, 'bodyCountStep2Sshow', false), _defineProperty(_this$data, 'bodyCountData', { currentFeatureType: [] }), _defineProperty(_this$data, 'tabStyleItems', ['index-tabs-item-on', '', '', '']), _defineProperty(_this$data, 'bodyTypeIcons', [['item-nocheck', 'item-nocheck', 'item-nocheck'], ['item-nocheck', 'item-nocheck', 'item-nocheck'], ['item-nocheck', 'item-nocheck', 'item-nocheck']]), _defineProperty(_this$data, 'colorTypeIcons', [[{ icon: 'item-nocheck', textcolor: 'nocheck-color' }, { icon: 'item-nocheck', textcolor: 'nocheck-color' }], [{ icon: 'item-nocheck', textcolor: 'nocheck-color' }, { icon: 'item-nocheck', textcolor: 'nocheck-color' }]]), _defineProperty(_this$data, 'bodyTypeData', [[{ imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_3i8ge54bjaijl416ccb5jb1783eac_120x120.png', typeValue: 'type1' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_29dk3kj9ke3eeh20geh809eg5j4kd_120x120.png', typeValue: 'type2' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_73akb81i1l804aiage4e17ffe1gi5_120x120.png', typeValue: 'type3' }], [{ imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_8016k0kd8e76dih8h05h6k571c0h2_120x120.png', typeValue: 'type4' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_3a7c88g24hbhlh4cbek902a81edfb_120x120.png', typeValue: 'type5' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_0jfi75jf75dfj09j367c1hgh1kd2a_120x120.png', typeValue: 'type6' }], [{ imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_37a67485eed9d4fi4ic049f5bekil_120x120.png', typeValue: 'type7' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_4b2fdhhg90gb8f28cade1dkj6hf83_120x120.png', typeValue: 'type8' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_203495f84cfc9e50eb9223f59dkjj_120x120.png', typeValue: 'type9' }]]), _defineProperty(_this$data, 'colorTypeData', [[{ imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_1b472cje39bficjc20aa06a403g36_125x127.png', typeValue: 'type1', text: '晶莹白皙' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_47l6hc3598ed1hekd63kcb0411ja1_128x127.png', typeValue: 'type2', text: '自然红润' }], [{ imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_07hf51daaf499k3062ab6bk60l4hb_125x123.png', typeValue: 'type3', text: '自然偏黄' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_8g5l7kl4089d42i3b5e19ek9660g8_128x123.png', typeValue: 'type4', text: '活力小麦' }]]), _defineProperty(_this$data, 'featureTypeData', ['脖子粗', '小平胸', 'PP大', '小短腿', '脸大', '胳膊粗', '小肚腩', '小粗腿']), _defineProperty(_this$data, 'featureTypeIcons', ['item-nocheck', 'item-nocheck', 'item-nocheck', 'item-nocheck', 'item-nocheck', 'item-nocheck', 'item-nocheck', 'item-nocheck']), _this$data), _this.computed = {
      tabItemWidth: function tabItemWidth() {
        return 1 / this.indexTabList.length * 100 + '%';
      }
    }, _this.methods = {
      selectTab: function selectTab(event) {
        var currentTabIndex = event.currentTarget.dataset.tabIndex;
        this.tabStyleItems = this.tabStyleItems.map(function (item, index) {
          return currentTabIndex === index ? 'index-tabs-item-on' : '';
        });
        if (currentTabIndex === this.indexTabList.length - 1 && !_wepy2.default.getStorageSync('bodyData')) {
          this.isShowWall = false;
          this.isShowBodyCount = true;
        } else {
          this.isShowWall = true;
          this.isShowBodyCount = false;
        }
        console.log(currentTabIndex);
      },
      typeSelect: function typeSelect(event) {
        var theDataType = event.target.dataset.type;
        var theDataValue = event.target.dataset.value;
        var theBelongRow = event.target.dataset.belongRow;
        var theBelongRowIndex = event.target.dataset.belongRowindex;
        var theFeatureIndex = event.target.dataset.featureindex;
        if (!theDataType || !theDataValue) {
          return;
        }
        switch (theDataType) {
          case 'body':
            this.bodyCountData['currentBodyType'] = theDataValue;
            this.bodyTypeIcons = this.bodyTypeIcons.map(function (item, index) {
              return theBelongRow === index ? item.map(function (rowitem, rowindex) {
                return theBelongRowIndex === rowindex ? 'item-checked' : 'item-nocheck';
              }) : item.map(function (rowitem, rowindex) {
                return 'item-nocheck';
              });
            });
            break;
          case 'color':
            this.bodyCountData['currentColorType'] = theDataValue;
            this.colorTypeIcons = this.colorTypeIcons.map(function (item, index) {
              return theBelongRow === index ? item.map(function (rowitem, rowindex) {
                return theBelongRowIndex === rowindex ? { icon: 'item-checked', textcolor: 'checked-color' } : { icon: 'item-nocheck', textcolor: 'nocheck-color' };
              }) : item.map(function (rowitem, rowindex) {
                return { icon: 'item-nocheck', textcolor: 'nocheck-color' };
              });
            });
            break;
          case 'feature':
            this.bodyCountData['currentFeatureType'].push(theDataValue);
            this.featureTypeIcons[theFeatureIndex] = 'featureitem-checked';
            break;
        }
      },
      bodyCountConfirm: function bodyCountConfirm(event) {
        var currentStepIndex = Number(event.target.dataset.stepIndex);
        switch (currentStepIndex) {
          case 0:
            if (!this.bodyCountData['currentBodyType']) {
              // 如果点击下一步时未完成数据设置，则给用户一个提示
              _wepy2.default.showToast({
                title: '请先完成身材类型选择',
                icon: 'loading',
                duration: 2000
              });
              return;
            }
            this.bodyCountStep0Sshow = false;
            this.bodyCountStep1Sshow = true;
            break;
          case 1:
            if (!this.bodyCountData['currentColorType']) {
              _wepy2.default.showToast({
                title: '请先完成肤色类型选择',
                icon: 'loading',
                duration: 2000
              });
              return;
            }
            this.bodyCountStep1Sshow = false;
            this.bodyCountStep2Sshow = true;
            break;
          case 2:
            if (!this.bodyCountData['currentFeatureType'].length) {
              _wepy2.default.showToast({
                title: '请先完成身材特点选择',
                icon: 'loading',
                duration: 2000
              });
            }
            break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2VhcmNoIiwiaW1nd2FsbCIsImRhdGEiLCJpc1Nob3dXYWxsIiwiaXNTaG93Qm9keUNvdW50IiwiaW1nV2FsbERhdGEiLCJpbmRleFRhYkxpc3QiLCJ0eXBlVGl0bGUiLCJ0eXBlRGF0YSIsImN1cnJlbnRGZWF0dXJlVHlwZSIsImljb24iLCJ0ZXh0Y29sb3IiLCJpbWdVcmwiLCJ0eXBlVmFsdWUiLCJ0ZXh0IiwiY29tcHV0ZWQiLCJ0YWJJdGVtV2lkdGgiLCJsZW5ndGgiLCJtZXRob2RzIiwic2VsZWN0VGFiIiwiZXZlbnQiLCJjdXJyZW50VGFiSW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRhYkluZGV4IiwidGFiU3R5bGVJdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImdldFN0b3JhZ2VTeW5jIiwiY29uc29sZSIsImxvZyIsInR5cGVTZWxlY3QiLCJ0aGVEYXRhVHlwZSIsInRhcmdldCIsInR5cGUiLCJ0aGVEYXRhVmFsdWUiLCJ2YWx1ZSIsInRoZUJlbG9uZ1JvdyIsImJlbG9uZ1JvdyIsInRoZUJlbG9uZ1Jvd0luZGV4IiwiYmVsb25nUm93aW5kZXgiLCJ0aGVGZWF0dXJlSW5kZXgiLCJmZWF0dXJlaW5kZXgiLCJib2R5Q291bnREYXRhIiwiYm9keVR5cGVJY29ucyIsInJvd2l0ZW0iLCJyb3dpbmRleCIsImNvbG9yVHlwZUljb25zIiwicHVzaCIsImZlYXR1cmVUeXBlSWNvbnMiLCJib2R5Q291bnRDb25maXJtIiwiY3VycmVudFN0ZXBJbmRleCIsIk51bWJlciIsInN0ZXBJbmRleCIsInNob3dUb2FzdCIsInRpdGxlIiwiZHVyYXRpb24iLCJib2R5Q291bnRTdGVwMFNzaG93IiwiYm9keUNvdW50U3RlcDFTc2hvdyIsImJvZHlDb3VudFN0ZXAyU3Nob3ci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QUFDQSxpQkFBS0MsbUJBQUwsR0FBMkIsSUFBM0I7QUFDQTtBQUNGLGVBQUssQ0FBTDtBQUNFLGdCQUFJLENBQUMsS0FBS2hCLGFBQUwsQ0FBbUIsb0JBQW5CLEVBQXlDM0IsTUFBOUMsRUFBc0Q7QUFDcEQsNkJBQUtzQyxTQUFMLENBQWU7QUFDYkMsdUJBQU8sWUFETTtBQUViOUMsc0JBQU0sU0FGTztBQUdiK0MsMEJBQVU7QUFIRyxlQUFmO0FBS0Q7QUFDRDtBQWxDSjtBQW9DRDtBQXpGTyxLOzs7O0VBL0N1QixlQUFLSSxJOztrQkFBbkJuRSxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBzZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hCYXInXG4gIGltcG9ydCBpbWdXYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXh3YWxsJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aQreWRlydcbiAgICB9XG4gICAkcHJvcHMgPSB7XCJzZWFyY2hcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnJlY29tbWVuZGxpc3Qub25jZVwiOlwic2VhcmNoUmVjb21tZW5kRGF0YVwifSxcImltZ3dhbGxcIjp7XCJ2LWJpbmQ6d2FsbGltYWdlbGluZXMub25jZVwiOlwiaW1nV2FsbERhdGFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgc2VhcmNoOiBzZWFyY2hCYXIsXG4gICAgICBpbWd3YWxsOiBpbWdXYWxsXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGlzU2hvd1dhbGw6IHRydWUsXG4gICAgICBpc1Nob3dCb2R5Q291bnQ6IGZhbHNlLFxuICAgICAgaW1nV2FsbERhdGE6IFtdLFxuICAgICAgaW5kZXhUYWJMaXN0OiBbe1xuICAgICAgICB0eXBlVGl0bGU6ICflnLrmma8nLFxuICAgICAgICB0eXBlRGF0YTogW11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZVRpdGxlOiAn6Lqr5p2QJyxcbiAgICAgICAgdHlwZURhdGE6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGVUaXRsZTogJ+mjjuagvCcsXG4gICAgICAgIHR5cGVEYXRhOiBbXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlVGl0bGU6ICdGb3IgTWUnLFxuICAgICAgICB0eXBlRGF0YTogW11cbiAgICAgIH1dLFxuICAgICAgaW1nV2FsbERhdGE6IFtdLFxuICAgICAgYm9keUNvdW50U3RlcDBTc2hvdzogdHJ1ZSxcbiAgICAgIGJvZHlDb3VudFN0ZXAxU3Nob3c6IGZhbHNlLFxuICAgICAgYm9keUNvdW50U3RlcDJTc2hvdzogZmFsc2UsXG4gICAgICBib2R5Q291bnREYXRhOiB7Y3VycmVudEZlYXR1cmVUeXBlOiBbXX0sIC8vIOiusOW9leeUqOaIt+eahOi6q+adkOaVsOaNruWvueixoVxuICAgICAgdGFiU3R5bGVJdGVtczogWydpbmRleC10YWJzLWl0ZW0tb24nLCAnJywgJycsICcnXSxcbiAgICAgIGJvZHlUeXBlSWNvbnM6IFtbJ2l0ZW0tbm9jaGVjaycsICdpdGVtLW5vY2hlY2snLCAnaXRlbS1ub2NoZWNrJ10sIFsnaXRlbS1ub2NoZWNrJywgJ2l0ZW0tbm9jaGVjaycsICdpdGVtLW5vY2hlY2snXSwgWydpdGVtLW5vY2hlY2snLCAnaXRlbS1ub2NoZWNrJywgJ2l0ZW0tbm9jaGVjayddXSxcbiAgICAgIGNvbG9yVHlwZUljb25zOiBbW3tpY29uOiAnaXRlbS1ub2NoZWNrJywgdGV4dGNvbG9yOiAnbm9jaGVjay1jb2xvcid9LCB7aWNvbjogJ2l0ZW0tbm9jaGVjaycsIHRleHRjb2xvcjogJ25vY2hlY2stY29sb3InfV0sIFt7aWNvbjogJ2l0ZW0tbm9jaGVjaycsIHRleHRjb2xvcjogJ25vY2hlY2stY29sb3InfSwge2ljb246ICdpdGVtLW5vY2hlY2snLCB0ZXh0Y29sb3I6ICdub2NoZWNrLWNvbG9yJ31dXSxcbiAgICAgIGJvZHlUeXBlRGF0YTogW1t7aW1nVXJsOiAnaHR0cHM6Ly9zMTAubW9ndWNkbi5jb20vbWxjZG4vYzQ1NDA2LzE3MDgxOF8zaThnZTU0YmphaWpsNDE2Y2NiNWpiMTc4M2VhY18xMjB4MTIwLnBuZycsIHR5cGVWYWx1ZTogJ3R5cGUxJ30sIHtpbWdVcmw6ICdodHRwczovL3MxMC5tb2d1Y2RuLmNvbS9tbGNkbi9jNDU0MDYvMTcwODE4XzI5ZGsza2o5a2UzZWVoMjBnZWg4MDllZzVqNGtkXzEyMHgxMjAucG5nJywgdHlwZVZhbHVlOiAndHlwZTInfSwge2ltZ1VybDogJ2h0dHBzOi8vczEwLm1vZ3VjZG4uY29tL21sY2RuL2M0NTQwNi8xNzA4MThfNzNha2I4MWkxbDgwNGFpYWdlNGUxN2ZmZTFnaTVfMTIweDEyMC5wbmcnLCB0eXBlVmFsdWU6ICd0eXBlMyd9XSwgW3tpbWdVcmw6ICdodHRwczovL3MxMC5tb2d1Y2RuLmNvbS9tbGNkbi9jNDU0MDYvMTcwODE4XzgwMTZrMGtkOGU3NmRpaDhoMDVoNms1NzFjMGgyXzEyMHgxMjAucG5nJywgdHlwZVZhbHVlOiAndHlwZTQnfSwge2ltZ1VybDogJ2h0dHBzOi8vczEwLm1vZ3VjZG4uY29tL21sY2RuL2M0NTQwNi8xNzA4MThfM2E3Yzg4ZzI0aGJobGg0Y2JlazkwMmE4MWVkZmJfMTIweDEyMC5wbmcnLCB0eXBlVmFsdWU6ICd0eXBlNSd9LCB7aW1nVXJsOiAnaHR0cHM6Ly9zMTAubW9ndWNkbi5jb20vbWxjZG4vYzQ1NDA2LzE3MDgxOF8wamZpNzVqZjc1ZGZqMDlqMzY3YzFoZ2gxa2QyYV8xMjB4MTIwLnBuZycsIHR5cGVWYWx1ZTogJ3R5cGU2J31dLCBbe2ltZ1VybDogJ2h0dHBzOi8vczEwLm1vZ3VjZG4uY29tL21sY2RuL2M0NTQwNi8xNzA4MThfMzdhNjc0ODVlZWQ5ZDRmaTRpYzA0OWY1YmVraWxfMTIweDEyMC5wbmcnLCB0eXBlVmFsdWU6ICd0eXBlNyd9LCB7aW1nVXJsOiAnaHR0cHM6Ly9zMTAubW9ndWNkbi5jb20vbWxjZG4vYzQ1NDA2LzE3MDgxOF80YjJmZGhoZzkwZ2I4ZjI4Y2FkZTFka2o2aGY4M18xMjB4MTIwLnBuZycsIHR5cGVWYWx1ZTogJ3R5cGU4J30sIHtpbWdVcmw6ICdodHRwczovL3MxMC5tb2d1Y2RuLmNvbS9tbGNkbi9jNDU0MDYvMTcwODE4XzIwMzQ5NWY4NGNmYzllNTBlYjkyMjNmNTlka2pqXzEyMHgxMjAucG5nJywgdHlwZVZhbHVlOiAndHlwZTknfV1dLFxuICAgICAgY29sb3JUeXBlRGF0YTogW1t7aW1nVXJsOiAnaHR0cHM6Ly9zMTAubW9ndWNkbi5jb20vbWxjZG4vYzQ1NDA2LzE3MDgxOF8xYjQ3MmNqZTM5YmZpY2pjMjBhYTA2YTQwM2czNl8xMjV4MTI3LnBuZycsIHR5cGVWYWx1ZTogJ3R5cGUxJywgdGV4dDogJ+aZtuiOueeZveeamSd9LCB7aW1nVXJsOiAnaHR0cHM6Ly9zMTAubW9ndWNkbi5jb20vbWxjZG4vYzQ1NDA2LzE3MDgxOF80N2w2aGMzNTk4ZWQxaGVrZDYza2NiMDQxMWphMV8xMjh4MTI3LnBuZycsIHR5cGVWYWx1ZTogJ3R5cGUyJywgdGV4dDogJ+iHqueEtue6oua2pid9XSwgW3tpbWdVcmw6ICdodHRwczovL3MxMC5tb2d1Y2RuLmNvbS9tbGNkbi9jNDU0MDYvMTcwODE4XzA3aGY1MWRhYWY0OTlrMzA2MmFiNmJrNjBsNGhiXzEyNXgxMjMucG5nJywgdHlwZVZhbHVlOiAndHlwZTMnLCB0ZXh0OiAn6Ieq54S25YGP6buEJ30sIHtpbWdVcmw6ICdodHRwczovL3MxMC5tb2d1Y2RuLmNvbS9tbGNkbi9jNDU0MDYvMTcwODE4XzhnNWw3a2w0MDg5ZDQyaTNiNWUxOWVrOTY2MGc4XzEyOHgxMjMucG5nJywgdHlwZVZhbHVlOiAndHlwZTQnLCB0ZXh0OiAn5rS75Yqb5bCP6bqmJ31dXSxcbiAgICAgIGZlYXR1cmVUeXBlRGF0YTogWyfohJblrZDnspcnLCAn5bCP5bmz6IO4JywgJ1BQ5aSnJywgJ+Wwj+efreiFvycsICfohLjlpKcnLCAn6IOz6IaK57KXJyAsICflsI/ogprohaknLCAn5bCP57KX6IW/J10sXG4gICAgICBmZWF0dXJlVHlwZUljb25zOiBbJ2l0ZW0tbm9jaGVjaycsJ2l0ZW0tbm9jaGVjaycsICdpdGVtLW5vY2hlY2snLCAnaXRlbS1ub2NoZWNrJywgJ2l0ZW0tbm9jaGVjaycsICdpdGVtLW5vY2hlY2snLCAnaXRlbS1ub2NoZWNrJywgJ2l0ZW0tbm9jaGVjayddXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgdGFiSXRlbVdpZHRoICgpIHtcbiAgICAgICAgcmV0dXJuIDEgLyAodGhpcy5pbmRleFRhYkxpc3QubGVuZ3RoKSAqIDEwMCArICclJ1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzZWxlY3RUYWIgKGV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50VGFiSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFiSW5kZXhcbiAgICAgICAgdGhpcy50YWJTdHlsZUl0ZW1zID0gdGhpcy50YWJTdHlsZUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudFRhYkluZGV4ID09PSBpbmRleCA/ICdpbmRleC10YWJzLWl0ZW0tb24nIDogJydcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKChjdXJyZW50VGFiSW5kZXggPT09IHRoaXMuaW5kZXhUYWJMaXN0Lmxlbmd0aCAtIDEpICYmICF3ZXB5LmdldFN0b3JhZ2VTeW5jKCdib2R5RGF0YScpKSB7XG4gICAgICAgICAgdGhpcy5pc1Nob3dXYWxsID0gZmFsc2VcbiAgICAgICAgICB0aGlzLmlzU2hvd0JvZHlDb3VudCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzU2hvd1dhbGwgPSB0cnVlXG4gICAgICAgICAgdGhpcy5pc1Nob3dCb2R5Q291bnQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYWJJbmRleClcbiAgICAgIH0sXG4gICAgICB0eXBlU2VsZWN0IChldmVudCkge1xuICAgICAgICBsZXQgdGhlRGF0YVR5cGUgPSBldmVudC50YXJnZXQuZGF0YXNldC50eXBlXG4gICAgICAgIGxldCB0aGVEYXRhVmFsdWUgPSBldmVudC50YXJnZXQuZGF0YXNldC52YWx1ZVxuICAgICAgICBsZXQgdGhlQmVsb25nUm93ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYmVsb25nUm93XG4gICAgICAgIGxldCB0aGVCZWxvbmdSb3dJbmRleCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmJlbG9uZ1Jvd2luZGV4XG4gICAgICAgIGxldCB0aGVGZWF0dXJlSW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5mZWF0dXJlaW5kZXhcbiAgICAgICAgaWYgKCF0aGVEYXRhVHlwZSB8fCAhdGhlRGF0YVZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGVEYXRhVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgdGhpcy5ib2R5Q291bnREYXRhWydjdXJyZW50Qm9keVR5cGUnXSA9IHRoZURhdGFWYWx1ZVxuICAgICAgICAgICAgdGhpcy5ib2R5VHlwZUljb25zID0gdGhpcy5ib2R5VHlwZUljb25zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoZUJlbG9uZ1JvdyA9PT0gaW5kZXggPyBpdGVtLm1hcCgocm93aXRlbSwgcm93aW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhlQmVsb25nUm93SW5kZXggPT09IHJvd2luZGV4ID8gJ2l0ZW0tY2hlY2tlZCcgOiAnaXRlbS1ub2NoZWNrJ1xuICAgICAgICAgICAgICB9KSA6IGl0ZW0ubWFwKChyb3dpdGVtLCByb3dpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaXRlbS1ub2NoZWNrJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICAgICAgdGhpcy5ib2R5Q291bnREYXRhWydjdXJyZW50Q29sb3JUeXBlJ10gPSB0aGVEYXRhVmFsdWVcbiAgICAgICAgICAgIHRoaXMuY29sb3JUeXBlSWNvbnMgPSB0aGlzLmNvbG9yVHlwZUljb25zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoZUJlbG9uZ1JvdyA9PT0gaW5kZXggPyBpdGVtLm1hcCgocm93aXRlbSwgcm93aW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhlQmVsb25nUm93SW5kZXggPT09IHJvd2luZGV4ID8ge2ljb246ICdpdGVtLWNoZWNrZWQnLCB0ZXh0Y29sb3I6ICdjaGVja2VkLWNvbG9yJ30gOiB7aWNvbjogJ2l0ZW0tbm9jaGVjaycsIHRleHRjb2xvcjogJ25vY2hlY2stY29sb3InfVxuICAgICAgICAgICAgICB9KSA6IGl0ZW0ubWFwKChyb3dpdGVtLCByb3dpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7aWNvbjogJ2l0ZW0tbm9jaGVjaycsIHRleHRjb2xvcjogJ25vY2hlY2stY29sb3InfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAnZmVhdHVyZSc6XG4gICAgICAgICAgICB0aGlzLmJvZHlDb3VudERhdGFbJ2N1cnJlbnRGZWF0dXJlVHlwZSddLnB1c2godGhlRGF0YVZhbHVlKVxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVHlwZUljb25zW3RoZUZlYXR1cmVJbmRleF0gPSAnZmVhdHVyZWl0ZW0tY2hlY2tlZCdcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBib2R5Q291bnRDb25maXJtIChldmVudCkge1xuICAgICAgICBsZXQgY3VycmVudFN0ZXBJbmRleCA9IE51bWJlcihldmVudC50YXJnZXQuZGF0YXNldC5zdGVwSW5kZXgpXG4gICAgICAgIHN3aXRjaCAoY3VycmVudFN0ZXBJbmRleCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGlmICghdGhpcy5ib2R5Q291bnREYXRhWydjdXJyZW50Qm9keVR5cGUnXSkge1xuICAgICAgICAgICAgICAvLyDlpoLmnpzngrnlh7vkuIvkuIDmraXml7bmnKrlrozmiJDmlbDmja7orr7nva7vvIzliJnnu5nnlKjmiLfkuIDkuKrmj5DnpLpcbiAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35YWI5a6M5oiQ6Lqr5p2Q57G75Z6L6YCJ5oupJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvZHlDb3VudFN0ZXAwU3Nob3cgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5ib2R5Q291bnRTdGVwMVNzaG93ID0gdHJ1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBpZiAoIXRoaXMuYm9keUNvdW50RGF0YVsnY3VycmVudENvbG9yVHlwZSddKSB7XG4gICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+WFiOWujOaIkOiCpOiJsuexu+Wei+mAieaLqScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib2R5Q291bnRTdGVwMVNzaG93ID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuYm9keUNvdW50U3RlcDJTc2hvdyA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaWYgKCF0aGlzLmJvZHlDb3VudERhdGFbJ2N1cnJlbnRGZWF0dXJlVHlwZSddLmxlbmd0aCkge1xuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfor7flhYjlrozmiJDouqvmnZDnibnngrnpgInmi6knLFxuICAgICAgICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19