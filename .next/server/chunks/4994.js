"use strict";
exports.id = 4994;
exports.ids = [4994];
exports.modules = {

/***/ 57802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ proPlan),
/* harmony export */   "R": () => (/* binding */ freePlan)
/* harmony export */ });
const freePlan = {
    name: "Free",
    description: "The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.",
    stripePriceId: ""
};
const proPlan = {
    name: "PRO",
    description: "The PRO plan has unlimited posts.",
    stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || ""
};


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

/***/ 56383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getUserSubscriptionPlan)
/* harmony export */ });
/* harmony import */ var _config_subscriptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57802);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71543);
// @ts-nocheck
// TODO: Fix this when we turn strict mode on.


async function getUserSubscriptionPlan(userId) {
    const user = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findFirst({
        where: {
            id: userId
        },
        select: {
            stripeSubscriptionId: true,
            stripeCurrentPeriodEnd: true,
            stripeCustomerId: true,
            stripePriceId: true
        }
    });
    if (!user) {
        throw new Error("User not found");
    }
    // Check if user is on a pro plan.
    const isPro = user.stripePriceId && user.stripeCurrentPeriodEnd?.getTime() + 86400000 > Date.now();
    const plan = isPro ? _config_subscriptions__WEBPACK_IMPORTED_MODULE_0__/* .proPlan */ .H : _config_subscriptions__WEBPACK_IMPORTED_MODULE_0__/* .freePlan */ .R;
    return {
        ...plan,
        ...user,
        stripeCurrentPeriodEnd: user.stripeCurrentPeriodEnd?.getTime(),
        isPro
    };
}


/***/ })

};
;