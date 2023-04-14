"use strict";
(() => {
var exports = {};
exports.id = 582;
exports.ids = [582];
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

/***/ 79519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _userId_)
});

// EXTERNAL MODULE: external "next-auth/next"
var next_ = __webpack_require__(62113);
// EXTERNAL MODULE: external "zod"
var external_zod_ = __webpack_require__(38316);
// EXTERNAL MODULE: ./lib/auth.ts
var auth = __webpack_require__(1682);
;// CONCATENATED MODULE: ./lib/api-middlewares/with-current-user.ts



const schema = external_zod_.object({
    userId: external_zod_.string()
});
function withCurrentUser(handler) {
    return async function(req, res) {
        try {
            const query = await schema.parse(req.query);
            // Check if the user has access to this user.
            const session = await (0,next_.getServerSession)(req, res, auth/* authOptions */.L);
            if (query.userId !== session?.user.id) {
                return res.status(403).end();
            }
            return handler(req, res);
        } catch (error) {
            if (error instanceof external_zod_.ZodError) {
                return res.status(422).json(error.issues);
            }
            return res.status(500).end();
        }
    };
}

// EXTERNAL MODULE: ./lib/api-middlewares/with-methods.ts
var with_methods = __webpack_require__(12362);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(71543);
;// CONCATENATED MODULE: ./lib/validations/user.ts

const userNameSchema = external_zod_.object({
    name: external_zod_.string().min(3).max(32)
});

;// CONCATENATED MODULE: ./pages/api/users/[userId].ts







async function handler(req, res) {
    if (req.method === "PATCH") {
        try {
            const session = await (0,next_.getServerSession)(req, res, auth/* authOptions */.L);
            const user = session?.user;
            if (!user) {
                throw new Error("User not found.");
            }
            const body = req.body;
            if (body?.name) {
                const payload = userNameSchema.parse(body);
                await db.db.user.update({
                    where: {
                        id: user.id
                    },
                    data: {
                        name: payload.name
                    }
                });
            }
            return res.end();
        } catch (error) {
            if (error instanceof external_zod_.ZodError) {
                return res.status(422).json(error.issues);
            }
            return res.status(422).end();
        }
    }
}
/* harmony default export */ const _userId_ = ((0,with_methods/* withMethods */.q)([
    "PATCH"
], withCurrentUser(handler)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1682], () => (__webpack_exec__(79519)));
module.exports = __webpack_exports__;

})();