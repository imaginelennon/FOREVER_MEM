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
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\n//key 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\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const animal = req.body.animal || \"\";\n    const Question = req.body.Question || \"\";\n    //console.log(animal);\n    //console.log(animal.trim().length);\n    //console.log(Question);\n    if (animal.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please enter a valid Character\"\n            }\n        });\n        return;\n    }\n    if (Question.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please enter a valid Question\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: generatePrompt(animal, Question),\n            temperature: 0.2\n        });\n        res.status(200).json({\n            result: completion.data.choices[0].text\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\nfunction generatePrompt(animal, Question) {\n    const HPcharacter = animal[0].toUpperCase() + animal.slice(1).toLowerCase();\n    const question = Question;\n    return `As ${HPcharacter} how would you answer ${question}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELHlEQUF5RDtBQUN6RCxNQUFNRSxnQkFBZ0IsSUFBSUYsaURBQWFBLENBQUM7SUFDdENHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQztBQUNBLE1BQU1DLFNBQVMsSUFBSU4sNkNBQVNBLENBQUNDO0FBRTdCLDZCQUFlLDBDQUFnQk0sR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsSUFBSSxDQUFDUCxjQUFjQyxNQUFNLEVBQUU7UUFDekJNLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLE9BQU87Z0JBQ0xDLFNBQVM7WUFDWDtRQUNGO1FBQ0E7SUFDRixDQUFDO0lBRUQsTUFBTUMsU0FBU04sSUFBSU8sSUFBSSxDQUFDRCxNQUFNLElBQUk7SUFDbEMsTUFBTUUsV0FBV1IsSUFBSU8sSUFBSSxDQUFDQyxRQUFRLElBQUk7SUFDdEMsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyx3QkFBd0I7SUFDeEIsSUFBSUYsT0FBT0csSUFBSSxHQUFHQyxNQUFNLEtBQUssR0FBRztRQUM5QlQsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFDTEMsU0FBUztZQUNYO1FBQ0Y7UUFDQTtJQUNGLENBQUM7SUFDRCxJQUFJRyxTQUFTQyxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1FBQ2hDVCxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNTSxhQUFhLE1BQU1aLE9BQU9hLGdCQUFnQixDQUFDO1lBQy9DQyxPQUFPO1lBQ1BDLFFBQVFDLGVBQWVULFFBQVFFO1lBQy9CUSxhQUFhO1FBQ2Y7UUFFQWYsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFYyxRQUFRTixXQUFXTyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7UUFBQztJQUdqRSxFQUFFLE9BQU1oQixPQUFPO1FBQ2IsZ0VBQWdFO1FBQ2hFLElBQUlBLE1BQU1pQixRQUFRLEVBQUU7WUFDbEJDLFFBQVFsQixLQUFLLENBQUNBLE1BQU1pQixRQUFRLENBQUNuQixNQUFNLEVBQUVFLE1BQU1pQixRQUFRLENBQUNILElBQUk7WUFDeERqQixJQUFJQyxNQUFNLENBQUNFLE1BQU1pQixRQUFRLENBQUNuQixNQUFNLEVBQUVDLElBQUksQ0FBQ0MsTUFBTWlCLFFBQVEsQ0FBQ0gsSUFBSTtRQUM1RCxPQUFPO1lBQ0xJLFFBQVFsQixLQUFLLENBQUMsQ0FBQywrQkFBK0IsRUFBRUEsTUFBTUMsT0FBTyxDQUFDLENBQUM7WUFDL0RKLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ25CQyxPQUFPO29CQUNMQyxTQUFTO2dCQUNYO1lBQ0Y7UUFDRixDQUFDO0lBRUg7QUFFRixDQUFDO0FBRUQsU0FBU1UsZUFBZVQsTUFBTSxFQUFFRSxRQUFRLEVBQUU7SUFDeEMsTUFBTWUsY0FDSmpCLE1BQU0sQ0FBQyxFQUFFLENBQUNrQixXQUFXLEtBQUtsQixPQUFPbUIsS0FBSyxDQUFDLEdBQUdDLFdBQVc7SUFDdkQsTUFBTUMsV0FBV25CO0lBQ2pCLE9BQU8sQ0FBQyxHQUFHLEVBQUVlLFlBQVksc0JBQXNCLEVBQUVJLFNBQVMsQ0FBQztBQUU3RCIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbi8va2V5IHNrLTFqNEZPSDIwOEpNMUEzYnRyNFY5VDNCbGJrRkp0S0NqazRMT0hFRHNTVTZ5MEZZM1xuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbn0pO1xuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGlmICghY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBtZXNzYWdlOiBcIk9wZW5BSSBBUEkga2V5IG5vdCBjb25maWd1cmVkLCBwbGVhc2UgZm9sbG93IGluc3RydWN0aW9ucyBpbiBSRUFETUUubWRcIixcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBhbmltYWwgPSByZXEuYm9keS5hbmltYWwgfHwgJyc7XG4gIGNvbnN0IFF1ZXN0aW9uID0gcmVxLmJvZHkuUXVlc3Rpb24gfHwgJyc7XG4gIC8vY29uc29sZS5sb2coYW5pbWFsKTtcbiAgLy9jb25zb2xlLmxvZyhhbmltYWwudHJpbSgpLmxlbmd0aCk7XG4gIC8vY29uc29sZS5sb2coUXVlc3Rpb24pO1xuICBpZiAoYW5pbWFsLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIENoYXJhY3RlclwiLFxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoUXVlc3Rpb24udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgUXVlc3Rpb25cIixcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXG4gICAgICBwcm9tcHQ6IGdlbmVyYXRlUHJvbXB0KGFuaW1hbCwgUXVlc3Rpb24pLFxuICAgICAgdGVtcGVyYXR1cmU6IDAuMixcbiAgICB9KTtcbiAgICBcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dCB9KTtcbiAgICBcbiAgICBcbiAgfSBjYXRjaChlcnJvcikge1xuICAgIC8vIENvbnNpZGVyIGFkanVzdGluZyB0aGUgZXJyb3IgaGFuZGxpbmcgbG9naWMgZm9yIHlvdXIgdXNlIGNhc2VcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgIHJlcy5zdGF0dXMoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKS5qc29uKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aXRoIE9wZW5BSSBBUEkgcmVxdWVzdDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgeW91ciByZXF1ZXN0LicsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgXG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvbXB0KGFuaW1hbCwgUXVlc3Rpb24pIHtcbiAgY29uc3QgSFBjaGFyYWN0ZXIgPVxuICAgIGFuaW1hbFswXS50b1VwcGVyQ2FzZSgpICsgYW5pbWFsLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IHF1ZXN0aW9uID0gUXVlc3Rpb247XG4gIHJldHVybiBgQXMgJHtIUGNoYXJhY3Rlcn0gaG93IHdvdWxkIHlvdSBhbnN3ZXIgJHtxdWVzdGlvbn1gIFxuICBcbn1cblxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsImFuaW1hbCIsImJvZHkiLCJRdWVzdGlvbiIsInRyaW0iLCJsZW5ndGgiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwiZ2VuZXJhdGVQcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsInJlc3VsdCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsInJlc3BvbnNlIiwiY29uc29sZSIsIkhQY2hhcmFjdGVyIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwicXVlc3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();