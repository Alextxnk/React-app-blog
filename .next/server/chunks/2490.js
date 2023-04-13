"use strict";
exports.id = 2490;
exports.ids = [2490];
exports.modules = {

/***/ 52490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ authOptions)
});

// EXTERNAL MODULE: external "@next-auth/prisma-adapter"
var prisma_adapter_ = __webpack_require__(32104);
// EXTERNAL MODULE: external "next-auth/providers/email"
var email_ = __webpack_require__(9673);
var email_default = /*#__PURE__*/__webpack_require__.n(email_);
// EXTERNAL MODULE: external "next-auth/providers/github"
var github_ = __webpack_require__(47459);
var github_default = /*#__PURE__*/__webpack_require__.n(github_);
// EXTERNAL MODULE: external "postmark"
var external_postmark_ = __webpack_require__(49834);
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

// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(71543);
;// CONCATENATED MODULE: ./lib/auth.ts






// TODO: Move env vars to env a la t3.
const postmarkClient = new external_postmark_.Client(process.env.POSTMARK_API_TOKEN || "");
const authOptions = {
    // huh any! I know.
    // This is a temporary fix for prisma client.
    // @see https://github.com/prisma/prisma/issues/16117
    adapter: (0,prisma_adapter_.PrismaAdapter)(db.db),
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login"
    },
    providers: [
        github_default()({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
        }),
        email_default()({
            from: process.env.SMTP_FROM,
            sendVerificationRequest: async ({ identifier , url , provider  })=>{
                const user = await db.db.user.findUnique({
                    where: {
                        email: identifier
                    },
                    select: {
                        emailVerified: true
                    }
                });
                const templateId = user?.emailVerified ? process.env.POSTMARK_SIGN_IN_TEMPLATE : process.env.POSTMARK_ACTIVATION_TEMPLATE;
                if (!templateId) {
                    throw new Error("Missing template id");
                }
                const result = await postmarkClient.sendEmailWithTemplate({
                    TemplateId: parseInt(templateId),
                    To: identifier,
                    From: provider.from,
                    TemplateModel: {
                        action_url: url,
                        product_name: siteConfig.name
                    },
                    Headers: [
                        {
                            // Set this to prevent Gmail from threading emails.
                            // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
                            Name: "X-Entity-Ref-ID",
                            Value: new Date().getTime() + ""
                        }
                    ]
                });
                if (result.ErrorCode) {
                    throw new Error(result.Message);
                }
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
            const dbUser = await db.db.user.findFirst({
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