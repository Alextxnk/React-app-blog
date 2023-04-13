exports.id = 4298;
exports.ids = [4298];
exports.modules = {

/***/ 18560:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 67681, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 97797))

/***/ }),

/***/ 96815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45874);

function AuthLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-screen",
        children: children
    });
}


/***/ }),

/***/ 82899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ UserAuthForm */ const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\taxonomy\\components\\user-auth-form.tsx");


/***/ }),

/***/ 97797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UserAuthForm": () => (/* binding */ UserAuthForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js
var navigation = __webpack_require__(98440);
// EXTERNAL MODULE: ./hooks/use-toast.ts
var use_toast = __webpack_require__(56452);
// EXTERNAL MODULE: ./node_modules/.pnpm/@hookform+resolvers@2.9.10_react-hook-form@7.39.5/node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(35032);
// EXTERNAL MODULE: ./node_modules/.pnpm/next-auth@4.20.1_next@13.2.3_nodemailer@6.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/react/index.js
var react = __webpack_require__(84217);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.39.5_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(29345);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(27790);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/zod@3.19.1/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(77616);
;// CONCATENATED MODULE: ./lib/validations/auth.ts

const userAuthSchema = lib/* object */.Ry({
    email: lib/* string */.Z_().email()
});

// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(27613);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(24472);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(28402);
// EXTERNAL MODULE: ./components/ui/label.tsx
var label = __webpack_require__(35064);
;// CONCATENATED MODULE: ./components/user-auth-form.tsx







// import { cn } from "@/lib/utils"






function UserAuthForm({ className , ...props }) {
    const { register , handleSubmit , formState: { errors  }  } = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod/* zodResolver */.F)(userAuthSchema)
    });
    const [isLoading, setIsLoading] = react_.useState(false);
    const [isGitHubLoading, setIsGitHubLoading] = react_.useState(false);
    const searchParams = (0,navigation.useSearchParams)();
    async function onSubmit(data) {
        setIsLoading(true);
        const signInResult = await (0,react.signIn)("email", {
            email: data.email.toLowerCase(),
            redirect: false,
            callbackUrl: searchParams?.get("from") || "/dashboard"
        });
        setIsLoading(false);
        if (!signInResult?.ok) {
            return (0,use_toast/* toast */.Am)({
                title: "Something went wrong.",
                description: "Your sign in request failed. Please try again.",
                variant: "destructive"
            });
        }
        return (0,use_toast/* toast */.Am)({
            title: "Check your email",
            description: "We sent you a login link. Be sure to check your spam too."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classnames_default()("grid gap-6", className),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: handleSubmit(onSubmit),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid gap-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(label/* Label */._, {
                                    className: "sr-only",
                                    htmlFor: "email",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                    id: "email",
                                    placeholder: "name@example.com",
                                    type: "email",
                                    autoCapitalize: "none",
                                    autoComplete: "email",
                                    autoCorrect: "off",
                                    disabled: isLoading || isGitHubLoading,
                                    ...register("email")
                                }),
                                errors?.email && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "px-1 text-xs text-red-600",
                                    children: errors.email.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: classnames_default()((0,ui_button/* buttonVariants */.d)()),
                            disabled: isLoading,
                            children: [
                                isLoading && /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.spinner */.P.spinner, {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }),
                                "Sign In with Email"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute inset-0 flex items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "w-full border-t border-slate-300"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative flex justify-center text-xs uppercase",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "bg-white px-2 text-slate-600",
                            children: "Or continue with"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                className: classnames_default()((0,ui_button/* buttonVariants */.d)({
                    variant: "outline"
                })),
                onClick: ()=>{
                    setIsGitHubLoading(true);
                    (0,react.signIn)("github");
                },
                disabled: isLoading || isGitHubLoading,
                children: [
                    isGitHubLoading ? /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.spinner */.P.spinner, {
                        className: "mr-2 h-4 w-4 animate-spin"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.gitHub */.P.gitHub, {
                        className: "mr-2 h-4 w-4"
                    }),
                    " ",
                    "Github"
                ]
            })
        ]
    });
}


/***/ })

};
;