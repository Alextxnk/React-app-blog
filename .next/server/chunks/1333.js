"use strict";
exports.id = 1333;
exports.ids = [1333];
exports.modules = {

/***/ 23379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45874);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65628);


function Skeleton({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("h-5 w-2/5 animate-pulse rounded-lg bg-slate-100", className),
        ...props
    });
}


/***/ }),

/***/ 94777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80288);
/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45128);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92487);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13155);




// TODO: Move env vars to env a la t3.
// const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN || '');
const authOptions = {
    // huh any! I know.
    // This is a temporary fix for prisma client.
    // @see https://github.com/prisma/prisma/issues/16117
    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__/* .PrismaAdapter */ .N)(_lib_db__WEBPACK_IMPORTED_MODULE_3__.db),
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login"
    },
    providers: [
        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
        }),
        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            type: "credentials",
            credentials: {
                email: {
                    label: "Электронная почта",
                    type: "email",
                    placeholder: "name@example.com"
                },
                password: {
                    label: "Пароль",
                    type: "password"
                }
            },
            async authorize (credentials, req) {
                const { email , password  } = credentials;
                // find user from db
                if (email !== "alextxnk@gmail.com" || password !== "12345678") {
                    throw new Error("Invalid credentials");
                }
                return {
                    id: "1",
                    name: "Alextxnk",
                    email: "alextxnk@gmail.com"
                };
            }
        })
    ],
    callbacks: {
        async session ({ token , session  }) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
            }
            return session;
        },
        async jwt ({ token , user  }) {
            const dbUser = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.db.user.findFirst({
                where: {
                    email: token.email
                }
            });
            if (!dbUser) {
                if (user) {
                    token.id = user?.id;
                }
                return token;
            }
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image
            };
        }
    }
};


/***/ }),

/***/ 13155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;
if (true) {
    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
const db = prisma;


/***/ }),

/***/ 11207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ getCurrentUser)
/* harmony export */ });
/* unused harmony export getSession */
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71513);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94777);


async function getSession() {
    return await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__/* .getServerSession */ .Z1)(_lib_auth__WEBPACK_IMPORTED_MODULE_1__/* .authOptions */ .L);
}
async function getCurrentUser() {
    const session = await getSession();
    return session?.user;
}


/***/ })

};
;