"use strict";
exports.id = 5577;
exports.ids = [5577];
exports.modules = {

/***/ 35577:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * lucide-react v0.92.0 - ISC
 */ 
__webpack_unused_export__ = ({
    value: true
});
var react = __webpack_require__(1872);
var PropTypes = __webpack_require__(38290);
function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        "default": e
    };
}
var PropTypes__default = /*#__PURE__*/ _interopDefaultLegacy(PropTypes);
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
var _excluded = [
    "color",
    "size",
    "strokeWidth",
    "children"
];
/**
 * Converts string to KebabCase
 * Copied from scripts/helper. If anyone knows how to properly import it here
 * then please fix it.
 *
 * @param {string} string
 * @returns {string} A kebabized string
 */ var toKebabCase = function toKebabCase(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};
var createReactComponent = function(iconName, iconNode) {
    var Component = react.forwardRef(function(_ref, ref) {
        var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$strokeWidth = _ref.strokeWidth, strokeWidth = _ref$strokeWidth === void 0 ? 2 : _ref$strokeWidth, children = _ref.children, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
        return react.createElement("svg", _extends({
            ref: ref
        }, defaultAttributes, {
            width: size,
            height: size,
            stroke: color,
            strokeWidth: strokeWidth,
            className: "lucide lucide-" + toKebabCase(iconName)
        }, rest), [].concat(iconNode.map(function(_ref2) {
            var tag = _ref2[0], attrs = _ref2[1];
            return react.createElement(tag, attrs);
        }), children || []));
    });
    Component.propTypes = {
        color: PropTypes__default["default"].string,
        size: PropTypes__default["default"].oneOfType([
            PropTypes__default["default"].string,
            PropTypes__default["default"].number
        ]),
        strokeWidth: PropTypes__default["default"].oneOfType([
            PropTypes__default["default"].string,
            PropTypes__default["default"].number
        ])
    };
    Component.displayName = "" + iconName;
    return Component;
};
var Accessibility = createReactComponent("Accessibility", [
    [
        "circle",
        {
            cx: "16",
            cy: "4",
            r: "1",
            key: "1grugj"
        }
    ],
    [
        "path",
        {
            d: "m18 19 1-7-5.87.94",
            key: "16gztd"
        }
    ],
    [
        "path",
        {
            d: "m5 8 3-3 5.5 3-2.21 3.1",
            key: "133gd0"
        }
    ],
    [
        "path",
        {
            d: "M4.24 14.48c-.19.58-.27 1.2-.23 1.84a5 5 0 0 0 5.31 4.67c.65-.04 1.25-.2 1.8-.46",
            key: "12oo9p"
        }
    ],
    [
        "path",
        {
            d: "M13.76 17.52c.19-.58.27-1.2.23-1.84a5 5 0 0 0-5.31-4.67c-.65.04-1.25.2-1.8.46",
            key: "15si8q"
        }
    ]
]);
var Accessibility$1 = Accessibility;
var Activity = createReactComponent("Activity", [
    [
        "polyline",
        {
            points: "22 12 18 12 15 21 9 3 6 12 2 12",
            key: "xez52g"
        }
    ]
]);
var Activity$1 = Activity;
var AirVent = createReactComponent("AirVent", [
    [
        "path",
        {
            d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
            key: "larmp2"
        }
    ],
    [
        "path",
        {
            d: "M6 8h12",
            key: "6g4wlu"
        }
    ],
    [
        "path",
        {
            d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",
            key: "1bo8pg"
        }
    ],
    [
        "path",
        {
            d: "M6.6 15.6A2 2 0 1 0 10 17v-5",
            key: "t9h90c"
        }
    ]
]);
var AirVent$1 = AirVent;
var Airplay = createReactComponent("Airplay", [
    [
        "path",
        {
            d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
            key: "ns4c3b"
        }
    ],
    [
        "polygon",
        {
            points: "12 15 17 21 7 21 12 15",
            key: "1sy95i"
        }
    ]
]);
var Airplay$1 = Airplay;
var AlarmCheck = createReactComponent("AlarmCheck", [
    [
        "path",
        {
            d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
            key: "1dr9l2"
        }
    ],
    [
        "path",
        {
            d: "M5 3 2 6",
            key: "18tl5t"
        }
    ],
    [
        "path",
        {
            d: "m22 6-3-3",
            key: "1opdir"
        }
    ],
    [
        "path",
        {
            d: "m6 19-2 2",
            key: "1ek6nb"
        }
    ],
    [
        "path",
        {
            d: "m18 19 2 2",
            key: "lw9i"
        }
    ],
    [
        "path",
        {
            d: "m9 13 2 2 4-4",
            key: "6343dt"
        }
    ]
]);
var AlarmCheck$1 = AlarmCheck;
var AlarmClockOff = createReactComponent("AlarmClockOff", [
    [
        "path",
        {
            d: "M6.87 6.87a8 8 0 1 0 11.26 11.26",
            key: "3on8tj"
        }
    ],
    [
        "path",
        {
            d: "M19.9 14.25A7.44 7.44 0 0 0 20 13a8 8 0 0 0-8-8 7.44 7.44 0 0 0-1.25.1",
            key: "nxzvge"
        }
    ],
    [
        "path",
        {
            d: "m22 6-3-3",
            key: "1opdir"
        }
    ],
    [
        "path",
        {
            d: "m6 19-2 2",
            key: "1ek6nb"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M4 4 2 6",
            key: "1ycko6"
        }
    ]
]);
var AlarmClockOff$1 = AlarmClockOff;
var AlarmClock = createReactComponent("AlarmClock", [
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "8",
            key: "3y4lt7"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4l2 2",
            key: "1c63tq"
        }
    ],
    [
        "path",
        {
            d: "M5 3 2 6",
            key: "18tl5t"
        }
    ],
    [
        "path",
        {
            d: "m22 6-3-3",
            key: "1opdir"
        }
    ],
    [
        "path",
        {
            d: "m6 19-2 2",
            key: "1ek6nb"
        }
    ],
    [
        "path",
        {
            d: "m18 19 2 2",
            key: "lw9i"
        }
    ]
]);
var AlarmClock$1 = AlarmClock;
var AlarmMinus = createReactComponent("AlarmMinus", [
    [
        "path",
        {
            d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
            key: "1dr9l2"
        }
    ],
    [
        "path",
        {
            d: "M5 3 2 6",
            key: "18tl5t"
        }
    ],
    [
        "path",
        {
            d: "m22 6-3-3",
            key: "1opdir"
        }
    ],
    [
        "path",
        {
            d: "m6 19-2 2",
            key: "1ek6nb"
        }
    ],
    [
        "path",
        {
            d: "m18 19 2 2",
            key: "lw9i"
        }
    ],
    [
        "path",
        {
            d: "M9 13h6",
            key: "1uhe8q"
        }
    ]
]);
var AlarmMinus$1 = AlarmMinus;
var AlarmPlus = createReactComponent("AlarmPlus", [
    [
        "path",
        {
            d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
            key: "1dr9l2"
        }
    ],
    [
        "path",
        {
            d: "M5 3 2 6",
            key: "18tl5t"
        }
    ],
    [
        "path",
        {
            d: "m22 6-3-3",
            key: "1opdir"
        }
    ],
    [
        "path",
        {
            d: "m6 19-2 2",
            key: "1ek6nb"
        }
    ],
    [
        "path",
        {
            d: "m18 19 2 2",
            key: "lw9i"
        }
    ],
    [
        "path",
        {
            d: "M12 10v6",
            key: "1bos4e"
        }
    ],
    [
        "path",
        {
            d: "M9 13h6",
            key: "1uhe8q"
        }
    ]
]);
var AlarmPlus$1 = AlarmPlus;
var Album = createReactComponent("Album", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "polyline",
        {
            points: "11 3 11 11 14 8 17 11 17 3",
            key: "1wcwz3"
        }
    ]
]);
var Album$1 = Album;
var AlertCircle = createReactComponent("AlertCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12",
            key: "1grbh0"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16",
            key: "1w440g"
        }
    ]
]);
var AlertCircle$1 = AlertCircle;
var AlertOctagon = createReactComponent("AlertOctagon", [
    [
        "polygon",
        {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
            key: "h1p8hx"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12",
            key: "1grbh0"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16",
            key: "1w440g"
        }
    ]
]);
var AlertOctagon$1 = AlertOctagon;
var AlertTriangle = createReactComponent("AlertTriangle", [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
            key: "c3ski4"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "9",
            x2: "12",
            y2: "13",
            key: "mb7vjk"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "17",
            x2: "12.01",
            y2: "17",
            key: "kdstpg"
        }
    ]
]);
var AlertTriangle$1 = AlertTriangle;
var AlignCenterHorizontal = createReactComponent("AlignCenterHorizontal", [
    [
        "path",
        {
            d: "M2 12h20",
            key: "9i4pu4"
        }
    ],
    [
        "path",
        {
            d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",
            key: "11f1s0"
        }
    ],
    [
        "path",
        {
            d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",
            key: "t14dx9"
        }
    ],
    [
        "path",
        {
            d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",
            key: "1w07xs"
        }
    ],
    [
        "path",
        {
            d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",
            key: "1apec2"
        }
    ]
]);
var AlignCenterHorizontal$1 = AlignCenterHorizontal;
var AlignCenterVertical = createReactComponent("AlignCenterVertical", [
    [
        "path",
        {
            d: "M12 2v20",
            key: "t6zp3m"
        }
    ],
    [
        "path",
        {
            d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",
            key: "14d6g8"
        }
    ],
    [
        "path",
        {
            d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",
            key: "1e2lrw"
        }
    ],
    [
        "path",
        {
            d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",
            key: "1fkdwx"
        }
    ],
    [
        "path",
        {
            d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",
            key: "1euafb"
        }
    ]
]);
var AlignCenterVertical$1 = AlignCenterVertical;
var AlignCenter = createReactComponent("AlignCenter", [
    [
        "line",
        {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6",
            key: "1e448z"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "12",
            x2: "7",
            y2: "12",
            key: "driibe"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "18",
            x2: "5",
            y2: "18",
            key: "1i3xdx"
        }
    ]
]);
var AlignCenter$1 = AlignCenter;
var AlignEndHorizontal = createReactComponent("AlignEndHorizontal", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "6",
            height: "16",
            rx: "2",
            key: "xp5u6c"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "9",
            width: "6",
            height: "9",
            rx: "2",
            key: "1e039c"
        }
    ],
    [
        "path",
        {
            d: "M22 22H2",
            key: "19qnx5"
        }
    ]
]);
var AlignEndHorizontal$1 = AlignEndHorizontal;
var AlignEndVertical = createReactComponent("AlignEndVertical", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "16",
            height: "6",
            rx: "2",
            key: "1j7b8s"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "14",
            width: "9",
            height: "6",
            rx: "2",
            key: "b2t4yo"
        }
    ],
    [
        "path",
        {
            d: "M22 22V2",
            key: "12ipfv"
        }
    ]
]);
var AlignEndVertical$1 = AlignEndVertical;
var AlignHorizontalDistributeCenter = createReactComponent("AlignHorizontalDistributeCenter", [
    [
        "rect",
        {
            x: "4",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "ric6yp"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "1mr5t1"
        }
    ],
    [
        "path",
        {
            d: "M17 22v-5",
            key: "4b6g73"
        }
    ],
    [
        "path",
        {
            d: "M17 7V2",
            key: "hnrr36"
        }
    ],
    [
        "path",
        {
            d: "M7 22v-3",
            key: "1r4jpn"
        }
    ],
    [
        "path",
        {
            d: "M7 5V2",
            key: "liy1u9"
        }
    ]
]);
var AlignHorizontalDistributeCenter$1 = AlignHorizontalDistributeCenter;
var AlignHorizontalDistributeEnd = createReactComponent("AlignHorizontalDistributeEnd", [
    [
        "rect",
        {
            x: "4",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "ric6yp"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "1mr5t1"
        }
    ],
    [
        "path",
        {
            d: "M10 2v20",
            key: "uyc634"
        }
    ],
    [
        "path",
        {
            d: "M20 2v20",
            key: "1tx262"
        }
    ]
]);
var AlignHorizontalDistributeEnd$1 = AlignHorizontalDistributeEnd;
var AlignHorizontalDistributeStart = createReactComponent("AlignHorizontalDistributeStart", [
    [
        "rect",
        {
            x: "4",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "ric6yp"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "1mr5t1"
        }
    ],
    [
        "path",
        {
            d: "M4 2v20",
            key: "gtpd5x"
        }
    ],
    [
        "path",
        {
            d: "M14 2v20",
            key: "tg6bpw"
        }
    ]
]);
var AlignHorizontalDistributeStart$1 = AlignHorizontalDistributeStart;
var AlignHorizontalJustifyCenter = createReactComponent("AlignHorizontalJustifyCenter", [
    [
        "rect",
        {
            x: "2",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "15angl"
        }
    ],
    [
        "rect",
        {
            x: "16",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "1di99g"
        }
    ],
    [
        "path",
        {
            d: "M12 2v20",
            key: "t6zp3m"
        }
    ]
]);
var AlignHorizontalJustifyCenter$1 = AlignHorizontalJustifyCenter;
var AlignHorizontalJustifyEnd = createReactComponent("AlignHorizontalJustifyEnd", [
    [
        "rect",
        {
            x: "2",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "15angl"
        }
    ],
    [
        "rect",
        {
            x: "12",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "150rwc"
        }
    ],
    [
        "path",
        {
            d: "M22 2v20",
            key: "40qfg1"
        }
    ]
]);
var AlignHorizontalJustifyEnd$1 = AlignHorizontalJustifyEnd;
var AlignHorizontalJustifyStart = createReactComponent("AlignHorizontalJustifyStart", [
    [
        "rect",
        {
            x: "6",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "1mezge"
        }
    ],
    [
        "rect",
        {
            x: "16",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "1di99g"
        }
    ],
    [
        "path",
        {
            d: "M2 2v20",
            key: "1ivd8o"
        }
    ]
]);
var AlignHorizontalJustifyStart$1 = AlignHorizontalJustifyStart;
var AlignHorizontalSpaceAround = createReactComponent("AlignHorizontalSpaceAround", [
    [
        "rect",
        {
            x: "9",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "7k3bt6"
        }
    ],
    [
        "path",
        {
            d: "M4 22V2",
            key: "tsjzd3"
        }
    ],
    [
        "path",
        {
            d: "M20 22V2",
            key: "1bnhr8"
        }
    ]
]);
var AlignHorizontalSpaceAround$1 = AlignHorizontalSpaceAround;
var AlignHorizontalSpaceBetween = createReactComponent("AlignHorizontalSpaceBetween", [
    [
        "rect",
        {
            x: "3",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "iybqme"
        }
    ],
    [
        "rect",
        {
            x: "15",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "11q98m"
        }
    ],
    [
        "path",
        {
            d: "M3 2v20",
            key: "1d2pfg"
        }
    ],
    [
        "path",
        {
            d: "M21 2v20",
            key: "p059bm"
        }
    ]
]);
var AlignHorizontalSpaceBetween$1 = AlignHorizontalSpaceBetween;
var AlignJustify = createReactComponent("AlignJustify", [
    [
        "line",
        {
            x1: "3",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "1tp2lp"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "1aui40"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "18",
            x2: "21",
            y2: "18",
            key: "1sxo76"
        }
    ]
]);
var AlignJustify$1 = AlignJustify;
var AlignLeft = createReactComponent("AlignLeft", [
    [
        "line",
        {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6",
            key: "1e448z"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "12",
            x2: "3",
            y2: "12",
            key: "80e4vw"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "18",
            x2: "3",
            y2: "18",
            key: "1771gn"
        }
    ]
]);
var AlignLeft$1 = AlignLeft;
var AlignRight = createReactComponent("AlignRight", [
    [
        "line",
        {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6",
            key: "1e448z"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "12",
            x2: "9",
            y2: "12",
            key: "1stwgr"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "18",
            x2: "7",
            y2: "18",
            key: "1hion3"
        }
    ]
]);
var AlignRight$1 = AlignRight;
var AlignStartHorizontal = createReactComponent("AlignStartHorizontal", [
    [
        "rect",
        {
            x: "4",
            y: "6",
            width: "6",
            height: "16",
            rx: "2",
            key: "1l8oni"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "6",
            width: "6",
            height: "9",
            rx: "2",
            key: "16r6cq"
        }
    ],
    [
        "path",
        {
            d: "M22 2H2",
            key: "fhrpnj"
        }
    ]
]);
var AlignStartHorizontal$1 = AlignStartHorizontal;
var AlignStartVertical = createReactComponent("AlignStartVertical", [
    [
        "rect",
        {
            x: "6",
            y: "14",
            width: "9",
            height: "6",
            rx: "2",
            key: "pvftf3"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "4",
            width: "16",
            height: "6",
            rx: "2",
            key: "1aj6m8"
        }
    ],
    [
        "path",
        {
            d: "M2 2v20",
            key: "1ivd8o"
        }
    ]
]);
var AlignStartVertical$1 = AlignStartVertical;
var AlignVerticalDistributeCenter = createReactComponent("AlignVerticalDistributeCenter", [
    [
        "rect",
        {
            x: "5",
            y: "14",
            width: "14",
            height: "6",
            rx: "2",
            key: "1qrzuf"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "4",
            width: "10",
            height: "6",
            rx: "2",
            key: "we8e9z"
        }
    ],
    [
        "path",
        {
            d: "M22 7h-5",
            key: "o2endc"
        }
    ],
    [
        "path",
        {
            d: "M7 7H1",
            key: "105l6j"
        }
    ],
    [
        "path",
        {
            d: "M22 17h-3",
            key: "1lwga1"
        }
    ],
    [
        "path",
        {
            d: "M5 17H2",
            key: "1gx9xc"
        }
    ]
]);
var AlignVerticalDistributeCenter$1 = AlignVerticalDistributeCenter;
var AlignVerticalDistributeEnd = createReactComponent("AlignVerticalDistributeEnd", [
    [
        "rect",
        {
            x: "5",
            y: "14",
            width: "14",
            height: "6",
            rx: "2",
            key: "1qrzuf"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "4",
            width: "10",
            height: "6",
            rx: "2",
            key: "we8e9z"
        }
    ],
    [
        "path",
        {
            d: "M2 20h20",
            key: "owomy5"
        }
    ],
    [
        "path",
        {
            d: "M2 10h20",
            key: "1ir3d8"
        }
    ]
]);
var AlignVerticalDistributeEnd$1 = AlignVerticalDistributeEnd;
var AlignVerticalDistributeStart = createReactComponent("AlignVerticalDistributeStart", [
    [
        "rect",
        {
            x: "5",
            y: "14",
            width: "14",
            height: "6",
            rx: "2",
            key: "1qrzuf"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "4",
            width: "10",
            height: "6",
            rx: "2",
            key: "we8e9z"
        }
    ],
    [
        "path",
        {
            d: "M2 14h20",
            key: "myj16y"
        }
    ],
    [
        "path",
        {
            d: "M2 4h20",
            key: "mda7wb"
        }
    ]
]);
var AlignVerticalDistributeStart$1 = AlignVerticalDistributeStart;
var AlignVerticalJustifyCenter = createReactComponent("AlignVerticalJustifyCenter", [
    [
        "rect",
        {
            x: "5",
            y: "16",
            width: "14",
            height: "6",
            rx: "2",
            key: "1xmr5l"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "2",
            width: "10",
            height: "6",
            rx: "2",
            key: "1dm79a"
        }
    ],
    [
        "path",
        {
            d: "M2 12h20",
            key: "9i4pu4"
        }
    ]
]);
var AlignVerticalJustifyCenter$1 = AlignVerticalJustifyCenter;
var AlignVerticalJustifyEnd = createReactComponent("AlignVerticalJustifyEnd", [
    [
        "rect",
        {
            x: "5",
            y: "12",
            width: "14",
            height: "6",
            rx: "2",
            key: "12nflp"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "2",
            width: "10",
            height: "6",
            rx: "2",
            key: "1dm79a"
        }
    ],
    [
        "path",
        {
            d: "M2 22h20",
            key: "272qi7"
        }
    ]
]);
var AlignVerticalJustifyEnd$1 = AlignVerticalJustifyEnd;
var AlignVerticalJustifyStart = createReactComponent("AlignVerticalJustifyStart", [
    [
        "rect",
        {
            x: "5",
            y: "16",
            width: "14",
            height: "6",
            rx: "2",
            key: "1xmr5l"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "6",
            width: "10",
            height: "6",
            rx: "2",
            key: "q2ofyd"
        }
    ],
    [
        "path",
        {
            d: "M2 2h20",
            key: "1ennik"
        }
    ]
]);
var AlignVerticalJustifyStart$1 = AlignVerticalJustifyStart;
var AlignVerticalSpaceAround = createReactComponent("AlignVerticalSpaceAround", [
    [
        "rect",
        {
            x: "7",
            y: "9",
            width: "10",
            height: "6",
            rx: "2",
            key: "1iy9tl"
        }
    ],
    [
        "path",
        {
            d: "M22 20H2",
            key: "1p1f7z"
        }
    ],
    [
        "path",
        {
            d: "M22 4H2",
            key: "1b7qnq"
        }
    ]
]);
var AlignVerticalSpaceAround$1 = AlignVerticalSpaceAround;
var AlignVerticalSpaceBetween = createReactComponent("AlignVerticalSpaceBetween", [
    [
        "rect",
        {
            x: "5",
            y: "15",
            width: "14",
            height: "6",
            rx: "2",
            key: "hytrht"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "3",
            width: "10",
            height: "6",
            rx: "2",
            key: "y09b40"
        }
    ],
    [
        "path",
        {
            d: "M2 21h20",
            key: "1nyx9w"
        }
    ],
    [
        "path",
        {
            d: "M2 3h20",
            key: "91anmk"
        }
    ]
]);
var AlignVerticalSpaceBetween$1 = AlignVerticalSpaceBetween;
var Anchor = createReactComponent("Anchor", [
    [
        "circle",
        {
            cx: "12",
            cy: "5",
            r: "3",
            key: "rqqgnr"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "8",
            key: "111jcv"
        }
    ],
    [
        "path",
        {
            d: "M5 12H2a10 10 0 0 0 20 0h-3",
            key: "1hv3nh"
        }
    ]
]);
var Anchor$1 = Anchor;
var Angry = createReactComponent("Angry", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M16 16s-1.5-2-4-2-4 2-4 2",
            key: "epbg0q"
        }
    ],
    [
        "path",
        {
            d: "M7.5 8 10 9",
            key: "olxxln"
        }
    ],
    [
        "path",
        {
            d: "m14 9 2.5-1",
            key: "1j6cij"
        }
    ],
    [
        "path",
        {
            d: "M9 10h0",
            key: "1vxvly"
        }
    ],
    [
        "path",
        {
            d: "M15 10h0",
            key: "1j6oav"
        }
    ]
]);
var Angry$1 = Angry;
var Annoyed = createReactComponent("Annoyed", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M8 15h8",
            key: "45n4r"
        }
    ],
    [
        "path",
        {
            d: "M8 9h2",
            key: "1g203m"
        }
    ],
    [
        "path",
        {
            d: "M14 9h2",
            key: "116p9w"
        }
    ]
]);
var Annoyed$1 = Annoyed;
var Aperture = createReactComponent("Aperture", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "14.31",
            y1: "8",
            x2: "20.05",
            y2: "17.94",
            key: "1oqej7"
        }
    ],
    [
        "line",
        {
            x1: "9.69",
            y1: "8",
            x2: "21.17",
            y2: "8",
            key: "1cv19a"
        }
    ],
    [
        "line",
        {
            x1: "7.38",
            y1: "12",
            x2: "13.12",
            y2: "2.06",
            key: "1vh5oz"
        }
    ],
    [
        "line",
        {
            x1: "9.69",
            y1: "16",
            x2: "3.95",
            y2: "6.06",
            key: "saeeuz"
        }
    ],
    [
        "line",
        {
            x1: "14.31",
            y1: "16",
            x2: "2.83",
            y2: "16",
            key: "pq85rp"
        }
    ],
    [
        "line",
        {
            x1: "16.62",
            y1: "12",
            x2: "10.88",
            y2: "21.94",
            key: "wactqi"
        }
    ]
]);
var Aperture$1 = Aperture;
var Apple = createReactComponent("Apple", [
    [
        "path",
        {
            d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
            key: "3s7exb"
        }
    ],
    [
        "path",
        {
            d: "M10 2c1 .5 2 2 2 5",
            key: "fcco2y"
        }
    ]
]);
var Apple$1 = Apple;
var ArchiveRestore = createReactComponent("ArchiveRestore", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "5",
            rx: "2",
            key: "1h2p0l"
        }
    ],
    [
        "path",
        {
            d: "M12 13v7",
            key: "1arz7h"
        }
    ],
    [
        "path",
        {
            d: "m9 16 3-3 3 3",
            key: "1idcnm"
        }
    ],
    [
        "path",
        {
            d: "M4 9v9a2 2 0 0 0 2 2h2",
            key: "qxnby6"
        }
    ],
    [
        "path",
        {
            d: "M20 9v9a2 2 0 0 1-2 2h-2",
            key: "gz3jmx"
        }
    ]
]);
var ArchiveRestore$1 = ArchiveRestore;
var Archive = createReactComponent("Archive", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "5",
            rx: "2",
            key: "1h2p0l"
        }
    ],
    [
        "path",
        {
            d: "M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9",
            key: "shkvi4"
        }
    ],
    [
        "path",
        {
            d: "M10 13h4",
            key: "ytezjc"
        }
    ]
]);
var Archive$1 = Archive;
var Armchair = createReactComponent("Armchair", [
    [
        "path",
        {
            d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",
            key: "irtipd"
        }
    ],
    [
        "path",
        {
            d: "M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",
            key: "1ed1m0"
        }
    ],
    [
        "path",
        {
            d: "M5 18v2",
            key: "ppbyun"
        }
    ],
    [
        "path",
        {
            d: "M19 18v2",
            key: "gy7782"
        }
    ]
]);
var Armchair$1 = Armchair;
var ArrowBigDown = createReactComponent("ArrowBigDown", [
    [
        "path",
        {
            d: "M9 3h6v11h4l-7 7-7-7h4z",
            key: "6dczpq"
        }
    ]
]);
var ArrowBigDown$1 = ArrowBigDown;
var ArrowBigLeft = createReactComponent("ArrowBigLeft", [
    [
        "path",
        {
            d: "m3 12 7-7v4h11v6H10v4z",
            key: "1e8ocp"
        }
    ]
]);
var ArrowBigLeft$1 = ArrowBigLeft;
var ArrowBigRight = createReactComponent("ArrowBigRight", [
    [
        "path",
        {
            d: "m21 12-7-7v4H3v6h11v4z",
            key: "58zwfy"
        }
    ]
]);
var ArrowBigRight$1 = ArrowBigRight;
var ArrowBigUp = createReactComponent("ArrowBigUp", [
    [
        "path",
        {
            d: "M9 21V10H5l7-7 7 7h-4v11z",
            key: "8tfmm3"
        }
    ]
]);
var ArrowBigUp$1 = ArrowBigUp;
var ArrowDownCircle = createReactComponent("ArrowDownCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "8 12 12 16 16 12",
            key: "14qdon"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "16",
            key: "55jlg"
        }
    ]
]);
var ArrowDownCircle$1 = ArrowDownCircle;
var ArrowDownLeft = createReactComponent("ArrowDownLeft", [
    [
        "line",
        {
            x1: "17",
            y1: "7",
            x2: "7",
            y2: "17",
            key: "1cuvd1"
        }
    ],
    [
        "polyline",
        {
            points: "17 17 7 17 7 7",
            key: "aq42rd"
        }
    ]
]);
var ArrowDownLeft$1 = ArrowDownLeft;
var ArrowDownRight = createReactComponent("ArrowDownRight", [
    [
        "line",
        {
            x1: "7",
            y1: "7",
            x2: "17",
            y2: "17",
            key: "dtegzv"
        }
    ],
    [
        "polyline",
        {
            points: "17 7 17 17 7 17",
            key: "1gmiis"
        }
    ]
]);
var ArrowDownRight$1 = ArrowDownRight;
var ArrowDown = createReactComponent("ArrowDown", [
    [
        "line",
        {
            x1: "12",
            y1: "5",
            x2: "12",
            y2: "19",
            key: "myz83a"
        }
    ],
    [
        "polyline",
        {
            points: "19 12 12 19 5 12",
            key: "17kmxi"
        }
    ]
]);
var ArrowDown$1 = ArrowDown;
var ArrowLeftCircle = createReactComponent("ArrowLeftCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 8 8 12 12 16",
            key: "bz1698"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "12",
            x2: "8",
            y2: "12",
            key: "i2qu8k"
        }
    ]
]);
var ArrowLeftCircle$1 = ArrowLeftCircle;
var ArrowLeftRight = createReactComponent("ArrowLeftRight", [
    [
        "polyline",
        {
            points: "17 11 21 7 17 3",
            key: "l3l6r3"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "7",
            x2: "9",
            y2: "7",
            key: "17x2jj"
        }
    ],
    [
        "polyline",
        {
            points: "7 21 3 17 7 13",
            key: "lfumnw"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "17",
            x2: "3",
            y2: "17",
            key: "gusd5o"
        }
    ]
]);
var ArrowLeftRight$1 = ArrowLeftRight;
var ArrowLeft = createReactComponent("ArrowLeft", [
    [
        "line",
        {
            x1: "19",
            y1: "12",
            x2: "5",
            y2: "12",
            key: "17g05t"
        }
    ],
    [
        "polyline",
        {
            points: "12 19 5 12 12 5",
            key: "1ksm0z"
        }
    ]
]);
var ArrowLeft$1 = ArrowLeft;
var ArrowRightCircle = createReactComponent("ArrowRightCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 16 16 12 12 8",
            key: "1byh5s"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
var ArrowRightCircle$1 = ArrowRightCircle;
var ArrowRight = createReactComponent("ArrowRight", [
    [
        "line",
        {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
            key: "1smlys"
        }
    ],
    [
        "polyline",
        {
            points: "12 5 19 12 12 19",
            key: "sfr3i6"
        }
    ]
]);
var ArrowRight$1 = ArrowRight;
var ArrowUpCircle = createReactComponent("ArrowUpCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "16 12 12 8 8 12",
            key: "1gpmhk"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "8",
            key: "r2mfdg"
        }
    ]
]);
var ArrowUpCircle$1 = ArrowUpCircle;
var ArrowUpDown = createReactComponent("ArrowUpDown", [
    [
        "polyline",
        {
            points: "11 17 7 21 3 17",
            key: "dv0ycv"
        }
    ],
    [
        "line",
        {
            x1: "7",
            y1: "21",
            x2: "7",
            y2: "9",
            key: "1cxv4h"
        }
    ],
    [
        "polyline",
        {
            points: "21 7 17 3 13 7",
            key: "1su31j"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "15",
            x2: "17",
            y2: "3",
            key: "r3527w"
        }
    ]
]);
var ArrowUpDown$1 = ArrowUpDown;
var ArrowUpLeft = createReactComponent("ArrowUpLeft", [
    [
        "line",
        {
            x1: "17",
            y1: "17",
            x2: "7",
            y2: "7",
            key: "814yaz"
        }
    ],
    [
        "polyline",
        {
            points: "7 17 7 7 17 7",
            key: "1jae2c"
        }
    ]
]);
var ArrowUpLeft$1 = ArrowUpLeft;
var ArrowUpRight = createReactComponent("ArrowUpRight", [
    [
        "line",
        {
            x1: "7",
            y1: "17",
            x2: "17",
            y2: "7",
            key: "16hgw2"
        }
    ],
    [
        "polyline",
        {
            points: "7 7 17 7 17 17",
            key: "blehsp"
        }
    ]
]);
var ArrowUpRight$1 = ArrowUpRight;
var ArrowUp = createReactComponent("ArrowUp", [
    [
        "line",
        {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "5",
            key: "yrd7g6"
        }
    ],
    [
        "polyline",
        {
            points: "5 12 12 5 19 12",
            key: "1y7d7k"
        }
    ]
]);
var ArrowUp$1 = ArrowUp;
var Asterisk = createReactComponent("Asterisk", [
    [
        "path",
        {
            d: "M12 6v12",
            key: "1vza4d"
        }
    ],
    [
        "path",
        {
            d: "M17.196 9 6.804 15",
            key: "1ah31z"
        }
    ],
    [
        "path",
        {
            d: "m6.804 9 10.392 6",
            key: "1b6pxd"
        }
    ]
]);
var Asterisk$1 = Asterisk;
var AtSign = createReactComponent("AtSign", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94",
            key: "1m6qx5"
        }
    ]
]);
var AtSign$1 = AtSign;
var Award = createReactComponent("Award", [
    [
        "circle",
        {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }
    ],
    [
        "path",
        {
            d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
            key: "em7aur"
        }
    ]
]);
var Award$1 = Award;
var Axe = createReactComponent("Axe", [
    [
        "path",
        {
            d: "m14 12-8.501 8.501a2.12 2.12 0 0 1-2.998 0h-.002a2.12 2.12 0 0 1 0-2.998L11 9.002",
            key: "ha6v2k"
        }
    ],
    [
        "path",
        {
            d: "m9 7 4-4 6 6h3l-.13.648a7.648 7.648 0 0 1-5.081 5.756L15 16v-3z",
            key: "1mosh2"
        }
    ]
]);
var Axe$1 = Axe;
var Axis3d = createReactComponent("Axis3d", [
    [
        "path",
        {
            d: "M4 4v16h16",
            key: "1s015l"
        }
    ],
    [
        "path",
        {
            d: "m4 20 7-7",
            key: "17qe9y"
        }
    ]
]);
var Axis3d$1 = Axis3d;
var Baby = createReactComponent("Baby", [
    [
        "path",
        {
            d: "M9 12h0",
            key: "t9r911"
        }
    ],
    [
        "path",
        {
            d: "M15 12h0",
            key: "1pk9dm"
        }
    ],
    [
        "path",
        {
            d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",
            key: "1u7htd"
        }
    ],
    [
        "path",
        {
            d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
            key: "5yv0yz"
        }
    ]
]);
var Baby$1 = Baby;
var Backpack = createReactComponent("Backpack", [
    [
        "path",
        {
            d: "M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",
            key: "tunmdx"
        }
    ],
    [
        "path",
        {
            d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",
            key: "donm21"
        }
    ],
    [
        "path",
        {
            d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",
            key: "xk3gvk"
        }
    ],
    [
        "path",
        {
            d: "M8 10h8",
            key: "c7uz4u"
        }
    ],
    [
        "path",
        {
            d: "M8 18h8",
            key: "1no2b1"
        }
    ]
]);
var Backpack$1 = Backpack;
var BaggageClaim = createReactComponent("BaggageClaim", [
    [
        "path",
        {
            d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",
            key: "4irg2o"
        }
    ],
    [
        "path",
        {
            d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",
            key: "14fcyx"
        }
    ],
    [
        "rect",
        {
            x: "8",
            y: "6",
            width: "13",
            height: "8",
            rx: "1",
            key: "1sfr2f"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "20",
            r: "2",
            key: "t9985n"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "20",
            r: "2",
            key: "e5v82j"
        }
    ]
]);
var BaggageClaim$1 = BaggageClaim;
var Banana = createReactComponent("Banana", [
    [
        "path",
        {
            d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",
            key: "1cscit"
        }
    ],
    [
        "path",
        {
            d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",
            key: "1y1nbv"
        }
    ]
]);
var Banana$1 = Banana;
var Banknote = createReactComponent("Banknote", [
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "20",
            height: "12",
            rx: "2",
            key: "1wpnh2"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }
    ],
    [
        "path",
        {
            d: "M6 12h.01M18 12h.01",
            key: "113zkx"
        }
    ]
]);
var Banknote$1 = Banknote;
var BarChart2 = createReactComponent("BarChart2", [
    [
        "line",
        {
            x1: "18",
            y1: "20",
            x2: "18",
            y2: "10",
            key: "1e8c49"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "20",
            x2: "12",
            y2: "4",
            key: "65j799"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "20",
            x2: "6",
            y2: "14",
            key: "4svqks"
        }
    ]
]);
var BarChart2$1 = BarChart2;
var BarChart3 = createReactComponent("BarChart3", [
    [
        "path",
        {
            d: "M3 3v18h18",
            key: "1s2lah"
        }
    ],
    [
        "path",
        {
            d: "M18 17V9",
            key: "2bz60n"
        }
    ],
    [
        "path",
        {
            d: "M13 17V5",
            key: "1frdt8"
        }
    ],
    [
        "path",
        {
            d: "M8 17v-3",
            key: "17ska0"
        }
    ]
]);
var BarChart3$1 = BarChart3;
var BarChart4 = createReactComponent("BarChart4", [
    [
        "path",
        {
            d: "M3 3v18h18",
            key: "1s2lah"
        }
    ],
    [
        "path",
        {
            d: "M13 17V9",
            key: "1fwyjl"
        }
    ],
    [
        "path",
        {
            d: "M18 17V5",
            key: "sfb6ij"
        }
    ],
    [
        "path",
        {
            d: "M8 17v-3",
            key: "17ska0"
        }
    ]
]);
var BarChart4$1 = BarChart4;
var BarChartHorizontal = createReactComponent("BarChartHorizontal", [
    [
        "path",
        {
            d: "M3 3v18h18",
            key: "1s2lah"
        }
    ],
    [
        "path",
        {
            d: "M7 16h8",
            key: "srdodz"
        }
    ],
    [
        "path",
        {
            d: "M7 11h12",
            key: "127s9w"
        }
    ],
    [
        "path",
        {
            d: "M7 6h3",
            key: "w9rmul"
        }
    ]
]);
var BarChartHorizontal$1 = BarChartHorizontal;
var BarChart = createReactComponent("BarChart", [
    [
        "line",
        {
            x1: "12",
            y1: "20",
            x2: "12",
            y2: "10",
            key: "1wi7jb"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "20",
            x2: "18",
            y2: "4",
            key: "1mwru6"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "20",
            x2: "6",
            y2: "16",
            key: "zj13da"
        }
    ]
]);
var BarChart$1 = BarChart;
var Baseline = createReactComponent("Baseline", [
    [
        "path",
        {
            d: "M4 20h16",
            key: "14thso"
        }
    ],
    [
        "path",
        {
            d: "m6 16 6-12 6 12",
            key: "1b4byz"
        }
    ],
    [
        "path",
        {
            d: "M8 12h8",
            key: "1wcyev"
        }
    ]
]);
var Baseline$1 = Baseline;
var Bath = createReactComponent("Bath", [
    [
        "path",
        {
            d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
            key: "1r8yf5"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "5",
            x2: "8",
            y2: "7",
            key: "d858pc"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ],
    [
        "line",
        {
            x1: "7",
            y1: "19",
            x2: "7",
            y2: "21",
            key: "cpl2n4"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "19",
            x2: "17",
            y2: "21",
            key: "ywtigw"
        }
    ]
]);
var Bath$1 = Bath;
var BatteryCharging = createReactComponent("BatteryCharging", [
    [
        "path",
        {
            d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",
            key: "1sdynx"
        }
    ],
    [
        "path",
        {
            d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",
            key: "1gkd3k"
        }
    ],
    [
        "path",
        {
            d: "m11 7-3 5h4l-3 5",
            key: "b4a64w"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13",
            key: "4dh1rd"
        }
    ]
]);
var BatteryCharging$1 = BatteryCharging;
var BatteryFull = createReactComponent("BatteryFull", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "16",
            height: "10",
            rx: "2",
            ry: "2",
            key: "5j9scf"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13",
            key: "4dh1rd"
        }
    ],
    [
        "line",
        {
            x1: "6",
            x2: "6",
            y1: "11",
            y2: "13",
            key: "1wd6dw"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "13",
            key: "haxvl5"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "13",
            key: "c6fn6x"
        }
    ]
]);
var BatteryFull$1 = BatteryFull;
var BatteryLow = createReactComponent("BatteryLow", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "16",
            height: "10",
            rx: "2",
            ry: "2",
            key: "5j9scf"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13",
            key: "4dh1rd"
        }
    ],
    [
        "line",
        {
            x1: "6",
            x2: "6",
            y1: "11",
            y2: "13",
            key: "1wd6dw"
        }
    ]
]);
var BatteryLow$1 = BatteryLow;
var BatteryMedium = createReactComponent("BatteryMedium", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "16",
            height: "10",
            rx: "2",
            ry: "2",
            key: "5j9scf"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13",
            key: "4dh1rd"
        }
    ],
    [
        "line",
        {
            x1: "6",
            x2: "6",
            y1: "11",
            y2: "13",
            key: "1wd6dw"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "13",
            key: "haxvl5"
        }
    ]
]);
var BatteryMedium$1 = BatteryMedium;
var Battery = createReactComponent("Battery", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "16",
            height: "10",
            rx: "2",
            ry: "2",
            key: "5j9scf"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13",
            key: "4dh1rd"
        }
    ]
]);
var Battery$1 = Battery;
var Beaker = createReactComponent("Beaker", [
    [
        "path",
        {
            d: "M4.5 3h15",
            key: "c7n0jr"
        }
    ],
    [
        "path",
        {
            d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",
            key: "m1uhx7"
        }
    ],
    [
        "path",
        {
            d: "M6 14h12",
            key: "4cwo0f"
        }
    ]
]);
var Beaker$1 = Beaker;
var BedDouble = createReactComponent("BedDouble", [
    [
        "path",
        {
            d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",
            key: "1k78r4"
        }
    ],
    [
        "path",
        {
            d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",
            key: "fb3tl2"
        }
    ],
    [
        "path",
        {
            d: "M12 4v6",
            key: "1dcgq2"
        }
    ],
    [
        "path",
        {
            d: "M2 18h20",
            key: "ajqnye"
        }
    ]
]);
var BedDouble$1 = BedDouble;
var BedSingle = createReactComponent("BedSingle", [
    [
        "path",
        {
            d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",
            key: "1wm6mi"
        }
    ],
    [
        "path",
        {
            d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",
            key: "4k93s5"
        }
    ],
    [
        "path",
        {
            d: "M3 18h18",
            key: "1h113x"
        }
    ]
]);
var BedSingle$1 = BedSingle;
var Bed = createReactComponent("Bed", [
    [
        "path",
        {
            d: "M2 4v16",
            key: "vw9hq8"
        }
    ],
    [
        "path",
        {
            d: "M2 8h18a2 2 0 0 1 2 2v10",
            key: "1dgv2r"
        }
    ],
    [
        "path",
        {
            d: "M2 17h20",
            key: "18nfp3"
        }
    ],
    [
        "path",
        {
            d: "M6 8v9",
            key: "1yriud"
        }
    ]
]);
var Bed$1 = Bed;
var Beer = createReactComponent("Beer", [
    [
        "path",
        {
            d: "M17 11h1a3 3 0 0 1 0 6h-1",
            key: "1yp76v"
        }
    ],
    [
        "path",
        {
            d: "M9 12v6",
            key: "1u1cab"
        }
    ],
    [
        "path",
        {
            d: "M13 12v6",
            key: "1sugkk"
        }
    ],
    [
        "path",
        {
            d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",
            key: "1510fo"
        }
    ],
    [
        "path",
        {
            d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",
            key: "19jb7n"
        }
    ]
]);
var Beer$1 = Beer;
var BellMinus = createReactComponent("BellMinus", [
    [
        "path",
        {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
            key: "6o5tke"
        }
    ],
    [
        "path",
        {
            d: "M21 5h-6",
            key: "14nobq"
        }
    ],
    [
        "path",
        {
            d: "M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916",
            key: "1wldvb"
        }
    ]
]);
var BellMinus$1 = BellMinus;
var BellOff = createReactComponent("BellOff", [
    [
        "path",
        {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
            key: "6o5tke"
        }
    ],
    [
        "path",
        {
            d: "M18.63 13A17.888 17.888 0 0 1 18 8",
            key: "d5seqe"
        }
    ],
    [
        "path",
        {
            d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14",
            key: "cae0gx"
        }
    ],
    [
        "path",
        {
            d: "M18 8a6 6 0 0 0-9.33-5",
            key: "4mngwl"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
]);
var BellOff$1 = BellOff;
var BellPlus = createReactComponent("BellPlus", [
    [
        "path",
        {
            d: "M18.387 12C19.198 15.799 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916",
            key: "1dhkt2"
        }
    ],
    [
        "path",
        {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
            key: "6o5tke"
        }
    ],
    [
        "path",
        {
            d: "M18 2v6",
            key: "163kbd"
        }
    ],
    [
        "path",
        {
            d: "M21 5h-6",
            key: "14nobq"
        }
    ]
]);
var BellPlus$1 = BellPlus;
var BellRing = createReactComponent("BellRing", [
    [
        "path",
        {
            d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
            key: "oql5b8"
        }
    ],
    [
        "path",
        {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
            key: "6o5tke"
        }
    ],
    [
        "path",
        {
            d: "M2 8c0-2.2.7-4.3 2-6",
            key: "1c7u9x"
        }
    ],
    [
        "path",
        {
            d: "M22 8a10 10 0 0 0-2-6",
            key: "1vnyda"
        }
    ]
]);
var BellRing$1 = BellRing;
var Bell = createReactComponent("Bell", [
    [
        "path",
        {
            d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
            key: "oql5b8"
        }
    ],
    [
        "path",
        {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
            key: "6o5tke"
        }
    ]
]);
var Bell$1 = Bell;
var Bike = createReactComponent("Bike", [
    [
        "circle",
        {
            cx: "5.5",
            cy: "17.5",
            r: "3.5",
            key: "1noe27"
        }
    ],
    [
        "circle",
        {
            cx: "18.5",
            cy: "17.5",
            r: "3.5",
            key: "15x4ox"
        }
    ],
    [
        "path",
        {
            d: "M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2",
            key: "1932na"
        }
    ]
]);
var Bike$1 = Bike;
var Binary = createReactComponent("Binary", [
    [
        "path",
        {
            d: "M6 20h4",
            key: "1i6q5t"
        }
    ],
    [
        "path",
        {
            d: "M14 10h4",
            key: "ru81e7"
        }
    ],
    [
        "path",
        {
            d: "M6 14h2v6",
            key: "16z9wg"
        }
    ],
    [
        "path",
        {
            d: "M14 4h2v6",
            key: "1idq9u"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "4",
            width: "4",
            height: "6",
            key: "btwfzx"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "14",
            width: "4",
            height: "6",
            key: "1cym0j"
        }
    ]
]);
var Binary$1 = Binary;
var Bitcoin = createReactComponent("Bitcoin", [
    [
        "path",
        {
            d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
            key: "yr8idg"
        }
    ]
]);
var Bitcoin$1 = Bitcoin;
var BluetoothConnected = createReactComponent("BluetoothConnected", [
    [
        "path",
        {
            d: "m7 7 10 10-5 5V2l5 5L7 17",
            key: "1q5490"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "12",
            y2: "12",
            x2: "21",
            key: "17rheb"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "12",
            y2: "12",
            x2: "6",
            key: "1l5nc6"
        }
    ]
]);
var BluetoothConnected$1 = BluetoothConnected;
var BluetoothOff = createReactComponent("BluetoothOff", [
    [
        "path",
        {
            d: "m17 17-5 5V12l-5 5",
            key: "v5aci6"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M14.5 9.5 17 7l-5-5v4.5",
            key: "1kddfz"
        }
    ]
]);
var BluetoothOff$1 = BluetoothOff;
var BluetoothSearching = createReactComponent("BluetoothSearching", [
    [
        "path",
        {
            d: "m7 7 10 10-5 5V2l5 5L7 17",
            key: "1q5490"
        }
    ],
    [
        "path",
        {
            d: "M20.83 14.83a4 4 0 0 0 0-5.66",
            key: "k8tn1j"
        }
    ],
    [
        "path",
        {
            d: "M18 12h.01",
            key: "yjnet6"
        }
    ]
]);
var BluetoothSearching$1 = BluetoothSearching;
var Bluetooth = createReactComponent("Bluetooth", [
    [
        "path",
        {
            d: "m7 7 10 10-5 5V2l5 5L7 17",
            key: "1q5490"
        }
    ]
]);
var Bluetooth$1 = Bluetooth;
var Bold = createReactComponent("Bold", [
    [
        "path",
        {
            d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
            key: "shhoi5"
        }
    ],
    [
        "path",
        {
            d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
            key: "jaah4r"
        }
    ]
]);
var Bold$1 = Bold;
var Bomb = createReactComponent("Bomb", [
    [
        "circle",
        {
            cx: "11",
            cy: "13",
            r: "9",
            key: "hd149"
        }
    ],
    [
        "path",
        {
            d: "m19.5 9.5 1.8-1.8a2.4 2.4 0 0 0 0-3.4l-1.6-1.6a2.41 2.41 0 0 0-3.4 0l-1.8 1.8",
            key: "9owvxi"
        }
    ],
    [
        "path",
        {
            d: "m22 2-1.5 1.5",
            key: "ay92ug"
        }
    ]
]);
var Bomb$1 = Bomb;
var Bone = createReactComponent("Bone", [
    [
        "path",
        {
            d: "M18.6 9.82c-.52-.21-1.15-.25-1.54.15l-7.07 7.06c-.39.39-.36 1.03-.15 1.54.12.3.16.6.16.93a2.5 2.5 0 0 1-5 0c0-.26-.24-.5-.5-.5a2.5 2.5 0 1 1 .96-4.82c.5.21 1.14.25 1.53-.15l7.07-7.06c.39-.39.36-1.03.15-1.54-.12-.3-.21-.6-.21-.93a2.5 2.5 0 0 1 5 0c.01.26.24.49.5.5a2.5 2.5 0 1 1-.9 4.82Z",
            key: "134x1i"
        }
    ]
]);
var Bone$1 = Bone;
var BookOpenCheck = createReactComponent("BookOpenCheck", [
    [
        "path",
        {
            d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",
            key: "1i8u0n"
        }
    ],
    [
        "path",
        {
            d: "m16 12 2 2 4-4",
            key: "mdajum"
        }
    ],
    [
        "path",
        {
            d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",
            key: "jb5l51"
        }
    ]
]);
var BookOpenCheck$1 = BookOpenCheck;
var BookOpen = createReactComponent("BookOpen", [
    [
        "path",
        {
            d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
            key: "vv98re"
        }
    ],
    [
        "path",
        {
            d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
            key: "1cyq3y"
        }
    ]
]);
var BookOpen$1 = BookOpen;
var Book = createReactComponent("Book", [
    [
        "path",
        {
            d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
            key: "126fyg"
        }
    ],
    [
        "path",
        {
            d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
            key: "1msh16"
        }
    ]
]);
var Book$1 = Book;
var BookmarkMinus = createReactComponent("BookmarkMinus", [
    [
        "path",
        {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
            key: "1fy3hk"
        }
    ],
    [
        "line",
        {
            x1: "15",
            x2: "9",
            y1: "10",
            y2: "10",
            key: "1gty7f"
        }
    ]
]);
var BookmarkMinus$1 = BookmarkMinus;
var BookmarkPlus = createReactComponent("BookmarkPlus", [
    [
        "path",
        {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
            key: "1fy3hk"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "7",
            y2: "13",
            key: "1cppfj"
        }
    ],
    [
        "line",
        {
            x1: "15",
            x2: "9",
            y1: "10",
            y2: "10",
            key: "1gty7f"
        }
    ]
]);
var BookmarkPlus$1 = BookmarkPlus;
var Bookmark = createReactComponent("Bookmark", [
    [
        "path",
        {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
            key: "1fy3hk"
        }
    ]
]);
var Bookmark$1 = Bookmark;
var Bot = createReactComponent("Bot", [
    [
        "rect",
        {
            x: "3",
            y: "11",
            width: "18",
            height: "10",
            rx: "2",
            key: "qbqwso"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "5",
            r: "2",
            key: "f1ur92"
        }
    ],
    [
        "path",
        {
            d: "M12 7v4",
            key: "xawao1"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "16",
            x2: "8",
            y2: "16",
            key: "717jkb"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "16",
            x2: "16",
            y2: "16",
            key: "19gr12"
        }
    ]
]);
var Bot$1 = Bot;
var BoxSelect = createReactComponent("BoxSelect", [
    [
        "path",
        {
            d: "M5 3a2 2 0 0 0-2 2",
            key: "y57alp"
        }
    ],
    [
        "path",
        {
            d: "M19 3a2 2 0 0 1 2 2",
            key: "18rm91"
        }
    ],
    [
        "path",
        {
            d: "M21 19a2 2 0 0 1-2 2",
            key: "1j7049"
        }
    ],
    [
        "path",
        {
            d: "M5 21a2 2 0 0 1-2-2",
            key: "sbafld"
        }
    ],
    [
        "path",
        {
            d: "M9 3h1",
            key: "1yesri"
        }
    ],
    [
        "path",
        {
            d: "M9 21h1",
            key: "15o7lz"
        }
    ],
    [
        "path",
        {
            d: "M14 3h1",
            key: "1ec4yj"
        }
    ],
    [
        "path",
        {
            d: "M14 21h1",
            key: "v9vybs"
        }
    ],
    [
        "path",
        {
            d: "M3 9v1",
            key: "1r0deq"
        }
    ],
    [
        "path",
        {
            d: "M21 9v1",
            key: "mxsmne"
        }
    ],
    [
        "path",
        {
            d: "M3 14v1",
            key: "vnatye"
        }
    ],
    [
        "path",
        {
            d: "M21 14v1",
            key: "169vum"
        }
    ]
]);
var BoxSelect$1 = BoxSelect;
var Box = createReactComponent("Box", [
    [
        "path",
        {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
            key: "yt0hxn"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ]
]);
var Box$1 = Box;
var Boxes = createReactComponent("Boxes", [
    [
        "path",
        {
            d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
            key: "lc1i9w"
        }
    ],
    [
        "path",
        {
            d: "m7 16.5-4.74-2.85",
            key: "1o9zyk"
        }
    ],
    [
        "path",
        {
            d: "m7 16.5 5-3",
            key: "va8pkn"
        }
    ],
    [
        "path",
        {
            d: "M7 16.5v5.17",
            key: "jnp8gn"
        }
    ],
    [
        "path",
        {
            d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
            key: "8zsnat"
        }
    ],
    [
        "path",
        {
            d: "m17 16.5-5-3",
            key: "8arw3v"
        }
    ],
    [
        "path",
        {
            d: "m17 16.5 4.74-2.85",
            key: "8rfmw"
        }
    ],
    [
        "path",
        {
            d: "M17 16.5v5.17",
            key: "k6z78m"
        }
    ],
    [
        "path",
        {
            d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
            key: "1xygjf"
        }
    ],
    [
        "path",
        {
            d: "M12 8 7.26 5.15",
            key: "1vbdud"
        }
    ],
    [
        "path",
        {
            d: "m12 8 4.74-2.85",
            key: "3rx089"
        }
    ],
    [
        "path",
        {
            d: "M12 13.5V8",
            key: "1io7kd"
        }
    ]
]);
var Boxes$1 = Boxes;
var Briefcase = createReactComponent("Briefcase", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "20",
            height: "14",
            rx: "2",
            ry: "2",
            key: "1fj28a"
        }
    ],
    [
        "path",
        {
            d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
            key: "zwj3tp"
        }
    ]
]);
var Briefcase$1 = Briefcase;
var Brush = createReactComponent("Brush", [
    [
        "path",
        {
            d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",
            key: "1styjt"
        }
    ],
    [
        "path",
        {
            d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
            key: "z0l1mu"
        }
    ]
]);
var Brush$1 = Brush;
var Bug = createReactComponent("Bug", [
    [
        "rect",
        {
            width: "8",
            height: "14",
            x: "8",
            y: "6",
            rx: "4",
            key: "hq8nra"
        }
    ],
    [
        "path",
        {
            d: "m19 7-3 2",
            key: "fmg8ec"
        }
    ],
    [
        "path",
        {
            d: "m5 7 3 2",
            key: "dkxqes"
        }
    ],
    [
        "path",
        {
            d: "m19 19-3-2",
            key: "1hbhi4"
        }
    ],
    [
        "path",
        {
            d: "m5 19 3-2",
            key: "dvt2ee"
        }
    ],
    [
        "path",
        {
            d: "M20 13h-4",
            key: "1agfp2"
        }
    ],
    [
        "path",
        {
            d: "M4 13h4",
            key: "1bwh8b"
        }
    ],
    [
        "path",
        {
            d: "m10 4 1 2",
            key: "1pot59"
        }
    ],
    [
        "path",
        {
            d: "m14 4-1 2",
            key: "m8sn0o"
        }
    ]
]);
var Bug$1 = Bug;
var Building2 = createReactComponent("Building2", [
    [
        "path",
        {
            d: "M6 22V4c0-.27 0-.55.07-.82a1.477 1.477 0 0 1 1.1-1.11C7.46 2 8.73 2 9 2h7c.27 0 .55 0 .82.07a1.477 1.477 0 0 1 1.11 1.1c.07.28.07.56.07.83v18H6Z",
            key: "1b1x9d"
        }
    ],
    [
        "path",
        {
            d: "M2 14v6c0 1.1.9 2 2 2h2V12H4c-.27 0-.55 0-.82.07-.27.07-.52.2-.72.4-.19.19-.32.44-.39.71A3.4 3.4 0 0 0 2 14Z",
            key: "12g3jd"
        }
    ],
    [
        "path",
        {
            d: "M20.82 9.07A3.4 3.4 0 0 0 20 9h-2v13h2a2 2 0 0 0 2-2v-9c0-.28 0-.55-.07-.82-.07-.27-.2-.52-.4-.72-.19-.19-.44-.32-.71-.39Z",
            key: "o1w3ll"
        }
    ],
    [
        "path",
        {
            d: "M10 6h4",
            key: "1itunk"
        }
    ],
    [
        "path",
        {
            d: "M10 10h4",
            key: "tcdvrf"
        }
    ],
    [
        "path",
        {
            d: "M10 14h4",
            key: "kelpxr"
        }
    ],
    [
        "path",
        {
            d: "M10 18h4",
            key: "1ulq68"
        }
    ]
]);
var Building2$1 = Building2;
var Building = createReactComponent("Building", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "16",
            height: "20",
            rx: "2",
            ry: "2",
            key: "152kg8"
        }
    ],
    [
        "path",
        {
            d: "M9 22v-4h6v4",
            key: "r93iot"
        }
    ],
    [
        "path",
        {
            d: "M8 6h.01",
            key: "1dz90k"
        }
    ],
    [
        "path",
        {
            d: "M16 6h.01",
            key: "1x0f13"
        }
    ],
    [
        "path",
        {
            d: "M12 6h.01",
            key: "1vi96p"
        }
    ],
    [
        "path",
        {
            d: "M12 10h.01",
            key: "1nrarc"
        }
    ],
    [
        "path",
        {
            d: "M12 14h.01",
            key: "1etili"
        }
    ],
    [
        "path",
        {
            d: "M16 10h.01",
            key: "1m94wz"
        }
    ],
    [
        "path",
        {
            d: "M16 14h.01",
            key: "1gbofw"
        }
    ],
    [
        "path",
        {
            d: "M8 10h.01",
            key: "19clt8"
        }
    ],
    [
        "path",
        {
            d: "M8 14h.01",
            key: "6423bh"
        }
    ]
]);
var Building$1 = Building;
var Bus = createReactComponent("Bus", [
    [
        "path",
        {
            d: "M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2",
            key: "wfsdqh"
        }
    ],
    [
        "path",
        {
            d: "M14 17H9",
            key: "o2noo5"
        }
    ],
    [
        "circle",
        {
            cx: "6.5",
            cy: "17.5",
            r: "2.5",
            key: "gc8oob"
        }
    ],
    [
        "circle",
        {
            cx: "16.5",
            cy: "17.5",
            r: "2.5",
            key: "4btu0q"
        }
    ]
]);
var Bus$1 = Bus;
var Cake = createReactComponent("Cake", [
    [
        "path",
        {
            d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",
            key: "1w3rig"
        }
    ],
    [
        "path",
        {
            d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",
            key: "n2jgmb"
        }
    ],
    [
        "path",
        {
            d: "M2 21h20",
            key: "1nyx9w"
        }
    ],
    [
        "path",
        {
            d: "M7 8v2",
            key: "kqglng"
        }
    ],
    [
        "path",
        {
            d: "M12 8v2",
            key: "1woqiv"
        }
    ],
    [
        "path",
        {
            d: "M17 8v2",
            key: "teptal"
        }
    ],
    [
        "path",
        {
            d: "M7 4h.01",
            key: "1bh4kh"
        }
    ],
    [
        "path",
        {
            d: "M12 4h.01",
            key: "1ujb9j"
        }
    ],
    [
        "path",
        {
            d: "M17 4h.01",
            key: "1upcoc"
        }
    ]
]);
var Cake$1 = Cake;
var Calculator = createReactComponent("Calculator", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "16",
            height: "20",
            rx: "2",
            key: "1uxh74"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "16",
            y1: "6",
            y2: "6",
            key: "x4nwl0"
        }
    ],
    [
        "line",
        {
            x1: "16",
            x2: "16",
            y1: "14",
            y2: "18",
            key: "wjye3r"
        }
    ],
    [
        "path",
        {
            d: "M16 10h.01",
            key: "1m94wz"
        }
    ],
    [
        "path",
        {
            d: "M12 10h.01",
            key: "1nrarc"
        }
    ],
    [
        "path",
        {
            d: "M8 10h.01",
            key: "19clt8"
        }
    ],
    [
        "path",
        {
            d: "M12 14h.01",
            key: "1etili"
        }
    ],
    [
        "path",
        {
            d: "M8 14h.01",
            key: "6423bh"
        }
    ],
    [
        "path",
        {
            d: "M12 18h.01",
            key: "mhygvu"
        }
    ],
    [
        "path",
        {
            d: "M8 18h.01",
            key: "lrp35t"
        }
    ]
]);
var Calculator$1 = Calculator;
var CalendarCheck2 = createReactComponent("CalendarCheck2", [
    [
        "path",
        {
            d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
            key: "bce9hv"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "path",
        {
            d: "m16 20 2 2 4-4",
            key: "13tcca"
        }
    ]
]);
var CalendarCheck2$1 = CalendarCheck2;
var CalendarCheck = createReactComponent("CalendarCheck", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "1dtxiw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "path",
        {
            d: "m9 16 2 2 4-4",
            key: "19s6y9"
        }
    ]
]);
var CalendarCheck$1 = CalendarCheck;
var CalendarClock = createReactComponent("CalendarClock", [
    [
        "path",
        {
            d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
            key: "1osxxc"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M3 10h5",
            key: "r794hk"
        }
    ],
    [
        "path",
        {
            d: "M17.5 17.5 16 16.25V14",
            key: "re2vv1"
        }
    ],
    [
        "path",
        {
            d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z",
            key: "ame013"
        }
    ]
]);
var CalendarClock$1 = CalendarClock;
var CalendarDays = createReactComponent("CalendarDays", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "1dtxiw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "path",
        {
            d: "M8 14h.01",
            key: "6423bh"
        }
    ],
    [
        "path",
        {
            d: "M12 14h.01",
            key: "1etili"
        }
    ],
    [
        "path",
        {
            d: "M16 14h.01",
            key: "1gbofw"
        }
    ],
    [
        "path",
        {
            d: "M8 18h.01",
            key: "lrp35t"
        }
    ],
    [
        "path",
        {
            d: "M12 18h.01",
            key: "mhygvu"
        }
    ],
    [
        "path",
        {
            d: "M16 18h.01",
            key: "kzsmim"
        }
    ]
]);
var CalendarDays$1 = CalendarDays;
var CalendarHeart = createReactComponent("CalendarHeart", [
    [
        "path",
        {
            d: "M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7",
            key: "1sfrvf"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ],
    [
        "path",
        {
            d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
            key: "1t7hil"
        }
    ]
]);
var CalendarHeart$1 = CalendarHeart;
var CalendarMinus = createReactComponent("CalendarMinus", [
    [
        "path",
        {
            d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
            key: "3spt84"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "19",
            x2: "22",
            y2: "19",
            key: "qkgpxo"
        }
    ]
]);
var CalendarMinus$1 = CalendarMinus;
var CalendarOff = createReactComponent("CalendarOff", [
    [
        "path",
        {
            d: "M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",
            key: "1feomx"
        }
    ],
    [
        "path",
        {
            d: "M21 15.5V6a2 2 0 0 0-2-2H9.5",
            key: "yhw86o"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "path",
        {
            d: "M3 10h7",
            key: "1wap6i"
        }
    ],
    [
        "path",
        {
            d: "M21 10h-5.5",
            key: "quycpq"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var CalendarOff$1 = CalendarOff;
var CalendarPlus = createReactComponent("CalendarPlus", [
    [
        "path",
        {
            d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
            key: "3spt84"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "16",
            x2: "19",
            y2: "22",
            key: "537lsc"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "19",
            x2: "22",
            y2: "19",
            key: "qkgpxo"
        }
    ]
]);
var CalendarPlus$1 = CalendarPlus;
var CalendarRange = createReactComponent("CalendarRange", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "1dtxiw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "path",
        {
            d: "M17 14h-6",
            key: "bkmgh3"
        }
    ],
    [
        "path",
        {
            d: "M13 18H7",
            key: "bb0bb7"
        }
    ],
    [
        "path",
        {
            d: "M7 14h.01",
            key: "1qa3f1"
        }
    ],
    [
        "path",
        {
            d: "M17 18h.01",
            key: "1bdyru"
        }
    ]
]);
var CalendarRange$1 = CalendarRange;
var CalendarSearch = createReactComponent("CalendarSearch", [
    [
        "path",
        {
            d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5",
            key: "18ncp8"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ],
    [
        "path",
        {
            d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",
            key: "mgbru4"
        }
    ],
    [
        "path",
        {
            d: "m22 22-1.5-1.5",
            key: "1x83k4"
        }
    ]
]);
var CalendarSearch$1 = CalendarSearch;
var CalendarX2 = createReactComponent("CalendarX2", [
    [
        "path",
        {
            d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
            key: "3spt84"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "17",
            x2: "22",
            y2: "22",
            key: "tvgkbv"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "22",
            x2: "22",
            y2: "17",
            key: "1l23f3"
        }
    ]
]);
var CalendarX2$1 = CalendarX2;
var CalendarX = createReactComponent("CalendarX", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "1dtxiw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "14",
            x2: "14",
            y2: "18",
            key: "fs6roj"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "14",
            x2: "10",
            y2: "18",
            key: "1kdrv6"
        }
    ]
]);
var CalendarX$1 = CalendarX;
var Calendar = createReactComponent("Calendar", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "1dtxiw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ]
]);
var Calendar$1 = Calendar;
var CameraOff = createReactComponent("CameraOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "path",
        {
            d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",
            key: "qmtpty"
        }
    ],
    [
        "path",
        {
            d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",
            key: "1ufyfc"
        }
    ],
    [
        "path",
        {
            d: "M14.121 15.121A3 3 0 1 1 9.88 10.88",
            key: "11zox6"
        }
    ]
]);
var CameraOff$1 = CameraOff;
var Camera = createReactComponent("Camera", [
    [
        "path",
        {
            d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
            key: "1tc9qg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "3",
            key: "1vg3eu"
        }
    ]
]);
var Camera$1 = Camera;
var Car = createReactComponent("Car", [
    [
        "path",
        {
            d: "M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2",
            key: "l5np60"
        }
    ],
    [
        "circle",
        {
            cx: "6.5",
            cy: "16.5",
            r: "2.5",
            key: "ae40ju"
        }
    ],
    [
        "circle",
        {
            cx: "16.5",
            cy: "16.5",
            r: "2.5",
            key: "1smtlt"
        }
    ]
]);
var Car$1 = Car;
var Carrot = createReactComponent("Carrot", [
    [
        "path",
        {
            d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",
            key: "rfqxbe"
        }
    ],
    [
        "path",
        {
            d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",
            key: "6b25w4"
        }
    ],
    [
        "path",
        {
            d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",
            key: "fn65lo"
        }
    ]
]);
var Carrot$1 = Carrot;
var Cast = createReactComponent("Cast", [
    [
        "path",
        {
            d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",
            key: "3zrzxg"
        }
    ],
    [
        "path",
        {
            d: "M2 12a9 9 0 0 1 8 8",
            key: "g6cvee"
        }
    ],
    [
        "path",
        {
            d: "M2 16a5 5 0 0 1 4 4",
            key: "1y1dii"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "20",
            x2: "2.01",
            y2: "20",
            key: "1cypae"
        }
    ]
]);
var Cast$1 = Cast;
var CheckCircle2 = createReactComponent("CheckCircle2", [
    [
        "path",
        {
            d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
            key: "14v8dr"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
var CheckCircle2$1 = CheckCircle2;
var CheckCircle = createReactComponent("CheckCircle", [
    [
        "path",
        {
            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
            key: "g774vq"
        }
    ],
    [
        "polyline",
        {
            points: "22 4 12 14.01 9 11.01",
            key: "6xbx8j"
        }
    ]
]);
var CheckCircle$1 = CheckCircle;
var CheckSquare = createReactComponent("CheckSquare", [
    [
        "polyline",
        {
            points: "9 11 12 14 22 4",
            key: "19ybtz"
        }
    ],
    [
        "path",
        {
            d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
            key: "1jnkn4"
        }
    ]
]);
var CheckSquare$1 = CheckSquare;
var Check = createReactComponent("Check", [
    [
        "polyline",
        {
            points: "20 6 9 17 4 12",
            key: "10jjfj"
        }
    ]
]);
var Check$1 = Check;
var ChefHat = createReactComponent("ChefHat", [
    [
        "path",
        {
            d: "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",
            key: "z3ra2g"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "17",
            x2: "18",
            y2: "17",
            key: "130uxj"
        }
    ]
]);
var ChefHat$1 = ChefHat;
var Cherry = createReactComponent("Cherry", [
    [
        "path",
        {
            d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
            key: "cvxqlc"
        }
    ],
    [
        "path",
        {
            d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
            key: "1ostrc"
        }
    ],
    [
        "path",
        {
            d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",
            key: "hqx58h"
        }
    ],
    [
        "path",
        {
            d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",
            key: "eykp1o"
        }
    ]
]);
var Cherry$1 = Cherry;
var ChevronDown = createReactComponent("ChevronDown", [
    [
        "polyline",
        {
            points: "6 9 12 15 18 9",
            key: "1do0m2"
        }
    ]
]);
var ChevronDown$1 = ChevronDown;
var ChevronFirst = createReactComponent("ChevronFirst", [
    [
        "polyline",
        {
            points: "17 18 11 12 17 6",
            key: "11nco2"
        }
    ],
    [
        "path",
        {
            d: "M7 6v12",
            key: "1p53r6"
        }
    ]
]);
var ChevronFirst$1 = ChevronFirst;
var ChevronLast = createReactComponent("ChevronLast", [
    [
        "polyline",
        {
            points: "7 18 13 12 7 6",
            key: "1minw5"
        }
    ],
    [
        "path",
        {
            d: "M17 6v12",
            key: "1o0aio"
        }
    ]
]);
var ChevronLast$1 = ChevronLast;
var ChevronLeft = createReactComponent("ChevronLeft", [
    [
        "polyline",
        {
            points: "15 18 9 12 15 6",
            key: "kvxz59"
        }
    ]
]);
var ChevronLeft$1 = ChevronLeft;
var ChevronRight = createReactComponent("ChevronRight", [
    [
        "polyline",
        {
            points: "9 18 15 12 9 6",
            key: "1rtp27"
        }
    ]
]);
var ChevronRight$1 = ChevronRight;
var ChevronUp = createReactComponent("ChevronUp", [
    [
        "polyline",
        {
            points: "18 15 12 9 6 15",
            key: "1uugdp"
        }
    ]
]);
var ChevronUp$1 = ChevronUp;
var ChevronsDownUp = createReactComponent("ChevronsDownUp", [
    [
        "path",
        {
            d: "m7 20 5-5 5 5",
            key: "13a0gw"
        }
    ],
    [
        "path",
        {
            d: "m7 4 5 5 5-5",
            key: "1kwcof"
        }
    ]
]);
var ChevronsDownUp$1 = ChevronsDownUp;
var ChevronsDown = createReactComponent("ChevronsDown", [
    [
        "polyline",
        {
            points: "7 13 12 18 17 13",
            key: "am1j83"
        }
    ],
    [
        "polyline",
        {
            points: "7 6 12 11 17 6",
            key: "pjsmwq"
        }
    ]
]);
var ChevronsDown$1 = ChevronsDown;
var ChevronsLeftRight = createReactComponent("ChevronsLeftRight", [
    [
        "path",
        {
            d: "m9 7-5 5 5 5",
            key: "j5w590"
        }
    ],
    [
        "path",
        {
            d: "m15 7 5 5-5 5",
            key: "1bl6da"
        }
    ]
]);
var ChevronsLeftRight$1 = ChevronsLeftRight;
var ChevronsLeft = createReactComponent("ChevronsLeft", [
    [
        "polyline",
        {
            points: "11 17 6 12 11 7",
            key: "1ueymj"
        }
    ],
    [
        "polyline",
        {
            points: "18 17 13 12 18 7",
            key: "18fy0m"
        }
    ]
]);
var ChevronsLeft$1 = ChevronsLeft;
var ChevronsRightLeft = createReactComponent("ChevronsRightLeft", [
    [
        "path",
        {
            d: "m20 17-5-5 5-5",
            key: "30x0n2"
        }
    ],
    [
        "path",
        {
            d: "m4 17 5-5-5-5",
            key: "16spf4"
        }
    ]
]);
var ChevronsRightLeft$1 = ChevronsRightLeft;
var ChevronsRight = createReactComponent("ChevronsRight", [
    [
        "polyline",
        {
            points: "13 17 18 12 13 7",
            key: "oq0h83"
        }
    ],
    [
        "polyline",
        {
            points: "6 17 11 12 6 7",
            key: "3k300q"
        }
    ]
]);
var ChevronsRight$1 = ChevronsRight;
var ChevronsUpDown = createReactComponent("ChevronsUpDown", [
    [
        "path",
        {
            d: "m7 15 5 5 5-5",
            key: "1hf1tw"
        }
    ],
    [
        "path",
        {
            d: "m7 9 5-5 5 5",
            key: "sgt6xg"
        }
    ]
]);
var ChevronsUpDown$1 = ChevronsUpDown;
var ChevronsUp = createReactComponent("ChevronsUp", [
    [
        "polyline",
        {
            points: "17 11 12 6 7 11",
            key: "1u9xa9"
        }
    ],
    [
        "polyline",
        {
            points: "17 18 12 13 7 18",
            key: "1fl4au"
        }
    ]
]);
var ChevronsUp$1 = ChevronsUp;
var Chrome = createReactComponent("Chrome", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "line",
        {
            x1: "21.17",
            y1: "8",
            x2: "12",
            y2: "8",
            key: "1a1nqa"
        }
    ],
    [
        "line",
        {
            x1: "3.95",
            y1: "6.06",
            x2: "8.54",
            y2: "14",
            key: "irv2k6"
        }
    ],
    [
        "line",
        {
            x1: "10.88",
            y1: "21.94",
            x2: "15.46",
            y2: "14",
            key: "fokf7t"
        }
    ]
]);
var Chrome$1 = Chrome;
var CigaretteOff = createReactComponent("CigaretteOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "path",
        {
            d: "M12 12H2v4h14",
            key: "91gsaq"
        }
    ],
    [
        "path",
        {
            d: "M22 12v4",
            key: "142cbu"
        }
    ],
    [
        "path",
        {
            d: "M18 12h-.5",
            key: "12ymji"
        }
    ],
    [
        "path",
        {
            d: "M7 12v4",
            key: "jqww69"
        }
    ],
    [
        "path",
        {
            d: "M18 8c0-2.5-2-2.5-2-5",
            key: "1il607"
        }
    ],
    [
        "path",
        {
            d: "M22 8c0-2.5-2-2.5-2-5",
            key: "1gah44"
        }
    ]
]);
var CigaretteOff$1 = CigaretteOff;
var Cigarette = createReactComponent("Cigarette", [
    [
        "path",
        {
            d: "M18 12H2v4h16",
            key: "2rt1hm"
        }
    ],
    [
        "path",
        {
            d: "M22 12v4",
            key: "142cbu"
        }
    ],
    [
        "path",
        {
            d: "M7 12v4",
            key: "jqww69"
        }
    ],
    [
        "path",
        {
            d: "M18 8c0-2.5-2-2.5-2-5",
            key: "1il607"
        }
    ],
    [
        "path",
        {
            d: "M22 8c0-2.5-2-2.5-2-5",
            key: "1gah44"
        }
    ]
]);
var Cigarette$1 = Cigarette;
var CircleDot = createReactComponent("CircleDot", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ]
]);
var CircleDot$1 = CircleDot;
var CircleEllipsis = createReactComponent("CircleEllipsis", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M17 12h.01",
            key: "1m0b6t"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.01",
            key: "1mp3jc"
        }
    ],
    [
        "path",
        {
            d: "M7 12h.01",
            key: "eqddd0"
        }
    ]
]);
var CircleEllipsis$1 = CircleEllipsis;
var CircleSlashed = createReactComponent("CircleSlashed", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M22 2 2 22",
            key: "y4kqgn"
        }
    ]
]);
var CircleSlashed$1 = CircleSlashed;
var Circle = createReactComponent("Circle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
]);
var Circle$1 = Circle;
var Citrus = createReactComponent("Citrus", [
    [
        "path",
        {
            d: "M5.51 18.49a12 12 0 0 0 16.12.78c.49-.41.49-1.15.03-1.6L6.34 2.33a1.08 1.08 0 0 0-1.6.03A12 12 0 0 0 5.5 18.5Z",
            key: "cpj97m"
        }
    ],
    [
        "path",
        {
            d: "M8.34 15.66a8 8 0 0 0 10.4.78c.54-.4.54-1.16.06-1.64L9.2 5.2c-.48-.48-1.25-.48-1.64.06a8 8 0 0 0 .78 10.4Z",
            key: "vhgi9a"
        }
    ],
    [
        "path",
        {
            d: "m14 10-5.5 5.5",
            key: "92pfem"
        }
    ],
    [
        "path",
        {
            d: "M14 10v8",
            key: "3sxk0t"
        }
    ],
    [
        "path",
        {
            d: "M14 10H6",
            key: "1aai03"
        }
    ]
]);
var Citrus$1 = Citrus;
var Clapperboard = createReactComponent("Clapperboard", [
    [
        "path",
        {
            d: "M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z",
            key: "1hxvyx"
        }
    ],
    [
        "path",
        {
            d: "m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z",
            key: "1vz1k2"
        }
    ],
    [
        "path",
        {
            d: "m6.6 4.99 3.38 4.2",
            key: "192ida"
        }
    ],
    [
        "path",
        {
            d: "m11.86 3.38 3.38 4.2",
            key: "hhucvz"
        }
    ]
]);
var Clapperboard$1 = Clapperboard;
var ClipboardCheck = createReactComponent("ClipboardCheck", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ],
    [
        "path",
        {
            d: "m9 14 2 2 4-4",
            key: "df797q"
        }
    ]
]);
var ClipboardCheck$1 = ClipboardCheck;
var ClipboardCopy = createReactComponent("ClipboardCopy", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",
            key: "4jdomd"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v4",
            key: "3hqy98"
        }
    ],
    [
        "path",
        {
            d: "M21 14H11",
            key: "1bme5i"
        }
    ],
    [
        "path",
        {
            d: "m15 10-4 4 4 4",
            key: "5dvupr"
        }
    ]
]);
var ClipboardCopy$1 = ClipboardCopy;
var ClipboardEdit = createReactComponent("ClipboardEdit", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z",
            key: "1rgxu8"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",
            key: "cereej"
        }
    ],
    [
        "path",
        {
            d: "M4 13.5V6a2 2 0 0 1 2-2h2",
            key: "5ua5vh"
        }
    ]
]);
var ClipboardEdit$1 = ClipboardEdit;
var ClipboardList = createReactComponent("ClipboardList", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ],
    [
        "path",
        {
            d: "M12 11h4",
            key: "1jrz19"
        }
    ],
    [
        "path",
        {
            d: "M12 16h4",
            key: "n85exb"
        }
    ],
    [
        "path",
        {
            d: "M8 11h.01",
            key: "1dfujw"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ]
]);
var ClipboardList$1 = ClipboardList;
var ClipboardSignature = createReactComponent("ClipboardSignature", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",
            key: "1but9f"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 1.73 1",
            key: "1p8n7l"
        }
    ],
    [
        "path",
        {
            d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z",
            key: "johvi5"
        }
    ],
    [
        "path",
        {
            d: "M8 18h1",
            key: "13wk12"
        }
    ]
]);
var ClipboardSignature$1 = ClipboardSignature;
var ClipboardType = createReactComponent("ClipboardType", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ],
    [
        "path",
        {
            d: "M9 12v-1h6v1",
            key: "iehl6m"
        }
    ],
    [
        "path",
        {
            d: "M11 17h2",
            key: "12w5me"
        }
    ],
    [
        "path",
        {
            d: "M12 11v6",
            key: "1bwqyc"
        }
    ]
]);
var ClipboardType$1 = ClipboardType;
var ClipboardX = createReactComponent("ClipboardX", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ],
    [
        "path",
        {
            d: "m15 11-6 6",
            key: "1toa9n"
        }
    ],
    [
        "path",
        {
            d: "m9 11 6 6",
            key: "wlibny"
        }
    ]
]);
var ClipboardX$1 = ClipboardX;
var Clipboard = createReactComponent("Clipboard", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ]
]);
var Clipboard$1 = Clipboard;
var Clock1 = createReactComponent("Clock1", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 14.5 8",
            key: "12zbmj"
        }
    ]
]);
var Clock1$1 = Clock1;
var Clock10 = createReactComponent("Clock10", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 8 10",
            key: "atfzqc"
        }
    ]
]);
var Clock10$1 = Clock10;
var Clock11 = createReactComponent("Clock11", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 9.5 8",
            key: "l5bg6f"
        }
    ]
]);
var Clock11$1 = Clock11;
var Clock12 = createReactComponent("Clock12", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12",
            key: "1fub01"
        }
    ]
]);
var Clock12$1 = Clock12;
var Clock2 = createReactComponent("Clock2", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 10",
            key: "1g230d"
        }
    ]
]);
var Clock2$1 = Clock2;
var Clock3 = createReactComponent("Clock3", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16.5 12",
            key: "1aq6pp"
        }
    ]
]);
var Clock3$1 = Clock3;
var Clock4 = createReactComponent("Clock4", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
var Clock4$1 = Clock4;
var Clock5 = createReactComponent("Clock5", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 14.5 16",
            key: "1pcbox"
        }
    ]
]);
var Clock5$1 = Clock5;
var Clock6 = createReactComponent("Clock6", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 12 16.5",
            key: "hb2qv6"
        }
    ]
]);
var Clock6$1 = Clock6;
var Clock7 = createReactComponent("Clock7", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 9.5 16",
            key: "ka3394"
        }
    ]
]);
var Clock7$1 = Clock7;
var Clock8 = createReactComponent("Clock8", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 8 14",
            key: "tmc9b4"
        }
    ]
]);
var Clock8$1 = Clock8;
var Clock9 = createReactComponent("Clock9", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 7.5 12",
            key: "1k60p0"
        }
    ]
]);
var Clock9$1 = Clock9;
var Clock = createReactComponent("Clock", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
var Clock$1 = Clock;
var CloudCog = createReactComponent("CloudCog", [
    [
        "path",
        {
            d: "M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9",
            key: "19hoja"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "17",
            r: "3",
            key: "1spfwm"
        }
    ],
    [
        "path",
        {
            d: "M12 13v1",
            key: "176q98"
        }
    ],
    [
        "path",
        {
            d: "M12 20v1",
            key: "1wcdkc"
        }
    ],
    [
        "path",
        {
            d: "M16 17h-1",
            key: "y560le"
        }
    ],
    [
        "path",
        {
            d: "M9 17H8",
            key: "1lfe9z"
        }
    ],
    [
        "path",
        {
            d: "m15 14-.88.88",
            key: "12ytk1"
        }
    ],
    [
        "path",
        {
            d: "M9.88 19.12 9 20",
            key: "1kmb4r"
        }
    ],
    [
        "path",
        {
            d: "m15 20-.88-.88",
            key: "1ipjcf"
        }
    ],
    [
        "path",
        {
            d: "M9.88 14.88 9 14",
            key: "c4uok7"
        }
    ]
]);
var CloudCog$1 = CloudCog;
var CloudDrizzle = createReactComponent("CloudDrizzle", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M8 19v1",
            key: "1dk2by"
        }
    ],
    [
        "path",
        {
            d: "M8 14v1",
            key: "84yxot"
        }
    ],
    [
        "path",
        {
            d: "M16 19v1",
            key: "v220m7"
        }
    ],
    [
        "path",
        {
            d: "M16 14v1",
            key: "g12gj6"
        }
    ],
    [
        "path",
        {
            d: "M12 21v1",
            key: "q8vafk"
        }
    ],
    [
        "path",
        {
            d: "M12 16v1",
            key: "1mx6rx"
        }
    ]
]);
var CloudDrizzle$1 = CloudDrizzle;
var CloudFog = createReactComponent("CloudFog", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M16 17H7",
            key: "pygtm1"
        }
    ],
    [
        "path",
        {
            d: "M17 21H9",
            key: "1u2q02"
        }
    ]
]);
var CloudFog$1 = CloudFog;
var CloudHail = createReactComponent("CloudHail", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M16 14v2",
            key: "a1is7l"
        }
    ],
    [
        "path",
        {
            d: "M8 14v2",
            key: "1e9m6t"
        }
    ],
    [
        "path",
        {
            d: "M16 20h.01",
            key: "xwek51"
        }
    ],
    [
        "path",
        {
            d: "M8 20h.01",
            key: "1vjney"
        }
    ],
    [
        "path",
        {
            d: "M12 16v2",
            key: "z66u1j"
        }
    ],
    [
        "path",
        {
            d: "M12 22h.01",
            key: "1urd7a"
        }
    ]
]);
var CloudHail$1 = CloudHail;
var CloudLightning = createReactComponent("CloudLightning", [
    [
        "path",
        {
            d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",
            key: "1cez44"
        }
    ],
    [
        "path",
        {
            d: "m13 12-3 5h4l-3 5",
            key: "1t22er"
        }
    ]
]);
var CloudLightning$1 = CloudLightning;
var CloudMoonRain = createReactComponent("CloudMoonRain", [
    [
        "path",
        {
            d: "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",
            key: "u82z8m"
        }
    ],
    [
        "path",
        {
            d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",
            key: "1qmrp3"
        }
    ],
    [
        "path",
        {
            d: "M11 20v2",
            key: "174qtz"
        }
    ],
    [
        "path",
        {
            d: "M7 19v2",
            key: "12npes"
        }
    ]
]);
var CloudMoonRain$1 = CloudMoonRain;
var CloudMoon = createReactComponent("CloudMoon", [
    [
        "path",
        {
            d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",
            key: "s09mg5"
        }
    ],
    [
        "path",
        {
            d: "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",
            key: "u82z8m"
        }
    ]
]);
var CloudMoon$1 = CloudMoon;
var CloudOff = createReactComponent("CloudOff", [
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",
            key: "yfwify"
        }
    ],
    [
        "path",
        {
            d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",
            key: "jlfiyv"
        }
    ]
]);
var CloudOff$1 = CloudOff;
var CloudRainWind = createReactComponent("CloudRainWind", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "m9.2 22 3-7",
            key: "sb5f6j"
        }
    ],
    [
        "path",
        {
            d: "m9 13-3 7",
            key: "500co5"
        }
    ],
    [
        "path",
        {
            d: "m17 13-3 7",
            key: "8t2fiy"
        }
    ]
]);
var CloudRainWind$1 = CloudRainWind;
var CloudRain = createReactComponent("CloudRain", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M16 14v6",
            key: "1j4efv"
        }
    ],
    [
        "path",
        {
            d: "M8 14v6",
            key: "17c4r9"
        }
    ],
    [
        "path",
        {
            d: "M12 16v6",
            key: "c8a4gj"
        }
    ]
]);
var CloudRain$1 = CloudRain;
var CloudSnow = createReactComponent("CloudSnow", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M8 15h.01",
            key: "a7atzg"
        }
    ],
    [
        "path",
        {
            d: "M8 19h.01",
            key: "puxtts"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ],
    [
        "path",
        {
            d: "M12 21h.01",
            key: "h35vbk"
        }
    ],
    [
        "path",
        {
            d: "M16 15h.01",
            key: "rnfrdf"
        }
    ],
    [
        "path",
        {
            d: "M16 19h.01",
            key: "1vcnzz"
        }
    ]
]);
var CloudSnow$1 = CloudSnow;
var CloudSunRain = createReactComponent("CloudSunRain", [
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ],
    [
        "path",
        {
            d: "M15.947 12.65a4 4 0 0 0-5.925-4.128",
            key: "dpwdj0"
        }
    ],
    [
        "path",
        {
            d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",
            key: "1qmrp3"
        }
    ],
    [
        "path",
        {
            d: "M11 20v2",
            key: "174qtz"
        }
    ],
    [
        "path",
        {
            d: "M7 19v2",
            key: "12npes"
        }
    ]
]);
var CloudSunRain$1 = CloudSunRain;
var CloudSun = createReactComponent("CloudSun", [
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ],
    [
        "path",
        {
            d: "M15.947 12.65a4 4 0 0 0-5.925-4.128",
            key: "dpwdj0"
        }
    ],
    [
        "path",
        {
            d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",
            key: "s09mg5"
        }
    ]
]);
var CloudSun$1 = CloudSun;
var Cloud = createReactComponent("Cloud", [
    [
        "path",
        {
            d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
            key: "p7xjir"
        }
    ]
]);
var Cloud$1 = Cloud;
var Cloudy = createReactComponent("Cloudy", [
    [
        "path",
        {
            d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
            key: "gqqjvc"
        }
    ],
    [
        "path",
        {
            d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",
            key: "1p2s76"
        }
    ]
]);
var Cloudy$1 = Cloudy;
var Clover = createReactComponent("Clover", [
    [
        "path",
        {
            d: "M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z",
            key: "1gxwox"
        }
    ],
    [
        "path",
        {
            d: "M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16",
            key: "il7z7z"
        }
    ],
    [
        "path",
        {
            d: "M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8",
            key: "15bpx2"
        }
    ],
    [
        "path",
        {
            d: "M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z",
            key: "v9mug8"
        }
    ],
    [
        "path",
        {
            d: "m7 17-5 5",
            key: "1py3mz"
        }
    ]
]);
var Clover$1 = Clover;
var Code2 = createReactComponent("Code2", [
    [
        "path",
        {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }
    ],
    [
        "path",
        {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }
    ],
    [
        "path",
        {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }
    ]
]);
var Code2$1 = Code2;
var Code = createReactComponent("Code", [
    [
        "polyline",
        {
            points: "16 18 22 12 16 6",
            key: "z7tu5w"
        }
    ],
    [
        "polyline",
        {
            points: "8 6 2 12 8 18",
            key: "1eg1df"
        }
    ]
]);
var Code$1 = Code;
var Codepen = createReactComponent("Codepen", [
    [
        "polygon",
        {
            points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",
            key: "srzb37"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "15.5",
            key: "zsefro"
        }
    ],
    [
        "polyline",
        {
            points: "22 8.5 12 15.5 2 8.5",
            key: "ajlxae"
        }
    ],
    [
        "polyline",
        {
            points: "2 15.5 12 8.5 22 15.5",
            key: "susrui"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "8.5",
            key: "zll5ve"
        }
    ]
]);
var Codepen$1 = Codepen;
var Codesandbox = createReactComponent("Codesandbox", [
    [
        "path",
        {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
            key: "yt0hxn"
        }
    ],
    [
        "polyline",
        {
            points: "7.5 4.21 12 6.81 16.5 4.21",
            key: "fabo96"
        }
    ],
    [
        "polyline",
        {
            points: "7.5 19.79 7.5 14.6 3 12",
            key: "z377f1"
        }
    ],
    [
        "polyline",
        {
            points: "21 12 16.5 14.6 16.5 19.79",
            key: "9nrev1"
        }
    ],
    [
        "polyline",
        {
            points: "3.27 6.96 12 12.01 20.73 6.96",
            key: "1180pa"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22.08",
            x2: "12",
            y2: "12",
            key: "10a5a7"
        }
    ]
]);
var Codesandbox$1 = Codesandbox;
var Coffee = createReactComponent("Coffee", [
    [
        "path",
        {
            d: "M17 8h1a4 4 0 1 1 0 8h-1",
            key: "jx4kbh"
        }
    ],
    [
        "path",
        {
            d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",
            key: "1bxrl0"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "2",
            x2: "6",
            y2: "4",
            key: "1p57d3"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "2",
            x2: "10",
            y2: "4",
            key: "xb2gh9"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "2",
            x2: "14",
            y2: "4",
            key: "gpi44t"
        }
    ]
]);
var Coffee$1 = Coffee;
var Cog = createReactComponent("Cog", [
    [
        "path",
        {
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
            key: "sobvz5"
        }
    ],
    [
        "path",
        {
            d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
            key: "11i496"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 22v-2",
            key: "1osdcq"
        }
    ],
    [
        "path",
        {
            d: "m17 20.66-1-1.73",
            key: "eq3orb"
        }
    ],
    [
        "path",
        {
            d: "M11 10.27 7 3.34",
            key: "16pf9h"
        }
    ],
    [
        "path",
        {
            d: "m20.66 17-1.73-1",
            key: "sg0v6f"
        }
    ],
    [
        "path",
        {
            d: "m3.34 7 1.73 1",
            key: "1ulond"
        }
    ],
    [
        "path",
        {
            d: "M14 12h8",
            key: "4f43i9"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "m20.66 7-1.73 1",
            key: "1ow05n"
        }
    ],
    [
        "path",
        {
            d: "m3.34 17 1.73-1",
            key: "nuk764"
        }
    ],
    [
        "path",
        {
            d: "m17 3.34-1 1.73",
            key: "2wel8s"
        }
    ],
    [
        "path",
        {
            d: "m11 13.73-4 6.93",
            key: "794ttg"
        }
    ]
]);
var Cog$1 = Cog;
var Coins = createReactComponent("Coins", [
    [
        "circle",
        {
            cx: "8",
            cy: "8",
            r: "6",
            key: "3yglwk"
        }
    ],
    [
        "path",
        {
            d: "M18.09 10.37A6 6 0 1 1 10.34 18",
            key: "t5s6rm"
        }
    ],
    [
        "path",
        {
            d: "M7 6h1v4",
            key: "1obek4"
        }
    ],
    [
        "path",
        {
            d: "m16.71 13.88.7.71-2.82 2.82",
            key: "1rbuyh"
        }
    ]
]);
var Coins$1 = Coins;
var Columns = createReactComponent("Columns", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "3",
            x2: "12",
            y2: "21",
            key: "essbwb"
        }
    ]
]);
var Columns$1 = Columns;
var Command = createReactComponent("Command", [
    [
        "path",
        {
            d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
            key: "uqkaba"
        }
    ]
]);
var Command$1 = Command;
var Compass = createReactComponent("Compass", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polygon",
        {
            points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
            key: "m9r19z"
        }
    ]
]);
var Compass$1 = Compass;
var Component = createReactComponent("Component", [
    [
        "path",
        {
            d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z",
            key: "1kciei"
        }
    ],
    [
        "path",
        {
            d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z",
            key: "1ome0g"
        }
    ],
    [
        "path",
        {
            d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z",
            key: "vbupec"
        }
    ],
    [
        "path",
        {
            d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z",
            key: "16csic"
        }
    ]
]);
var Component$1 = Component;
var ConciergeBell = createReactComponent("ConciergeBell", [
    [
        "path",
        {
            d: "M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z",
            key: "1co3i8"
        }
    ],
    [
        "path",
        {
            d: "M20 16a8 8 0 1 0-16 0",
            key: "1pa543"
        }
    ],
    [
        "path",
        {
            d: "M12 4v4",
            key: "1bq03y"
        }
    ],
    [
        "path",
        {
            d: "M10 4h4",
            key: "1xpv9s"
        }
    ]
]);
var ConciergeBell$1 = ConciergeBell;
var Contact = createReactComponent("Contact", [
    [
        "path",
        {
            d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",
            key: "1mghuy"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            key: "12vinp"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "2",
            key: "1yojzk"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "4",
            key: "1r8a5u"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "4",
            key: "tp0trh"
        }
    ]
]);
var Contact$1 = Contact;
var Contrast = createReactComponent("Contrast", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 18a6 6 0 0 0 0-12v12z",
            key: "j4l70d"
        }
    ]
]);
var Contrast$1 = Contrast;
var Cookie = createReactComponent("Cookie", [
    [
        "path",
        {
            d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
            key: "laymnq"
        }
    ],
    [
        "path",
        {
            d: "M8.5 8.5v.01",
            key: "ue8clq"
        }
    ],
    [
        "path",
        {
            d: "M16 15.5v.01",
            key: "14dtrp"
        }
    ],
    [
        "path",
        {
            d: "M12 12v.01",
            key: "u5ubse"
        }
    ],
    [
        "path",
        {
            d: "M11 17v.01",
            key: "1hyl5a"
        }
    ],
    [
        "path",
        {
            d: "M7 14v.01",
            key: "uct60s"
        }
    ]
]);
var Cookie$1 = Cookie;
var Copy = createReactComponent("Copy", [
    [
        "rect",
        {
            x: "9",
            y: "9",
            width: "13",
            height: "13",
            rx: "2",
            ry: "2",
            key: "1ma1o8"
        }
    ],
    [
        "path",
        {
            d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
            key: "pklvoz"
        }
    ]
]);
var Copy$1 = Copy;
var Copyleft = createReactComponent("Copyleft", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M9 9.35a4 4 0 1 1 0 5.3",
            key: "p8fkhi"
        }
    ]
]);
var Copyleft$1 = Copyleft;
var Copyright = createReactComponent("Copyright", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M15 9.354a4 4 0 1 0 0 5.292",
            key: "8xfhbo"
        }
    ]
]);
var Copyright$1 = Copyright;
var CornerDownLeft = createReactComponent("CornerDownLeft", [
    [
        "polyline",
        {
            points: "9 10 4 15 9 20",
            key: "r3jprv"
        }
    ],
    [
        "path",
        {
            d: "M20 4v7a4 4 0 0 1-4 4H4",
            key: "6o5b7l"
        }
    ]
]);
var CornerDownLeft$1 = CornerDownLeft;
var CornerDownRight = createReactComponent("CornerDownRight", [
    [
        "polyline",
        {
            points: "15 10 20 15 15 20",
            key: "1q7qjw"
        }
    ],
    [
        "path",
        {
            d: "M4 4v7a4 4 0 0 0 4 4h12",
            key: "z08zvw"
        }
    ]
]);
var CornerDownRight$1 = CornerDownRight;
var CornerLeftDown = createReactComponent("CornerLeftDown", [
    [
        "polyline",
        {
            points: "14 15 9 20 4 15",
            key: "nkc4i"
        }
    ],
    [
        "path",
        {
            d: "M20 4h-7a4 4 0 0 0-4 4v12",
            key: "nbpdq2"
        }
    ]
]);
var CornerLeftDown$1 = CornerLeftDown;
var CornerLeftUp = createReactComponent("CornerLeftUp", [
    [
        "polyline",
        {
            points: "14 9 9 4 4 9",
            key: "m9oyvo"
        }
    ],
    [
        "path",
        {
            d: "M20 20h-7a4 4 0 0 1-4-4V4",
            key: "1blwi3"
        }
    ]
]);
var CornerLeftUp$1 = CornerLeftUp;
var CornerRightDown = createReactComponent("CornerRightDown", [
    [
        "polyline",
        {
            points: "10 15 15 20 20 15",
            key: "axus6l"
        }
    ],
    [
        "path",
        {
            d: "M4 4h7a4 4 0 0 1 4 4v12",
            key: "wcbgct"
        }
    ]
]);
var CornerRightDown$1 = CornerRightDown;
var CornerRightUp = createReactComponent("CornerRightUp", [
    [
        "polyline",
        {
            points: "10 9 15 4 20 9",
            key: "1lr6px"
        }
    ],
    [
        "path",
        {
            d: "M4 20h7a4 4 0 0 0 4-4V4",
            key: "1plgdj"
        }
    ]
]);
var CornerRightUp$1 = CornerRightUp;
var CornerUpLeft = createReactComponent("CornerUpLeft", [
    [
        "polyline",
        {
            points: "9 14 4 9 9 4",
            key: "881910"
        }
    ],
    [
        "path",
        {
            d: "M20 20v-7a4 4 0 0 0-4-4H4",
            key: "1nkjon"
        }
    ]
]);
var CornerUpLeft$1 = CornerUpLeft;
var CornerUpRight = createReactComponent("CornerUpRight", [
    [
        "polyline",
        {
            points: "15 14 20 9 15 4",
            key: "1tbx3s"
        }
    ],
    [
        "path",
        {
            d: "M4 20v-7a4 4 0 0 1 4-4h12",
            key: "1lu4f8"
        }
    ]
]);
var CornerUpRight$1 = CornerUpRight;
var Cpu = createReactComponent("Cpu", [
    [
        "rect",
        {
            x: "4",
            y: "4",
            width: "16",
            height: "16",
            rx: "2",
            ry: "2",
            key: "19czt8"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "9",
            width: "6",
            height: "6",
            key: "o3kz5p"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "2",
            x2: "9",
            y2: "4",
            key: "1tcqwn"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "2",
            x2: "15",
            y2: "4",
            key: "1yvlak"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "21",
            x2: "9",
            y2: "22",
            key: "tuhu08"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "20",
            x2: "15",
            y2: "22",
            key: "1o5cyu"
        }
    ],
    [
        "line",
        {
            x1: "20",
            y1: "9",
            x2: "22",
            y2: "9",
            key: "b8rlm1"
        }
    ],
    [
        "line",
        {
            x1: "20",
            y1: "14",
            x2: "22",
            y2: "14",
            key: "1mk8c1"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "9",
            x2: "4",
            y2: "9",
            key: "bt7uvh"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "14",
            x2: "4",
            y2: "14",
            key: "hp71sd"
        }
    ]
]);
var Cpu$1 = Cpu;
var CreditCard = createReactComponent("CreditCard", [
    [
        "rect",
        {
            x: "2",
            y: "5",
            width: "20",
            height: "14",
            rx: "2",
            key: "qneu4z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "10",
            x2: "22",
            y2: "10",
            key: "1ytoly"
        }
    ]
]);
var CreditCard$1 = CreditCard;
var Croissant = createReactComponent("Croissant", [
    [
        "path",
        {
            d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",
            key: "1ozxlb"
        }
    ],
    [
        "path",
        {
            d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",
            key: "ffuyb5"
        }
    ],
    [
        "path",
        {
            d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",
            key: "osnpzi"
        }
    ],
    [
        "path",
        {
            d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",
            key: "1vubaw"
        }
    ],
    [
        "path",
        {
            d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",
            key: "wxr772"
        }
    ]
]);
var Croissant$1 = Croissant;
var Crop = createReactComponent("Crop", [
    [
        "path",
        {
            d: "M6 2v14a2 2 0 0 0 2 2h14",
            key: "ron5a4"
        }
    ],
    [
        "path",
        {
            d: "M18 22V8a2 2 0 0 0-2-2H2",
            key: "7s9ehn"
        }
    ]
]);
var Crop$1 = Crop;
var Cross = createReactComponent("Cross", [
    [
        "path",
        {
            d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",
            key: "1t5g7j"
        }
    ]
]);
var Cross$1 = Cross;
var Crosshair = createReactComponent("Crosshair", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "12",
            x2: "18",
            y2: "12",
            key: "yivkn6"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "12",
            x2: "2",
            y2: "12",
            key: "hlzxjj"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "6",
            x2: "12",
            y2: "2",
            key: "1s1957"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "18",
            key: "2x08zm"
        }
    ]
]);
var Crosshair$1 = Crosshair;
var Crown = createReactComponent("Crown", [
    [
        "path",
        {
            d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
            key: "zkxr6b"
        }
    ]
]);
var Crown$1 = Crown;
var CupSoda = createReactComponent("CupSoda", [
    [
        "path",
        {
            d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",
            key: "8166m8"
        }
    ],
    [
        "path",
        {
            d: "M5 8h14",
            key: "pcz4l3"
        }
    ],
    [
        "path",
        {
            d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
            key: "yjz344"
        }
    ],
    [
        "path",
        {
            d: "m12 8 1-6h2",
            key: "3ybfa4"
        }
    ]
]);
var CupSoda$1 = CupSoda;
var CurlyBraces = createReactComponent("CurlyBraces", [
    [
        "path",
        {
            d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
            key: "ezmyqa"
        }
    ],
    [
        "path",
        {
            d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
            key: "e1hn23"
        }
    ]
]);
var CurlyBraces$1 = CurlyBraces;
var Currency = createReactComponent("Currency", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "8",
            key: "46899m"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "3",
            x2: "6",
            y2: "6",
            key: "zkqcdn"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "3",
            x2: "18",
            y2: "6",
            key: "n7spic"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "21",
            x2: "6",
            y2: "18",
            key: "7xq9ok"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "21",
            x2: "18",
            y2: "18",
            key: "mzvtez"
        }
    ]
]);
var Currency$1 = Currency;
var Database = createReactComponent("Database", [
    [
        "ellipse",
        {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3",
            key: "msslwz"
        }
    ],
    [
        "path",
        {
            d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3",
            key: "pw5pse"
        }
    ],
    [
        "path",
        {
            d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5",
            key: "7dtpbs"
        }
    ]
]);
var Database$1 = Database;
var Delete = createReactComponent("Delete", [
    [
        "path",
        {
            d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",
            key: "1oy587"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "9",
            x2: "12",
            y2: "15",
            key: "1328vg"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "9",
            x2: "18",
            y2: "15",
            key: "6xbiik"
        }
    ]
]);
var Delete$1 = Delete;
var Diamond = createReactComponent("Diamond", [
    [
        "rect",
        {
            x: "12",
            y: "1",
            width: "15.56",
            height: "15.56",
            rx: "2.41",
            transform: "rotate(45 12 1)",
            key: "dtb0qj"
        }
    ]
]);
var Diamond$1 = Diamond;
var Dice1 = createReactComponent("Dice1", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.01",
            key: "1mp3jc"
        }
    ]
]);
var Dice1$1 = Dice1;
var Dice2 = createReactComponent("Dice2", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M15 9h.01",
            key: "x1ddxp"
        }
    ],
    [
        "path",
        {
            d: "M9 15h.01",
            key: "fzyn71"
        }
    ]
]);
var Dice2$1 = Dice2;
var Dice3 = createReactComponent("Dice3", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M16 8h.01",
            key: "cr5u4v"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.01",
            key: "1mp3jc"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ]
]);
var Dice3$1 = Dice3;
var Dice4 = createReactComponent("Dice4", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M16 8h.01",
            key: "cr5u4v"
        }
    ],
    [
        "path",
        {
            d: "M8 8h.01",
            key: "1e4136"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ],
    [
        "path",
        {
            d: "M16 16h.01",
            key: "1f9h7w"
        }
    ]
]);
var Dice4$1 = Dice4;
var Dice5 = createReactComponent("Dice5", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M16 8h.01",
            key: "cr5u4v"
        }
    ],
    [
        "path",
        {
            d: "M8 8h.01",
            key: "1e4136"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ],
    [
        "path",
        {
            d: "M16 16h.01",
            key: "1f9h7w"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.01",
            key: "1mp3jc"
        }
    ]
]);
var Dice5$1 = Dice5;
var Dice6 = createReactComponent("Dice6", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M16 8h.01",
            key: "cr5u4v"
        }
    ],
    [
        "path",
        {
            d: "M16 12h.01",
            key: "1l6xoz"
        }
    ],
    [
        "path",
        {
            d: "M16 16h.01",
            key: "1f9h7w"
        }
    ],
    [
        "path",
        {
            d: "M8 8h.01",
            key: "1e4136"
        }
    ],
    [
        "path",
        {
            d: "M8 12h.01",
            key: "czm47f"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ]
]);
var Dice6$1 = Dice6;
var Dices = createReactComponent("Dices", [
    [
        "rect",
        {
            x: "2",
            y: "10",
            width: "12",
            height: "12",
            rx: "2",
            ry: "2",
            key: "73wp2n"
        }
    ],
    [
        "path",
        {
            d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",
            key: "1o487t"
        }
    ],
    [
        "path",
        {
            d: "M6 18h.01",
            key: "uhywen"
        }
    ],
    [
        "path",
        {
            d: "M10 14h.01",
            key: "ssrbsk"
        }
    ],
    [
        "path",
        {
            d: "M15 6h.01",
            key: "cblpky"
        }
    ],
    [
        "path",
        {
            d: "M18 9h.01",
            key: "2061c0"
        }
    ]
]);
var Dices$1 = Dices;
var Diff = createReactComponent("Diff", [
    [
        "path",
        {
            d: "M12 3v14",
            key: "7cf3v8"
        }
    ],
    [
        "path",
        {
            d: "M5 10h14",
            key: "elsbfy"
        }
    ],
    [
        "path",
        {
            d: "M5 21h14",
            key: "11awu3"
        }
    ]
]);
var Diff$1 = Diff;
var Disc = createReactComponent("Disc", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
var Disc$1 = Disc;
var DivideCircle = createReactComponent("DivideCircle", [
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "16",
            key: "4v5xkb"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "8",
            key: "1vrb7x"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
]);
var DivideCircle$1 = DivideCircle;
var DivideSquare = createReactComponent("DivideSquare", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "16",
            key: "4v5xkb"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "8",
            key: "1vrb7x"
        }
    ]
]);
var DivideSquare$1 = DivideSquare;
var Divide = createReactComponent("Divide", [
    [
        "circle",
        {
            cx: "12",
            cy: "6",
            r: "1",
            key: "1bh7o1"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
            key: "1smlys"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "18",
            r: "1",
            key: "lqb9t5"
        }
    ]
]);
var Divide$1 = Divide;
var DollarSign = createReactComponent("DollarSign", [
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "22",
            key: "1k6o5o"
        }
    ],
    [
        "path",
        {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s"
        }
    ]
]);
var DollarSign$1 = DollarSign;
var DownloadCloud = createReactComponent("DownloadCloud", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M12 12v9",
            key: "192myk"
        }
    ],
    [
        "path",
        {
            d: "m8 17 4 4 4-4",
            key: "1ul180"
        }
    ]
]);
var DownloadCloud$1 = DownloadCloud;
var Download = createReactComponent("Download", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "7 10 12 15 17 10",
            key: "2ggqvy"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "15",
            x2: "12",
            y2: "3",
            key: "nqo27w"
        }
    ]
]);
var Download$1 = Download;
var Dribbble = createReactComponent("Dribbble", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",
            key: "hpej1"
        }
    ],
    [
        "path",
        {
            d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",
            key: "1tr44o"
        }
    ],
    [
        "path",
        {
            d: "M8.56 2.75c4.37 6 6 9.42 8 17.72",
            key: "kbh691"
        }
    ]
]);
var Dribbble$1 = Dribbble;
var Droplet = createReactComponent("Droplet", [
    [
        "path",
        {
            d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
            key: "c7niix"
        }
    ]
]);
var Droplet$1 = Droplet;
var Droplets = createReactComponent("Droplets", [
    [
        "path",
        {
            d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
            key: "1ptgy4"
        }
    ],
    [
        "path",
        {
            d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
            key: "1sl1rz"
        }
    ]
]);
var Droplets$1 = Droplets;
var Drumstick = createReactComponent("Drumstick", [
    [
        "path",
        {
            d: "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",
            key: "1o96s0"
        }
    ],
    [
        "path",
        {
            d: "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",
            key: "14vv5h"
        }
    ]
]);
var Drumstick$1 = Drumstick;
var EarOff = createReactComponent("EarOff", [
    [
        "path",
        {
            d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",
            key: "1qngmn"
        }
    ],
    [
        "path",
        {
            d: "M6 8.5c0-.75.13-1.47.36-2.14",
            key: "b06bma"
        }
    ],
    [
        "path",
        {
            d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",
            key: "g10hsz"
        }
    ],
    [
        "path",
        {
            d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",
            key: "ygzou7"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var EarOff$1 = EarOff;
var Ear = createReactComponent("Ear", [
    [
        "path",
        {
            d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",
            key: "1dfaln"
        }
    ],
    [
        "path",
        {
            d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",
            key: "1qnva7"
        }
    ]
]);
var Ear$1 = Ear;
var Edit2 = createReactComponent("Edit2", [
    [
        "path",
        {
            d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
            key: "2s2c1q"
        }
    ]
]);
var Edit2$1 = Edit2;
var Edit3 = createReactComponent("Edit3", [
    [
        "path",
        {
            d: "M12 20h9",
            key: "t2du7b"
        }
    ],
    [
        "path",
        {
            d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
            key: "18w55b"
        }
    ]
]);
var Edit3$1 = Edit3;
var Edit = createReactComponent("Edit", [
    [
        "path",
        {
            d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
            key: "1qinfi"
        }
    ],
    [
        "path",
        {
            d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
            key: "1cs3r3"
        }
    ]
]);
var Edit$1 = Edit;
var EggFried = createReactComponent("EggFried", [
    [
        "circle",
        {
            cx: "11.5",
            cy: "12.5",
            r: "3.5",
            key: "1cl1mi"
        }
    ],
    [
        "path",
        {
            d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",
            key: "165ef9"
        }
    ]
]);
var EggFried$1 = EggFried;
var Egg = createReactComponent("Egg", [
    [
        "path",
        {
            d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",
            key: "1c39pg"
        }
    ]
]);
var Egg$1 = Egg;
var EqualNot = createReactComponent("EqualNot", [
    [
        "line",
        {
            x1: "5",
            y1: "9",
            x2: "19",
            y2: "9",
            key: "p612hi"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "15",
            x2: "19",
            y2: "15",
            key: "e39u1i"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "5",
            x2: "5",
            y2: "19",
            key: "t1677v"
        }
    ]
]);
var EqualNot$1 = EqualNot;
var Equal = createReactComponent("Equal", [
    [
        "line",
        {
            x1: "5",
            y1: "9",
            x2: "19",
            y2: "9",
            key: "p612hi"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "15",
            x2: "19",
            y2: "15",
            key: "e39u1i"
        }
    ]
]);
var Equal$1 = Equal;
var Eraser = createReactComponent("Eraser", [
    [
        "path",
        {
            d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
            key: "182aya"
        }
    ],
    [
        "path",
        {
            d: "M22 21H7",
            key: "t4ddhn"
        }
    ],
    [
        "path",
        {
            d: "m5 11 9 9",
            key: "1mo9qw"
        }
    ]
]);
var Eraser$1 = Eraser;
var Euro = createReactComponent("Euro", [
    [
        "path",
        {
            d: "M4 10h12",
            key: "1y6xl8"
        }
    ],
    [
        "path",
        {
            d: "M4 14h9",
            key: "1loblj"
        }
    ],
    [
        "path",
        {
            d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
            key: "1j6lzo"
        }
    ]
]);
var Euro$1 = Euro;
var Expand = createReactComponent("Expand", [
    [
        "path",
        {
            d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8",
            key: "1c15vz"
        }
    ],
    [
        "path",
        {
            d: "M3 16.2V21m0 0h4.8M3 21l6-6",
            key: "1fsnz2"
        }
    ],
    [
        "path",
        {
            d: "M21 7.8V3m0 0h-4.8M21 3l-6 6",
            key: "hawz9i"
        }
    ],
    [
        "path",
        {
            d: "M3 7.8V3m0 0h4.8M3 3l6 6",
            key: "u9ee12"
        }
    ]
]);
var Expand$1 = Expand;
var ExternalLink = createReactComponent("ExternalLink", [
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ],
    [
        "polyline",
        {
            points: "15 3 21 3 21 9",
            key: "mznyad"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "14",
            x2: "21",
            y2: "3",
            key: "19d9un"
        }
    ]
]);
var ExternalLink$1 = ExternalLink;
var EyeOff = createReactComponent("EyeOff", [
    [
        "path",
        {
            d: "M9.88 9.88a3 3 0 1 0 4.24 4.24",
            key: "1jxqfv"
        }
    ],
    [
        "path",
        {
            d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
            key: "9wicm4"
        }
    ],
    [
        "path",
        {
            d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
            key: "1jreej"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var EyeOff$1 = EyeOff;
var Eye = createReactComponent("Eye", [
    [
        "path",
        {
            d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
            key: "rwhkz3"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
var Eye$1 = Eye;
var Facebook = createReactComponent("Facebook", [
    [
        "path",
        {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
            key: "1jg4f8"
        }
    ]
]);
var Facebook$1 = Facebook;
var Factory = createReactComponent("Factory", [
    [
        "path",
        {
            d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
            key: "159hny"
        }
    ],
    [
        "path",
        {
            d: "M17 18h1",
            key: "uldtlt"
        }
    ],
    [
        "path",
        {
            d: "M12 18h1",
            key: "s9uhes"
        }
    ],
    [
        "path",
        {
            d: "M7 18h1",
            key: "1neino"
        }
    ]
]);
var Factory$1 = Factory;
var Fan = createReactComponent("Fan", [
    [
        "path",
        {
            d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
            key: "484a7f"
        }
    ],
    [
        "path",
        {
            d: "M12 12v.01",
            key: "u5ubse"
        }
    ]
]);
var Fan$1 = Fan;
var FastForward = createReactComponent("FastForward", [
    [
        "polygon",
        {
            points: "13 19 22 12 13 5 13 19",
            key: "587y9g"
        }
    ],
    [
        "polygon",
        {
            points: "2 19 11 12 2 5 2 19",
            key: "3pweh0"
        }
    ]
]);
var FastForward$1 = FastForward;
var Feather = createReactComponent("Feather", [
    [
        "path",
        {
            d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",
            key: "u4sw5n"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "8",
            x2: "2",
            y2: "22",
            key: "ay4g5i"
        }
    ],
    [
        "line",
        {
            x1: "17.5",
            y1: "15",
            x2: "9",
            y2: "15",
            key: "c4zw0f"
        }
    ]
]);
var Feather$1 = Feather;
var Figma = createReactComponent("Figma", [
    [
        "path",
        {
            d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",
            key: "1340ok"
        }
    ],
    [
        "path",
        {
            d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",
            key: "1hz3m3"
        }
    ],
    [
        "path",
        {
            d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",
            key: "1oz8n2"
        }
    ],
    [
        "path",
        {
            d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",
            key: "1ff65i"
        }
    ],
    [
        "path",
        {
            d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",
            key: "pdip6e"
        }
    ]
]);
var Figma$1 = Figma;
var FileArchive = createReactComponent("FileArchive", [
    [
        "path",
        {
            d: "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2",
            key: "1u864v"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "10",
            cy: "20",
            r: "2",
            key: "1xzdoj"
        }
    ],
    [
        "path",
        {
            d: "M10 7V6",
            key: "dljcrl"
        }
    ],
    [
        "path",
        {
            d: "M10 12v-1",
            key: "v7bkov"
        }
    ],
    [
        "path",
        {
            d: "M10 18v-2",
            key: "1cjy8d"
        }
    ]
]);
var FileArchive$1 = FileArchive;
var FileAudio2 = createReactComponent("FileAudio2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2",
            key: "fkyf72"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M2 17v-3a4 4 0 0 1 8 0v3",
            key: "1ggdre"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "17",
            r: "1",
            key: "bc1fq4"
        }
    ],
    [
        "circle",
        {
            cx: "3",
            cy: "17",
            r: "1",
            key: "vo6nti"
        }
    ]
]);
var FileAudio2$1 = FileAudio2;
var FileAudio = createReactComponent("FileAudio", [
    [
        "path",
        {
            d: "M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",
            key: "1013sb"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z",
            key: "gqt63y"
        }
    ],
    [
        "path",
        {
            d: "M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z",
            key: "cf7lqx"
        }
    ],
    [
        "path",
        {
            d: "M2 19v-3a6 6 0 0 1 12 0v3",
            key: "1acxgf"
        }
    ]
]);
var FileAudio$1 = FileAudio;
var FileAxis3d = createReactComponent("FileAxis3d", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M8 10v8h8",
            key: "tlaukw"
        }
    ],
    [
        "path",
        {
            d: "m8 18 4-4",
            key: "12zab0"
        }
    ]
]);
var FileAxis3d$1 = FileAxis3d;
var FileBadge2 = createReactComponent("FileBadge2", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "path",
        {
            d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            key: "13rien"
        }
    ],
    [
        "path",
        {
            d: "m14 12.5 1 5.5-3-1-3 1 1-5.5",
            key: "14xlky"
        }
    ]
]);
var FileBadge2$1 = FileBadge2;
var FileBadge = createReactComponent("FileBadge", [
    [
        "path",
        {
            d: "M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6",
            key: "qtddq0"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            key: "u0c8gj"
        }
    ],
    [
        "path",
        {
            d: "M7 16.5 8 22l-3-1-3 1 1-5.5",
            key: "5gm2nr"
        }
    ]
]);
var FileBadge$1 = FileBadge;
var FileBarChart2 = createReactComponent("FileBarChart2", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M12 18v-6",
            key: "17g6i2"
        }
    ],
    [
        "path",
        {
            d: "M8 18v-1",
            key: "zg0ygc"
        }
    ],
    [
        "path",
        {
            d: "M16 18v-3",
            key: "j5jt4h"
        }
    ]
]);
var FileBarChart2$1 = FileBarChart2;
var FileBarChart = createReactComponent("FileBarChart", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M12 18v-4",
            key: "q1q25u"
        }
    ],
    [
        "path",
        {
            d: "M8 18v-2",
            key: "qcmpov"
        }
    ],
    [
        "path",
        {
            d: "M16 18v-6",
            key: "15y0np"
        }
    ]
]);
var FileBarChart$1 = FileBarChart;
var FileBox = createReactComponent("FileBox", [
    [
        "path",
        {
            d: "M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "h7jej2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",
            key: "f4a3oc"
        }
    ],
    [
        "path",
        {
            d: "m7 17-4.74-2.85",
            key: "etm6su"
        }
    ],
    [
        "path",
        {
            d: "m7 17 4.74-2.85",
            key: "5xuooz"
        }
    ],
    [
        "path",
        {
            d: "M7 17v5",
            key: "1yj1jh"
        }
    ]
]);
var FileBox$1 = FileBox;
var FileCheck2 = createReactComponent("FileCheck2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m3 15 2 2 4-4",
            key: "1lhrkk"
        }
    ]
]);
var FileCheck2$1 = FileCheck2;
var FileCheck = createReactComponent("FileCheck", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m9 15 2 2 4-4",
            key: "1grp1n"
        }
    ]
]);
var FileCheck$1 = FileCheck;
var FileClock = createReactComponent("FileClock", [
    [
        "path",
        {
            d: "M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",
            key: "9lo3o3"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "8",
            cy: "16",
            r: "6",
            key: "10v15b"
        }
    ],
    [
        "path",
        {
            d: "M9.5 17.5 8 16.25V14",
            key: "1o80t2"
        }
    ]
]);
var FileClock$1 = FileClock;
var FileCode = createReactComponent("FileCode", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m9 18 3-3-3-3",
            key: "112psh"
        }
    ],
    [
        "path",
        {
            d: "m5 12-3 3 3 3",
            key: "oke12k"
        }
    ]
]);
var FileCode$1 = FileCode;
var FileCog2 = createReactComponent("FileCog2", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "15",
            r: "2",
            key: "1vpstw"
        }
    ],
    [
        "path",
        {
            d: "M12 12v1",
            key: "1vuyxr"
        }
    ],
    [
        "path",
        {
            d: "M12 17v1",
            key: "y8y3f9"
        }
    ],
    [
        "path",
        {
            d: "m14.6 13.5-.87.5",
            key: "nomeg4"
        }
    ],
    [
        "path",
        {
            d: "m10.27 16-.87.5",
            key: "1o8v95"
        }
    ],
    [
        "path",
        {
            d: "m14.6 16.5-.87-.5",
            key: "gzu2jw"
        }
    ],
    [
        "path",
        {
            d: "m10.27 14-.87-.5",
            key: "1vlkk3"
        }
    ]
]);
var FileCog2$1 = FileCog2;
var FileCog = createReactComponent("FileCog", [
    [
        "path",
        {
            d: "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",
            key: "dba9qu"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "14",
            r: "3",
            key: "a1xfv6"
        }
    ],
    [
        "path",
        {
            d: "M6 10v1",
            key: "xs0f9j"
        }
    ],
    [
        "path",
        {
            d: "M6 17v1",
            key: "idyhc0"
        }
    ],
    [
        "path",
        {
            d: "M10 14H9",
            key: "m5fm2q"
        }
    ],
    [
        "path",
        {
            d: "M3 14H2",
            key: "19ot09"
        }
    ],
    [
        "path",
        {
            d: "m9 11-.88.88",
            key: "lhul2b"
        }
    ],
    [
        "path",
        {
            d: "M3.88 16.12 3 17",
            key: "169z9n"
        }
    ],
    [
        "path",
        {
            d: "m9 17-.88-.88",
            key: "5io96w"
        }
    ],
    [
        "path",
        {
            d: "M3.88 11.88 3 11",
            key: "1ynhy1"
        }
    ]
]);
var FileCog$1 = FileCog;
var FileDiff = createReactComponent("FileDiff", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "path",
        {
            d: "M12 13V7",
            key: "h0r20n"
        }
    ],
    [
        "path",
        {
            d: "M9 10h6",
            key: "9gxzsh"
        }
    ],
    [
        "path",
        {
            d: "M9 17h6",
            key: "r8uit2"
        }
    ]
]);
var FileDiff$1 = FileDiff;
var FileDigit = createReactComponent("FileDigit", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M10 12h2v6",
            key: "12zw74"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "12",
            width: "4",
            height: "6",
            key: "kg2lqm"
        }
    ],
    [
        "path",
        {
            d: "M10 18h4",
            key: "1ulq68"
        }
    ]
]);
var FileDigit$1 = FileDigit;
var FileDown = createReactComponent("FileDown", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M12 18v-6",
            key: "17g6i2"
        }
    ],
    [
        "path",
        {
            d: "m9 15 3 3 3-3",
            key: "1npd3o"
        }
    ]
]);
var FileDown$1 = FileDown;
var FileEdit = createReactComponent("FileEdit", [
    [
        "path",
        {
            d: "M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5",
            key: "1bg6eb"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z",
            key: "1rgxu8"
        }
    ]
]);
var FileEdit$1 = FileEdit;
var FileHeart = createReactComponent("FileHeart", [
    [
        "path",
        {
            d: "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",
            key: "dba9qu"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
            key: "1c1fso"
        }
    ]
]);
var FileHeart$1 = FileHeart;
var FileImage = createReactComponent("FileImage", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "10",
            cy: "13",
            r: "2",
            key: "6v46hv"
        }
    ],
    [
        "path",
        {
            d: "m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22",
            key: "17vly1"
        }
    ]
]);
var FileImage$1 = FileImage;
var FileInput = createReactComponent("FileInput", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M2 15h10",
            key: "jfw4w8"
        }
    ],
    [
        "path",
        {
            d: "m9 18 3-3-3-3",
            key: "112psh"
        }
    ]
]);
var FileInput$1 = FileInput;
var FileJson2 = createReactComponent("FileJson2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
            key: "fq0c9t"
        }
    ],
    [
        "path",
        {
            d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
            key: "4gibmv"
        }
    ]
]);
var FileJson2$1 = FileJson2;
var FileJson = createReactComponent("FileJson", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
            key: "1oajmo"
        }
    ],
    [
        "path",
        {
            d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
            key: "mpwhp6"
        }
    ]
]);
var FileJson$1 = FileJson;
var FileKey2 = createReactComponent("FileKey2", [
    [
        "path",
        {
            d: "M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",
            key: "1nw5t3"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "16",
            r: "2",
            key: "1ehqvc"
        }
    ],
    [
        "path",
        {
            d: "m10 10-4.5 4.5",
            key: "7fwrp6"
        }
    ],
    [
        "path",
        {
            d: "m9 11 1 1",
            key: "wa6s5q"
        }
    ]
]);
var FileKey2$1 = FileKey2;
var FileKey = createReactComponent("FileKey", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "circle",
        {
            cx: "10",
            cy: "16",
            r: "2",
            key: "4ckbqe"
        }
    ],
    [
        "path",
        {
            d: "m16 10-4.5 4.5",
            key: "7p3ebg"
        }
    ],
    [
        "path",
        {
            d: "m15 11 1 1",
            key: "1bsyx3"
        }
    ]
]);
var FileKey$1 = FileKey;
var FileLineChart = createReactComponent("FileLineChart", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m16 13-3.5 3.5-2-2L8 17",
            key: "zz7yod"
        }
    ]
]);
var FileLineChart$1 = FileLineChart;
var FileLock2 = createReactComponent("FileLock2", [
    [
        "path",
        {
            d: "M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",
            key: "gwd2r9"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "13",
            width: "8",
            height: "5",
            rx: "1",
            key: "lkev2l"
        }
    ],
    [
        "path",
        {
            d: "M8 13v-2a2 2 0 1 0-4 0v2",
            key: "1pdxzg"
        }
    ]
]);
var FileLock2$1 = FileLock2;
var FileLock = createReactComponent("FileLock", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "rect",
        {
            x: "8",
            y: "12",
            width: "8",
            height: "6",
            rx: "1",
            key: "hql291"
        }
    ],
    [
        "path",
        {
            d: "M15 12v-2a3 3 0 1 0-6 0v2",
            key: "1nqnhw"
        }
    ]
]);
var FileLock$1 = FileLock;
var FileMinus2 = createReactComponent("FileMinus2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M3 15h6",
            key: "4e2qda"
        }
    ]
]);
var FileMinus2$1 = FileMinus2;
var FileMinus = createReactComponent("FileMinus", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "15",
            x2: "15",
            y2: "15",
            key: "1hgpwl"
        }
    ]
]);
var FileMinus$1 = FileMinus;
var FileOutput = createReactComponent("FileOutput", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M2 15h10",
            key: "jfw4w8"
        }
    ],
    [
        "path",
        {
            d: "m5 12-3 3 3 3",
            key: "oke12k"
        }
    ]
]);
var FileOutput$1 = FileOutput;
var FilePieChart = createReactComponent("FilePieChart", [
    [
        "path",
        {
            d: "M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3",
            key: "zhyrez"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29",
            key: "f1t5jc"
        }
    ],
    [
        "path",
        {
            d: "M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z",
            key: "7q54ec"
        }
    ]
]);
var FilePieChart$1 = FilePieChart;
var FilePlus2 = createReactComponent("FilePlus2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M3 15h6",
            key: "4e2qda"
        }
    ],
    [
        "path",
        {
            d: "M6 12v6",
            key: "1u72j0"
        }
    ]
]);
var FilePlus2$1 = FilePlus2;
var FilePlus = createReactComponent("FilePlus", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "18",
            x2: "12",
            y2: "12",
            key: "16t3gy"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "15",
            x2: "15",
            y2: "15",
            key: "1hgpwl"
        }
    ]
]);
var FilePlus$1 = FilePlus;
var FileQuestion = createReactComponent("FileQuestion", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "path",
        {
            d: "M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
            key: "1umxtm"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
var FileQuestion$1 = FileQuestion;
var FileScan = createReactComponent("FileScan", [
    [
        "path",
        {
            d: "M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5",
            key: "uvikde"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M16 22a2 2 0 0 1-2-2",
            key: "1wqh5n"
        }
    ],
    [
        "path",
        {
            d: "M20 22a2 2 0 0 0 2-2",
            key: "1l9q4k"
        }
    ],
    [
        "path",
        {
            d: "M20 14a2 2 0 0 1 2 2",
            key: "1ny6zw"
        }
    ],
    [
        "path",
        {
            d: "M16 14a2 2 0 0 0-2 2",
            key: "ceaadl"
        }
    ]
]);
var FileScan$1 = FileScan;
var FileSearch2 = createReactComponent("FileSearch2", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "11.5",
            cy: "14.5",
            r: "2.5",
            key: "1bq0ko"
        }
    ],
    [
        "path",
        {
            d: "M13.25 16.25 15 18",
            key: "9eh8bj"
        }
    ]
]);
var FileSearch2$1 = FileSearch2;
var FileSearch = createReactComponent("FileSearch", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3",
            key: "am10z3"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
            key: "ychnub"
        }
    ],
    [
        "path",
        {
            d: "m9 18-1.5-1.5",
            key: "1j6qii"
        }
    ]
]);
var FileSearch$1 = FileSearch;
var FileSignature = createReactComponent("FileSignature", [
    [
        "path",
        {
            d: "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5",
            key: "kd5d3"
        }
    ],
    [
        "path",
        {
            d: "M8 18h1",
            key: "13wk12"
        }
    ],
    [
        "path",
        {
            d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z",
            key: "johvi5"
        }
    ]
]);
var FileSignature$1 = FileSignature;
var FileSpreadsheet = createReactComponent("FileSpreadsheet", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M8 13h2",
            key: "yr2amv"
        }
    ],
    [
        "path",
        {
            d: "M8 17h2",
            key: "2yhykz"
        }
    ],
    [
        "path",
        {
            d: "M14 13h2",
            key: "un5t4a"
        }
    ],
    [
        "path",
        {
            d: "M14 17h2",
            key: "10kma7"
        }
    ]
]);
var FileSpreadsheet$1 = FileSpreadsheet;
var FileSymlink = createReactComponent("FileSymlink", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7",
            key: "138uzh"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m10 18 3-3-3-3",
            key: "18f6ys"
        }
    ],
    [
        "path",
        {
            d: "M4 18v-1a2 2 0 0 1 2-2h6",
            key: "5uz2rn"
        }
    ]
]);
var FileSymlink$1 = FileSymlink;
var FileTerminal = createReactComponent("FileTerminal", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m8 16 2-2-2-2",
            key: "10vzyd"
        }
    ],
    [
        "path",
        {
            d: "M12 18h4",
            key: "1wd2n7"
        }
    ]
]);
var FileTerminal$1 = FileTerminal;
var FileText = createReactComponent("FileText", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "13",
            x2: "8",
            y2: "13",
            key: "7g4hpw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "17",
            x2: "8",
            y2: "17",
            key: "1nzzn0"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "9",
            x2: "8",
            y2: "9",
            key: "13jkcr"
        }
    ]
]);
var FileText$1 = FileText;
var FileType2 = createReactComponent("FileType2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M2 13v-1h6v1",
            key: "1dh9dg"
        }
    ],
    [
        "path",
        {
            d: "M4 18h2",
            key: "1xrofg"
        }
    ],
    [
        "path",
        {
            d: "M5 12v6",
            key: "150t9c"
        }
    ]
]);
var FileType2$1 = FileType2;
var FileType = createReactComponent("FileType", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M9 13v-1h6v1",
            key: "1bb014"
        }
    ],
    [
        "path",
        {
            d: "M11 18h2",
            key: "12mj7e"
        }
    ],
    [
        "path",
        {
            d: "M12 12v6",
            key: "3ahymv"
        }
    ]
]);
var FileType$1 = FileType;
var FileUp = createReactComponent("FileUp", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M12 12v6",
            key: "3ahymv"
        }
    ],
    [
        "path",
        {
            d: "m15 15-3-3-3 3",
            key: "15xj92"
        }
    ]
]);
var FileUp$1 = FileUp;
var FileVideo2 = createReactComponent("FileVideo2", [
    [
        "path",
        {
            d: "M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",
            key: "1nti49"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m10 15.5 4 2.5v-6l-4 2.5",
            key: "t7cp39"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "12",
            width: "8",
            height: "6",
            rx: "1",
            key: "1fgd6b"
        }
    ]
]);
var FileVideo2$1 = FileVideo2;
var FileVideo = createReactComponent("FileVideo", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m10 11 5 3-5 3v-6Z",
            key: "7ntvm4"
        }
    ]
]);
var FileVideo$1 = FileVideo;
var FileVolume2 = createReactComponent("FileVolume2", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5",
            key: "joawwx"
        }
    ],
    [
        "path",
        {
            d: "M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3",
            key: "1f2wyw"
        }
    ],
    [
        "path",
        {
            d: "M8 15h.01",
            key: "a7atzg"
        }
    ]
]);
var FileVolume2$1 = FileVolume2;
var FileVolume = createReactComponent("FileVolume", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3",
            key: "am10z3"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m7 10-3 2H2v4h2l3 2v-8Z",
            key: "tazg57"
        }
    ],
    [
        "path",
        {
            d: "M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3",
            key: "1yej3m"
        }
    ]
]);
var FileVolume$1 = FileVolume;
var FileWarning = createReactComponent("FileWarning", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4",
            key: "juzpu7"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
var FileWarning$1 = FileWarning;
var FileX2 = createReactComponent("FileX2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "path",
        {
            d: "M14 2v6h6",
            key: "1kof46"
        }
    ],
    [
        "path",
        {
            d: "m3 12.5 5 5",
            key: "1qls4r"
        }
    ],
    [
        "path",
        {
            d: "m8 12.5-5 5",
            key: "b853mi"
        }
    ]
]);
var FileX2$1 = FileX2;
var FileX = createReactComponent("FileX", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "line",
        {
            x1: "9.5",
            y1: "12.5",
            x2: "14.5",
            y2: "17.5",
            key: "bu76mq"
        }
    ],
    [
        "line",
        {
            x1: "14.5",
            y1: "12.5",
            x2: "9.5",
            y2: "17.5",
            key: "nmydn6"
        }
    ]
]);
var FileX$1 = FileX;
var File = createReactComponent("File", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ]
]);
var File$1 = File;
var Files = createReactComponent("Files", [
    [
        "path",
        {
            d: "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z",
            key: "cennsq"
        }
    ],
    [
        "path",
        {
            d: "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8",
            key: "ms809a"
        }
    ],
    [
        "path",
        {
            d: "M15 2v5h5",
            key: "qq6kwv"
        }
    ]
]);
var Files$1 = Files;
var Film = createReactComponent("Film", [
    [
        "rect",
        {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "2.18",
            ry: "2.18",
            key: "15u6kw"
        }
    ],
    [
        "line",
        {
            x1: "7",
            y1: "2",
            x2: "7",
            y2: "22",
            key: "io8xnd"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "2",
            x2: "17",
            y2: "22",
            key: "1ewgih"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "7",
            x2: "7",
            y2: "7",
            key: "15jszs"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "17",
            x2: "7",
            y2: "17",
            key: "qjw6jy"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "17",
            x2: "22",
            y2: "17",
            key: "132yhf"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "7",
            x2: "22",
            y2: "7",
            key: "bl3oy5"
        }
    ]
]);
var Film$1 = Film;
var Filter = createReactComponent("Filter", [
    [
        "polygon",
        {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
            key: "1yg77f"
        }
    ]
]);
var Filter$1 = Filter;
var Fingerprint = createReactComponent("Fingerprint", [
    [
        "path",
        {
            d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",
            key: "1jc9o5"
        }
    ],
    [
        "path",
        {
            d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",
            key: "1mxgy1"
        }
    ],
    [
        "path",
        {
            d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
            key: "ptglia"
        }
    ],
    [
        "path",
        {
            d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
            key: "1nerag"
        }
    ],
    [
        "path",
        {
            d: "M8.65 22c.21-.66.45-1.32.57-2",
            key: "13wd9y"
        }
    ],
    [
        "path",
        {
            d: "M14 13.12c0 2.38 0 6.38-1 8.88",
            key: "o46ks0"
        }
    ],
    [
        "path",
        {
            d: "M2 16h.01",
            key: "1gqxmh"
        }
    ],
    [
        "path",
        {
            d: "M21.8 16c.2-2 .131-5.354 0-6",
            key: "drycrb"
        }
    ],
    [
        "path",
        {
            d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",
            key: "1fgabc"
        }
    ]
]);
var Fingerprint$1 = Fingerprint;
var FlagOff = createReactComponent("FlagOff", [
    [
        "path",
        {
            d: "M8 2c3 0 5 2 8 2s4-1 4-1v11",
            key: "9rwyz9"
        }
    ],
    [
        "path",
        {
            d: "M4 22V4",
            key: "1plyxx"
        }
    ],
    [
        "path",
        {
            d: "M4 15s1-1 4-1 5 2 8 2",
            key: "1myooe"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var FlagOff$1 = FlagOff;
var FlagTriangleLeft = createReactComponent("FlagTriangleLeft", [
    [
        "path",
        {
            d: "M17 22V2L7 7l10 5",
            key: "1rmf0r"
        }
    ]
]);
var FlagTriangleLeft$1 = FlagTriangleLeft;
var FlagTriangleRight = createReactComponent("FlagTriangleRight", [
    [
        "path",
        {
            d: "M7 22V2l10 5-10 5",
            key: "17n18y"
        }
    ]
]);
var FlagTriangleRight$1 = FlagTriangleRight;
var Flag = createReactComponent("Flag", [
    [
        "path",
        {
            d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
            key: "i9b6wo"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "22",
            x2: "4",
            y2: "15",
            key: "1k23bw"
        }
    ]
]);
var Flag$1 = Flag;
var Flame = createReactComponent("Flame", [
    [
        "path",
        {
            d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
            key: "96xj49"
        }
    ]
]);
var Flame$1 = Flame;
var FlashlightOff = createReactComponent("FlashlightOff", [
    [
        "path",
        {
            d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",
            key: "1r120k"
        }
    ],
    [
        "path",
        {
            d: "M7 2h11v4c0 2-2 2-2 4v1",
            key: "dz1920"
        }
    ],
    [
        "line",
        {
            x1: "11",
            y1: "6",
            x2: "18",
            y2: "6",
            key: "q6oc82"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var FlashlightOff$1 = FlashlightOff;
var Flashlight = createReactComponent("Flashlight", [
    [
        "path",
        {
            d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",
            key: "1orkel"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "6",
            key: "tmfr4k"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "12",
            x2: "12",
            y2: "12",
            key: "jyrcx7"
        }
    ]
]);
var Flashlight$1 = Flashlight;
var FlaskConical = createReactComponent("FlaskConical", [
    [
        "path",
        {
            d: "M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2",
            key: "aka69c"
        }
    ],
    [
        "path",
        {
            d: "M8.5 2h7",
            key: "csnxdl"
        }
    ],
    [
        "path",
        {
            d: "M7 16h10",
            key: "wp8him"
        }
    ]
]);
var FlaskConical$1 = FlaskConical;
var FlaskRound = createReactComponent("FlaskRound", [
    [
        "path",
        {
            d: "M10 2v7.31",
            key: "5d1hyh"
        }
    ],
    [
        "path",
        {
            d: "M14 9.3V1.99",
            key: "14k4l0"
        }
    ],
    [
        "path",
        {
            d: "M8.5 2h7",
            key: "csnxdl"
        }
    ],
    [
        "path",
        {
            d: "M14 9.3a6.5 6.5 0 1 1-4 0",
            key: "1r8fvy"
        }
    ],
    [
        "path",
        {
            d: "M5.58 16.5h12.85",
            key: "78w9cl"
        }
    ]
]);
var FlaskRound$1 = FlaskRound;
var FlipHorizontal2 = createReactComponent("FlipHorizontal2", [
    [
        "path",
        {
            d: "m3 7 5 5-5 5V7",
            key: "couhi7"
        }
    ],
    [
        "path",
        {
            d: "m21 7-5 5 5 5V7",
            key: "6ouia7"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "M12 14v2",
            key: "8jcxud"
        }
    ],
    [
        "path",
        {
            d: "M12 8v2",
            key: "1woqiv"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ]
]);
var FlipHorizontal2$1 = FlipHorizontal2;
var FlipHorizontal = createReactComponent("FlipHorizontal", [
    [
        "path",
        {
            d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",
            key: "1i73f7"
        }
    ],
    [
        "path",
        {
            d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",
            key: "saxlbk"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "M12 14v2",
            key: "8jcxud"
        }
    ],
    [
        "path",
        {
            d: "M12 8v2",
            key: "1woqiv"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ]
]);
var FlipHorizontal$1 = FlipHorizontal;
var FlipVertical2 = createReactComponent("FlipVertical2", [
    [
        "path",
        {
            d: "m17 3-5 5-5-5h10",
            key: "1ftt6x"
        }
    ],
    [
        "path",
        {
            d: "m17 21-5-5-5 5h10",
            key: "1m0wmu"
        }
    ],
    [
        "path",
        {
            d: "M4 12H2",
            key: "rhcxmi"
        }
    ],
    [
        "path",
        {
            d: "M10 12H8",
            key: "s88cx1"
        }
    ],
    [
        "path",
        {
            d: "M16 12h-2",
            key: "10asgb"
        }
    ],
    [
        "path",
        {
            d: "M22 12h-2",
            key: "14jgyd"
        }
    ]
]);
var FlipVertical2$1 = FlipVertical2;
var FlipVertical = createReactComponent("FlipVertical", [
    [
        "path",
        {
            d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",
            key: "14bfxa"
        }
    ],
    [
        "path",
        {
            d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",
            key: "14rx03"
        }
    ],
    [
        "path",
        {
            d: "M4 12H2",
            key: "rhcxmi"
        }
    ],
    [
        "path",
        {
            d: "M10 12H8",
            key: "s88cx1"
        }
    ],
    [
        "path",
        {
            d: "M16 12h-2",
            key: "10asgb"
        }
    ],
    [
        "path",
        {
            d: "M22 12h-2",
            key: "14jgyd"
        }
    ]
]);
var FlipVertical$1 = FlipVertical;
var Flower2 = createReactComponent("Flower2", [
    [
        "path",
        {
            d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
            key: "3pnvol"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "8",
            r: "2",
            key: "1822b1"
        }
    ],
    [
        "path",
        {
            d: "M12 10v12",
            key: "6ubwww"
        }
    ],
    [
        "path",
        {
            d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",
            key: "9hd38g"
        }
    ],
    [
        "path",
        {
            d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",
            key: "ufn41s"
        }
    ]
]);
var Flower2$1 = Flower2;
var Flower = createReactComponent("Flower", [
    [
        "path",
        {
            d: "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15",
            key: "51z86h"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ],
    [
        "path",
        {
            d: "m8 16 1.5-1.5",
            key: "ce6zph"
        }
    ],
    [
        "path",
        {
            d: "M14.5 9.5 16 8",
            key: "1kzrzb"
        }
    ],
    [
        "path",
        {
            d: "m8 8 1.5 1.5",
            key: "1yv88w"
        }
    ],
    [
        "path",
        {
            d: "M14.5 14.5 16 16",
            key: "12xhjh"
        }
    ]
]);
var Flower$1 = Flower;
var Focus = createReactComponent("Focus", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ],
    [
        "path",
        {
            d: "M3 7V5a2 2 0 0 1 2-2h2",
            key: "aa7l1z"
        }
    ],
    [
        "path",
        {
            d: "M17 3h2a2 2 0 0 1 2 2v2",
            key: "4qcy5o"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2h-2",
            key: "6vwrx8"
        }
    ],
    [
        "path",
        {
            d: "M7 21H5a2 2 0 0 1-2-2v-2",
            key: "ioqczr"
        }
    ]
]);
var Focus$1 = Focus;
var FolderArchive = createReactComponent("FolderArchive", [
    [
        "path",
        {
            d: "M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6",
            key: "1l0vpk"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "19",
            r: "2",
            key: "1uwppb"
        }
    ],
    [
        "path",
        {
            d: "M16 11v-1",
            key: "eoyjtm"
        }
    ],
    [
        "path",
        {
            d: "M16 17v-2",
            key: "1xp69b"
        }
    ]
]);
var FolderArchive$1 = FolderArchive;
var FolderCheck = createReactComponent("FolderCheck", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "path",
        {
            d: "m9 13 2 2 4-4",
            key: "6343dt"
        }
    ]
]);
var FolderCheck$1 = FolderCheck;
var FolderClock = createReactComponent("FolderClock", [
    [
        "path",
        {
            d: "M7 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2",
            key: "1p0xo9"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "16",
            r: "6",
            key: "qoo3c4"
        }
    ],
    [
        "path",
        {
            d: "M16 14v2l1 1",
            key: "xth2jh"
        }
    ]
]);
var FolderClock$1 = FolderClock;
var FolderClosed = createReactComponent("FolderClosed", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "path",
        {
            d: "M2 10h20",
            key: "1ir3d8"
        }
    ]
]);
var FolderClosed$1 = FolderClosed;
var FolderCog2 = createReactComponent("FolderCog2", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "2",
            key: "1c1ljs"
        }
    ],
    [
        "path",
        {
            d: "M12 10v1",
            key: "ngorzm"
        }
    ],
    [
        "path",
        {
            d: "M12 15v1",
            key: "1ovrzm"
        }
    ],
    [
        "path",
        {
            d: "m14.6 11.5-.87.5",
            key: "zm6w6e"
        }
    ],
    [
        "path",
        {
            d: "m10.27 14-.87.5",
            key: "idea33"
        }
    ],
    [
        "path",
        {
            d: "m14.6 14.5-.87-.5",
            key: "1ii18h"
        }
    ],
    [
        "path",
        {
            d: "m10.27 12-.87-.5",
            key: "tf2vd0"
        }
    ]
]);
var FolderCog2$1 = FolderCog2;
var FolderCog = createReactComponent("FolderCog", [
    [
        "path",
        {
            d: "M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3",
            key: "1g1zaq"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "path",
        {
            d: "M18 14v1",
            key: "1sx9hk"
        }
    ],
    [
        "path",
        {
            d: "M18 21v1",
            key: "pviwm2"
        }
    ],
    [
        "path",
        {
            d: "M22 18h-1",
            key: "phgwqy"
        }
    ],
    [
        "path",
        {
            d: "M15 18h-1",
            key: "1v9fvv"
        }
    ],
    [
        "path",
        {
            d: "m21 15-.88.88",
            key: "13nfy4"
        }
    ],
    [
        "path",
        {
            d: "M15.88 20.12 15 21",
            key: "qplfkl"
        }
    ],
    [
        "path",
        {
            d: "m21 21-.88-.88",
            key: "1ryrr1"
        }
    ],
    [
        "path",
        {
            d: "M15.88 15.88 15 15",
            key: "4terp3"
        }
    ]
]);
var FolderCog$1 = FolderCog;
var FolderDown = createReactComponent("FolderDown", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "path",
        {
            d: "M12 10v6",
            key: "1bos4e"
        }
    ],
    [
        "path",
        {
            d: "m15 13-3 3-3-3",
            key: "6j2sf0"
        }
    ]
]);
var FolderDown$1 = FolderDown;
var FolderEdit = createReactComponent("FolderEdit", [
    [
        "path",
        {
            d: "M8.42 10.61a2.1 2.1 0 1 1 2.97 2.97L5.95 19 2 20l.99-3.95 5.43-5.44Z",
            key: "o1ah0z"
        }
    ],
    [
        "path",
        {
            d: "M2 11.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",
            key: "bim890"
        }
    ]
]);
var FolderEdit$1 = FolderEdit;
var FolderHeart = createReactComponent("FolderHeart", [
    [
        "path",
        {
            d: "M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v1.5",
            key: "zoglpu"
        }
    ],
    [
        "path",
        {
            d: "M21.29 13.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 21l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
            key: "2tfff6"
        }
    ]
]);
var FolderHeart$1 = FolderHeart;
var FolderInput = createReactComponent("FolderInput", [
    [
        "path",
        {
            d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
            key: "1gu97c"
        }
    ],
    [
        "path",
        {
            d: "M2 13h10",
            key: "pgb2dq"
        }
    ],
    [
        "path",
        {
            d: "m9 16 3-3-3-3",
            key: "6m91ic"
        }
    ]
]);
var FolderInput$1 = FolderInput;
var FolderKey = createReactComponent("FolderKey", [
    [
        "path",
        {
            d: "M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2",
            key: "203odn"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "20",
            r: "2",
            key: "1vifvg"
        }
    ],
    [
        "path",
        {
            d: "m22 14-4.5 4.5",
            key: "1ef6z8"
        }
    ],
    [
        "path",
        {
            d: "m21 15 1 1",
            key: "1ejcpy"
        }
    ]
]);
var FolderKey$1 = FolderKey;
var FolderLock = createReactComponent("FolderLock", [
    [
        "path",
        {
            d: "M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2.5",
            key: "1ivsx8"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "17",
            width: "8",
            height: "5",
            rx: "1",
            key: "15pjcy"
        }
    ],
    [
        "path",
        {
            d: "M20 17v-2a2 2 0 1 0-4 0v2",
            key: "pwaxnr"
        }
    ]
]);
var FolderLock$1 = FolderLock;
var FolderMinus = createReactComponent("FolderMinus", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "13",
            x2: "15",
            y2: "13",
            key: "1nzi25"
        }
    ]
]);
var FolderMinus$1 = FolderMinus;
var FolderOpen = createReactComponent("FolderOpen", [
    [
        "path",
        {
            d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",
            key: "1nmvlm"
        }
    ]
]);
var FolderOpen$1 = FolderOpen;
var FolderOutput = createReactComponent("FolderOutput", [
    [
        "path",
        {
            d: "M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",
            key: "jm8npq"
        }
    ],
    [
        "path",
        {
            d: "M2 13h10",
            key: "pgb2dq"
        }
    ],
    [
        "path",
        {
            d: "m5 10-3 3 3 3",
            key: "1r8ie0"
        }
    ]
]);
var FolderOutput$1 = FolderOutput;
var FolderPlus = createReactComponent("FolderPlus", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "10",
            x2: "12",
            y2: "16",
            key: "1fgwrs"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "13",
            x2: "15",
            y2: "13",
            key: "1nzi25"
        }
    ]
]);
var FolderPlus$1 = FolderPlus;
var FolderSearch2 = createReactComponent("FolderSearch2", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "circle",
        {
            cx: "11.5",
            cy: "12.5",
            r: "2.5",
            key: "1ea5ju"
        }
    ],
    [
        "path",
        {
            d: "M13.27 14.27 15 16",
            key: "5hsvtf"
        }
    ]
]);
var FolderSearch2$1 = FolderSearch2;
var FolderSearch = createReactComponent("FolderSearch", [
    [
        "path",
        {
            d: "M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v4",
            key: "1moo03"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "17",
            r: "3",
            key: "18b49y"
        }
    ],
    [
        "path",
        {
            d: "m21 21-1.5-1.5",
            key: "3sg1j"
        }
    ]
]);
var FolderSearch$1 = FolderSearch;
var FolderSymlink = createReactComponent("FolderSymlink", [
    [
        "path",
        {
            d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",
            key: "1or2t8"
        }
    ],
    [
        "path",
        {
            d: "m8 16 3-3-3-3",
            key: "rlqrt1"
        }
    ],
    [
        "path",
        {
            d: "M2 16v-1a2 2 0 0 1 2-2h6",
            key: "pgw8ln"
        }
    ]
]);
var FolderSymlink$1 = FolderSymlink;
var FolderTree = createReactComponent("FolderTree", [
    [
        "path",
        {
            d: "M13 10h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
            key: "10jzg2"
        }
    ],
    [
        "path",
        {
            d: "M13 21h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.88a1 1 0 0 1-.9-.55l-.44-.9a1 1 0 0 0-.9-.55H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
            key: "1b9nqm"
        }
    ],
    [
        "path",
        {
            d: "M3 3v2c0 1.1.9 2 2 2h3",
            key: "1wqwis"
        }
    ],
    [
        "path",
        {
            d: "M3 3v13c0 1.1.9 2 2 2h3",
            key: "1bqeom"
        }
    ]
]);
var FolderTree$1 = FolderTree;
var FolderUp = createReactComponent("FolderUp", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "path",
        {
            d: "M12 10v6",
            key: "1bos4e"
        }
    ],
    [
        "path",
        {
            d: "m9 13 3-3 3 3",
            key: "1pxg3c"
        }
    ]
]);
var FolderUp$1 = FolderUp;
var FolderX = createReactComponent("FolderX", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "path",
        {
            d: "m9.5 10.5 5 5",
            key: "ra9qjz"
        }
    ],
    [
        "path",
        {
            d: "m14.5 10.5-5 5",
            key: "l2rkpq"
        }
    ]
]);
var FolderX$1 = FolderX;
var Folder = createReactComponent("Folder", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ]
]);
var Folder$1 = Folder;
var Folders = createReactComponent("Folders", [
    [
        "path",
        {
            d: "M8 17h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.93a2 2 0 0 1-1.66-.9l-.82-1.2a2 2 0 0 0-1.66-.9H8a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2Z",
            key: "1aska4"
        }
    ],
    [
        "path",
        {
            d: "M2 8v11c0 1.1.9 2 2 2h14",
            key: "n13cji"
        }
    ]
]);
var Folders$1 = Folders;
var FormInput = createReactComponent("FormInput", [
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "20",
            height: "12",
            rx: "2",
            key: "1wpnh2"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.01",
            key: "1mp3jc"
        }
    ],
    [
        "path",
        {
            d: "M17 12h.01",
            key: "1m0b6t"
        }
    ],
    [
        "path",
        {
            d: "M7 12h.01",
            key: "eqddd0"
        }
    ]
]);
var FormInput$1 = FormInput;
var Forward = createReactComponent("Forward", [
    [
        "polyline",
        {
            points: "15 17 20 12 15 7",
            key: "1w3sku"
        }
    ],
    [
        "path",
        {
            d: "M4 18v-2a4 4 0 0 1 4-4h12",
            key: "jmiej9"
        }
    ]
]);
var Forward$1 = Forward;
var Frame = createReactComponent("Frame", [
    [
        "line",
        {
            x1: "22",
            y1: "6",
            x2: "2",
            y2: "6",
            key: "181agm"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "18",
            x2: "2",
            y2: "18",
            key: "12x4ne"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "2",
            x2: "6",
            y2: "22",
            key: "gjs6u1"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "2",
            x2: "18",
            y2: "22",
            key: "1hbgm0"
        }
    ]
]);
var Frame$1 = Frame;
var Framer = createReactComponent("Framer", [
    [
        "path",
        {
            d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",
            key: "1a2nng"
        }
    ]
]);
var Framer$1 = Framer;
var Frown = createReactComponent("Frown", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M16 16s-1.5-2-4-2-4 2-4 2",
            key: "epbg0q"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
            key: "141aaf"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
            key: "1cyg3o"
        }
    ]
]);
var Frown$1 = Frown;
var Fuel = createReactComponent("Fuel", [
    [
        "line",
        {
            x1: "3",
            y1: "22",
            x2: "15",
            y2: "22",
            key: "fc344c"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "9",
            x2: "14",
            y2: "9",
            key: "htzs8q"
        }
    ],
    [
        "path",
        {
            d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",
            key: "16j0yd"
        }
    ],
    [
        "path",
        {
            d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
            key: "8ur5zv"
        }
    ]
]);
var Fuel$1 = Fuel;
var FunctionSquare = createReactComponent("FunctionSquare", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",
            key: "m1af9g"
        }
    ],
    [
        "path",
        {
            d: "M9 11.2h5.7",
            key: "3zgcl2"
        }
    ]
]);
var FunctionSquare$1 = FunctionSquare;
var Gamepad2 = createReactComponent("Gamepad2", [
    [
        "line",
        {
            x1: "6",
            y1: "11",
            x2: "10",
            y2: "11",
            key: "19tls9"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "9",
            x2: "8",
            y2: "13",
            key: "6w9cvk"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "12",
            x2: "15.01",
            y2: "12",
            key: "abmwhw"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "10",
            x2: "18.01",
            y2: "10",
            key: "19ehlv"
        }
    ],
    [
        "path",
        {
            d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
            key: "mfqc10"
        }
    ]
]);
var Gamepad2$1 = Gamepad2;
var Gamepad = createReactComponent("Gamepad", [
    [
        "line",
        {
            x1: "6",
            y1: "12",
            x2: "10",
            y2: "12",
            key: "xg250c"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "10",
            x2: "8",
            y2: "14",
            key: "1cn0zn"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "13",
            x2: "15.01",
            y2: "13",
            key: "1pybt0"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "11",
            x2: "18.01",
            y2: "11",
            key: "147dzq"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "20",
            height: "12",
            rx: "2",
            key: "1wpnh2"
        }
    ]
]);
var Gamepad$1 = Gamepad;
var Gauge = createReactComponent("Gauge", [
    [
        "path",
        {
            d: "m12 15 3.5-3.5",
            key: "1sfa3b"
        }
    ],
    [
        "path",
        {
            d: "M20.3 18c.4-1 .7-2.2.7-3.4C21 9.8 17 6 12 6s-9 3.8-9 8.6c0 1.2.3 2.4.7 3.4",
            key: "rcs43o"
        }
    ]
]);
var Gauge$1 = Gauge;
var Gavel = createReactComponent("Gavel", [
    [
        "path",
        {
            d: "m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10",
            key: "c9cbz0"
        }
    ],
    [
        "path",
        {
            d: "m16 16 6-6",
            key: "vzrcl6"
        }
    ],
    [
        "path",
        {
            d: "m8 8 6-6",
            key: "18bi4p"
        }
    ],
    [
        "path",
        {
            d: "m9 7 8 8",
            key: "5jnvq1"
        }
    ],
    [
        "path",
        {
            d: "m21 11-8-8",
            key: "z4y7zo"
        }
    ]
]);
var Gavel$1 = Gavel;
var Gem = createReactComponent("Gem", [
    [
        "polygon",
        {
            points: "6 3 18 3 22 9 12 22 2 9",
            key: "1kbvml"
        }
    ],
    [
        "path",
        {
            d: "m12 22 4-13-3-6",
            key: "19hoeh"
        }
    ],
    [
        "path",
        {
            d: "M12 22 8 9l3-6",
            key: "1klo0r"
        }
    ],
    [
        "path",
        {
            d: "M2 9h20",
            key: "16fsjt"
        }
    ]
]);
var Gem$1 = Gem;
var Ghost = createReactComponent("Ghost", [
    [
        "path",
        {
            d: "M9 10h.01",
            key: "qbtxuw"
        }
    ],
    [
        "path",
        {
            d: "M15 10h.01",
            key: "1qmjsl"
        }
    ],
    [
        "path",
        {
            d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
            key: "uwwb07"
        }
    ]
]);
var Ghost$1 = Ghost;
var Gift = createReactComponent("Gift", [
    [
        "polyline",
        {
            points: "20 12 20 22 4 22 4 12",
            key: "nda8fc"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "20",
            height: "5",
            key: "1k9o8g"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "7",
            key: "1tigeq"
        }
    ],
    [
        "path",
        {
            d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",
            key: "zighg4"
        }
    ],
    [
        "path",
        {
            d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",
            key: "1pa5tk"
        }
    ]
]);
var Gift$1 = Gift;
var GitBranchPlus = createReactComponent("GitBranchPlus", [
    [
        "path",
        {
            d: "M6 3v12",
            key: "qpgusn"
        }
    ],
    [
        "path",
        {
            d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
            key: "1d02ji"
        }
    ],
    [
        "path",
        {
            d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
            key: "chk6ph"
        }
    ],
    [
        "path",
        {
            d: "M15 6a9 9 0 0 0-9 9",
            key: "or332x"
        }
    ],
    [
        "path",
        {
            d: "M18 15v6",
            key: "9wciyi"
        }
    ],
    [
        "path",
        {
            d: "M21 18h-6",
            key: "139f0c"
        }
    ]
]);
var GitBranchPlus$1 = GitBranchPlus;
var GitBranch = createReactComponent("GitBranch", [
    [
        "line",
        {
            x1: "6",
            y1: "3",
            x2: "6",
            y2: "15",
            key: "1o40i7"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "6",
            r: "3",
            key: "1h7g24"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }
    ],
    [
        "path",
        {
            d: "M18 9a9 9 0 0 1-9 9",
            key: "n2h4wq"
        }
    ]
]);
var GitBranch$1 = GitBranch;
var GitCommit = createReactComponent("GitCommit", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "12",
            x2: "9",
            y2: "12",
            key: "1vg2s9"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "fnrdho"
        }
    ]
]);
var GitCommit$1 = GitCommit;
var GitCompare = createReactComponent("GitCompare", [
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M13 6h3a2 2 0 0 1 2 2v7",
            key: "1yeb86"
        }
    ],
    [
        "path",
        {
            d: "M11 18H8a2 2 0 0 1-2-2V9",
            key: "19pyzm"
        }
    ]
]);
var GitCompare$1 = GitCompare;
var GitFork = createReactComponent("GitFork", [
    [
        "circle",
        {
            cx: "12",
            cy: "18",
            r: "3",
            key: "1mpf1b"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "6",
            r: "3",
            key: "1h7g24"
        }
    ],
    [
        "path",
        {
            d: "M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9",
            key: "c89w8i"
        }
    ],
    [
        "path",
        {
            d: "M12 12v3",
            key: "158kv8"
        }
    ]
]);
var GitFork$1 = GitFork;
var GitMerge = createReactComponent("GitMerge", [
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M6 21V9a9 9 0 0 0 9 9",
            key: "7kw0sc"
        }
    ]
]);
var GitMerge$1 = GitMerge;
var GitPullRequestClosed = createReactComponent("GitPullRequestClosed", [
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M18 11.5V15",
            key: "65xf6f"
        }
    ],
    [
        "path",
        {
            d: "m21 3-6 6",
            key: "16nqsk"
        }
    ],
    [
        "path",
        {
            d: "m21 9-6-6",
            key: "9j17rh"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "9",
            x2: "6",
            y2: "21",
            key: "79th4h"
        }
    ]
]);
var GitPullRequestClosed$1 = GitPullRequestClosed;
var GitPullRequestDraft = createReactComponent("GitPullRequestDraft", [
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M18 6V5",
            key: "1oao2s"
        }
    ],
    [
        "path",
        {
            d: "M18 11v-1",
            key: "11c8tz"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "9",
            x2: "6",
            y2: "21",
            key: "79th4h"
        }
    ]
]);
var GitPullRequestDraft$1 = GitPullRequestDraft;
var GitPullRequest = createReactComponent("GitPullRequest", [
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M13 6h3a2 2 0 0 1 2 2v7",
            key: "1yeb86"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "9",
            x2: "6",
            y2: "21",
            key: "79th4h"
        }
    ]
]);
var GitPullRequest$1 = GitPullRequest;
var Github = createReactComponent("Github", [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }
    ],
    [
        "path",
        {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }
    ]
]);
var Github$1 = Github;
var Gitlab = createReactComponent("Gitlab", [
    [
        "path",
        {
            d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",
            key: "148pdi"
        }
    ]
]);
var Gitlab$1 = Gitlab;
var GlassWater = createReactComponent("GlassWater", [
    [
        "path",
        {
            d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",
            key: "48rfw3"
        }
    ],
    [
        "path",
        {
            d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",
            key: "mjntcy"
        }
    ]
]);
var GlassWater$1 = GlassWater;
var Glasses = createReactComponent("Glasses", [
    [
        "circle",
        {
            cx: "6",
            cy: "15",
            r: "4",
            key: "vux9w4"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "15",
            r: "4",
            key: "18o8ve"
        }
    ],
    [
        "path",
        {
            d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",
            key: "1ag4bs"
        }
    ],
    [
        "path",
        {
            d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2",
            key: "1hm1gs"
        }
    ],
    [
        "path",
        {
            d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2",
            key: "1r31ai"
        }
    ]
]);
var Glasses$1 = Glasses;
var Globe2 = createReactComponent("Globe2", [
    [
        "path",
        {
            d: "M15 21v-4a2 2 0 0 1 2-2h4",
            key: "29t6hq"
        }
    ],
    [
        "path",
        {
            d: "M7 4v2a3 3 0 0 0 3 2h0a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h3",
            key: "1q8o6e"
        }
    ],
    [
        "path",
        {
            d: "M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v4",
            key: "10po7j"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
]);
var Globe2$1 = Globe2;
var Globe = createReactComponent("Globe", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ],
    [
        "path",
        {
            d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
            key: "nb9nel"
        }
    ]
]);
var Globe$1 = Globe;
var Grab = createReactComponent("Grab", [
    [
        "path",
        {
            d: "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",
            key: "n5nng"
        }
    ],
    [
        "path",
        {
            d: "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",
            key: "185i9d"
        }
    ],
    [
        "path",
        {
            d: "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",
            key: "11pz95"
        }
    ],
    [
        "path",
        {
            d: "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",
            key: "16yk7l"
        }
    ],
    [
        "path",
        {
            d: "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",
            key: "nzvb1c"
        }
    ]
]);
var Grab$1 = Grab;
var GraduationCap = createReactComponent("GraduationCap", [
    [
        "path",
        {
            d: "M22 10v6M2 10l10-5 10 5-10 5z",
            key: "1ef52a"
        }
    ],
    [
        "path",
        {
            d: "M6 12v5c3 3 9 3 12 0v-5",
            key: "1f75yj"
        }
    ]
]);
var GraduationCap$1 = GraduationCap;
var Grape = createReactComponent("Grape", [
    [
        "path",
        {
            d: "M22 5V2l-5.89 5.89",
            key: "1eenpo"
        }
    ],
    [
        "circle",
        {
            cx: "16.6",
            cy: "15.89",
            r: "3",
            key: "xjtalx"
        }
    ],
    [
        "circle",
        {
            cx: "8.11",
            cy: "7.4",
            r: "3",
            key: "u2fv6i"
        }
    ],
    [
        "circle",
        {
            cx: "12.35",
            cy: "11.65",
            r: "3",
            key: "i6i8g7"
        }
    ],
    [
        "circle",
        {
            cx: "13.91",
            cy: "5.85",
            r: "3",
            key: "6ye0dv"
        }
    ],
    [
        "circle",
        {
            cx: "18.15",
            cy: "10.09",
            r: "3",
            key: "snx9no"
        }
    ],
    [
        "circle",
        {
            cx: "6.56",
            cy: "13.2",
            r: "3",
            key: "17x4xg"
        }
    ],
    [
        "circle",
        {
            cx: "10.8",
            cy: "17.44",
            r: "3",
            key: "1hogw9"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "19",
            r: "3",
            key: "1sn6vo"
        }
    ]
]);
var Grape$1 = Grape;
var Grid = createReactComponent("Grid", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "9",
            x2: "21",
            y2: "9",
            key: "1uch6j"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "15",
            x2: "21",
            y2: "15",
            key: "1xojw2"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "3",
            x2: "9",
            y2: "21",
            key: "nvcl17"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "3",
            x2: "15",
            y2: "21",
            key: "jcv93v"
        }
    ]
]);
var Grid$1 = Grid;
var GripHorizontal = createReactComponent("GripHorizontal", [
    [
        "circle",
        {
            cx: "12",
            cy: "9",
            r: "1",
            key: "124mty"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "9",
            r: "1",
            key: "1ruzo2"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "9",
            r: "1",
            key: "1a8b28"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "15",
            r: "1",
            key: "1e56xg"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "15",
            r: "1",
            key: "1a92ep"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "15",
            r: "1",
            key: "5r1jwy"
        }
    ]
]);
var GripHorizontal$1 = GripHorizontal;
var GripVertical = createReactComponent("GripVertical", [
    [
        "circle",
        {
            cx: "9",
            cy: "12",
            r: "1",
            key: "1vctgf"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "5",
            r: "1",
            key: "hp0tcf"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "19",
            r: "1",
            key: "fkjjf6"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "12",
            r: "1",
            key: "1tmaij"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "5",
            r: "1",
            key: "19l28e"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "19",
            r: "1",
            key: "f4zoj3"
        }
    ]
]);
var GripVertical$1 = GripVertical;
var Hammer = createReactComponent("Hammer", [
    [
        "path",
        {
            d: "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",
            key: "1afvon"
        }
    ],
    [
        "path",
        {
            d: "M17.64 15 22 10.64",
            key: "zsji6s"
        }
    ],
    [
        "path",
        {
            d: "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",
            key: "lehyy1"
        }
    ]
]);
var Hammer$1 = Hammer;
var HandMetal = createReactComponent("HandMetal", [
    [
        "path",
        {
            d: "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",
            key: "7eki13"
        }
    ],
    [
        "path",
        {
            d: "M14 11V9a2 2 0 1 0-4 0v2",
            key: "94qvcw"
        }
    ],
    [
        "path",
        {
            d: "M10 10.5V5a2 2 0 1 0-4 0v9",
            key: "m1ah89"
        }
    ],
    [
        "path",
        {
            d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",
            key: "t1skq1"
        }
    ]
]);
var HandMetal$1 = HandMetal;
var Hand = createReactComponent("Hand", [
    [
        "path",
        {
            d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",
            key: "aigmz7"
        }
    ],
    [
        "path",
        {
            d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",
            key: "1n6bmn"
        }
    ],
    [
        "path",
        {
            d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",
            key: "a9iiix"
        }
    ],
    [
        "path",
        {
            d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
            key: "1s1gnw"
        }
    ]
]);
var Hand$1 = Hand;
var HardDrive = createReactComponent("HardDrive", [
    [
        "line",
        {
            x1: "22",
            y1: "12",
            x2: "2",
            y2: "12",
            key: "3mrjqx"
        }
    ],
    [
        "path",
        {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "16",
            x2: "6.01",
            y2: "16",
            key: "17k2t0"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "16",
            x2: "10.01",
            y2: "16",
            key: "1oplzg"
        }
    ]
]);
var HardDrive$1 = HardDrive;
var HardHat = createReactComponent("HardHat", [
    [
        "path",
        {
            d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",
            key: "1dej2m"
        }
    ],
    [
        "path",
        {
            d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",
            key: "1p9q5i"
        }
    ],
    [
        "path",
        {
            d: "M4 15v-3a6 6 0 0 1 6-6h0",
            key: "1uc279"
        }
    ],
    [
        "path",
        {
            d: "M14 6h0a6 6 0 0 1 6 6v3",
            key: "1j9mnm"
        }
    ]
]);
var HardHat$1 = HardHat;
var Hash = createReactComponent("Hash", [
    [
        "line",
        {
            x1: "4",
            y1: "9",
            x2: "20",
            y2: "9",
            key: "vg9vz1"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "15",
            x2: "20",
            y2: "15",
            key: "12vs86"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "3",
            x2: "8",
            y2: "21",
            key: "18wc2u"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "3",
            x2: "14",
            y2: "21",
            key: "ohqwl5"
        }
    ]
]);
var Hash$1 = Hash;
var Haze = createReactComponent("Haze", [
    [
        "path",
        {
            d: "m5.2 6.2 1.4 1.4",
            key: "17imol"
        }
    ],
    [
        "path",
        {
            d: "M2 13h2",
            key: "13gyu8"
        }
    ],
    [
        "path",
        {
            d: "M20 13h2",
            key: "16rner"
        }
    ],
    [
        "path",
        {
            d: "m17.4 7.6 1.4-1.4",
            key: "t4xlah"
        }
    ],
    [
        "path",
        {
            d: "M22 17H2",
            key: "1gtaj3"
        }
    ],
    [
        "path",
        {
            d: "M22 21H2",
            key: "1gy6en"
        }
    ],
    [
        "path",
        {
            d: "M16 13a4 4 0 0 0-8 0",
            key: "1dyczq"
        }
    ],
    [
        "path",
        {
            d: "M12 5V2.5",
            key: "1vytko"
        }
    ]
]);
var Haze$1 = Haze;
var Headphones = createReactComponent("Headphones", [
    [
        "path",
        {
            d: "M3 18v-6a9 9 0 0 1 18 0v6",
            key: "e2ovd"
        }
    ],
    [
        "path",
        {
            d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z",
            key: "110y4r"
        }
    ]
]);
var Headphones$1 = Headphones;
var HeartCrack = createReactComponent("HeartCrack", [
    [
        "path",
        {
            d: "M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z",
            key: "3q7jk9"
        }
    ],
    [
        "path",
        {
            d: "m12 13-1-1 2-2-3-2.5 2.77-2.92",
            key: "5oba2v"
        }
    ]
]);
var HeartCrack$1 = HeartCrack;
var HeartHandshake = createReactComponent("HeartHandshake", [
    [
        "path",
        {
            d: "M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z",
            key: "3q7jk9"
        }
    ],
    [
        "path",
        {
            d: "M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a3 3 0 0 1 4.22 0l2.4 2.4",
            key: "t2xyyg"
        }
    ],
    [
        "path",
        {
            d: "m18 15-2-2",
            key: "60u0ii"
        }
    ],
    [
        "path",
        {
            d: "m15 18-2-2",
            key: "6p76be"
        }
    ]
]);
var HeartHandshake$1 = HeartHandshake;
var HeartOff = createReactComponent("HeartOff", [
    [
        "path",
        {
            d: "M4.12 4.107a5.4 5.4 0 0 0-.538.473C1.46 6.7 1.33 10.28 4 13l8 8 4.5-4.5",
            key: "yskeks"
        }
    ],
    [
        "path",
        {
            d: "M19.328 13.672 20 13c2.67-2.72 2.54-6.3.42-8.42a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-2.386-1.393",
            key: "1340qr"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var HeartOff$1 = HeartOff;
var HeartPulse = createReactComponent("HeartPulse", [
    [
        "path",
        {
            d: "M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z",
            key: "3q7jk9"
        }
    ],
    [
        "path",
        {
            d: "M3.5 12h6l.5-1 2 4.5 2-7 1.5 3.5h5",
            key: "rc0z4z"
        }
    ]
]);
var HeartPulse$1 = HeartPulse;
var Heart = createReactComponent("Heart", [
    [
        "path",
        {
            d: "M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z",
            key: "3q7jk9"
        }
    ]
]);
var Heart$1 = Heart;
var HelpCircle = createReactComponent("HelpCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
            key: "1u773s"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "17",
            x2: "12.01",
            y2: "17",
            key: "kdstpg"
        }
    ]
]);
var HelpCircle$1 = HelpCircle;
var Hexagon = createReactComponent("Hexagon", [
    [
        "path",
        {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
            key: "yt0hxn"
        }
    ]
]);
var Hexagon$1 = Hexagon;
var Highlighter = createReactComponent("Highlighter", [
    [
        "path",
        {
            d: "m9 11-6 6v3h9l3-3",
            key: "1a3l36"
        }
    ],
    [
        "path",
        {
            d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",
            key: "14a9rk"
        }
    ]
]);
var Highlighter$1 = Highlighter;
var History = createReactComponent("History", [
    [
        "path",
        {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }
    ],
    [
        "path",
        {
            d: "M3.05 13A9 9 0 1 0 6 5.3L3 8",
            key: "1xoms2"
        }
    ],
    [
        "path",
        {
            d: "M12 7v5l4 2",
            key: "1fdv2h"
        }
    ]
]);
var History$1 = History;
var Home = createReactComponent("Home", [
    [
        "path",
        {
            d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "y5dka4"
        }
    ],
    [
        "polyline",
        {
            points: "9 22 9 12 15 12 15 22",
            key: "e2us08"
        }
    ]
]);
var Home$1 = Home;
var Hourglass = createReactComponent("Hourglass", [
    [
        "path",
        {
            d: "M5 22h14",
            key: "ehvnwv"
        }
    ],
    [
        "path",
        {
            d: "M5 2h14",
            key: "pdyrp9"
        }
    ],
    [
        "path",
        {
            d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
            key: "1d314k"
        }
    ],
    [
        "path",
        {
            d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",
            key: "1vvvr6"
        }
    ]
]);
var Hourglass$1 = Hourglass;
var IceCream = createReactComponent("IceCream", [
    [
        "path",
        {
            d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",
            key: "1v6356"
        }
    ],
    [
        "path",
        {
            d: "M17 7A5 5 0 0 0 7 7",
            key: "151p3v"
        }
    ],
    [
        "path",
        {
            d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",
            key: "1sdaij"
        }
    ]
]);
var IceCream$1 = IceCream;
var ImageMinus = createReactComponent("ImageMinus", [
    [
        "path",
        {
            d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
            key: "m87ecr"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "5",
            x2: "22",
            y2: "5",
            key: "c5ve4s"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }
    ],
    [
        "path",
        {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }
    ]
]);
var ImageMinus$1 = ImageMinus;
var ImageOff = createReactComponent("ImageOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "path",
        {
            d: "M10.41 10.41a2 2 0 1 1-2.83-2.83",
            key: "1bzlo9"
        }
    ],
    [
        "line",
        {
            x1: "13.5",
            y1: "13.5",
            x2: "6",
            y2: "21",
            key: "1oc4ns"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "12",
            x2: "21",
            y2: "15",
            key: "1j50dh"
        }
    ],
    [
        "path",
        {
            d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
            key: "mmje98"
        }
    ],
    [
        "path",
        {
            d: "M21 15V5a2 2 0 0 0-2-2H9",
            key: "43el77"
        }
    ]
]);
var ImageOff$1 = ImageOff;
var ImagePlus = createReactComponent("ImagePlus", [
    [
        "path",
        {
            d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
            key: "31hg93"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "5",
            x2: "22",
            y2: "5",
            key: "c5ve4s"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "2",
            x2: "19",
            y2: "8",
            key: "12oc9j"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }
    ],
    [
        "path",
        {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }
    ]
]);
var ImagePlus$1 = ImagePlus;
var Image = createReactComponent("Image", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }
    ],
    [
        "path",
        {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }
    ]
]);
var Image$1 = Image;
var Import = createReactComponent("Import", [
    [
        "path",
        {
            d: "M12 3v12",
            key: "1x0j5s"
        }
    ],
    [
        "path",
        {
            d: "m8 11 4 4 4-4",
            key: "1dohi6"
        }
    ],
    [
        "path",
        {
            d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
            key: "1ywtjm"
        }
    ]
]);
var Import$1 = Import;
var Inbox = createReactComponent("Inbox", [
    [
        "polyline",
        {
            points: "22 12 16 12 14 15 10 15 8 12 2 12",
            key: "o97t9d"
        }
    ],
    [
        "path",
        {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr"
        }
    ]
]);
var Inbox$1 = Inbox;
var Indent = createReactComponent("Indent", [
    [
        "polyline",
        {
            points: "3 8 7 12 3 16",
            key: "f3rxhf"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "12",
            x2: "11",
            y2: "12",
            key: "1xy73i"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "6",
            x2: "11",
            y2: "6",
            key: "97xvqg"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "18",
            x2: "11",
            y2: "18",
            key: "1r7j8g"
        }
    ]
]);
var Indent$1 = Indent;
var IndianRupee = createReactComponent("IndianRupee", [
    [
        "path",
        {
            d: "M6 3h12",
            key: "ggurg9"
        }
    ],
    [
        "path",
        {
            d: "M6 8h12",
            key: "6g4wlu"
        }
    ],
    [
        "path",
        {
            d: "m6 13 8.5 8",
            key: "u1kupk"
        }
    ],
    [
        "path",
        {
            d: "M6 13h3",
            key: "wdp6ag"
        }
    ],
    [
        "path",
        {
            d: "M9 13c6.667 0 6.667-10 0-10",
            key: "1nkvk2"
        }
    ]
]);
var IndianRupee$1 = IndianRupee;
var Infinity = createReactComponent("Infinity", [
    [
        "path",
        {
            d: "M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z",
            key: "13d65y"
        }
    ]
]);
var Infinity$1 = Infinity;
var Info = createReactComponent("Info", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "12",
            key: "dkqlv3"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12.01",
            y2: "8",
            key: "1kl4hv"
        }
    ]
]);
var Info$1 = Info;
var Inspect = createReactComponent("Inspect", [
    [
        "path",
        {
            d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
            key: "14rsvq"
        }
    ],
    [
        "path",
        {
            d: "m12 12 4 10 1.7-4.3L22 16Z",
            key: "64ilsv"
        }
    ]
]);
var Inspect$1 = Inspect;
var Instagram = createReactComponent("Instagram", [
    [
        "rect",
        {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "5",
            ry: "5",
            key: "cdfzoc"
        }
    ],
    [
        "path",
        {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1"
        }
    ],
    [
        "line",
        {
            x1: "17.5",
            y1: "6.5",
            x2: "17.51",
            y2: "6.5",
            key: "643fve"
        }
    ]
]);
var Instagram$1 = Instagram;
var Italic = createReactComponent("Italic", [
    [
        "line",
        {
            x1: "19",
            y1: "4",
            x2: "10",
            y2: "4",
            key: "ohvhe"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "20",
            x2: "5",
            y2: "20",
            key: "pl6qj"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "4",
            x2: "9",
            y2: "20",
            key: "baf5vk"
        }
    ]
]);
var Italic$1 = Italic;
var JapaneseYen = createReactComponent("JapaneseYen", [
    [
        "path",
        {
            d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3",
            key: "2ej80x"
        }
    ],
    [
        "path",
        {
            d: "M6 15h12",
            key: "1hwgt5"
        }
    ],
    [
        "path",
        {
            d: "M6 11h12",
            key: "wf4gp6"
        }
    ]
]);
var JapaneseYen$1 = JapaneseYen;
var Joystick = createReactComponent("Joystick", [
    [
        "path",
        {
            d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
            key: "jg2n2t"
        }
    ],
    [
        "path",
        {
            d: "M6 15v-2",
            key: "gd6mvg"
        }
    ],
    [
        "path",
        {
            d: "M12 15V9",
            key: "8c7uyn"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "6",
            r: "3",
            key: "1gm2ql"
        }
    ]
]);
var Joystick$1 = Joystick;
var Key = createReactComponent("Key", [
    [
        "path",
        {
            d: "m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4",
            key: "1b7wfm"
        }
    ]
]);
var Key$1 = Key;
var Keyboard = createReactComponent("Keyboard", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            ry: "2",
            key: "xgg3gf"
        }
    ],
    [
        "path",
        {
            d: "M6 8h.001",
            key: "1ej0i3"
        }
    ],
    [
        "path",
        {
            d: "M10 8h.001",
            key: "1x2st2"
        }
    ],
    [
        "path",
        {
            d: "M14 8h.001",
            key: "1vkmyp"
        }
    ],
    [
        "path",
        {
            d: "M18 8h.001",
            key: "kfsenl"
        }
    ],
    [
        "path",
        {
            d: "M8 12h.001",
            key: "1sjpby"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.001",
            key: "al75ts"
        }
    ],
    [
        "path",
        {
            d: "M16 12h.001",
            key: "931bgk"
        }
    ],
    [
        "path",
        {
            d: "M7 16h10",
            key: "wp8him"
        }
    ]
]);
var Keyboard$1 = Keyboard;
var LampCeiling = createReactComponent("LampCeiling", [
    [
        "path",
        {
            d: "M12 2v5",
            key: "nd4vlx"
        }
    ],
    [
        "path",
        {
            d: "M6 7h12l4 9H2l4-9Z",
            key: "123d64"
        }
    ],
    [
        "path",
        {
            d: "M9.17 16a3 3 0 1 0 5.66 0",
            key: "1061mw"
        }
    ]
]);
var LampCeiling$1 = LampCeiling;
var LampDesk = createReactComponent("LampDesk", [
    [
        "path",
        {
            d: "m14 5-3 3 2 7 8-8-7-2Z",
            key: "1b0msb"
        }
    ],
    [
        "path",
        {
            d: "m14 5-3 3-3-3 3-3 3 3Z",
            key: "1uemms"
        }
    ],
    [
        "path",
        {
            d: "M9.5 6.5 4 12l3 6",
            key: "1bx08v"
        }
    ],
    [
        "path",
        {
            d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",
            key: "wap775"
        }
    ]
]);
var LampDesk$1 = LampDesk;
var LampFloor = createReactComponent("LampFloor", [
    [
        "path",
        {
            d: "M9 2h6l3 7H6l3-7Z",
            key: "wcx6mj"
        }
    ],
    [
        "path",
        {
            d: "M12 9v13",
            key: "3n1su1"
        }
    ],
    [
        "path",
        {
            d: "M9 22h6",
            key: "1rlq3v"
        }
    ]
]);
var LampFloor$1 = LampFloor;
var LampWallDown = createReactComponent("LampWallDown", [
    [
        "path",
        {
            d: "M11 13h6l3 7H8l3-7Z",
            key: "9n3qlo"
        }
    ],
    [
        "path",
        {
            d: "M14 13V8a2 2 0 0 0-2-2H8",
            key: "1hu4hb"
        }
    ],
    [
        "path",
        {
            d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",
            key: "s053bc"
        }
    ]
]);
var LampWallDown$1 = LampWallDown;
var LampWallUp = createReactComponent("LampWallUp", [
    [
        "path",
        {
            d: "M11 4h6l3 7H8l3-7Z",
            key: "11x1ee"
        }
    ],
    [
        "path",
        {
            d: "M14 11v5a2 2 0 0 1-2 2H8",
            key: "eutp5o"
        }
    ],
    [
        "path",
        {
            d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",
            key: "1iuthr"
        }
    ]
]);
var LampWallUp$1 = LampWallUp;
var Lamp = createReactComponent("Lamp", [
    [
        "path",
        {
            d: "M8 2h8l4 10H4L8 2Z",
            key: "9dma5w"
        }
    ],
    [
        "path",
        {
            d: "M12 12v6",
            key: "3ahymv"
        }
    ],
    [
        "path",
        {
            d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",
            key: "mwf4oh"
        }
    ]
]);
var Lamp$1 = Lamp;
var Landmark = createReactComponent("Landmark", [
    [
        "line",
        {
            x1: "3",
            y1: "22",
            x2: "21",
            y2: "22",
            key: "1mkv49"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "18",
            x2: "6",
            y2: "11",
            key: "shpxqa"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "18",
            x2: "10",
            y2: "11",
            key: "6quq76"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "18",
            x2: "14",
            y2: "11",
            key: "qxd7vm"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "18",
            x2: "18",
            y2: "11",
            key: "1m478d"
        }
    ],
    [
        "polygon",
        {
            points: "12 2 20 7 4 7",
            key: "jkujk7"
        }
    ]
]);
var Landmark$1 = Landmark;
var Languages = createReactComponent("Languages", [
    [
        "path",
        {
            d: "m5 8 6 6",
            key: "1wu5hv"
        }
    ],
    [
        "path",
        {
            d: "m4 14 6-6 2-3",
            key: "1k1g8d"
        }
    ],
    [
        "path",
        {
            d: "M2 5h12",
            key: "or177f"
        }
    ],
    [
        "path",
        {
            d: "M7 2h1",
            key: "1t2jsx"
        }
    ],
    [
        "path",
        {
            d: "m22 22-5-10-5 10",
            key: "don7ne"
        }
    ],
    [
        "path",
        {
            d: "M14 18h6",
            key: "1m8k6r"
        }
    ]
]);
var Languages$1 = Languages;
var Laptop2 = createReactComponent("Laptop2", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "12",
            rx: "2",
            ry: "2",
            key: "8tl1gx"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "20",
            x2: "22",
            y2: "20",
            key: "1pxzem"
        }
    ]
]);
var Laptop2$1 = Laptop2;
var Laptop = createReactComponent("Laptop", [
    [
        "path",
        {
            d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
            key: "tarvll"
        }
    ]
]);
var Laptop$1 = Laptop;
var LassoSelect = createReactComponent("LassoSelect", [
    [
        "path",
        {
            d: "M7 22a5 5 0 0 1-2-4",
            key: "umushi"
        }
    ],
    [
        "path",
        {
            d: "M7 16.93c.96.43 1.96.74 2.99.91",
            key: "ybbtv3"
        }
    ],
    [
        "path",
        {
            d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",
            key: "gt5e1w"
        }
    ],
    [
        "path",
        {
            d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
            key: "bq3ynw"
        }
    ],
    [
        "path",
        {
            d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",
            key: "1bawls"
        }
    ]
]);
var LassoSelect$1 = LassoSelect;
var Lasso = createReactComponent("Lasso", [
    [
        "path",
        {
            d: "M7 22a5 5 0 0 1-2-4",
            key: "umushi"
        }
    ],
    [
        "path",
        {
            d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",
            key: "146dds"
        }
    ],
    [
        "path",
        {
            d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
            key: "bq3ynw"
        }
    ]
]);
var Lasso$1 = Lasso;
var Laugh = createReactComponent("Laugh", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",
            key: "b2q4dd"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
            key: "141aaf"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
            key: "1cyg3o"
        }
    ]
]);
var Laugh$1 = Laugh;
var Layers = createReactComponent("Layers", [
    [
        "polygon",
        {
            points: "12 2 2 7 12 12 22 7 12 2",
            key: "1b0ttc"
        }
    ],
    [
        "polyline",
        {
            points: "2 17 12 22 22 17",
            key: "imjtdl"
        }
    ],
    [
        "polyline",
        {
            points: "2 12 12 17 22 12",
            key: "5dexcv"
        }
    ]
]);
var Layers$1 = Layers;
var LayoutDashboard = createReactComponent("LayoutDashboard", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "7",
            height: "9",
            key: "1eurd7"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "3",
            width: "7",
            height: "5",
            key: "zff5ux"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "12",
            width: "7",
            height: "9",
            key: "1oiq0r"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "16",
            width: "7",
            height: "5",
            key: "1145ac"
        }
    ]
]);
var LayoutDashboard$1 = LayoutDashboard;
var LayoutGrid = createReactComponent("LayoutGrid", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "7",
            height: "7",
            key: "1q9d4d"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "3",
            width: "7",
            height: "7",
            key: "1kofyi"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "14",
            width: "7",
            height: "7",
            key: "18jxcw"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            key: "1omegr"
        }
    ]
]);
var LayoutGrid$1 = LayoutGrid;
var LayoutList = createReactComponent("LayoutList", [
    [
        "rect",
        {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            key: "1omegr"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "7",
            height: "7",
            key: "1q9d4d"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "4",
            x2: "21",
            y2: "4",
            key: "1klf7b"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "9",
            x2: "21",
            y2: "9",
            key: "1kf9x0"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "15",
            x2: "21",
            y2: "15",
            key: "s6i7v1"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "20",
            x2: "21",
            y2: "20",
            key: "yxpbil"
        }
    ]
]);
var LayoutList$1 = LayoutList;
var LayoutTemplate = createReactComponent("LayoutTemplate", [
    [
        "path",
        {
            d: "M21 3H3v7h18V3z",
            key: "cq2tmr"
        }
    ],
    [
        "path",
        {
            d: "M21 14h-5v7h5v-7z",
            key: "1dv32i"
        }
    ],
    [
        "path",
        {
            d: "M12 14H3v7h9v-7z",
            key: "1k92lm"
        }
    ]
]);
var LayoutTemplate$1 = LayoutTemplate;
var Layout = createReactComponent("Layout", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "9",
            x2: "21",
            y2: "9",
            key: "1uch6j"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "21",
            x2: "9",
            y2: "9",
            key: "97zt75"
        }
    ]
]);
var Layout$1 = Layout;
var Leaf = createReactComponent("Leaf", [
    [
        "path",
        {
            d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
            key: "nnexq3"
        }
    ],
    [
        "path",
        {
            d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
            key: "mt58a7"
        }
    ]
]);
var Leaf$1 = Leaf;
var Library = createReactComponent("Library", [
    [
        "path",
        {
            d: "m16 6 4 14",
            key: "ji33uf"
        }
    ],
    [
        "path",
        {
            d: "M12 6v14",
            key: "1n7gus"
        }
    ],
    [
        "path",
        {
            d: "M8 8v12",
            key: "1gg7y9"
        }
    ],
    [
        "path",
        {
            d: "M4 4v16",
            key: "6qkkli"
        }
    ]
]);
var Library$1 = Library;
var LifeBuoy = createReactComponent("LifeBuoy", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "line",
        {
            x1: "4.93",
            y1: "4.93",
            x2: "9.17",
            y2: "9.17",
            key: "1akcti"
        }
    ],
    [
        "line",
        {
            x1: "14.83",
            y1: "14.83",
            x2: "19.07",
            y2: "19.07",
            key: "js56sr"
        }
    ],
    [
        "line",
        {
            x1: "14.83",
            y1: "9.17",
            x2: "19.07",
            y2: "4.93",
            key: "ca9a8b"
        }
    ],
    [
        "line",
        {
            x1: "14.83",
            y1: "9.17",
            x2: "18.36",
            y2: "5.64",
            key: "dsbuwx"
        }
    ],
    [
        "line",
        {
            x1: "4.93",
            y1: "19.07",
            x2: "9.17",
            y2: "14.83",
            key: "1lkv3n"
        }
    ]
]);
var LifeBuoy$1 = LifeBuoy;
var LightbulbOff = createReactComponent("LightbulbOff", [
    [
        "path",
        {
            d: "M9 18h6",
            key: "x1upvd"
        }
    ],
    [
        "path",
        {
            d: "M10 22h4",
            key: "ceow96"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M9 2.804A6 6 0 0 1 18 8a4.65 4.65 0 0 1-1.03 3",
            key: "1v6krz"
        }
    ],
    [
        "path",
        {
            d: "M8.91 14a4.61 4.61 0 0 0-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 0 1 .084-1",
            key: "1jxmct"
        }
    ]
]);
var LightbulbOff$1 = LightbulbOff;
var Lightbulb = createReactComponent("Lightbulb", [
    [
        "line",
        {
            x1: "9",
            y1: "18",
            x2: "15",
            y2: "18",
            key: "poumom"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "22",
            x2: "14",
            y2: "22",
            key: "1oekqc"
        }
    ],
    [
        "path",
        {
            d: "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14",
            key: "a9yf0y"
        }
    ]
]);
var Lightbulb$1 = Lightbulb;
var LineChart = createReactComponent("LineChart", [
    [
        "path",
        {
            d: "M3 3v18h18",
            key: "1s2lah"
        }
    ],
    [
        "path",
        {
            d: "m19 9-5 5-4-4-3 3",
            key: "2osh9i"
        }
    ]
]);
var LineChart$1 = LineChart;
var Link2Off = createReactComponent("Link2Off", [
    [
        "path",
        {
            d: "M9 17H7A5 5 0 0 1 7 7",
            key: "10o201"
        }
    ],
    [
        "path",
        {
            d: "M15 7h2a5 5 0 0 1 4 8",
            key: "1d3206"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "12",
            y2: "12",
            key: "1drbw0"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var Link2Off$1 = Link2Off;
var Link2 = createReactComponent("Link2", [
    [
        "path",
        {
            d: "M9 17H7A5 5 0 0 1 7 7h2",
            key: "8i5ue5"
        }
    ],
    [
        "path",
        {
            d: "M15 7h2a5 5 0 1 1 0 10h-2",
            key: "1b9ql8"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
var Link2$1 = Link2;
var Link = createReactComponent("Link", [
    [
        "path",
        {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            key: "1cjeqo"
        }
    ],
    [
        "path",
        {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            key: "19qd67"
        }
    ]
]);
var Link$1 = Link;
var Linkedin = createReactComponent("Linkedin", [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "9",
            width: "4",
            height: "12",
            key: "fu1a4h"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }
    ]
]);
var Linkedin$1 = Linkedin;
var ListChecks = createReactComponent("ListChecks", [
    [
        "line",
        {
            x1: "10",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "g7ikjt"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "xgqux5"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "18",
            x2: "21",
            y2: "18",
            key: "1q4fbe"
        }
    ],
    [
        "polyline",
        {
            points: "3 6 4 7 6 5",
            key: "ectua5"
        }
    ],
    [
        "polyline",
        {
            points: "3 12 4 13 6 11",
            key: "gtbhyw"
        }
    ],
    [
        "polyline",
        {
            points: "3 18 4 19 6 17",
            key: "qzp18e"
        }
    ]
]);
var ListChecks$1 = ListChecks;
var ListEnd = createReactComponent("ListEnd", [
    [
        "path",
        {
            d: "M16 12H3",
            key: "1a2rj7"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M10 18H3",
            key: "13769t"
        }
    ],
    [
        "path",
        {
            d: "M21 6v10a2 2 0 0 1-2 2h-4",
            key: "1snekz"
        }
    ],
    [
        "path",
        {
            d: "m16 16-2 2 2 2",
            key: "kkc6pm"
        }
    ]
]);
var ListEnd$1 = ListEnd;
var ListMinus = createReactComponent("ListMinus", [
    [
        "path",
        {
            d: "M11 12H3",
            key: "51ecnj"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M16 18H3",
            key: "12xzn7"
        }
    ],
    [
        "path",
        {
            d: "M21 12h-6",
            key: "bt1uis"
        }
    ]
]);
var ListMinus$1 = ListMinus;
var ListMusic = createReactComponent("ListMusic", [
    [
        "path",
        {
            d: "M21 15V6",
            key: "h1cx4g"
        }
    ],
    [
        "path",
        {
            d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
            key: "8saifv"
        }
    ],
    [
        "path",
        {
            d: "M12 12H3",
            key: "18klou"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M12 18H3",
            key: "11ftsu"
        }
    ]
]);
var ListMusic$1 = ListMusic;
var ListOrdered = createReactComponent("ListOrdered", [
    [
        "line",
        {
            x1: "10",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "g7ikjt"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "xgqux5"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "18",
            x2: "21",
            y2: "18",
            key: "1q4fbe"
        }
    ],
    [
        "path",
        {
            d: "M4 6h1v4",
            key: "cnovpq"
        }
    ],
    [
        "path",
        {
            d: "M4 10h2",
            key: "16xx2s"
        }
    ],
    [
        "path",
        {
            d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",
            key: "m9a95d"
        }
    ]
]);
var ListOrdered$1 = ListOrdered;
var ListPlus = createReactComponent("ListPlus", [
    [
        "path",
        {
            d: "M11 12H3",
            key: "51ecnj"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M16 18H3",
            key: "12xzn7"
        }
    ],
    [
        "path",
        {
            d: "M18 9v6",
            key: "1twb98"
        }
    ],
    [
        "path",
        {
            d: "M21 12h-6",
            key: "bt1uis"
        }
    ]
]);
var ListPlus$1 = ListPlus;
var ListStart = createReactComponent("ListStart", [
    [
        "path",
        {
            d: "M16 12H3",
            key: "1a2rj7"
        }
    ],
    [
        "path",
        {
            d: "M16 18H3",
            key: "12xzn7"
        }
    ],
    [
        "path",
        {
            d: "M10 6H3",
            key: "lf8lx7"
        }
    ],
    [
        "path",
        {
            d: "M21 18V8a2 2 0 0 0-2-2h-5",
            key: "1hghli"
        }
    ],
    [
        "path",
        {
            d: "m16 8-2-2 2-2",
            key: "160uvd"
        }
    ]
]);
var ListStart$1 = ListStart;
var ListVideo = createReactComponent("ListVideo", [
    [
        "path",
        {
            d: "M12 12H3",
            key: "18klou"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M12 18H3",
            key: "11ftsu"
        }
    ],
    [
        "path",
        {
            d: "m16 12 5 3-5 3v-6Z",
            key: "zpskkp"
        }
    ]
]);
var ListVideo$1 = ListVideo;
var ListX = createReactComponent("ListX", [
    [
        "path",
        {
            d: "M11 12H3",
            key: "51ecnj"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M16 18H3",
            key: "12xzn7"
        }
    ],
    [
        "path",
        {
            d: "m19 10-4 4",
            key: "1tz659"
        }
    ],
    [
        "path",
        {
            d: "m15 10 4 4",
            key: "1n7nei"
        }
    ]
]);
var ListX$1 = ListX;
var List = createReactComponent("List", [
    [
        "line",
        {
            x1: "8",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "1kveod"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "120u6p"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "18",
            x2: "21",
            y2: "18",
            key: "1k409v"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "6",
            x2: "3.01",
            y2: "6",
            key: "13co06"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "12",
            x2: "3.01",
            y2: "12",
            key: "11tec3"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "18",
            x2: "3.01",
            y2: "18",
            key: "14wug1"
        }
    ]
]);
var List$1 = List;
var Loader2 = createReactComponent("Loader2", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
]);
var Loader2$1 = Loader2;
var Loader = createReactComponent("Loader", [
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "6",
            key: "1pduqs"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "18",
            x2: "12",
            y2: "22",
            key: "1b94uv"
        }
    ],
    [
        "line",
        {
            x1: "4.93",
            y1: "4.93",
            x2: "7.76",
            y2: "7.76",
            key: "1a736z"
        }
    ],
    [
        "line",
        {
            x1: "16.24",
            y1: "16.24",
            x2: "19.07",
            y2: "19.07",
            key: "gt096z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "6",
            y2: "12",
            key: "rkbu33"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "1vrbnu"
        }
    ],
    [
        "line",
        {
            x1: "4.93",
            y1: "19.07",
            x2: "7.76",
            y2: "16.24",
            key: "59c6el"
        }
    ],
    [
        "line",
        {
            x1: "16.24",
            y1: "7.76",
            x2: "19.07",
            y2: "4.93",
            key: "8m03gt"
        }
    ]
]);
var Loader$1 = Loader;
var LocateFixed = createReactComponent("LocateFixed", [
    [
        "line",
        {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12",
            key: "bvdh0s"
        }
    ],
    [
        "line",
        {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12",
            key: "1tbv5k"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5",
            key: "11lu5j"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "7",
            key: "fim9np"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
var LocateFixed$1 = LocateFixed;
var LocateOff = createReactComponent("LocateOff", [
    [
        "line",
        {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12",
            key: "bvdh0s"
        }
    ],
    [
        "line",
        {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12",
            key: "1tbv5k"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5",
            key: "11lu5j"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ],
    [
        "path",
        {
            d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",
            key: "1oh7ia"
        }
    ],
    [
        "path",
        {
            d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",
            key: "3qdecy"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22",
            key: "a6p6uj"
        }
    ]
]);
var LocateOff$1 = LocateOff;
var Locate = createReactComponent("Locate", [
    [
        "line",
        {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12",
            key: "bvdh0s"
        }
    ],
    [
        "line",
        {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12",
            key: "1tbv5k"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5",
            key: "11lu5j"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "7",
            key: "fim9np"
        }
    ]
]);
var Locate$1 = Locate;
var Lock = createReactComponent("Lock", [
    [
        "rect",
        {
            x: "3",
            y: "11",
            width: "18",
            height: "11",
            rx: "2",
            ry: "2",
            key: "biyj2e"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
]);
var Lock$1 = Lock;
var LogIn = createReactComponent("LogIn", [
    [
        "path",
        {
            d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
            key: "u53s6r"
        }
    ],
    [
        "polyline",
        {
            points: "10 17 15 12 10 7",
            key: "1ail0h"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "12",
            x2: "3",
            y2: "12",
            key: "80e4vw"
        }
    ]
]);
var LogIn$1 = LogIn;
var LogOut = createReactComponent("LogOut", [
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "12",
            x2: "9",
            y2: "12",
            key: "1stwgr"
        }
    ]
]);
var LogOut$1 = LogOut;
var Luggage = createReactComponent("Luggage", [
    [
        "path",
        {
            d: "M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",
            key: "1h5fkc"
        }
    ],
    [
        "path",
        {
            d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",
            key: "1l99gc"
        }
    ],
    [
        "path",
        {
            d: "M10 20h4",
            key: "ni2waw"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "20",
            r: "2",
            key: "1vifvg"
        }
    ],
    [
        "circle",
        {
            cx: "8",
            cy: "20",
            r: "2",
            key: "ckkr5m"
        }
    ]
]);
var Luggage$1 = Luggage;
var Magnet = createReactComponent("Magnet", [
    [
        "path",
        {
            d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",
            key: "1i3lhw"
        }
    ],
    [
        "path",
        {
            d: "m5 8 4 4",
            key: "j6kj7e"
        }
    ],
    [
        "path",
        {
            d: "m12 15 4 4",
            key: "lnac28"
        }
    ]
]);
var Magnet$1 = Magnet;
var MailCheck = createReactComponent("MailCheck", [
    [
        "path",
        {
            d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
            key: "12jkf8"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "m16 19 2 2 4-4",
            key: "1b14m6"
        }
    ]
]);
var MailCheck$1 = MailCheck;
var MailMinus = createReactComponent("MailMinus", [
    [
        "path",
        {
            d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
            key: "fuxbkv"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "M16 19h6",
            key: "xwg31i"
        }
    ]
]);
var MailMinus$1 = MailMinus;
var MailOpen = createReactComponent("MailOpen", [
    [
        "path",
        {
            d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
            key: "1jhwl8"
        }
    ],
    [
        "path",
        {
            d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",
            key: "1qfld7"
        }
    ]
]);
var MailOpen$1 = MailOpen;
var MailPlus = createReactComponent("MailPlus", [
    [
        "path",
        {
            d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
            key: "12jkf8"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "M19 16v6",
            key: "tddt3s"
        }
    ],
    [
        "path",
        {
            d: "M16 19h6",
            key: "xwg31i"
        }
    ]
]);
var MailPlus$1 = MailPlus;
var MailQuestion = createReactComponent("MailQuestion", [
    [
        "path",
        {
            d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",
            key: "e61zoh"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
            key: "7z9rxb"
        }
    ],
    [
        "path",
        {
            d: "M20 22v.01",
            key: "12bgn6"
        }
    ]
]);
var MailQuestion$1 = MailQuestion;
var MailSearch = createReactComponent("MailSearch", [
    [
        "path",
        {
            d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",
            key: "w80f2v"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",
            key: "mgbru4"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "path",
        {
            d: "m22 22-1.5-1.5",
            key: "1x83k4"
        }
    ]
]);
var MailSearch$1 = MailSearch;
var MailWarning = createReactComponent("MailWarning", [
    [
        "path",
        {
            d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",
            key: "e61zoh"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "M20 14v4",
            key: "1hm744"
        }
    ],
    [
        "path",
        {
            d: "M20 22v.01",
            key: "12bgn6"
        }
    ]
]);
var MailWarning$1 = MailWarning;
var MailX = createReactComponent("MailX", [
    [
        "path",
        {
            d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",
            key: "1j9vog"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "m17 17 4 4",
            key: "1b3523"
        }
    ],
    [
        "path",
        {
            d: "m21 17-4 4",
            key: "uinynz"
        }
    ]
]);
var MailX$1 = MailX;
var Mail = createReactComponent("Mail", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ]
]);
var Mail$1 = Mail;
var Mails = createReactComponent("Mails", [
    [
        "rect",
        {
            x: "6",
            y: "4",
            width: "16",
            height: "13",
            rx: "2",
            key: "q6n4z8"
        }
    ],
    [
        "path",
        {
            d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",
            key: "xn252p"
        }
    ],
    [
        "path",
        {
            d: "M2 8v11c0 1.1.9 2 2 2h14",
            key: "n13cji"
        }
    ]
]);
var Mails$1 = Mails;
var MapPinOff = createReactComponent("MapPinOff", [
    [
        "path",
        {
            d: "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5",
            key: "12a8pk"
        }
    ],
    [
        "path",
        {
            d: "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",
            key: "1r9f6y"
        }
    ],
    [
        "path",
        {
            d: "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13",
            key: "erynq7"
        }
    ],
    [
        "path",
        {
            d: "M14.9 9.25a3 3 0 0 0-2.15-2.16",
            key: "1hwwmx"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var MapPinOff$1 = MapPinOff;
var MapPin = createReactComponent("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
            key: "2oe9fu"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
]);
var MapPin$1 = MapPin;
var Map = createReactComponent("Map", [
    [
        "polygon",
        {
            points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",
            key: "ok2ie8"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "3",
            x2: "9",
            y2: "18",
            key: "3zqglt"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "6",
            x2: "15",
            y2: "21",
            key: "1c9xoo"
        }
    ]
]);
var Map$1 = Map;
var Martini = createReactComponent("Martini", [
    [
        "path",
        {
            d: "M8 22h8",
            key: "rmew8v"
        }
    ],
    [
        "path",
        {
            d: "M12 11v11",
            key: "ur9y6a"
        }
    ],
    [
        "path",
        {
            d: "m19 3-7 8-7-8Z",
            key: "1sgpiw"
        }
    ]
]);
var Martini$1 = Martini;
var Maximize2 = createReactComponent("Maximize2", [
    [
        "polyline",
        {
            points: "15 3 21 3 21 9",
            key: "mznyad"
        }
    ],
    [
        "polyline",
        {
            points: "9 21 3 21 3 15",
            key: "1avn1i"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "3",
            x2: "14",
            y2: "10",
            key: "8isubj"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "21",
            x2: "10",
            y2: "14",
            key: "c1a6xr"
        }
    ]
]);
var Maximize2$1 = Maximize2;
var Maximize = createReactComponent("Maximize", [
    [
        "path",
        {
            d: "M8 3H5a2 2 0 0 0-2 2v3",
            key: "1dcmit"
        }
    ],
    [
        "path",
        {
            d: "M21 8V5a2 2 0 0 0-2-2h-3",
            key: "1e4gt3"
        }
    ],
    [
        "path",
        {
            d: "M3 16v3a2 2 0 0 0 2 2h3",
            key: "wsl5sc"
        }
    ],
    [
        "path",
        {
            d: "M16 21h3a2 2 0 0 0 2-2v-3",
            key: "18trek"
        }
    ]
]);
var Maximize$1 = Maximize;
var Medal = createReactComponent("Medal", [
    [
        "path",
        {
            d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
            key: "143lza"
        }
    ],
    [
        "path",
        {
            d: "M11 12 5.12 2.2",
            key: "qhuxz6"
        }
    ],
    [
        "path",
        {
            d: "m13 12 5.88-9.8",
            key: "hbye0f"
        }
    ],
    [
        "path",
        {
            d: "M8 7h8",
            key: "i86dvs"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "17",
            r: "5",
            key: "qbz8iq"
        }
    ],
    [
        "path",
        {
            d: "M12 18v-2h-.5",
            key: "fawc4q"
        }
    ]
]);
var Medal$1 = Medal;
var MegaphoneOff = createReactComponent("MegaphoneOff", [
    [
        "path",
        {
            d: "M9.26 9.26 3 11v3l14.14 3.14",
            key: "3429n"
        }
    ],
    [
        "path",
        {
            d: "M21 15.34V6l-7.31 2.03",
            key: "4o1dh8"
        }
    ],
    [
        "path",
        {
            d: "M11.6 16.8a3 3 0 1 1-5.8-1.6",
            key: "1yl0tm"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22",
            key: "a6p6uj"
        }
    ]
]);
var MegaphoneOff$1 = MegaphoneOff;
var Megaphone = createReactComponent("Megaphone", [
    [
        "path",
        {
            d: "m3 11 18-5v12L3 14v-3z",
            key: "n962bs"
        }
    ],
    [
        "path",
        {
            d: "M11.6 16.8a3 3 0 1 1-5.8-1.6",
            key: "1yl0tm"
        }
    ]
]);
var Megaphone$1 = Megaphone;
var Meh = createReactComponent("Meh", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "15",
            x2: "16",
            y2: "15",
            key: "29ieok"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
            key: "141aaf"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
            key: "1cyg3o"
        }
    ]
]);
var Meh$1 = Meh;
var Menu = createReactComponent("Menu", [
    [
        "line",
        {
            x1: "4",
            y1: "12",
            x2: "20",
            y2: "12",
            key: "1q6rtp"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "6",
            x2: "20",
            y2: "6",
            key: "1jr6gt"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "18",
            x2: "20",
            y2: "18",
            key: "98tuvx"
        }
    ]
]);
var Menu$1 = Menu;
var MessageCircle = createReactComponent("MessageCircle", [
    [
        "path",
        {
            d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
            key: "5iho0c"
        }
    ]
]);
var MessageCircle$1 = MessageCircle;
var MessageSquare = createReactComponent("MessageSquare", [
    [
        "path",
        {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz"
        }
    ]
]);
var MessageSquare$1 = MessageSquare;
var Mic2 = createReactComponent("Mic2", [
    [
        "path",
        {
            d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",
            key: "zoua8r"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "7",
            r: "5",
            key: "1fomce"
        }
    ]
]);
var Mic2$1 = Mic2;
var MicOff = createReactComponent("MicOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "path",
        {
            d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",
            key: "80xlxr"
        }
    ],
    [
        "path",
        {
            d: "M5 10v2a7 7 0 0 0 12 5",
            key: "p2k8kg"
        }
    ],
    [
        "path",
        {
            d: "M15 9.34V5a3 3 0 0 0-5.68-1.33",
            key: "1gzdoj"
        }
    ],
    [
        "path",
        {
            d: "M9 9v3a3 3 0 0 0 5.12 2.12",
            key: "r2i35w"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "22",
            key: "1l505v"
        }
    ]
]);
var MicOff$1 = MicOff;
var Mic = createReactComponent("Mic", [
    [
        "path",
        {
            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
            key: "131961"
        }
    ],
    [
        "path",
        {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "22",
            key: "1l505v"
        }
    ]
]);
var Mic$1 = Mic;
var Microscope = createReactComponent("Microscope", [
    [
        "path",
        {
            d: "M6 18h8",
            key: "1borvv"
        }
    ],
    [
        "path",
        {
            d: "M3 22h18",
            key: "8prr45"
        }
    ],
    [
        "path",
        {
            d: "M14 22a7 7 0 1 0 0-14h-1",
            key: "1jwaiy"
        }
    ],
    [
        "path",
        {
            d: "M9 14h2",
            key: "197e7h"
        }
    ],
    [
        "path",
        {
            d: "M8 6h4",
            key: "i9thid"
        }
    ],
    [
        "path",
        {
            d: "M13 10V6.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.5a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V10c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2Z",
            key: "z62yqi"
        }
    ]
]);
var Microscope$1 = Microscope;
var Microwave = createReactComponent("Microwave", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "15",
            rx: "2",
            key: "1rfv8z"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "8",
            width: "8",
            height: "7",
            rx: "1",
            key: "i43qc1"
        }
    ],
    [
        "path",
        {
            d: "M18 8v7",
            key: "o5zi4n"
        }
    ],
    [
        "path",
        {
            d: "M6 19v2",
            key: "1loha6"
        }
    ],
    [
        "path",
        {
            d: "M18 19v2",
            key: "1dawf0"
        }
    ]
]);
var Microwave$1 = Microwave;
var Milestone = createReactComponent("Milestone", [
    [
        "path",
        {
            d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",
            key: "1mp5s7"
        }
    ],
    [
        "path",
        {
            d: "M12 13v9",
            key: "keea1l"
        }
    ],
    [
        "path",
        {
            d: "M12 2v4",
            key: "3427ic"
        }
    ]
]);
var Milestone$1 = Milestone;
var Minimize2 = createReactComponent("Minimize2", [
    [
        "polyline",
        {
            points: "4 14 10 14 10 20",
            key: "11kfnr"
        }
    ],
    [
        "polyline",
        {
            points: "20 10 14 10 14 4",
            key: "rlmsce"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "10",
            x2: "21",
            y2: "3",
            key: "6dvi8v"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "21",
            x2: "10",
            y2: "14",
            key: "c1a6xr"
        }
    ]
]);
var Minimize2$1 = Minimize2;
var Minimize = createReactComponent("Minimize", [
    [
        "path",
        {
            d: "M8 3v3a2 2 0 0 1-2 2H3",
            key: "hohbtr"
        }
    ],
    [
        "path",
        {
            d: "M21 8h-3a2 2 0 0 1-2-2V3",
            key: "5jw1f3"
        }
    ],
    [
        "path",
        {
            d: "M3 16h3a2 2 0 0 1 2 2v3",
            key: "198tvr"
        }
    ],
    [
        "path",
        {
            d: "M16 21v-3a2 2 0 0 1 2-2h3",
            key: "ph8mxp"
        }
    ]
]);
var Minimize$1 = Minimize;
var MinusCircle = createReactComponent("MinusCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
var MinusCircle$1 = MinusCircle;
var MinusSquare = createReactComponent("MinusSquare", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
var MinusSquare$1 = MinusSquare;
var Minus = createReactComponent("Minus", [
    [
        "line",
        {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
            key: "1smlys"
        }
    ]
]);
var Minus$1 = Minus;
var MonitorOff = createReactComponent("MonitorOff", [
    [
        "path",
        {
            d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",
            key: "k0q8oc"
        }
    ],
    [
        "path",
        {
            d: "M22 15V5a2 2 0 0 0-2-2H9",
            key: "cp1ac0"
        }
    ],
    [
        "path",
        {
            d: "M8 21h8",
            key: "1ev6f3"
        }
    ],
    [
        "path",
        {
            d: "M12 17v4",
            key: "1riwvh"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
]);
var MonitorOff$1 = MonitorOff;
var MonitorSpeaker = createReactComponent("MonitorSpeaker", [
    [
        "path",
        {
            d: "M5.5 20H8",
            key: "1k40s5"
        }
    ],
    [
        "path",
        {
            d: "M17 9h.01",
            key: "1j24nn"
        }
    ],
    [
        "rect",
        {
            x: "12",
            y: "4",
            width: "10",
            height: "16",
            rx: "2",
            key: "1gi0i2"
        }
    ],
    [
        "path",
        {
            d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",
            key: "1mp6e1"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "15",
            r: "1",
            key: "tqvash"
        }
    ]
]);
var MonitorSpeaker$1 = MonitorSpeaker;
var Monitor = createReactComponent("Monitor", [
    [
        "rect",
        {
            x: "2",
            y: "3",
            width: "20",
            height: "14",
            rx: "2",
            ry: "2",
            key: "1q87ek"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "21",
            x2: "16",
            y2: "21",
            key: "bcbiac"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "17",
            x2: "12",
            y2: "21",
            key: "1v4d7v"
        }
    ]
]);
var Monitor$1 = Monitor;
var Moon = createReactComponent("Moon", [
    [
        "path",
        {
            d: "M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "1rit1i"
        }
    ]
]);
var Moon$1 = Moon;
var MoreHorizontal = createReactComponent("MoreHorizontal", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "12",
            r: "1",
            key: "1wjl8i"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "12",
            r: "1",
            key: "1pcz8c"
        }
    ]
]);
var MoreHorizontal$1 = MoreHorizontal;
var MoreVertical = createReactComponent("MoreVertical", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "5",
            r: "1",
            key: "gxeob9"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "19",
            r: "1",
            key: "lyex9k"
        }
    ]
]);
var MoreVertical$1 = MoreVertical;
var MountainSnow = createReactComponent("MountainSnow", [
    [
        "path",
        {
            d: "m8 3 4 8 5-5 5 15H2L8 3z",
            key: "otkl63"
        }
    ],
    [
        "path",
        {
            d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",
            key: "1pvmmp"
        }
    ]
]);
var MountainSnow$1 = MountainSnow;
var Mountain = createReactComponent("Mountain", [
    [
        "path",
        {
            d: "m8 3 4 8 5-5 5 15H2L8 3z",
            key: "otkl63"
        }
    ]
]);
var Mountain$1 = Mountain;
var MousePointer2 = createReactComponent("MousePointer2", [
    [
        "path",
        {
            d: "m4 4 7.07 17 2.51-7.39L21 11.07z",
            key: "1vqm48"
        }
    ]
]);
var MousePointer2$1 = MousePointer2;
var MousePointerClick = createReactComponent("MousePointerClick", [
    [
        "path",
        {
            d: "m9 9 5 12 1.774-5.226L21 14 9 9z",
            key: "1qd44z"
        }
    ],
    [
        "path",
        {
            d: "m16.071 16.071 4.243 4.243",
            key: "wfhsjb"
        }
    ],
    [
        "path",
        {
            d: "m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122",
            key: "1bk8fz"
        }
    ]
]);
var MousePointerClick$1 = MousePointerClick;
var MousePointer = createReactComponent("MousePointer", [
    [
        "path",
        {
            d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",
            key: "y2ucgo"
        }
    ],
    [
        "path",
        {
            d: "m13 13 6 6",
            key: "1nhxnf"
        }
    ]
]);
var MousePointer$1 = MousePointer;
var Mouse = createReactComponent("Mouse", [
    [
        "rect",
        {
            x: "6",
            y: "3",
            width: "12",
            height: "18",
            rx: "6",
            key: "wskjtk"
        }
    ],
    [
        "path",
        {
            d: "M12 7v4",
            key: "xawao1"
        }
    ]
]);
var Mouse$1 = Mouse;
var Move3d = createReactComponent("Move3d", [
    [
        "path",
        {
            d: "M5 3v16h16",
            key: "1mqmf9"
        }
    ],
    [
        "path",
        {
            d: "m5 19 6-6",
            key: "jh6hbb"
        }
    ],
    [
        "path",
        {
            d: "m2 6 3-3 3 3",
            key: "tkyvxa"
        }
    ],
    [
        "path",
        {
            d: "m18 16 3 3-3 3",
            key: "1d4glt"
        }
    ]
]);
var Move3d$1 = Move3d;
var MoveDiagonal2 = createReactComponent("MoveDiagonal2", [
    [
        "polyline",
        {
            points: "5 11 5 5 11 5",
            key: "ncfzxk"
        }
    ],
    [
        "polyline",
        {
            points: "19 13 19 19 13 19",
            key: "1mk7hk"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "5",
            x2: "19",
            y2: "19",
            key: "4tvgsr"
        }
    ]
]);
var MoveDiagonal2$1 = MoveDiagonal2;
var MoveDiagonal = createReactComponent("MoveDiagonal", [
    [
        "polyline",
        {
            points: "13 5 19 5 19 11",
            key: "11219e"
        }
    ],
    [
        "polyline",
        {
            points: "11 19 5 19 5 13",
            key: "sfq3wq"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "5",
            x2: "5",
            y2: "19",
            key: "t1677v"
        }
    ]
]);
var MoveDiagonal$1 = MoveDiagonal;
var MoveHorizontal = createReactComponent("MoveHorizontal", [
    [
        "polyline",
        {
            points: "18 8 22 12 18 16",
            key: "1hqrds"
        }
    ],
    [
        "polyline",
        {
            points: "6 8 2 12 6 16",
            key: "f0ernq"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ]
]);
var MoveHorizontal$1 = MoveHorizontal;
var MoveVertical = createReactComponent("MoveVertical", [
    [
        "polyline",
        {
            points: "8 18 12 22 16 18",
            key: "1uutw3"
        }
    ],
    [
        "polyline",
        {
            points: "8 6 12 2 16 6",
            key: "d60sxy"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "22",
            key: "1k6o5o"
        }
    ]
]);
var MoveVertical$1 = MoveVertical;
var Move = createReactComponent("Move", [
    [
        "polyline",
        {
            points: "5 9 2 12 5 15",
            key: "1r5uj5"
        }
    ],
    [
        "polyline",
        {
            points: "9 5 12 2 15 5",
            key: "5v383o"
        }
    ],
    [
        "polyline",
        {
            points: "15 19 12 22 9 19",
            key: "g7qi8m"
        }
    ],
    [
        "polyline",
        {
            points: "19 9 22 12 19 15",
            key: "tpp73q"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "22",
            key: "1k6o5o"
        }
    ]
]);
var Move$1 = Move;
var Music2 = createReactComponent("Music2", [
    [
        "circle",
        {
            cx: "8",
            cy: "18",
            r: "4",
            key: "1fc0mg"
        }
    ],
    [
        "path",
        {
            d: "M12 18V2l7 4",
            key: "g04rme"
        }
    ]
]);
var Music2$1 = Music2;
var Music3 = createReactComponent("Music3", [
    [
        "circle",
        {
            cx: "12",
            cy: "18",
            r: "4",
            key: "m3r9ws"
        }
    ],
    [
        "path",
        {
            d: "M16 18V2",
            key: "40x2m5"
        }
    ]
]);
var Music3$1 = Music3;
var Music4 = createReactComponent("Music4", [
    [
        "path",
        {
            d: "M9 18V5l12-2v13",
            key: "1jmyc2"
        }
    ],
    [
        "path",
        {
            d: "m9 9 12-2",
            key: "1e64n2"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "16",
            r: "3",
            key: "1hluhg"
        }
    ]
]);
var Music4$1 = Music4;
var Music = createReactComponent("Music", [
    [
        "path",
        {
            d: "M9 18V5l12-2v13",
            key: "1jmyc2"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "16",
            r: "3",
            key: "1hluhg"
        }
    ]
]);
var Music$1 = Music;
var Navigation2Off = createReactComponent("Navigation2Off", [
    [
        "path",
        {
            d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17",
            key: "qoq2o2"
        }
    ],
    [
        "path",
        {
            d: "M14.53 8.88 12 2l-1.17 3.17",
            key: "k3sjzy"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var Navigation2Off$1 = Navigation2Off;
var Navigation2 = createReactComponent("Navigation2", [
    [
        "polygon",
        {
            points: "12 2 19 21 12 17 5 21 12 2",
            key: "x8c0qg"
        }
    ]
]);
var Navigation2$1 = Navigation2;
var NavigationOff = createReactComponent("NavigationOff", [
    [
        "path",
        {
            d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43",
            key: "1vdtb7"
        }
    ],
    [
        "path",
        {
            d: "M17.39 11.73 22 2l-9.73 4.61",
            key: "tya3r6"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var NavigationOff$1 = NavigationOff;
var Navigation = createReactComponent("Navigation", [
    [
        "polygon",
        {
            points: "3 11 22 2 13 21 11 13 3 11",
            key: "1ltx0t"
        }
    ]
]);
var Navigation$1 = Navigation;
var Network = createReactComponent("Network", [
    [
        "rect",
        {
            x: "9",
            y: "2",
            width: "6",
            height: "6",
            key: "1iwon9"
        }
    ],
    [
        "rect",
        {
            x: "16",
            y: "16",
            width: "6",
            height: "6",
            key: "gonbwd"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "16",
            width: "6",
            height: "6",
            key: "1q0lzr"
        }
    ],
    [
        "path",
        {
            d: "M5 16v-4h14v4",
            key: "8njgxx"
        }
    ],
    [
        "path",
        {
            d: "M12 12V8",
            key: "2874zd"
        }
    ]
]);
var Network$1 = Network;
var Newspaper = createReactComponent("Newspaper", [
    [
        "path",
        {
            d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
            key: "7pis2x"
        }
    ],
    [
        "path",
        {
            d: "M18 14h-8",
            key: "sponae"
        }
    ],
    [
        "path",
        {
            d: "M15 18h-5",
            key: "95g1m2"
        }
    ],
    [
        "path",
        {
            d: "M10 6h8v4h-8V6Z",
            key: "smlsk5"
        }
    ]
]);
var Newspaper$1 = Newspaper;
var Octagon = createReactComponent("Octagon", [
    [
        "polygon",
        {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
            key: "h1p8hx"
        }
    ]
]);
var Octagon$1 = Octagon;
var Option = createReactComponent("Option", [
    [
        "path",
        {
            d: "M3 3h6l6 18h6",
            key: "ph9rgk"
        }
    ],
    [
        "path",
        {
            d: "M14 3h7",
            key: "16f0ms"
        }
    ]
]);
var Option$1 = Option;
var Outdent = createReactComponent("Outdent", [
    [
        "polyline",
        {
            points: "7 8 3 12 7 16",
            key: "2j60jr"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "12",
            x2: "11",
            y2: "12",
            key: "1xy73i"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "6",
            x2: "11",
            y2: "6",
            key: "97xvqg"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "18",
            x2: "11",
            y2: "18",
            key: "1r7j8g"
        }
    ]
]);
var Outdent$1 = Outdent;
var Package2 = createReactComponent("Package2", [
    [
        "path",
        {
            d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",
            key: "1ront0"
        }
    ],
    [
        "path",
        {
            d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",
            key: "19h2x1"
        }
    ],
    [
        "path",
        {
            d: "M12 3v6",
            key: "1holv5"
        }
    ]
]);
var Package2$1 = Package2;
var PackageCheck = createReactComponent("PackageCheck", [
    [
        "path",
        {
            d: "m16 16 2 2 4-4",
            key: "gfu2re"
        }
    ],
    [
        "path",
        {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }
    ],
    [
        "path",
        {
            d: "M16.5 9.4 7.55 4.24",
            key: "10qotr"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ]
]);
var PackageCheck$1 = PackageCheck;
var PackageMinus = createReactComponent("PackageMinus", [
    [
        "path",
        {
            d: "M16 16h6",
            key: "100bgy"
        }
    ],
    [
        "path",
        {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }
    ],
    [
        "path",
        {
            d: "M16.5 9.4 7.55 4.24",
            key: "10qotr"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ]
]);
var PackageMinus$1 = PackageMinus;
var PackageOpen = createReactComponent("PackageOpen", [
    [
        "path",
        {
            d: "M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z",
            key: "1vy178"
        }
    ],
    [
        "path",
        {
            d: "m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z",
            key: "s3bv25"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "13",
            key: "15r0fr"
        }
    ],
    [
        "path",
        {
            d: "M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5",
            key: "1na2nq"
        }
    ]
]);
var PackageOpen$1 = PackageOpen;
var PackagePlus = createReactComponent("PackagePlus", [
    [
        "path",
        {
            d: "M16 16h6",
            key: "100bgy"
        }
    ],
    [
        "path",
        {
            d: "M19 13v6",
            key: "85cyf1"
        }
    ],
    [
        "path",
        {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }
    ],
    [
        "path",
        {
            d: "M16.5 9.4 7.55 4.24",
            key: "10qotr"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ]
]);
var PackagePlus$1 = PackagePlus;
var PackageSearch = createReactComponent("PackageSearch", [
    [
        "path",
        {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }
    ],
    [
        "path",
        {
            d: "M16.5 9.4 7.55 4.24",
            key: "10qotr"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ],
    [
        "circle",
        {
            cx: "18.5",
            cy: "15.5",
            r: "2.5",
            key: "b5zd12"
        }
    ],
    [
        "path",
        {
            d: "M20.27 17.27 22 19",
            key: "1l4muz"
        }
    ]
]);
var PackageSearch$1 = PackageSearch;
var PackageX = createReactComponent("PackageX", [
    [
        "path",
        {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }
    ],
    [
        "path",
        {
            d: "M16.5 9.4 7.55 4.24",
            key: "10qotr"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ],
    [
        "path",
        {
            d: "m17 13 5 5m-5 0 5-5",
            key: "im3w4b"
        }
    ]
]);
var PackageX$1 = PackageX;
var Package = createReactComponent("Package", [
    [
        "line",
        {
            x1: "16.5",
            y1: "9.4",
            x2: "7.5",
            y2: "4.21",
            key: "i6f8yp"
        }
    ],
    [
        "path",
        {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
            key: "yt0hxn"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ]
]);
var Package$1 = Package;
var PaintBucket = createReactComponent("PaintBucket", [
    [
        "path",
        {
            d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",
            key: "irua1i"
        }
    ],
    [
        "path",
        {
            d: "m5 2 5 5",
            key: "1lls2c"
        }
    ],
    [
        "path",
        {
            d: "M2 13h15",
            key: "1hkzvu"
        }
    ],
    [
        "path",
        {
            d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",
            key: "xk76lq"
        }
    ]
]);
var PaintBucket$1 = PaintBucket;
var Paintbrush2 = createReactComponent("Paintbrush2", [
    [
        "path",
        {
            d: "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z",
            key: "1c8kta"
        }
    ],
    [
        "path",
        {
            d: "M6 12V2h12v10",
            key: "1esbnf"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4",
            key: "qmzblu"
        }
    ],
    [
        "path",
        {
            d: "M10 2v2",
            key: "7u0qdc"
        }
    ]
]);
var Paintbrush2$1 = Paintbrush2;
var Paintbrush = createReactComponent("Paintbrush", [
    [
        "path",
        {
            d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",
            key: "m6k5sh"
        }
    ],
    [
        "path",
        {
            d: "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",
            key: "arzq70"
        }
    ],
    [
        "path",
        {
            d: "M14.5 17.5 4.5 15",
            key: "s7fvrz"
        }
    ]
]);
var Paintbrush$1 = Paintbrush;
var Palette = createReactComponent("Palette", [
    [
        "circle",
        {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            key: "1xcu5"
        }
    ],
    [
        "circle",
        {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            key: "736e4u"
        }
    ],
    [
        "circle",
        {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            key: "clrty"
        }
    ],
    [
        "circle",
        {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            key: "1s4xz9"
        }
    ],
    [
        "path",
        {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8"
        }
    ]
]);
var Palette$1 = Palette;
var Palmtree = createReactComponent("Palmtree", [
    [
        "path",
        {
            d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",
            key: "foxbe7"
        }
    ],
    [
        "path",
        {
            d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",
            key: "18arnh"
        }
    ],
    [
        "path",
        {
            d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",
            key: "epoumf"
        }
    ],
    [
        "path",
        {
            d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",
            key: "ft0feo"
        }
    ]
]);
var Palmtree$1 = Palmtree;
var Paperclip = createReactComponent("Paperclip", [
    [
        "path",
        {
            d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
            key: "1u3ebp"
        }
    ]
]);
var Paperclip$1 = Paperclip;
var PartyPopper = createReactComponent("PartyPopper", [
    [
        "path",
        {
            d: "M5.8 11.3 2 22l10.7-3.79",
            key: "gwxi1d"
        }
    ],
    [
        "path",
        {
            d: "M4 3h.01",
            key: "1vcuye"
        }
    ],
    [
        "path",
        {
            d: "M22 8h.01",
            key: "1mrtc2"
        }
    ],
    [
        "path",
        {
            d: "M15 2h.01",
            key: "1cjtqr"
        }
    ],
    [
        "path",
        {
            d: "M22 20h.01",
            key: "1mrys2"
        }
    ],
    [
        "path",
        {
            d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
            key: "bpx1uq"
        }
    ],
    [
        "path",
        {
            d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",
            key: "1pd0s7"
        }
    ],
    [
        "path",
        {
            d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",
            key: "zq5xbz"
        }
    ],
    [
        "path",
        {
            d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
            key: "4kbmks"
        }
    ]
]);
var PartyPopper$1 = PartyPopper;
var PauseCircle = createReactComponent("PauseCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "15",
            x2: "10",
            y2: "9",
            key: "2cxng6"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "15",
            x2: "14",
            y2: "9",
            key: "wsglx2"
        }
    ]
]);
var PauseCircle$1 = PauseCircle;
var PauseOctagon = createReactComponent("PauseOctagon", [
    [
        "path",
        {
            d: "M10 15V9",
            key: "1lckn7"
        }
    ],
    [
        "path",
        {
            d: "M14 15V9",
            key: "1muqhk"
        }
    ],
    [
        "path",
        {
            d: "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z",
            key: "1m7qra"
        }
    ]
]);
var PauseOctagon$1 = PauseOctagon;
var Pause = createReactComponent("Pause", [
    [
        "rect",
        {
            x: "6",
            y: "4",
            width: "4",
            height: "16",
            key: "5yltu4"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "4",
            width: "4",
            height: "16",
            key: "duxydb"
        }
    ]
]);
var Pause$1 = Pause;
var PenTool = createReactComponent("PenTool", [
    [
        "path",
        {
            d: "m12 19 7-7 3 3-7 7-3-3z",
            key: "rklqx2"
        }
    ],
    [
        "path",
        {
            d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",
            key: "1et58u"
        }
    ],
    [
        "path",
        {
            d: "m2 2 7.586 7.586",
            key: "etlp93"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "2",
            key: "xmgehs"
        }
    ]
]);
var PenTool$1 = PenTool;
var Pencil = createReactComponent("Pencil", [
    [
        "line",
        {
            x1: "18",
            y1: "2",
            x2: "22",
            y2: "6",
            key: "1k5sg2"
        }
    ],
    [
        "path",
        {
            d: "M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z",
            key: "12iwkt"
        }
    ]
]);
var Pencil$1 = Pencil;
var Percent = createReactComponent("Percent", [
    [
        "line",
        {
            x1: "19",
            y1: "5",
            x2: "5",
            y2: "19",
            key: "t1677v"
        }
    ],
    [
        "circle",
        {
            cx: "6.5",
            cy: "6.5",
            r: "2.5",
            key: "4mh3h7"
        }
    ],
    [
        "circle",
        {
            cx: "17.5",
            cy: "17.5",
            r: "2.5",
            key: "1mdrzq"
        }
    ]
]);
var Percent$1 = Percent;
var PersonStanding = createReactComponent("PersonStanding", [
    [
        "circle",
        {
            cx: "12",
            cy: "5",
            r: "1",
            key: "gxeob9"
        }
    ],
    [
        "path",
        {
            d: "m9 20 3-6 3 6",
            key: "se2kox"
        }
    ],
    [
        "path",
        {
            d: "m6 8 6 2 6-2",
            key: "4o3us4"
        }
    ],
    [
        "path",
        {
            d: "M12 10v4",
            key: "1kjpxc"
        }
    ]
]);
var PersonStanding$1 = PersonStanding;
var PhoneCall = createReactComponent("PhoneCall", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ],
    [
        "path",
        {
            d: "M14.05 2a9 9 0 0 1 8 7.94",
            key: "vmijpz"
        }
    ],
    [
        "path",
        {
            d: "M14.05 6A5 5 0 0 1 18 10",
            key: "13nbpp"
        }
    ]
]);
var PhoneCall$1 = PhoneCall;
var PhoneForwarded = createReactComponent("PhoneForwarded", [
    [
        "polyline",
        {
            points: "18 2 22 6 18 10",
            key: "6vjanh"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "6",
            x2: "22",
            y2: "6",
            key: "1yuov7"
        }
    ],
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
var PhoneForwarded$1 = PhoneForwarded;
var PhoneIncoming = createReactComponent("PhoneIncoming", [
    [
        "polyline",
        {
            points: "16 2 16 8 22 8",
            key: "1ygljm"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "2",
            x2: "16",
            y2: "8",
            key: "kb9lty"
        }
    ],
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
var PhoneIncoming$1 = PhoneIncoming;
var PhoneMissed = createReactComponent("PhoneMissed", [
    [
        "line",
        {
            x1: "22",
            y1: "2",
            x2: "16",
            y2: "8",
            key: "kb9lty"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "22",
            y2: "8",
            key: "11291p"
        }
    ],
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
var PhoneMissed$1 = PhoneMissed;
var PhoneOff = createReactComponent("PhoneOff", [
    [
        "path",
        {
            d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",
            key: "z86iuo"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "2",
            x2: "2",
            y2: "22",
            key: "1sphze"
        }
    ]
]);
var PhoneOff$1 = PhoneOff;
var PhoneOutgoing = createReactComponent("PhoneOutgoing", [
    [
        "polyline",
        {
            points: "22 8 22 2 16 2",
            key: "1g204g"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "8",
            x2: "22",
            y2: "2",
            key: "1hkegm"
        }
    ],
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
var PhoneOutgoing$1 = PhoneOutgoing;
var Phone = createReactComponent("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
var Phone$1 = Phone;
var PieChart = createReactComponent("PieChart", [
    [
        "path",
        {
            d: "M21.21 15.89A10 10 0 1 1 8 2.83",
            key: "k2fpak"
        }
    ],
    [
        "path",
        {
            d: "M22 12A10 10 0 0 0 12 2v10z",
            key: "1rfc4y"
        }
    ]
]);
var PieChart$1 = PieChart;
var PiggyBank = createReactComponent("PiggyBank", [
    [
        "path",
        {
            d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",
            key: "uf6l00"
        }
    ],
    [
        "path",
        {
            d: "M2 9v1c0 1.1.9 2 2 2h1",
            key: "nm575m"
        }
    ],
    [
        "path",
        {
            d: "M16 11h0",
            key: "k2aug8"
        }
    ]
]);
var PiggyBank$1 = PiggyBank;
var PinOff = createReactComponent("PinOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "17",
            x2: "12",
            y2: "22",
            key: "fb3qrx"
        }
    ],
    [
        "path",
        {
            d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",
            key: "13x2n8"
        }
    ],
    [
        "path",
        {
            d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89",
            key: "reo3ki"
        }
    ]
]);
var PinOff$1 = PinOff;
var Pin = createReactComponent("Pin", [
    [
        "line",
        {
            x1: "12",
            y1: "17",
            x2: "12",
            y2: "22",
            key: "fb3qrx"
        }
    ],
    [
        "path",
        {
            d: "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",
            key: "13yl11"
        }
    ]
]);
var Pin$1 = Pin;
var Pipette = createReactComponent("Pipette", [
    [
        "path",
        {
            d: "m2 22 1-1h3l9-9",
            key: "1sre89"
        }
    ],
    [
        "path",
        {
            d: "M3 21v-3l9-9",
            key: "hpe2y6"
        }
    ],
    [
        "path",
        {
            d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
            key: "196du1"
        }
    ]
]);
var Pipette$1 = Pipette;
var Pizza = createReactComponent("Pizza", [
    [
        "path",
        {
            d: "M15 11h.01",
            key: "rns66s"
        }
    ],
    [
        "path",
        {
            d: "M11 15h.01",
            key: "k85uqc"
        }
    ],
    [
        "path",
        {
            d: "M16 16h.01",
            key: "1f9h7w"
        }
    ],
    [
        "path",
        {
            d: "m2 16 20 6-6-20c-3.36.9-6.42 2.67-8.88 5.12A19.876 19.876 0 0 0 2 16Z",
            key: "1akyvp"
        }
    ],
    [
        "path",
        {
            d: "M17 6c-6.29 1.47-9.43 5.13-11 11",
            key: "1dsok0"
        }
    ]
]);
var Pizza$1 = Pizza;
var Plane = createReactComponent("Plane", [
    [
        "path",
        {
            d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
            key: "1v9wt8"
        }
    ]
]);
var Plane$1 = Plane;
var PlayCircle = createReactComponent("PlayCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polygon",
        {
            points: "10 8 16 12 10 16 10 8",
            key: "1cimsy"
        }
    ]
]);
var PlayCircle$1 = PlayCircle;
var Play = createReactComponent("Play", [
    [
        "polygon",
        {
            points: "5 3 19 12 5 21 5 3",
            key: "191637"
        }
    ]
]);
var Play$1 = Play;
var Plug2 = createReactComponent("Plug2", [
    [
        "path",
        {
            d: "M9 2v6",
            key: "17ngun"
        }
    ],
    [
        "path",
        {
            d: "M15 2v6",
            key: "s7yy2p"
        }
    ],
    [
        "path",
        {
            d: "M12 17v5",
            key: "bb1du9"
        }
    ],
    [
        "path",
        {
            d: "M5 8h14",
            key: "pcz4l3"
        }
    ],
    [
        "path",
        {
            d: "M6 11V8h12v3a6 6 0 1 1-12 0v0Z",
            key: "nd4hoy"
        }
    ]
]);
var Plug2$1 = Plug2;
var PlugZap = createReactComponent("PlugZap", [
    [
        "path",
        {
            d: "m13 2-2 2.5h3L12 7",
            key: "1me98u"
        }
    ],
    [
        "path",
        {
            d: "M12 22v-3",
            key: "kmzjlo"
        }
    ],
    [
        "path",
        {
            d: "M10 13v-2.5",
            key: "1g2mrq"
        }
    ],
    [
        "path",
        {
            d: "M10 12.5v-2",
            key: "pcvzbb"
        }
    ],
    [
        "path",
        {
            d: "M14 12.5v-2",
            key: "qv1toj"
        }
    ],
    [
        "path",
        {
            d: "M16 15a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2z",
            key: "17xmdd"
        }
    ]
]);
var PlugZap$1 = PlugZap;
var Plug = createReactComponent("Plug", [
    [
        "path",
        {
            d: "M12 22v-5",
            key: "1ega77"
        }
    ],
    [
        "path",
        {
            d: "M9 7V2",
            key: "1r97uf"
        }
    ],
    [
        "path",
        {
            d: "M15 7V2",
            key: "1uo4jc"
        }
    ],
    [
        "path",
        {
            d: "M6 13V8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z",
            key: "1xki7n"
        }
    ]
]);
var Plug$1 = Plug;
var PlusCircle = createReactComponent("PlusCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "16",
            key: "55jlg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
var PlusCircle$1 = PlusCircle;
var PlusSquare = createReactComponent("PlusSquare", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "16",
            key: "55jlg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
var PlusSquare$1 = PlusSquare;
var Plus = createReactComponent("Plus", [
    [
        "line",
        {
            x1: "12",
            y1: "5",
            x2: "12",
            y2: "19",
            key: "myz83a"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
            key: "1smlys"
        }
    ]
]);
var Plus$1 = Plus;
var Pocket = createReactComponent("Pocket", [
    [
        "path",
        {
            d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",
            key: "1mz881"
        }
    ],
    [
        "polyline",
        {
            points: "8 10 12 14 16 10",
            key: "w4mbv5"
        }
    ]
]);
var Pocket$1 = Pocket;
var Podcast = createReactComponent("Podcast", [
    [
        "circle",
        {
            cx: "12",
            cy: "11",
            r: "1",
            key: "1gvufo"
        }
    ],
    [
        "path",
        {
            d: "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",
            key: "1n5fvv"
        }
    ],
    [
        "path",
        {
            d: "M8 14a5 5 0 1 1 8 0",
            key: "fc81rn"
        }
    ],
    [
        "path",
        {
            d: "M17 18.5a9 9 0 1 0-10 0",
            key: "jqtxkf"
        }
    ]
]);
var Podcast$1 = Podcast;
var Pointer = createReactComponent("Pointer", [
    [
        "path",
        {
            d: "M22 14a8 8 0 0 1-8 8",
            key: "56vcr3"
        }
    ],
    [
        "path",
        {
            d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",
            key: "1pp0yd"
        }
    ],
    [
        "path",
        {
            d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1",
            key: "u654g"
        }
    ],
    [
        "path",
        {
            d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10",
            key: "1e2dtv"
        }
    ],
    [
        "path",
        {
            d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
            key: "g6ys72"
        }
    ]
]);
var Pointer$1 = Pointer;
var PoundSterling = createReactComponent("PoundSterling", [
    [
        "path",
        {
            d: "M18 7c0-5.333-8-5.333-8 0",
            key: "1prm2n"
        }
    ],
    [
        "path",
        {
            d: "M10 7v14",
            key: "18tmcs"
        }
    ],
    [
        "path",
        {
            d: "M6 21h12",
            key: "4dkmi1"
        }
    ],
    [
        "path",
        {
            d: "M6 13h10",
            key: "ybwr4a"
        }
    ]
]);
var PoundSterling$1 = PoundSterling;
var PowerOff = createReactComponent("PowerOff", [
    [
        "path",
        {
            d: "M18.36 6.64A9 9 0 0 1 20.77 15",
            key: "dxknvb"
        }
    ],
    [
        "path",
        {
            d: "M6.16 6.16a9 9 0 1 0 12.68 12.68",
            key: "1x7qb5"
        }
    ],
    [
        "path",
        {
            d: "M12 2v4",
            key: "3427ic"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
]);
var PowerOff$1 = PowerOff;
var Power = createReactComponent("Power", [
    [
        "path",
        {
            d: "M18.36 6.64a9 9 0 1 1-12.73 0",
            key: "phirl6"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "12",
            key: "1d1p48"
        }
    ]
]);
var Power$1 = Power;
var Printer = createReactComponent("Printer", [
    [
        "polyline",
        {
            points: "6 9 6 2 18 2 18 9",
            key: "1306q4"
        }
    ],
    [
        "path",
        {
            d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
            key: "143wyd"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "14",
            width: "12",
            height: "8",
            key: "emw7yt"
        }
    ]
]);
var Printer$1 = Printer;
var Puzzle = createReactComponent("Puzzle", [
    [
        "path",
        {
            d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
            key: "i0oyt7"
        }
    ]
]);
var Puzzle$1 = Puzzle;
var QrCode = createReactComponent("QrCode", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "5",
            height: "5",
            rx: "1",
            key: "fue5ao"
        }
    ],
    [
        "rect",
        {
            x: "16",
            y: "3",
            width: "5",
            height: "5",
            rx: "1",
            key: "1narh3"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "16",
            width: "5",
            height: "5",
            rx: "1",
            key: "1ovwlo"
        }
    ],
    [
        "path",
        {
            d: "M21 16h-3a2 2 0 0 0-2 2v3",
            key: "177gqh"
        }
    ],
    [
        "path",
        {
            d: "M21 21v.01",
            key: "ents32"
        }
    ],
    [
        "path",
        {
            d: "M12 7v3a2 2 0 0 1-2 2H7",
            key: "8crl2c"
        }
    ],
    [
        "path",
        {
            d: "M3 12h.01",
            key: "nlz23k"
        }
    ],
    [
        "path",
        {
            d: "M12 3h.01",
            key: "n36tog"
        }
    ],
    [
        "path",
        {
            d: "M12 16v.01",
            key: "133mhm"
        }
    ],
    [
        "path",
        {
            d: "M16 12h1",
            key: "1slzba"
        }
    ],
    [
        "path",
        {
            d: "M21 12v.01",
            key: "1lwtk9"
        }
    ],
    [
        "path",
        {
            d: "M12 21v-1",
            key: "1880an"
        }
    ]
]);
var QrCode$1 = QrCode;
var Quote = createReactComponent("Quote", [
    [
        "path",
        {
            d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
            key: "4rm80e"
        }
    ],
    [
        "path",
        {
            d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
            key: "10za9r"
        }
    ]
]);
var Quote$1 = Quote;
var RadioReceiver = createReactComponent("RadioReceiver", [
    [
        "path",
        {
            d: "M5 16v2",
            key: "g5qcv5"
        }
    ],
    [
        "path",
        {
            d: "M19 16v2",
            key: "1gbaio"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "8",
            width: "20",
            height: "8",
            rx: "2",
            key: "1xflse"
        }
    ],
    [
        "path",
        {
            d: "M18 12h0",
            key: "1ucjzd"
        }
    ]
]);
var RadioReceiver$1 = RadioReceiver;
var Radio = createReactComponent("Radio", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }
    ],
    [
        "path",
        {
            d: "M4.93 19.07a10 10 0 0 1 0-14.14",
            key: "r41b39"
        }
    ],
    [
        "path",
        {
            d: "M7.76 16.24a6 6 0 0 1-1.3-1.95 6 6 0 0 1 0-4.59 6 6 0 0 1 1.3-1.95",
            key: "1pc8et"
        }
    ],
    [
        "path",
        {
            d: "M16.24 7.76a6 6 0 0 1 1.3 2 6 6 0 0 1 0 4.59 6 6 0 0 1-1.3 1.95",
            key: "8dzjga"
        }
    ],
    [
        "path",
        {
            d: "M19.07 4.93a10 10 0 0 1 0 14.14",
            key: "1kegas"
        }
    ]
]);
var Radio$1 = Radio;
var RectangleHorizontal = createReactComponent("RectangleHorizontal", [
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "20",
            height: "12",
            rx: "2",
            key: "1wpnh2"
        }
    ]
]);
var RectangleHorizontal$1 = RectangleHorizontal;
var RectangleVertical = createReactComponent("RectangleVertical", [
    [
        "rect",
        {
            x: "6",
            y: "2",
            width: "12",
            height: "20",
            rx: "2",
            key: "749fme"
        }
    ]
]);
var RectangleVertical$1 = RectangleVertical;
var Recycle = createReactComponent("Recycle", [
    [
        "path",
        {
            d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
            key: "x6z5xu"
        }
    ],
    [
        "path",
        {
            d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
            key: "1x4zh5"
        }
    ],
    [
        "path",
        {
            d: "m14 16-3 3 3 3",
            key: "f6jyew"
        }
    ],
    [
        "path",
        {
            d: "M8.293 13.596 7.196 9.5 3.1 10.598",
            key: "wf1obh"
        }
    ],
    [
        "path",
        {
            d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
            key: "9tzpgr"
        }
    ],
    [
        "path",
        {
            d: "m13.378 9.633 4.096 1.098 1.097-4.096",
            key: "1oe83g"
        }
    ]
]);
var Recycle$1 = Recycle;
var Redo2 = createReactComponent("Redo2", [
    [
        "path",
        {
            d: "m15 14 5-5-5-5",
            key: "12vg1m"
        }
    ],
    [
        "path",
        {
            d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13",
            key: "19mnr4"
        }
    ]
]);
var Redo2$1 = Redo2;
var Redo = createReactComponent("Redo", [
    [
        "path",
        {
            d: "M21 7v6h-6",
            key: "3ptur4"
        }
    ],
    [
        "path",
        {
            d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",
            key: "1kgawr"
        }
    ]
]);
var Redo$1 = Redo;
var RefreshCcw = createReactComponent("RefreshCcw", [
    [
        "path",
        {
            d: "M3 2v6h6",
            key: "18ldww"
        }
    ],
    [
        "path",
        {
            d: "M21 12A9 9 0 0 0 6 5.3L3 8",
            key: "1pbrqz"
        }
    ],
    [
        "path",
        {
            d: "M21 22v-6h-6",
            key: "usdfbe"
        }
    ],
    [
        "path",
        {
            d: "M3 12a9 9 0 0 0 15 6.7l3-2.7",
            key: "1hosoe"
        }
    ]
]);
var RefreshCcw$1 = RefreshCcw;
var RefreshCw = createReactComponent("RefreshCw", [
    [
        "path",
        {
            d: "M21 2v6h-6",
            key: "1lwg0q"
        }
    ],
    [
        "path",
        {
            d: "M3 12a9 9 0 0 1 15-6.7L21 8",
            key: "vaktt2"
        }
    ],
    [
        "path",
        {
            d: "M3 22v-6h6",
            key: "6llvyv"
        }
    ],
    [
        "path",
        {
            d: "M21 12a9 9 0 0 1-15 6.7L3 16",
            key: "i52hsp"
        }
    ]
]);
var RefreshCw$1 = RefreshCw;
var Refrigerator = createReactComponent("Refrigerator", [
    [
        "path",
        {
            d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",
            key: "fpq118"
        }
    ],
    [
        "path",
        {
            d: "M5 10h14",
            key: "elsbfy"
        }
    ],
    [
        "path",
        {
            d: "M15 7v6",
            key: "1nx30x"
        }
    ]
]);
var Refrigerator$1 = Refrigerator;
var Regex = createReactComponent("Regex", [
    [
        "path",
        {
            d: "M17 3v10",
            key: "15fgeh"
        }
    ],
    [
        "path",
        {
            d: "m12.67 5.5 8.66 5",
            key: "1gpheq"
        }
    ],
    [
        "path",
        {
            d: "m12.67 10.5 8.66-5",
            key: "1dkfa6"
        }
    ],
    [
        "path",
        {
            d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",
            key: "swwfx4"
        }
    ]
]);
var Regex$1 = Regex;
var Repeat1 = createReactComponent("Repeat1", [
    [
        "path",
        {
            d: "m17 2 4 4-4 4",
            key: "nntrym"
        }
    ],
    [
        "path",
        {
            d: "M3 11v-1a4 4 0 0 1 4-4h14",
            key: "84bu3i"
        }
    ],
    [
        "path",
        {
            d: "m7 22-4-4 4-4",
            key: "1wqhfi"
        }
    ],
    [
        "path",
        {
            d: "M21 13v1a4 4 0 0 1-4 4H3",
            key: "1rx37r"
        }
    ],
    [
        "path",
        {
            d: "M11 10h1v4",
            key: "70cz1p"
        }
    ]
]);
var Repeat1$1 = Repeat1;
var Repeat = createReactComponent("Repeat", [
    [
        "path",
        {
            d: "m17 2 4 4-4 4",
            key: "nntrym"
        }
    ],
    [
        "path",
        {
            d: "M3 11v-1a4 4 0 0 1 4-4h14",
            key: "84bu3i"
        }
    ],
    [
        "path",
        {
            d: "m7 22-4-4 4-4",
            key: "1wqhfi"
        }
    ],
    [
        "path",
        {
            d: "M21 13v1a4 4 0 0 1-4 4H3",
            key: "1rx37r"
        }
    ]
]);
var Repeat$1 = Repeat;
var ReplyAll = createReactComponent("ReplyAll", [
    [
        "polyline",
        {
            points: "7 17 2 12 7 7",
            key: "t83bqg"
        }
    ],
    [
        "polyline",
        {
            points: "12 17 7 12 12 7",
            key: "1g4ajm"
        }
    ],
    [
        "path",
        {
            d: "M22 18v-2a4 4 0 0 0-4-4H7",
            key: "1fcyog"
        }
    ]
]);
var ReplyAll$1 = ReplyAll;
var Reply = createReactComponent("Reply", [
    [
        "polyline",
        {
            points: "9 17 4 12 9 7",
            key: "hvgpf2"
        }
    ],
    [
        "path",
        {
            d: "M20 18v-2a4 4 0 0 0-4-4H4",
            key: "5vmcpk"
        }
    ]
]);
var Reply$1 = Reply;
var Rewind = createReactComponent("Rewind", [
    [
        "polygon",
        {
            points: "11 19 2 12 11 5 11 19",
            key: "14yba5"
        }
    ],
    [
        "polygon",
        {
            points: "22 19 13 12 22 5 22 19",
            key: "1pi1cj"
        }
    ]
]);
var Rewind$1 = Rewind;
var Rocket = createReactComponent("Rocket", [
    [
        "path",
        {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz"
        }
    ],
    [
        "path",
        {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk"
        }
    ],
    [
        "path",
        {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
            key: "1f8sc4"
        }
    ],
    [
        "path",
        {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
            key: "qeys4"
        }
    ]
]);
var Rocket$1 = Rocket;
var RockingChair = createReactComponent("RockingChair", [
    [
        "polyline",
        {
            points: "3.5 2 6.5 12.5 18 12.5",
            key: "y3iy52"
        }
    ],
    [
        "line",
        {
            x1: "9.5",
            y1: "12.5",
            x2: "5.5",
            y2: "20",
            key: "ivgihp"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "12.5",
            x2: "18.5",
            y2: "20",
            key: "1palb4"
        }
    ],
    [
        "path",
        {
            d: "M2.75 18a13 13 0 0 0 18.5 0",
            key: "1nquas"
        }
    ]
]);
var RockingChair$1 = RockingChair;
var Rotate3d = createReactComponent("Rotate3d", [
    [
        "path",
        {
            d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",
            key: "10n0gc"
        }
    ],
    [
        "path",
        {
            d: "m15.194 13.707 3.814 1.86-1.86 3.814",
            key: "16shm9"
        }
    ],
    [
        "path",
        {
            d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",
            key: "1lxi77"
        }
    ]
]);
var Rotate3d$1 = Rotate3d;
var RotateCcw = createReactComponent("RotateCcw", [
    [
        "path",
        {
            d: "M3 2v6h6",
            key: "18ldww"
        }
    ],
    [
        "path",
        {
            d: "M3 13a9 9 0 1 0 3-7.7L3 8",
            key: "aahkch"
        }
    ]
]);
var RotateCcw$1 = RotateCcw;
var RotateCw = createReactComponent("RotateCw", [
    [
        "path",
        {
            d: "M21 2v6h-6",
            key: "1lwg0q"
        }
    ],
    [
        "path",
        {
            d: "M21 13a9 9 0 1 1-3-7.7L21 8",
            key: "vix499"
        }
    ]
]);
var RotateCw$1 = RotateCw;
var Rss = createReactComponent("Rss", [
    [
        "path",
        {
            d: "M4 11a9 9 0 0 1 9 9",
            key: "pv89mb"
        }
    ],
    [
        "path",
        {
            d: "M4 4a16 16 0 0 1 16 16",
            key: "k0647b"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "19",
            r: "1",
            key: "bfqh0e"
        }
    ]
]);
var Rss$1 = Rss;
var Ruler = createReactComponent("Ruler", [
    [
        "path",
        {
            d: "M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z",
            key: "14xb44"
        }
    ],
    [
        "path",
        {
            d: "m7.5 10.5 2 2",
            key: "3h1c69"
        }
    ],
    [
        "path",
        {
            d: "m10.5 7.5 2 2",
            key: "1lvsmz"
        }
    ],
    [
        "path",
        {
            d: "m13.5 4.5 2 2",
            key: "1i616n"
        }
    ],
    [
        "path",
        {
            d: "m4.5 13.5 2 2",
            key: "16iojn"
        }
    ]
]);
var Ruler$1 = Ruler;
var RussianRuble = createReactComponent("RussianRuble", [
    [
        "path",
        {
            d: "M14 11c5.333 0 5.333-8 0-8",
            key: "92e629"
        }
    ],
    [
        "path",
        {
            d: "M6 11h8",
            key: "1cr2u4"
        }
    ],
    [
        "path",
        {
            d: "M6 15h8",
            key: "1y8f6l"
        }
    ],
    [
        "path",
        {
            d: "M9 21V3",
            key: "1jd2g6"
        }
    ],
    [
        "path",
        {
            d: "M9 3h5",
            key: "8bgvcw"
        }
    ]
]);
var RussianRuble$1 = RussianRuble;
var Sailboat = createReactComponent("Sailboat", [
    [
        "path",
        {
            d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",
            key: "1404fh"
        }
    ],
    [
        "path",
        {
            d: "M21 14 10 2 3 14h18Z",
            key: "1nzg7v"
        }
    ],
    [
        "path",
        {
            d: "M10 2v16",
            key: "1labyt"
        }
    ]
]);
var Sailboat$1 = Sailboat;
var Save = createReactComponent("Save", [
    [
        "path",
        {
            d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
            key: "1owoqh"
        }
    ],
    [
        "polyline",
        {
            points: "17 21 17 13 7 13 7 21",
            key: "1md35c"
        }
    ],
    [
        "polyline",
        {
            points: "7 3 7 8 15 8",
            key: "8nz8an"
        }
    ]
]);
var Save$1 = Save;
var Scale3d = createReactComponent("Scale3d", [
    [
        "path",
        {
            d: "M5 7v12h12",
            key: "vtaa4r"
        }
    ],
    [
        "path",
        {
            d: "m5 19 6-6",
            key: "jh6hbb"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "4",
            height: "4",
            rx: "1",
            key: "1qeirs"
        }
    ],
    [
        "rect",
        {
            x: "17",
            y: "17",
            width: "4",
            height: "4",
            rx: "1",
            key: "b22pg0"
        }
    ]
]);
var Scale3d$1 = Scale3d;
var Scale = createReactComponent("Scale", [
    [
        "path",
        {
            d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
            key: "7g6ntu"
        }
    ],
    [
        "path",
        {
            d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
            key: "ijws7r"
        }
    ],
    [
        "path",
        {
            d: "M7 21h10",
            key: "1b0cd5"
        }
    ],
    [
        "path",
        {
            d: "M12 3v18",
            key: "108xh3"
        }
    ],
    [
        "path",
        {
            d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
            key: "3gwbw2"
        }
    ]
]);
var Scale$1 = Scale;
var Scaling = createReactComponent("Scaling", [
    [
        "path",
        {
            d: "M21 3 9 15",
            key: "15kdhq"
        }
    ],
    [
        "path",
        {
            d: "M12 3H3v18h18v-9",
            key: "8suug0"
        }
    ],
    [
        "path",
        {
            d: "M16 3h5v5",
            key: "1806ms"
        }
    ],
    [
        "path",
        {
            d: "M14 15H9v-5",
            key: "pi4jk9"
        }
    ]
]);
var Scaling$1 = Scaling;
var ScanFace = createReactComponent("ScanFace", [
    [
        "path",
        {
            d: "M3 7V5a2 2 0 0 1 2-2h2",
            key: "aa7l1z"
        }
    ],
    [
        "path",
        {
            d: "M17 3h2a2 2 0 0 1 2 2v2",
            key: "4qcy5o"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2h-2",
            key: "6vwrx8"
        }
    ],
    [
        "path",
        {
            d: "M7 21H5a2 2 0 0 1-2-2v-2",
            key: "ioqczr"
        }
    ],
    [
        "path",
        {
            d: "M8 14s1.5 2 4 2 4-2 4-2",
            key: "1y1vjs"
        }
    ],
    [
        "path",
        {
            d: "M9 9h.01",
            key: "1q5me6"
        }
    ],
    [
        "path",
        {
            d: "M15 9h.01",
            key: "x1ddxp"
        }
    ]
]);
var ScanFace$1 = ScanFace;
var ScanLine = createReactComponent("ScanLine", [
    [
        "path",
        {
            d: "M3 7V5a2 2 0 0 1 2-2h2",
            key: "aa7l1z"
        }
    ],
    [
        "path",
        {
            d: "M17 3h2a2 2 0 0 1 2 2v2",
            key: "4qcy5o"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2h-2",
            key: "6vwrx8"
        }
    ],
    [
        "path",
        {
            d: "M7 21H5a2 2 0 0 1-2-2v-2",
            key: "ioqczr"
        }
    ],
    [
        "line",
        {
            x1: "7",
            y1: "12",
            x2: "17",
            y2: "12",
            key: "bc9tui"
        }
    ]
]);
var ScanLine$1 = ScanLine;
var Scan = createReactComponent("Scan", [
    [
        "path",
        {
            d: "M3 7V5a2 2 0 0 1 2-2h2",
            key: "aa7l1z"
        }
    ],
    [
        "path",
        {
            d: "M17 3h2a2 2 0 0 1 2 2v2",
            key: "4qcy5o"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2h-2",
            key: "6vwrx8"
        }
    ],
    [
        "path",
        {
            d: "M7 21H5a2 2 0 0 1-2-2v-2",
            key: "ioqczr"
        }
    ]
]);
var Scan$1 = Scan;
var Scissors = createReactComponent("Scissors", [
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }
    ],
    [
        "line",
        {
            x1: "20",
            y1: "4",
            x2: "8.12",
            y2: "15.88",
            key: "3cwkde"
        }
    ],
    [
        "line",
        {
            x1: "14.47",
            y1: "14.48",
            x2: "20",
            y2: "20",
            key: "1keerz"
        }
    ],
    [
        "line",
        {
            x1: "8.12",
            y1: "8.12",
            x2: "12",
            y2: "12",
            key: "spxzcb"
        }
    ]
]);
var Scissors$1 = Scissors;
var ScreenShareOff = createReactComponent("ScreenShareOff", [
    [
        "path",
        {
            d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
            key: "i8wdob"
        }
    ],
    [
        "path",
        {
            d: "M8 21h8",
            key: "1ev6f3"
        }
    ],
    [
        "path",
        {
            d: "M12 17v4",
            key: "1riwvh"
        }
    ],
    [
        "path",
        {
            d: "m22 3-5 5",
            key: "12jva0"
        }
    ],
    [
        "path",
        {
            d: "m17 3 5 5",
            key: "k36vhe"
        }
    ]
]);
var ScreenShareOff$1 = ScreenShareOff;
var ScreenShare = createReactComponent("ScreenShare", [
    [
        "path",
        {
            d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
            key: "i8wdob"
        }
    ],
    [
        "path",
        {
            d: "M8 21h8",
            key: "1ev6f3"
        }
    ],
    [
        "path",
        {
            d: "M12 17v4",
            key: "1riwvh"
        }
    ],
    [
        "path",
        {
            d: "m17 8 5-5",
            key: "fqif7o"
        }
    ],
    [
        "path",
        {
            d: "M17 3h5v5",
            key: "1o3tu8"
        }
    ]
]);
var ScreenShare$1 = ScreenShare;
var Scroll = createReactComponent("Scroll", [
    [
        "path",
        {
            d: "M10 17v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3h3",
            key: "1knuaj"
        }
    ],
    [
        "path",
        {
            d: "M22 17v2a2 2 0 0 1-2 2H8",
            key: "62edg8"
        }
    ],
    [
        "path",
        {
            d: "M19 17V5a2 2 0 0 0-2-2H4",
            key: "zz82l3"
        }
    ],
    [
        "path",
        {
            d: "M22 17H10",
            key: "1dr9mz"
        }
    ]
]);
var Scroll$1 = Scroll;
var Search = createReactComponent("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65",
            key: "1p50m8"
        }
    ]
]);
var Search$1 = Search;
var Send = createReactComponent("Send", [
    [
        "line",
        {
            x1: "22",
            y1: "2",
            x2: "11",
            y2: "13",
            key: "10auo0"
        }
    ],
    [
        "polygon",
        {
            points: "22 2 15 22 11 13 2 9 22 2",
            key: "12uapv"
        }
    ]
]);
var Send$1 = Send;
var SeparatorHorizontal = createReactComponent("SeparatorHorizontal", [
    [
        "line",
        {
            x1: "3",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "1aui40"
        }
    ],
    [
        "polyline",
        {
            points: "8 8 12 4 16 8",
            key: "zo8t4w"
        }
    ],
    [
        "polyline",
        {
            points: "16 16 12 20 8 16",
            key: "1oyrid"
        }
    ]
]);
var SeparatorHorizontal$1 = SeparatorHorizontal;
var SeparatorVertical = createReactComponent("SeparatorVertical", [
    [
        "line",
        {
            x1: "12",
            y1: "3",
            x2: "12",
            y2: "21",
            key: "essbwb"
        }
    ],
    [
        "polyline",
        {
            points: "8 8 4 12 8 16",
            key: "bnfmv4"
        }
    ],
    [
        "polyline",
        {
            points: "16 16 20 12 16 8",
            key: "u90052"
        }
    ]
]);
var SeparatorVertical$1 = SeparatorVertical;
var ServerCog = createReactComponent("ServerCog", [
    [
        "path",
        {
            d: "M5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1",
            key: "1qm4no"
        }
    ],
    [
        "path",
        {
            d: "M5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1",
            key: "1lpaho"
        }
    ],
    [
        "path",
        {
            d: "M6 6h.01",
            key: "1utrut"
        }
    ],
    [
        "path",
        {
            d: "M6 18h.01",
            key: "uhywen"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ],
    [
        "path",
        {
            d: "M12 8v1",
            key: "1rj8u4"
        }
    ],
    [
        "path",
        {
            d: "M12 15v1",
            key: "1ovrzm"
        }
    ],
    [
        "path",
        {
            d: "M16 12h-1",
            key: "1qpdyp"
        }
    ],
    [
        "path",
        {
            d: "M9 12H8",
            key: "1l15iv"
        }
    ],
    [
        "path",
        {
            d: "m15 9-.88.88",
            key: "3hwatj"
        }
    ],
    [
        "path",
        {
            d: "M9.88 14.12 9 15",
            key: "13ldc9"
        }
    ],
    [
        "path",
        {
            d: "m15 15-.88-.88",
            key: "45priv"
        }
    ],
    [
        "path",
        {
            d: "M9.88 9.88 9 9",
            key: "1ladhj"
        }
    ]
]);
var ServerCog$1 = ServerCog;
var ServerCrash = createReactComponent("ServerCrash", [
    [
        "path",
        {
            d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
            key: "4b9dqc"
        }
    ],
    [
        "path",
        {
            d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
            key: "22nnkd"
        }
    ],
    [
        "path",
        {
            d: "M6 6h.01",
            key: "1utrut"
        }
    ],
    [
        "path",
        {
            d: "M6 18h.01",
            key: "uhywen"
        }
    ],
    [
        "path",
        {
            d: "m13 6-4 6h6l-4 6",
            key: "14hqih"
        }
    ]
]);
var ServerCrash$1 = ServerCrash;
var ServerOff = createReactComponent("ServerOff", [
    [
        "path",
        {
            d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",
            key: "bt2siv"
        }
    ],
    [
        "path",
        {
            d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",
            key: "1hjrv1"
        }
    ],
    [
        "path",
        {
            d: "M22 17v-1a2 2 0 0 0-2-2h-1",
            key: "1iynyr"
        }
    ],
    [
        "path",
        {
            d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",
            key: "161ggg"
        }
    ],
    [
        "path",
        {
            d: "M6 18h.01",
            key: "uhywen"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
]);
var ServerOff$1 = ServerOff;
var Server = createReactComponent("Server", [
    [
        "rect",
        {
            x: "2",
            y: "2",
            width: "20",
            height: "8",
            rx: "2",
            ry: "2",
            key: "e1v5fq"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "14",
            width: "20",
            height: "8",
            rx: "2",
            ry: "2",
            key: "10c4lq"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "6",
            x2: "6.01",
            y2: "6",
            key: "1g0o6g"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "18",
            x2: "6.01",
            y2: "18",
            key: "y2j7fo"
        }
    ]
]);
var Server$1 = Server;
var Settings2 = createReactComponent("Settings2", [
    [
        "path",
        {
            d: "M20 7h-9",
            key: "3s1dr2"
        }
    ],
    [
        "path",
        {
            d: "M14 17H5",
            key: "gfn3mx"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "17",
            r: "3",
            key: "18b49y"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "7",
            r: "3",
            key: "dfmy0x"
        }
    ]
]);
var Settings2$1 = Settings2;
var Settings = createReactComponent("Settings", [
    [
        "path",
        {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
var Settings$1 = Settings;
var Share2 = createReactComponent("Share2", [
    [
        "circle",
        {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }
    ],
    [
        "line",
        {
            x1: "8.59",
            y1: "13.51",
            x2: "15.42",
            y2: "17.49",
            key: "10dsx0"
        }
    ],
    [
        "line",
        {
            x1: "15.41",
            y1: "6.51",
            x2: "8.59",
            y2: "10.49",
            key: "1qn9hm"
        }
    ]
]);
var Share2$1 = Share2;
var Share = createReactComponent("Share", [
    [
        "path",
        {
            d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
            key: "1b2hhj"
        }
    ],
    [
        "polyline",
        {
            points: "16 6 12 2 8 6",
            key: "m901s6"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "15",
            key: "1sxkij"
        }
    ]
]);
var Share$1 = Share;
var Sheet = createReactComponent("Sheet", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "9",
            x2: "21",
            y2: "9",
            key: "1uch6j"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "15",
            x2: "21",
            y2: "15",
            key: "1xojw2"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9",
            y2: "21",
            key: "x5ianl"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15",
            y2: "21",
            key: "13a17d"
        }
    ]
]);
var Sheet$1 = Sheet;
var ShieldAlert = createReactComponent("ShieldAlert", [
    [
        "path",
        {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            key: "3xmgem"
        }
    ],
    [
        "path",
        {
            d: "M12 8v4",
            key: "1got3b"
        }
    ],
    [
        "path",
        {
            d: "M12 16h.01",
            key: "1drbdi"
        }
    ]
]);
var ShieldAlert$1 = ShieldAlert;
var ShieldCheck = createReactComponent("ShieldCheck", [
    [
        "path",
        {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            key: "3xmgem"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
var ShieldCheck$1 = ShieldCheck;
var ShieldClose = createReactComponent("ShieldClose", [
    [
        "path",
        {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            key: "3xmgem"
        }
    ],
    [
        "line",
        {
            x1: "9.5",
            y1: "9",
            x2: "14.5",
            y2: "14",
            key: "154127"
        }
    ],
    [
        "line",
        {
            x1: "14.5",
            y1: "9",
            x2: "9.5",
            y2: "14",
            key: "1rm6h8"
        }
    ]
]);
var ShieldClose$1 = ShieldClose;
var ShieldOff = createReactComponent("ShieldOff", [
    [
        "path",
        {
            d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18",
            key: "ungvgc"
        }
    ],
    [
        "path",
        {
            d: "M4.73 4.73 4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38",
            key: "1qf5yw"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var ShieldOff$1 = ShieldOff;
var Shield = createReactComponent("Shield", [
    [
        "path",
        {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            key: "3xmgem"
        }
    ]
]);
var Shield$1 = Shield;
var Shirt = createReactComponent("Shirt", [
    [
        "path",
        {
            d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
            key: "1wgbhj"
        }
    ]
]);
var Shirt$1 = Shirt;
var ShoppingBag = createReactComponent("ShoppingBag", [
    [
        "path",
        {
            d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z",
            key: "14a4hr"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "1tp2lp"
        }
    ],
    [
        "path",
        {
            d: "M16 10a4 4 0 0 1-8 0",
            key: "1ltviw"
        }
    ]
]);
var ShoppingBag$1 = ShoppingBag;
var ShoppingCart = createReactComponent("ShoppingCart", [
    [
        "circle",
        {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }
    ],
    [
        "path",
        {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }
    ]
]);
var ShoppingCart$1 = ShoppingCart;
var Shovel = createReactComponent("Shovel", [
    [
        "path",
        {
            d: "M2 22v-5l5-5 5 5-5 5z",
            key: "1fh25c"
        }
    ],
    [
        "path",
        {
            d: "M9.5 14.5 16 8",
            key: "1smz5x"
        }
    ],
    [
        "path",
        {
            d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",
            key: "1q8uv5"
        }
    ]
]);
var Shovel$1 = Shovel;
var ShowerHead = createReactComponent("ShowerHead", [
    [
        "path",
        {
            d: "m4 4 2.5 2.5",
            key: "uv2vmf"
        }
    ],
    [
        "path",
        {
            d: "M13.5 6.5a4.95 4.95 0 0 0-7 7",
            key: "frdkwv"
        }
    ],
    [
        "path",
        {
            d: "M15 5 5 15",
            key: "1ag8rq"
        }
    ],
    [
        "path",
        {
            d: "M14 17v.01",
            key: "eokfpp"
        }
    ],
    [
        "path",
        {
            d: "M10 16v.01",
            key: "14uyyl"
        }
    ],
    [
        "path",
        {
            d: "M13 13v.01",
            key: "1v1k97"
        }
    ],
    [
        "path",
        {
            d: "M16 10v.01",
            key: "5169yg"
        }
    ],
    [
        "path",
        {
            d: "M11 20v.01",
            key: "cj92p8"
        }
    ],
    [
        "path",
        {
            d: "M17 14v.01",
            key: "11cswd"
        }
    ],
    [
        "path",
        {
            d: "M20 11v.01",
            key: "19e0od"
        }
    ]
]);
var ShowerHead$1 = ShowerHead;
var Shrink = createReactComponent("Shrink", [
    [
        "path",
        {
            d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8",
            key: "17vawe"
        }
    ],
    [
        "path",
        {
            d: "M9 19.8V15m0 0H4.2M9 15l-6 6",
            key: "chjx8e"
        }
    ],
    [
        "path",
        {
            d: "M15 4.2V9m0 0h4.8M15 9l6-6",
            key: "lav6yq"
        }
    ],
    [
        "path",
        {
            d: "M9 4.2V9m0 0H4.2M9 9 3 3",
            key: "1pxi2q"
        }
    ]
]);
var Shrink$1 = Shrink;
var Shrub = createReactComponent("Shrub", [
    [
        "path",
        {
            d: "M12 22v-7l-2-2",
            key: "eqv9mc"
        }
    ],
    [
        "path",
        {
            d: "M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z",
            key: "12jcau"
        }
    ],
    [
        "path",
        {
            d: "m14 14-2 2",
            key: "847xa2"
        }
    ]
]);
var Shrub$1 = Shrub;
var Shuffle = createReactComponent("Shuffle", [
    [
        "polyline",
        {
            points: "16 3 21 3 21 8",
            key: "11391h"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "20",
            x2: "21",
            y2: "3",
            key: "pnd031"
        }
    ],
    [
        "polyline",
        {
            points: "21 16 21 21 16 21",
            key: "1j0gwc"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "15",
            x2: "21",
            y2: "21",
            key: "ygtzor"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "4",
            x2: "9",
            y2: "9",
            key: "q17lez"
        }
    ]
]);
var Shuffle$1 = Shuffle;
var SidebarClose = createReactComponent("SidebarClose", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ],
    [
        "path",
        {
            d: "m16 15-3-3 3-3",
            key: "14y99z"
        }
    ]
]);
var SidebarClose$1 = SidebarClose;
var SidebarOpen = createReactComponent("SidebarOpen", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ],
    [
        "path",
        {
            d: "m14 9 3 3-3 3",
            key: "8010ee"
        }
    ]
]);
var SidebarOpen$1 = SidebarOpen;
var Sidebar = createReactComponent("Sidebar", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "3",
            x2: "9",
            y2: "21",
            key: "nvcl17"
        }
    ]
]);
var Sidebar$1 = Sidebar;
var Sigma = createReactComponent("Sigma", [
    [
        "path",
        {
            d: "M18 7V4H6l6 8-6 8h12v-3",
            key: "zis8ev"
        }
    ]
]);
var Sigma$1 = Sigma;
var SignalHigh = createReactComponent("SignalHigh", [
    [
        "path",
        {
            d: "M2 20h.01",
            key: "4haj6o"
        }
    ],
    [
        "path",
        {
            d: "M7 20v-4",
            key: "j294jx"
        }
    ],
    [
        "path",
        {
            d: "M12 20v-8",
            key: "i3yub9"
        }
    ],
    [
        "path",
        {
            d: "M17 20V8",
            key: "1tkaf5"
        }
    ]
]);
var SignalHigh$1 = SignalHigh;
var SignalLow = createReactComponent("SignalLow", [
    [
        "path",
        {
            d: "M2 20h.01",
            key: "4haj6o"
        }
    ],
    [
        "path",
        {
            d: "M7 20v-4",
            key: "j294jx"
        }
    ]
]);
var SignalLow$1 = SignalLow;
var SignalMedium = createReactComponent("SignalMedium", [
    [
        "path",
        {
            d: "M2 20h.01",
            key: "4haj6o"
        }
    ],
    [
        "path",
        {
            d: "M7 20v-4",
            key: "j294jx"
        }
    ],
    [
        "path",
        {
            d: "M12 20v-8",
            key: "i3yub9"
        }
    ]
]);
var SignalMedium$1 = SignalMedium;
var SignalZero = createReactComponent("SignalZero", [
    [
        "path",
        {
            d: "M2 20h.01",
            key: "4haj6o"
        }
    ]
]);
var SignalZero$1 = SignalZero;
var Signal = createReactComponent("Signal", [
    [
        "path",
        {
            d: "M2 20h.01",
            key: "4haj6o"
        }
    ],
    [
        "path",
        {
            d: "M7 20v-4",
            key: "j294jx"
        }
    ],
    [
        "path",
        {
            d: "M12 20v-8",
            key: "i3yub9"
        }
    ],
    [
        "path",
        {
            d: "M17 20V8",
            key: "1tkaf5"
        }
    ],
    [
        "path",
        {
            d: "M22 4v16",
            key: "sih9yq"
        }
    ]
]);
var Signal$1 = Signal;
var Siren = createReactComponent("Siren", [
    [
        "path",
        {
            d: "M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z",
            key: "rmc51c"
        }
    ],
    [
        "path",
        {
            d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z",
            key: "yyvmjy"
        }
    ],
    [
        "path",
        {
            d: "M21 12h1",
            key: "jtio3y"
        }
    ],
    [
        "path",
        {
            d: "M18.5 4.5 18 5",
            key: "g5sp9y"
        }
    ],
    [
        "path",
        {
            d: "M2 12h1",
            key: "1uaihz"
        }
    ],
    [
        "path",
        {
            d: "M12 2v1",
            key: "11qlp1"
        }
    ],
    [
        "path",
        {
            d: "m4.929 4.929.707.707",
            key: "1i51kw"
        }
    ],
    [
        "path",
        {
            d: "M12 12v6",
            key: "3ahymv"
        }
    ]
]);
var Siren$1 = Siren;
var SkipBack = createReactComponent("SkipBack", [
    [
        "polygon",
        {
            points: "19 20 9 12 19 4 19 20",
            key: "o2sva"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "19",
            x2: "5",
            y2: "5",
            key: "1qxvzh"
        }
    ]
]);
var SkipBack$1 = SkipBack;
var SkipForward = createReactComponent("SkipForward", [
    [
        "polygon",
        {
            points: "5 4 15 12 5 20 5 4",
            key: "16p6eg"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "5",
            x2: "19",
            y2: "19",
            key: "5lndli"
        }
    ]
]);
var SkipForward$1 = SkipForward;
var Skull = createReactComponent("Skull", [
    [
        "circle",
        {
            cx: "9",
            cy: "12",
            r: "1",
            key: "1vctgf"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "12",
            r: "1",
            key: "1tmaij"
        }
    ],
    [
        "path",
        {
            d: "M8 20v2h8v-2",
            key: "ded4og"
        }
    ],
    [
        "path",
        {
            d: "m12.5 17-.5-1-.5 1h1z",
            key: "3me087"
        }
    ],
    [
        "path",
        {
            d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",
            key: "xq9p5u"
        }
    ]
]);
var Skull$1 = Skull;
var Slack = createReactComponent("Slack", [
    [
        "rect",
        {
            x: "13",
            y: "2",
            width: "3",
            height: "8",
            rx: "1.5",
            key: "134gbe"
        }
    ],
    [
        "path",
        {
            d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",
            key: "183iwg"
        }
    ],
    [
        "rect",
        {
            x: "8",
            y: "14",
            width: "3",
            height: "8",
            rx: "1.5",
            key: "6p48jh"
        }
    ],
    [
        "path",
        {
            d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",
            key: "76g71w"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "13",
            width: "8",
            height: "3",
            rx: "1.5",
            key: "1gabf9"
        }
    ],
    [
        "path",
        {
            d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",
            key: "jc4sz0"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "8",
            width: "8",
            height: "3",
            rx: "1.5",
            key: "1bingn"
        }
    ],
    [
        "path",
        {
            d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",
            key: "16f3cl"
        }
    ]
]);
var Slack$1 = Slack;
var Slash = createReactComponent("Slash", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "4.93",
            y1: "4.93",
            x2: "19.07",
            y2: "19.07",
            key: "bqqkff"
        }
    ]
]);
var Slash$1 = Slash;
var Slice = createReactComponent("Slice", [
    [
        "path",
        {
            d: "m8 14-6 6h9v-3",
            key: "zo3j9a"
        }
    ],
    [
        "path",
        {
            d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",
            key: "1dzx0j"
        }
    ]
]);
var Slice$1 = Slice;
var SlidersHorizontal = createReactComponent("SlidersHorizontal", [
    [
        "line",
        {
            x1: "21",
            y1: "4",
            x2: "14",
            y2: "4",
            key: "ujuyh9"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "4",
            x2: "3",
            y2: "4",
            key: "5ejmvt"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "12",
            x2: "12",
            y2: "12",
            key: "inadxn"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "3",
            y2: "12",
            key: "apa8u8"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "20",
            x2: "16",
            y2: "20",
            key: "w4k2j3"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "20",
            x2: "3",
            y2: "20",
            key: "15hqih"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "2",
            x2: "14",
            y2: "6",
            key: "19ksk4"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "10",
            x2: "8",
            y2: "14",
            key: "1cn0zn"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "18",
            x2: "16",
            y2: "22",
            key: "1vfncj"
        }
    ]
]);
var SlidersHorizontal$1 = SlidersHorizontal;
var Sliders = createReactComponent("Sliders", [
    [
        "line",
        {
            x1: "4",
            y1: "21",
            x2: "4",
            y2: "14",
            key: "2cpl65"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "10",
            x2: "4",
            y2: "3",
            key: "1b26kg"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "21",
            x2: "12",
            y2: "12",
            key: "fxobwr"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "3",
            key: "bkspcw"
        }
    ],
    [
        "line",
        {
            x1: "20",
            y1: "21",
            x2: "20",
            y2: "16",
            key: "b7lt1r"
        }
    ],
    [
        "line",
        {
            x1: "20",
            y1: "12",
            x2: "20",
            y2: "3",
            key: "inamez"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "14",
            x2: "6",
            y2: "14",
            key: "tezuxb"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "8",
            x2: "14",
            y2: "8",
            key: "1w8tme"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "16",
            x2: "22",
            y2: "16",
            key: "1gnq8h"
        }
    ]
]);
var Sliders$1 = Sliders;
var SmartphoneCharging = createReactComponent("SmartphoneCharging", [
    [
        "rect",
        {
            x: "5",
            y: "2",
            width: "14",
            height: "20",
            rx: "2",
            ry: "2",
            key: "1gcc4z"
        }
    ],
    [
        "path",
        {
            d: "M12.667 8 10 12h4l-2.667 4",
            key: "h9lk2d"
        }
    ]
]);
var SmartphoneCharging$1 = SmartphoneCharging;
var Smartphone = createReactComponent("Smartphone", [
    [
        "rect",
        {
            x: "5",
            y: "2",
            width: "14",
            height: "20",
            rx: "2",
            ry: "2",
            key: "1gcc4z"
        }
    ],
    [
        "path",
        {
            d: "M12 18h.01",
            key: "mhygvu"
        }
    ]
]);
var Smartphone$1 = Smartphone;
var SmilePlus = createReactComponent("SmilePlus", [
    [
        "path",
        {
            d: "M22 11v1a10 10 0 1 1-9-10",
            key: "ew0xw9"
        }
    ],
    [
        "path",
        {
            d: "M8 14s1.5 2 4 2 4-2 4-2",
            key: "1y1vjs"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
            key: "141aaf"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
            key: "1cyg3o"
        }
    ],
    [
        "path",
        {
            d: "M16 5h6",
            key: "1vod17"
        }
    ],
    [
        "path",
        {
            d: "M19 2v6",
            key: "4bpg5p"
        }
    ]
]);
var SmilePlus$1 = SmilePlus;
var Smile = createReactComponent("Smile", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M8 14s1.5 2 4 2 4-2 4-2",
            key: "1y1vjs"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
            key: "141aaf"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
            key: "1cyg3o"
        }
    ]
]);
var Smile$1 = Smile;
var Snowflake = createReactComponent("Snowflake", [
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "22",
            key: "1k6o5o"
        }
    ],
    [
        "path",
        {
            d: "m20 16-4-4 4-4",
            key: "rquw4f"
        }
    ],
    [
        "path",
        {
            d: "m4 8 4 4-4 4",
            key: "12s3z9"
        }
    ],
    [
        "path",
        {
            d: "m16 4-4 4-4-4",
            key: "1tumq1"
        }
    ],
    [
        "path",
        {
            d: "m8 20 4-4 4 4",
            key: "9p200w"
        }
    ]
]);
var Snowflake$1 = Snowflake;
var Sofa = createReactComponent("Sofa", [
    [
        "path",
        {
            d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",
            key: "1dgpiv"
        }
    ],
    [
        "path",
        {
            d: "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",
            key: "u5qfb7"
        }
    ],
    [
        "path",
        {
            d: "M4 18v2",
            key: "jwo5n2"
        }
    ],
    [
        "path",
        {
            d: "M20 18v2",
            key: "1ar1qi"
        }
    ],
    [
        "path",
        {
            d: "M12 4v9",
            key: "oqhhn3"
        }
    ]
]);
var Sofa$1 = Sofa;
var SortAsc = createReactComponent("SortAsc", [
    [
        "path",
        {
            d: "M11 11H15",
            key: "13b0h1"
        }
    ],
    [
        "path",
        {
            d: "M11 15H18",
            key: "14lp16"
        }
    ],
    [
        "path",
        {
            d: "M11 19H21",
            key: "1cy3wr"
        }
    ],
    [
        "path",
        {
            d: "M9 7L6 4L3 7",
            key: "bjdqf3"
        }
    ],
    [
        "path",
        {
            d: "M6 6L6 20",
            key: "1aagpo"
        }
    ]
]);
var SortAsc$1 = SortAsc;
var SortDesc = createReactComponent("SortDesc", [
    [
        "path",
        {
            d: "M11 5h10",
            key: "1cz7ny"
        }
    ],
    [
        "path",
        {
            d: "M11 9h7",
            key: "13ra05"
        }
    ],
    [
        "path",
        {
            d: "M11 13h4",
            key: "1p7l4v"
        }
    ],
    [
        "path",
        {
            d: "m3 17 3 3 3-3",
            key: "d2bl7z"
        }
    ],
    [
        "path",
        {
            d: "M6 18V4",
            key: "20vmay"
        }
    ]
]);
var SortDesc$1 = SortDesc;
var Speaker = createReactComponent("Speaker", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "16",
            height: "20",
            rx: "2",
            ry: "2",
            key: "152kg8"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "14",
            r: "4",
            key: "1jruaj"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "6",
            x2: "12.01",
            y2: "6",
            key: "fpk8as"
        }
    ]
]);
var Speaker$1 = Speaker;
var Sprout = createReactComponent("Sprout", [
    [
        "path",
        {
            d: "M7 20h10",
            key: "e6iznv"
        }
    ],
    [
        "path",
        {
            d: "M10 20c5.5-2.5.8-6.4 3-10",
            key: "161w41"
        }
    ],
    [
        "path",
        {
            d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
            key: "9gtqwd"
        }
    ],
    [
        "path",
        {
            d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
            key: "bkxnd2"
        }
    ]
]);
var Sprout$1 = Sprout;
var Square = createReactComponent("Square", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ]
]);
var Square$1 = Square;
var StarHalf = createReactComponent("StarHalf", [
    [
        "path",
        {
            d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",
            key: "nare05"
        }
    ]
]);
var StarHalf$1 = StarHalf;
var StarOff = createReactComponent("StarOff", [
    [
        "path",
        {
            d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",
            key: "16m0ql"
        }
    ],
    [
        "path",
        {
            d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",
            key: "1vt8nq"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var StarOff$1 = StarOff;
var Star = createReactComponent("Star", [
    [
        "polygon",
        {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
            key: "8f66p6"
        }
    ]
]);
var Star$1 = Star;
var Stethoscope = createReactComponent("Stethoscope", [
    [
        "path",
        {
            d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",
            key: "1jd90r"
        }
    ],
    [
        "path",
        {
            d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",
            key: "126ukv"
        }
    ],
    [
        "circle",
        {
            cx: "20",
            cy: "10",
            r: "2",
            key: "ts1r5v"
        }
    ]
]);
var Stethoscope$1 = Stethoscope;
var Sticker = createReactComponent("Sticker", [
    [
        "path",
        {
            d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",
            key: "1wis1t"
        }
    ],
    [
        "path",
        {
            d: "M15 3v6h6",
            key: "edgan2"
        }
    ],
    [
        "path",
        {
            d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1",
            key: "1vvgv3"
        }
    ],
    [
        "path",
        {
            d: "M8 13h0",
            key: "jdup5h"
        }
    ],
    [
        "path",
        {
            d: "M16 13h0",
            key: "l4i2ga"
        }
    ]
]);
var Sticker$1 = Sticker;
var StickyNote = createReactComponent("StickyNote", [
    [
        "path",
        {
            d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",
            key: "1wis1t"
        }
    ],
    [
        "path",
        {
            d: "M15 3v6h6",
            key: "edgan2"
        }
    ]
]);
var StickyNote$1 = StickyNote;
var StopCircle = createReactComponent("StopCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "9",
            width: "6",
            height: "6",
            key: "o3kz5p"
        }
    ]
]);
var StopCircle$1 = StopCircle;
var StretchHorizontal = createReactComponent("StretchHorizontal", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "6",
            rx: "2",
            key: "12sjy4"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "14",
            width: "20",
            height: "6",
            rx: "2",
            key: "lnm6uo"
        }
    ]
]);
var StretchHorizontal$1 = StretchHorizontal;
var StretchVertical = createReactComponent("StretchVertical", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "6",
            height: "20",
            rx: "2",
            key: "1lym67"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "2",
            width: "6",
            height: "20",
            rx: "2",
            key: "b7v5o0"
        }
    ]
]);
var StretchVertical$1 = StretchVertical;
var Strikethrough = createReactComponent("Strikethrough", [
    [
        "path",
        {
            d: "M16 4H9a3 3 0 0 0-2.83 4",
            key: "43sutm"
        }
    ],
    [
        "path",
        {
            d: "M14 12a4 4 0 0 1 0 8H6",
            key: "nlfj13"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "12",
            x2: "20",
            y2: "12",
            key: "1q6rtp"
        }
    ]
]);
var Strikethrough$1 = Strikethrough;
var Subscript = createReactComponent("Subscript", [
    [
        "path",
        {
            d: "m4 5 8 8",
            key: "1eunvl"
        }
    ],
    [
        "path",
        {
            d: "m12 5-8 8",
            key: "1ah0jp"
        }
    ],
    [
        "path",
        {
            d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",
            key: "e8ta8j"
        }
    ]
]);
var Subscript$1 = Subscript;
var SunDim = createReactComponent("SunDim", [
    [
        "path",
        {
            d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
            key: "1r4kox"
        }
    ],
    [
        "path",
        {
            d: "M12 4h.01",
            key: "1ujb9j"
        }
    ],
    [
        "path",
        {
            d: "M20 12h.01",
            key: "1ykeid"
        }
    ],
    [
        "path",
        {
            d: "M12 20h.01",
            key: "zekei9"
        }
    ],
    [
        "path",
        {
            d: "M4 12h.01",
            key: "158zrr"
        }
    ],
    [
        "path",
        {
            d: "M17.657 6.343h.01",
            key: "31pqzk"
        }
    ],
    [
        "path",
        {
            d: "M17.657 17.657h.01",
            key: "jehnf4"
        }
    ],
    [
        "path",
        {
            d: "M6.343 17.657h.01",
            key: "gdk6ow"
        }
    ],
    [
        "path",
        {
            d: "M6.343 6.343h.01",
            key: "1uurf0"
        }
    ]
]);
var SunDim$1 = SunDim;
var SunMedium = createReactComponent("SunMedium", [
    [
        "path",
        {
            d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
            key: "1r4kox"
        }
    ],
    [
        "path",
        {
            d: "M12 3v1",
            key: "1asbbs"
        }
    ],
    [
        "path",
        {
            d: "M12 20v1",
            key: "1wcdkc"
        }
    ],
    [
        "path",
        {
            d: "M3 12h1",
            key: "lp3yf2"
        }
    ],
    [
        "path",
        {
            d: "M20 12h1",
            key: "1vloll"
        }
    ],
    [
        "path",
        {
            d: "m18.364 5.636-.707.707",
            key: "1hakh0"
        }
    ],
    [
        "path",
        {
            d: "m6.343 17.657-.707.707",
            key: "18m9nf"
        }
    ],
    [
        "path",
        {
            d: "m5.636 5.636.707.707",
            key: "1xv1c5"
        }
    ],
    [
        "path",
        {
            d: "m17.657 17.657.707.707",
            key: "vl76zb"
        }
    ]
]);
var SunMedium$1 = SunMedium;
var SunMoon = createReactComponent("SunMoon", [
    [
        "path",
        {
            d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
            key: "1r4kox"
        }
    ],
    [
        "path",
        {
            d: "M12 8a2.828 2.828 0 1 0 4 4",
            key: "16688u"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
]);
var SunMoon$1 = SunMoon;
var SunSnow = createReactComponent("SunSnow", [
    [
        "path",
        {
            d: "M10 9a3 3 0 1 0 0 6",
            key: "6zmtdl"
        }
    ],
    [
        "path",
        {
            d: "M2 12h1",
            key: "1uaihz"
        }
    ],
    [
        "path",
        {
            d: "M14 21V3",
            key: "1llu3z"
        }
    ],
    [
        "path",
        {
            d: "M10 4V3",
            key: "pkzwkn"
        }
    ],
    [
        "path",
        {
            d: "M10 21v-1",
            key: "1u8rkd"
        }
    ],
    [
        "path",
        {
            d: "m3.64 18.36.7-.7",
            key: "105rm9"
        }
    ],
    [
        "path",
        {
            d: "m4.34 6.34-.7-.7",
            key: "d3unjp"
        }
    ],
    [
        "path",
        {
            d: "M14 12h8",
            key: "4f43i9"
        }
    ],
    [
        "path",
        {
            d: "m17 4-3 3",
            key: "15jcng"
        }
    ],
    [
        "path",
        {
            d: "m14 17 3 3",
            key: "6tlq38"
        }
    ],
    [
        "path",
        {
            d: "m21 15-3-3 3-3",
            key: "1nlnje"
        }
    ]
]);
var SunSnow$1 = SunSnow;
var Sun = createReactComponent("Sun", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
]);
var Sun$1 = Sun;
var Sunrise = createReactComponent("Sunrise", [
    [
        "path",
        {
            d: "M12 2v8",
            key: "1q4o3n"
        }
    ],
    [
        "path",
        {
            d: "m4.93 10.93 1.41 1.41",
            key: "2a7f42"
        }
    ],
    [
        "path",
        {
            d: "M2 18h2",
            key: "j10viu"
        }
    ],
    [
        "path",
        {
            d: "M20 18h2",
            key: "wocana"
        }
    ],
    [
        "path",
        {
            d: "m19.07 10.93-1.41 1.41",
            key: "15zs5n"
        }
    ],
    [
        "path",
        {
            d: "M22 22H2",
            key: "19qnx5"
        }
    ],
    [
        "path",
        {
            d: "m8 6 4-4 4 4",
            key: "ybng9g"
        }
    ],
    [
        "path",
        {
            d: "M16 18a4 4 0 0 0-8 0",
            key: "1lzouq"
        }
    ]
]);
var Sunrise$1 = Sunrise;
var Sunset = createReactComponent("Sunset", [
    [
        "path",
        {
            d: "M12 10V2",
            key: "16sf7g"
        }
    ],
    [
        "path",
        {
            d: "m4.93 10.93 1.41 1.41",
            key: "2a7f42"
        }
    ],
    [
        "path",
        {
            d: "M2 18h2",
            key: "j10viu"
        }
    ],
    [
        "path",
        {
            d: "M20 18h2",
            key: "wocana"
        }
    ],
    [
        "path",
        {
            d: "m19.07 10.93-1.41 1.41",
            key: "15zs5n"
        }
    ],
    [
        "path",
        {
            d: "M22 22H2",
            key: "19qnx5"
        }
    ],
    [
        "path",
        {
            d: "m16 6-4 4-4-4",
            key: "6wukr"
        }
    ],
    [
        "path",
        {
            d: "M16 18a4 4 0 0 0-8 0",
            key: "1lzouq"
        }
    ]
]);
var Sunset$1 = Sunset;
var Superscript = createReactComponent("Superscript", [
    [
        "path",
        {
            d: "m4 19 8-8",
            key: "hr47gm"
        }
    ],
    [
        "path",
        {
            d: "m12 19-8-8",
            key: "1dhhmo"
        }
    ],
    [
        "path",
        {
            d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",
            key: "1dfcux"
        }
    ]
]);
var Superscript$1 = Superscript;
var SwissFranc = createReactComponent("SwissFranc", [
    [
        "path",
        {
            d: "M10 21V3h8",
            key: "br2l0g"
        }
    ],
    [
        "path",
        {
            d: "M6 16h9",
            key: "2py0wn"
        }
    ],
    [
        "path",
        {
            d: "M10 9.5h7",
            key: "13dmhz"
        }
    ]
]);
var SwissFranc$1 = SwissFranc;
var SwitchCamera = createReactComponent("SwitchCamera", [
    [
        "path",
        {
            d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",
            key: "mtk2lu"
        }
    ],
    [
        "path",
        {
            d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",
            key: "120jsl"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ],
    [
        "path",
        {
            d: "m18 22-3-3 3-3",
            key: "kgdoj7"
        }
    ],
    [
        "path",
        {
            d: "m6 2 3 3-3 3",
            key: "1fnbkv"
        }
    ]
]);
var SwitchCamera$1 = SwitchCamera;
var Sword = createReactComponent("Sword", [
    [
        "polyline",
        {
            points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
            key: "1hfsw2"
        }
    ],
    [
        "line",
        {
            x1: "13",
            y1: "19",
            x2: "19",
            y2: "13",
            key: "7h9f57"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "16",
            x2: "20",
            y2: "20",
            key: "1b4zco"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "21",
            x2: "21",
            y2: "19",
            key: "df24kr"
        }
    ]
]);
var Sword$1 = Sword;
var Swords = createReactComponent("Swords", [
    [
        "polyline",
        {
            points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
            key: "1hfsw2"
        }
    ],
    [
        "line",
        {
            x1: "13",
            y1: "19",
            x2: "19",
            y2: "13",
            key: "7h9f57"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "16",
            x2: "20",
            y2: "20",
            key: "1b4zco"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "21",
            x2: "21",
            y2: "19",
            key: "df24kr"
        }
    ],
    [
        "polyline",
        {
            points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5",
            key: "hbey2j"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "14",
            x2: "9",
            y2: "18",
            key: "acydkb"
        }
    ],
    [
        "line",
        {
            x1: "7",
            y1: "17",
            x2: "4",
            y2: "20",
            key: "1vmq9v"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "19",
            x2: "5",
            y2: "21",
            key: "139kw4"
        }
    ]
]);
var Swords$1 = Swords;
var Syringe = createReactComponent("Syringe", [
    [
        "path",
        {
            d: "m18 2 4 4",
            key: "22kx64"
        }
    ],
    [
        "path",
        {
            d: "m17 7 3-3",
            key: "1w1zoj"
        }
    ],
    [
        "path",
        {
            d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",
            key: "1exhtz"
        }
    ],
    [
        "path",
        {
            d: "m9 11 4 4",
            key: "rovt3i"
        }
    ],
    [
        "path",
        {
            d: "m5 19-3 3",
            key: "59f2uf"
        }
    ],
    [
        "path",
        {
            d: "m14 4 6 6",
            key: "yqp9t2"
        }
    ]
]);
var Syringe$1 = Syringe;
var Table2 = createReactComponent("Table2", [
    [
        "path",
        {
            d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
            key: "gugj83"
        }
    ]
]);
var Table2$1 = Table2;
var Table = createReactComponent("Table", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "9",
            x2: "21",
            y2: "9",
            key: "1uch6j"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "15",
            x2: "21",
            y2: "15",
            key: "1xojw2"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "3",
            x2: "12",
            y2: "21",
            key: "essbwb"
        }
    ]
]);
var Table$1 = Table;
var Tablet = createReactComponent("Tablet", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "16",
            height: "20",
            rx: "2",
            ry: "2",
            key: "152kg8"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "18",
            x2: "12.01",
            y2: "18",
            key: "73g4n8"
        }
    ]
]);
var Tablet$1 = Tablet;
var Tag = createReactComponent("Tag", [
    [
        "path",
        {
            d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",
            key: "14b2ls"
        }
    ],
    [
        "path",
        {
            d: "M7 7h.01",
            key: "7u93v4"
        }
    ]
]);
var Tag$1 = Tag;
var Tags = createReactComponent("Tags", [
    [
        "path",
        {
            d: "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",
            key: "gt587u"
        }
    ],
    [
        "path",
        {
            d: "M6 9.01V9",
            key: "1flxpt"
        }
    ],
    [
        "path",
        {
            d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",
            key: "1cbfv1"
        }
    ]
]);
var Tags$1 = Tags;
var Target = createReactComponent("Target", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }
    ]
]);
var Target$1 = Target;
var Tent = createReactComponent("Tent", [
    [
        "path",
        {
            d: "M19 20 10 4",
            key: "1ak541"
        }
    ],
    [
        "path",
        {
            d: "m5 20 9-16",
            key: "11dtj9"
        }
    ],
    [
        "path",
        {
            d: "M3 20h18",
            key: "1l19wn"
        }
    ],
    [
        "path",
        {
            d: "m12 15-3 5",
            key: "1c5kej"
        }
    ],
    [
        "path",
        {
            d: "m12 15 3 5",
            key: "odkmhi"
        }
    ]
]);
var Tent$1 = Tent;
var TerminalSquare = createReactComponent("TerminalSquare", [
    [
        "path",
        {
            d: "m7 11 2-2-2-2",
            key: "1lz0vl"
        }
    ],
    [
        "path",
        {
            d: "M11 13h4",
            key: "1p7l4v"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ]
]);
var TerminalSquare$1 = TerminalSquare;
var Terminal = createReactComponent("Terminal", [
    [
        "polyline",
        {
            points: "4 17 10 11 4 5",
            key: "akl6gq"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "19",
            x2: "20",
            y2: "19",
            key: "fyyrwq"
        }
    ]
]);
var Terminal$1 = Terminal;
var TextCursorInput = createReactComponent("TextCursorInput", [
    [
        "path",
        {
            d: "M13 20h-1a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1",
            key: "19sqy7"
        }
    ],
    [
        "path",
        {
            d: "M5 4h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5",
            key: "1etnvu"
        }
    ],
    [
        "path",
        {
            d: "M13.1 7.9h6.8A2.18 2.18 0 0 1 22 10v4a2.11 2.11 0 0 1-2.1 2.1h-6.8",
            key: "ebxlah"
        }
    ],
    [
        "path",
        {
            d: "M4.8 16.1h-.7A2.18 2.18 0 0 1 2 14v-4a2.18 2.18 0 0 1 2.1-2.1h.7",
            key: "1l3v11"
        }
    ]
]);
var TextCursorInput$1 = TextCursorInput;
var TextCursor = createReactComponent("TextCursor", [
    [
        "path",
        {
            d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",
            key: "uvaxm9"
        }
    ],
    [
        "path",
        {
            d: "M7 22h1a4 4 0 0 0 4-4v-1",
            key: "11xy8d"
        }
    ],
    [
        "path",
        {
            d: "M7 2h1a4 4 0 0 1 4 4v1",
            key: "1uw06m"
        }
    ]
]);
var TextCursor$1 = TextCursor;
var ThermometerSnowflake = createReactComponent("ThermometerSnowflake", [
    [
        "path",
        {
            d: "M2 12h10",
            key: "19562f"
        }
    ],
    [
        "path",
        {
            d: "M9 4v16",
            key: "81ygyz"
        }
    ],
    [
        "path",
        {
            d: "m3 9 3 3-3 3",
            key: "1sas0l"
        }
    ],
    [
        "path",
        {
            d: "M12 6 9 9 6 6",
            key: "pfrgxu"
        }
    ],
    [
        "path",
        {
            d: "m6 18 3-3 1.5 1.5",
            key: "1e277p"
        }
    ],
    [
        "path",
        {
            d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
            key: "iof6y5"
        }
    ]
]);
var ThermometerSnowflake$1 = ThermometerSnowflake;
var ThermometerSun = createReactComponent("ThermometerSun", [
    [
        "path",
        {
            d: "M12 9a4 4 0 0 0-2 7.5",
            key: "1jvsq6"
        }
    ],
    [
        "path",
        {
            d: "M12 3v2",
            key: "1w22ol"
        }
    ],
    [
        "path",
        {
            d: "m6.6 18.4-1.4 1.4",
            key: "w2yidj"
        }
    ],
    [
        "path",
        {
            d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
            key: "iof6y5"
        }
    ],
    [
        "path",
        {
            d: "M4 13H2",
            key: "118le4"
        }
    ],
    [
        "path",
        {
            d: "M6.34 7.34 4.93 5.93",
            key: "1brd51"
        }
    ]
]);
var ThermometerSun$1 = ThermometerSun;
var Thermometer = createReactComponent("Thermometer", [
    [
        "path",
        {
            d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
            key: "17jzev"
        }
    ]
]);
var Thermometer$1 = Thermometer;
var ThumbsDown = createReactComponent("ThumbsDown", [
    [
        "path",
        {
            d: "M17 14V2",
            key: "8ymqnk"
        }
    ],
    [
        "path",
        {
            d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
            key: "s6e0r"
        }
    ]
]);
var ThumbsDown$1 = ThumbsDown;
var ThumbsUp = createReactComponent("ThumbsUp", [
    [
        "path",
        {
            d: "M7 10v12",
            key: "1qc93n"
        }
    ],
    [
        "path",
        {
            d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
            key: "y3tblf"
        }
    ]
]);
var ThumbsUp$1 = ThumbsUp;
var Ticket = createReactComponent("Ticket", [
    [
        "path",
        {
            d: "M3 7v2a3 3 0 1 1 0 6v2c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z",
            key: "nswdcl"
        }
    ],
    [
        "path",
        {
            d: "M13 5v2",
            key: "dyzc3o"
        }
    ],
    [
        "path",
        {
            d: "M13 17v2",
            key: "1ont0d"
        }
    ],
    [
        "path",
        {
            d: "M13 11v2",
            key: "1wjjxi"
        }
    ]
]);
var Ticket$1 = Ticket;
var TimerOff = createReactComponent("TimerOff", [
    [
        "path",
        {
            d: "M10 2h4",
            key: "n1abiw"
        }
    ],
    [
        "path",
        {
            d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",
            key: "10he05"
        }
    ],
    [
        "path",
        {
            d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",
            key: "15f7sh"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M12 12v-2",
            key: "fwoke6"
        }
    ]
]);
var TimerOff$1 = TimerOff;
var TimerReset = createReactComponent("TimerReset", [
    [
        "path",
        {
            d: "M10 2h4",
            key: "n1abiw"
        }
    ],
    [
        "path",
        {
            d: "M12 14v-4",
            key: "1evpnu"
        }
    ],
    [
        "path",
        {
            d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",
            key: "1ts96g"
        }
    ],
    [
        "path",
        {
            d: "M9 17H4v5",
            key: "8t5av"
        }
    ]
]);
var TimerReset$1 = TimerReset;
var Timer = createReactComponent("Timer", [
    [
        "line",
        {
            x1: "10",
            x2: "14",
            y1: "2",
            y2: "2",
            key: "14vaq8"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "15",
            y1: "14",
            y2: "11",
            key: "17fdiu"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "14",
            r: "8",
            key: "1e1u0o"
        }
    ]
]);
var Timer$1 = Timer;
var ToggleLeft = createReactComponent("ToggleLeft", [
    [
        "rect",
        {
            x: "1",
            y: "5",
            width: "22",
            height: "14",
            rx: "7",
            ry: "7",
            key: "rq2fx9"
        }
    ],
    [
        "circle",
        {
            cx: "8",
            cy: "12",
            r: "3",
            key: "nylqfu"
        }
    ]
]);
var ToggleLeft$1 = ToggleLeft;
var ToggleRight = createReactComponent("ToggleRight", [
    [
        "rect",
        {
            x: "1",
            y: "5",
            width: "22",
            height: "14",
            rx: "7",
            ry: "7",
            key: "rq2fx9"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "12",
            r: "3",
            key: "nkkl0l"
        }
    ]
]);
var ToggleRight$1 = ToggleRight;
var Tornado = createReactComponent("Tornado", [
    [
        "path",
        {
            d: "M21 4H3",
            key: "1hwok0"
        }
    ],
    [
        "path",
        {
            d: "M18 8H6",
            key: "41n648"
        }
    ],
    [
        "path",
        {
            d: "M19 12H9",
            key: "1g4lpz"
        }
    ],
    [
        "path",
        {
            d: "M16 16h-6",
            key: "1j5d54"
        }
    ],
    [
        "path",
        {
            d: "M11 20H9",
            key: "39obr8"
        }
    ]
]);
var Tornado$1 = Tornado;
var ToyBrick = createReactComponent("ToyBrick", [
    [
        "rect",
        {
            x: "3",
            y: "8",
            width: "18",
            height: "12",
            rx: "1",
            key: "1yob91"
        }
    ],
    [
        "path",
        {
            d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",
            key: "s0042v"
        }
    ],
    [
        "path",
        {
            d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",
            key: "9wmeh2"
        }
    ]
]);
var ToyBrick$1 = ToyBrick;
var Train = createReactComponent("Train", [
    [
        "rect",
        {
            x: "4",
            y: "3",
            width: "16",
            height: "16",
            rx: "2",
            key: "u93jis"
        }
    ],
    [
        "path",
        {
            d: "M4 11h16",
            key: "mpoxn0"
        }
    ],
    [
        "path",
        {
            d: "M12 3v8",
            key: "1h2ygw"
        }
    ],
    [
        "path",
        {
            d: "m8 19-2 3",
            key: "13i0xs"
        }
    ],
    [
        "path",
        {
            d: "m18 22-2-3",
            key: "1p0ohu"
        }
    ],
    [
        "path",
        {
            d: "M8 15h0",
            key: "q9eq1f"
        }
    ],
    [
        "path",
        {
            d: "M16 15h0",
            key: "pzrbjg"
        }
    ]
]);
var Train$1 = Train;
var Trash2 = createReactComponent("Trash2", [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "11",
            x2: "10",
            y2: "17",
            key: "m9v7hp"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "11",
            x2: "14",
            y2: "17",
            key: "23cpt9"
        }
    ]
]);
var Trash2$1 = Trash2;
var Trash = createReactComponent("Trash", [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ]
]);
var Trash$1 = Trash;
var TreeDeciduous = createReactComponent("TreeDeciduous", [
    [
        "path",
        {
            d: "M8 19h8a4 4 0 0 0 3.8-2.8 4 4 0 0 0-1.6-4.5c1-1.1 1-2.7.4-4-.7-1.2-2.2-2-3.6-1.7a3 3 0 0 0-3-3 3 3 0 0 0-3 3c-1.4-.2-2.9.5-3.6 1.7-.7 1.3-.5 2.9.4 4a4 4 0 0 0-1.6 4.5A4 4 0 0 0 8 19Z",
            key: "12ivfl"
        }
    ],
    [
        "path",
        {
            d: "M12 19v3",
            key: "npa21l"
        }
    ]
]);
var TreeDeciduous$1 = TreeDeciduous;
var TreePine = createReactComponent("TreePine", [
    [
        "path",
        {
            d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
            key: "cpyugq"
        }
    ],
    [
        "path",
        {
            d: "M12 22v-3",
            key: "kmzjlo"
        }
    ]
]);
var TreePine$1 = TreePine;
var Trees = createReactComponent("Trees", [
    [
        "path",
        {
            d: "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",
            key: "yh07w9"
        }
    ],
    [
        "path",
        {
            d: "M7 16v6",
            key: "1a82de"
        }
    ],
    [
        "path",
        {
            d: "M13 19v3",
            key: "13sx9i"
        }
    ],
    [
        "path",
        {
            d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
            key: "1sj9kv"
        }
    ]
]);
var Trees$1 = Trees;
var Trello = createReactComponent("Trello", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "7",
            width: "3",
            height: "9",
            key: "1xk0xp"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "7",
            width: "3",
            height: "5",
            key: "1otkhn"
        }
    ]
]);
var Trello$1 = Trello;
var TrendingDown = createReactComponent("TrendingDown", [
    [
        "polyline",
        {
            points: "22 17 13.5 8.5 8.5 13.5 2 7",
            key: "1r2t7k"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 22 17 22 11",
            key: "11uiuu"
        }
    ]
]);
var TrendingDown$1 = TrendingDown;
var TrendingUp = createReactComponent("TrendingUp", [
    [
        "polyline",
        {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }
    ],
    [
        "polyline",
        {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }
    ]
]);
var TrendingUp$1 = TrendingUp;
var Triangle = createReactComponent("Triangle", [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
            key: "c3ski4"
        }
    ]
]);
var Triangle$1 = Triangle;
var Trophy = createReactComponent("Trophy", [
    [
        "path",
        {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
            key: "17hqa7"
        }
    ],
    [
        "path",
        {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
            key: "lmptdp"
        }
    ],
    [
        "path",
        {
            d: "M4 22h16",
            key: "57wxv0"
        }
    ],
    [
        "path",
        {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq"
        }
    ],
    [
        "path",
        {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb"
        }
    ],
    [
        "path",
        {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
            key: "u46fv3"
        }
    ]
]);
var Trophy$1 = Trophy;
var Truck = createReactComponent("Truck", [
    [
        "path",
        {
            d: "M10 17h4V5H2v12h3",
            key: "1jq12e"
        }
    ],
    [
        "path",
        {
            d: "M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5",
            key: "1xb3ft"
        }
    ],
    [
        "path",
        {
            d: "M14 17h1",
            key: "nufu4t"
        }
    ],
    [
        "circle",
        {
            cx: "7.5",
            cy: "17.5",
            r: "2.5",
            key: "a7aife"
        }
    ],
    [
        "circle",
        {
            cx: "17.5",
            cy: "17.5",
            r: "2.5",
            key: "1mdrzq"
        }
    ]
]);
var Truck$1 = Truck;
var Tv2 = createReactComponent("Tv2", [
    [
        "path",
        {
            d: "M7 21h10",
            key: "1b0cd5"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "3",
            width: "20",
            height: "14",
            rx: "2",
            key: "x3v2xh"
        }
    ]
]);
var Tv2$1 = Tv2;
var Tv = createReactComponent("Tv", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "20",
            height: "15",
            rx: "2",
            ry: "2",
            key: "f237mn"
        }
    ],
    [
        "polyline",
        {
            points: "17 2 12 7 7 2",
            key: "11pgbg"
        }
    ]
]);
var Tv$1 = Tv;
var Twitch = createReactComponent("Twitch", [
    [
        "path",
        {
            d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",
            key: "c0yzno"
        }
    ]
]);
var Twitch$1 = Twitch;
var Twitter = createReactComponent("Twitter", [
    [
        "path",
        {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }
    ]
]);
var Twitter$1 = Twitter;
var Type = createReactComponent("Type", [
    [
        "polyline",
        {
            points: "4 7 4 4 20 4 20 7",
            key: "1nosan"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "20",
            x2: "15",
            y2: "20",
            key: "10hqwk"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "4",
            x2: "12",
            y2: "20",
            key: "8v58sd"
        }
    ]
]);
var Type$1 = Type;
var Umbrella = createReactComponent("Umbrella", [
    [
        "path",
        {
            d: "M22 12a9.92 9.92 0 0 0-3.24-6.41 10.12 10.12 0 0 0-13.52 0A9.92 9.92 0 0 0 2 12Z",
            key: "gyh82n"
        }
    ],
    [
        "path",
        {
            d: "M12 12v8a2 2 0 0 0 4 0",
            key: "ulpmoc"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "3",
            key: "7v6ckq"
        }
    ]
]);
var Umbrella$1 = Umbrella;
var Underline = createReactComponent("Underline", [
    [
        "path",
        {
            d: "M6 4v6a6 6 0 0 0 12 0V4",
            key: "9kb039"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "20",
            x2: "20",
            y2: "20",
            key: "klhyhp"
        }
    ]
]);
var Underline$1 = Underline;
var Undo2 = createReactComponent("Undo2", [
    [
        "path",
        {
            d: "M9 14 4 9l5-5",
            key: "102s5s"
        }
    ],
    [
        "path",
        {
            d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",
            key: "llx8ln"
        }
    ]
]);
var Undo2$1 = Undo2;
var Undo = createReactComponent("Undo", [
    [
        "path",
        {
            d: "M3 7v6h6",
            key: "1v2h90"
        }
    ],
    [
        "path",
        {
            d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",
            key: "1r6uu6"
        }
    ]
]);
var Undo$1 = Undo;
var Unlink2 = createReactComponent("Unlink2", [
    [
        "path",
        {
            d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",
            key: "1re2ne"
        }
    ]
]);
var Unlink2$1 = Unlink2;
var Unlink = createReactComponent("Unlink", [
    [
        "path",
        {
            d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
            key: "yqzxt4"
        }
    ],
    [
        "path",
        {
            d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
            key: "4qinb0"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "5",
            key: "187dr9"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "8",
            x2: "5",
            y2: "8",
            key: "peo5ws"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "19",
            x2: "16",
            y2: "22",
            key: "6aelkz"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "16",
            x2: "22",
            y2: "16",
            key: "ln8io3"
        }
    ]
]);
var Unlink$1 = Unlink;
var Unlock = createReactComponent("Unlock", [
    [
        "rect",
        {
            x: "3",
            y: "11",
            width: "18",
            height: "11",
            rx: "2",
            ry: "2",
            key: "biyj2e"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 9.9-1",
            key: "1mm8w8"
        }
    ]
]);
var Unlock$1 = Unlock;
var UploadCloud = createReactComponent("UploadCloud", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M12 12v9",
            key: "192myk"
        }
    ],
    [
        "path",
        {
            d: "m16 16-4-4-4 4",
            key: "119tzi"
        }
    ]
]);
var UploadCloud$1 = UploadCloud;
var Upload = createReactComponent("Upload", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "17 8 12 3 7 8",
            key: "t8dd8p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "3",
            x2: "12",
            y2: "15",
            key: "wktxj0"
        }
    ]
]);
var Upload$1 = Upload;
var Usb = createReactComponent("Usb", [
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "1",
            key: "22iqad"
        }
    ],
    [
        "circle",
        {
            cx: "10",
            cy: "7",
            r: "1",
            key: "dypaad"
        }
    ],
    [
        "path",
        {
            d: "M4 20 19 5",
            key: "15hogs"
        }
    ],
    [
        "path",
        {
            d: "m21 3-3 1 2 2 1-3Z",
            key: "ew8vct"
        }
    ],
    [
        "path",
        {
            d: "m10 7-5 5 2 5",
            key: "148pqf"
        }
    ],
    [
        "path",
        {
            d: "m10 14 5 2 4-4",
            key: "1ivjwr"
        }
    ],
    [
        "path",
        {
            d: "m18 12 1-1 1 1-1 1-1-1Z",
            key: "tus6kn"
        }
    ]
]);
var Usb$1 = Usb;
var UserCheck = createReactComponent("UserCheck", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "polyline",
        {
            points: "16 11 18 13 22 9",
            key: "1pwet4"
        }
    ]
]);
var UserCheck$1 = UserCheck;
var UserCog = createReactComponent("UserCog", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "11",
            r: "2",
            key: "1rxg02"
        }
    ],
    [
        "path",
        {
            d: "M19 8v1",
            key: "1iffrw"
        }
    ],
    [
        "path",
        {
            d: "M19 13v1",
            key: "z4xc62"
        }
    ],
    [
        "path",
        {
            d: "m21.6 9.5-.87.5",
            key: "6lxupl"
        }
    ],
    [
        "path",
        {
            d: "m17.27 12-.87.5",
            key: "1rwhxx"
        }
    ],
    [
        "path",
        {
            d: "m21.6 12.5-.87-.5",
            key: "agvc9a"
        }
    ],
    [
        "path",
        {
            d: "m17.27 10-.87-.5",
            key: "12d57s"
        }
    ]
]);
var UserCog$1 = UserCog;
var UserMinus = createReactComponent("UserMinus", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "11",
            x2: "16",
            y2: "11",
            key: "8bk570"
        }
    ]
]);
var UserMinus$1 = UserMinus;
var UserPlus = createReactComponent("UserPlus", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "8",
            x2: "19",
            y2: "14",
            key: "9s353q"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "11",
            x2: "16",
            y2: "11",
            key: "8bk570"
        }
    ]
]);
var UserPlus$1 = UserPlus;
var UserX = createReactComponent("UserX", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "8",
            x2: "22",
            y2: "13",
            key: "10apcb"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "8",
            x2: "17",
            y2: "13",
            key: "1l8di5"
        }
    ]
]);
var UserX$1 = UserX;
var User = createReactComponent("User", [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
]);
var User$1 = User;
var Users = createReactComponent("Users", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "path",
        {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }
    ]
]);
var Users$1 = Users;
var UtensilsCrossed = createReactComponent("UtensilsCrossed", [
    [
        "path",
        {
            d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
            key: "n7qcjb"
        }
    ],
    [
        "path",
        {
            d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
            key: "d0u48b"
        }
    ],
    [
        "path",
        {
            d: "m2.1 21.8 6.4-6.3",
            key: "yn04lh"
        }
    ],
    [
        "path",
        {
            d: "m19 5-7 7",
            key: "194lzd"
        }
    ]
]);
var UtensilsCrossed$1 = UtensilsCrossed;
var Utensils = createReactComponent("Utensils", [
    [
        "path",
        {
            d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",
            key: "cjf0a3"
        }
    ],
    [
        "path",
        {
            d: "M7 2v20",
            key: "1473qp"
        }
    ],
    [
        "path",
        {
            d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",
            key: "1ogz0v"
        }
    ]
]);
var Utensils$1 = Utensils;
var VenetianMask = createReactComponent("VenetianMask", [
    [
        "path",
        {
            d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",
            key: "1g6z3j"
        }
    ],
    [
        "path",
        {
            d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",
            key: "c2lwnf"
        }
    ],
    [
        "path",
        {
            d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",
            key: "njd9zo"
        }
    ]
]);
var VenetianMask$1 = VenetianMask;
var Verified = createReactComponent("Verified", [
    [
        "path",
        {
            d: "M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.6-1.8 1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z",
            key: "7kujkm"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
var Verified$1 = Verified;
var VibrateOff = createReactComponent("VibrateOff", [
    [
        "path",
        {
            d: "m2 8 2 2-2 2 2 2-2 2",
            key: "sv1b1"
        }
    ],
    [
        "path",
        {
            d: "m22 8-2 2 2 2-2 2 2 2",
            key: "101i4y"
        }
    ],
    [
        "path",
        {
            d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",
            key: "1hbad5"
        }
    ],
    [
        "path",
        {
            d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34",
            key: "1x5tf0"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var VibrateOff$1 = VibrateOff;
var Vibrate = createReactComponent("Vibrate", [
    [
        "path",
        {
            d: "m2 8 2 2-2 2 2 2-2 2",
            key: "sv1b1"
        }
    ],
    [
        "path",
        {
            d: "m22 8-2 2 2 2-2 2 2 2",
            key: "101i4y"
        }
    ],
    [
        "rect",
        {
            x: "8",
            y: "5",
            width: "8",
            height: "14",
            rx: "1",
            key: "bi6xeo"
        }
    ]
]);
var Vibrate$1 = Vibrate;
var VideoOff = createReactComponent("VideoOff", [
    [
        "path",
        {
            d: "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",
            key: "ubwiq0"
        }
    ],
    [
        "path",
        {
            d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",
            key: "1l10zd"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var VideoOff$1 = VideoOff;
var Video = createReactComponent("Video", [
    [
        "path",
        {
            d: "m22 8-6 4 6 4V8Z",
            key: "50v9me"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "14",
            height: "12",
            rx: "2",
            ry: "2",
            key: "14il7g"
        }
    ]
]);
var Video$1 = Video;
var View = createReactComponent("View", [
    [
        "path",
        {
            d: "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z",
            key: "vptub8"
        }
    ],
    [
        "path",
        {
            d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
            key: "10lhjs"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",
            key: "mrq65r"
        }
    ],
    [
        "path",
        {
            d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",
            key: "be3xqs"
        }
    ]
]);
var View$1 = View;
var Voicemail = createReactComponent("Voicemail", [
    [
        "circle",
        {
            cx: "6",
            cy: "12",
            r: "4",
            key: "1ehtga"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "12",
            r: "4",
            key: "4vafl8"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "16",
            x2: "18",
            y2: "16",
            key: "1xgyj1"
        }
    ]
]);
var Voicemail$1 = Voicemail;
var Volume1 = createReactComponent("Volume1", [
    [
        "polygon",
        {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
            key: "16drj5"
        }
    ],
    [
        "path",
        {
            d: "M15.54 8.46a5 5 0 0 1 0 7.07",
            key: "ltjumu"
        }
    ]
]);
var Volume1$1 = Volume1;
var Volume2 = createReactComponent("Volume2", [
    [
        "polygon",
        {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
            key: "16drj5"
        }
    ],
    [
        "path",
        {
            d: "M15.54 8.46a5 5 0 0 1 0 7.07",
            key: "ltjumu"
        }
    ],
    [
        "path",
        {
            d: "M19.07 4.93a10 10 0 0 1 0 14.14",
            key: "1kegas"
        }
    ]
]);
var Volume2$1 = Volume2;
var VolumeX = createReactComponent("VolumeX", [
    [
        "polygon",
        {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
            key: "16drj5"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "9",
            x2: "16",
            y2: "15",
            key: "3gspht"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "9",
            x2: "22",
            y2: "15",
            key: "2tltpt"
        }
    ]
]);
var VolumeX$1 = VolumeX;
var Volume = createReactComponent("Volume", [
    [
        "polygon",
        {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
            key: "16drj5"
        }
    ]
]);
var Volume$1 = Volume;
var Wallet = createReactComponent("Wallet", [
    [
        "path",
        {
            d: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4",
            key: "st805m"
        }
    ],
    [
        "path",
        {
            d: "M4 6v12c0 1.1.9 2 2 2h14v-4",
            key: "16cu1e"
        }
    ],
    [
        "path",
        {
            d: "M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z",
            key: "lwd56p"
        }
    ]
]);
var Wallet$1 = Wallet;
var Wand2 = createReactComponent("Wand2", [
    [
        "path",
        {
            d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
            key: "1bcowg"
        }
    ],
    [
        "path",
        {
            d: "m14 7 3 3",
            key: "1r5n42"
        }
    ],
    [
        "path",
        {
            d: "M5 6v4",
            key: "ilb8ba"
        }
    ],
    [
        "path",
        {
            d: "M19 14v4",
            key: "blhpug"
        }
    ],
    [
        "path",
        {
            d: "M10 2v2",
            key: "7u0qdc"
        }
    ],
    [
        "path",
        {
            d: "M7 8H3",
            key: "zfb6yr"
        }
    ],
    [
        "path",
        {
            d: "M21 16h-4",
            key: "1cnmox"
        }
    ],
    [
        "path",
        {
            d: "M11 3H9",
            key: "1obp7u"
        }
    ]
]);
var Wand2$1 = Wand2;
var Wand = createReactComponent("Wand", [
    [
        "path",
        {
            d: "M15 4V2",
            key: "z1p9b7"
        }
    ],
    [
        "path",
        {
            d: "M15 16v-2",
            key: "px0unx"
        }
    ],
    [
        "path",
        {
            d: "M8 9h2",
            key: "1g203m"
        }
    ],
    [
        "path",
        {
            d: "M20 9h2",
            key: "19tzq7"
        }
    ],
    [
        "path",
        {
            d: "M17.8 11.8 19 13",
            key: "yihg8r"
        }
    ],
    [
        "path",
        {
            d: "M15 9h0",
            key: "kg5t1u"
        }
    ],
    [
        "path",
        {
            d: "M17.8 6.2 19 5",
            key: "fd4us0"
        }
    ],
    [
        "path",
        {
            d: "m3 21 9-9",
            key: "1jfql5"
        }
    ],
    [
        "path",
        {
            d: "M12.2 6.2 11 5",
            key: "i3da3b"
        }
    ]
]);
var Wand$1 = Wand;
var Watch = createReactComponent("Watch", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }
    ],
    [
        "polyline",
        {
            points: "12 10 12 12 13 13",
            key: "19dquz"
        }
    ],
    [
        "path",
        {
            d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",
            key: "18k57s"
        }
    ],
    [
        "path",
        {
            d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",
            key: "16ny36"
        }
    ]
]);
var Watch$1 = Watch;
var Waves = createReactComponent("Waves", [
    [
        "path",
        {
            d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
            key: "knzxuh"
        }
    ],
    [
        "path",
        {
            d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
            key: "2jd2cc"
        }
    ],
    [
        "path",
        {
            d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
            key: "rd2r6e"
        }
    ]
]);
var Waves$1 = Waves;
var Webcam = createReactComponent("Webcam", [
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "8",
            key: "1gshiw"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ],
    [
        "path",
        {
            d: "M7 22h10",
            key: "10w4w3"
        }
    ],
    [
        "path",
        {
            d: "M12 22v-4",
            key: "1utk9m"
        }
    ]
]);
var Webcam$1 = Webcam;
var Webhook = createReactComponent("Webhook", [
    [
        "path",
        {
            d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
            key: "q3hayz"
        }
    ],
    [
        "path",
        {
            d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",
            key: "1go1hn"
        }
    ],
    [
        "path",
        {
            d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",
            key: "qlwsc0"
        }
    ]
]);
var Webhook$1 = Webhook;
var WifiOff = createReactComponent("WifiOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "path",
        {
            d: "M8.5 16.5a5 5 0 0 1 7 0",
            key: "sej527"
        }
    ],
    [
        "path",
        {
            d: "M2 8.82a15 15 0 0 1 4.17-2.65",
            key: "11utq1"
        }
    ],
    [
        "path",
        {
            d: "M10.66 5c4.01-.36 8.14.9 11.34 3.76",
            key: "hxefdu"
        }
    ],
    [
        "path",
        {
            d: "M16.85 11.25a10 10 0 0 1 2.22 1.68",
            key: "q734kn"
        }
    ],
    [
        "path",
        {
            d: "M5 13a10 10 0 0 1 5.24-2.76",
            key: "piq4yl"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "20",
            x2: "12.01",
            y2: "20",
            key: "wbu7xg"
        }
    ]
]);
var WifiOff$1 = WifiOff;
var Wifi = createReactComponent("Wifi", [
    [
        "path",
        {
            d: "M5 13a10 10 0 0 1 14 0",
            key: "6v8j51"
        }
    ],
    [
        "path",
        {
            d: "M8.5 16.5a5 5 0 0 1 7 0",
            key: "sej527"
        }
    ],
    [
        "path",
        {
            d: "M2 8.82a15 15 0 0 1 20 0",
            key: "dnpr2z"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "20",
            x2: "12.01",
            y2: "20",
            key: "wbu7xg"
        }
    ]
]);
var Wifi$1 = Wifi;
var Wind = createReactComponent("Wind", [
    [
        "path",
        {
            d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",
            key: "1k4u03"
        }
    ],
    [
        "path",
        {
            d: "M9.6 4.6A2 2 0 1 1 11 8H2",
            key: "b7d0fd"
        }
    ],
    [
        "path",
        {
            d: "M12.6 19.4A2 2 0 1 0 14 16H2",
            key: "1p5cb3"
        }
    ]
]);
var Wind$1 = Wind;
var Wine = createReactComponent("Wine", [
    [
        "path",
        {
            d: "M8 22h8",
            key: "rmew8v"
        }
    ],
    [
        "path",
        {
            d: "M7 10h10",
            key: "1101jm"
        }
    ],
    [
        "path",
        {
            d: "M12 15v7",
            key: "t2xh3l"
        }
    ],
    [
        "path",
        {
            d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",
            key: "10ffi3"
        }
    ]
]);
var Wine$1 = Wine;
var WrapText = createReactComponent("WrapText", [
    [
        "line",
        {
            x1: "3",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "1tp2lp"
        }
    ],
    [
        "path",
        {
            d: "M3 12h15a3 3 0 1 1 0 6h-4",
            key: "1cl7v7"
        }
    ],
    [
        "polyline",
        {
            points: "16 16 14 18 16 20",
            key: "1jznyi"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "18",
            x2: "10",
            y2: "18",
            key: "16bh46"
        }
    ]
]);
var WrapText$1 = WrapText;
var Wrench = createReactComponent("Wrench", [
    [
        "path",
        {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
            key: "cbrjhi"
        }
    ]
]);
var Wrench$1 = Wrench;
var XCircle = createReactComponent("XCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "9",
            y2: "15",
            key: "19zs77"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "15",
            y2: "15",
            key: "10u9bu"
        }
    ]
]);
var XCircle$1 = XCircle;
var XOctagon = createReactComponent("XOctagon", [
    [
        "polygon",
        {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
            key: "h1p8hx"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "9",
            y2: "15",
            key: "19zs77"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "15",
            y2: "15",
            key: "10u9bu"
        }
    ]
]);
var XOctagon$1 = XOctagon;
var XSquare = createReactComponent("XSquare", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "15",
            y2: "15",
            key: "10u9bu"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "9",
            y2: "15",
            key: "19zs77"
        }
    ]
]);
var XSquare$1 = XSquare;
var X = createReactComponent("X", [
    [
        "line",
        {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18",
            key: "1o5bob"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18",
            key: "z4dcbv"
        }
    ]
]);
var X$1 = X;
var Youtube = createReactComponent("Youtube", [
    [
        "path",
        {
            d: "M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z",
            key: "1nqccg"
        }
    ],
    [
        "polygon",
        {
            points: "10 15 15 12 10 9",
            key: "1c7afu"
        }
    ]
]);
var Youtube$1 = Youtube;
var ZapOff = createReactComponent("ZapOff", [
    [
        "polyline",
        {
            points: "12.41 6.75 13 2 10.57 4.92",
            key: "122m05"
        }
    ],
    [
        "polyline",
        {
            points: "18.57 12.91 21 10 15.66 10",
            key: "16r43o"
        }
    ],
    [
        "polyline",
        {
            points: "8 8 3 14 12 14 11 22 16 16",
            key: "tmh4bc"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
var ZapOff$1 = ZapOff;
var Zap = createReactComponent("Zap", [
    [
        "polygon",
        {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
            key: "45s27k"
        }
    ]
]);
var Zap$1 = Zap;
var ZoomIn = createReactComponent("ZoomIn", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65",
            key: "1p50m8"
        }
    ],
    [
        "line",
        {
            x1: "11",
            y1: "8",
            x2: "11",
            y2: "14",
            key: "jw7mvq"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "11",
            x2: "14",
            y2: "11",
            key: "1nivud"
        }
    ]
]);
var ZoomIn$1 = ZoomIn;
var ZoomOut = createReactComponent("ZoomOut", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65",
            key: "1p50m8"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "11",
            x2: "14",
            y2: "11",
            key: "1nivud"
        }
    ]
]);
var ZoomOut$1 = ZoomOut;
__webpack_unused_export__ = Accessibility$1;
__webpack_unused_export__ = Activity$1;
__webpack_unused_export__ = AirVent$1;
__webpack_unused_export__ = Airplay$1;
__webpack_unused_export__ = AlarmCheck$1;
__webpack_unused_export__ = AlarmClock$1;
__webpack_unused_export__ = AlarmClockOff$1;
__webpack_unused_export__ = AlarmMinus$1;
__webpack_unused_export__ = AlarmPlus$1;
__webpack_unused_export__ = Album$1;
__webpack_unused_export__ = AlertCircle$1;
__webpack_unused_export__ = AlertOctagon$1;
exports.uyG = AlertTriangle$1;
__webpack_unused_export__ = AlignCenter$1;
__webpack_unused_export__ = AlignCenterHorizontal$1;
__webpack_unused_export__ = AlignCenterVertical$1;
__webpack_unused_export__ = AlignEndHorizontal$1;
__webpack_unused_export__ = AlignEndVertical$1;
__webpack_unused_export__ = AlignHorizontalDistributeCenter$1;
__webpack_unused_export__ = AlignHorizontalDistributeEnd$1;
__webpack_unused_export__ = AlignHorizontalDistributeStart$1;
__webpack_unused_export__ = AlignHorizontalJustifyCenter$1;
__webpack_unused_export__ = AlignHorizontalJustifyEnd$1;
__webpack_unused_export__ = AlignHorizontalJustifyStart$1;
__webpack_unused_export__ = AlignHorizontalSpaceAround$1;
__webpack_unused_export__ = AlignHorizontalSpaceBetween$1;
__webpack_unused_export__ = AlignJustify$1;
exports.NiS = AlignLeft$1;
__webpack_unused_export__ = AlignRight$1;
__webpack_unused_export__ = AlignStartHorizontal$1;
__webpack_unused_export__ = AlignStartVertical$1;
__webpack_unused_export__ = AlignVerticalDistributeCenter$1;
__webpack_unused_export__ = AlignVerticalDistributeEnd$1;
__webpack_unused_export__ = AlignVerticalDistributeStart$1;
__webpack_unused_export__ = AlignVerticalJustifyCenter$1;
__webpack_unused_export__ = AlignVerticalJustifyEnd$1;
__webpack_unused_export__ = AlignVerticalJustifyStart$1;
__webpack_unused_export__ = AlignVerticalSpaceAround$1;
__webpack_unused_export__ = AlignVerticalSpaceBetween$1;
__webpack_unused_export__ = Anchor$1;
__webpack_unused_export__ = Angry$1;
__webpack_unused_export__ = Annoyed$1;
__webpack_unused_export__ = Aperture$1;
__webpack_unused_export__ = Apple$1;
__webpack_unused_export__ = Archive$1;
__webpack_unused_export__ = ArchiveRestore$1;
__webpack_unused_export__ = Armchair$1;
__webpack_unused_export__ = ArrowBigDown$1;
__webpack_unused_export__ = ArrowBigLeft$1;
__webpack_unused_export__ = ArrowBigRight$1;
__webpack_unused_export__ = ArrowBigUp$1;
__webpack_unused_export__ = ArrowDown$1;
__webpack_unused_export__ = ArrowDownCircle$1;
__webpack_unused_export__ = ArrowDownLeft$1;
__webpack_unused_export__ = ArrowDownRight$1;
__webpack_unused_export__ = ArrowLeft$1;
__webpack_unused_export__ = ArrowLeftCircle$1;
__webpack_unused_export__ = ArrowLeftRight$1;
exports.olP = ArrowRight$1;
__webpack_unused_export__ = ArrowRightCircle$1;
__webpack_unused_export__ = ArrowUp$1;
__webpack_unused_export__ = ArrowUpCircle$1;
__webpack_unused_export__ = ArrowUpDown$1;
__webpack_unused_export__ = ArrowUpLeft$1;
__webpack_unused_export__ = ArrowUpRight$1;
__webpack_unused_export__ = Asterisk$1;
__webpack_unused_export__ = AtSign$1;
__webpack_unused_export__ = Award$1;
__webpack_unused_export__ = Axe$1;
__webpack_unused_export__ = Axis3d$1;
__webpack_unused_export__ = Baby$1;
__webpack_unused_export__ = Backpack$1;
__webpack_unused_export__ = BaggageClaim$1;
__webpack_unused_export__ = Banana$1;
__webpack_unused_export__ = Banknote$1;
__webpack_unused_export__ = BarChart$1;
__webpack_unused_export__ = BarChart2$1;
__webpack_unused_export__ = BarChart3$1;
__webpack_unused_export__ = BarChart4$1;
__webpack_unused_export__ = BarChartHorizontal$1;
__webpack_unused_export__ = Baseline$1;
__webpack_unused_export__ = Bath$1;
__webpack_unused_export__ = Battery$1;
__webpack_unused_export__ = BatteryCharging$1;
__webpack_unused_export__ = BatteryFull$1;
__webpack_unused_export__ = BatteryLow$1;
__webpack_unused_export__ = BatteryMedium$1;
__webpack_unused_export__ = Beaker$1;
__webpack_unused_export__ = Bed$1;
__webpack_unused_export__ = BedDouble$1;
__webpack_unused_export__ = BedSingle$1;
__webpack_unused_export__ = Beer$1;
__webpack_unused_export__ = Bell$1;
__webpack_unused_export__ = BellMinus$1;
__webpack_unused_export__ = BellOff$1;
__webpack_unused_export__ = BellPlus$1;
__webpack_unused_export__ = BellRing$1;
__webpack_unused_export__ = Bike$1;
__webpack_unused_export__ = Binary$1;
__webpack_unused_export__ = Bitcoin$1;
__webpack_unused_export__ = Bluetooth$1;
__webpack_unused_export__ = BluetoothConnected$1;
__webpack_unused_export__ = BluetoothOff$1;
__webpack_unused_export__ = BluetoothSearching$1;
__webpack_unused_export__ = Bold$1;
__webpack_unused_export__ = Bomb$1;
__webpack_unused_export__ = Bone$1;
__webpack_unused_export__ = Book$1;
__webpack_unused_export__ = BookOpen$1;
__webpack_unused_export__ = BookOpenCheck$1;
__webpack_unused_export__ = Bookmark$1;
__webpack_unused_export__ = BookmarkMinus$1;
__webpack_unused_export__ = BookmarkPlus$1;
__webpack_unused_export__ = Bot$1;
__webpack_unused_export__ = Box$1;
__webpack_unused_export__ = BoxSelect$1;
__webpack_unused_export__ = Boxes$1;
__webpack_unused_export__ = Briefcase$1;
__webpack_unused_export__ = Brush$1;
__webpack_unused_export__ = Bug$1;
__webpack_unused_export__ = Building$1;
__webpack_unused_export__ = Building2$1;
__webpack_unused_export__ = Bus$1;
__webpack_unused_export__ = Cake$1;
__webpack_unused_export__ = Calculator$1;
__webpack_unused_export__ = Calendar$1;
__webpack_unused_export__ = CalendarCheck$1;
__webpack_unused_export__ = CalendarCheck2$1;
__webpack_unused_export__ = CalendarClock$1;
__webpack_unused_export__ = CalendarDays$1;
__webpack_unused_export__ = CalendarHeart$1;
__webpack_unused_export__ = CalendarMinus$1;
__webpack_unused_export__ = CalendarOff$1;
__webpack_unused_export__ = CalendarPlus$1;
__webpack_unused_export__ = CalendarRange$1;
__webpack_unused_export__ = CalendarSearch$1;
__webpack_unused_export__ = CalendarX$1;
__webpack_unused_export__ = CalendarX2$1;
__webpack_unused_export__ = Camera$1;
__webpack_unused_export__ = CameraOff$1;
__webpack_unused_export__ = Car$1;
__webpack_unused_export__ = Carrot$1;
__webpack_unused_export__ = Cast$1;
exports.JrY = Check$1;
__webpack_unused_export__ = CheckCircle$1;
__webpack_unused_export__ = CheckCircle2$1;
__webpack_unused_export__ = CheckSquare$1;
__webpack_unused_export__ = ChefHat$1;
__webpack_unused_export__ = Cherry$1;
__webpack_unused_export__ = ChevronDown$1;
__webpack_unused_export__ = ChevronFirst$1;
__webpack_unused_export__ = ChevronLast$1;
exports.s$$ = ChevronLeft$1;
exports._Qn = ChevronRight$1;
__webpack_unused_export__ = ChevronUp$1;
__webpack_unused_export__ = ChevronsDown$1;
__webpack_unused_export__ = ChevronsDownUp$1;
__webpack_unused_export__ = ChevronsLeft$1;
__webpack_unused_export__ = ChevronsLeftRight$1;
__webpack_unused_export__ = ChevronsRight$1;
__webpack_unused_export__ = ChevronsRightLeft$1;
__webpack_unused_export__ = ChevronsUp$1;
__webpack_unused_export__ = ChevronsUpDown$1;
__webpack_unused_export__ = Chrome$1;
__webpack_unused_export__ = Cigarette$1;
__webpack_unused_export__ = CigaretteOff$1;
__webpack_unused_export__ = Circle$1;
__webpack_unused_export__ = CircleDot$1;
__webpack_unused_export__ = CircleEllipsis$1;
__webpack_unused_export__ = CircleSlashed$1;
__webpack_unused_export__ = Citrus$1;
__webpack_unused_export__ = Clapperboard$1;
__webpack_unused_export__ = Clipboard$1;
__webpack_unused_export__ = ClipboardCheck$1;
__webpack_unused_export__ = ClipboardCopy$1;
__webpack_unused_export__ = ClipboardEdit$1;
__webpack_unused_export__ = ClipboardList$1;
__webpack_unused_export__ = ClipboardSignature$1;
__webpack_unused_export__ = ClipboardType$1;
__webpack_unused_export__ = ClipboardX$1;
__webpack_unused_export__ = Clock$1;
__webpack_unused_export__ = Clock1$1;
__webpack_unused_export__ = Clock10$1;
__webpack_unused_export__ = Clock11$1;
__webpack_unused_export__ = Clock12$1;
__webpack_unused_export__ = Clock2$1;
__webpack_unused_export__ = Clock3$1;
__webpack_unused_export__ = Clock4$1;
__webpack_unused_export__ = Clock5$1;
__webpack_unused_export__ = Clock6$1;
__webpack_unused_export__ = Clock7$1;
__webpack_unused_export__ = Clock8$1;
__webpack_unused_export__ = Clock9$1;
__webpack_unused_export__ = Cloud$1;
__webpack_unused_export__ = CloudCog$1;
__webpack_unused_export__ = CloudDrizzle$1;
__webpack_unused_export__ = CloudFog$1;
__webpack_unused_export__ = CloudHail$1;
__webpack_unused_export__ = CloudLightning$1;
__webpack_unused_export__ = CloudMoon$1;
__webpack_unused_export__ = CloudMoonRain$1;
__webpack_unused_export__ = CloudOff$1;
__webpack_unused_export__ = CloudRain$1;
__webpack_unused_export__ = CloudRainWind$1;
__webpack_unused_export__ = CloudSnow$1;
__webpack_unused_export__ = CloudSun$1;
__webpack_unused_export__ = CloudSunRain$1;
__webpack_unused_export__ = Cloudy$1;
__webpack_unused_export__ = Clover$1;
__webpack_unused_export__ = Code$1;
__webpack_unused_export__ = Code2$1;
__webpack_unused_export__ = Codepen$1;
__webpack_unused_export__ = Codesandbox$1;
__webpack_unused_export__ = Coffee$1;
__webpack_unused_export__ = Cog$1;
__webpack_unused_export__ = Coins$1;
__webpack_unused_export__ = Columns$1;
exports.mYg = Command$1;
__webpack_unused_export__ = Compass$1;
__webpack_unused_export__ = Component$1;
__webpack_unused_export__ = ConciergeBell$1;
__webpack_unused_export__ = Contact$1;
__webpack_unused_export__ = Contrast$1;
__webpack_unused_export__ = Cookie$1;
__webpack_unused_export__ = Copy$1;
__webpack_unused_export__ = Copyleft$1;
__webpack_unused_export__ = Copyright$1;
__webpack_unused_export__ = CornerDownLeft$1;
__webpack_unused_export__ = CornerDownRight$1;
__webpack_unused_export__ = CornerLeftDown$1;
__webpack_unused_export__ = CornerLeftUp$1;
__webpack_unused_export__ = CornerRightDown$1;
__webpack_unused_export__ = CornerRightUp$1;
__webpack_unused_export__ = CornerUpLeft$1;
__webpack_unused_export__ = CornerUpRight$1;
__webpack_unused_export__ = Cpu$1;
exports.aBT = CreditCard$1;
__webpack_unused_export__ = Croissant$1;
__webpack_unused_export__ = Crop$1;
__webpack_unused_export__ = Cross$1;
__webpack_unused_export__ = Crosshair$1;
__webpack_unused_export__ = Crown$1;
__webpack_unused_export__ = CupSoda$1;
__webpack_unused_export__ = CurlyBraces$1;
__webpack_unused_export__ = Currency$1;
__webpack_unused_export__ = Database$1;
__webpack_unused_export__ = Delete$1;
__webpack_unused_export__ = Diamond$1;
__webpack_unused_export__ = Dice1$1;
__webpack_unused_export__ = Dice2$1;
__webpack_unused_export__ = Dice3$1;
__webpack_unused_export__ = Dice4$1;
__webpack_unused_export__ = Dice5$1;
__webpack_unused_export__ = Dice6$1;
__webpack_unused_export__ = Dices$1;
__webpack_unused_export__ = Diff$1;
__webpack_unused_export__ = Disc$1;
__webpack_unused_export__ = Divide$1;
__webpack_unused_export__ = DivideCircle$1;
__webpack_unused_export__ = DivideSquare$1;
__webpack_unused_export__ = DollarSign$1;
__webpack_unused_export__ = Download$1;
__webpack_unused_export__ = DownloadCloud$1;
__webpack_unused_export__ = Dribbble$1;
__webpack_unused_export__ = Droplet$1;
__webpack_unused_export__ = Droplets$1;
__webpack_unused_export__ = Drumstick$1;
__webpack_unused_export__ = Ear$1;
__webpack_unused_export__ = EarOff$1;
__webpack_unused_export__ = Edit$1;
__webpack_unused_export__ = Edit2$1;
__webpack_unused_export__ = Edit3$1;
__webpack_unused_export__ = Egg$1;
__webpack_unused_export__ = EggFried$1;
__webpack_unused_export__ = Equal$1;
__webpack_unused_export__ = EqualNot$1;
__webpack_unused_export__ = Eraser$1;
__webpack_unused_export__ = Euro$1;
__webpack_unused_export__ = Expand$1;
__webpack_unused_export__ = ExternalLink$1;
exports.bAj = Eye$1;
exports._jl = EyeOff$1;
__webpack_unused_export__ = Facebook$1;
__webpack_unused_export__ = Factory$1;
__webpack_unused_export__ = Fan$1;
__webpack_unused_export__ = FastForward$1;
__webpack_unused_export__ = Feather$1;
__webpack_unused_export__ = Figma$1;
exports.$BE = File$1;
__webpack_unused_export__ = FileArchive$1;
__webpack_unused_export__ = FileAudio$1;
__webpack_unused_export__ = FileAudio2$1;
__webpack_unused_export__ = FileAxis3d$1;
__webpack_unused_export__ = FileBadge$1;
__webpack_unused_export__ = FileBadge2$1;
__webpack_unused_export__ = FileBarChart$1;
__webpack_unused_export__ = FileBarChart2$1;
__webpack_unused_export__ = FileBox$1;
__webpack_unused_export__ = FileCheck$1;
__webpack_unused_export__ = FileCheck2$1;
__webpack_unused_export__ = FileClock$1;
__webpack_unused_export__ = FileCode$1;
__webpack_unused_export__ = FileCog$1;
__webpack_unused_export__ = FileCog2$1;
__webpack_unused_export__ = FileDiff$1;
__webpack_unused_export__ = FileDigit$1;
__webpack_unused_export__ = FileDown$1;
__webpack_unused_export__ = FileEdit$1;
__webpack_unused_export__ = FileHeart$1;
__webpack_unused_export__ = FileImage$1;
__webpack_unused_export__ = FileInput$1;
__webpack_unused_export__ = FileJson$1;
__webpack_unused_export__ = FileJson2$1;
__webpack_unused_export__ = FileKey$1;
__webpack_unused_export__ = FileKey2$1;
__webpack_unused_export__ = FileLineChart$1;
__webpack_unused_export__ = FileLock$1;
__webpack_unused_export__ = FileLock2$1;
__webpack_unused_export__ = FileMinus$1;
__webpack_unused_export__ = FileMinus2$1;
__webpack_unused_export__ = FileOutput$1;
__webpack_unused_export__ = FilePieChart$1;
__webpack_unused_export__ = FilePlus$1;
__webpack_unused_export__ = FilePlus2$1;
__webpack_unused_export__ = FileQuestion$1;
__webpack_unused_export__ = FileScan$1;
__webpack_unused_export__ = FileSearch$1;
__webpack_unused_export__ = FileSearch2$1;
__webpack_unused_export__ = FileSignature$1;
__webpack_unused_export__ = FileSpreadsheet$1;
__webpack_unused_export__ = FileSymlink$1;
__webpack_unused_export__ = FileTerminal$1;
exports.acj = FileText$1;
__webpack_unused_export__ = FileType$1;
__webpack_unused_export__ = FileType2$1;
__webpack_unused_export__ = FileUp$1;
__webpack_unused_export__ = FileVideo$1;
__webpack_unused_export__ = FileVideo2$1;
__webpack_unused_export__ = FileVolume$1;
__webpack_unused_export__ = FileVolume2$1;
__webpack_unused_export__ = FileWarning$1;
__webpack_unused_export__ = FileX$1;
__webpack_unused_export__ = FileX2$1;
__webpack_unused_export__ = Files$1;
__webpack_unused_export__ = Film$1;
__webpack_unused_export__ = Filter$1;
__webpack_unused_export__ = Fingerprint$1;
__webpack_unused_export__ = Flag$1;
__webpack_unused_export__ = FlagOff$1;
__webpack_unused_export__ = FlagTriangleLeft$1;
__webpack_unused_export__ = FlagTriangleRight$1;
__webpack_unused_export__ = Flame$1;
__webpack_unused_export__ = Flashlight$1;
__webpack_unused_export__ = FlashlightOff$1;
__webpack_unused_export__ = FlaskConical$1;
__webpack_unused_export__ = FlaskRound$1;
__webpack_unused_export__ = FlipHorizontal$1;
__webpack_unused_export__ = FlipHorizontal2$1;
__webpack_unused_export__ = FlipVertical$1;
__webpack_unused_export__ = FlipVertical2$1;
__webpack_unused_export__ = Flower$1;
__webpack_unused_export__ = Flower2$1;
__webpack_unused_export__ = Focus$1;
__webpack_unused_export__ = Folder$1;
__webpack_unused_export__ = FolderArchive$1;
__webpack_unused_export__ = FolderCheck$1;
__webpack_unused_export__ = FolderClock$1;
__webpack_unused_export__ = FolderClosed$1;
__webpack_unused_export__ = FolderCog$1;
__webpack_unused_export__ = FolderCog2$1;
__webpack_unused_export__ = FolderDown$1;
__webpack_unused_export__ = FolderEdit$1;
__webpack_unused_export__ = FolderHeart$1;
__webpack_unused_export__ = FolderInput$1;
__webpack_unused_export__ = FolderKey$1;
__webpack_unused_export__ = FolderLock$1;
__webpack_unused_export__ = FolderMinus$1;
__webpack_unused_export__ = FolderOpen$1;
__webpack_unused_export__ = FolderOutput$1;
__webpack_unused_export__ = FolderPlus$1;
__webpack_unused_export__ = FolderSearch$1;
__webpack_unused_export__ = FolderSearch2$1;
__webpack_unused_export__ = FolderSymlink$1;
__webpack_unused_export__ = FolderTree$1;
__webpack_unused_export__ = FolderUp$1;
__webpack_unused_export__ = FolderX$1;
__webpack_unused_export__ = Folders$1;
__webpack_unused_export__ = FormInput$1;
__webpack_unused_export__ = Forward$1;
__webpack_unused_export__ = Frame$1;
__webpack_unused_export__ = Framer$1;
__webpack_unused_export__ = Frown$1;
__webpack_unused_export__ = Fuel$1;
__webpack_unused_export__ = FunctionSquare$1;
__webpack_unused_export__ = Gamepad$1;
__webpack_unused_export__ = Gamepad2$1;
__webpack_unused_export__ = Gauge$1;
__webpack_unused_export__ = Gavel$1;
__webpack_unused_export__ = Gem$1;
__webpack_unused_export__ = Ghost$1;
__webpack_unused_export__ = Gift$1;
__webpack_unused_export__ = GitBranch$1;
__webpack_unused_export__ = GitBranchPlus$1;
__webpack_unused_export__ = GitCommit$1;
__webpack_unused_export__ = GitCompare$1;
__webpack_unused_export__ = GitFork$1;
__webpack_unused_export__ = GitMerge$1;
__webpack_unused_export__ = GitPullRequest$1;
__webpack_unused_export__ = GitPullRequestClosed$1;
__webpack_unused_export__ = GitPullRequestDraft$1;
__webpack_unused_export__ = Github$1;
__webpack_unused_export__ = Gitlab$1;
__webpack_unused_export__ = GlassWater$1;
__webpack_unused_export__ = Glasses$1;
__webpack_unused_export__ = Globe$1;
__webpack_unused_export__ = Globe2$1;
__webpack_unused_export__ = Grab$1;
exports.XHo = GraduationCap$1;
__webpack_unused_export__ = Grape$1;
__webpack_unused_export__ = Grid$1;
__webpack_unused_export__ = GripHorizontal$1;
__webpack_unused_export__ = GripVertical$1;
__webpack_unused_export__ = Hammer$1;
__webpack_unused_export__ = Hand$1;
__webpack_unused_export__ = HandMetal$1;
__webpack_unused_export__ = HardDrive$1;
__webpack_unused_export__ = HardHat$1;
__webpack_unused_export__ = Hash$1;
__webpack_unused_export__ = Haze$1;
__webpack_unused_export__ = Headphones$1;
__webpack_unused_export__ = Heart$1;
__webpack_unused_export__ = HeartCrack$1;
__webpack_unused_export__ = HeartHandshake$1;
__webpack_unused_export__ = HeartOff$1;
__webpack_unused_export__ = HeartPulse$1;
exports.j$F = HelpCircle$1;
__webpack_unused_export__ = Hexagon$1;
__webpack_unused_export__ = Highlighter$1;
__webpack_unused_export__ = History$1;
__webpack_unused_export__ = Home$1;
__webpack_unused_export__ = Hourglass$1;
__webpack_unused_export__ = IceCream$1;
exports.Eep = Image$1;
__webpack_unused_export__ = ImageMinus$1;
__webpack_unused_export__ = ImageOff$1;
__webpack_unused_export__ = ImagePlus$1;
__webpack_unused_export__ = Import$1;
__webpack_unused_export__ = Inbox$1;
__webpack_unused_export__ = Indent$1;
__webpack_unused_export__ = IndianRupee$1;
__webpack_unused_export__ = Infinity$1;
__webpack_unused_export__ = Info$1;
__webpack_unused_export__ = Inspect$1;
__webpack_unused_export__ = Instagram$1;
__webpack_unused_export__ = Italic$1;
__webpack_unused_export__ = JapaneseYen$1;
__webpack_unused_export__ = Joystick$1;
__webpack_unused_export__ = Key$1;
__webpack_unused_export__ = Keyboard$1;
__webpack_unused_export__ = Lamp$1;
__webpack_unused_export__ = LampCeiling$1;
__webpack_unused_export__ = LampDesk$1;
__webpack_unused_export__ = LampFloor$1;
__webpack_unused_export__ = LampWallDown$1;
__webpack_unused_export__ = LampWallUp$1;
__webpack_unused_export__ = Landmark$1;
__webpack_unused_export__ = Languages$1;
exports.Izo = Laptop$1;
__webpack_unused_export__ = Laptop2$1;
__webpack_unused_export__ = Lasso$1;
__webpack_unused_export__ = LassoSelect$1;
__webpack_unused_export__ = Laugh$1;
__webpack_unused_export__ = Layers$1;
__webpack_unused_export__ = Layout$1;
__webpack_unused_export__ = LayoutDashboard$1;
__webpack_unused_export__ = LayoutGrid$1;
__webpack_unused_export__ = LayoutList$1;
__webpack_unused_export__ = LayoutTemplate$1;
__webpack_unused_export__ = Leaf$1;
__webpack_unused_export__ = Library$1;
__webpack_unused_export__ = LifeBuoy$1;
__webpack_unused_export__ = Lightbulb$1;
__webpack_unused_export__ = LightbulbOff$1;
__webpack_unused_export__ = LineChart$1;
__webpack_unused_export__ = Link$1;
__webpack_unused_export__ = Link2$1;
__webpack_unused_export__ = Link2Off$1;
__webpack_unused_export__ = Linkedin$1;
__webpack_unused_export__ = List$1;
__webpack_unused_export__ = ListChecks$1;
__webpack_unused_export__ = ListEnd$1;
__webpack_unused_export__ = ListMinus$1;
__webpack_unused_export__ = ListMusic$1;
__webpack_unused_export__ = ListOrdered$1;
__webpack_unused_export__ = ListPlus$1;
__webpack_unused_export__ = ListStart$1;
__webpack_unused_export__ = ListVideo$1;
__webpack_unused_export__ = ListX$1;
__webpack_unused_export__ = Loader$1;
exports.zM5 = Loader2$1;
__webpack_unused_export__ = Locate$1;
__webpack_unused_export__ = LocateFixed$1;
__webpack_unused_export__ = LocateOff$1;
__webpack_unused_export__ = Lock$1;
__webpack_unused_export__ = LogIn$1;
__webpack_unused_export__ = LogOut$1;
__webpack_unused_export__ = Luggage$1;
__webpack_unused_export__ = Magnet$1;
__webpack_unused_export__ = Mail$1;
__webpack_unused_export__ = MailCheck$1;
__webpack_unused_export__ = MailMinus$1;
__webpack_unused_export__ = MailOpen$1;
__webpack_unused_export__ = MailPlus$1;
__webpack_unused_export__ = MailQuestion$1;
__webpack_unused_export__ = MailSearch$1;
__webpack_unused_export__ = MailWarning$1;
__webpack_unused_export__ = MailX$1;
__webpack_unused_export__ = Mails$1;
__webpack_unused_export__ = Map$1;
__webpack_unused_export__ = MapPin$1;
__webpack_unused_export__ = MapPinOff$1;
__webpack_unused_export__ = Martini$1;
__webpack_unused_export__ = Maximize$1;
__webpack_unused_export__ = Maximize2$1;
__webpack_unused_export__ = Medal$1;
__webpack_unused_export__ = Megaphone$1;
__webpack_unused_export__ = MegaphoneOff$1;
__webpack_unused_export__ = Meh$1;
__webpack_unused_export__ = Menu$1;
__webpack_unused_export__ = MessageCircle$1;
__webpack_unused_export__ = MessageSquare$1;
__webpack_unused_export__ = Mic$1;
__webpack_unused_export__ = Mic2$1;
__webpack_unused_export__ = MicOff$1;
__webpack_unused_export__ = Microscope$1;
__webpack_unused_export__ = Microwave$1;
__webpack_unused_export__ = Milestone$1;
__webpack_unused_export__ = Minimize$1;
__webpack_unused_export__ = Minimize2$1;
__webpack_unused_export__ = Minus$1;
__webpack_unused_export__ = MinusCircle$1;
__webpack_unused_export__ = MinusSquare$1;
__webpack_unused_export__ = Monitor$1;
__webpack_unused_export__ = MonitorOff$1;
__webpack_unused_export__ = MonitorSpeaker$1;
exports.JFe = Moon$1;
__webpack_unused_export__ = MoreHorizontal$1;
exports.hlC = MoreVertical$1;
__webpack_unused_export__ = Mountain$1;
__webpack_unused_export__ = MountainSnow$1;
__webpack_unused_export__ = Mouse$1;
__webpack_unused_export__ = MousePointer$1;
__webpack_unused_export__ = MousePointer2$1;
__webpack_unused_export__ = MousePointerClick$1;
__webpack_unused_export__ = Move$1;
__webpack_unused_export__ = Move3d$1;
__webpack_unused_export__ = MoveDiagonal$1;
__webpack_unused_export__ = MoveDiagonal2$1;
__webpack_unused_export__ = MoveHorizontal$1;
__webpack_unused_export__ = MoveVertical$1;
__webpack_unused_export__ = Music$1;
__webpack_unused_export__ = Music2$1;
__webpack_unused_export__ = Music3$1;
__webpack_unused_export__ = Music4$1;
__webpack_unused_export__ = Navigation$1;
__webpack_unused_export__ = Navigation2$1;
__webpack_unused_export__ = Navigation2Off$1;
__webpack_unused_export__ = NavigationOff$1;
__webpack_unused_export__ = Network$1;
__webpack_unused_export__ = Newspaper$1;
__webpack_unused_export__ = Octagon$1;
__webpack_unused_export__ = Option$1;
__webpack_unused_export__ = Outdent$1;
__webpack_unused_export__ = Package$1;
__webpack_unused_export__ = Package2$1;
__webpack_unused_export__ = PackageCheck$1;
__webpack_unused_export__ = PackageMinus$1;
__webpack_unused_export__ = PackageOpen$1;
__webpack_unused_export__ = PackagePlus$1;
__webpack_unused_export__ = PackageSearch$1;
__webpack_unused_export__ = PackageX$1;
__webpack_unused_export__ = PaintBucket$1;
__webpack_unused_export__ = Paintbrush$1;
__webpack_unused_export__ = Paintbrush2$1;
__webpack_unused_export__ = Palette$1;
__webpack_unused_export__ = Palmtree$1;
__webpack_unused_export__ = Paperclip$1;
__webpack_unused_export__ = PartyPopper$1;
__webpack_unused_export__ = Pause$1;
__webpack_unused_export__ = PauseCircle$1;
__webpack_unused_export__ = PauseOctagon$1;
__webpack_unused_export__ = PenTool$1;
__webpack_unused_export__ = Pencil$1;
__webpack_unused_export__ = Percent$1;
__webpack_unused_export__ = PersonStanding$1;
__webpack_unused_export__ = Phone$1;
__webpack_unused_export__ = PhoneCall$1;
__webpack_unused_export__ = PhoneForwarded$1;
__webpack_unused_export__ = PhoneIncoming$1;
__webpack_unused_export__ = PhoneMissed$1;
__webpack_unused_export__ = PhoneOff$1;
__webpack_unused_export__ = PhoneOutgoing$1;
__webpack_unused_export__ = PieChart$1;
__webpack_unused_export__ = PiggyBank$1;
__webpack_unused_export__ = Pin$1;
__webpack_unused_export__ = PinOff$1;
__webpack_unused_export__ = Pipette$1;
exports.k4s = Pizza$1;
__webpack_unused_export__ = Plane$1;
__webpack_unused_export__ = Play$1;
__webpack_unused_export__ = PlayCircle$1;
__webpack_unused_export__ = Plug$1;
__webpack_unused_export__ = Plug2$1;
__webpack_unused_export__ = PlugZap$1;
exports.v37 = Plus$1;
__webpack_unused_export__ = PlusCircle$1;
__webpack_unused_export__ = PlusSquare$1;
__webpack_unused_export__ = Pocket$1;
__webpack_unused_export__ = Podcast$1;
__webpack_unused_export__ = Pointer$1;
__webpack_unused_export__ = PoundSterling$1;
__webpack_unused_export__ = Power$1;
__webpack_unused_export__ = PowerOff$1;
__webpack_unused_export__ = Printer$1;
__webpack_unused_export__ = Puzzle$1;
__webpack_unused_export__ = QrCode$1;
__webpack_unused_export__ = Quote$1;
__webpack_unused_export__ = Radio$1;
__webpack_unused_export__ = RadioReceiver$1;
__webpack_unused_export__ = RectangleHorizontal$1;
__webpack_unused_export__ = RectangleVertical$1;
__webpack_unused_export__ = Recycle$1;
__webpack_unused_export__ = Redo$1;
__webpack_unused_export__ = Redo2$1;
__webpack_unused_export__ = RefreshCcw$1;
__webpack_unused_export__ = RefreshCw$1;
__webpack_unused_export__ = Refrigerator$1;
__webpack_unused_export__ = Regex$1;
__webpack_unused_export__ = Repeat$1;
__webpack_unused_export__ = Repeat1$1;
__webpack_unused_export__ = Reply$1;
__webpack_unused_export__ = ReplyAll$1;
__webpack_unused_export__ = Rewind$1;
__webpack_unused_export__ = Rocket$1;
__webpack_unused_export__ = RockingChair$1;
__webpack_unused_export__ = Rotate3d$1;
__webpack_unused_export__ = RotateCcw$1;
__webpack_unused_export__ = RotateCw$1;
__webpack_unused_export__ = Rss$1;
__webpack_unused_export__ = Ruler$1;
__webpack_unused_export__ = RussianRuble$1;
__webpack_unused_export__ = Sailboat$1;
__webpack_unused_export__ = Save$1;
__webpack_unused_export__ = Scale$1;
__webpack_unused_export__ = Scale3d$1;
__webpack_unused_export__ = Scaling$1;
__webpack_unused_export__ = Scan$1;
__webpack_unused_export__ = ScanFace$1;
__webpack_unused_export__ = ScanLine$1;
__webpack_unused_export__ = Scissors$1;
__webpack_unused_export__ = ScreenShare$1;
__webpack_unused_export__ = ScreenShareOff$1;
__webpack_unused_export__ = Scroll$1;
__webpack_unused_export__ = Search$1;
__webpack_unused_export__ = Send$1;
__webpack_unused_export__ = SeparatorHorizontal$1;
__webpack_unused_export__ = SeparatorVertical$1;
__webpack_unused_export__ = Server$1;
__webpack_unused_export__ = ServerCog$1;
__webpack_unused_export__ = ServerCrash$1;
__webpack_unused_export__ = ServerOff$1;
exports.Zrf = Settings$1;
__webpack_unused_export__ = Settings2$1;
__webpack_unused_export__ = Share$1;
__webpack_unused_export__ = Share2$1;
__webpack_unused_export__ = Sheet$1;
__webpack_unused_export__ = Shield$1;
__webpack_unused_export__ = ShieldAlert$1;
__webpack_unused_export__ = ShieldCheck$1;
__webpack_unused_export__ = ShieldClose$1;
__webpack_unused_export__ = ShieldOff$1;
__webpack_unused_export__ = Shirt$1;
__webpack_unused_export__ = ShoppingBag$1;
__webpack_unused_export__ = ShoppingCart$1;
__webpack_unused_export__ = Shovel$1;
__webpack_unused_export__ = ShowerHead$1;
__webpack_unused_export__ = Shrink$1;
__webpack_unused_export__ = Shrub$1;
__webpack_unused_export__ = Shuffle$1;
__webpack_unused_export__ = Sidebar$1;
__webpack_unused_export__ = SidebarClose$1;
__webpack_unused_export__ = SidebarOpen$1;
__webpack_unused_export__ = Sigma$1;
__webpack_unused_export__ = Signal$1;
__webpack_unused_export__ = SignalHigh$1;
__webpack_unused_export__ = SignalLow$1;
__webpack_unused_export__ = SignalMedium$1;
__webpack_unused_export__ = SignalZero$1;
__webpack_unused_export__ = Siren$1;
__webpack_unused_export__ = SkipBack$1;
__webpack_unused_export__ = SkipForward$1;
__webpack_unused_export__ = Skull$1;
__webpack_unused_export__ = Slack$1;
__webpack_unused_export__ = Slash$1;
__webpack_unused_export__ = Slice$1;
__webpack_unused_export__ = Sliders$1;
__webpack_unused_export__ = SlidersHorizontal$1;
__webpack_unused_export__ = Smartphone$1;
__webpack_unused_export__ = SmartphoneCharging$1;
__webpack_unused_export__ = Smile$1;
__webpack_unused_export__ = SmilePlus$1;
__webpack_unused_export__ = Snowflake$1;
__webpack_unused_export__ = Sofa$1;
__webpack_unused_export__ = SortAsc$1;
__webpack_unused_export__ = SortDesc$1;
__webpack_unused_export__ = Speaker$1;
__webpack_unused_export__ = Sprout$1;
__webpack_unused_export__ = Square$1;
__webpack_unused_export__ = Star$1;
__webpack_unused_export__ = StarHalf$1;
__webpack_unused_export__ = StarOff$1;
__webpack_unused_export__ = Stethoscope$1;
__webpack_unused_export__ = Sticker$1;
__webpack_unused_export__ = StickyNote$1;
__webpack_unused_export__ = StopCircle$1;
__webpack_unused_export__ = StretchHorizontal$1;
__webpack_unused_export__ = StretchVertical$1;
__webpack_unused_export__ = Strikethrough$1;
__webpack_unused_export__ = Subscript$1;
exports.kOA = Sun$1;
__webpack_unused_export__ = SunDim$1;
__webpack_unused_export__ = SunMedium$1;
__webpack_unused_export__ = SunMoon$1;
__webpack_unused_export__ = SunSnow$1;
__webpack_unused_export__ = Sunrise$1;
__webpack_unused_export__ = Sunset$1;
__webpack_unused_export__ = Superscript$1;
__webpack_unused_export__ = SwissFranc$1;
__webpack_unused_export__ = SwitchCamera$1;
__webpack_unused_export__ = Sword$1;
__webpack_unused_export__ = Swords$1;
__webpack_unused_export__ = Syringe$1;
__webpack_unused_export__ = Table$1;
__webpack_unused_export__ = Table2$1;
__webpack_unused_export__ = Tablet$1;
__webpack_unused_export__ = Tag$1;
__webpack_unused_export__ = Tags$1;
__webpack_unused_export__ = Target$1;
__webpack_unused_export__ = Tent$1;
__webpack_unused_export__ = Terminal$1;
__webpack_unused_export__ = TerminalSquare$1;
__webpack_unused_export__ = TextCursor$1;
__webpack_unused_export__ = TextCursorInput$1;
__webpack_unused_export__ = Thermometer$1;
__webpack_unused_export__ = ThermometerSnowflake$1;
__webpack_unused_export__ = ThermometerSun$1;
__webpack_unused_export__ = ThumbsDown$1;
__webpack_unused_export__ = ThumbsUp$1;
__webpack_unused_export__ = Ticket$1;
__webpack_unused_export__ = Timer$1;
__webpack_unused_export__ = TimerOff$1;
__webpack_unused_export__ = TimerReset$1;
__webpack_unused_export__ = ToggleLeft$1;
__webpack_unused_export__ = ToggleRight$1;
__webpack_unused_export__ = Tornado$1;
__webpack_unused_export__ = ToyBrick$1;
__webpack_unused_export__ = Train$1;
exports.rFk = Trash$1;
__webpack_unused_export__ = Trash2$1;
__webpack_unused_export__ = TreeDeciduous$1;
__webpack_unused_export__ = TreePine$1;
__webpack_unused_export__ = Trees$1;
__webpack_unused_export__ = Trello$1;
__webpack_unused_export__ = TrendingDown$1;
__webpack_unused_export__ = TrendingUp$1;
__webpack_unused_export__ = Triangle$1;
__webpack_unused_export__ = Trophy$1;
__webpack_unused_export__ = Truck$1;
__webpack_unused_export__ = Tv$1;
__webpack_unused_export__ = Tv2$1;
__webpack_unused_export__ = Twitch$1;
exports.tLe = Twitter$1;
__webpack_unused_export__ = Type$1;
__webpack_unused_export__ = Umbrella$1;
__webpack_unused_export__ = Underline$1;
__webpack_unused_export__ = Undo$1;
__webpack_unused_export__ = Undo2$1;
__webpack_unused_export__ = Unlink$1;
__webpack_unused_export__ = Unlink2$1;
__webpack_unused_export__ = Unlock$1;
__webpack_unused_export__ = Upload$1;
__webpack_unused_export__ = UploadCloud$1;
__webpack_unused_export__ = Usb$1;
exports.n5m = User$1;
__webpack_unused_export__ = UserCheck$1;
__webpack_unused_export__ = UserCog$1;
__webpack_unused_export__ = UserMinus$1;
__webpack_unused_export__ = UserPlus$1;
__webpack_unused_export__ = UserX$1;
__webpack_unused_export__ = Users$1;
__webpack_unused_export__ = Utensils$1;
__webpack_unused_export__ = UtensilsCrossed$1;
__webpack_unused_export__ = VenetianMask$1;
__webpack_unused_export__ = Verified$1;
__webpack_unused_export__ = Vibrate$1;
__webpack_unused_export__ = VibrateOff$1;
__webpack_unused_export__ = Video$1;
__webpack_unused_export__ = VideoOff$1;
__webpack_unused_export__ = View$1;
__webpack_unused_export__ = Voicemail$1;
__webpack_unused_export__ = Volume$1;
__webpack_unused_export__ = Volume1$1;
__webpack_unused_export__ = Volume2$1;
__webpack_unused_export__ = VolumeX$1;
__webpack_unused_export__ = Wallet$1;
__webpack_unused_export__ = Wand$1;
__webpack_unused_export__ = Wand2$1;
__webpack_unused_export__ = Watch$1;
__webpack_unused_export__ = Waves$1;
__webpack_unused_export__ = Webcam$1;
__webpack_unused_export__ = Webhook$1;
__webpack_unused_export__ = Wifi$1;
__webpack_unused_export__ = WifiOff$1;
__webpack_unused_export__ = Wind$1;
__webpack_unused_export__ = Wine$1;
__webpack_unused_export__ = WrapText$1;
__webpack_unused_export__ = Wrench$1;
exports.X = X$1;
__webpack_unused_export__ = XCircle$1;
__webpack_unused_export__ = XOctagon$1;
__webpack_unused_export__ = XSquare$1;
__webpack_unused_export__ = Youtube$1;
__webpack_unused_export__ = Zap$1;
__webpack_unused_export__ = ZapOff$1;
__webpack_unused_export__ = ZoomIn$1;
__webpack_unused_export__ = ZoomOut$1;
__webpack_unused_export__ = createReactComponent; //# sourceMappingURL=lucide-react.js.map


/***/ }),

/***/ 77707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var ReactPropTypesSecret = __webpack_require__(18001);
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
module.exports = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
            // It is still safe when called from React.
            return;
        }
        var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. " + "Use PropTypes.checkPropTypes() to call them. " + "Read more at http://fb.me/use-check-prop-types");
        err.name = "Invariant Violation";
        throw err;
    }
    ;
    shim.isRequired = shim;
    function getShim() {
        return shim;
    }
    ;
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};


/***/ }),

/***/ 38290:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
if (false) { var throwOnDirectAccess, ReactIs; } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = __webpack_require__(77707)();
}


/***/ }),

/***/ 18001:
/***/ ((module) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
module.exports = ReactPropTypesSecret;


/***/ })

};
;