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
      navigationBarTitleText: '搭呗'
    }, _this.$props = { "search": { "xmlns:v-bind": "", "v-bind:recommendlist.once": "searchRecommendData" }, "imgwall": { "v-bind:wallimagelines.once": "imgWallData" } }, _this.$events = {}, _this.components = {
      search: _searchBar2.default,
      imgwall: _indexwall2.default
    }, _this.data = {
      isShowWall: true,
      isShowBodyCount: false,
      indexTabList: [{
        typeTitle: '场景',
        typeData: 'scene'
      }, {
        typeTitle: '身材',
        typeData: 'body'
      }, {
        typeTitle: '风格',
        typeData: 'style'
      }, {
        typeTitle: 'For Me',
        typeData: []
      }],
      imgWallData: _data.indexWallData['scene'],
      bodyCountStep0Sshow: true,
      bodyCountStep1Sshow: false,
      bodyCountStep2Sshow: false,
      bodyCountData: { currentFeatureType: [] }, // 记录用户的身材数据对象
      tabStyleItems: ['index-tabs-item-on', '', '', ''],
      bodyTypeIcons: [['item-nocheck', 'item-nocheck', 'item-nocheck'], ['item-nocheck', 'item-nocheck', 'item-nocheck'], ['item-nocheck', 'item-nocheck', 'item-nocheck']],
      colorTypeIcons: [[{ icon: 'item-nocheck', textcolor: 'nocheck-color' }, { icon: 'item-nocheck', textcolor: 'nocheck-color' }], [{ icon: 'item-nocheck', textcolor: 'nocheck-color' }, { icon: 'item-nocheck', textcolor: 'nocheck-color' }]],
      bodyTypeData: [[{ imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_3i8ge54bjaijl416ccb5jb1783eac_120x120.png', typeValue: 'type1' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_29dk3kj9ke3eeh20geh809eg5j4kd_120x120.png', typeValue: 'type2' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_73akb81i1l804aiage4e17ffe1gi5_120x120.png', typeValue: 'type3' }], [{ imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_8016k0kd8e76dih8h05h6k571c0h2_120x120.png', typeValue: 'type4' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_3a7c88g24hbhlh4cbek902a81edfb_120x120.png', typeValue: 'type5' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_0jfi75jf75dfj09j367c1hgh1kd2a_120x120.png', typeValue: 'type6' }], [{ imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_37a67485eed9d4fi4ic049f5bekil_120x120.png', typeValue: 'type7' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_4b2fdhhg90gb8f28cade1dkj6hf83_120x120.png', typeValue: 'type8' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_203495f84cfc9e50eb9223f59dkjj_120x120.png', typeValue: 'type9' }]],
      colorTypeData: [[{ imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_1b472cje39bficjc20aa06a403g36_125x127.png', typeValue: 'type1', text: '晶莹白皙' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_47l6hc3598ed1hekd63kcb0411ja1_128x127.png', typeValue: 'type2', text: '自然红润' }], [{ imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_07hf51daaf499k3062ab6bk60l4hb_125x123.png', typeValue: 'type3', text: '自然偏黄' }, { imgUrl: 'https://s10.mogucdn.com/mlcdn/c45406/170818_8g5l7kl4089d42i3b5e19ek9660g8_128x123.png', typeValue: 'type4', text: '活力小麦' }]],
      featureTypeData: ['脖子粗', '小平胸', 'PP大', '小短腿', '脸大', '胳膊粗', '小肚腩', '小粗腿'],
      featureTypeIcons: ['item-nocheck', 'item-nocheck', 'item-nocheck', 'item-nocheck', 'item-nocheck', 'item-nocheck', 'item-nocheck', 'item-nocheck']
    }, _this.computed = {
      tabItemWidth: function tabItemWidth() {
        return 1 / this.indexTabList.length * 100 + '%';
      }
    }, _this.methods = {
      selectTab: function selectTab(event) {
        var currentTabIndex = event.currentTarget.dataset.tabIndex;
        var currentTabType = event.currentTarget.dataset.tabType;
        this.tabStyleItems = this.tabStyleItems.map(function (item, index) {
          return currentTabIndex === index ? 'index-tabs-item-on' : '';
        });
        if (_data.indexWallData[currentTabType]) {
          this.imgWallData = _data.indexWallData[currentTabType];
        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2VhcmNoIiwiaW1nd2FsbCIsImRhdGEiLCJpc1Nob3dXYWxsIiwiaXNTaG93Qm9keUNvdW50IiwiaW5kZXhUYWJMaXN0IiwidHlwZVRpdGxlIiwidHlwZURhdGEiLCJpbWdXYWxsRGF0YSIsImJvZHlDb3VudFN0ZXAwU3Nob3ciLCJib2R5Q291bnRTdGVwMVNzaG93IiwiYm9keUNvdW50U3RlcDJTc2hvdyIsImJvZHlDb3VudERhdGEiLCJjdXJyZW50RmVhdHVyZVR5cGUiLCJ0YWJTdHlsZUl0ZW1zIiwiYm9keVR5cGVJY29ucyIsImNvbG9yVHlwZUljb25zIiwiaWNvbiIsInRleHRjb2xvciIsImJvZHlUeXBlRGF0YSIsImltZ1VybCIsInR5cGVWYWx1ZSIsImNvbG9yVHlwZURhdGEiLCJ0ZXh0IiwiZmVhdHVyZVR5cGVEYXRhIiwiZmVhdHVyZVR5cGVJY29ucyIsImNvbXB1dGVkIiwidGFiSXRlbVdpZHRoIiwibGVuZ3RoIiwibWV0aG9kcyIsInNlbGVjdFRhYiIsImV2ZW50IiwiY3VycmVudFRhYkluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0YWJJbmRleCIsImN1cnJlbnRUYWJUeXBlIiwidGFiVHlwZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImdldFN0b3JhZ2VTeW5jIiwiY29uc29sZSIsImxvZyIsInR5cGVTZWxlY3QiLCJ0aGVEYXRhVHlwZSIsInRhcmdldCIsInR5cGUiLCJ0aGVEYXRhVmFsdWUiLCJ2YWx1ZSIsInRoZUJlbG9uZ1JvdyIsImJlbG9uZ1JvdyIsInRoZUJlbG9uZ1Jvd0luZGV4IiwiYmVsb25nUm93aW5kZXgiLCJ0aGVGZWF0dXJlSW5kZXgiLCJmZWF0dXJlaW5kZXgiLCJyb3dpdGVtIiwicm93aW5kZXgiLCJwdXNoIiwiYm9keUNvdW50Q29uZmlybSIsImN1cnJlbnRTdGVwSW5kZXgiLCJOdW1iZXIiLCJzdGVwSW5kZXgiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsNkJBQTRCLHFCQUEvQyxFQUFWLEVBQWdGLFdBQVUsRUFBQyw4QkFBNkIsYUFBOUIsRUFBMUYsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsaUNBRFE7QUFFUkM7QUFGUSxLLFFBSVZDLEksR0FBTztBQUNMQyxrQkFBWSxJQURQO0FBRUxDLHVCQUFpQixLQUZaO0FBR0xDLG9CQUFjLENBQUM7QUFDYkMsbUJBQVcsSUFERTtBQUViQyxrQkFBVTtBQUZHLE9BQUQsRUFHWDtBQUNERCxtQkFBVyxJQURWO0FBRURDLGtCQUFVO0FBRlQsT0FIVyxFQU1YO0FBQ0RELG1CQUFXLElBRFY7QUFFREMsa0JBQVU7QUFGVCxPQU5XLEVBU1g7QUFDREQsbUJBQVcsUUFEVjtBQUVEQyxrQkFBVTtBQUZULE9BVFcsQ0FIVDtBQWdCTEMsbUJBQWEsb0JBQWMsT0FBZCxDQWhCUjtBQWlCTEMsMkJBQXFCLElBakJoQjtBQWtCTEMsMkJBQXFCLEtBbEJoQjtBQW1CTEMsMkJBQXFCLEtBbkJoQjtBQW9CTEMscUJBQWUsRUFBQ0Msb0JBQW9CLEVBQXJCLEVBcEJWLEVBb0JvQztBQUN6Q0MscUJBQWUsQ0FBQyxvQkFBRCxFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQixFQUEvQixDQXJCVjtBQXNCTEMscUJBQWUsQ0FBQyxDQUFDLGNBQUQsRUFBaUIsY0FBakIsRUFBaUMsY0FBakMsQ0FBRCxFQUFtRCxDQUFDLGNBQUQsRUFBaUIsY0FBakIsRUFBaUMsY0FBakMsQ0FBbkQsRUFBcUcsQ0FBQyxjQUFELEVBQWlCLGNBQWpCLEVBQWlDLGNBQWpDLENBQXJHLENBdEJWO0FBdUJMQyxzQkFBZ0IsQ0FBQyxDQUFDLEVBQUNDLE1BQU0sY0FBUCxFQUF1QkMsV0FBVyxlQUFsQyxFQUFELEVBQXFELEVBQUNELE1BQU0sY0FBUCxFQUF1QkMsV0FBVyxlQUFsQyxFQUFyRCxDQUFELEVBQTJHLENBQUMsRUFBQ0QsTUFBTSxjQUFQLEVBQXVCQyxXQUFXLGVBQWxDLEVBQUQsRUFBcUQsRUFBQ0QsTUFBTSxjQUFQLEVBQXVCQyxXQUFXLGVBQWxDLEVBQXJELENBQTNHLENBdkJYO0FBd0JMQyxvQkFBYyxDQUFDLENBQUMsRUFBQ0MsUUFBUSx1RkFBVCxFQUFrR0MsV0FBVyxPQUE3RyxFQUFELEVBQXdILEVBQUNELFFBQVEsdUZBQVQsRUFBa0dDLFdBQVcsT0FBN0csRUFBeEgsRUFBK08sRUFBQ0QsUUFBUSx1RkFBVCxFQUFrR0MsV0FBVyxPQUE3RyxFQUEvTyxDQUFELEVBQXdXLENBQUMsRUFBQ0QsUUFBUSx1RkFBVCxFQUFrR0MsV0FBVyxPQUE3RyxFQUFELEVBQXdILEVBQUNELFFBQVEsdUZBQVQsRUFBa0dDLFdBQVcsT0FBN0csRUFBeEgsRUFBK08sRUFBQ0QsUUFBUSx1RkFBVCxFQUFrR0MsV0FBVyxPQUE3RyxFQUEvTyxDQUF4VyxFQUErc0IsQ0FBQyxFQUFDRCxRQUFRLHVGQUFULEVBQWtHQyxXQUFXLE9BQTdHLEVBQUQsRUFBd0gsRUFBQ0QsUUFBUSx1RkFBVCxFQUFrR0MsV0FBVyxPQUE3RyxFQUF4SCxFQUErTyxFQUFDRCxRQUFRLHVGQUFULEVBQWtHQyxXQUFXLE9BQTdHLEVBQS9PLENBQS9zQixDQXhCVDtBQXlCTEMscUJBQWUsQ0FBQyxDQUFDLEVBQUNGLFFBQVEsdUZBQVQsRUFBa0dDLFdBQVcsT0FBN0csRUFBc0hFLE1BQU0sTUFBNUgsRUFBRCxFQUFzSSxFQUFDSCxRQUFRLHVGQUFULEVBQWtHQyxXQUFXLE9BQTdHLEVBQXNIRSxNQUFNLE1BQTVILEVBQXRJLENBQUQsRUFBNlEsQ0FBQyxFQUFDSCxRQUFRLHVGQUFULEVBQWtHQyxXQUFXLE9BQTdHLEVBQXNIRSxNQUFNLE1BQTVILEVBQUQsRUFBc0ksRUFBQ0gsUUFBUSx1RkFBVCxFQUFrR0MsV0FBVyxPQUE3RyxFQUFzSEUsTUFBTSxNQUE1SCxFQUF0SSxDQUE3USxDQXpCVjtBQTBCTEMsdUJBQWlCLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLElBQTdCLEVBQW1DLEtBQW5DLEVBQTBDLEtBQTFDLEVBQWlELEtBQWpELENBMUJaO0FBMkJMQyx3QkFBa0IsQ0FBQyxjQUFELEVBQWlCLGNBQWpCLEVBQWlDLGNBQWpDLEVBQWlELGNBQWpELEVBQWlFLGNBQWpFLEVBQWlGLGNBQWpGLEVBQWlHLGNBQWpHLEVBQWlILGNBQWpIO0FBM0JiLEssUUE2QlBDLFEsR0FBVztBQUNUQyxrQkFEUywwQkFDTztBQUNkLGVBQU8sSUFBSyxLQUFLdEIsWUFBTCxDQUFrQnVCLE1BQXZCLEdBQWlDLEdBQWpDLEdBQXVDLEdBQTlDO0FBQ0Q7QUFIUSxLLFFBTVhDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxLQURILEVBQ1U7QUFDaEIsWUFBSUMsa0JBQWtCRCxNQUFNRSxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkMsUUFBbEQ7QUFDQSxZQUFJQyxpQkFBaUJMLE1BQU1FLGFBQU4sQ0FBb0JDLE9BQXBCLENBQTRCRyxPQUFqRDtBQUNBLGFBQUt2QixhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJ3QixHQUFuQixDQUF1QixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDM0QsaUJBQU9SLG9CQUFvQlEsS0FBcEIsR0FBNEIsb0JBQTVCLEdBQW1ELEVBQTFEO0FBQ0QsU0FGb0IsQ0FBckI7QUFHQSxZQUFJLG9CQUFjSixjQUFkLENBQUosRUFBbUM7QUFDakMsZUFBSzVCLFdBQUwsR0FBbUIsb0JBQWM0QixjQUFkLENBQW5CO0FBQ0Q7QUFDRCxZQUFLSixvQkFBb0IsS0FBSzNCLFlBQUwsQ0FBa0J1QixNQUFsQixHQUEyQixDQUFoRCxJQUFzRCxDQUFDLGVBQUthLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBM0QsRUFBNEY7QUFDMUYsZUFBS3RDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxlQUFLQyxlQUFMLEdBQXVCLElBQXZCO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsZUFBS0QsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGVBQUtDLGVBQUwsR0FBdUIsS0FBdkI7QUFDRDtBQUNEc0MsZ0JBQVFDLEdBQVIsQ0FBWVgsZUFBWjtBQUNELE9BbEJPO0FBbUJSWSxnQkFuQlEsc0JBbUJJYixLQW5CSixFQW1CVztBQUNqQixZQUFJYyxjQUFjZCxNQUFNZSxNQUFOLENBQWFaLE9BQWIsQ0FBcUJhLElBQXZDO0FBQ0EsWUFBSUMsZUFBZWpCLE1BQU1lLE1BQU4sQ0FBYVosT0FBYixDQUFxQmUsS0FBeEM7QUFDQSxZQUFJQyxlQUFlbkIsTUFBTWUsTUFBTixDQUFhWixPQUFiLENBQXFCaUIsU0FBeEM7QUFDQSxZQUFJQyxvQkFBb0JyQixNQUFNZSxNQUFOLENBQWFaLE9BQWIsQ0FBcUJtQixjQUE3QztBQUNBLFlBQUlDLGtCQUFrQnZCLE1BQU1lLE1BQU4sQ0FBYVosT0FBYixDQUFxQnFCLFlBQTNDO0FBQ0EsWUFBSSxDQUFDVixXQUFELElBQWdCLENBQUNHLFlBQXJCLEVBQW1DO0FBQ2pDO0FBQ0Q7QUFDRCxnQkFBUUgsV0FBUjtBQUNFLGVBQUssTUFBTDtBQUNFLGlCQUFLakMsYUFBTCxDQUFtQixpQkFBbkIsSUFBd0NvQyxZQUF4QztBQUNBLGlCQUFLakMsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CdUIsR0FBbkIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzNELHFCQUFPVSxpQkFBaUJWLEtBQWpCLEdBQXlCRCxLQUFLRCxHQUFMLENBQVMsVUFBQ2tCLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUM5RCx1QkFBT0wsc0JBQXNCSyxRQUF0QixHQUFpQyxjQUFqQyxHQUFrRCxjQUF6RDtBQUNELGVBRitCLENBQXpCLEdBRUZsQixLQUFLRCxHQUFMLENBQVMsVUFBQ2tCLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUNuQyx1QkFBTyxjQUFQO0FBQ0QsZUFGSSxDQUZMO0FBS0QsYUFOb0IsQ0FBckI7QUFPQTtBQUNGLGVBQUssT0FBTDtBQUNFLGlCQUFLN0MsYUFBTCxDQUFtQixrQkFBbkIsSUFBeUNvQyxZQUF6QztBQUNBLGlCQUFLaEMsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9Cc0IsR0FBcEIsQ0FBd0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzdELHFCQUFPVSxpQkFBaUJWLEtBQWpCLEdBQXlCRCxLQUFLRCxHQUFMLENBQVMsVUFBQ2tCLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUM5RCx1QkFBT0wsc0JBQXNCSyxRQUF0QixHQUFpQyxFQUFDeEMsTUFBTSxjQUFQLEVBQXVCQyxXQUFXLGVBQWxDLEVBQWpDLEdBQXNGLEVBQUNELE1BQU0sY0FBUCxFQUF1QkMsV0FBVyxlQUFsQyxFQUE3RjtBQUNELGVBRitCLENBQXpCLEdBRUZxQixLQUFLRCxHQUFMLENBQVMsVUFBQ2tCLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUNuQyx1QkFBTyxFQUFDeEMsTUFBTSxjQUFQLEVBQXVCQyxXQUFXLGVBQWxDLEVBQVA7QUFDRCxlQUZJLENBRkw7QUFLRCxhQU5xQixDQUF0QjtBQU9BO0FBQ0YsZUFBSyxTQUFMO0FBQ0UsaUJBQUtOLGFBQUwsQ0FBbUIsb0JBQW5CLEVBQXlDOEMsSUFBekMsQ0FBOENWLFlBQTlDO0FBQ0EsaUJBQUt2QixnQkFBTCxDQUFzQjZCLGVBQXRCLElBQXlDLHFCQUF6QztBQUNBO0FBeEJKO0FBMEJELE9BdERPO0FBdURSSyxzQkF2RFEsNEJBdURVNUIsS0F2RFYsRUF1RGlCO0FBQ3ZCLFlBQUk2QixtQkFBbUJDLE9BQU85QixNQUFNZSxNQUFOLENBQWFaLE9BQWIsQ0FBcUI0QixTQUE1QixDQUF2QjtBQUNBLGdCQUFRRixnQkFBUjtBQUNFLGVBQUssQ0FBTDtBQUNFLGdCQUFJLENBQUMsS0FBS2hELGFBQUwsQ0FBbUIsaUJBQW5CLENBQUwsRUFBNEM7QUFDMUM7QUFDQSw2QkFBS21ELFNBQUwsQ0FBZTtBQUNiQyx1QkFBTyxZQURNO0FBRWIvQyxzQkFBTSxTQUZPO0FBR2JnRCwwQkFBVTtBQUhHLGVBQWY7QUFLQTtBQUNEO0FBQ0QsaUJBQUt4RCxtQkFBTCxHQUEyQixLQUEzQjtBQUNBLGlCQUFLQyxtQkFBTCxHQUEyQixJQUEzQjtBQUNBO0FBQ0YsZUFBSyxDQUFMO0FBQ0UsZ0JBQUksQ0FBQyxLQUFLRSxhQUFMLENBQW1CLGtCQUFuQixDQUFMLEVBQTZDO0FBQzNDLDZCQUFLbUQsU0FBTCxDQUFlO0FBQ2JDLHVCQUFPLFlBRE07QUFFYi9DLHNCQUFNLFNBRk87QUFHYmdELDBCQUFVO0FBSEcsZUFBZjtBQUtBO0FBQ0Q7QUFDRCxpQkFBS3ZELG1CQUFMLEdBQTJCLEtBQTNCO0FBQ0EsaUJBQUtDLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0E7QUFDRixlQUFLLENBQUw7QUFDRSxnQkFBSSxDQUFDLEtBQUtDLGFBQUwsQ0FBbUIsb0JBQW5CLEVBQXlDZ0IsTUFBOUMsRUFBc0Q7QUFDcEQsNkJBQUttQyxTQUFMLENBQWU7QUFDYkMsdUJBQU8sWUFETTtBQUViL0Msc0JBQU0sU0FGTztBQUdiZ0QsMEJBQVU7QUFIRyxlQUFmO0FBS0Q7QUFDRDtBQWxDSjtBQW9DRDtBQTdGTyxLOzs7O0VBN0N1QixlQUFLQyxJOztrQkFBbkJ4RSxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBzZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hCYXInXG4gIGltcG9ydCBpbWdXYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXh3YWxsJ1xuICBpbXBvcnQge2luZGV4V2FsbERhdGF9IGZyb20gJy4uL21peGlucy9kYXRhLmpzJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aQreWRlydcbiAgICB9XG4gICAkcHJvcHMgPSB7XCJzZWFyY2hcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnJlY29tbWVuZGxpc3Qub25jZVwiOlwic2VhcmNoUmVjb21tZW5kRGF0YVwifSxcImltZ3dhbGxcIjp7XCJ2LWJpbmQ6d2FsbGltYWdlbGluZXMub25jZVwiOlwiaW1nV2FsbERhdGFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgc2VhcmNoOiBzZWFyY2hCYXIsXG4gICAgICBpbWd3YWxsOiBpbWdXYWxsXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBpc1Nob3dXYWxsOiB0cnVlLFxuICAgICAgaXNTaG93Qm9keUNvdW50OiBmYWxzZSxcbiAgICAgIGluZGV4VGFiTGlzdDogW3tcbiAgICAgICAgdHlwZVRpdGxlOiAn5Zy65pmvJyxcbiAgICAgICAgdHlwZURhdGE6ICdzY2VuZSdcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZVRpdGxlOiAn6Lqr5p2QJyxcbiAgICAgICAgdHlwZURhdGE6ICdib2R5J1xuICAgICAgfSwge1xuICAgICAgICB0eXBlVGl0bGU6ICfpo47moLwnLFxuICAgICAgICB0eXBlRGF0YTogJ3N0eWxlJ1xuICAgICAgfSwge1xuICAgICAgICB0eXBlVGl0bGU6ICdGb3IgTWUnLFxuICAgICAgICB0eXBlRGF0YTogW11cbiAgICAgIH1dLFxuICAgICAgaW1nV2FsbERhdGE6IGluZGV4V2FsbERhdGFbJ3NjZW5lJ10sXG4gICAgICBib2R5Q291bnRTdGVwMFNzaG93OiB0cnVlLFxuICAgICAgYm9keUNvdW50U3RlcDFTc2hvdzogZmFsc2UsXG4gICAgICBib2R5Q291bnRTdGVwMlNzaG93OiBmYWxzZSxcbiAgICAgIGJvZHlDb3VudERhdGE6IHtjdXJyZW50RmVhdHVyZVR5cGU6IFtdfSwgLy8g6K6w5b2V55So5oi355qE6Lqr5p2Q5pWw5o2u5a+56LGhXG4gICAgICB0YWJTdHlsZUl0ZW1zOiBbJ2luZGV4LXRhYnMtaXRlbS1vbicsICcnLCAnJywgJyddLFxuICAgICAgYm9keVR5cGVJY29uczogW1snaXRlbS1ub2NoZWNrJywgJ2l0ZW0tbm9jaGVjaycsICdpdGVtLW5vY2hlY2snXSwgWydpdGVtLW5vY2hlY2snLCAnaXRlbS1ub2NoZWNrJywgJ2l0ZW0tbm9jaGVjayddLCBbJ2l0ZW0tbm9jaGVjaycsICdpdGVtLW5vY2hlY2snLCAnaXRlbS1ub2NoZWNrJ11dLFxuICAgICAgY29sb3JUeXBlSWNvbnM6IFtbe2ljb246ICdpdGVtLW5vY2hlY2snLCB0ZXh0Y29sb3I6ICdub2NoZWNrLWNvbG9yJ30sIHtpY29uOiAnaXRlbS1ub2NoZWNrJywgdGV4dGNvbG9yOiAnbm9jaGVjay1jb2xvcid9XSwgW3tpY29uOiAnaXRlbS1ub2NoZWNrJywgdGV4dGNvbG9yOiAnbm9jaGVjay1jb2xvcid9LCB7aWNvbjogJ2l0ZW0tbm9jaGVjaycsIHRleHRjb2xvcjogJ25vY2hlY2stY29sb3InfV1dLFxuICAgICAgYm9keVR5cGVEYXRhOiBbW3tpbWdVcmw6ICdodHRwczovL3MxMC5tb2d1Y2RuLmNvbS9tbGNkbi9jNDU0MDYvMTcwODE4XzNpOGdlNTRiamFpamw0MTZjY2I1amIxNzgzZWFjXzEyMHgxMjAucG5nJywgdHlwZVZhbHVlOiAndHlwZTEnfSwge2ltZ1VybDogJ2h0dHBzOi8vczEwLm1vZ3VjZG4uY29tL21sY2RuL2M0NTQwNi8xNzA4MThfMjlkazNrajlrZTNlZWgyMGdlaDgwOWVnNWo0a2RfMTIweDEyMC5wbmcnLCB0eXBlVmFsdWU6ICd0eXBlMid9LCB7aW1nVXJsOiAnaHR0cHM6Ly9zMTAubW9ndWNkbi5jb20vbWxjZG4vYzQ1NDA2LzE3MDgxOF83M2FrYjgxaTFsODA0YWlhZ2U0ZTE3ZmZlMWdpNV8xMjB4MTIwLnBuZycsIHR5cGVWYWx1ZTogJ3R5cGUzJ31dLCBbe2ltZ1VybDogJ2h0dHBzOi8vczEwLm1vZ3VjZG4uY29tL21sY2RuL2M0NTQwNi8xNzA4MThfODAxNmswa2Q4ZTc2ZGloOGgwNWg2azU3MWMwaDJfMTIweDEyMC5wbmcnLCB0eXBlVmFsdWU6ICd0eXBlNCd9LCB7aW1nVXJsOiAnaHR0cHM6Ly9zMTAubW9ndWNkbi5jb20vbWxjZG4vYzQ1NDA2LzE3MDgxOF8zYTdjODhnMjRoYmhsaDRjYmVrOTAyYTgxZWRmYl8xMjB4MTIwLnBuZycsIHR5cGVWYWx1ZTogJ3R5cGU1J30sIHtpbWdVcmw6ICdodHRwczovL3MxMC5tb2d1Y2RuLmNvbS9tbGNkbi9jNDU0MDYvMTcwODE4XzBqZmk3NWpmNzVkZmowOWozNjdjMWhnaDFrZDJhXzEyMHgxMjAucG5nJywgdHlwZVZhbHVlOiAndHlwZTYnfV0sIFt7aW1nVXJsOiAnaHR0cHM6Ly9zMTAubW9ndWNkbi5jb20vbWxjZG4vYzQ1NDA2LzE3MDgxOF8zN2E2NzQ4NWVlZDlkNGZpNGljMDQ5ZjViZWtpbF8xMjB4MTIwLnBuZycsIHR5cGVWYWx1ZTogJ3R5cGU3J30sIHtpbWdVcmw6ICdodHRwczovL3MxMC5tb2d1Y2RuLmNvbS9tbGNkbi9jNDU0MDYvMTcwODE4XzRiMmZkaGhnOTBnYjhmMjhjYWRlMWRrajZoZjgzXzEyMHgxMjAucG5nJywgdHlwZVZhbHVlOiAndHlwZTgnfSwge2ltZ1VybDogJ2h0dHBzOi8vczEwLm1vZ3VjZG4uY29tL21sY2RuL2M0NTQwNi8xNzA4MThfMjAzNDk1Zjg0Y2ZjOWU1MGViOTIyM2Y1OWRrampfMTIweDEyMC5wbmcnLCB0eXBlVmFsdWU6ICd0eXBlOSd9XV0sXG4gICAgICBjb2xvclR5cGVEYXRhOiBbW3tpbWdVcmw6ICdodHRwczovL3MxMC5tb2d1Y2RuLmNvbS9tbGNkbi9jNDU0MDYvMTcwODE4XzFiNDcyY2plMzliZmljamMyMGFhMDZhNDAzZzM2XzEyNXgxMjcucG5nJywgdHlwZVZhbHVlOiAndHlwZTEnLCB0ZXh0OiAn5pm26I6555m955qZJ30sIHtpbWdVcmw6ICdodHRwczovL3MxMC5tb2d1Y2RuLmNvbS9tbGNkbi9jNDU0MDYvMTcwODE4XzQ3bDZoYzM1OThlZDFoZWtkNjNrY2IwNDExamExXzEyOHgxMjcucG5nJywgdHlwZVZhbHVlOiAndHlwZTInLCB0ZXh0OiAn6Ieq54S257qi5ramJ31dLCBbe2ltZ1VybDogJ2h0dHBzOi8vczEwLm1vZ3VjZG4uY29tL21sY2RuL2M0NTQwNi8xNzA4MThfMDdoZjUxZGFhZjQ5OWszMDYyYWI2Yms2MGw0aGJfMTI1eDEyMy5wbmcnLCB0eXBlVmFsdWU6ICd0eXBlMycsIHRleHQ6ICfoh6rnhLblgY/pu4QnfSwge2ltZ1VybDogJ2h0dHBzOi8vczEwLm1vZ3VjZG4uY29tL21sY2RuL2M0NTQwNi8xNzA4MThfOGc1bDdrbDQwODlkNDJpM2I1ZTE5ZWs5NjYwZzhfMTI4eDEyMy5wbmcnLCB0eXBlVmFsdWU6ICd0eXBlNCcsIHRleHQ6ICfmtLvlipvlsI/puqYnfV1dLFxuICAgICAgZmVhdHVyZVR5cGVEYXRhOiBbJ+iEluWtkOeylycsICflsI/lubPog7gnLCAnUFDlpKcnLCAn5bCP55+t6IW/JywgJ+iEuOWkpycsICfog7PohornspcnLCAn5bCP6IKa6IWpJywgJ+Wwj+eyl+iFvyddLFxuICAgICAgZmVhdHVyZVR5cGVJY29uczogWydpdGVtLW5vY2hlY2snLCAnaXRlbS1ub2NoZWNrJywgJ2l0ZW0tbm9jaGVjaycsICdpdGVtLW5vY2hlY2snLCAnaXRlbS1ub2NoZWNrJywgJ2l0ZW0tbm9jaGVjaycsICdpdGVtLW5vY2hlY2snLCAnaXRlbS1ub2NoZWNrJ11cbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICB0YWJJdGVtV2lkdGggKCkge1xuICAgICAgICByZXR1cm4gMSAvICh0aGlzLmluZGV4VGFiTGlzdC5sZW5ndGgpICogMTAwICsgJyUnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNlbGVjdFRhYiAoZXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYWJJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YWJJbmRleFxuICAgICAgICBsZXQgY3VycmVudFRhYlR5cGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFiVHlwZVxuICAgICAgICB0aGlzLnRhYlN0eWxlSXRlbXMgPSB0aGlzLnRhYlN0eWxlSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjdXJyZW50VGFiSW5kZXggPT09IGluZGV4ID8gJ2luZGV4LXRhYnMtaXRlbS1vbicgOiAnJ1xuICAgICAgICB9KVxuICAgICAgICBpZiAoaW5kZXhXYWxsRGF0YVtjdXJyZW50VGFiVHlwZV0pIHtcbiAgICAgICAgICB0aGlzLmltZ1dhbGxEYXRhID0gaW5kZXhXYWxsRGF0YVtjdXJyZW50VGFiVHlwZV1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGN1cnJlbnRUYWJJbmRleCA9PT0gdGhpcy5pbmRleFRhYkxpc3QubGVuZ3RoIC0gMSkgJiYgIXdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2JvZHlEYXRhJykpIHtcbiAgICAgICAgICB0aGlzLmlzU2hvd1dhbGwgPSBmYWxzZVxuICAgICAgICAgIHRoaXMuaXNTaG93Qm9keUNvdW50ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXNTaG93V2FsbCA9IHRydWVcbiAgICAgICAgICB0aGlzLmlzU2hvd0JvZHlDb3VudCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhYkluZGV4KVxuICAgICAgfSxcbiAgICAgIHR5cGVTZWxlY3QgKGV2ZW50KSB7XG4gICAgICAgIGxldCB0aGVEYXRhVHlwZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGVcbiAgICAgICAgbGV0IHRoZURhdGFWYWx1ZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnZhbHVlXG4gICAgICAgIGxldCB0aGVCZWxvbmdSb3cgPSBldmVudC50YXJnZXQuZGF0YXNldC5iZWxvbmdSb3dcbiAgICAgICAgbGV0IHRoZUJlbG9uZ1Jvd0luZGV4ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYmVsb25nUm93aW5kZXhcbiAgICAgICAgbGV0IHRoZUZlYXR1cmVJbmRleCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmZlYXR1cmVpbmRleFxuICAgICAgICBpZiAoIXRoZURhdGFUeXBlIHx8ICF0aGVEYXRhVmFsdWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoZURhdGFUeXBlKSB7XG4gICAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICB0aGlzLmJvZHlDb3VudERhdGFbJ2N1cnJlbnRCb2R5VHlwZSddID0gdGhlRGF0YVZhbHVlXG4gICAgICAgICAgICB0aGlzLmJvZHlUeXBlSWNvbnMgPSB0aGlzLmJvZHlUeXBlSWNvbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhlQmVsb25nUm93ID09PSBpbmRleCA/IGl0ZW0ubWFwKChyb3dpdGVtLCByb3dpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGVCZWxvbmdSb3dJbmRleCA9PT0gcm93aW5kZXggPyAnaXRlbS1jaGVja2VkJyA6ICdpdGVtLW5vY2hlY2snXG4gICAgICAgICAgICAgIH0pIDogaXRlbS5tYXAoKHJvd2l0ZW0sIHJvd2luZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpdGVtLW5vY2hlY2snXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgICAgICB0aGlzLmJvZHlDb3VudERhdGFbJ2N1cnJlbnRDb2xvclR5cGUnXSA9IHRoZURhdGFWYWx1ZVxuICAgICAgICAgICAgdGhpcy5jb2xvclR5cGVJY29ucyA9IHRoaXMuY29sb3JUeXBlSWNvbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhlQmVsb25nUm93ID09PSBpbmRleCA/IGl0ZW0ubWFwKChyb3dpdGVtLCByb3dpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGVCZWxvbmdSb3dJbmRleCA9PT0gcm93aW5kZXggPyB7aWNvbjogJ2l0ZW0tY2hlY2tlZCcsIHRleHRjb2xvcjogJ2NoZWNrZWQtY29sb3InfSA6IHtpY29uOiAnaXRlbS1ub2NoZWNrJywgdGV4dGNvbG9yOiAnbm9jaGVjay1jb2xvcid9XG4gICAgICAgICAgICAgIH0pIDogaXRlbS5tYXAoKHJvd2l0ZW0sIHJvd2luZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtpY29uOiAnaXRlbS1ub2NoZWNrJywgdGV4dGNvbG9yOiAnbm9jaGVjay1jb2xvcid9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdmZWF0dXJlJzpcbiAgICAgICAgICAgIHRoaXMuYm9keUNvdW50RGF0YVsnY3VycmVudEZlYXR1cmVUeXBlJ10ucHVzaCh0aGVEYXRhVmFsdWUpXG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUeXBlSWNvbnNbdGhlRmVhdHVyZUluZGV4XSA9ICdmZWF0dXJlaXRlbS1jaGVja2VkJ1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJvZHlDb3VudENvbmZpcm0gKGV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50U3RlcEluZGV4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LnN0ZXBJbmRleClcbiAgICAgICAgc3dpdGNoIChjdXJyZW50U3RlcEluZGV4KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgaWYgKCF0aGlzLmJvZHlDb3VudERhdGFbJ2N1cnJlbnRCb2R5VHlwZSddKSB7XG4gICAgICAgICAgICAgIC8vIOWmguaenOeCueWHu+S4i+S4gOatpeaXtuacquWujOaIkOaVsOaNruiuvue9ru+8jOWImee7meeUqOaIt+S4gOS4quaPkOekulxuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfor7flhYjlrozmiJDouqvmnZDnsbvlnovpgInmi6knLFxuICAgICAgICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm9keUNvdW50U3RlcDBTc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmJvZHlDb3VudFN0ZXAxU3Nob3cgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGlmICghdGhpcy5ib2R5Q291bnREYXRhWydjdXJyZW50Q29sb3JUeXBlJ10pIHtcbiAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35YWI5a6M5oiQ6IKk6Imy57G75Z6L6YCJ5oupJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvZHlDb3VudFN0ZXAxU3Nob3cgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5ib2R5Q291bnRTdGVwMlNzaG93ID0gdHJ1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpZiAoIXRoaXMuYm9keUNvdW50RGF0YVsnY3VycmVudEZlYXR1cmVUeXBlJ10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+WFiOWujOaIkOi6q+adkOeJueeCuemAieaLqScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=