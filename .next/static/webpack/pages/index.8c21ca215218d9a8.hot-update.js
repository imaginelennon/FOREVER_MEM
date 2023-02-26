"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [characterInput, setCharacterInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [questionInput, setQuestionInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    // added audio constant here\n    const [audio, setAudio] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"animal\": characterInput,\n                    \"Question\": questionInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(data.result);\n            setCharacterInput(\"\");\n            setQuestionInput(\"\");\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n            alert(error.message);\n        }\n        //fetching audio from voice.js\n        try {\n            const response1 = await fetch(\"/api/voice\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    result\n                })\n            });\n            const data1 = await response1.json();\n            if (response1.status !== 200) {\n                throw data1.error || new Error(\"Request failed with status \".concat(response1.status));\n            }\n            setAudio(data1.audio);\n        } catch (error1) {\n            console.log(error1);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"OpenAI Quickstart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/HP-logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/HP-logo.png\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)\n                    }, void 0, false, {\n                        fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Enter the Harry potter character\"\n                    }, void 0, false, {\n                        fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"animal\",\n                                placeholder: \"Full Name of the Character\",\n                                value: characterInput,\n                                onChange: (e)=>setCharacterInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"Question\",\n                                placeholder: \"Question\",\n                                value: questionInput,\n                                onChange: (k)=>setQuestionInput(k.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Talk to me\"\n                            }, void 0, false, {\n                                fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().result),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                        controls: true,\n                        src: \"/media/cc0-audio/t-rex-roar.mp3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/media/cc0-audio/t-rex-roar.mp3\"\n                        }, void 0, false, {\n                            fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyanksharma/FOREVER_MEM/pages/index.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Qt0gKrxfDRdjVD6z1bREV1zGg3c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDSTtBQUNPO0FBR3pCLFNBQVNHLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0osK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDSyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUNwQyw0QkFBNEI7SUFDNUIsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQTtJQUVsQyxlQUFlVyxTQUFTQyxLQUFLLEVBQUU7UUFDN0JBLE1BQU1DLGNBQWM7UUFDcEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxpQkFBaUI7Z0JBQzVDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRSxVQUFVakI7b0JBQWlCLFlBQVlFO2dCQUFhO1lBRTdFO1lBRUEsTUFBTWdCLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtZQUNoQyxJQUFJUixTQUFTUyxNQUFNLEtBQUssS0FBSztnQkFDM0IsTUFBTUYsS0FBS0csS0FBSyxJQUFJLElBQUlDLE1BQU0sOEJBQThDLE9BQWhCWCxTQUFTUyxNQUFNLEdBQUk7WUFDakYsQ0FBQztZQUVEZixVQUFVYSxLQUFLZCxNQUFNO1lBQ3JCSCxrQkFBa0I7WUFDbEJFLGlCQUFpQjtRQUVuQixFQUFFLE9BQU1rQixPQUFPO1lBQ2IsMkRBQTJEO1lBQzNERSxRQUFRRixLQUFLLENBQUNBO1lBQ2RHLE1BQU1ILE1BQU1JLE9BQU87UUFDckI7UUFDQSw4QkFBOEI7UUFDOUIsSUFBRztZQUNELE1BQU1kLFlBQVcsTUFBTUMsTUFBTSxjQUFjO2dCQUN6Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUNiO2dCQUFNO1lBRTlCO1lBQ0EsTUFBTWMsUUFBTyxNQUFNUCxVQUFTUSxJQUFJO1lBQ2hDLElBQUlSLFVBQVNTLE1BQU0sS0FBSyxLQUFLO2dCQUMzQixNQUFNRixNQUFLRyxLQUFLLElBQUksSUFBSUMsTUFBTSw4QkFBOEMsT0FBaEJYLFVBQVNTLE1BQU0sR0FBSTtZQUNqRixDQUFDO1lBQ0RiLFNBQVNXLE1BQUtaLEtBQUs7UUFFckIsRUFBQyxPQUFNZSxRQUFNO1lBQUNFLFFBQVFHLEdBQUcsQ0FBQ0w7UUFFMUI7SUFDRjtJQUdBLHFCQUNFLDhEQUFDTTs7MEJBQ0MsOERBQUMvQixrREFBSUE7O2tDQUNILDhEQUFDZ0M7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLQyxXQUFXbkMsK0RBQVc7O2tDQUMxQiw4REFBQ29DO3dCQUFJQyxLQUFJO3dCQUFlRixXQUFXbkMsK0RBQVc7Ozs7OztrQ0FDOUMsOERBQUN1QztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBSzlCLFVBQVVBOzswQ0FDZCw4REFBQytCO2dDQUNDQyxNQUFLO2dDQUNMQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxPQUFPM0M7Z0NBQ1A0QyxVQUFVLENBQUNDLElBQU01QyxrQkFBa0I0QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQ0FFbkQsOERBQUNKO2dDQUNDQyxNQUFLO2dDQUNMQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxPQUFPekM7Z0NBQ1AwQyxVQUFVLENBQUNHLElBQU01QyxpQkFBaUI0QyxFQUFFRCxNQUFNLENBQUNILEtBQUs7Ozs7OzswQ0FHbEQsOERBQUNKO2dDQUFNQyxNQUFLO2dDQUFTRyxPQUFNOzs7Ozs7Ozs7Ozs7a0NBRTdCLDhEQUFDaEI7d0JBQUlNLFdBQVduQyxpRUFBYTtrQ0FBR007Ozs7OztrQ0FDaEMsOERBQUNFO3dCQUNEMEMsUUFBUTt3QkFDUmIsS0FBSTtrQ0FDQSw0RUFBQ2M7NEJBQUVsQixNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sQixDQUFDO0dBOUZxQmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjaGFyYWN0ZXJJbnB1dCwgc2V0Q2hhcmFjdGVySW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtxdWVzdGlvbklucHV0LCBzZXRRdWVzdGlvbklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcbiAgLy8gYWRkZWQgYXVkaW8gY29uc3RhbnQgaGVyZVxuICBjb25zdCBbYXVkaW8sIHNldEF1ZGlvXSA9IHVzZVN0YXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcImFuaW1hbFwiOiBjaGFyYWN0ZXJJbnB1dCAsIFwiUXVlc3Rpb25cIjogcXVlc3Rpb25JbnB1dH0pLFxuICAgICAgICBcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IGRhdGEuZXJyb3IgfHwgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcbiAgICAgIHNldENoYXJhY3RlcklucHV0KFwiXCIpO1xuICAgICAgc2V0UXVlc3Rpb25JbnB1dChcIlwiKTtcbiAgICAgIFxuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIC8vIENvbnNpZGVyIGltcGxlbWVudGluZyB5b3VyIG93biBlcnJvciBoYW5kbGluZyBsb2dpYyBoZXJlXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgICAvL2ZldGNoaW5nIGF1ZGlvIGZyb20gdm9pY2UuanNcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS92b2ljZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3Jlc3VsdH0pLFxuICAgICAgICBcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICB0aHJvdyBkYXRhLmVycm9yIHx8IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgICBzZXRBdWRpbyhkYXRhLmF1ZGlvKTtcblxuICAgIH1jYXRjaChlcnJvcil7Y29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9wZW5BSSBRdWlja3N0YXJ0PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvSFAtbG9nby5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGltZyBzcmM9XCIvSFAtbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICA8aDM+RW50ZXIgdGhlIEhhcnJ5IHBvdHRlciBjaGFyYWN0ZXI8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImFuaW1hbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZSBvZiB0aGUgQ2hhcmFjdGVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtjaGFyYWN0ZXJJbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hhcmFjdGVySW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiUXVlc3Rpb25cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWVzdGlvblwiXG4gICAgICAgICAgICB2YWx1ZT17cXVlc3Rpb25JbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoaykgPT4gc2V0UXVlc3Rpb25JbnB1dChrLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlRhbGsgdG8gbWVcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fT57cmVzdWx0fTwvZGl2PlxuICAgICAgICA8YXVkaW9cbiAgICAgICAgY29udHJvbHNcbiAgICAgICAgc3JjPVwiL21lZGlhL2NjMC1hdWRpby90LXJleC1yb2FyLm1wM1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tZWRpYS9jYzAtYXVkaW8vdC1yZXgtcm9hci5tcDNcIj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9hdWRpbz5cblxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xuICB9XG4gIFxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJjaGFyYWN0ZXJJbnB1dCIsInNldENoYXJhY3RlcklucHV0IiwicXVlc3Rpb25JbnB1dCIsInNldFF1ZXN0aW9uSW5wdXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJhdWRpbyIsInNldEF1ZGlvIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJFcnJvciIsImNvbnNvbGUiLCJhbGVydCIsIm1lc3NhZ2UiLCJsb2ciLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImljb24iLCJoMyIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImsiLCJjb250cm9scyIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});