(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["es6Boilerplate"] = factory();
	else
		root["es6Boilerplate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var WishWebSocket = __webpack_require__(2);
	
	window.WebSocket = WishWebSocket;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var STATE = {
	  CONNECTING: 0,
	  OPEN: 1,
	  CLOSING: 2,
	  CLOSED: 3
	};
	
	var WishWebSocket = (function () {
	  /**
	   * @params {string} url
	   * @params {string|string[]} protocols
	   */
	
	  function WishWebSocket(url, protocols) {
	    _classCallCheck(this, WishWebSocket);
	
	    if (!this._validate_url) throw "parameter url is not valid";
	
	    this.onopen = function () {};
	    this.onerror = function () {};
	    this.onclose = function () {};
	    this.onmessage = function () {};
	
	    // read only attributes
	    this.url = url;
	    this.extensions = "";
	    this.protocol = protocols; // fixme
	    this.readyState = STATE.CONNECTING;
	    this.bufferedAmount = 0;
	    this.binaryType = "";
	
	    this._connect();
	  }
	
	  _createClass(WishWebSocket, {
	    send: {
	
	      /**
	       * @params {string|ArrayBuffer|Blob} data
	       */
	
	      value: function send(data) {}
	    },
	    close: {
	
	      /**
	       * @params {unsigned short} code
	       * @params {string} reason
	       */
	
	      value: function close(code, reason) {}
	    },
	    _validateurl: {
	
	      /**
	       * @params {string} url
	       */
	
	      value: function _validateurl(url) {
	        return true; //fixme
	      }
	    },
	    _connect: {
	
	      /**
	       */
	
	      value: function _connect() {}
	    }
	  });
	
	  return WishWebSocket;
	})();
	
	module.exports = WishWebSocket;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNmJiOWQ5NjBlYmMwMjUxNDcwNiIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvd2lzaC13ZWJzb2NrZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsT0FBTSxDQUFDLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQVksQ0FBQyxDOzs7Ozs7OztBQ0F0QyxLQUFNLGFBQWEsR0FBRyxtQkFBTyxDQUFDLENBQWtCLENBQUMsQ0FBQzs7QUFFbEQsT0FBTSxDQUFDLFNBQVMsR0FBRyxhQUFhLEM7Ozs7Ozs7Ozs7OztBQ0ZoQyxLQUFNLEtBQUssR0FBRztBQUNaLGVBQWMsQ0FBQztBQUNmLFNBQWMsQ0FBQztBQUNmLFlBQWMsQ0FBQztBQUNmLFdBQWMsQ0FBQztFQUNoQixDQUFDOztLQUVJLGFBQWE7Ozs7OztBQUtOLFlBTFAsYUFBYSxDQUtMLEdBQUcsRUFBRSxTQUFTLEVBQUU7MkJBTHhCLGFBQWE7O0FBTWYsU0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFM0QsU0FBSSxDQUFDLE1BQU0sR0FBTSxZQUFNLEVBQUUsQ0FBQztBQUMxQixTQUFJLENBQUMsT0FBTyxHQUFLLFlBQU0sRUFBRSxDQUFDO0FBQzFCLFNBQUksQ0FBQyxPQUFPLEdBQUssWUFBTSxFQUFFLENBQUM7QUFDMUIsU0FBSSxDQUFDLFNBQVMsR0FBRyxZQUFNLEVBQUUsQ0FBQzs7O0FBRzFCLFNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2YsU0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDckIsU0FBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDMUIsU0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0FBQ25DLFNBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLFNBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVyQixTQUFJLENBQUMsUUFBUSxFQUFFO0lBQ2hCOztnQkF0QkcsYUFBYTtBQTJCakIsU0FBSTs7Ozs7O2NBQUEsY0FBQyxJQUFJLEVBQUUsRUFDVjs7QUFNRCxVQUFLOzs7Ozs7O2NBQUEsZUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQ25COztBQUtELGlCQUFZOzs7Ozs7Y0FBQSxzQkFBQyxHQUFHLEVBQUU7QUFDaEIsZ0JBQU8sSUFBSSxDQUFDO1FBQ2I7O0FBSUQsYUFBUTs7Ozs7Y0FBQSxvQkFBRyxFQUNWOzs7O1VBL0NHLGFBQWE7OztBQWtEbkIsT0FBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLEMiLCJmaWxlIjoiLi9kaXN0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImVzNkJvaWxlcnBsYXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImVzNkJvaWxlcnBsYXRlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2YmI5ZDk2MGViYzAyNTE0NzA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9tYWluJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5qcyIsImNvbnN0IFdpc2hXZWJTb2NrZXQgPSByZXF1aXJlKCcuL3dpc2gtd2Vic29ja2V0Jyk7XG5cbndpbmRvdy5XZWJTb2NrZXQgPSBXaXNoV2ViU29ja2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL21haW4uanMiLCJjb25zdCBTVEFURSA9IHtcbiAgJ0NPTk5FQ1RJTkcnOiAwLFxuICAnT1BFTic6ICAgICAgIDEsXG4gICdDTE9TSU5HJzogICAgMixcbiAgJ0NMT1NFRCc6ICAgICAzXG59O1xuXG5jbGFzcyBXaXNoV2ViU29ja2V0IHtcbiAgLyoqXG4gICAqIEBwYXJhbXMge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbXMge3N0cmluZ3xzdHJpbmdbXX0gcHJvdG9jb2xzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1cmwsIHByb3RvY29scykge1xuICAgIGlmKCF0aGlzLl92YWxpZGF0ZV91cmwpIHRocm93IFwicGFyYW1ldGVyIHVybCBpcyBub3QgdmFsaWRcIjtcblxuICAgIHRoaXMub25vcGVuICAgID0gKCkgPT4ge307XG4gICAgdGhpcy5vbmVycm9yICAgPSAoKSA9PiB7fTtcbiAgICB0aGlzLm9uY2xvc2UgICA9ICgpID0+IHt9O1xuICAgIHRoaXMub25tZXNzYWdlID0gKCkgPT4ge307XG5cbiAgICAvLyByZWFkIG9ubHkgYXR0cmlidXRlc1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMuZXh0ZW5zaW9ucyA9ICcnO1xuICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbHM7IC8vIGZpeG1lXG4gICAgdGhpcy5yZWFkeVN0YXRlID0gU1RBVEUuQ09OTkVDVElORztcbiAgICB0aGlzLmJ1ZmZlcmVkQW1vdW50ID0gMDtcbiAgICB0aGlzLmJpbmFyeVR5cGUgPSAnJztcblxuICAgIHRoaXMuX2Nvbm5lY3QoKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbXMge3N0cmluZ3xBcnJheUJ1ZmZlcnxCbG9ifSBkYXRhXG4gICAqL1xuICBzZW5kKGRhdGEpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW1zIHt1bnNpZ25lZCBzaG9ydH0gY29kZVxuICAgKiBAcGFyYW1zIHtzdHJpbmd9IHJlYXNvblxuICAgKi9cbiAgY2xvc2UoY29kZSwgcmVhc29uKSB7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtcyB7c3RyaW5nfSB1cmxcbiAgICovXG4gIF92YWxpZGF0ZXVybCh1cmwpIHtcbiAgICByZXR1cm4gdHJ1ZTsgLy9maXhtZVxuICB9XG5cbiAgLyoqXG4gICAqL1xuICBfY29ubmVjdCgpIHtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdpc2hXZWJTb2NrZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvd2lzaC13ZWJzb2NrZXQuanMiXSwic291cmNlUm9vdCI6IiJ9