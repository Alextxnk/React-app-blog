"use strict";
exports.id = 4690;
exports.ids = [4690];
exports.modules = {

/***/ 44690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ EmptyPlaceholder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45874);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1872);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6513);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96570);


// import { cn } from "@/lib/utils"


function EmptyPlaceholder({ className , children , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto flex max-w-[420px] flex-col items-center justify-center text-center",
            children: children
        })
    });
}
EmptyPlaceholder.Icon = function EmptyPlaceHolderIcon({ name , className , ...props }) {
    const Icon = _components_icons__WEBPACK_IMPORTED_MODULE_3__/* .Icons */ .P[name];
    if (!Icon) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-20 w-20 items-center justify-center rounded-full bg-slate-100",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("h-10 w-10", className),
            ...props
        })
    });
};
EmptyPlaceholder.Title = function EmptyPlaceholderTitle({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("mt-6 text-xl font-semibold", className),
        ...props
    });
};
EmptyPlaceholder.Description = function EmptyPlaceholderDescription({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("mt-3 mb-8 text-center text-sm font-normal leading-6 text-slate-700", className),
        ...props
    });
};


/***/ })

};
;