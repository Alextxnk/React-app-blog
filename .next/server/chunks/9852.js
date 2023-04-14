exports.id = 9852;
exports.ids = [9852];
exports.modules = {

/***/ 77153:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5125));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 45407));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 55433));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1020))

/***/ }),

/***/ 59493:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2054));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 67681, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 11606))

/***/ }),

/***/ 37634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DashboardLayout)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(45874);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js
var navigation = __webpack_require__(25226);
;// CONCATENATED MODULE: ./config/dashboard.ts
const dashboardConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs"
        },
        {
            title: "Support",
            href: "/support",
            disabled: true
        }
    ],
    sidebarNav: [
        {
            title: "Posts",
            href: "/dashboard",
            icon: "post"
        },
        {
            title: "Billing",
            href: "/dashboard/billing",
            icon: "billing"
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: "settings"
        }
    ]
};

// EXTERNAL MODULE: ./lib/session.ts
var session = __webpack_require__(11207);
// EXTERNAL MODULE: ./components/main-nav.tsx
var main_nav = __webpack_require__(5092);
// EXTERNAL MODULE: ./components/nav.tsx
var nav = __webpack_require__(37094);
// EXTERNAL MODULE: ./components/user-account-nav.tsx
var user_account_nav = __webpack_require__(81358);
;// CONCATENATED MODULE: ./app/(dashboard)/dashboard/layout.tsx







async function DashboardLayout({ children  }) {
    const user = await (0,session/* getCurrentUser */.t)();
    if (!user) {
        return (0,navigation.notFound)();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mx-auto flex flex-col space-y-6",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "container sticky top-0 z-40 bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex h-16 items-center justify-between border-b border-b-slate-200 py-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(main_nav.MainNav, {
                            items: dashboardConfig.mainNav
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(user_account_nav.UserAccountNav, {
                            user: {
                                name: user.name,
                                image: user.image,
                                email: user.email
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container grid gap-12 md:grid-cols-[200px_1fr]",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("aside", {
                        className: "hidden w-[200px] flex-col md:flex",
                        children: /*#__PURE__*/ jsx_runtime.jsx(nav.DashboardNav, {
                            items: dashboardConfig.sidebarNav
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("main", {
                        className: "flex w-full flex-1 flex-col overflow-hidden",
                        children: children
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 86211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashboardLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45874);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26484);
/* harmony import */ var _components_post_create_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36782);
/* harmony import */ var _components_post_create_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_post_create_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_post_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7622);
/* harmony import */ var _components_shell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65215);





function DashboardLoading() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_shell__WEBPACK_IMPORTED_MODULE_4__/* .DashboardShell */ .r, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__/* .DashboardHeader */ .x, {
                heading: "Posts",
                text: "Create and manage posts.",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_create_button__WEBPACK_IMPORTED_MODULE_2__.PostCreateButton, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "divide-y divide-neutral-200 rounded-md border border-slate-200",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_item__WEBPACK_IMPORTED_MODULE_3__/* .PostItem.Skeleton */ .Y.Skeleton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_item__WEBPACK_IMPORTED_MODULE_3__/* .PostItem.Skeleton */ .Y.Skeleton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_item__WEBPACK_IMPORTED_MODULE_3__/* .PostItem.Skeleton */ .Y.Skeleton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_item__WEBPACK_IMPORTED_MODULE_3__/* .PostItem.Skeleton */ .Y.Skeleton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_item__WEBPACK_IMPORTED_MODULE_3__/* .PostItem.Skeleton */ .Y.Skeleton, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 26484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ DashboardHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45874);

function DashboardHeader({ heading , text , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between px-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl font-bold tracking-wide text-slate-900",
                        children: heading
                    }),
                    text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-neutral-500",
                        children: text
                    })
                ]
            }),
            children
        ]
    });
}


/***/ }),

/***/ 37094:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ DashboardNav */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\taxonomy\\components\\nav.tsx");


/***/ }),

/***/ 36782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ PostCreateButton */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\taxonomy\\components\\post-create-button.tsx");


/***/ }),

/***/ 7622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ PostItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45874);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96838);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65628);
/* harmony import */ var _components_post_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10026);
/* harmony import */ var _components_post_operations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_post_operations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23379);





function PostItem({ post  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center justify-between p-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/editor/${post.id}`,
                        className: "font-semibold hover:underline",
                        children: post.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-slate-600",
                            children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatDate */ .p)(post.createdAt?.toDateString())
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_operations__WEBPACK_IMPORTED_MODULE_3__.PostOperations, {
                post: {
                    id: post.id,
                    title: post.title
                }
            })
        ]
    });
}
PostItem.Skeleton = function PostItemSkeleton() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__/* .Skeleton */ .O, {
                    className: "h-5 w-2/5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__/* .Skeleton */ .O, {
                    className: "h-4 w-4/5"
                })
            ]
        })
    });
};


/***/ }),

/***/ 10026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ PostOperations */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\taxonomy\\components\\post-operations.tsx");


/***/ }),

/***/ 65215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ DashboardShell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45874);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1872);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65628);



function DashboardShell({ children , className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("grid items-start gap-8", className),
        ...props,
        children: children
    });
}


/***/ }),

/***/ 81358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ UserAccountNav */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\taxonomy\\components\\user-account-nav.tsx");


/***/ }),

/***/ 55433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardNav": () => (/* binding */ DashboardNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81416);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98440);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24995);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27613);




// import cn from 'classnames';

function DashboardNav({ items  }) {
    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    if (!items?.length) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "grid items-start gap-2",
        children: items.map((item, index)=>{
            const Icon = _components_icons__WEBPACK_IMPORTED_MODULE_4__/* .Icons */ .P[item.icon || "arrowRight"];
            return item.href && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: item.disabled ? "/" : item.href,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100", path === item.href ? "bg-slate-200" : "transparent", item.disabled && "cursor-not-allowed opacity-80"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                            className: "mr-2 h-4 w-4"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: item.title
                        })
                    ]
                })
            }, index);
        })
    });
}


/***/ }),

/***/ 2054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCreateButton": () => (/* binding */ PostCreateButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98440);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56452);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24995);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27613);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24472);





// import cn from 'classnames';


function PostCreateButton({ className , ...props }) {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    async function onClick() {
        setIsLoading(true);
        const response = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Untitled Post"
            })
        });
        setIsLoading(false);
        if (!response?.ok) {
            if (response.status === 402) {
                return (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .Am)({
                    title: "Limit of 3 posts reached.",
                    description: "Please upgrade to the PRO plan.",
                    variant: "destructive"
                });
            }
            return (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .Am)({
                title: "Something went wrong.",
                description: "Your post was not created. Please try again.",
                variant: "destructive"
            });
        }
        const post = await response.json();
        // This forces a cache invalidation.
        router.refresh();
        router.push(`/editor/${post.id}`);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: onClick,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .buttonVariants */ .dc)(), {
            "cursor-not-allowed opacity-60": isLoading
        }, className),
        disabled: isLoading,
        ...props,
        children: [
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__/* .Icons.spinner */ .P.spinner, {
                className: "mr-2 h-4 w-4 animate-spin"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__/* .Icons.add */ .P.add, {
                className: "mr-2 h-4 w-4"
            }),
            "New post"
        ]
    });
}


/***/ }),

/***/ 11606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PostOperations": () => (/* binding */ PostOperations)
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
// EXTERNAL MODULE: ./hooks/use-toast.ts
var use_toast = __webpack_require__(56452);
// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(27613);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-alert-dialog@1.0.2_@types+react@18.0.15_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-alert-dialog/dist/index.js
var dist = __webpack_require__(15790);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(24995);
;// CONCATENATED MODULE: ./components/ui/alert-dialog.tsx




// import cn from 'classnames';
const AlertDialog = dist.Root;
const AlertDialogTrigger = dist.Trigger;
const AlertDialogPortal = ({ className , children , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Portal, {
        className: (0,utils.cn)(className),
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center",
            children: children
        })
    });
AlertDialogPortal.displayName = dist.Portal.displayName;
const AlertDialogOverlay = /*#__PURE__*/ react_.forwardRef(({ className , children , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Overlay, {
        className: (0,utils.cn)("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in", className),
        ...props,
        ref: ref
    }));
AlertDialogOverlay.displayName = dist.Overlay.displayName;
const AlertDialogContent = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AlertDialogOverlay, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(dist.Content, {
                ref: ref,
                className: (0,utils.cn)("fixed z-50 grid w-full max-w-lg scale-100 gap-4 bg-white p-6 opacity-100 animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full", "dark:bg-slate-900", className),
                ...props
            })
        ]
    }));
AlertDialogContent.displayName = dist.Content.displayName;
const AlertDialogHeader = ({ className , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Title, {
        ref: ref,
        className: (0,utils.cn)("text-lg font-semibold text-slate-900", "dark:text-slate-50", className),
        ...props
    }));
AlertDialogTitle.displayName = dist.Title.displayName;
const AlertDialogDescription = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Description, {
        ref: ref,
        className: (0,utils.cn)("text-sm text-slate-500", "dark:text-slate-400", className),
        ...props
    }));
AlertDialogDescription.displayName = dist.Description.displayName;
const AlertDialogAction = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Action, {
        ref: ref,
        className: (0,utils.cn)("inline-flex h-10 items-center justify-center rounded-md bg-slate-900 py-2 px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900", className),
        ...props
    }));
AlertDialogAction.displayName = dist.Action.displayName;
const AlertDialogCancel = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Cancel, {
        ref: ref,
        className: (0,utils.cn)("mt-2 inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-transparent py-2 px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 sm:mt-0", className),
        ...props
    }));
AlertDialogCancel.displayName = dist.Cancel.displayName;


// EXTERNAL MODULE: ./components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(92032);
;// CONCATENATED MODULE: ./components/post-operations.tsx








async function deletePost(postId) {
    const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE"
    });
    if (!response?.ok) {
        (0,use_toast/* toast */.Am)({
            title: "Something went wrong.",
            description: "Your post was not deleted. Please try again.",
            variant: "destructive"
        });
    }
    return true;
}
function PostOperations({ post  }) {
    const router = (0,navigation.useRouter)();
    const [showDeleteAlert, setShowDeleteAlert] = react_.useState(false);
    const [isDeleteLoading, setIsDeleteLoading] = react_.useState(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenu */.h_, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenuTrigger */.$F, {
                        className: "flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-slate-50",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.ellipsis */.P.ellipsis, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Open"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenuContent */.AW, {
                        align: "end",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuItem */.Xi, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/editor/${post.id}`,
                                    className: "flex w-full",
                                    children: "Edit"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuSeparator */.VD, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuItem */.Xi, {
                                className: "flex cursor-pointer items-center text-red-600 focus:bg-red-50",
                                onSelect: ()=>setShowDeleteAlert(true),
                                children: "Delete"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AlertDialog, {
                open: showDeleteAlert,
                onOpenChange: setShowDeleteAlert,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AlertDialogContent, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AlertDialogHeader, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(AlertDialogTitle, {
                                    children: "Are you sure you want to delete this post?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(AlertDialogDescription, {
                                    children: "This action cannot be undone."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AlertDialogFooter, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(AlertDialogCancel, {
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AlertDialogAction, {
                                    onClick: async (event)=>{
                                        event.preventDefault();
                                        setIsDeleteLoading(true);
                                        const deleted = await deletePost(post.id);
                                        if (deleted) {
                                            setIsDeleteLoading(false);
                                            setShowDeleteAlert(false);
                                            router.refresh();
                                        }
                                    },
                                    className: "bg-red-600 focus:ring-red-600",
                                    children: [
                                        isDeleteLoading ? /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.spinner */.P.spinner, {
                                            className: "mr-2 h-4 w-4 animate-spin"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.trash */.P.trash, {
                                            className: "mr-2 h-4 w-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Delete"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
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





// import cn from 'classnames';
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



/***/ }),

/***/ 1020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UserAccountNav": () => (/* binding */ UserAccountNav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(81416);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/.pnpm/next-auth@4.20.1_next@13.2.3_nodemailer@6.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/react/index.js
var react = __webpack_require__(84217);
// EXTERNAL MODULE: ./components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(92032);
// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(27613);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-avatar@1.0.1_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-avatar/dist/index.js
var dist = __webpack_require__(57096);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(24995);
;// CONCATENATED MODULE: ./components/ui/avatar.tsx




// import cn from 'classnames';
const Avatar = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Root, {
        ref: ref,
        className: (0,utils.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }));
Avatar.displayName = dist.Root.displayName;
const AvatarImage = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Image, {
        ref: ref,
        className: (0,utils.cn)("aspect-square h-full w-full", className),
        ...props
    }));
AvatarImage.displayName = dist.Image.displayName;
const AvatarFallback = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Fallback, {
        ref: ref,
        className: (0,utils.cn)("flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700", className),
        ...props
    }));
AvatarFallback.displayName = dist.Fallback.displayName;


;// CONCATENATED MODULE: ./components/user-avatar.tsx



function UserAvatar({ user , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
        ...props,
        children: user.image ? /*#__PURE__*/ jsx_runtime_.jsx(AvatarImage, {
            alt: "Picture",
            src: user.image
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AvatarFallback, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "sr-only",
                    children: user.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.user */.P.user, {
                    className: "h-4 w-4"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/user-account-nav.tsx





function UserAccountNav({ user  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenu */.h_, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuTrigger */.$F, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(UserAvatar, {
                    user: {
                        name: user.name || null,
                        image: user.image || null
                    },
                    className: "h-8 w-8"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenuContent */.AW, {
                align: "end",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-start gap-2 p-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col space-y-1 leading-none",
                            children: [
                                user.name && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-medium",
                                    children: user.name
                                }),
                                user.email && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "w-[200px] truncate text-sm text-slate-600",
                                    children: user.email
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuSeparator */.VD, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuItem */.Xi, {
                        asChild: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard",
                            children: "Dashboard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuItem */.Xi, {
                        asChild: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard/billing",
                            children: "Billing"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuItem */.Xi, {
                        asChild: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard/settings",
                            children: "Settings"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuSeparator */.VD, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuItem */.Xi, {
                        className: "cursor-pointer",
                        onSelect: (event)=>{
                            event.preventDefault();
                            (0,react.signOut)({
                                callbackUrl: `${window.location.origin}/login`
                            });
                        },
                        children: "Sign out"
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;