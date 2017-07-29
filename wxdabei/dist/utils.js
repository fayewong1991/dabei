'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goto = undefined;

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 保留当前页面的跳转方式
var goto = exports.goto = function goto(url) {
  var isNavigate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (isNavigate) {
    _wepy2.default.navigateTo({
      url: url
    });
  } else {
    _wepy2.default.redirectTo({
      url: url
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImdvdG8iLCJ1cmwiLCJpc05hdmlnYXRlIiwibmF2aWdhdGVUbyIsInJlZGlyZWN0VG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDTyxJQUFNQSxzQkFBTyxTQUFQQSxJQUFPLENBQUNDLEdBQUQsRUFBNEI7QUFBQSxNQUF0QkMsVUFBc0IsdUVBQVQsSUFBUzs7QUFDOUMsTUFBSUEsVUFBSixFQUFnQjtBQUNkLG1CQUFLQyxVQUFMLENBQWdCO0FBQ2RGLFdBQUtBO0FBRFMsS0FBaEI7QUFHRCxHQUpELE1BSU87QUFDTCxtQkFBS0csVUFBTCxDQUFnQjtBQUNkSCxXQUFLQTtBQURTLEtBQWhCO0FBR0Q7QUFDRixDQVZNIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuLy8g5L+d55WZ5b2T5YmN6aG16Z2i55qE6Lez6L2s5pa55byPXG5leHBvcnQgY29uc3QgZ290byA9ICh1cmwsIGlzTmF2aWdhdGUgPSB0cnVlKSA9PiB7XG4gIGlmIChpc05hdmlnYXRlKSB7XG4gICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogdXJsXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgdXJsOiB1cmxcbiAgICB9KVxuICB9XG59XG4iXX0=