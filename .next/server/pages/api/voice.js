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
exports.id = "pages/api/voice";
exports.ids = ["pages/api/voice"];
exports.modules = {

/***/ "(api)/./pages/api/voice.js":
/*!****************************!*\
  !*** ./pages/api/voice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateAudio)\n/* harmony export */ });\nasync function generateAudio({ audio  }) {\n    try {\n        const finalAudio = await fetch(\"https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM\", {\n            method: \"POST\",\n            headers: {\n                \"accept\": \"audio/mpeg\",\n                \"xi-api-key\": \"37eae678e45f3059253f19abfdc1b013\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                text: {\n                    audio\n                },\n                voice_settings: {\n                    stability: 0,\n                    similarity_boost: 0\n                }\n            })\n        });\n        (response)=>response.blob();\n        console.log(\"success\");\n    } catch (error) {\n        console.log(error);\n    }\n    ;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdm9pY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLGNBQWMsRUFBQ0MsTUFBSyxFQUFDLEVBQUM7SUFDbEQsSUFBRztRQUNELE1BQU1DLGFBQVksTUFBTUMsTUFBTSxvRUFBb0U7WUFDaEdDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxVQUFVO2dCQUNWLGNBQWM7Z0JBQ2QsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJDLE1BQU07b0JBQUNSO2dCQUFLO2dCQUNaUyxnQkFBZ0I7b0JBQ2RDLFdBQVc7b0JBQ1hDLGtCQUFrQjtnQkFDdEI7WUFDRjtRQUNBO1FBQ0FDLENBQUFBLFdBQVlBLFNBQVNDLElBQUk7UUFDekJDLFFBQVFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsT0FBT0MsT0FBTztRQUFFRixRQUFRQyxHQUFHLENBQUNDO0lBQU07O0FBRXRDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL3ZvaWNlLmpzP2NiNDkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVBdWRpbyh7YXVkaW99KXtcbiAgdHJ5e1xuICAgIGNvbnN0IGZpbmFsQXVkaW89IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZWxldmVubGFicy5pby92MS90ZXh0LXRvLXNwZWVjaC8yMW0wMFRjbTRUbHZEcThpa1dBTVwiLCB7IFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJhY2NlcHRcIjogXCJhdWRpby9tcGVnXCIsXG4gICAgICAgIFwieGktYXBpLWtleVwiOiBcIjM3ZWFlNjc4ZTQ1ZjMwNTkyNTNmMTlhYmZkYzFiMDEzXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0ZXh0OiB7YXVkaW99LFxuICAgICAgICB2b2ljZV9zZXR0aW5nczoge1xuICAgICAgICAgIHN0YWJpbGl0eTogMCxcbiAgICAgICAgICBzaW1pbGFyaXR5X2Jvb3N0OiAwXG4gICAgICB9XG4gICAgfSkgXG4gICAgfSlcbiAgICByZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCk7XG4gICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyBjb25zb2xlLmxvZyhlcnJvcil9O1xuXG4gIH1cbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZUF1ZGlvIiwiYXVkaW8iLCJmaW5hbEF1ZGlvIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0Iiwidm9pY2Vfc2V0dGluZ3MiLCJzdGFiaWxpdHkiLCJzaW1pbGFyaXR5X2Jvb3N0IiwicmVzcG9uc2UiLCJibG9iIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/voice.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/voice.js"));
module.exports = __webpack_exports__;

})();