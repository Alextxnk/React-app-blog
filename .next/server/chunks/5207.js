"use strict";
exports.id = 5207;
exports.ids = [5207];
exports.modules = {

/***/ 57860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45874);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6513);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23379);
// import { cn } from "@/lib/utils"



function Card({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("overflow-hidden rounded-lg border", className),
        ...props
    });
}
Card.Header = function CardHeader({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("grid gap-1 p-6", className),
        ...props
    });
};
Card.Content = function CardContent({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("px-6 pb-4", className),
        ...props
    });
};
Card.Footer = function CardFooter({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-t bg-slate-50 px-6 py-4", className),
        ...props
    });
};
Card.Title = function CardTitle({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-lg font-medium", className),
        ...props
    });
};
Card.Description = function CardDescription({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-sm text-gray-600", className),
        ...props
    });
};
Card.Skeleton = function CardSeleton() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card.Header, {
                className: "gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* .Skeleton */ .O, {
                        className: "h-5 w-1/5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* .Skeleton */ .O, {
                        className: "h-4 w-4/5"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card.Content, {
                className: "h-10"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card.Footer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* .Skeleton */ .O, {
                    className: "h-8 w-[120px] bg-slate-200"
                })
            })
        ]
    });
};


/***/ }),

/***/ 34056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Card)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(27790);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./components/ui/skeleton.tsx
// import { cn } from "@/lib/utils"


function Skeleton({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classnames_default()("h-5 w-2/5 animate-pulse rounded-lg bg-slate-100", className),
        ...props
    });
}

;// CONCATENATED MODULE: ./components/ui/card.tsx
// import { cn } from "@/lib/utils"



function Card({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classnames_default()("overflow-hidden rounded-lg border", className),
        ...props
    });
}
Card.Header = function CardHeader({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classnames_default()("grid gap-1 p-6", className),
        ...props
    });
};
Card.Content = function CardContent({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classnames_default()("px-6 pb-4", className),
        ...props
    });
};
Card.Footer = function CardFooter({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classnames_default()("border-t bg-slate-50 px-6 py-4", className),
        ...props
    });
};
Card.Title = function CardTitle({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h4", {
        className: classnames_default()("text-lg font-medium", className),
        ...props
    });
};
Card.Description = function CardDescription({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: classnames_default()("text-sm text-gray-600", className),
        ...props
    });
};
Card.Skeleton = function CardSeleton() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card.Header, {
                className: "gap-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Skeleton, {
                        className: "h-5 w-1/5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Skeleton, {
                        className: "h-4 w-4/5"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card.Content, {
                className: "h-10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card.Footer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Skeleton, {
                    className: "h-8 w-[120px] bg-slate-200"
                })
            })
        ]
    });
};


/***/ })

};
;