'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _focusOne = require('./focusOne.js');

var _focusOne2 = _interopRequireDefault(_focusOne);

var _comment = require('./comment.js');

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var newstate = function (_wepy$component) {
  _inherits(newstate, _wepy$component);

  function newstate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, newstate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = newstate.__proto__ || Object.getPrototypeOf(newstate)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      statetext: {},
      focusname: {},
      focusavatar: {},
      stateimg: {},
      userinfo: {},
      commentstarttime: {},
      commentavatarlist: {},
      commentdatalist: {}
    }, _this.$props = { "focusone": { "xmlns:v-bind": "", "v-bind:isdetail.once": "focus.isDetail", "v-bind:isneedtile.once": "focus.isNeedTitle", "v-bind:isneedfocus.once": "focus.isNeedFocus", "v-bind:avatar.once": "focus.avatar", "v-bind:name.once": "focus.name" }, "comment": { "v-bind:commenttime.once": "comment.time", "v-bind:avatarlist.once": "comment.avatarList", "v-bind:commentlist.once": "comment.commentList", "v-bind:userinfo.once": "userInfo" } }, _this.$events = {}, _this.components = {
      focusone: _focusOne2.default,
      comment: _comment2.default
    }, _this.data = {
      focus: {
        isDetail: false,
        isNeedTitle: false,
        isNeedFocus: false,
        name: _this.focusname,
        avatar: _this.focusavatar
      },
      comment: {
        time: _this.commentstarttime,
        avatarList: _this.commentavatarlist,
        commentList: _this.commentdatalist
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return newstate;
}(_wepy2.default.component);

exports.default = newstate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld1N0YXRlLmpzIl0sIm5hbWVzIjpbIm5ld3N0YXRlIiwicHJvcHMiLCJzdGF0ZXRleHQiLCJmb2N1c25hbWUiLCJmb2N1c2F2YXRhciIsInN0YXRlaW1nIiwidXNlcmluZm8iLCJjb21tZW50c3RhcnR0aW1lIiwiY29tbWVudGF2YXRhcmxpc3QiLCJjb21tZW50ZGF0YWxpc3QiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImZvY3Vzb25lIiwiY29tbWVudCIsImRhdGEiLCJmb2N1cyIsImlzRGV0YWlsIiwiaXNOZWVkVGl0bGUiLCJpc05lZWRGb2N1cyIsIm5hbWUiLCJhdmF0YXIiLCJ0aW1lIiwiYXZhdGFyTGlzdCIsImNvbW1lbnRMaXN0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsSyxHQUFRO0FBQ05DLGlCQUFXLEVBREw7QUFFTkMsaUJBQVcsRUFGTDtBQUdOQyxtQkFBYSxFQUhQO0FBSU5DLGdCQUFVLEVBSko7QUFLTkMsZ0JBQVUsRUFMSjtBQU1OQyx3QkFBa0IsRUFOWjtBQU9OQyx5QkFBbUIsRUFQYjtBQVFOQyx1QkFBaUI7QUFSWCxLLFFBVVRDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsZ0JBQTFDLEVBQTJELDBCQUF5QixtQkFBcEYsRUFBd0csMkJBQTBCLG1CQUFsSSxFQUFzSixzQkFBcUIsY0FBM0ssRUFBMEwsb0JBQW1CLFlBQTdNLEVBQVosRUFBdU8sV0FBVSxFQUFDLDJCQUEwQixjQUEzQixFQUEwQywwQkFBeUIsb0JBQW5FLEVBQXdGLDJCQUEwQixxQkFBbEgsRUFBd0ksd0JBQXVCLFVBQS9KLEVBQWpQLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLGtDQURVO0FBRVZDO0FBRlUsSyxRQUlaQyxJLEdBQU87QUFDTEMsYUFBTztBQUNMQyxrQkFBVSxLQURMO0FBRUxDLHFCQUFhLEtBRlI7QUFHTEMscUJBQWEsS0FIUjtBQUlMQyxjQUFNLE1BQUtqQixTQUpOO0FBS0xrQixnQkFBUSxNQUFLakI7QUFMUixPQURGO0FBUUxVLGVBQVM7QUFDUFEsY0FBTSxNQUFLZixnQkFESjtBQUVQZ0Isb0JBQVksTUFBS2YsaUJBRlY7QUFHUGdCLHFCQUFhLE1BQUtmO0FBSFg7QUFSSixLOzs7O0VBakI2QixlQUFLZ0IsUzs7a0JBQXRCekIsUSIsImZpbGUiOiJuZXdTdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBmb2N1c09uZSBmcm9tICcuL2ZvY3VzT25lJ1xuaW1wb3J0IGNvbW1lbnQgZnJvbSAnLi9jb21tZW50J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbmV3c3RhdGUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHN0YXRldGV4dDoge30sXG4gICAgZm9jdXNuYW1lOiB7fSxcbiAgICBmb2N1c2F2YXRhcjoge30sXG4gICAgc3RhdGVpbWc6IHt9LFxuICAgIHVzZXJpbmZvOiB7fSxcbiAgICBjb21tZW50c3RhcnR0aW1lOiB7fSxcbiAgICBjb21tZW50YXZhdGFybGlzdDoge30sXG4gICAgY29tbWVudGRhdGFsaXN0OiB7fVxuICB9XG4gJHByb3BzID0ge1wiZm9jdXNvbmVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlzZGV0YWlsLm9uY2VcIjpcImZvY3VzLmlzRGV0YWlsXCIsXCJ2LWJpbmQ6aXNuZWVkdGlsZS5vbmNlXCI6XCJmb2N1cy5pc05lZWRUaXRsZVwiLFwidi1iaW5kOmlzbmVlZGZvY3VzLm9uY2VcIjpcImZvY3VzLmlzTmVlZEZvY3VzXCIsXCJ2LWJpbmQ6YXZhdGFyLm9uY2VcIjpcImZvY3VzLmF2YXRhclwiLFwidi1iaW5kOm5hbWUub25jZVwiOlwiZm9jdXMubmFtZVwifSxcImNvbW1lbnRcIjp7XCJ2LWJpbmQ6Y29tbWVudHRpbWUub25jZVwiOlwiY29tbWVudC50aW1lXCIsXCJ2LWJpbmQ6YXZhdGFybGlzdC5vbmNlXCI6XCJjb21tZW50LmF2YXRhckxpc3RcIixcInYtYmluZDpjb21tZW50bGlzdC5vbmNlXCI6XCJjb21tZW50LmNvbW1lbnRMaXN0XCIsXCJ2LWJpbmQ6dXNlcmluZm8ub25jZVwiOlwidXNlckluZm9cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGZvY3Vzb25lOiBmb2N1c09uZSxcbiAgICBjb21tZW50OiBjb21tZW50XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBmb2N1czoge1xuICAgICAgaXNEZXRhaWw6IGZhbHNlLFxuICAgICAgaXNOZWVkVGl0bGU6IGZhbHNlLFxuICAgICAgaXNOZWVkRm9jdXM6IGZhbHNlLFxuICAgICAgbmFtZTogdGhpcy5mb2N1c25hbWUsXG4gICAgICBhdmF0YXI6IHRoaXMuZm9jdXNhdmF0YXJcbiAgICB9LFxuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHRpbWU6IHRoaXMuY29tbWVudHN0YXJ0dGltZSxcbiAgICAgIGF2YXRhckxpc3Q6IHRoaXMuY29tbWVudGF2YXRhcmxpc3QsXG4gICAgICBjb21tZW50TGlzdDogdGhpcy5jb21tZW50ZGF0YWxpc3RcbiAgICB9XG4gIH1cbn1cbiJdfQ==