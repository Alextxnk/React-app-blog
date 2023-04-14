exports.id = 5004;
exports.ids = [5004];
exports.modules = {

/***/ 5092:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ MainNav */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\taxonomy\\components\\main-nav.tsx");


/***/ }),

/***/ 5125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MainNav": () => (/* binding */ MainNav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(81416);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js
var navigation = __webpack_require__(98440);
;// CONCATENATED MODULE: ./config/site.ts
const siteConfig = {
    name: "Taxonomy",
    description: "An open source application built using the new router, server components and everything new in Next.js 13.",
    url: "https://tx.shadcn.com",
    ogImage: "https://tx.shadcn.com/og.jpg",
    links: {
        twitter: "https://twitter.com/shadcn",
        github: "https://github.com/Alextxnk"
    }
};

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(24995);
// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(27613);
;// CONCATENATED MODULE: ./hooks/use-lock-body.ts

// @see https://usehooks.com/useLockBodyScroll.
function useLockBody() {
    react_.useLayoutEffect(()=>{
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return ()=>document.body.style.overflow = originalStyle;
    }, []);
}

;// CONCATENATED MODULE: ./components/mobile-nav.tsx






// import cn from 'classnames';

function MobileNav({ items , children  }) {
    useLockBody();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.logo */.P.logo, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-bold",
                            children: siteConfig.name
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "grid grid-flow-row auto-rows-max text-sm",
                    children: items.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: item.disabled ? "#" : item.href,
                            className: (0,utils.cn)("flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline", item.disabled && "cursor-not-allowed opacity-60"),
                            children: item.title
                        }, index))
                }),
                children
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/main-nav.tsx






// import cn from 'classnames';


function MainNav({ items , children  }) {
    const segment = (0,navigation.useSelectedLayoutSegment)();
    const [showMobileMenu, setShowMobileMenu] = react_.useState(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex gap-6 md:gap-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: "hidden items-center space-x-2 md:flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.logo */.P.logo, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "hidden font-bold sm:inline-block",
                        children: siteConfig.name
                    })
                ]
            }),
            items?.length ? /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "hidden gap-6 md:flex",
                children: items?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: item.disabled ? "#" : item.href,
                        className: (0,utils.cn)("flex items-center text-lg font-semibold text-slate-600 sm:text-sm", item.href.startsWith(`/${segment}`) && "text-slate-900", item.disabled && "cursor-not-allowed opacity-80"),
                        children: item.title
                    }, index))
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "flex items-center space-x-2 md:hidden",
                onClick: ()=>setShowMobileMenu(!showMobileMenu),
                children: [
                    showMobileMenu ? /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.close */.P.close, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.logo */.P.logo, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-bold",
                        children: "Menu"
                    })
                ]
            }),
            showMobileMenu && items && /*#__PURE__*/ jsx_runtime_.jsx(MobileNav, {
                items: items,
                children: children
            })
        ]
    });
}


/***/ })

};
;