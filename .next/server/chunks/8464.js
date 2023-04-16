exports.id = 8464;
exports.ids = [8464];
exports.modules = {

/***/ 5092:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ MainNav */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\student-dashboard\\components\\main-nav.tsx");


/***/ }),

/***/ 82456:
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
    name: `Student's Dashboard`,
    description: `Student's Dashboard application built on Next.js 13.`,
    url: "https://alextxnk-blog.netlify.app/",
    ogImage: "https://tx.shadcn.com/og.jpg",
    links: {
        telegram: "https://t.me/alextxnk",
        github: "https://github.com/Alextxnk/React-app-blog"
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

// EXTERNAL MODULE: ./node_modules/.pnpm/next-themes@0.2.1_next@13.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next-themes/dist/index.js
var dist = __webpack_require__(43530);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(24472);
// EXTERNAL MODULE: ./components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(92032);
;// CONCATENATED MODULE: ./components/theme-toggle.tsx






function ThemeToggle({ isMobile  }) {
    const { setTheme  } = (0,dist/* useTheme */.F)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenu */.h_, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuTrigger */.$F, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                    variant: "ghost",
                    size: "sm",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.sun */.P.sun, {
                            className: "rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.moon */.P.moon, {
                            className: "absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenuContent */.AW, {
                align: "end",
                forceMount: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenuItem */.Xi, {
                        onClick: ()=>setTheme("light"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.sun */.P.sun, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Светлая"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenuItem */.Xi, {
                        onClick: ()=>setTheme("dark"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.moon */.P.moon, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Темная"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenuItem */.Xi, {
                        onClick: ()=>setTheme("system"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.laptop */.P.laptop, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Системная"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/mobile-nav.tsx








function MobileNav({ items , children  }) {
    useLockBody();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-lg animate-in slide-in-from-bottom-80 md:hidden"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-lg dark:bg-slate-900 dark:text-slate-50",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.student */.P.student, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-bold",
                            children: siteConfig.name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "grid grid-flow-row auto-rows-max text-sm",
                    children: [
                        items.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: item.disabled ? "#" : item.href,
                                className: (0,utils.cn)("flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline", item.disabled && "cursor-not-allowed opacity-60"),
                                children: item.title
                            }, index)),
                        /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggle, {
                            isMobile: true
                        })
                    ]
                }),
                children
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/main-nav.tsx









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
                    /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.student */.P.student, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "hidden font-bold sm:inline-block",
                        children: siteConfig.name
                    })
                ]
            }),
            items?.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "hidden gap-6 md:flex",
                children: [
                    items?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: item.disabled ? "#" : item.href,
                            className: (0,utils.cn)("flex items-center text-lg font-semibold text-slate-600 sm:text-sm", item.href.startsWith(`/${segment}`) && "text-slate-900", item.disabled && "cursor-not-allowed opacity-80"),
                            children: item.title
                        }, index)),
                    /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggle, {
                        isMobile: false
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "flex items-center space-x-2 md:hidden",
                onClick: ()=>setShowMobileMenu(!showMobileMenu),
                children: [
                    showMobileMenu ? /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.close */.P.close, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.menu */.P.menu, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-bold",
                        children: "Меню"
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


/***/ }),

/***/ 92032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$F": () => (/* binding */ DropdownMenuTrigger),
/* harmony export */   "AW": () => (/* binding */ DropdownMenuContent),
/* harmony export */   "VD": () => (/* binding */ DropdownMenuSeparator),
/* harmony export */   "Xi": () => (/* binding */ DropdownMenuItem),
/* harmony export */   "h_": () => (/* binding */ DropdownMenu)
/* harmony export */ });
/* unused harmony exports DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81294);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79411);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24995);





const DropdownMenu = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Root;
const DropdownMenuTrigger = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Trigger;
const DropdownMenuGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Group;
const DropdownMenuPortal = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Portal;
const DropdownMenuSub = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Sub;
const DropdownMenuRadioGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.RadioGroup;
const DropdownMenuSubTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , inset , children , ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.SubTrigger, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-700 dark:data-[state=open]:bg-slate-700", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .ChevronRight */ ._Qn, {
                className: "ml-auto h-4 w-4"
            })
        ]
    }));
DropdownMenuSubTrigger.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.SubTrigger.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.SubContent, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in slide-in-from-left-1 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400", className),
        ...props
    }));
DropdownMenuSubContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.SubContent.displayName;
const DropdownMenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , sideOffset =4 , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Portal, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Content, {
            ref: ref,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400", className),
            ...props
        })
    }));
DropdownMenuContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Content.displayName;
const DropdownMenuItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , inset , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Item, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700", inset && "pl-8", className),
        ...props
    }));
DropdownMenuItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Item.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , children , checked , ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.CheckboxItem, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.ItemIndicator, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Check */ .JrY, {
                        className: "h-4 w-4"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuCheckboxItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.CheckboxItem.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , children , ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.RadioItem, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.ItemIndicator, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Circle */ .Cdc, {
                        className: "h-2 w-2 fill-current"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuRadioItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.RadioItem.displayName;
const DropdownMenuLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , inset , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Label, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-300", inset && "pl-8", className),
        ...props
    }));
DropdownMenuLabel.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Label.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Separator, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700", className),
        ...props
    }));
DropdownMenuSeparator.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Separator.displayName;
const DropdownMenuShortcut = ({ className , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("ml-auto text-xs tracking-widest text-slate-500", className),
        ...props
    });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";



/***/ })

};
;