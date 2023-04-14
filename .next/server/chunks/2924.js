exports.id = 2924;
exports.ids = [2924];
exports.modules = {

/***/ 13139:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 67681, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5125));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 79693));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13204))

/***/ }),

/***/ 6754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DocsLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45874);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96838);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85022);
/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23222);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96570);
/* harmony import */ var _components_main_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5092);
/* harmony import */ var _components_main_nav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_main_nav__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82028);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_sidebar_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93290);
/* harmony import */ var _components_sidebar_nav__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_sidebar_nav__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_site_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70533);









function DocsLayout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: "sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_main_nav__WEBPACK_IMPORTED_MODULE_5__.MainNav, {
                            items: _config_docs__WEBPACK_IMPORTED_MODULE_2__/* .docsConfig.mainNav */ .A.mainNav,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebar_nav__WEBPACK_IMPORTED_MODULE_7__.DocsSidebarNav, {
                                items: _config_docs__WEBPACK_IMPORTED_MODULE_2__/* .docsConfig.sidebarNav */ .A.sidebarNav
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-1 items-center space-x-4 sm:justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-1 sm:grow-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search__WEBPACK_IMPORTED_MODULE_6__.DocsSearch, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                    className: "flex space-x-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: _config_site__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.links.github */ .J.links.github,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .Icons.gitHub */ .P.gitHub, {
                                                className: "h-7 w-7"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: "GitHub"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container flex-1",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_site_footer__WEBPACK_IMPORTED_MODULE_8__/* .SiteFooter */ .n, {})
        ]
    });
}


/***/ }),

/***/ 37674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ DocsPageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45874);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6513);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
// import { cn } from "@/lib/utils"


function DocsPageHeader({ heading , text , className , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("space-y-4", className),
                ...props,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "inline-block text-4xl font-black tracking-tight text-slate-900 lg:text-5xl",
                        children: heading
                    }),
                    text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xl text-slate-600",
                        children: text
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: "my-4 border-slate-200"
            })
        ]
    });
}


/***/ }),

/***/ 82028:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ DocsSearch */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\taxonomy\\components\\search.tsx");


/***/ }),

/***/ 93290:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ DocsSidebarNav,DocsSidebarNavItems */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\taxonomy\\components\\sidebar-nav.tsx");


/***/ }),

/***/ 85022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ docsConfig)
/* harmony export */ });
const docsConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs"
        },
        {
            title: "Guides",
            href: "/guides"
        }
    ],
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/docs"
                }
            ]
        },
        {
            title: "Documentation",
            items: [
                {
                    title: "Introduction",
                    href: "/docs/documentation"
                },
                {
                    title: "Contentlayer",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Components",
                    href: "/docs/documentation/components"
                },
                {
                    title: "Code Blocks",
                    href: "/docs/documentation/code-blocks"
                },
                {
                    title: "Style Guide",
                    href: "/docs/documentation/style-guide"
                },
                {
                    title: "Search",
                    href: "/docs/in-progress",
                    disabled: true
                }
            ]
        },
        {
            title: "Blog",
            items: [
                {
                    title: "Introduction",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Build your own",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Writing Posts",
                    href: "/docs/in-progress",
                    disabled: true
                }
            ]
        },
        {
            title: "Dashboard",
            items: [
                {
                    title: "Introduction",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Layouts",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Server Components",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Authentication",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Database with Prisma",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "API Routes",
                    href: "/docs/in-progress",
                    disabled: true
                }
            ]
        },
        {
            title: "Marketing Site",
            items: [
                {
                    title: "Introduction",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "File Structure",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Tailwind CSS",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Typography",
                    href: "/docs/in-progress",
                    disabled: true
                }
            ]
        }
    ]
};


/***/ }),

/***/ 79693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsSearch": () => (/* binding */ DocsSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56452);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27790);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);



// import { cn } from "@/lib/utils"

function DocsSearch({ className , ...props }) {
    function onSubmit(event) {
        event.preventDefault();
        return (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am)({
            title: "Not implemented",
            description: "We're still working on the search."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: onSubmit,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("relative w-full", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "search",
                placeholder: "Search documentation...",
                className: "block h-8 w-full appearance-none rounded-md border border-slate-200 bg-slate-100 py-2 px-3 text-sm placeholder:text-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1 sm:w-64 sm:pr-12"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("kbd", {
                className: "pointer-events-none absolute top-1.5 right-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-white px-1.5 font-mono text-[10px] font-medium text-slate-600 opacity-100 sm:flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-xs",
                        children: "⌘"
                    }),
                    "K"
                ]
            })
        ]
    });
}


/***/ }),

/***/ 13204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsSidebarNav": () => (/* binding */ DocsSidebarNav),
/* harmony export */   "DocsSidebarNavItems": () => (/* binding */ DocsSidebarNavItems)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81416);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98440);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27790);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);



// import { cn } from "@/lib/utils"

function DocsSidebarNav({ items  }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return items.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full",
        children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("pb-8"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "mb-1 rounded-md px-2 py-1 text-sm font-medium",
                        children: item.title
                    }),
                    item.items ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DocsSidebarNavItems, {
                        items: item.items,
                        pathname: pathname
                    }) : null
                ]
            }, index))
    }) : null;
}
function DocsSidebarNavItems({ items , pathname  }) {
    return items?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-flow-row auto-rows-max text-sm",
        children: items.map((item, index)=>item.href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: item.disabled ? "#" : item.href,
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("flex w-full items-center rounded-md p-2 hover:underline", item.disabled && "cursor-not-allowed opacity-60", {
                    "bg-slate-100": pathname === item.href
                }),
                target: item.external ? "_blank" : "",
                rel: item.external ? "noreferrer" : "",
                children: item.title
            }, index) : null)
    }) : null;
}


/***/ })

};
;