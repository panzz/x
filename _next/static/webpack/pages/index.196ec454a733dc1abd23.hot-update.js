webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/FileManager/IconsView.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/FileManager/IconsView.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".IconsView_directoryIcons__33Nwp {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: calc(100% - 30px);\\n  padding: 5px 0;\\n}\\n.IconsView_directoryIcons__33Nwp ol {\\n  display: flex;\\n  align-content: flex-start;\\n  flex-flow: column wrap;\\n  height: 100%;\\n}\\n.IconsView_directoryIcons__33Nwp ol li {\\n  font-size: 12.5px;\\n  z-index: 1100;\\n  display: flex;\\n  width: 77px;\\n  min-height: 72px;\\n  max-height: 96px;\\n  margin: 0 0 15px 0;\\n  color: #e1e1e1;\\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 3px black, 0 1px 3px black;\\n  place-content: space-evenly;\\n  place-items: center;\\n}\\n.IconsView_directoryIcons__33Nwp ol li:last-child {\\n  margin-bottom: unset;\\n}\\n.IconsView_directoryIcons__33Nwp ol li:hover {\\n  outline: 1px solid rgba(200, 200, 200, 0.15);\\n  outline-offset: -2px;\\n  background-color: rgba(200, 200, 200, 0.15);\\n}\\n.IconsView_directoryIcons__33Nwp ol li:focus {\\n  outline: 1px dotted rgba(200, 200, 200, 0.25);\\n  outline-offset: -2px;\\n  background-color: rgba(200, 200, 200, 0.25);\\n}\\n.IconsView_directoryIcons__33Nwp ol li:focus:hover {\\n  outline-style: solid;\\n  background-color: rgba(200, 200, 200, 0.35);\\n}\\n.IconsView_directoryIcons__33Nwp ol li figure {\\n  margin: 5px 0;\\n  text-align: center;\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n.IconsView_directoryIcons__33Nwp ol li figure img {\\n  width: 42px;\\n  height: 42px;\\n}\\n.IconsView_directoryIcons__33Nwp ol li figure figcaption {\\n  overflow: hidden;\\n  width: 75px;\\n  white-space: pre-line;\\n  letter-spacing: 0.1px;\\n  text-overflow: ellipsis;\\n  -webkit-line-clamp: 2;\\n}\\n.IconsView_directoryIcons__33Nwp ol li svg {\\n  width: 44px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://IconsView.module.scss\"],\"names\":[],\"mappings\":\"AAUA;EALE,eAAA;EACA,MAAA;EACA,OAAA;EAMA,WAAA;EACA,yBAAA;EACA,cAAA;AARF;AAUE;EACE,aAAA;EACA,yBAAA;EACA,sBAAA;EAEA,YAAA;AATJ;AAWI;EACE,iBAAA;EAEA,aAAA;EAEA,aAAA;EAEA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EAEA,cAAA;EACA,uKAAA;EAEA,2BAAA;EACA,mBAAA;AAdN;AAgBM;EACE,oBAAA;AAdR;AAiBM;EACE,4CAAA;EAKA,oBAAA;EACA,2CAAA;AAnBR;AAyBM;EACE,6CAAA;EAKA,oBAAA;EACA,2CAAA;AA3BR;AAgCQ;EACE,oBAAA;EACA,2CAAA;AA9BV;AAqCM;EACE,aAAA;EAEA,kBAAA;EACA,mBAAA;EACA,uBAAA;AApCR;AAsCQ;EACE,WAAA;EACA,YAAA;AApCV;AAuCQ;EACE,gBAAA;EACA,WAAA;EAEA,qBAAA;EACA,qBAAA;EACA,uBAAA;EAEA,qBAAA;AAvCV;AA2CM;EACE,WAAA;AAzCR\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n@import '@/styles/variables';\\n\\n@mixin positionTopLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n.directoryIcons {\\n  @include positionTopLeft;\\n\\n  width: 100%;\\n  height: calc(100% - #{map-get($taskbar, height)});\\n  padding: map-get($icons, padding) 0;\\n\\n  ol {\\n    display: flex;\\n    align-content: flex-start;\\n    flex-flow: column wrap;\\n\\n    height: 100%;\\n\\n    li {\\n      font-size: map-get($icon, font-size);\\n\\n      z-index: map-get($zIndex, icons);\\n\\n      display: flex;\\n\\n      width: map-get($icon, width);\\n      min-height: map-get($icon, min-height);\\n      max-height: map-get($icon, max-height);\\n      margin: 0 0 (map-get($icons, padding) * 3) 0;\\n\\n      color: map-get($icon, text-color);\\n      text-shadow: map-get($icon, text-shadow);\\n\\n      place-content: space-evenly;\\n      place-items: center;\\n\\n      &:last-child {\\n        margin-bottom: unset;\\n      }\\n\\n      &:hover {\\n        outline: 1px solid\\n          rgba(\\n            map-get($icon, highlight-color),\\n            map-get($icon, hover-bg-opacity)\\n          );\\n        outline-offset: -2px;\\n        background-color: rgba(\\n          map-get($icon, highlight-color),\\n          map-get($icon, hover-bg-opacity)\\n        );\\n      }\\n\\n      &:focus {\\n        outline: 1px dotted\\n          rgba(\\n            map-get($icon, highlight-color),\\n            map-get($icon, focus-bg-opacity)\\n          );\\n        outline-offset: -2px;\\n        background-color: rgba(\\n          map-get($icon, highlight-color),\\n          map-get($icon, focus-bg-opacity)\\n        );\\n\\n        &:hover {\\n          outline-style: solid;\\n          background-color: rgba(\\n            map-get($icon, highlight-color),\\n            map-get($icon, focus-hover-bg-opacity)\\n          );\\n        }\\n      }\\n\\n      figure {\\n        margin: 5px 0;\\n\\n        text-align: center;\\n        white-space: nowrap;\\n        text-overflow: ellipsis;\\n\\n        img {\\n          width: 42px;\\n          height: 42px;\\n        }\\n\\n        figcaption {\\n          overflow: hidden;\\n          width: 75px;\\n\\n          white-space: pre-line;\\n          letter-spacing: 0.1px;\\n          text-overflow: ellipsis;\\n\\n          -webkit-line-clamp: 2;\\n        }\\n      }\\n\\n      svg {\\n        width: map-get($icon, svg-width);\\n      }\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"directoryIcons\": \"IconsView_directoryIcons__33Nwp\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9GaWxlTWFuYWdlci9JY29uc1ZpZXcubW9kdWxlLnNjc3M/NDM1YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMscUNBQXFDLG9CQUFvQixXQUFXLFlBQVksZ0JBQWdCLDhCQUE4QixtQkFBbUIsR0FBRyx1Q0FBdUMsa0JBQWtCLDhCQUE4QiwyQkFBMkIsaUJBQWlCLEdBQUcsMENBQTBDLHNCQUFzQixrQkFBa0Isa0JBQWtCLGdCQUFnQixxQkFBcUIscUJBQXFCLHVCQUF1QixtQkFBbUIsNEtBQTRLLGdDQUFnQyx3QkFBd0IsR0FBRyxxREFBcUQseUJBQXlCLEdBQUcsZ0RBQWdELGlEQUFpRCx5QkFBeUIsZ0RBQWdELEdBQUcsZ0RBQWdELGtEQUFrRCx5QkFBeUIsZ0RBQWdELEdBQUcsc0RBQXNELHlCQUF5QixnREFBZ0QsR0FBRyxpREFBaUQsa0JBQWtCLHVCQUF1Qix3QkFBd0IsNEJBQTRCLEdBQUcscURBQXFELGdCQUFnQixpQkFBaUIsR0FBRyw0REFBNEQscUJBQXFCLGdCQUFnQiwwQkFBMEIsMEJBQTBCLDRCQUE0QiwwQkFBMEIsR0FBRyw4Q0FBOEMsZ0JBQWdCLEdBQUcsT0FBTyxzRkFBc0YsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsa0RBQWtELDRCQUE0QiwrQkFBK0IsNEJBQTRCLG9CQUFvQixXQUFXLFlBQVksR0FBRyxxQkFBcUIsNkJBQTZCLGtCQUFrQiwwQkFBMEIsMEJBQTBCLEVBQUUsd0NBQXdDLFVBQVUsb0JBQW9CLGdDQUFnQyw2QkFBNkIscUJBQXFCLFlBQVksNkNBQTZDLDJDQUEyQyx3QkFBd0IsdUNBQXVDLCtDQUErQywrQ0FBK0MscURBQXFELDRDQUE0QyxpREFBaUQsc0NBQXNDLDRCQUE0Qix3QkFBd0IsK0JBQStCLFNBQVMsbUJBQW1CLHVKQUF1SiwrQkFBK0IscUlBQXFJLFNBQVMsbUJBQW1CLHdKQUF3SiwrQkFBK0IscUlBQXFJLHFCQUFxQixpQ0FBaUMsbUpBQW1KLFdBQVcsU0FBUyxrQkFBa0Isd0JBQXdCLCtCQUErQiw4QkFBOEIsa0NBQWtDLGlCQUFpQix3QkFBd0IseUJBQXlCLFdBQVcsd0JBQXdCLDZCQUE2Qix3QkFBd0Isb0NBQW9DLGtDQUFrQyxvQ0FBb0Msb0NBQW9DLFdBQVcsU0FBUyxlQUFlLDJDQUEyQyxTQUFTLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUM1eko7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9TeXN0ZW0vRmlsZU1hbmFnZXIvSWNvbnNWaWV3Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkljb25zVmlld19kaXJlY3RvcnlJY29uc19fMzNOd3Age1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbn1cXG4uSWNvbnNWaWV3X2RpcmVjdG9yeUljb25zX18zM053cCBvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5JY29uc1ZpZXdfZGlyZWN0b3J5SWNvbnNfXzMzTndwIG9sIGxpIHtcXG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xcbiAgei1pbmRleDogMTEwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNzdweDtcXG4gIG1pbi1oZWlnaHQ6IDcycHg7XFxuICBtYXgtaGVpZ2h0OiA5NnB4O1xcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xcbiAgY29sb3I6ICNlMWUxZTE7XFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLCAwIDFweCAzcHggYmxhY2ssIDAgMXB4IDNweCBibGFjaztcXG4gIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5JY29uc1ZpZXdfZGlyZWN0b3J5SWNvbnNfXzMzTndwIG9sIGxpOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XFxufVxcbi5JY29uc1ZpZXdfZGlyZWN0b3J5SWNvbnNfXzMzTndwIG9sIGxpOmhvdmVyIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMTUpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMTUpO1xcbn1cXG4uSWNvbnNWaWV3X2RpcmVjdG9yeUljb25zX18zM053cCBvbCBsaTpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yNSk7XFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yNSk7XFxufVxcbi5JY29uc1ZpZXdfZGlyZWN0b3J5SWNvbnNfXzMzTndwIG9sIGxpOmZvY3VzOmhvdmVyIHtcXG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjM1KTtcXG59XFxuLkljb25zVmlld19kaXJlY3RvcnlJY29uc19fMzNOd3Agb2wgbGkgZmlndXJlIHtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5JY29uc1ZpZXdfZGlyZWN0b3J5SWNvbnNfXzMzTndwIG9sIGxpIGZpZ3VyZSBpbWcge1xcbiAgd2lkdGg6IDQycHg7XFxuICBoZWlnaHQ6IDQycHg7XFxufVxcbi5JY29uc1ZpZXdfZGlyZWN0b3J5SWNvbnNfXzMzTndwIG9sIGxpIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogNzVweDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xcbn1cXG4uSWNvbnNWaWV3X2RpcmVjdG9yeUljb25zX18zM053cCBvbCBsaSBzdmcge1xcbiAgd2lkdGg6IDQ0cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9JY29uc1ZpZXcubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBVUE7RUFMRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFNQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBUkY7QUFVRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtBQVRKO0FBV0k7RUFDRSxpQkFBQTtFQUVBLGFBQUE7RUFFQSxhQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSx1S0FBQTtFQUVBLDJCQUFBO0VBQ0EsbUJBQUE7QUFkTjtBQWdCTTtFQUNFLG9CQUFBO0FBZFI7QUFpQk07RUFDRSw0Q0FBQTtFQUtBLG9CQUFBO0VBQ0EsMkNBQUE7QUFuQlI7QUF5Qk07RUFDRSw2Q0FBQTtFQUtBLG9CQUFBO0VBQ0EsMkNBQUE7QUEzQlI7QUFnQ1E7RUFDRSxvQkFBQTtFQUNBLDJDQUFBO0FBOUJWO0FBcUNNO0VBQ0UsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXBDUjtBQXNDUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBcENWO0FBdUNRO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBRUEscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBRUEscUJBQUE7QUF2Q1Y7QUEyQ007RUFDRSxXQUFBO0FBekNSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ0Avc3R5bGVzL21hcHMnO1xcbkBpbXBvcnQgJ0Avc3R5bGVzL21peGlucyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvdmFyaWFibGVzJztcXG5cXG5AbWl4aW4gcG9zaXRpb25Ub3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5kaXJlY3RvcnlJY29ucyB7XFxuICBAaW5jbHVkZSBwb3NpdGlvblRvcExlZnQ7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3ttYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpfSk7XFxuICBwYWRkaW5nOiBtYXAtZ2V0KCRpY29ucywgcGFkZGluZykgMDtcXG5cXG4gIG9sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBsaSB7XFxuICAgICAgZm9udC1zaXplOiBtYXAtZ2V0KCRpY29uLCBmb250LXNpemUpO1xcblxcbiAgICAgIHotaW5kZXg6IG1hcC1nZXQoJHpJbmRleCwgaWNvbnMpO1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgd2lkdGg6IG1hcC1nZXQoJGljb24sIHdpZHRoKTtcXG4gICAgICBtaW4taGVpZ2h0OiBtYXAtZ2V0KCRpY29uLCBtaW4taGVpZ2h0KTtcXG4gICAgICBtYXgtaGVpZ2h0OiBtYXAtZ2V0KCRpY29uLCBtYXgtaGVpZ2h0KTtcXG4gICAgICBtYXJnaW46IDAgMCAobWFwLWdldCgkaWNvbnMsIHBhZGRpbmcpICogMykgMDtcXG5cXG4gICAgICBjb2xvcjogbWFwLWdldCgkaWNvbiwgdGV4dC1jb2xvcik7XFxuICAgICAgdGV4dC1zaGFkb3c6IG1hcC1nZXQoJGljb24sIHRleHQtc2hhZG93KTtcXG5cXG4gICAgICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XFxuICAgICAgfVxcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkXFxuICAgICAgICAgIHJnYmEoXFxuICAgICAgICAgICAgbWFwLWdldCgkaWNvbiwgaGlnaGxpZ2h0LWNvbG9yKSxcXG4gICAgICAgICAgICBtYXAtZ2V0KCRpY29uLCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgICAgICAgICApO1xcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcbiAgICAgICAgICBtYXAtZ2V0KCRpY29uLCBoaWdobGlnaHQtY29sb3IpLFxcbiAgICAgICAgICBtYXAtZ2V0KCRpY29uLCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgICAgICAgKTtcXG4gICAgICB9XFxuXFxuICAgICAgJjpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiAxcHggZG90dGVkXFxuICAgICAgICAgIHJnYmEoXFxuICAgICAgICAgICAgbWFwLWdldCgkaWNvbiwgaGlnaGxpZ2h0LWNvbG9yKSxcXG4gICAgICAgICAgICBtYXAtZ2V0KCRpY29uLCBmb2N1cy1iZy1vcGFjaXR5KVxcbiAgICAgICAgICApO1xcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcbiAgICAgICAgICBtYXAtZ2V0KCRpY29uLCBoaWdobGlnaHQtY29sb3IpLFxcbiAgICAgICAgICBtYXAtZ2V0KCRpY29uLCBmb2N1cy1iZy1vcGFjaXR5KVxcbiAgICAgICAgKTtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG4gICAgICAgICAgICBtYXAtZ2V0KCRpY29uLCBoaWdobGlnaHQtY29sb3IpLFxcbiAgICAgICAgICAgIG1hcC1nZXQoJGljb24sIGZvY3VzLWhvdmVyLWJnLW9wYWNpdHkpXFxuICAgICAgICAgICk7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIGZpZ3VyZSB7XFxuICAgICAgICBtYXJnaW46IDVweCAwO1xcblxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgd2lkdGg6IDQycHg7XFxuICAgICAgICAgIGhlaWdodDogNDJweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGZpZ2NhcHRpb24ge1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICB3aWR0aDogNzVweDtcXG5cXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XFxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIHN2ZyB7XFxuICAgICAgICB3aWR0aDogbWFwLWdldCgkaWNvbiwgc3ZnLXdpZHRoKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZGlyZWN0b3J5SWNvbnNcIjogXCJJY29uc1ZpZXdfZGlyZWN0b3J5SWNvbnNfXzMzTndwXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/FileManager/IconsView.module.scss\n");

/***/ })

})