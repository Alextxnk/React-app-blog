exports.id = 5575;
exports.ids = [5575];
exports.modules = {

/***/ 18238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ Mdx)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(45874);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(1872);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js
var next_image = __webpack_require__(80507);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/.pnpm/next-contentlayer@0.2.9_esbuild@0.14.54_next@13.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next-contentlayer/dist/hooks/useMDXComponent.js
var useMDXComponent = __webpack_require__(80532);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(65628);
;// CONCATENATED MODULE: ./components/callout.tsx


function Callout({ children , icon , type ="default" , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)("my-6 flex items-start rounded-md border border-l-4 p-4", {
            "border-slate-900 bg-slate-50": type === "default",
            "border-red-900 bg-red-50": type === "danger",
            "border-yellow-900 bg-yellow-50": type === "warning"
        }),
        ...props,
        children: [
            icon && /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "mr-4 text-2xl",
                children: icon
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(96838);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/card.tsx



function Card({ href , className , children , disabled , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)("group relative rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg", disabled && "cursor-not-allowed opacity-60", className),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-col justify-between space-y-4",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "space-y-2 [&>p]:text-slate-600 [&>h4]:!mt-0 [&>h3]:!mt-0",
                    children: children
                })
            }),
            href && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: disabled ? "#" : href,
                className: "absolute inset-0",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "sr-only",
                    children: "View"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/mdx.tsx







const components = {
    h1: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h1", {
            className: (0,utils.cn)("mt-2 scroll-m-20 text-4xl font-bold tracking-tight", className),
            ...props
        }),
    h2: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h2", {
            className: (0,utils.cn)("mt-10 scroll-m-20 border-b border-b-slate-200 pb-1 text-3xl font-semibold tracking-tight first:mt-0", className),
            ...props
        }),
    h3: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h3", {
            className: (0,utils.cn)("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className),
            ...props
        }),
    h4: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h4", {
            className: (0,utils.cn)("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className),
            ...props
        }),
    h5: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h5", {
            className: (0,utils.cn)("mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className),
            ...props
        }),
    h6: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h6", {
            className: (0,utils.cn)("mt-8 scroll-m-20 text-base font-semibold tracking-tight", className),
            ...props
        }),
    a: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("a", {
            className: (0,utils.cn)("font-medium text-slate-900 underline underline-offset-4", className),
            ...props
        }),
    p: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("p", {
            className: (0,utils.cn)("leading-7 [&:not(:first-child)]:mt-6", className),
            ...props
        }),
    ul: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("ul", {
            className: (0,utils.cn)("my-6 ml-6 list-disc", className),
            ...props
        }),
    ol: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("ol", {
            className: (0,utils.cn)("my-6 ml-6 list-decimal", className),
            ...props
        }),
    li: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("li", {
            className: (0,utils.cn)("mt-2", className),
            ...props
        }),
    blockquote: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("blockquote", {
            className: (0,utils.cn)("mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 [&>*]:text-slate-600", className),
            ...props
        }),
    img: ({ className , alt , ...props })=>// eslint-disable-next-line @next/next/no-img-element
        /*#__PURE__*/ jsx_runtime.jsx("img", {
            className: (0,utils.cn)("rounded-md border border-slate-200", className),
            alt: alt,
            ...props
        }),
    hr: ({ ...props })=>/*#__PURE__*/ jsx_runtime.jsx("hr", {
            className: "my-4 border-slate-200 md:my-8",
            ...props
        }),
    table: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "my-6 w-full overflow-y-auto",
            children: /*#__PURE__*/ jsx_runtime.jsx("table", {
                className: (0,utils.cn)("w-full", className),
                ...props
            })
        }),
    tr: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("tr", {
            className: (0,utils.cn)("m-0 border-t border-slate-300 p-0 even:bg-slate-100", className),
            ...props
        }),
    th: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("th", {
            className: (0,utils.cn)("border border-slate-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", className),
            ...props
        }),
    td: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("td", {
            className: (0,utils.cn)("border border-slate-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className),
            ...props
        }),
    pre: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("pre", {
            className: (0,utils.cn)("mt-6 mb-4 overflow-x-auto rounded-lg bg-slate-900 py-4", className),
            ...props
        }),
    code: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("code", {
            className: (0,utils.cn)("relative rounded border bg-slate-300/25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-slate-600", className),
            ...props
        }),
    Image: (image_default()),
    Callout: Callout,
    Card: Card
};
function Mdx({ code  }) {
    const Component = (0,useMDXComponent/* useMDXComponent */.z)(code);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mdx",
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            components: components
        })
    });
}


/***/ }),

/***/ 60080:
/***/ (() => {



/***/ })

};
;