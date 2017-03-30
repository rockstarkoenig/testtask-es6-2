(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Box = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DisplayObject2 = require('./DisplayObject.es6');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Box = exports.Box = function (_DisplayObject) {
    _inherits(Box, _DisplayObject);

    function Box() {
        _classCallCheck(this, Box);

        var _this = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this));

        _this.hover = false;

        $(_this.html).on('mouseenter', function () {
            _this.hover = true;
        });

        $(_this.html).on('mouseleave', function () {
            _this.hover = false;
        });
        return _this;
    }

    _createClass(Box, [{
        key: 'createHtml',
        value: function createHtml() {
            _get(Box.prototype.__proto__ || Object.getPrototypeOf(Box.prototype), 'createHtml', this).call(this);

            var html = document.createElement('div');
            html.className = "box";

            return html;
        }
    }, {
        key: 'placeSmile',
        value: function placeSmile(smile) {
            var rectBox = this.getBoundsRect();
            var rectSmile = smile.getBoundsRect();

            smile.html.style.left = rectBox.left + rectBox.width / 2 - rectSmile.width / 2 + 'px';
            smile.html.style.top = rectBox.top - rectSmile.height * 0.2 + 'px';
        }
    }, {
        key: 'readyForDrop',
        value: function readyForDrop() {
            return this.hover;
        }
    }]);

    return Box;
}(_DisplayObject2.DisplayObject);

window.Box = Box;

},{"./DisplayObject.es6":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayObject = exports.DisplayObject = function () {
    function DisplayObject() {
        _classCallCheck(this, DisplayObject);

        this.appContainer = document.getElementById("appContainer");
        this.html = this.createHtml();

        this.appContainer.appendChild(this.html);
    }

    _createClass(DisplayObject, [{
        key: "createHtml",
        value: function createHtml() {}
    }, {
        key: "getBoundsRect",
        value: function getBoundsRect() {
            return this.html.getBoundingClientRect();
        }
    }]);

    return DisplayObject;
}();

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Smile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DisplayObject2 = require("./DisplayObject.es6");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Smile = exports.Smile = function (_DisplayObject) {
    _inherits(Smile, _DisplayObject);

    function Smile() {
        _classCallCheck(this, Smile);

        var _this = _possibleConstructorReturn(this, (Smile.__proto__ || Object.getPrototypeOf(Smile)).call(this));

        _this.colors = ["#ffcc00", "#ff5500"];
        _this.colorIndex = 0;

        $(_this.html).on('dragEnd', function () {
            _this.onDragEnd();
        });

        $(_this.html).on('staticClick', function () {
            _this.switchColor();
        });
        return _this;
    }

    _createClass(Smile, [{
        key: "onDragEnd",
        value: function onDragEnd() {
            if (this.box.readyForDrop()) {
                this.box.placeSmile(this);
            }
        }
    }, {
        key: "createHtml",
        value: function createHtml() {
            _get(Smile.prototype.__proto__ || Object.getPrototypeOf(Smile.prototype), "createHtml", this).call(this);

            var html = document.createElement('div');
            html.className = "smile-base draggable";

            var eyeLeft = document.createElement('div');
            eyeLeft.className = "smile-eye-left";
            html.appendChild(eyeLeft);

            var eyeRight = document.createElement('div');
            eyeRight.className = "smile-eye-right";
            html.appendChild(eyeRight);

            var mouth = document.createElement('div');
            mouth.className = "smile-mouth";
            html.appendChild(mouth);

            return html;
        }
    }, {
        key: "switchColor",
        value: function switchColor() {
            this.colorIndex = (this.colorIndex + 1) % this.colors.length;
            var color = this.colors[this.colorIndex];
            this.html.style['background-color'] = color;
        }
    }]);

    return Smile;
}(_DisplayObject2.DisplayObject);

window.Smile = Smile;

},{"./DisplayObject.es6":2}]},{},[1,2,3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGVzNlxcQm94LmVzNiIsInNyY1xcZXM2XFxEaXNwbGF5T2JqZWN0LmVzNiIsInNyY1xcZXM2XFxTbWlsZS5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztJQUVhLEcsV0FBQSxHOzs7QUFFVCxtQkFBYztBQUFBOztBQUFBOztBQUVWLGNBQUssS0FBTCxHQUFhLEtBQWI7O0FBRUEsVUFBRSxNQUFLLElBQVAsRUFBYSxFQUFiLENBQWdCLFlBQWhCLEVBQThCLFlBQU07QUFDaEMsa0JBQUssS0FBTCxHQUFhLElBQWI7QUFDSCxTQUZEOztBQUlBLFVBQUUsTUFBSyxJQUFQLEVBQWEsRUFBYixDQUFnQixZQUFoQixFQUE4QixZQUFNO0FBQ2hDLGtCQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0gsU0FGRDtBQVJVO0FBV2I7Ozs7cUNBRVk7QUFDVDs7QUFFQSxnQkFBSSxPQUFPLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsaUJBQUssU0FBTCxHQUFpQixLQUFqQjs7QUFFQSxtQkFBTyxJQUFQO0FBQ0g7OzttQ0FFVSxLLEVBQU87QUFDZCxnQkFBSSxVQUFVLEtBQUssYUFBTCxFQUFkO0FBQ0EsZ0JBQUksWUFBWSxNQUFNLGFBQU4sRUFBaEI7O0FBRUEsa0JBQU0sSUFBTixDQUFXLEtBQVgsQ0FBaUIsSUFBakIsR0FBd0IsUUFBUSxJQUFSLEdBQWUsUUFBUSxLQUFSLEdBQWdCLENBQS9CLEdBQW1DLFVBQVUsS0FBVixHQUFrQixDQUFyRCxHQUF5RCxJQUFqRjtBQUNBLGtCQUFNLElBQU4sQ0FBVyxLQUFYLENBQWlCLEdBQWpCLEdBQXVCLFFBQVEsR0FBUixHQUFjLFVBQVUsTUFBVixHQUFtQixHQUFqQyxHQUF1QyxJQUE5RDtBQUNIOzs7dUNBRWM7QUFDWCxtQkFBTyxLQUFLLEtBQVo7QUFDSDs7Ozs7O0FBR0wsT0FBTyxHQUFQLEdBQWEsR0FBYjs7Ozs7Ozs7Ozs7OztJQ3ZDYSxhLFdBQUEsYTtBQUNULDZCQUFjO0FBQUE7O0FBQ1YsYUFBSyxZQUFMLEdBQW9CLFNBQVMsY0FBVCxDQUF3QixjQUF4QixDQUFwQjtBQUNBLGFBQUssSUFBTCxHQUFZLEtBQUssVUFBTCxFQUFaOztBQUVBLGFBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixLQUFLLElBQW5DO0FBQ0g7Ozs7cUNBRVksQ0FFWjs7O3dDQUVlO0FBQ1osbUJBQU8sS0FBSyxJQUFMLENBQVUscUJBQVYsRUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkTDs7Ozs7Ozs7SUFFYSxLLFdBQUEsSzs7O0FBRVQscUJBQWM7QUFBQTs7QUFBQTs7QUFHVixjQUFLLE1BQUwsR0FBYyxDQUFDLFNBQUQsRUFBWSxTQUFaLENBQWQ7QUFDQSxjQUFLLFVBQUwsR0FBa0IsQ0FBbEI7O0FBRUEsVUFBRSxNQUFLLElBQVAsRUFBYSxFQUFiLENBQWdCLFNBQWhCLEVBQTJCLFlBQU07QUFDN0Isa0JBQUssU0FBTDtBQUNILFNBRkQ7O0FBSUEsVUFBRSxNQUFLLElBQVAsRUFBYSxFQUFiLENBQWdCLGFBQWhCLEVBQStCLFlBQU07QUFDakMsa0JBQUssV0FBTDtBQUNILFNBRkQ7QUFWVTtBQWFiOzs7O29DQUVXO0FBQ1IsZ0JBQUksS0FBSyxHQUFMLENBQVMsWUFBVCxFQUFKLEVBQTZCO0FBQ3pCLHFCQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLElBQXBCO0FBQ0g7QUFDSjs7O3FDQUVZO0FBQ1Q7O0FBRUEsZ0JBQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBLGlCQUFLLFNBQUwsR0FBaUIsc0JBQWpCOztBQUVBLGdCQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxvQkFBUSxTQUFSLEdBQW9CLGdCQUFwQjtBQUNBLGlCQUFLLFdBQUwsQ0FBaUIsT0FBakI7O0FBRUEsZ0JBQUksV0FBVyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBLHFCQUFTLFNBQVQsR0FBcUIsaUJBQXJCO0FBQ0EsaUJBQUssV0FBTCxDQUFpQixRQUFqQjs7QUFFQSxnQkFBSSxRQUFRLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0Esa0JBQU0sU0FBTixHQUFrQixhQUFsQjtBQUNBLGlCQUFLLFdBQUwsQ0FBaUIsS0FBakI7O0FBRUEsbUJBQU8sSUFBUDtBQUNIOzs7c0NBRWE7QUFDVixpQkFBSyxVQUFMLEdBQWtCLENBQUMsS0FBSyxVQUFMLEdBQWtCLENBQW5CLElBQXdCLEtBQUssTUFBTCxDQUFZLE1BQXREO0FBQ0EsZ0JBQUksUUFBUSxLQUFLLE1BQUwsQ0FBWSxLQUFLLFVBQWpCLENBQVo7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixrQkFBaEIsSUFBc0MsS0FBdEM7QUFDSDs7Ozs7O0FBR0wsT0FBTyxLQUFQLEdBQWUsS0FBZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi9EaXNwbGF5T2JqZWN0LmVzNic7XHJcblxyXG5leHBvcnQgY2xhc3MgQm94IGV4dGVuZHMgRGlzcGxheU9iamVjdHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaG92ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgJCh0aGlzLmh0bWwpLm9uKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhvdmVyID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCh0aGlzLmh0bWwpLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhvdmVyID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSHRtbCgpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVIdG1sKCk7XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaHRtbC5jbGFzc05hbWUgPSBcImJveFwiO1xyXG5cclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNtaWxlKHNtaWxlKSB7XHJcbiAgICAgICAgbGV0IHJlY3RCb3ggPSB0aGlzLmdldEJvdW5kc1JlY3QoKTtcclxuICAgICAgICBsZXQgcmVjdFNtaWxlID0gc21pbGUuZ2V0Qm91bmRzUmVjdCgpO1xyXG5cclxuICAgICAgICBzbWlsZS5odG1sLnN0eWxlLmxlZnQgPSByZWN0Qm94LmxlZnQgKyByZWN0Qm94LndpZHRoIC8gMiAtIHJlY3RTbWlsZS53aWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICAgIHNtaWxlLmh0bWwuc3R5bGUudG9wID0gcmVjdEJveC50b3AgLSByZWN0U21pbGUuaGVpZ2h0ICogMC4yICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICByZWFkeUZvckRyb3AoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG92ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5Cb3ggPSBCb3g7IiwiZXhwb3J0IGNsYXNzIERpc3BsYXlPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcENvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLmh0bWwgPSB0aGlzLmNyZWF0ZUh0bWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5odG1sKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVIdG1sKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRCb3VuZHNSZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0bWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgRGlzcGxheU9iamVjdCB9IGZyb20gJy4vRGlzcGxheU9iamVjdC5lczYnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNtaWxlIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbXCIjZmZjYzAwXCIsIFwiI2ZmNTUwMFwiXTtcclxuICAgICAgICB0aGlzLmNvbG9ySW5kZXggPSAwO1xyXG5cclxuICAgICAgICAkKHRoaXMuaHRtbCkub24oJ2RyYWdFbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnRW5kKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQodGhpcy5odG1sKS5vbignc3RhdGljQ2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoQ29sb3IoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYWdFbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYm94LnJlYWR5Rm9yRHJvcCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm94LnBsYWNlU21pbGUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUh0bWwoKSB7XHJcbiAgICAgICAgc3VwZXIuY3JlYXRlSHRtbCgpO1xyXG5cclxuICAgICAgICBsZXQgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGh0bWwuY2xhc3NOYW1lID0gXCJzbWlsZS1iYXNlIGRyYWdnYWJsZVwiO1xyXG5cclxuICAgICAgICBsZXQgZXllTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV5ZUxlZnQuY2xhc3NOYW1lID0gXCJzbWlsZS1leWUtbGVmdFwiO1xyXG4gICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoZXllTGVmdCk7XHJcblxyXG4gICAgICAgIGxldCBleWVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV5ZVJpZ2h0LmNsYXNzTmFtZSA9IFwic21pbGUtZXllLXJpZ2h0XCI7XHJcbiAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChleWVSaWdodCk7XHJcblxyXG4gICAgICAgIGxldCBtb3V0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1vdXRoLmNsYXNzTmFtZSA9IFwic21pbGUtbW91dGhcIjtcclxuICAgICAgICBodG1sLmFwcGVuZENoaWxkKG1vdXRoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoQ29sb3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvckluZGV4ID0gKHRoaXMuY29sb3JJbmRleCArIDEpICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMuY29sb3JzW3RoaXMuY29sb3JJbmRleF07XHJcbiAgICAgICAgdGhpcy5odG1sLnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSBjb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LlNtaWxlID0gU21pbGU7Il19
