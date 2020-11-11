webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/motions.ts":
/*!**************************!*\
  !*** ./utils/motions.ts ***!
  \**************************/
/*! exports provided: desktopIconDragSettings, desktopIconMotionSettings, startMenuEntriesMotionSettings, taskbarEntriesMotionSettings, windowMotionSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconDragSettings\", function() { return desktopIconDragSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconMotionSettings\", function() { return desktopIconMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startMenuEntriesMotionSettings\", function() { return startMenuEntriesMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskbarEntriesMotionSettings\", function() { return taskbarEntriesMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windowMotionSettings\", function() { return windowMotionSettings; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar desktopIconDragSettings = {\n  dragElastic: 0.25,\n  dragTransition: {\n    bounceStiffness: 500,\n    bounceDamping: 15\n  },\n  dragMomentum: false\n};\nvar desktopIconMotionSettings = {\n  initial: {\n    opacity: 0,\n    y: -100\n  },\n  animate: {\n    opacity: 1,\n    y: 0\n  },\n  transition: {\n    y: {\n      type: 'spring',\n      onComplete: function onComplete(v) {\n        console.log('onComplete', v);\n      }\n    }\n  }\n};\nvar startMenuEntriesMotionSettings = {\n  initial: {\n    opacity: 0\n  },\n  animate: {\n    opacity: 1\n  }\n};\nvar taskbarEntriesMotionSettings = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  animate: {\n    opacity: 1,\n    x: 0\n  },\n  transition: {\n    x: {\n      type: 'spring'\n    }\n  },\n  exit: {\n    opacity: 0,\n    width: 0,\n    transition: {\n      duration: 0.3\n    },\n    x: -100\n  }\n};\nvar windowMotionSettings = function windowMotionSettings(_ref) {\n  var _ref$initialX = _ref.initialX,\n      initialX = _ref$initialX === void 0 ? 0 : _ref$initialX,\n      _ref$initialY = _ref.initialY,\n      initialY = _ref$initialY === void 0 ? 0 : _ref$initialY,\n      _ref$animation = _ref.animation,\n      animation = _ref$animation === void 0 ? 'start' : _ref$animation,\n      height = _ref.height,\n      width = _ref.width,\n      x = _ref.x,\n      y = _ref.y,\n      taskbarElement = _ref.taskbarElement,\n      launchElement = _ref.launchElement,\n      zIndex = _ref.zIndex;\n  var exitZIndex = _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"foregroundZindex\"] + 1;\n  var widthOffset = -Math.floor(width / 2);\n  var heightOffset = -Math.floor(height / 2);\n\n  var _getTargetCenterPosit = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_2__[\"getTargetCenterPosition\"])(taskbarElement),\n      _getTargetCenterPosit2 = _getTargetCenterPosit.x,\n      taskbarElementX = _getTargetCenterPosit2 === void 0 ? 0 : _getTargetCenterPosit2,\n      _getTargetCenterPosit3 = _getTargetCenterPosit.y,\n      taskbarElementY = _getTargetCenterPosit3 === void 0 ? 0 : _getTargetCenterPosit3;\n\n  var _getTargetCenterImage = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_2__[\"getTargetCenterImagePosition\"])(launchElement),\n      _getTargetCenterImage2 = _getTargetCenterImage.x,\n      launchElementX = _getTargetCenterImage2 === void 0 ? 0 : _getTargetCenterImage2,\n      _getTargetCenterImage3 = _getTargetCenterImage.y,\n      launchElementY = _getTargetCenterImage3 === void 0 ? 0 : _getTargetCenterImage3;\n\n  if (launchElementX === 0) {\n    launchElementX = window.innerWidth / 2;\n  }\n\n  if (launchElementY === 0) {\n    launchElementY = window.innerHeight / 2;\n  }\n\n  var baseTransform = {\n    scale: 0,\n    x: widthOffset + launchElementX,\n    y: heightOffset + launchElementY\n  };\n  var maximizedExitTransform = {\n    scale: 0,\n    x: -(window.innerWidth / 2) + launchElementX,\n    y: -(window.innerHeight / 2) + launchElementY\n  };\n  var animationVariants = {\n    start: {\n      scale: 1,\n      x: initialX,\n      y: initialY,\n      height: height,\n      width: width,\n      zIndex: zIndex\n    },\n    maximized: {\n      scale: 1,\n      x: initialX === x ? 0 : -x,\n      y: initialY === y ? 0 : -y,\n      height: window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"TASKBAR_HEIGHT\"],\n      width: '100vw',\n      zIndex: zIndex\n    },\n    minimized: {\n      scale: 0,\n      x: widthOffset + taskbarElementX,\n      y: heightOffset + taskbarElementY,\n      zIndex: exitZIndex\n    },\n    maxmin: {\n      scale: 0,\n      x: -(window.innerWidth / 2) + taskbarElementX,\n      y: -(window.innerHeight / 2) + taskbarElementY,\n      zIndex: exitZIndex\n    }\n  };\n  return {\n    initial: baseTransform,\n    exit: _objectSpread(_objectSpread({}, animation === 'maximized' ? maximizedExitTransform : baseTransform), {}, {\n      zIndex: exitZIndex\n    }),\n    animate: animationVariants[animation],\n    transition: {\n      duration: _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"]\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbW90aW9ucy50cz84MTUwIl0sIm5hbWVzIjpbImRlc2t0b3BJY29uRHJhZ1NldHRpbmdzIiwiZHJhZ0VsYXN0aWMiLCJkcmFnVHJhbnNpdGlvbiIsImJvdW5jZVN0aWZmbmVzcyIsImJvdW5jZURhbXBpbmciLCJkcmFnTW9tZW50dW0iLCJkZXNrdG9wSWNvbk1vdGlvblNldHRpbmdzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwib25Db21wbGV0ZSIsInYiLCJjb25zb2xlIiwibG9nIiwic3RhcnRNZW51RW50cmllc01vdGlvblNldHRpbmdzIiwidGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5ncyIsIngiLCJleGl0Iiwid2lkdGgiLCJkdXJhdGlvbiIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImFuaW1hdGlvbiIsImhlaWdodCIsInRhc2tiYXJFbGVtZW50IiwibGF1bmNoRWxlbWVudCIsInpJbmRleCIsImV4aXRaSW5kZXgiLCJmb3JlZ3JvdW5kWmluZGV4Iiwid2lkdGhPZmZzZXQiLCJNYXRoIiwiZmxvb3IiLCJoZWlnaHRPZmZzZXQiLCJnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbiIsInRhc2tiYXJFbGVtZW50WCIsInRhc2tiYXJFbGVtZW50WSIsImdldFRhcmdldENlbnRlckltYWdlUG9zaXRpb24iLCJsYXVuY2hFbGVtZW50WCIsImxhdW5jaEVsZW1lbnRZIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYmFzZVRyYW5zZm9ybSIsInNjYWxlIiwibWF4aW1pemVkRXhpdFRyYW5zZm9ybSIsImFuaW1hdGlvblZhcmlhbnRzIiwic3RhcnQiLCJtYXhpbWl6ZWQiLCJUQVNLQkFSX0hFSUdIVCIsIm1pbmltaXplZCIsIm1heG1pbiIsIk1BWElNSVpFX0FOSU1BVElPTl9TUEVFRF9JTl9TRUNPTkRT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LEVBQUVnQixNQUFNLENBQUNFLFdBQVAsR0FBcUJPLCtEQUpwQjtBQUtUL0IsV0FBSyxFQUFFLE9BTEU7QUFNVFMsWUFBTSxFQUFOQTtBQU5TLEtBVFQ7QUFpQkZ1QixhQUFTLEVBQUU7QUFDVE4sV0FBSyxFQUFFLENBREU7QUFFVDVCLE9BQUMsRUFBRWMsV0FBVyxHQUFHSyxlQUZSO0FBR1Q3QixPQUFDLEVBQUUyQixZQUFZLEdBQUdHLGVBSFQ7QUFJVFQsWUFBTSxFQUFFQztBQUpDLEtBakJUO0FBdUJGdUIsVUFBTSxFQUFFO0FBQ05QLFdBQUssRUFBRSxDQUREO0FBRU41QixPQUFDLEVBQUUsRUFBRXdCLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixDQUF0QixJQUEyQk4sZUFGeEI7QUFHTjdCLE9BQUMsRUFBRSxFQUFFa0MsTUFBTSxDQUFDRSxXQUFQLEdBQXFCLENBQXZCLElBQTRCTixlQUh6QjtBQUlOVCxZQUFNLEVBQUVDO0FBSkY7QUF2Qk4sR0FGSjtBQWlDQSxTQUFPO0FBQ0x4QixXQUFPLEVBQUV1QyxhQURKO0FBRUwxQixRQUFJLGtDQUNFTSxTQUFTLEtBQUssV0FBZCxHQUE0QnNCLHNCQUE1QixHQUFxREYsYUFEdkQ7QUFFRmhCLFlBQU0sRUFBRUM7QUFGTixNQUZDO0FBTUxyQixXQUFPLEVBQUV1QyxpQkFBaUIsQ0FBQ3ZCLFNBQUQsQ0FOckI7QUFPTGYsY0FBVSxFQUFFO0FBQ1ZXLGNBQVEsRUFBRWlDLG9GQUFtQ0E7QUFEbkM7QUFQUCxHQUFQO0FBV0QsQ0FuRk0iLCJmaWxlIjoiLi91dGlscy9tb3Rpb25zLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBBbmltYXRpb25Qcm9wcyxcbiAgVHJhbnNmb3JtUHJvcGVydGllc1xufSBmcm9tICdmcmFtZXItbW90aW9uL3R5cGVzL21vdGlvbi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IE1vdGlvblByb3BzLCBUYXJnZXRBbmRUcmFuc2l0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgdHlwZSB7IFdpbmRvd01vdGlvblNldHRpbmdzIH0gZnJvbSAnQC90eXBlcy91dGlscy9tb3Rpb24nO1xuXG5pbXBvcnQge1xuICBmb3JlZ3JvdW5kWmluZGV4LFxuICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyxcbiAgVEFTS0JBUl9IRUlHSFRcbn0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgZ2V0VGFyZ2V0Q2VudGVyUG9zaXRpb24sXG4gIGdldFRhcmdldENlbnRlckltYWdlUG9zaXRpb25cbn0gZnJvbSAnQC91dGlscy9lbGVtZW50cyc7XG5cbmV4cG9ydCBjb25zdCBkZXNrdG9wSWNvbkRyYWdTZXR0aW5ncyA9IHtcbiAgZHJhZ0VsYXN0aWM6IDAuMjUsXG4gIGRyYWdUcmFuc2l0aW9uOiB7IGJvdW5jZVN0aWZmbmVzczogNTAwLCBib3VuY2VEYW1waW5nOiAxNSB9LFxuICBkcmFnTW9tZW50dW06IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgZGVza3RvcEljb25Nb3Rpb25TZXR0aW5nczogTW90aW9uUHJvcHMgPSB7XG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogLTEwMCB9LFxuICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcbiAgdHJhbnNpdGlvbjogeyB5OiB7IHR5cGU6ICdzcHJpbmcnLCBvbkNvbXBsZXRlOiB2ID0+IHtcbiAgICBjb25zb2xlLmxvZygnb25Db21wbGV0ZScsIHYpO1xuICB9IH0gfVxufTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0TWVudUVudHJpZXNNb3Rpb25TZXR0aW5nczogTW90aW9uUHJvcHMgPSB7XG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCB9LFxuICBhbmltYXRlOiB7IG9wYWNpdHk6IDEgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRhc2tiYXJFbnRyaWVzTW90aW9uU2V0dGluZ3M6IE1vdGlvblByb3BzID0ge1xuICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfSxcbiAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB4OiAwIH0sXG4gIHRyYW5zaXRpb246IHsgeDogeyB0eXBlOiAnc3ByaW5nJyB9IH0sXG4gIGV4aXQ6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMyB9LFxuICAgIHg6IC0xMDBcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpbmRvd01vdGlvblNldHRpbmdzID0gKHtcbiAgaW5pdGlhbFggPSAwLFxuICBpbml0aWFsWSA9IDAsXG4gIGFuaW1hdGlvbiA9ICdzdGFydCcsXG4gIGhlaWdodCxcbiAgd2lkdGgsXG4gIHgsXG4gIHksXG4gIHRhc2tiYXJFbGVtZW50LFxuICBsYXVuY2hFbGVtZW50LFxuICB6SW5kZXhcbn06IFdpbmRvd01vdGlvblNldHRpbmdzKTogTW90aW9uUHJvcHMgPT4ge1xuICBjb25zdCBleGl0WkluZGV4ID0gZm9yZWdyb3VuZFppbmRleCArIDE7XG4gIGNvbnN0IHdpZHRoT2Zmc2V0ID0gLU1hdGguZmxvb3Iod2lkdGggLyAyKTtcbiAgY29uc3QgaGVpZ2h0T2Zmc2V0ID0gLU1hdGguZmxvb3IoaGVpZ2h0IC8gMik7XG4gIGNvbnN0IHtcbiAgICB4OiB0YXNrYmFyRWxlbWVudFggPSAwLFxuICAgIHk6IHRhc2tiYXJFbGVtZW50WSA9IDBcbiAgfSA9IGdldFRhcmdldENlbnRlclBvc2l0aW9uKHRhc2tiYXJFbGVtZW50KTtcbiAgbGV0IHtcbiAgICB4OiBsYXVuY2hFbGVtZW50WCA9IDAsXG4gICAgeTogbGF1bmNoRWxlbWVudFkgPSAwXG4gIH0gPSBnZXRUYXJnZXRDZW50ZXJJbWFnZVBvc2l0aW9uKGxhdW5jaEVsZW1lbnQpO1xuICBpZiAobGF1bmNoRWxlbWVudFggPT09IDApIHtcbiAgICBsYXVuY2hFbGVtZW50WCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgfVxuICBpZiAobGF1bmNoRWxlbWVudFkgPT09IDApIHtcbiAgICBsYXVuY2hFbGVtZW50WSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gIH1cbiAgY29uc3QgYmFzZVRyYW5zZm9ybTogVHJhbnNmb3JtUHJvcGVydGllcyA9IHtcbiAgICBzY2FsZTogMCxcbiAgICB4OiB3aWR0aE9mZnNldCArIGxhdW5jaEVsZW1lbnRYLFxuICAgIHk6IGhlaWdodE9mZnNldCArIGxhdW5jaEVsZW1lbnRZXG4gIH07XG4gIGNvbnN0IG1heGltaXplZEV4aXRUcmFuc2Zvcm06IFRyYW5zZm9ybVByb3BlcnRpZXMgPSB7XG4gICAgc2NhbGU6IDAsXG4gICAgeDogLSh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICsgbGF1bmNoRWxlbWVudFgsXG4gICAgeTogLSh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSArIGxhdW5jaEVsZW1lbnRZXG4gIH07XG4gIGNvbnN0IGFuaW1hdGlvblZhcmlhbnRzOiB7XG4gICAgW2tleTogc3RyaW5nXTogQW5pbWF0aW9uUHJvcHMgJiBUYXJnZXRBbmRUcmFuc2l0aW9uO1xuICB9ID0ge1xuICAgIHN0YXJ0OiB7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIHg6IGluaXRpYWxYLFxuICAgICAgeTogaW5pdGlhbFksXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIHpJbmRleFxuICAgIH0sXG4gICAgbWF4aW1pemVkOiB7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIHg6IGluaXRpYWxYID09PSB4ID8gMCA6IC14LFxuICAgICAgeTogaW5pdGlhbFkgPT09IHkgPyAwIDogLXksXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIFRBU0tCQVJfSEVJR0hULFxuICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICB6SW5kZXhcbiAgICB9LFxuICAgIG1pbmltaXplZDoge1xuICAgICAgc2NhbGU6IDAsXG4gICAgICB4OiB3aWR0aE9mZnNldCArIHRhc2tiYXJFbGVtZW50WCxcbiAgICAgIHk6IGhlaWdodE9mZnNldCArIHRhc2tiYXJFbGVtZW50WSxcbiAgICAgIHpJbmRleDogZXhpdFpJbmRleFxuICAgIH0sXG4gICAgbWF4bWluOiB7XG4gICAgICBzY2FsZTogMCxcbiAgICAgIHg6IC0od2luZG93LmlubmVyV2lkdGggLyAyKSArIHRhc2tiYXJFbGVtZW50WCxcbiAgICAgIHk6IC0od2luZG93LmlubmVySGVpZ2h0IC8gMikgKyB0YXNrYmFyRWxlbWVudFksXG4gICAgICB6SW5kZXg6IGV4aXRaSW5kZXhcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsOiBiYXNlVHJhbnNmb3JtLFxuICAgIGV4aXQ6IHtcbiAgICAgIC4uLihhbmltYXRpb24gPT09ICdtYXhpbWl6ZWQnID8gbWF4aW1pemVkRXhpdFRyYW5zZm9ybSA6IGJhc2VUcmFuc2Zvcm0pLFxuICAgICAgekluZGV4OiBleGl0WkluZGV4XG4gICAgfSxcbiAgICBhbmltYXRlOiBhbmltYXRpb25WYXJpYW50c1thbmltYXRpb25dLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EU1xuICAgIH1cbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/motions.ts\n");

/***/ })

})