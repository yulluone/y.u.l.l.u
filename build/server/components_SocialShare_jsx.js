"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_SocialShare_jsx";
exports.ids = ["components_SocialShare_jsx"];
exports.modules = {

/***/ "./components/SocialShare.jsx":
/*!************************************!*\
  !*** ./components/SocialShare.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-share */ \"next-share\");\n/* harmony import */ var next_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_share__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst SocialShare = (props)=>{\n    const { className , url , quote , round =false , size =32 , ...rest } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(\"flex items-center space-x-2 pt-6 md:flex-col md:space-x-0 md:space-y-2\", className),\n        ...rest,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden sm:block md:mb-4 md:-rotate-90\",\n                children: \"Sharing\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden h-px w-6 bg-white sm:block md:h-6 md:w-px\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.FacebookShareButton, {\n                url: url,\n                quote: quote,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.FacebookIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.TwitterShareButton, {\n                url: url,\n                title: quote,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.TwitterIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.LinkedinShareButton, {\n                url: url,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.LinkedinIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.WhatsappShareButton, {\n                url: url,\n                title: quote,\n                separator: \":: \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.WhatsappIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.PocketShareButton, {\n                url: url,\n                title: \"Next Share\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.PocketIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.EmailShareButton, {\n                url: url,\n                subject: quote,\n                body: \"body\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_share__WEBPACK_IMPORTED_MODULE_2__.EmailIcon, {\n                    size: size,\n                    round: round\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HomePC\\\\Desktop\\\\Code\\\\y.u.l.l.u\\\\components\\\\SocialShare.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialShare);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NvY2lhbFNoYXJlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQWNWO0FBRW5CLE1BQU1hLGNBQWMsQ0FBQ0MsUUFBVTtJQUM3QixNQUFNLEVBQUVDLFVBQVMsRUFBRUMsSUFBRyxFQUFFQyxNQUFLLEVBQUVDLE9BQVEsS0FBSyxHQUFFQyxNQUFPLEdBQUUsRUFBRSxHQUFHQyxNQUFNLEdBQUdOO0lBRXJFLHFCQUNFLDhEQUFDTztRQUNDTixXQUFXZiwyQ0FBVUEsQ0FDbkIsMEVBQ0FlO1FBRUQsR0FBR0ssSUFBSTs7MEJBRVIsOERBQUNDO2dCQUFJTixXQUFVOzBCQUF3Qzs7Ozs7OzBCQUN2RCw4REFBQ007Z0JBQUlOLFdBQVU7Ozs7OzswQkFDZiw4REFBQ2QsMkRBQW1CQTtnQkFBQ2UsS0FBS0E7Z0JBQUtDLE9BQU9BOzBCQUNwQyw0RUFBQ2Ysb0RBQVlBO29CQUFDaUIsTUFBTUE7b0JBQU1ELE9BQU9BOzs7Ozs7Ozs7OzswQkFFbkMsOERBQUNmLDBEQUFrQkE7Z0JBQUNhLEtBQUtBO2dCQUFLTSxPQUFPTDswQkFDbkMsNEVBQUNiLG1EQUFXQTtvQkFBQ2UsTUFBTUE7b0JBQU1ELE9BQU9BOzs7Ozs7Ozs7OzswQkFFbEMsOERBQUNiLDJEQUFtQkE7Z0JBQUNXLEtBQUtBOzBCQUN4Qiw0RUFBQ1Ysb0RBQVlBO29CQUFDYSxNQUFNQTtvQkFBTUQsT0FBT0E7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ1QsMkRBQW1CQTtnQkFBQ08sS0FBS0E7Z0JBQUtNLE9BQU9MO2dCQUFPTSxXQUFVOzBCQUNyRCw0RUFBQ2Isb0RBQVlBO29CQUFDUyxNQUFNQTtvQkFBTUQsT0FBT0E7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ1AseURBQWlCQTtnQkFBQ0ssS0FBS0E7Z0JBQUtNLE9BQU87MEJBQ2xDLDRFQUFDVixrREFBVUE7b0JBQUNPLE1BQU1BO29CQUFNRCxPQUFPQTs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDWCx3REFBZ0JBO2dCQUFDUyxLQUFLQTtnQkFBS1EsU0FBU1A7Z0JBQU9RLE1BQUs7MEJBQy9DLDRFQUFDakIsaURBQVNBO29CQUFDVyxNQUFNQTtvQkFBTUQsT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO0FBRUEsaUVBQWVMLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRoZW1lLWVkZ2Vmb2xpby8uL2NvbXBvbmVudHMvU29jaWFsU2hhcmUuanN4PzUwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xzeCdcclxuaW1wb3J0IHtcclxuICBGYWNlYm9va1NoYXJlQnV0dG9uLFxyXG4gIEZhY2Vib29rSWNvbixcclxuICBUd2l0dGVyU2hhcmVCdXR0b24sXHJcbiAgVHdpdHRlckljb24sXHJcbiAgTGlua2VkaW5TaGFyZUJ1dHRvbixcclxuICBMaW5rZWRpbkljb24sXHJcbiAgRW1haWxTaGFyZUJ1dHRvbixcclxuICBFbWFpbEljb24sXHJcbiAgV2hhdHNhcHBTaGFyZUJ1dHRvbixcclxuICBXaGF0c2FwcEljb24sXHJcbiAgUG9ja2V0U2hhcmVCdXR0b24sXHJcbiAgUG9ja2V0SWNvbixcclxufSBmcm9tICduZXh0LXNoYXJlJ1xyXG5cclxuY29uc3QgU29jaWFsU2hhcmUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgdXJsLCBxdW90ZSwgcm91bmQgPSBmYWxzZSwgc2l6ZSA9IDMyLCAuLi5yZXN0IH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBwdC02IG1kOmZsZXgtY29sIG1kOnNwYWNlLXgtMCBtZDpzcGFjZS15LTInLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206YmxvY2sgbWQ6bWItNCBtZDotcm90YXRlLTkwXCI+U2hhcmluZzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBoLXB4IHctNiBiZy13aGl0ZSBzbTpibG9jayBtZDpoLTYgbWQ6dy1weFwiPjwvZGl2PlxyXG4gICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbiB1cmw9e3VybH0gcXVvdGU9e3F1b3RlfT5cclxuICAgICAgICA8RmFjZWJvb2tJY29uIHNpemU9e3NpemV9IHJvdW5kPXtyb3VuZH0gLz5cclxuICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxyXG4gICAgICA8VHdpdHRlclNoYXJlQnV0dG9uIHVybD17dXJsfSB0aXRsZT17cXVvdGV9PlxyXG4gICAgICAgIDxUd2l0dGVySWNvbiBzaXplPXtzaXplfSByb3VuZD17cm91bmR9IC8+XHJcbiAgICAgIDwvVHdpdHRlclNoYXJlQnV0dG9uPlxyXG4gICAgICA8TGlua2VkaW5TaGFyZUJ1dHRvbiB1cmw9e3VybH0+XHJcbiAgICAgICAgPExpbmtlZGluSWNvbiBzaXplPXtzaXplfSByb3VuZD17cm91bmR9IC8+XHJcbiAgICAgIDwvTGlua2VkaW5TaGFyZUJ1dHRvbj5cclxuICAgICAgPFdoYXRzYXBwU2hhcmVCdXR0b24gdXJsPXt1cmx9IHRpdGxlPXtxdW90ZX0gc2VwYXJhdG9yPVwiOjogXCI+XHJcbiAgICAgICAgPFdoYXRzYXBwSWNvbiBzaXplPXtzaXplfSByb3VuZD17cm91bmR9IC8+XHJcbiAgICAgIDwvV2hhdHNhcHBTaGFyZUJ1dHRvbj5cclxuICAgICAgPFBvY2tldFNoYXJlQnV0dG9uIHVybD17dXJsfSB0aXRsZT17J05leHQgU2hhcmUnfT5cclxuICAgICAgICA8UG9ja2V0SWNvbiBzaXplPXtzaXplfSByb3VuZD17cm91bmR9IC8+XHJcbiAgICAgIDwvUG9ja2V0U2hhcmVCdXR0b24+XHJcbiAgICAgIDxFbWFpbFNoYXJlQnV0dG9uIHVybD17dXJsfSBzdWJqZWN0PXtxdW90ZX0gYm9keT1cImJvZHlcIj5cclxuICAgICAgICA8RW1haWxJY29uIHNpemU9e3NpemV9IHJvdW5kPXtyb3VuZH0gLz5cclxuICAgICAgPC9FbWFpbFNoYXJlQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxTaGFyZVxyXG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsIkZhY2Vib29rU2hhcmVCdXR0b24iLCJGYWNlYm9va0ljb24iLCJUd2l0dGVyU2hhcmVCdXR0b24iLCJUd2l0dGVySWNvbiIsIkxpbmtlZGluU2hhcmVCdXR0b24iLCJMaW5rZWRpbkljb24iLCJFbWFpbFNoYXJlQnV0dG9uIiwiRW1haWxJY29uIiwiV2hhdHNhcHBTaGFyZUJ1dHRvbiIsIldoYXRzYXBwSWNvbiIsIlBvY2tldFNoYXJlQnV0dG9uIiwiUG9ja2V0SWNvbiIsIlNvY2lhbFNoYXJlIiwicHJvcHMiLCJjbGFzc05hbWUiLCJ1cmwiLCJxdW90ZSIsInJvdW5kIiwic2l6ZSIsInJlc3QiLCJkaXYiLCJ0aXRsZSIsInNlcGFyYXRvciIsInN1YmplY3QiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SocialShare.jsx\n");

/***/ })

};
;