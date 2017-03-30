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

            this.html.style.zIndex = 1;
            smile.html.style.zIndex = 0;
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

        $(_this.html).on('dragStart', function () {
            _this.onDragStart();
        });

        $(_this.html).on('dragEnd', function () {
            _this.onDragEnd();
        });

        $(_this.html).on('staticClick', function () {
            _this.switchColor();
        });
        return _this;
    }

    _createClass(Smile, [{
        key: "onDragStart",
        value: function onDragStart() {
            this.html.style.zIndex = 1;
            this.html.style['pointer-events'] = 'none';
        }
    }, {
        key: "onDragEnd",
        value: function onDragEnd() {
            this.html.style['pointer-events'] = '';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGVzNlxcQm94LmVzNiIsInNyY1xcZXM2XFxEaXNwbGF5T2JqZWN0LmVzNiIsInNyY1xcZXM2XFxTbWlsZS5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztJQUVhLEcsV0FBQSxHOzs7QUFFVCxtQkFBYztBQUFBOztBQUFBOztBQUVWLGNBQUssS0FBTCxHQUFhLEtBQWI7O0FBRUEsVUFBRSxNQUFLLElBQVAsRUFBYSxFQUFiLENBQWdCLFlBQWhCLEVBQThCLFlBQU07QUFDaEMsa0JBQUssS0FBTCxHQUFhLElBQWI7QUFDSCxTQUZEOztBQUlBLFVBQUUsTUFBSyxJQUFQLEVBQWEsRUFBYixDQUFnQixZQUFoQixFQUE4QixZQUFNO0FBQ2hDLGtCQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0gsU0FGRDtBQVJVO0FBV2I7Ozs7cUNBRVk7QUFDVDs7QUFFQSxnQkFBSSxPQUFPLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsaUJBQUssU0FBTCxHQUFpQixLQUFqQjs7QUFFQSxtQkFBTyxJQUFQO0FBQ0g7OzttQ0FFVSxLLEVBQU87QUFDZCxnQkFBSSxVQUFVLEtBQUssYUFBTCxFQUFkO0FBQ0EsZ0JBQUksWUFBWSxNQUFNLGFBQU4sRUFBaEI7O0FBRUEsa0JBQU0sSUFBTixDQUFXLEtBQVgsQ0FBaUIsSUFBakIsR0FBd0IsUUFBUSxJQUFSLEdBQWUsUUFBUSxLQUFSLEdBQWdCLENBQS9CLEdBQW1DLFVBQVUsS0FBVixHQUFrQixDQUFyRCxHQUF5RCxJQUFqRjtBQUNBLGtCQUFNLElBQU4sQ0FBVyxLQUFYLENBQWlCLEdBQWpCLEdBQXVCLFFBQVEsR0FBUixHQUFjLFVBQVUsTUFBVixHQUFtQixHQUFqQyxHQUF1QyxJQUE5RDs7QUFFQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixNQUFoQixHQUF5QixDQUF6QjtBQUNBLGtCQUFNLElBQU4sQ0FBVyxLQUFYLENBQWlCLE1BQWpCLEdBQTBCLENBQTFCO0FBQ0g7Ozt1Q0FFYztBQUNYLG1CQUFPLEtBQUssS0FBWjtBQUNIOzs7Ozs7QUFHTCxPQUFPLEdBQVAsR0FBYSxHQUFiOzs7Ozs7Ozs7Ozs7O0lDMUNhLGEsV0FBQSxhO0FBQ1QsNkJBQWM7QUFBQTs7QUFDVixhQUFLLFlBQUwsR0FBb0IsU0FBUyxjQUFULENBQXdCLGNBQXhCLENBQXBCO0FBQ0EsYUFBSyxJQUFMLEdBQVksS0FBSyxVQUFMLEVBQVo7O0FBRUEsYUFBSyxZQUFMLENBQWtCLFdBQWxCLENBQThCLEtBQUssSUFBbkM7QUFDSDs7OztxQ0FFWSxDQUVaOzs7d0NBRWU7QUFDWixtQkFBTyxLQUFLLElBQUwsQ0FBVSxxQkFBVixFQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RMOzs7Ozs7OztJQUVhLEssV0FBQSxLOzs7QUFFVCxxQkFBYztBQUFBOztBQUFBOztBQUdWLGNBQUssTUFBTCxHQUFjLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBZDtBQUNBLGNBQUssVUFBTCxHQUFrQixDQUFsQjs7QUFFQSxVQUFFLE1BQUssSUFBUCxFQUFhLEVBQWIsQ0FBZ0IsV0FBaEIsRUFBNkIsWUFBTTtBQUMvQixrQkFBSyxXQUFMO0FBQ0gsU0FGRDs7QUFJQSxVQUFFLE1BQUssSUFBUCxFQUFhLEVBQWIsQ0FBZ0IsU0FBaEIsRUFBMkIsWUFBTTtBQUM3QixrQkFBSyxTQUFMO0FBQ0gsU0FGRDs7QUFJQSxVQUFFLE1BQUssSUFBUCxFQUFhLEVBQWIsQ0FBZ0IsYUFBaEIsRUFBK0IsWUFBTTtBQUNqQyxrQkFBSyxXQUFMO0FBQ0gsU0FGRDtBQWRVO0FBaUJiOzs7O3NDQUVhO0FBQ1YsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsTUFBaEIsR0FBeUIsQ0FBekI7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixnQkFBaEIsSUFBb0MsTUFBcEM7QUFDSDs7O29DQUVXO0FBQ1IsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsZ0JBQWhCLElBQW9DLEVBQXBDOztBQUVBLGdCQUFJLEtBQUssR0FBTCxDQUFTLFlBQVQsRUFBSixFQUE2QjtBQUN6QixxQkFBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixJQUFwQjtBQUNIO0FBQ0o7OztxQ0FFWTtBQUNUOztBQUVBLGdCQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxpQkFBSyxTQUFMLEdBQWlCLHNCQUFqQjs7QUFFQSxnQkFBSSxVQUFVLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0Esb0JBQVEsU0FBUixHQUFvQixnQkFBcEI7QUFDQSxpQkFBSyxXQUFMLENBQWlCLE9BQWpCOztBQUVBLGdCQUFJLFdBQVcsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxxQkFBUyxTQUFULEdBQXFCLGlCQUFyQjtBQUNBLGlCQUFLLFdBQUwsQ0FBaUIsUUFBakI7O0FBRUEsZ0JBQUksUUFBUSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLGtCQUFNLFNBQU4sR0FBa0IsYUFBbEI7QUFDQSxpQkFBSyxXQUFMLENBQWlCLEtBQWpCOztBQUVBLG1CQUFPLElBQVA7QUFDSDs7O3NDQUVhO0FBQ1YsaUJBQUssVUFBTCxHQUFrQixDQUFDLEtBQUssVUFBTCxHQUFrQixDQUFuQixJQUF3QixLQUFLLE1BQUwsQ0FBWSxNQUF0RDtBQUNBLGdCQUFJLFFBQVEsS0FBSyxNQUFMLENBQVksS0FBSyxVQUFqQixDQUFaO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0Isa0JBQWhCLElBQXNDLEtBQXRDO0FBQ0g7Ozs7OztBQUdMLE9BQU8sS0FBUCxHQUFlLEtBQWYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgRGlzcGxheU9iamVjdCB9IGZyb20gJy4vRGlzcGxheU9iamVjdC5lczYnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJveCBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ob3ZlciA9IGZhbHNlO1xyXG5cclxuICAgICAgICAkKHRoaXMuaHRtbCkub24oJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaG92ZXIgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKHRoaXMuaHRtbCkub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaG92ZXIgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVIdG1sKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUh0bWwoKTtcclxuXHJcbiAgICAgICAgbGV0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBodG1sLmNsYXNzTmFtZSA9IFwiYm94XCI7XHJcblxyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU21pbGUoc21pbGUpIHtcclxuICAgICAgICBsZXQgcmVjdEJveCA9IHRoaXMuZ2V0Qm91bmRzUmVjdCgpO1xyXG4gICAgICAgIGxldCByZWN0U21pbGUgPSBzbWlsZS5nZXRCb3VuZHNSZWN0KCk7XHJcblxyXG4gICAgICAgIHNtaWxlLmh0bWwuc3R5bGUubGVmdCA9IHJlY3RCb3gubGVmdCArIHJlY3RCb3gud2lkdGggLyAyIC0gcmVjdFNtaWxlLndpZHRoIC8gMiArICdweCc7XHJcbiAgICAgICAgc21pbGUuaHRtbC5zdHlsZS50b3AgPSByZWN0Qm94LnRvcCAtIHJlY3RTbWlsZS5oZWlnaHQgKiAwLjIgKyAncHgnO1xyXG5cclxuICAgICAgICB0aGlzLmh0bWwuc3R5bGUuekluZGV4ID0gMTtcclxuICAgICAgICBzbWlsZS5odG1sLnN0eWxlLnpJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZHlGb3JEcm9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuQm94ID0gQm94OyIsImV4cG9ydCBjbGFzcyBEaXNwbGF5T2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBDb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy5odG1sID0gdGhpcy5jcmVhdGVIdG1sKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSHRtbCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm91bmRzUmVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odG1sLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IERpc3BsYXlPYmplY3QgfSBmcm9tICcuL0Rpc3BsYXlPYmplY3QuZXM2JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTbWlsZSBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3JzID0gW1wiI2ZmY2MwMFwiLCBcIiNmZjU1MDBcIl07XHJcbiAgICAgICAgdGhpcy5jb2xvckluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgJCh0aGlzLmh0bWwpLm9uKCdkcmFnU3RhcnQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnU3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCh0aGlzLmh0bWwpLm9uKCdkcmFnRW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ0VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKHRoaXMuaHRtbCkub24oJ3N0YXRpY0NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaENvbG9yKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmFnU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sLnN0eWxlLnpJbmRleCA9IDE7XHJcbiAgICAgICAgdGhpcy5odG1sLnN0eWxlWydwb2ludGVyLWV2ZW50cyddID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgICB0aGlzLmh0bWwuc3R5bGVbJ3BvaW50ZXItZXZlbnRzJ10gPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm94LnJlYWR5Rm9yRHJvcCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm94LnBsYWNlU21pbGUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUh0bWwoKSB7XHJcbiAgICAgICAgc3VwZXIuY3JlYXRlSHRtbCgpO1xyXG5cclxuICAgICAgICBsZXQgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGh0bWwuY2xhc3NOYW1lID0gXCJzbWlsZS1iYXNlIGRyYWdnYWJsZVwiO1xyXG5cclxuICAgICAgICBsZXQgZXllTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV5ZUxlZnQuY2xhc3NOYW1lID0gXCJzbWlsZS1leWUtbGVmdFwiO1xyXG4gICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoZXllTGVmdCk7XHJcblxyXG4gICAgICAgIGxldCBleWVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV5ZVJpZ2h0LmNsYXNzTmFtZSA9IFwic21pbGUtZXllLXJpZ2h0XCI7XHJcbiAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChleWVSaWdodCk7XHJcblxyXG4gICAgICAgIGxldCBtb3V0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1vdXRoLmNsYXNzTmFtZSA9IFwic21pbGUtbW91dGhcIjtcclxuICAgICAgICBodG1sLmFwcGVuZENoaWxkKG1vdXRoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoQ29sb3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvckluZGV4ID0gKHRoaXMuY29sb3JJbmRleCArIDEpICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMuY29sb3JzW3RoaXMuY29sb3JJbmRleF07XHJcbiAgICAgICAgdGhpcy5odG1sLnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSBjb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LlNtaWxlID0gU21pbGU7Il19
