"use strict";
exports.id = 1682;
exports.ids = [1682];
exports.modules = {

/***/ 1682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32104);
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47459);
/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71543);




// TODO: Move env vars to env a la t3.
// const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN || '');
const authOptions = {
    // huh any! I know.
    // This is a temporary fix for prisma client.
    // @see https://github.com/prisma/prisma/issues/16117
    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_3__.db),
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login"
    },
    providers: [
        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
        }),
        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({
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

/***/ 71543:
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


/***/ })

};
;