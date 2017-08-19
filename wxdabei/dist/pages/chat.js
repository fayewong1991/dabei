'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _questionItem = require('./../components/questionItem.js');

var _questionItem2 = _interopRequireDefault(_questionItem);

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
      navigationBarTitleText: '聊搭'
    }, _this.$props = { "questionitem": { "v-bind:title.once": "questionItem.title", "v-bind:proposer.once": "questionItem.proposer", "v-bind:proposecontent.once": "questionItem.proposeContent", "v-bind:author.once": "questionItem.author", "v-bind:readnumber.once": "questionItem.readNumber", "v-bind:commendnumber.once": "questionItem.commendNumber" }, "statusitem": { "xmlns:v-bind": "", "v-bind:statetext.once": "masterStatusItem.stateText", "v-bind:focusname.once": "masterStatusItem.focusName", "v-bind:focusavatar.once": "masterStatusItem.focusAvatar", "v-bind:stateimg.once": "masterStatusItem.stateImg", "v-bind:userinfo.once": "userInfo", "v-bind:commentstarttime.once": "masterStatusItem.commentStartTime", "v-bind:commentavatarlist.once": "masterStatusItem.commentAvatarList", "v-bind:commentdatalist.once": "masterStatusItem.commentDataList" } }, _this.$events = {}, _this.components = {
      questionitem: _questionItem2.default,
      statusitem: _newState2.default
    }, _this.data = {
      masterStatusList: [],
      questionList: [],
      statusShow: true,
      questionShow: false
    }, _this.methods = {
      switchTab: function switchTab(event) {
        var theClickTab = event.target.dataset.tabType;
        if (theClickTab === 'ground') {
          this.statusShow = true;
          this.questionShow = false;
        } else {
          this.statusShow = false;
          this.questionShow = true;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/chat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJxdWVzdGlvbml0ZW0iLCJzdGF0dXNpdGVtIiwiZGF0YSIsIm1hc3RlclN0YXR1c0xpc3QiLCJxdWVzdGlvbkxpc3QiLCJzdGF0dXNTaG93IiwicXVlc3Rpb25TaG93IiwibWV0aG9kcyIsInN3aXRjaFRhYiIsImV2ZW50IiwidGhlQ2xpY2tUYWIiLCJ0YXJnZXQiLCJkYXRhc2V0IiwidGFiVHlwZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxxQkFBb0Isb0JBQXJCLEVBQTBDLHdCQUF1Qix1QkFBakUsRUFBeUYsOEJBQTZCLDZCQUF0SCxFQUFvSixzQkFBcUIscUJBQXpLLEVBQStMLDBCQUF5Qix5QkFBeE4sRUFBa1AsNkJBQTRCLDRCQUE5USxFQUFoQixFQUE0VCxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIseUJBQXdCLDRCQUEzQyxFQUF3RSx5QkFBd0IsNEJBQWhHLEVBQTZILDJCQUEwQiw4QkFBdkosRUFBc0wsd0JBQXVCLDJCQUE3TSxFQUF5Tyx3QkFBdUIsVUFBaFEsRUFBMlEsZ0NBQStCLG1DQUExUyxFQUE4VSxpQ0FBZ0Msb0NBQTlXLEVBQW1aLCtCQUE4QixrQ0FBamIsRUFBelUsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsMENBRFE7QUFFUkM7QUFGUSxLLFFBSVZDLEksR0FBTztBQUNMQyx3QkFBa0IsRUFEYjtBQUVMQyxvQkFBYyxFQUZUO0FBR0xDLGtCQUFZLElBSFA7QUFJTEMsb0JBQWM7QUFKVCxLLFFBTVBDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxLQURILEVBQ1U7QUFDaEIsWUFBSUMsY0FBY0QsTUFBTUUsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxPQUF2QztBQUNBLFlBQUlILGdCQUFnQixRQUFwQixFQUE4QjtBQUM1QixlQUFLTCxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsZUFBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUNELFNBSEQsTUFHTztBQUNMLGVBQUtELFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxlQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0Q7QUFDRjtBQVZPLEs7Ozs7RUFoQnVCLGVBQUtRLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgcXVlc3Rpb25JdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvcXVlc3Rpb25JdGVtJ1xuICBpbXBvcnQgc3RhdHVzSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL25ld1N0YXRlJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuaQrSdcbiAgICB9XG4gICAkcHJvcHMgPSB7XCJxdWVzdGlvbml0ZW1cIjp7XCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwicXVlc3Rpb25JdGVtLnRpdGxlXCIsXCJ2LWJpbmQ6cHJvcG9zZXIub25jZVwiOlwicXVlc3Rpb25JdGVtLnByb3Bvc2VyXCIsXCJ2LWJpbmQ6cHJvcG9zZWNvbnRlbnQub25jZVwiOlwicXVlc3Rpb25JdGVtLnByb3Bvc2VDb250ZW50XCIsXCJ2LWJpbmQ6YXV0aG9yLm9uY2VcIjpcInF1ZXN0aW9uSXRlbS5hdXRob3JcIixcInYtYmluZDpyZWFkbnVtYmVyLm9uY2VcIjpcInF1ZXN0aW9uSXRlbS5yZWFkTnVtYmVyXCIsXCJ2LWJpbmQ6Y29tbWVuZG51bWJlci5vbmNlXCI6XCJxdWVzdGlvbkl0ZW0uY29tbWVuZE51bWJlclwifSxcInN0YXR1c2l0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnN0YXRldGV4dC5vbmNlXCI6XCJtYXN0ZXJTdGF0dXNJdGVtLnN0YXRlVGV4dFwiLFwidi1iaW5kOmZvY3VzbmFtZS5vbmNlXCI6XCJtYXN0ZXJTdGF0dXNJdGVtLmZvY3VzTmFtZVwiLFwidi1iaW5kOmZvY3VzYXZhdGFyLm9uY2VcIjpcIm1hc3RlclN0YXR1c0l0ZW0uZm9jdXNBdmF0YXJcIixcInYtYmluZDpzdGF0ZWltZy5vbmNlXCI6XCJtYXN0ZXJTdGF0dXNJdGVtLnN0YXRlSW1nXCIsXCJ2LWJpbmQ6dXNlcmluZm8ub25jZVwiOlwidXNlckluZm9cIixcInYtYmluZDpjb21tZW50c3RhcnR0aW1lLm9uY2VcIjpcIm1hc3RlclN0YXR1c0l0ZW0uY29tbWVudFN0YXJ0VGltZVwiLFwidi1iaW5kOmNvbW1lbnRhdmF0YXJsaXN0Lm9uY2VcIjpcIm1hc3RlclN0YXR1c0l0ZW0uY29tbWVudEF2YXRhckxpc3RcIixcInYtYmluZDpjb21tZW50ZGF0YWxpc3Qub25jZVwiOlwibWFzdGVyU3RhdHVzSXRlbS5jb21tZW50RGF0YUxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgcXVlc3Rpb25pdGVtOiBxdWVzdGlvbkl0ZW0sXG4gICAgICBzdGF0dXNpdGVtOiBzdGF0dXNJdGVtXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBtYXN0ZXJTdGF0dXNMaXN0OiBbXSxcbiAgICAgIHF1ZXN0aW9uTGlzdDogW10sXG4gICAgICBzdGF0dXNTaG93OiB0cnVlLFxuICAgICAgcXVlc3Rpb25TaG93OiBmYWxzZVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgc3dpdGNoVGFiIChldmVudCkge1xuICAgICAgICBsZXQgdGhlQ2xpY2tUYWIgPSBldmVudC50YXJnZXQuZGF0YXNldC50YWJUeXBlXG4gICAgICAgIGlmICh0aGVDbGlja1RhYiA9PT0gJ2dyb3VuZCcpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1c1Nob3cgPSB0cnVlXG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNob3cgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RhdHVzU2hvdyA9IGZhbHNlXG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNob3cgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==