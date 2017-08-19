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

var comment = function (_wepy$component) {
  _inherits(comment, _wepy$component);

  function comment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, comment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = comment.__proto__ || Object.getPrototypeOf(comment)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      commenttime: {},
      avatarlist: {},
      commentlist: {},
      userinfo: {} // 微信授权登录后的用户名和用户头像信息
    }, _this.data = {
      isStarActive: 'm-icon-star',
      isShowCommentInput: false,
      isResponseComment: false,
      selectName: '',
      commentInputDefault: '请输入您的评论',
      currentCommentValue: null
    }, _this.methods = {
      commenLike: function commenLike() {
        if (this.isStarActive === 'm-icon-star-active') {
          this.isStarActive = 'm-icon-star';
          var theUserAvatarIndex = this.avatarList.indexOf(this.userinfo.avatar);
          if (!(theUserAvatarIndex < 0)) {
            this.avatarList.splice(theUserAvatarIndex, 1);
          }
        } else {
          this.isStarActive = 'm-icon-star-active';
          this.avatarList.push(this.userinfo.avatar);
        }
      },
      commentAdd: function commentAdd() {
        this.isShowCommentInput = true;
        this.isResponseComment = false;
        this.commentInputDefault = '请输入您的评论';
      },
      selectResponse: function selectResponse(event) {
        var theName = event.target.dataset.selectName;
        if (!theName) {
          return;
        }
        this.selectName = theName;
        this.isResponseComment = true;
        this.isShowCommentInput = true;
        this.commentInputDefault = '回复@' + theName;
      },
      commentInputBlur: function commentInputBlur(event) {
        var theInputValue = event.detail.value;
        var theCommentValue = this.isResponseComment ? {
          responseName: this.userinfo.name,
          name: this.selectName,
          words: theInputValue
        } : {
          name: this.userinfo.name,
          words: theInputValue
        };
        this.currentCommentValue = theCommentValue;
      },
      sendComment: function sendComment() {
        var currentCommentValue = this.currentCommentValue;
        if (currentCommentValue) {
          this.commentList.push(currentCommentValue);
        }
        this.isShowCommentInput = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return comment;
}(_wepy2.default.component);

exports.default = comment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwibmFtZXMiOlsiY29tbWVudCIsInByb3BzIiwiY29tbWVudHRpbWUiLCJhdmF0YXJsaXN0IiwiY29tbWVudGxpc3QiLCJ1c2VyaW5mbyIsImRhdGEiLCJpc1N0YXJBY3RpdmUiLCJpc1Nob3dDb21tZW50SW5wdXQiLCJpc1Jlc3BvbnNlQ29tbWVudCIsInNlbGVjdE5hbWUiLCJjb21tZW50SW5wdXREZWZhdWx0IiwiY3VycmVudENvbW1lbnRWYWx1ZSIsIm1ldGhvZHMiLCJjb21tZW5MaWtlIiwidGhlVXNlckF2YXRhckluZGV4IiwiYXZhdGFyTGlzdCIsImluZGV4T2YiLCJhdmF0YXIiLCJzcGxpY2UiLCJwdXNoIiwiY29tbWVudEFkZCIsInNlbGVjdFJlc3BvbnNlIiwiZXZlbnQiLCJ0aGVOYW1lIiwidGFyZ2V0IiwiZGF0YXNldCIsImNvbW1lbnRJbnB1dEJsdXIiLCJ0aGVJbnB1dFZhbHVlIiwiZGV0YWlsIiwidmFsdWUiLCJ0aGVDb21tZW50VmFsdWUiLCJyZXNwb25zZU5hbWUiLCJuYW1lIiwid29yZHMiLCJzZW5kQ29tbWVudCIsImNvbW1lbnRMaXN0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxLLEdBQVE7QUFDTkMsbUJBQWEsRUFEUDtBQUVOQyxrQkFBWSxFQUZOO0FBR05DLG1CQUFhLEVBSFA7QUFJTkMsZ0JBQVUsRUFKSixDQUlPO0FBSlAsSyxRQU1SQyxJLEdBQU87QUFDTEMsb0JBQWMsYUFEVDtBQUVMQywwQkFBb0IsS0FGZjtBQUdMQyx5QkFBbUIsS0FIZDtBQUlMQyxrQkFBWSxFQUpQO0FBS0xDLDJCQUFxQixTQUxoQjtBQU1MQywyQkFBcUI7QUFOaEIsSyxRQVFQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ007QUFDWixZQUFJLEtBQUtQLFlBQUwsS0FBc0Isb0JBQTFCLEVBQWdEO0FBQzlDLGVBQUtBLFlBQUwsR0FBb0IsYUFBcEI7QUFDQSxjQUFJUSxxQkFBcUIsS0FBS0MsVUFBTCxDQUFnQkMsT0FBaEIsQ0FBd0IsS0FBS1osUUFBTCxDQUFjYSxNQUF0QyxDQUF6QjtBQUNBLGNBQUksRUFBRUgscUJBQXFCLENBQXZCLENBQUosRUFBK0I7QUFDN0IsaUJBQUtDLFVBQUwsQ0FBZ0JHLE1BQWhCLENBQXVCSixrQkFBdkIsRUFBMkMsQ0FBM0M7QUFDRDtBQUNGLFNBTkQsTUFNTztBQUNMLGVBQUtSLFlBQUwsR0FBb0Isb0JBQXBCO0FBQ0EsZUFBS1MsVUFBTCxDQUFnQkksSUFBaEIsQ0FBcUIsS0FBS2YsUUFBTCxDQUFjYSxNQUFuQztBQUNEO0FBQ0YsT0FaTztBQWFSRyxnQkFiUSx3QkFhTTtBQUNaLGFBQUtiLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0EsYUFBS0MsaUJBQUwsR0FBeUIsS0FBekI7QUFDQSxhQUFLRSxtQkFBTCxHQUEyQixTQUEzQjtBQUNELE9BakJPO0FBa0JSVyxvQkFsQlEsMEJBa0JRQyxLQWxCUixFQWtCZTtBQUNyQixZQUFJQyxVQUFVRCxNQUFNRSxNQUFOLENBQWFDLE9BQWIsQ0FBcUJoQixVQUFuQztBQUNBLFlBQUksQ0FBQ2MsT0FBTCxFQUFjO0FBQ1o7QUFDRDtBQUNELGFBQUtkLFVBQUwsR0FBa0JjLE9BQWxCO0FBQ0EsYUFBS2YsaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxhQUFLRCxrQkFBTCxHQUEwQixJQUExQjtBQUNBLGFBQUtHLG1CQUFMLEdBQTJCLFFBQVFhLE9BQW5DO0FBQ0QsT0EzQk87QUE0QlJHLHNCQTVCUSw0QkE0QlVKLEtBNUJWLEVBNEJpQjtBQUN2QixZQUFJSyxnQkFBZ0JMLE1BQU1NLE1BQU4sQ0FBYUMsS0FBakM7QUFDQSxZQUFJQyxrQkFBa0IsS0FBS3RCLGlCQUFMLEdBQXlCO0FBQzdDdUIsd0JBQWMsS0FBSzNCLFFBQUwsQ0FBYzRCLElBRGlCO0FBRTdDQSxnQkFBTSxLQUFLdkIsVUFGa0M7QUFHN0N3QixpQkFBT047QUFIc0MsU0FBekIsR0FJbEI7QUFDRkssZ0JBQU0sS0FBSzVCLFFBQUwsQ0FBYzRCLElBRGxCO0FBRUZDLGlCQUFPTjtBQUZMLFNBSko7QUFRQSxhQUFLaEIsbUJBQUwsR0FBMkJtQixlQUEzQjtBQUNELE9BdkNPO0FBd0NSSSxpQkF4Q1EseUJBd0NPO0FBQ2IsWUFBSXZCLHNCQUFzQixLQUFLQSxtQkFBL0I7QUFDQSxZQUFJQSxtQkFBSixFQUF5QjtBQUN2QixlQUFLd0IsV0FBTCxDQUFpQmhCLElBQWpCLENBQXNCUixtQkFBdEI7QUFDRDtBQUNELGFBQUtKLGtCQUFMLEdBQTBCLEtBQTFCO0FBQ0Q7QUE5Q08sSzs7OztFQWZ5QixlQUFLNkIsUzs7a0JBQXJCckMsTyIsImZpbGUiOiJjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29tbWVudCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgY29tbWVudHRpbWU6IHt9LFxuICAgIGF2YXRhcmxpc3Q6IHt9LFxuICAgIGNvbW1lbnRsaXN0OiB7fSxcbiAgICB1c2VyaW5mbzoge30gLy8g5b6u5L+h5o6I5p2D55m75b2V5ZCO55qE55So5oi35ZCN5ZKM55So5oi35aS05YOP5L+h5oGvXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpc1N0YXJBY3RpdmU6ICdtLWljb24tc3RhcicsXG4gICAgaXNTaG93Q29tbWVudElucHV0OiBmYWxzZSxcbiAgICBpc1Jlc3BvbnNlQ29tbWVudDogZmFsc2UsXG4gICAgc2VsZWN0TmFtZTogJycsXG4gICAgY29tbWVudElucHV0RGVmYXVsdDogJ+ivt+i+k+WFpeaCqOeahOivhOiuuicsXG4gICAgY3VycmVudENvbW1lbnRWYWx1ZTogbnVsbFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29tbWVuTGlrZSAoKSB7XG4gICAgICBpZiAodGhpcy5pc1N0YXJBY3RpdmUgPT09ICdtLWljb24tc3Rhci1hY3RpdmUnKSB7XG4gICAgICAgIHRoaXMuaXNTdGFyQWN0aXZlID0gJ20taWNvbi1zdGFyJ1xuICAgICAgICBsZXQgdGhlVXNlckF2YXRhckluZGV4ID0gdGhpcy5hdmF0YXJMaXN0LmluZGV4T2YodGhpcy51c2VyaW5mby5hdmF0YXIpXG4gICAgICAgIGlmICghKHRoZVVzZXJBdmF0YXJJbmRleCA8IDApKSB7XG4gICAgICAgICAgdGhpcy5hdmF0YXJMaXN0LnNwbGljZSh0aGVVc2VyQXZhdGFySW5kZXgsIDEpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNTdGFyQWN0aXZlID0gJ20taWNvbi1zdGFyLWFjdGl2ZSdcbiAgICAgICAgdGhpcy5hdmF0YXJMaXN0LnB1c2godGhpcy51c2VyaW5mby5hdmF0YXIpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21tZW50QWRkICgpIHtcbiAgICAgIHRoaXMuaXNTaG93Q29tbWVudElucHV0ID0gdHJ1ZVxuICAgICAgdGhpcy5pc1Jlc3BvbnNlQ29tbWVudCA9IGZhbHNlXG4gICAgICB0aGlzLmNvbW1lbnRJbnB1dERlZmF1bHQgPSAn6K+36L6T5YWl5oKo55qE6K+E6K66J1xuICAgIH0sXG4gICAgc2VsZWN0UmVzcG9uc2UgKGV2ZW50KSB7XG4gICAgICBsZXQgdGhlTmFtZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnNlbGVjdE5hbWVcbiAgICAgIGlmICghdGhlTmFtZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0TmFtZSA9IHRoZU5hbWVcbiAgICAgIHRoaXMuaXNSZXNwb25zZUNvbW1lbnQgPSB0cnVlXG4gICAgICB0aGlzLmlzU2hvd0NvbW1lbnRJbnB1dCA9IHRydWVcbiAgICAgIHRoaXMuY29tbWVudElucHV0RGVmYXVsdCA9ICflm57lpI1AJyArIHRoZU5hbWVcbiAgICB9LFxuICAgIGNvbW1lbnRJbnB1dEJsdXIgKGV2ZW50KSB7XG4gICAgICBsZXQgdGhlSW5wdXRWYWx1ZSA9IGV2ZW50LmRldGFpbC52YWx1ZVxuICAgICAgbGV0IHRoZUNvbW1lbnRWYWx1ZSA9IHRoaXMuaXNSZXNwb25zZUNvbW1lbnQgPyB7XG4gICAgICAgIHJlc3BvbnNlTmFtZTogdGhpcy51c2VyaW5mby5uYW1lLFxuICAgICAgICBuYW1lOiB0aGlzLnNlbGVjdE5hbWUsXG4gICAgICAgIHdvcmRzOiB0aGVJbnB1dFZhbHVlXG4gICAgICB9IDoge1xuICAgICAgICBuYW1lOiB0aGlzLnVzZXJpbmZvLm5hbWUsXG4gICAgICAgIHdvcmRzOiB0aGVJbnB1dFZhbHVlXG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRDb21tZW50VmFsdWUgPSB0aGVDb21tZW50VmFsdWVcbiAgICB9LFxuICAgIHNlbmRDb21tZW50ICgpIHtcbiAgICAgIGxldCBjdXJyZW50Q29tbWVudFZhbHVlID0gdGhpcy5jdXJyZW50Q29tbWVudFZhbHVlXG4gICAgICBpZiAoY3VycmVudENvbW1lbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNvbW1lbnRMaXN0LnB1c2goY3VycmVudENvbW1lbnRWYWx1ZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuaXNTaG93Q29tbWVudElucHV0ID0gZmFsc2VcbiAgICB9XG4gIH1cbn1cbiJdfQ==