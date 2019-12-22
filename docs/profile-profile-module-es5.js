(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
        /***/ "./node_modules/pug-loader/index.js!./src/app/profile/profile.component.pug": 
        /*!*************************************************************************!*\
          !*** ./node_modules/pug-loader!./src/app/profile/profile.component.pug ***!
          \*************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");
            function template(locals) { var pug_html = "", pug_mixins = {}, pug_interp; pug_html = pug_html + "\u003Cp\u003Eprofile works!\u003C\u002Fp\u003E"; ; return pug_html; }
            ;
            module.exports = template;
            /***/ 
        }),
        /***/ "./src/app/profile/profile.component.pug": 
        /*!***********************************************!*\
          !*** ./src/app/profile/profile.component.pug ***!
          \***********************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/profile/profile.component.pug */ "./node_modules/pug-loader/index.js!./src/app/profile/profile.component.pug");
            module.exports = (req['default'] || req).apply(req, []);
            /***/ 
        }),
        /***/ "./src/app/profile/profile.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/profile/profile.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/profile/profile.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/profile/profile.component.ts ***!
          \**********************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent() {
                }
                ProfileComponent.prototype.ngOnInit = function () {
                };
                return ProfileComponent;
            }());
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.pug */ "./src/app/profile/profile.component.pug")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
                })
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/profile/profile.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/profile/profile.module.ts ***!
          \*******************************************/
        /*! exports provided: ProfileModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function () { return ProfileModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
            var routes = [
                { path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] }
            ];
            var ProfileModule = /** @class */ (function () {
                function ProfileModule() {
                }
                return ProfileModule;
            }());
            ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
                    ]
                })
            ], ProfileModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=profile-profile-module-es2015.js.map
//# sourceMappingURL=profile-profile-module-es5.js.map
//# sourceMappingURL=profile-profile-module-es5.js.map