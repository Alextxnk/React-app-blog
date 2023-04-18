exports.id = 4627;
exports.ids = [4627];
exports.modules = {

/***/ 82815:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 71125));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 89108));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26695))

/***/ }),

/***/ 77226:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 36359, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 57446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89357, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44815, 23))

/***/ }),

/***/ 14975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(45874);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-inter"}],"variableName":"fontSans"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_fontSans_ = __webpack_require__(19973);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_fontSans_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_fontSans_);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(68024);
// EXTERNAL MODULE: ./config/site.ts
var site = __webpack_require__(23222);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(65628);
// EXTERNAL MODULE: ./components/analytics.tsx
var analytics = __webpack_require__(78204);
;// CONCATENATED MODULE: ./components/tailwind-indicator.tsx

function TailwindIndicator() {
    if (true) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "block sm:hidden",
                children: "xs"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden",
                children: "sm"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden md:block lg:hidden xl:hidden 2xl:hidden",
                children: "md"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden lg:block xl:hidden 2xl:hidden",
                children: "lg"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden xl:block 2xl:hidden",
                children: "xl"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden 2xl:block",
                children: "2xl"
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ui/toaster.tsx
var toaster = __webpack_require__(34103);
// EXTERNAL MODULE: ./components/theme-provider.tsx
var theme_provider = __webpack_require__(36267);
;// CONCATENATED MODULE: ./app/layout.tsx
/* eslint-disable @next/next/no-head-element */ 








const metadata = {
    title: {
        default: site/* siteConfig.name */.J.name,
        template: `%s | ${site/* siteConfig.name */.J.name}`
    },
    description: site/* siteConfig.description */.J.description,
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Radix UI"
    ],
    authors: [
        {
            name: "Alextxnk",
            url: "https://alextxnk-blog.netlify.app/"
        }
    ],
    creator: "Alextxnk",
    themeColor: [
        {
            media: "(prefers-color-scheme: light)",
            color: "white"
        },
        {
            media: "(prefers-color-scheme: dark)",
            color: "black"
        }
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: site/* siteConfig.url */.J.url,
        title: site/* siteConfig.name */.J.name,
        description: site/* siteConfig.description */.J.description,
        siteName: site/* siteConfig.name */.J.name,
        images: [
            {
                url: (0,utils/* absoluteUrl */.G)("/og.jpg"),
                width: 1200,
                height: 630,
                alt: site/* siteConfig.name */.J.name
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: site/* siteConfig.name */.J.name,
        description: site/* siteConfig.description */.J.description,
        images: [
            `${site/* siteConfig.url */.J.url}/og.jpg`
        ],
        creator: "@alextxnk"
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png"
    },
    manifest: `${site/* siteConfig.url */.J.url}/site.webmanifest`
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("html", {
        lang: "ru",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("head", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                className: (0,utils.cn)("min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50", (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_fontSans_default()).variable),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(theme_provider.ThemeProvider, {
                        attribute: "class",
                        defaultTheme: "system",
                        enableSystem: true,
                        children: [
                            children,
                            /*#__PURE__*/ jsx_runtime.jsx(TailwindIndicator, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(analytics.Analytics, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(toaster.Toaster, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 78204:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ Analytics */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\student-dashboard\\components\\analytics.tsx");


/***/ }),

/***/ 36267:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ ThemeProvider */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\student-dashboard\\components\\theme-provider.tsx");


/***/ }),

/***/ 34103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ Toaster */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\student-dashboard\\components\\ui\\toaster.tsx");


/***/ }),

/***/ 23222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ siteConfig)
/* harmony export */ });
const siteConfig = {
    name: `Student's Dashboard`,
    description: `Student's Dashboard application built on Next.js 13.`,
    url: "https://alextxnk-blog.netlify.app/",
    ogImage: "https://alextxnk-blog.netlify.app/og.jpg",
    links: {
        telegram: "https://t.me/alextxnk",
        github: "https://github.com/Alextxnk/React-app-blog"
    }
};


/***/ }),

/***/ 65628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ absoluteUrl),
/* harmony export */   "cn": () => (/* binding */ cn),
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82214);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48120);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m6)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function absoluteUrl(path) {
    return `${"http://localhost:3000"}${path}`;
}


/***/ }),

/***/ 71125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Analytics": () => (/* binding */ Analytics)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61911);


function Analytics() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__/* .Analytics */ .c, {});
}


/***/ }),

/***/ 27613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79411);


const Icons = {
    logo: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Command */ .mYg,
    close: lucide_react__WEBPACK_IMPORTED_MODULE_1__.X,
    eye: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Eye */ .bAj,
    eyeOff: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .EyeOff */ ._jl,
    sun: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Sun */ .kOA,
    moon: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Moon */ .JFe,
    laptop: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Laptop */ .Izo,
    spinner: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Loader2 */ .zM5,
    chevronLeft: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .ChevronLeft */ .s$$,
    chevronRight: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .ChevronRight */ ._Qn,
    trash: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Trash */ .rFk,
    post: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .FileText */ .acj,
    page: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .File */ .$BE,
    media: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .Eep,
    student: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .GraduationCap */ .XHo,
    menu: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .AlignLeft */ .NiS,
    settings: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Settings */ .Zrf,
    billing: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .CreditCard */ .aBT,
    ellipsis: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .MoreVertical */ .hlC,
    add: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Plus */ .v37,
    warning: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .AlertTriangle */ .uyG,
    user: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .User */ .n5m,
    arrowRight: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .ArrowRight */ .olP,
    help: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .HelpCircle */ .j$F,
    pizza: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Pizza */ .k4s,
    gitHub: ({ ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fab",
            "data-icon": "github",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 496 512",
            ...props,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            })
        }),
    twitter: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Twitter */ .tLe,
    check: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .Check */ .JrY
};


/***/ }),

/***/ 89108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeProvider": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43530);



function ThemeProvider({ children , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f, {
        ...props,
        children: children
    });
}


/***/ }),

/***/ 24472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ buttonVariants),
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51956);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24995);




const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800", {
    variants: {
        variant: {
            default: "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
            destructive: "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
            outline: "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
            subtle: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
            ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
            link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent"
        },
        size: {
            default: "h-10 py-2 px-4",
            sm: "h-9 px-2 rounded-md",
            lg: "h-11 px-8 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , variant , size , ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 26695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Toaster": () => (/* binding */ Toaster)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./hooks/use-toast.ts
var use_toast = __webpack_require__(56452);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-toast@1.1.2_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-toast/dist/index.js
var dist = __webpack_require__(76561);
// EXTERNAL MODULE: ./node_modules/.pnpm/class-variance-authority@0.4.0_typescript@4.7.4/node_modules/class-variance-authority/dist/index.cjs.js
var index_cjs = __webpack_require__(51956);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.92.0_prop-types@15.8.1_react@18.2.0/node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(79411);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(24995);
;// CONCATENATED MODULE: ./components/ui/toast.tsx






const ToastProvider = dist.Provider;
const ToastViewport = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Viewport, {
        ref: ref,
        className: (0,utils.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]", className),
        ...props
    }));
ToastViewport.displayName = dist.Viewport.displayName;
const toastVariants = (0,index_cjs/* cva */.j)("data-[swipe=move]:transition-none grow-1 group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full mt-4 data-[state=closed]:slide-out-to-right-full dark:border-slate-700 last:mt-0 sm:last:mt-4", {
    variants: {
        variant: {
            default: "bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700",
            destructive: "group destructive bg-red-600 text-white border-red-600 dark:border-red-600"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ react_.forwardRef(({ className , variant , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Root, {
        ref: ref,
        className: (0,utils.cn)(toastVariants({
            variant
        }), className),
        ...props
    });
});
Toast.displayName = dist.Root.displayName;
const ToastAction = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Action, {
        ref: ref,
        className: (0,utils.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-red-100 group-[.destructive]:hover:border-slate-50 group-[.destructive]:hover:bg-red-100 group-[.destructive]:hover:text-red-600 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800", className),
        ...props
    }));
ToastAction.displayName = dist.Action.displayName;
const ToastClose = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Close, {
        ref: ref,
        className: (0,utils.cn)("absolute top-2 right-2 rounded-md p-1 text-slate-500 opacity-0 transition-opacity hover:text-slate-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:hover:text-slate-50", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react.X, {
            className: "h-4 w-4"
        })
    }));
ToastClose.displayName = dist.Close.displayName;
const ToastTitle = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Title, {
        ref: ref,
        className: (0,utils.cn)("text-sm font-semibold", className),
        ...props
    }));
ToastTitle.displayName = dist.Title.displayName;
const ToastDescription = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Description, {
        ref: ref,
        className: (0,utils.cn)("text-sm opacity-90", className),
        ...props
    }));
ToastDescription.displayName = dist.Description.displayName;


;// CONCATENATED MODULE: ./components/ui/toaster.tsx



function Toaster() {
    const { toasts  } = (0,use_toast/* useToast */.pm)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ToastProvider, {
        children: [
            toasts.map(function({ id , title , description , action , ...props }) {
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Toast, {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ jsx_runtime_.jsx(ToastTitle, {
                                    children: title
                                }),
                                description && /*#__PURE__*/ jsx_runtime_.jsx(ToastDescription, {
                                    children: description
                                })
                            ]
                        }),
                        action,
                        /*#__PURE__*/ jsx_runtime_.jsx(ToastClose, {})
                    ]
                }, id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ToastViewport, {})
        ]
    });
}


/***/ }),

/***/ 56452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Am": () => (/* binding */ toast),
/* harmony export */   "pm": () => (/* binding */ useToast)
/* harmony export */ });
/* unused harmony export reducer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Inspired by react-hot-toast library

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_VALUE;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            const { toastId  } = action;
            // ! Side effects ! - This could be extracted into a dismissToast() action,
            // but I'll keep it here for simplicity
            if (toastId) {
                addToRemoveQueue(toastId);
            } else {
                state.toasts.forEach((toast)=>{
                    addToRemoveQueue(toast.id);
                });
            }
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                        ...t,
                        open: false
                    } : t)
            };
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}



/***/ }),

/***/ 24995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cn": () => (/* binding */ cn),
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
/* unused harmony export absoluteUrl */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16547);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81592);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function absoluteUrl(path) {
    return `${"http://localhost:3000"}${path}`;
}


/***/ }),

/***/ 68024:
/***/ (() => {



/***/ })

};
;