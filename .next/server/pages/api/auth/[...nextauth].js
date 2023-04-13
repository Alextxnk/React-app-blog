"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "postmark":
/*!***************************!*\
  !*** external "postmark" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("postmark");

/***/ }),

/***/ "(api)/./config/site.ts":
/*!************************!*\
  !*** ./config/site.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"siteConfig\": () => (/* binding */ siteConfig)\n/* harmony export */ });\nconst siteConfig = {\n    name: \"Taxonomy\",\n    description: \"An open source application built using the new router, server components and everything new in Next.js 13.\",\n    url: \"https://tx.shadcn.com\",\n    ogImage: \"https://tx.shadcn.com/og.jpg\",\n    links: {\n        twitter: \"https://twitter.com/shadcn\",\n        github: \"https://github.com/Alextxnk\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvc2l0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTUEsYUFBeUI7SUFDbkNDLE1BQU07SUFDTkMsYUFDRztJQUNIQyxLQUFLO0lBQ0xDLFNBQVM7SUFDVEMsT0FBTztRQUNKQyxTQUFTO1FBQ1RDLFFBQVE7SUFDWDtBQUNILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXhvbm9teS8uL2NvbmZpZy9zaXRlLnRzPzIwYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l0ZUNvbmZpZyB9IGZyb20gJ3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHNpdGVDb25maWc6IFNpdGVDb25maWcgPSB7XG4gICBuYW1lOiAnVGF4b25vbXknLFxuICAgZGVzY3JpcHRpb246XG4gICAgICAnQW4gb3BlbiBzb3VyY2UgYXBwbGljYXRpb24gYnVpbHQgdXNpbmcgdGhlIG5ldyByb3V0ZXIsIHNlcnZlciBjb21wb25lbnRzIGFuZCBldmVyeXRoaW5nIG5ldyBpbiBOZXh0LmpzIDEzLicsXG4gICB1cmw6ICdodHRwczovL3R4LnNoYWRjbi5jb20nLFxuICAgb2dJbWFnZTogJ2h0dHBzOi8vdHguc2hhZGNuLmNvbS9vZy5qcGcnLFxuICAgbGlua3M6IHtcbiAgICAgIHR3aXR0ZXI6ICdodHRwczovL3R3aXR0ZXIuY29tL3NoYWRjbicsXG4gICAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vQWxleHR4bmsnXG4gICB9XG59O1xuIl0sIm5hbWVzIjpbInNpdGVDb25maWciLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJvZ0ltYWdlIiwibGlua3MiLCJ0d2l0dGVyIiwiZ2l0aHViIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/site.ts\n");

/***/ }),

/***/ "(api)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var postmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! postmark */ \"postmark\");\n/* harmony import */ var postmark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(postmark__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/site */ \"(api)/./config/site.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.ts\");\n\n\n\n\n\n\n// TODO: Move env vars to env a la t3.\nconst postmarkClient = new postmark__WEBPACK_IMPORTED_MODULE_3__.Client(process.env.POSTMARK_API_TOKEN || \"\");\nconst authOptions = {\n    // huh any! I know.\n    // This is a temporary fix for prisma client.\n    // @see https://github.com/prisma/prisma/issues/16117\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_5__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_CLIENT_ID || \"\",\n            clientSecret: process.env.GITHUB_CLIENT_SECRET || \"\"\n        }),\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default()({\n            from: process.env.SMTP_FROM,\n            sendVerificationRequest: async ({ identifier , url , provider  })=>{\n                const user = await _lib_db__WEBPACK_IMPORTED_MODULE_5__.db.user.findUnique({\n                    where: {\n                        email: identifier\n                    },\n                    select: {\n                        emailVerified: true\n                    }\n                });\n                const templateId = user?.emailVerified ? process.env.POSTMARK_SIGN_IN_TEMPLATE : process.env.POSTMARK_ACTIVATION_TEMPLATE;\n                if (!templateId) {\n                    throw new Error(\"Missing template id\");\n                }\n                const result = await postmarkClient.sendEmailWithTemplate({\n                    TemplateId: parseInt(templateId),\n                    To: identifier,\n                    From: provider.from,\n                    TemplateModel: {\n                        action_url: url,\n                        product_name: _config_site__WEBPACK_IMPORTED_MODULE_4__.siteConfig.name\n                    },\n                    Headers: [\n                        {\n                            // Set this to prevent Gmail from threading emails.\n                            // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.\n                            Name: \"X-Entity-Ref-ID\",\n                            Value: new Date().getTime() + \"\"\n                        }\n                    ]\n                });\n                if (result.ErrorCode) {\n                    throw new Error(result.Message);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ token , session  }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.name = token.name;\n                session.user.email = token.email;\n                session.user.image = token.picture;\n            }\n            return session;\n        },\n        async jwt ({ token , user  }) {\n            const dbUser = await _lib_db__WEBPACK_IMPORTED_MODULE_5__.db.user.findFirst({\n                where: {\n                    email: token.email\n                }\n            });\n            if (!dbUser) {\n                if (user) {\n                    token.id = user?.id;\n                }\n                return token;\n            }\n            return {\n                id: dbUser.id,\n                name: dbUser.name,\n                email: dbUser.email,\n                picture: dbUser.image\n            };\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUVKO0FBQ0U7QUFDdEI7QUFFUztBQUNiO0FBRTlCLHNDQUFzQztBQUN0QyxNQUFNTSxpQkFBaUIsSUFBSUgsNENBQU1BLENBQUNJLFFBQVFDLEdBQUcsQ0FBQ0Msa0JBQWtCLElBQUk7QUFFN0QsTUFBTUMsY0FBK0I7SUFDekMsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxxREFBcUQ7SUFDckRDLFNBQVNYLHdFQUFhQSxDQUFDSyx1Q0FBRUE7SUFDekJPLFNBQVM7UUFDTkMsVUFBVTtJQUNiO0lBQ0FDLE9BQU87UUFDSkMsUUFBUTtJQUNYO0lBQ0FDLFdBQVc7UUFDUmQsaUVBQWNBLENBQUM7WUFDWmUsVUFBVVYsUUFBUUMsR0FBRyxDQUFDVSxnQkFBZ0IsSUFBSTtZQUMxQ0MsY0FBY1osUUFBUUMsR0FBRyxDQUFDWSxvQkFBb0IsSUFBSTtRQUNyRDtRQUNBbkIsZ0VBQWFBLENBQUM7WUFDWG9CLE1BQU1kLFFBQVFDLEdBQUcsQ0FBQ2MsU0FBUztZQUMzQkMseUJBQXlCLE9BQU8sRUFBRUMsV0FBVSxFQUFFQyxJQUFHLEVBQUVDLFNBQVEsRUFBRSxHQUFLO2dCQUMvRCxNQUFNQyxPQUFPLE1BQU10Qix1REFBa0IsQ0FBQztvQkFDbkN3QixPQUFPO3dCQUNKQyxPQUFPTjtvQkFDVjtvQkFDQU8sUUFBUTt3QkFDTEMsZUFBZSxJQUFJO29CQUN0QjtnQkFDSDtnQkFFQSxNQUFNQyxhQUFhTixNQUFNSyxnQkFDcEJ6QixRQUFRQyxHQUFHLENBQUMwQix5QkFBeUIsR0FDckMzQixRQUFRQyxHQUFHLENBQUMyQiw0QkFBNEI7Z0JBQzdDLElBQUksQ0FBQ0YsWUFBWTtvQkFDZCxNQUFNLElBQUlHLE1BQU0sdUJBQXVCO2dCQUMxQyxDQUFDO2dCQUVELE1BQU1DLFNBQVMsTUFBTS9CLGVBQWVnQyxxQkFBcUIsQ0FBQztvQkFDdkRDLFlBQVlDLFNBQVNQO29CQUNyQlEsSUFBSWpCO29CQUNKa0IsTUFBTWhCLFNBQVNMLElBQUk7b0JBQ25Cc0IsZUFBZTt3QkFDWkMsWUFBWW5CO3dCQUNab0IsY0FBY3pDLHlEQUFlO29CQUNoQztvQkFDQTJDLFNBQVM7d0JBQ047NEJBQ0csbURBQW1EOzRCQUNuRCwrR0FBK0c7NEJBQy9HQyxNQUFNOzRCQUNOQyxPQUFPLElBQUlDLE9BQU9DLE9BQU8sS0FBSzt3QkFDakM7cUJBQ0Y7Z0JBQ0o7Z0JBRUEsSUFBSWQsT0FBT2UsU0FBUyxFQUFFO29CQUNuQixNQUFNLElBQUloQixNQUFNQyxPQUFPZ0IsT0FBTyxFQUFFO2dCQUNuQyxDQUFDO1lBQ0o7UUFDSDtLQUNGO0lBQ0RDLFdBQVc7UUFDUixNQUFNMUMsU0FBUSxFQUFFMkMsTUFBSyxFQUFFM0MsUUFBTyxFQUFFLEVBQUU7WUFDL0IsSUFBSTJDLE9BQU87Z0JBQ1IzQyxRQUFRZSxJQUFJLENBQUM2QixFQUFFLEdBQUdELE1BQU1DLEVBQUU7Z0JBQzFCNUMsUUFBUWUsSUFBSSxDQUFDbUIsSUFBSSxHQUFHUyxNQUFNVCxJQUFJO2dCQUM5QmxDLFFBQVFlLElBQUksQ0FBQ0csS0FBSyxHQUFHeUIsTUFBTXpCLEtBQUs7Z0JBQ2hDbEIsUUFBUWUsSUFBSSxDQUFDOEIsS0FBSyxHQUFHRixNQUFNRyxPQUFPO1lBQ3JDLENBQUM7WUFFRCxPQUFPOUM7UUFDVjtRQUNBLE1BQU0rQyxLQUFJLEVBQUVKLE1BQUssRUFBRTVCLEtBQUksRUFBRSxFQUFFO1lBQ3hCLE1BQU1pQyxTQUFTLE1BQU12RCxzREFBaUIsQ0FBQztnQkFDcEN3QixPQUFPO29CQUNKQyxPQUFPeUIsTUFBTXpCLEtBQUs7Z0JBQ3JCO1lBQ0g7WUFFQSxJQUFJLENBQUM4QixRQUFRO2dCQUNWLElBQUlqQyxNQUFNO29CQUNQNEIsTUFBTUMsRUFBRSxHQUFHN0IsTUFBTTZCO2dCQUNwQixDQUFDO2dCQUNELE9BQU9EO1lBQ1YsQ0FBQztZQUVELE9BQU87Z0JBQ0pDLElBQUlJLE9BQU9KLEVBQUU7Z0JBQ2JWLE1BQU1jLE9BQU9kLElBQUk7Z0JBQ2pCaEIsT0FBTzhCLE9BQU85QixLQUFLO2dCQUNuQjRCLFNBQVNFLE9BQU9ILEtBQUs7WUFDeEI7UUFDSDtJQUNIO0FBQ0gsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RheG9ub215Ly4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlcic7XG5pbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IEVtYWlsUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9lbWFpbCc7XG5pbXBvcnQgR2l0SHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAncG9zdG1hcmsnO1xuXG5pbXBvcnQgeyBzaXRlQ29uZmlnIH0gZnJvbSAnQC9jb25maWcvc2l0ZSc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJ0AvbGliL2RiJztcblxuLy8gVE9ETzogTW92ZSBlbnYgdmFycyB0byBlbnYgYSBsYSB0My5cbmNvbnN0IHBvc3RtYXJrQ2xpZW50ID0gbmV3IENsaWVudChwcm9jZXNzLmVudi5QT1NUTUFSS19BUElfVE9LRU4gfHwgJycpO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgIC8vIGh1aCBhbnkhIEkga25vdy5cbiAgIC8vIFRoaXMgaXMgYSB0ZW1wb3JhcnkgZml4IGZvciBwcmlzbWEgY2xpZW50LlxuICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXMvMTYxMTdcbiAgIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIoZGIgYXMgYW55KSxcbiAgIHNlc3Npb246IHtcbiAgICAgIHN0cmF0ZWd5OiAnand0J1xuICAgfSxcbiAgIHBhZ2VzOiB7XG4gICAgICBzaWduSW46ICcvbG9naW4nXG4gICB9LFxuICAgcHJvdmlkZXJzOiBbXG4gICAgICBHaXRIdWJQcm92aWRlcih7XG4gICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCB8fCAnJyxcbiAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQgfHwgJydcbiAgICAgIH0pLFxuICAgICAgRW1haWxQcm92aWRlcih7XG4gICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5TTVRQX0ZST00sXG4gICAgICAgICBzZW5kVmVyaWZpY2F0aW9uUmVxdWVzdDogYXN5bmMgKHsgaWRlbnRpZmllciwgdXJsLCBwcm92aWRlciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgICBlbWFpbDogaWRlbnRpZmllclxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZDogdHJ1ZVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlSWQgPSB1c2VyPy5lbWFpbFZlcmlmaWVkXG4gICAgICAgICAgICAgICA/IHByb2Nlc3MuZW52LlBPU1RNQVJLX1NJR05fSU5fVEVNUExBVEVcbiAgICAgICAgICAgICAgIDogcHJvY2Vzcy5lbnYuUE9TVE1BUktfQUNUSVZBVElPTl9URU1QTEFURTtcbiAgICAgICAgICAgIGlmICghdGVtcGxhdGVJZCkge1xuICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHRlbXBsYXRlIGlkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvc3RtYXJrQ2xpZW50LnNlbmRFbWFpbFdpdGhUZW1wbGF0ZSh7XG4gICAgICAgICAgICAgICBUZW1wbGF0ZUlkOiBwYXJzZUludCh0ZW1wbGF0ZUlkKSxcbiAgICAgICAgICAgICAgIFRvOiBpZGVudGlmaWVyLFxuICAgICAgICAgICAgICAgRnJvbTogcHJvdmlkZXIuZnJvbSBhcyBzdHJpbmcsXG4gICAgICAgICAgICAgICBUZW1wbGF0ZU1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25fdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWU6IHNpdGVDb25maWcubmFtZVxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIEhlYWRlcnM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGlzIHRvIHByZXZlbnQgR21haWwgZnJvbSB0aHJlYWRpbmcgZW1haWxzLlxuICAgICAgICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzNDM0MTEwL2ZvcmNlLWVtYWlscy1ub3QtdG8tYmUtZ3JvdXBlZC1pbnRvLWNvbnZlcnNhdGlvbnMvMjU0MzU3MjIuXG4gICAgICAgICAgICAgICAgICAgICBOYW1lOiAnWC1FbnRpdHktUmVmLUlEJyxcbiAgICAgICAgICAgICAgICAgICAgIFZhbHVlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICcnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5FcnJvckNvZGUpIHtcbiAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQuTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9KVxuICAgXSxcbiAgIGNhbGxiYWNrczoge1xuICAgICAgYXN5bmMgc2Vzc2lvbih7IHRva2VuLCBzZXNzaW9uIH0pIHtcbiAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLm5hbWU7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIuZW1haWwgPSB0b2tlbi5lbWFpbDtcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5pbWFnZSA9IHRva2VuLnBpY3R1cmU7XG4gICAgICAgICB9XG5cbiAgICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgICAgIGNvbnN0IGRiVXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICBlbWFpbDogdG9rZW4uZW1haWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuXG4gICAgICAgICBpZiAoIWRiVXNlcikge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgIHRva2VuLmlkID0gdXNlcj8uaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICB9XG5cbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZGJVc2VyLmlkLFxuICAgICAgICAgICAgbmFtZTogZGJVc2VyLm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZGJVc2VyLmVtYWlsLFxuICAgICAgICAgICAgcGljdHVyZTogZGJVc2VyLmltYWdlXG4gICAgICAgICB9O1xuICAgICAgfVxuICAgfVxufTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwiRW1haWxQcm92aWRlciIsIkdpdEh1YlByb3ZpZGVyIiwiQ2xpZW50Iiwic2l0ZUNvbmZpZyIsImRiIiwicG9zdG1hcmtDbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiUE9TVE1BUktfQVBJX1RPS0VOIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImZyb20iLCJTTVRQX0ZST00iLCJzZW5kVmVyaWZpY2F0aW9uUmVxdWVzdCIsImlkZW50aWZpZXIiLCJ1cmwiLCJwcm92aWRlciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsInNlbGVjdCIsImVtYWlsVmVyaWZpZWQiLCJ0ZW1wbGF0ZUlkIiwiUE9TVE1BUktfU0lHTl9JTl9URU1QTEFURSIsIlBPU1RNQVJLX0FDVElWQVRJT05fVEVNUExBVEUiLCJFcnJvciIsInJlc3VsdCIsInNlbmRFbWFpbFdpdGhUZW1wbGF0ZSIsIlRlbXBsYXRlSWQiLCJwYXJzZUludCIsIlRvIiwiRnJvbSIsIlRlbXBsYXRlTW9kZWwiLCJhY3Rpb25fdXJsIiwicHJvZHVjdF9uYW1lIiwibmFtZSIsIkhlYWRlcnMiLCJOYW1lIiwiVmFsdWUiLCJEYXRlIiwiZ2V0VGltZSIsIkVycm9yQ29kZSIsIk1lc3NhZ2UiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImlkIiwiaW1hZ2UiLCJwaWN0dXJlIiwiand0IiwiZGJVc2VyIiwiZmluZEZpcnN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBTzdDLElBQUlDO0FBQ0osSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxPQUFPQyxZQUFZLEVBQUU7UUFDeEJELE9BQU9DLFlBQVksR0FBRyxJQUFJSix3REFBWUE7SUFDeEMsQ0FBQztJQUNEQyxTQUFTRSxPQUFPQyxZQUFZO0FBQzlCLENBQUM7QUFFTSxNQUFNQyxLQUFLSixPQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGF4b25vbXkvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcbiAgdmFyIGNhY2hlZFByaXNtYTogUHJpc21hQ2xpZW50XG59XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudFxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLmNhY2hlZFByaXNtYSkge1xuICAgIGdsb2JhbC5jYWNoZWRQcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwuY2FjaGVkUHJpc21hXG59XG5cbmV4cG9ydCBjb25zdCBkYiA9IHByaXNtYVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiLCJjYWNoZWRQcmlzbWEiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(api)/./lib/auth.ts\");\n\n\n// @see ./lib/auth\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0M7QUFFUTtBQUV4QyxrQkFBa0I7QUFDbEIsaUVBQWVBLGdEQUFRQSxDQUFDQyxrREFBV0EsQ0FBQ0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RheG9ub215Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcblxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiXG5cbi8vIEBzZWUgLi9saWIvYXV0aFxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();