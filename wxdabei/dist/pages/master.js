'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _focusOne = require('./../components/focusOne.js');

var _focusOne2 = _interopRequireDefault(_focusOne);

var _horiImgList = require('./../components/horiImgList.js');

var _horiImgList2 = _interopRequireDefault(_horiImgList);

var _newState = require('./../components/newState.js');

var _newState2 = _interopRequireDefault(_newState);

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
      navigationBarTitleText: '搭配师'
    }, _this.$props = { "masterone": { "xmlns:v-bind": "", "v-bind:avatar.once": "mainAvatar", "v-bind:name.once": "mainName", "v-bind:title.once": "mainTitle", "v-bind:isdetail.once": "mainDetail", "v-bind:isneedtitle.once": "isMainNeedTitle", "v-bind:isneedfocus.once": "isMainNeedFocus" }, "imghorilist": { "v-bind:imglist.once": "detaiImglist", "v-bind:horiimgitemhg.once": "detailImgHg", "v-bind:horiimgitemwd.once": "detailImgWd" }, "statusitem": { "v-bind:statetext.once": "masterStatusItem.stateText", "v-bind:focusname.once": "masterStatusItem.focusName", "v-bind:focusavatar.once": "masterStatusItem.focusAvatar", "v-bind:stateimg.once": "masterStatusItem.stateImg", "v-bind:userinfo.once": "userInfo", "v-bind:commentstarttime.once": "masterStatusItem.commentStartTime", "v-bind:commentavatarlist.once": "masterStatusItem.commentAvatarList", "v-bind:commentdatalist.once": "masterStatusItem.commentDataList" } }, _this.$events = {}, _this.components = {
      masterone: _focusOne2.default,
      imghorilist: _horiImgList2.default,
      statusitem: _newState2.default
    }, _this.data = {
      userInfo: {},
      mainAvatar: '',
      mainName: '',
      mainTitle: '',
      isMainNeedTitle: true,
      mainDetail: true,
      isMainNeedFocus: true,
      essayNumber: '',
      likeNumber: '',
      commentNumber: '',
      detaiImglist: '',
      detailImgHg: '126rpx',
      detailImgWd: '126rpx',
      masterStatusList: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/master'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1hc3Rlcm9uZSIsImltZ2hvcmlsaXN0Iiwic3RhdHVzaXRlbSIsImRhdGEiLCJ1c2VySW5mbyIsIm1haW5BdmF0YXIiLCJtYWluTmFtZSIsIm1haW5UaXRsZSIsImlzTWFpbk5lZWRUaXRsZSIsIm1haW5EZXRhaWwiLCJpc01haW5OZWVkRm9jdXMiLCJlc3NheU51bWJlciIsImxpa2VOdW1iZXIiLCJjb21tZW50TnVtYmVyIiwiZGV0YWlJbWdsaXN0IiwiZGV0YWlsSW1nSGciLCJkZXRhaWxJbWdXZCIsIm1hc3RlclN0YXR1c0xpc3QiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQixZQUF4QyxFQUFxRCxvQkFBbUIsVUFBeEUsRUFBbUYscUJBQW9CLFdBQXZHLEVBQW1ILHdCQUF1QixZQUExSSxFQUF1SiwyQkFBMEIsaUJBQWpMLEVBQW1NLDJCQUEwQixpQkFBN04sRUFBYixFQUE2UCxlQUFjLEVBQUMsdUJBQXNCLGNBQXZCLEVBQXNDLDZCQUE0QixhQUFsRSxFQUFnRiw2QkFBNEIsYUFBNUcsRUFBM1EsRUFBc1ksY0FBYSxFQUFDLHlCQUF3Qiw0QkFBekIsRUFBc0QseUJBQXdCLDRCQUE5RSxFQUEyRywyQkFBMEIsOEJBQXJJLEVBQW9LLHdCQUF1QiwyQkFBM0wsRUFBdU4sd0JBQXVCLFVBQTlPLEVBQXlQLGdDQUErQixtQ0FBeFIsRUFBNFQsaUNBQWdDLG9DQUE1VixFQUFpWSwrQkFBOEIsa0NBQS9aLEVBQW5aLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLG1DQURRO0FBRVJDLHdDQUZRO0FBR1JDO0FBSFEsSyxRQUtWQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxrQkFBWSxFQUZQO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsaUJBQVcsRUFKTjtBQUtMQyx1QkFBaUIsSUFMWjtBQU1MQyxrQkFBWSxJQU5QO0FBT0xDLHVCQUFpQixJQVBaO0FBUUxDLG1CQUFhLEVBUlI7QUFTTEMsa0JBQVksRUFUUDtBQVVMQyxxQkFBZSxFQVZWO0FBV0xDLG9CQUFjLEVBWFQ7QUFZTEMsbUJBQWEsUUFaUjtBQWFMQyxtQkFBYSxRQWJSO0FBY0xDLHdCQUFrQjtBQWRiLEs7Ozs7RUFYMEIsZUFBS0MsSTs7a0JBQW5CeEIsSyIsImZpbGUiOiJtYXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IG1hc3Rlck9uZSBmcm9tICcuLi9jb21wb25lbnRzL2ZvY3VzT25lJ1xuICBpbXBvcnQgaG9yaUltZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ob3JpSW1nTGlzdCdcbiAgaW1wb3J0IHN0YXR1c0l0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9uZXdTdGF0ZSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmkK3phY3luIgnXG4gICAgfVxuICAgJHByb3BzID0ge1wibWFzdGVyb25lXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphdmF0YXIub25jZVwiOlwibWFpbkF2YXRhclwiLFwidi1iaW5kOm5hbWUub25jZVwiOlwibWFpbk5hbWVcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJtYWluVGl0bGVcIixcInYtYmluZDppc2RldGFpbC5vbmNlXCI6XCJtYWluRGV0YWlsXCIsXCJ2LWJpbmQ6aXNuZWVkdGl0bGUub25jZVwiOlwiaXNNYWluTmVlZFRpdGxlXCIsXCJ2LWJpbmQ6aXNuZWVkZm9jdXMub25jZVwiOlwiaXNNYWluTmVlZEZvY3VzXCJ9LFwiaW1naG9yaWxpc3RcIjp7XCJ2LWJpbmQ6aW1nbGlzdC5vbmNlXCI6XCJkZXRhaUltZ2xpc3RcIixcInYtYmluZDpob3JpaW1naXRlbWhnLm9uY2VcIjpcImRldGFpbEltZ0hnXCIsXCJ2LWJpbmQ6aG9yaWltZ2l0ZW13ZC5vbmNlXCI6XCJkZXRhaWxJbWdXZFwifSxcInN0YXR1c2l0ZW1cIjp7XCJ2LWJpbmQ6c3RhdGV0ZXh0Lm9uY2VcIjpcIm1hc3RlclN0YXR1c0l0ZW0uc3RhdGVUZXh0XCIsXCJ2LWJpbmQ6Zm9jdXNuYW1lLm9uY2VcIjpcIm1hc3RlclN0YXR1c0l0ZW0uZm9jdXNOYW1lXCIsXCJ2LWJpbmQ6Zm9jdXNhdmF0YXIub25jZVwiOlwibWFzdGVyU3RhdHVzSXRlbS5mb2N1c0F2YXRhclwiLFwidi1iaW5kOnN0YXRlaW1nLm9uY2VcIjpcIm1hc3RlclN0YXR1c0l0ZW0uc3RhdGVJbWdcIixcInYtYmluZDp1c2VyaW5mby5vbmNlXCI6XCJ1c2VySW5mb1wiLFwidi1iaW5kOmNvbW1lbnRzdGFydHRpbWUub25jZVwiOlwibWFzdGVyU3RhdHVzSXRlbS5jb21tZW50U3RhcnRUaW1lXCIsXCJ2LWJpbmQ6Y29tbWVudGF2YXRhcmxpc3Qub25jZVwiOlwibWFzdGVyU3RhdHVzSXRlbS5jb21tZW50QXZhdGFyTGlzdFwiLFwidi1iaW5kOmNvbW1lbnRkYXRhbGlzdC5vbmNlXCI6XCJtYXN0ZXJTdGF0dXNJdGVtLmNvbW1lbnREYXRhTGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBtYXN0ZXJvbmU6IG1hc3Rlck9uZSxcbiAgICAgIGltZ2hvcmlsaXN0OiBob3JpSW1nTGlzdCxcbiAgICAgIHN0YXR1c2l0ZW06IHN0YXR1c0l0ZW1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7fSxcbiAgICAgIG1haW5BdmF0YXI6ICcnLFxuICAgICAgbWFpbk5hbWU6ICcnLFxuICAgICAgbWFpblRpdGxlOiAnJyxcbiAgICAgIGlzTWFpbk5lZWRUaXRsZTogdHJ1ZSxcbiAgICAgIG1haW5EZXRhaWw6IHRydWUsXG4gICAgICBpc01haW5OZWVkRm9jdXM6IHRydWUsXG4gICAgICBlc3NheU51bWJlcjogJycsXG4gICAgICBsaWtlTnVtYmVyOiAnJyxcbiAgICAgIGNvbW1lbnROdW1iZXI6ICcnLFxuICAgICAgZGV0YWlJbWdsaXN0OiAnJyxcbiAgICAgIGRldGFpbEltZ0hnOiAnMTI2cnB4JyxcbiAgICAgIGRldGFpbEltZ1dkOiAnMTI2cnB4JyxcbiAgICAgIG1hc3RlclN0YXR1c0xpc3Q6IFtdXG4gICAgfVxuICB9XG4iXX0=