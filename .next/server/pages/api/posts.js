"use strict";
(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 32104:
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 62113:
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ 47449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 47459:
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ 38316:
/***/ ((module) => {

module.exports = require("zod");

/***/ }),

/***/ 12362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ withMethods)
/* harmony export */ });
function withMethods(methods, handler) {
    return async function(req, res) {
        if (req.method && !methods.includes(req.method)) {
            return res.status(405).end();
        }
        return handler(req, res);
    };
}


/***/ }),

/***/ 91850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ posts)
});

// EXTERNAL MODULE: external "next-auth/next"
var next_ = __webpack_require__(62113);
// EXTERNAL MODULE: external "zod"
var external_zod_ = __webpack_require__(38316);
// EXTERNAL MODULE: ./lib/api-middlewares/with-methods.ts
var with_methods = __webpack_require__(12362);
// EXTERNAL MODULE: ./lib/auth.ts
var auth = __webpack_require__(1682);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(71543);
;// CONCATENATED MODULE: ./lib/exceptions.ts
class RequiresProPlanError extends Error {
    constructor(message = "This action requires a pro plan"){
        super(message);
    }
}

;// CONCATENATED MODULE: ./pages/api/posts/index.ts






// import { getUserSubscriptionPlan } from "@/lib/subscription"
const postCreateSchema = external_zod_.object({
    title: external_zod_.string(),
    content: external_zod_.string().optional()
});
async function handler(req, res) {
    const session = await (0,next_.getServerSession)(req, res, auth/* authOptions */.L);
    if (!session) {
        return res.status(403).end();
    }
    const { user  } = session;
    if (req.method === "GET") {
        try {
            const posts = await db.db.post.findMany({
                select: {
                    id: true,
                    title: true,
                    published: true,
                    createdAt: true
                },
                where: {
                    authorId: user.id
                }
            });
            return res.json(posts);
        } catch (error) {
            return res.status(500).end();
        }
    }
    if (req.method === "POST") {
        try {
            /* const subscriptionPlan = await getUserSubscriptionPlan(user.id)

      // If user is on a free plan.
      // Check if user has reached limit of 3 posts.
      if (!subscriptionPlan?.isPro) {
         const count = await db.post.count({
            where: {
               authorId: user.id,
            },
         })

         if (count >= 3) {
            throw new RequiresProPlanError()
         }
      } */ const body = postCreateSchema.parse(req.body);
            const post = await db.db.post.create({
                data: {
                    title: body.title,
                    content: body.content,
                    authorId: session.user.id
                },
                select: {
                    id: true
                }
            });
            return res.json(post);
        } catch (error) {
            if (error instanceof external_zod_.ZodError) {
                return res.status(422).json(error.issues);
            }
            if (error instanceof RequiresProPlanError) {
                return res.status(402).end();
            }
            return res.status(500).end();
        }
    }
}
/* harmony default export */ const posts = ((0,with_methods/* withMethods */.q)([
    "GET",
    "POST"
], handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1682], () => (__webpack_exec__(91850)));
module.exports = __webpack_exports__;

})();