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

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.ts\");\n\n\n\n\n// TODO: Move env vars to env a la t3.\n// const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN || '');\nconst authOptions = {\n    // huh any! I know.\n    // This is a temporary fix for prisma client.\n    // @see https://github.com/prisma/prisma/issues/16117\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_3__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_CLIENT_ID || \"\",\n            clientSecret: process.env.GITHUB_CLIENT_SECRET || \"\"\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            type: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Электронная почта\",\n                    type: \"email\",\n                    placeholder: \"name@example.com\"\n                },\n                password: {\n                    label: \"Пароль\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const { email , password  } = credentials;\n                // find user from db\n                if (email !== \"alextxnk@gmail.com\" || password !== \"12345678\") {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return {\n                    id: \"1\",\n                    name: \"Alextxnk\",\n                    email: \"alextxnk@gmail.com\"\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ token , session  }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.name = token.name;\n                session.user.email = token.email;\n                session.user.image = token.picture;\n            }\n            return session;\n        },\n        async jwt ({ token , user  }) {\n            const dbUser = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.db.user.findFirst({\n                where: {\n                    email: token.email\n                }\n            });\n            if (!dbUser) {\n                if (user) {\n                    token.id = user?.id;\n                }\n                return token;\n            }\n            return {\n                id: dbUser.id,\n                name: dbUser.name,\n                email: dbUser.email,\n                picture: dbUser.image\n            };\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDtBQUdGO0FBQ1U7QUFJcEM7QUFFOUIsc0NBQXNDO0FBQ3RDLDJFQUEyRTtBQUVwRSxNQUFNSSxjQUErQjtJQUN6QyxtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLHFEQUFxRDtJQUNyREMsU0FBU0wsd0VBQWFBLENBQUNHLHVDQUFFQTtJQUN6QkcsU0FBUztRQUNOQyxVQUFVO0lBQ2I7SUFDQUMsT0FBTztRQUNKQyxRQUFRO0lBQ1g7SUFDQUMsV0FBVztRQUNSVCxpRUFBY0EsQ0FBQztZQUNaVSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQixJQUFJO1lBQzFDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQixJQUFJO1FBQ3JEO1FBQ0FkLHNFQUFtQkEsQ0FBQztZQUNqQmUsTUFBTTtZQUNOQyxhQUFhO2dCQUNWQyxPQUFPO29CQUNKQyxPQUFPO29CQUNQSCxNQUFNO29CQUNOSSxhQUFhO2dCQUNoQjtnQkFDQUMsVUFBVTtvQkFBRUYsT0FBTztvQkFBVUgsTUFBTTtnQkFBVztZQUNqRDtZQUNBLE1BQU1NLFdBQVVMLFdBQVcsRUFBRU0sR0FBRyxFQUFFO2dCQUMvQixNQUFNLEVBQUVMLE1BQUssRUFBRUcsU0FBUSxFQUFFLEdBQUdKO2dCQUk1QixvQkFBb0I7Z0JBQ3BCLElBQUlDLFVBQVUsd0JBQXdCRyxhQUFhLFlBQVk7b0JBQzVELE1BQU0sSUFBSUcsTUFBTSx1QkFBdUI7Z0JBQzFDLENBQUM7Z0JBRUQsT0FBTztvQkFBRUMsSUFBSTtvQkFBS0MsTUFBTTtvQkFBWVIsT0FBTztnQkFBcUI7WUFDbkU7UUFDSDtLQTJDRjtJQUNEUyxXQUFXO1FBQ1IsTUFBTXRCLFNBQVEsRUFBRXVCLE1BQUssRUFBRXZCLFFBQU8sRUFBRSxFQUFFO1lBQy9CLElBQUl1QixPQUFPO2dCQUNSdkIsUUFBUXdCLElBQUksQ0FBQ0osRUFBRSxHQUFHRyxNQUFNSCxFQUFFO2dCQUMxQnBCLFFBQVF3QixJQUFJLENBQUNILElBQUksR0FBR0UsTUFBTUYsSUFBSTtnQkFDOUJyQixRQUFRd0IsSUFBSSxDQUFDWCxLQUFLLEdBQUdVLE1BQU1WLEtBQUs7Z0JBQ2hDYixRQUFRd0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdGLE1BQU1HLE9BQU87WUFDckMsQ0FBQztZQUVELE9BQU8xQjtRQUNWO1FBQ0EsTUFBTTJCLEtBQUksRUFBRUosTUFBSyxFQUFFQyxLQUFJLEVBQUUsRUFBRTtZQUN4QixNQUFNSSxTQUFTLE1BQU0vQixzREFBaUIsQ0FBQztnQkFDcENpQyxPQUFPO29CQUNKakIsT0FBT1UsTUFBTVYsS0FBSztnQkFDckI7WUFDSDtZQUVBLElBQUksQ0FBQ2UsUUFBUTtnQkFDVixJQUFJSixNQUFNO29CQUNQRCxNQUFNSCxFQUFFLEdBQUdJLE1BQU1KO2dCQUNwQixDQUFDO2dCQUNELE9BQU9HO1lBQ1YsQ0FBQztZQUVELE9BQU87Z0JBQ0pILElBQUlRLE9BQU9SLEVBQUU7Z0JBQ2JDLE1BQU1PLE9BQU9QLElBQUk7Z0JBQ2pCUixPQUFPZSxPQUFPZixLQUFLO2dCQUNuQmEsU0FBU0UsT0FBT0gsS0FBSztZQUN4QjtRQUNIO0lBQ0g7QUFDSCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGVudC1kYXNoYm9hcmQvLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tICdAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyJztcbmltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgRW1haWxQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsJztcbmltcG9ydCBHaXRIdWJQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1Yic7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJ3Bvc3RtYXJrJztcblxuaW1wb3J0IHsgc2l0ZUNvbmZpZyB9IGZyb20gJ0AvY29uZmlnL3NpdGUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICdAL2xpYi9kYic7XG5cbi8vIFRPRE86IE1vdmUgZW52IHZhcnMgdG8gZW52IGEgbGEgdDMuXG4vLyBjb25zdCBwb3N0bWFya0NsaWVudCA9IG5ldyBDbGllbnQocHJvY2Vzcy5lbnYuUE9TVE1BUktfQVBJX1RPS0VOIHx8ICcnKTtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gICAvLyBodWggYW55ISBJIGtub3cuXG4gICAvLyBUaGlzIGlzIGEgdGVtcG9yYXJ5IGZpeCBmb3IgcHJpc21hIGNsaWVudC5cbiAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzLzE2MTE3XG4gICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKGRiIGFzIGFueSksXG4gICBzZXNzaW9uOiB7XG4gICAgICBzdHJhdGVneTogJ2p3dCdcbiAgIH0sXG4gICBwYWdlczoge1xuICAgICAgc2lnbkluOiAnL2xvZ2luJ1xuICAgfSxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQgfHwgJycsXG4gICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVUIHx8ICcnXG4gICAgICB9KSxcbiAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgdHlwZTogJ2NyZWRlbnRpYWxzJyxcbiAgICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgbGFiZWw6ICfQrdC70LXQutGC0YDQvtC90L3QsNGPINC/0L7Rh9GC0LAnLFxuICAgICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnbmFtZUBleGFtcGxlLmNvbSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ9Cf0LDRgNC+0LvRjCcsIHR5cGU6ICdwYXNzd29yZCcgfVxuICAgICAgICAgfSxcbiAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XG4gICAgICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHMgYXMge1xuICAgICAgICAgICAgICAgZW1haWw6IHN0cmluZztcbiAgICAgICAgICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gZmluZCB1c2VyIGZyb20gZGJcbiAgICAgICAgICAgIGlmIChlbWFpbCAhPT0gJ2FsZXh0eG5rQGdtYWlsLmNvbScgfHwgcGFzc3dvcmQgIT09ICcxMjM0NTY3OCcpIHtcbiAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcmVkZW50aWFscycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geyBpZDogJzEnLCBuYW1lOiAnQWxleHR4bmsnLCBlbWFpbDogJ2FsZXh0eG5rQGdtYWlsLmNvbScgfTtcbiAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvKiBFbWFpbFByb3ZpZGVyKHtcbiAgICAgICAgIGZyb206IHByb2Nlc3MuZW52LlNNVFBfRlJPTSxcbiAgICAgICAgIHNlbmRWZXJpZmljYXRpb25SZXF1ZXN0OiBhc3luYyAoeyBpZGVudGlmaWVyLCB1cmwsIHByb3ZpZGVyIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgIGVtYWlsOiBpZGVudGlmaWVyXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiB0cnVlXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVJZCA9IHVzZXI/LmVtYWlsVmVyaWZpZWRcbiAgICAgICAgICAgICAgID8gcHJvY2Vzcy5lbnYuUE9TVE1BUktfU0lHTl9JTl9URU1QTEFURVxuICAgICAgICAgICAgICAgOiBwcm9jZXNzLmVudi5QT1NUTUFSS19BQ1RJVkFUSU9OX1RFTVBMQVRFO1xuICAgICAgICAgICAgaWYgKCF0ZW1wbGF0ZUlkKSB7XG4gICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdGVtcGxhdGUgaWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9zdG1hcmtDbGllbnQuc2VuZEVtYWlsV2l0aFRlbXBsYXRlKHtcbiAgICAgICAgICAgICAgIFRlbXBsYXRlSWQ6IHBhcnNlSW50KHRlbXBsYXRlSWQpLFxuICAgICAgICAgICAgICAgVG86IGlkZW50aWZpZXIsXG4gICAgICAgICAgICAgICBGcm9tOiBwcm92aWRlci5mcm9tIGFzIHN0cmluZyxcbiAgICAgICAgICAgICAgIFRlbXBsYXRlTW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbl91cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogc2l0ZUNvbmZpZy5uYW1lXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgSGVhZGVyczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHRoaXMgdG8gcHJldmVudCBHbWFpbCBmcm9tIHRocmVhZGluZyBlbWFpbHMuXG4gICAgICAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjM0MzQxMTAvZm9yY2UtZW1haWxzLW5vdC10by1iZS1ncm91cGVkLWludG8tY29udmVyc2F0aW9ucy8yNTQzNTcyMi5cbiAgICAgICAgICAgICAgICAgICAgIE5hbWU6ICdYLUVudGl0eS1SZWYtSUQnLFxuICAgICAgICAgICAgICAgICAgICAgVmFsdWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pOyBcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5FcnJvckNvZGUpIHtcbiAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQuTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9KSAqL1xuICAgXSxcbiAgIGNhbGxiYWNrczoge1xuICAgICAgYXN5bmMgc2Vzc2lvbih7IHRva2VuLCBzZXNzaW9uIH0pIHtcbiAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLm5hbWU7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIuZW1haWwgPSB0b2tlbi5lbWFpbDtcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5pbWFnZSA9IHRva2VuLnBpY3R1cmU7XG4gICAgICAgICB9XG5cbiAgICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgICAgIGNvbnN0IGRiVXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICBlbWFpbDogdG9rZW4uZW1haWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuXG4gICAgICAgICBpZiAoIWRiVXNlcikge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgIHRva2VuLmlkID0gdXNlcj8uaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICB9XG5cbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZGJVc2VyLmlkLFxuICAgICAgICAgICAgbmFtZTogZGJVc2VyLm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZGJVc2VyLmVtYWlsLFxuICAgICAgICAgICAgcGljdHVyZTogZGJVc2VyLmltYWdlXG4gICAgICAgICB9O1xuICAgICAgfVxuICAgfVxufTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwiR2l0SHViUHJvdmlkZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiZGIiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwYWdlcyIsInNpZ25JbiIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsInR5cGUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwiRXJyb3IiLCJpZCIsIm5hbWUiLCJjYWxsYmFja3MiLCJ0b2tlbiIsInVzZXIiLCJpbWFnZSIsInBpY3R1cmUiLCJqd3QiLCJkYlVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

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