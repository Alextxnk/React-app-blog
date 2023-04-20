"use strict";
(() => {
var exports = {};
exports.id = 4610;
exports.ids = [4610];
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

/***/ 92055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ stripe)
});

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
;// CONCATENATED MODULE: ./lib/stripe.ts

const stripe = new (external_stripe_default())(process.env.STRIPE_API_KEY || "", {
    apiVersion: "2022-11-15",
    typescript: true
});


/***/ }),

/***/ 38461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ users_stripe)
});

// EXTERNAL MODULE: external "next-auth/next"
var next_ = __webpack_require__(62113);
;// CONCATENATED MODULE: ./config/subscriptions.ts
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

// EXTERNAL MODULE: ./lib/auth.ts
var auth = __webpack_require__(1682);
;// CONCATENATED MODULE: ./lib/api-middlewares/with-authentication.ts


function withAuthentication(handler) {
    return async function(req, res) {
        const session = await (0,next_.getServerSession)(req, res, auth/* authOptions */.L);
        if (!session) {
            return res.status(403).end();
        }
        return handler(req, res);
    };
}

// EXTERNAL MODULE: ./lib/api-middlewares/with-methods.ts
var with_methods = __webpack_require__(12362);
// EXTERNAL MODULE: ./lib/stripe.ts + 1 modules
var stripe = __webpack_require__(92055);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(71543);
;// CONCATENATED MODULE: ./lib/subscription.ts
// @ts-nocheck
// TODO: Fix this when we turn strict mode on.


async function getUserSubscriptionPlan(userId) {
    const user = await db.db.user.findFirst({
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
    const plan = isPro ? proPlan : freePlan;
    return {
        ...plan,
        ...user,
        stripeCurrentPeriodEnd: user.stripeCurrentPeriodEnd?.getTime(),
        isPro
    };
}

;// CONCATENATED MODULE: external "clsx"
const external_clsx_namespaceObject = require("clsx");
;// CONCATENATED MODULE: external "tailwind-merge"
const external_tailwind_merge_namespaceObject = require("tailwind-merge");
;// CONCATENATED MODULE: ./lib/utils.ts


function cn(...inputs) {
    return twMerge(clsx(inputs));
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

;// CONCATENATED MODULE: ./pages/api/users/stripe.ts








const billingUrl = absoluteUrl("/dashboard/billing");
async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const session = await (0,next_.getServerSession)(req, res, auth/* authOptions */.L);
            const user = session?.user;
            if (!user || !user.email) {
                throw new Error("User not found.");
            }
            const subscriptionPlan = await getUserSubscriptionPlan(user.id);
            // The user is on the pro plan.
            // Create a portal session to manage subscription.
            if (subscriptionPlan.isPro && subscriptionPlan.stripeCustomerId) {
                const stripeSession = await stripe/* stripe.billingPortal.sessions.create */.A.billingPortal.sessions.create({
                    customer: subscriptionPlan.stripeCustomerId,
                    return_url: billingUrl
                });
                return res.json({
                    url: stripeSession.url
                });
            }
            // The user is on the free plan.
            // Create a checkout session to upgrade.
            const stripeSession = await stripe/* stripe.checkout.sessions.create */.A.checkout.sessions.create({
                success_url: billingUrl,
                cancel_url: billingUrl,
                payment_method_types: [
                    "card"
                ],
                mode: "subscription",
                billing_address_collection: "auto",
                customer_email: user.email,
                line_items: [
                    {
                        price: proPlan.stripePriceId,
                        quantity: 1
                    }
                ],
                metadata: {
                    userId: user.id
                }
            });
            return res.json({
                url: stripeSession.url
            });
        } catch (error) {
            return res.status(500).end();
        }
    }
}
/* harmony default export */ const users_stripe = ((0,with_methods/* withMethods */.q)([
    "GET"
], withAuthentication(handler)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1682], () => (__webpack_exec__(38461)));
module.exports = __webpack_exports__;

})();