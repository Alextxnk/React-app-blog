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

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.ts\");\n\n\n\n// TODO: Move env vars to env a la t3.\n// const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN || '');\nconst authOptions = {\n    // huh any! I know.\n    // This is a temporary fix for prisma client.\n    // @see https://github.com/prisma/prisma/issues/16117\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_2__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_CLIENT_ID || \"\",\n            clientSecret: process.env.GITHUB_CLIENT_SECRET || \"\"\n        })\n    ],\n    callbacks: {\n        async session ({ token , session  }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.name = token.name;\n                session.user.email = token.email;\n                session.user.image = token.picture;\n            }\n            return session;\n        },\n        async jwt ({ token , user  }) {\n            const dbUser = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.user.findFirst({\n                where: {\n                    email: token.email\n                }\n            });\n            if (!dbUser) {\n                if (user) {\n                    token.id = user?.id;\n                }\n                return token;\n            }\n            return {\n                id: dbUser.id,\n                name: dbUser.name,\n                email: dbUser.email,\n                picture: dbUser.image\n            };\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEQ7QUFHRjtBQUkxQjtBQUU5QixzQ0FBc0M7QUFDdEMsMkVBQTJFO0FBRXBFLE1BQU1HLGNBQStCO0lBQ3pDLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0MscURBQXFEO0lBQ3JEQyxTQUFTSix3RUFBYUEsQ0FBQ0UsdUNBQUVBO0lBQ3pCRyxTQUFTO1FBQ05DLFVBQVU7SUFDYjtJQUNBQyxPQUFPO1FBQ0pDLFFBQVE7SUFDWDtJQUNBQyxXQUFXO1FBQ1JSLGlFQUFjQSxDQUFDO1lBQ1pTLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCLElBQUk7WUFDMUNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CLElBQUk7UUFDckQ7S0EyQ0Y7SUFDREMsV0FBVztRQUNSLE1BQU1YLFNBQVEsRUFBRVksTUFBSyxFQUFFWixRQUFPLEVBQUUsRUFBRTtZQUMvQixJQUFJWSxPQUFPO2dCQUNSWixRQUFRYSxJQUFJLENBQUNDLEVBQUUsR0FBR0YsTUFBTUUsRUFBRTtnQkFDMUJkLFFBQVFhLElBQUksQ0FBQ0UsSUFBSSxHQUFHSCxNQUFNRyxJQUFJO2dCQUM5QmYsUUFBUWEsSUFBSSxDQUFDRyxLQUFLLEdBQUdKLE1BQU1JLEtBQUs7Z0JBQ2hDaEIsUUFBUWEsSUFBSSxDQUFDSSxLQUFLLEdBQUdMLE1BQU1NLE9BQU87WUFDckMsQ0FBQztZQUVELE9BQU9sQjtRQUNWO1FBQ0EsTUFBTW1CLEtBQUksRUFBRVAsTUFBSyxFQUFFQyxLQUFJLEVBQUUsRUFBRTtZQUN4QixNQUFNTyxTQUFTLE1BQU12QixzREFBaUIsQ0FBQztnQkFDcEN5QixPQUFPO29CQUNKTixPQUFPSixNQUFNSSxLQUFLO2dCQUNyQjtZQUNIO1lBRUEsSUFBSSxDQUFDSSxRQUFRO2dCQUNWLElBQUlQLE1BQU07b0JBQ1BELE1BQU1FLEVBQUUsR0FBR0QsTUFBTUM7Z0JBQ3BCLENBQUM7Z0JBQ0QsT0FBT0Y7WUFDVixDQUFDO1lBRUQsT0FBTztnQkFDSkUsSUFBSU0sT0FBT04sRUFBRTtnQkFDYkMsTUFBTUssT0FBT0wsSUFBSTtnQkFDakJDLE9BQU9JLE9BQU9KLEtBQUs7Z0JBQ25CRSxTQUFTRSxPQUFPSCxLQUFLO1lBQ3hCO1FBQ0g7SUFDSDtBQUNILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkZW50LWRhc2hib2FyZC8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gJ0BuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXInO1xuaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBFbWFpbFByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZW1haWwnO1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViJztcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJ3Bvc3RtYXJrJztcblxuaW1wb3J0IHsgc2l0ZUNvbmZpZyB9IGZyb20gJ0AvY29uZmlnL3NpdGUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICdAL2xpYi9kYic7XG5cbi8vIFRPRE86IE1vdmUgZW52IHZhcnMgdG8gZW52IGEgbGEgdDMuXG4vLyBjb25zdCBwb3N0bWFya0NsaWVudCA9IG5ldyBDbGllbnQocHJvY2Vzcy5lbnYuUE9TVE1BUktfQVBJX1RPS0VOIHx8ICcnKTtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gICAvLyBodWggYW55ISBJIGtub3cuXG4gICAvLyBUaGlzIGlzIGEgdGVtcG9yYXJ5IGZpeCBmb3IgcHJpc21hIGNsaWVudC5cbiAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzLzE2MTE3XG4gICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKGRiIGFzIGFueSksXG4gICBzZXNzaW9uOiB7XG4gICAgICBzdHJhdGVneTogJ2p3dCdcbiAgIH0sXG4gICBwYWdlczoge1xuICAgICAgc2lnbkluOiAnL2xvZ2luJ1xuICAgfSxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQgfHwgJycsXG4gICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVUIHx8ICcnXG4gICAgICB9KSxcbiAgICAgIC8qIEVtYWlsUHJvdmlkZXIoe1xuICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuU01UUF9GUk9NLFxuICAgICAgICAgc2VuZFZlcmlmaWNhdGlvblJlcXVlc3Q6IGFzeW5jICh7IGlkZW50aWZpZXIsIHVybCwgcHJvdmlkZXIgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgZW1haWw6IGlkZW50aWZpZXJcbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IHRydWVcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZUlkID0gdXNlcj8uZW1haWxWZXJpZmllZFxuICAgICAgICAgICAgICAgPyBwcm9jZXNzLmVudi5QT1NUTUFSS19TSUdOX0lOX1RFTVBMQVRFXG4gICAgICAgICAgICAgICA6IHByb2Nlc3MuZW52LlBPU1RNQVJLX0FDVElWQVRJT05fVEVNUExBVEU7XG4gICAgICAgICAgICBpZiAoIXRlbXBsYXRlSWQpIHtcbiAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyB0ZW1wbGF0ZSBpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb3N0bWFya0NsaWVudC5zZW5kRW1haWxXaXRoVGVtcGxhdGUoe1xuICAgICAgICAgICAgICAgVGVtcGxhdGVJZDogcGFyc2VJbnQodGVtcGxhdGVJZCksXG4gICAgICAgICAgICAgICBUbzogaWRlbnRpZmllcixcbiAgICAgICAgICAgICAgIEZyb206IHByb3ZpZGVyLmZyb20gYXMgc3RyaW5nLFxuICAgICAgICAgICAgICAgVGVtcGxhdGVNb2RlbDoge1xuICAgICAgICAgICAgICAgICAgYWN0aW9uX3VybDogdXJsLFxuICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiBzaXRlQ29uZmlnLm5hbWVcbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICBIZWFkZXJzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGhpcyB0byBwcmV2ZW50IEdtYWlsIGZyb20gdGhyZWFkaW5nIGVtYWlscy5cbiAgICAgICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzQzNDExMC9mb3JjZS1lbWFpbHMtbm90LXRvLWJlLWdyb3VwZWQtaW50by1jb252ZXJzYXRpb25zLzI1NDM1NzIyLlxuICAgICAgICAgICAgICAgICAgICAgTmFtZTogJ1gtRW50aXR5LVJlZi1JRCcsXG4gICAgICAgICAgICAgICAgICAgICBWYWx1ZTogbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7IFxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LkVycm9yQ29kZSkge1xuICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5NZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0pICovXG4gICBdLFxuICAgY2FsbGJhY2tzOiB7XG4gICAgICBhc3luYyBzZXNzaW9uKHsgdG9rZW4sIHNlc3Npb24gfSkge1xuICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZDtcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4ubmFtZTtcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5lbWFpbCA9IHRva2VuLmVtYWlsO1xuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmltYWdlID0gdG9rZW4ucGljdHVyZTtcbiAgICAgICAgIH1cblxuICAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICB9LFxuICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgICAgY29uc3QgZGJVc2VyID0gYXdhaXQgZGIudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgIGVtYWlsOiB0b2tlbi5lbWFpbFxuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG5cbiAgICAgICAgIGlmICghZGJVc2VyKSB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgdG9rZW4uaWQgPSB1c2VyPy5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgIH1cblxuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBkYlVzZXIuaWQsXG4gICAgICAgICAgICBuYW1lOiBkYlVzZXIubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBkYlVzZXIuZW1haWwsXG4gICAgICAgICAgICBwaWN0dXJlOiBkYlVzZXIuaW1hZ2VcbiAgICAgICAgIH07XG4gICAgICB9XG4gICB9XG59O1xuIl0sIm5hbWVzIjpbIlByaXNtYUFkYXB0ZXIiLCJHaXRIdWJQcm92aWRlciIsImRiIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJ0b2tlbiIsInVzZXIiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImltYWdlIiwicGljdHVyZSIsImp3dCIsImRiVXNlciIsImZpbmRGaXJzdCIsIndoZXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTzlDLElBQUlDO0FBQ0osSUFBSUMsS0FBeUIsRUFBYyxFQUUxQyxNQUFNO0lBQ0osSUFBSSxDQUFDQyxPQUFPQyxZQUFZLEVBQUU7UUFDdkJELE9BQU9DLFlBQVksR0FBRyxJQUFJSix3REFBWUE7SUFDekMsQ0FBQztJQUNEQyxTQUFTRSxPQUFPQyxZQUFZO0FBQy9CLENBQUM7QUFFTSxNQUFNQyxLQUFLSixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGVudC1kYXNoYm9hcmQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcbiAgIHZhciBjYWNoZWRQcmlzbWE6IFByaXNtYUNsaWVudDtcbn1cblxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gICBpZiAoIWdsb2JhbC5jYWNoZWRQcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5jYWNoZWRQcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICB9XG4gICBwcmlzbWEgPSBnbG9iYWwuY2FjaGVkUHJpc21hO1xufVxuXG5leHBvcnQgY29uc3QgZGIgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCIsImNhY2hlZFByaXNtYSIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(api)/./lib/auth.ts\");\n\n\n// @see ./lib/auth\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0M7QUFFUTtBQUV4QyxrQkFBa0I7QUFDbEIsaUVBQWVBLGdEQUFRQSxDQUFDQyxrREFBV0EsQ0FBQ0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0dWRlbnQtZGFzaGJvYXJkLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcblxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiXG5cbi8vIEBzZWUgLi9saWIvYXV0aFxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

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