/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USERS = exports.FETCH_USERS = 'FETCH_USERS';
var FETCH_USER = exports.FETCH_USER = 'FETCH_USER';
var FETCH_STICKY_NOTES = exports.FETCH_STICKY_NOTES = 'FETCH_STICKY_NOTES';
var ADD_STICKY_NOTES = exports.ADD_STICKY_NOTES = 'ADD_STICKY_NOTES';
var CANCEL_STICKY_NOTES = exports.CANCEL_STICKY_NOTES = 'CANCEL_STICKY_NOTES';
var SAVE_STICKY_NOTE = exports.SAVE_STICKY_NOTE = 'SAVE_STICKY_NOTE';
var ERROR_STICKY_NOTE = exports.ERROR_STICKY_NOTE = 'ERROR_STICKY_NOTE';
var INPUT_CHANGE_STICKY_NOTE = exports.INPUT_CHANGE_STICKY_NOTE = 'INPUT_CHANGE_STICKY_NOTE';

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _StickyNotePage = __webpack_require__(19);

var _StickyNotePage2 = _interopRequireDefault(_StickyNotePage);

var _UserList = __webpack_require__(23);

var _UserList2 = _interopRequireDefault(_UserList);

var _NotFoundPage = __webpack_require__(26);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({
    path: '/'
  }, _StickyNotePage2.default, {
    exact: true
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelStickyNote = exports.addStickyNote = exports.handleInputStickyChange = exports.saveStickyNote = exports.fetchStickyNotes = undefined;

var _types = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchStickyNotes = exports.fetchStickyNotes = function fetchStickyNotes() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/api/stickynotes');

            case 2:
              res = _context.sent;

              dispatch({ type: _types.FETCH_STICKY_NOTES, payload: res.data });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var saveStickyNote = exports.saveStickyNote = function saveStickyNote(message) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(message);
              try {
                // await api.post('/api/stickynotes', { message })
                // const res = await api.get('/api/stickynotes');
                // dispatch({ type: FETCH_STICKY_NOTES, payload: res.data });
              } catch (err) {
                dispatch({ type: _types.ERROR_STICKY_NOTE, payload: err });
              }

              dispatch({ type: _types.FETCH_STICKY_NOTES });

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var handleInputStickyChange = exports.handleInputStickyChange = function handleInputStickyChange(text) {
  return function (dispatch) {
    console.log(text);
    dispatch({ type: _types.INPUT_CHANGE_STICKY_NOTE, payload: text });
  };
};

var addStickyNote = exports.addStickyNote = function addStickyNote(message) {
  return function (dispatch) {
    dispatch({ type: _types.ADD_STICKY_NOTES });
  };
};

var cancelStickyNote = exports.cancelStickyNote = function cancelStickyNote() {
  return function (dispatch) {
    dispatch({ type: _types.CANCEL_STICKY_NOTES });
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(3);

var _expressHttpProxy = __webpack_require__(14);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

var _renderHelper = __webpack_require__(27);

var _renderHelper2 = _interopRequireDefault(_renderHelper);

var _createStoreHelper = __webpack_require__(30);

var _createStoreHelper2 = _interopRequireDefault(_createStoreHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('https://sticky-ui.herokuapp.com/', {
  proxyReqOptDecorator: function proxyReqOptDecorator(options) {
    options.headers['x-forwarded-host'] = 'localhost:3000';
    return options;
  }
}));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStoreHelper2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  })
  //resolve promise regardless if it fails
  .map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var html = (0, _renderHelper2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(html);
  });

  /*
  DO NOT USE CATCH STATEMENT,
   - this is a crud solution, instead use HOC's
   - .catch(err => res.status(404).send(error));
  */
});

app.listen(port, function () {
  console.log('listening on port ' + port);
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(16);

var _Header2 = _interopRequireDefault(_Header);

var _auth = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _auth.fetchUser)());
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'div',
    { className: 'header' },
    'Sticky Notes'
  );
};

exports.default = Header;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUser = undefined;

var _types = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchUser = exports.fetchUser = function fetchUser() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/current_user');

            case 2:
              res = _context.sent;

              dispatch({ type: _types.FETCH_USER, payload: res.data });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(4);

var _sticky_notes = __webpack_require__(7);

var _Note = __webpack_require__(20);

var _Note2 = _interopRequireDefault(_Note);

var _AddNote = __webpack_require__(22);

var _AddNote2 = _interopRequireDefault(_AddNote);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StickyNoteList = function (_Component) {
  _inherits(StickyNoteList, _Component);

  function StickyNoteList() {
    _classCallCheck(this, StickyNoteList);

    return _possibleConstructorReturn(this, (StickyNoteList.__proto__ || Object.getPrototypeOf(StickyNoteList)).apply(this, arguments));
  }

  _createClass(StickyNoteList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchStickyNotes();
    }
  }, {
    key: 'renderStickyNotes',
    value: function renderStickyNotes() {
      return this.props.list.map(function (note) {
        return _react2.default.createElement(_Note2.default, { key: note._id, note: note });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.list.length === 0) {
        return _react2.default.createElement(
          'div',
          null,
          'loading users...'
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            this.props.list.length + ' Sticky Notes in Dashboard'
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: 'Sticky Note App' })
        ),
        _react2.default.createElement(_AddNote2.default, { clicked: this.props.isAdding }),
        _react2.default.createElement(
          'div',
          { className: 'sticky_note_container flexbox' },
          this.renderStickyNotes()
        )
      );
    }
  }]);

  return StickyNoteList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var stickynotes = _ref.stickynotes;
  var list = stickynotes.list,
      isAdding = stickynotes.isAdding,
      text = stickynotes.text;

  return { list: list, isAdding: isAdding, text: text };
};

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchStickyNotes: _sticky_notes.fetchStickyNotes })(StickyNoteList),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _sticky_notes.fetchStickyNotes)());
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDnd = __webpack_require__(21);

__webpack_require__(5);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Note = function Note(_ref) {
  var note = _ref.note;
  var message = note.message,
      _id = note._id;

  var handleOnDragStart = function handleOnDragStart(event) {};

  var handleOnDragOver = function handleOnDragOver(event) {};

  var handleOnDrop = function handleOnDrop(event) {};

  return _react2.default.createElement(
    'div',
    {
      className: 'sticky_note flexbox',
      draggable: 'true',
      onDragStart: handleOnDragStart,
      onDragOver: handleOnDragOver,
      onDrop: handleOnDrop },
    message
  );
};

exports.default = Note;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dnd");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _sticky_notes = __webpack_require__(7);

__webpack_require__(5);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddNote = function AddNote(_ref) {
  var addStickyNote = _ref.addStickyNote,
      clicked = _ref.clicked;


  return _react2.default.createElement(
    'div',
    {
      className: 'add_sticky_note flexbox',
      onClick: function onClick() {
        return addStickyNote();
      } },
    clicked ? _react2.default.createElement('textarea', { className: 'input_sticky_note', placeholder: 'type something here' }) : _react2.default.createElement(
      'div',
      null,
      '+'
    )
  );
};

exports.default = (0, _reactRedux.connect)(null, { addStickyNote: _sticky_notes.addStickyNote })(AddNote);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _user = __webpack_require__(24);

var _require_auth = __webpack_require__(25);

var _require_auth2 = _interopRequireDefault(_require_auth);

var _reactHelmet = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Component) {
  _inherits(UserList, _Component);

  function UserList() {
    _classCallCheck(this, UserList);

    return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
  }

  _createClass(UserList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: 'renderUsers',
    value: function renderUsers() {
      return this.props.list.map(function (user) {
        return _react2.default.createElement(
          'div',
          { key: user.id },
          user.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.list.length === 0) {
        return _react2.default.createElement(
          'div',
          null,
          'loading users...'
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            this.props.list.length + ' Users in Portfolio Dashboard'
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: 'Portfolio Dashboard' })
        ),
        this.renderUsers()
      );
    }
  }]);

  return UserList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var users = _ref.users;
  var list = users.list;

  return { list: list };
};

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _user.fetchUsers })((0, _require_auth2.default)(UserList)),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _user.fetchUsers)());
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = undefined;

var _types = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//import axios  from 'axios' USE for 3rd party url api calls

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

            case 2:
              res = _context.sent;

              dispatch({ type: _types.FETCH_USERS, payload: res.data });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ComposedComponent) {
  var Authentication = function (_Component) {
    _inherits(Authentication, _Component);

    function Authentication() {
      _classCallCheck(this, Authentication);

      return _possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).apply(this, arguments));
    }

    _createClass(Authentication, [{
      key: 'render',
      value: function render() {
        switch (this.props.user) {
          case false:
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
          case null:
            return _react2.default.createElement(
              'div',
              null,
              'Loading...'
            );
          default:
            return _react2.default.createElement(ComposedComponent, this.props);
        }
      }
    }]);

    return Authentication;
  }(_react.Component);

  var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;
    var user = auth.user;

    return { user: user };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(Authentication);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;

  return _react2.default.createElement(
    'div',
    null,
    'Sorry, Page Not Found'
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(28);

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(29);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(4);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n    <html>\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <link rel="stylesheet" type="text/css" href="styles.css" />\n      </head>\n        <body>\n          <div id=\'root\'>' + content + '</div>\n          <script>\n            window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n          </script>\n          <script src="bundle.js"></script>\n        </body>\n    </html>\n  ';
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(10);

var _reduxThunk = __webpack_require__(31);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(32);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(33);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'https://sticky-ui.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
  return store;
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(10);

var _reducer_users = __webpack_require__(34);

var _reducer_users2 = _interopRequireDefault(_reducer_users);

var _reducer_auth = __webpack_require__(35);

var _reducer_auth2 = _interopRequireDefault(_reducer_auth);

var _reducer_stickynotes = __webpack_require__(36);

var _reducer_stickynotes2 = _interopRequireDefault(_reducer_stickynotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  users: _reducer_users2.default,
  auth: _reducer_auth2.default,
  stickynotes: _reducer_stickynotes2.default
});

exports.default = rootReducer;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(1);

var initialState = {
  list: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_USERS:
      return _extends({}, state, { list: action.payload });
    default:
      return state;
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(1);

var initialState = {
  user: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_USER:
      return _extends({}, state, { user: action.payload || false });
    default:
      return state;
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(1);

var initialState = {
  list: [],
  isAdding: false,
  error: '',
  text: ''
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_STICKY_NOTES:
      return _extends({}, state, { list: action.payload });
    case _types.ADD_STICKY_NOTES:
      return _extends({}, state, { isAdding: true });
    case _types.CANCEL_STICKY_NOTES:
      return _extends({}, state, { isAdding: false });
    case _types.ERROR_STICKY_NOTE:
      return _extends({}, state, { error: action.payload });
    case _types.INPUT_CHANGE_STICKY_NOTE:
      return _extends({}, state, { text: action.payload });
    default:
      return state;
  }
};

/***/ })
/******/ ]);