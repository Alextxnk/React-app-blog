exports.id = 975;
exports.ids = [975];
exports.modules = {

/***/ 60481:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 67681, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 82456))

/***/ }),

/***/ 41616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MarketingLayout)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(45874);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(96838);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./config/marketing.ts
const marketingConfig = {
    mainNav: [
        {
            title: "Блог",
            href: "/blog"
        },
        {
            title: "Пользователи",
            href: "/users"
        },
        {
            title: "Документация",
            href: "/docs"
        }
    ]
};

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(65628);
// EXTERNAL MODULE: ./components/main-nav.tsx
var main_nav = __webpack_require__(5092);
// EXTERNAL MODULE: ./components/site-footer.tsx
var site_footer = __webpack_require__(70533);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(58672);
;// CONCATENATED MODULE: ./app/(marketing)/layout.tsx







async function MarketingLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "container sticky top-0 z-40 bg-white dark:bg-slate-900 dark:text-slate-50",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex h-16 items-center justify-between border-b border-b-slate-200 py-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(main_nav.MainNav, {
                            items: marketingConfig.mainNav
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("nav", {
                            className: "flex items-center space-x-1",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/login",
                                className: (0,utils.cn)((0,ui_button/* buttonVariants */.d)({
                                    size: "sm"
                                }), "px-4"),
                                children: "Вход"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "flex-1",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(site_footer/* SiteFooter */.n, {})
        ]
    });
}


/***/ })

};
;