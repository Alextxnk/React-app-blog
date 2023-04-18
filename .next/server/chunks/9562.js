exports.id = 9562;
exports.ids = [9562];
exports.modules = {

/***/ 99562:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $RyX6d$babelruntimehelpersextends = __webpack_require__(36305);
var $RyX6d$react = __webpack_require__(18038);
var $RyX6d$radixuireactprimitive = __webpack_require__(49140);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Label", () => $2583d9c3eccdd4e2$export$b04be29aa201d4f5);
$parcel$export(module.exports, "Root", () => $2583d9c3eccdd4e2$export$be92b6f5f03c0fe9);



/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/ const $2583d9c3eccdd4e2$var$NAME = 'Label';
const $2583d9c3eccdd4e2$export$b04be29aa201d4f5 = /*#__PURE__*/ $RyX6d$react.forwardRef((props, forwardedRef)=>{
    return /*#__PURE__*/ $RyX6d$react.createElement($RyX6d$radixuireactprimitive.Primitive.label, ($parcel$interopDefault($RyX6d$babelruntimehelpersextends))({}, props, {
        ref: forwardedRef,
        onMouseDown: (event)=>{
            var _props$onMouseDown;
            (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event); // prevent text selection when double clicking label
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    }));
});
/*#__PURE__*/ Object.assign($2583d9c3eccdd4e2$export$b04be29aa201d4f5, {
    displayName: $2583d9c3eccdd4e2$var$NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $2583d9c3eccdd4e2$export$be92b6f5f03c0fe9 = $2583d9c3eccdd4e2$export$b04be29aa201d4f5;




//# sourceMappingURL=index.js.map


/***/ })

};
;