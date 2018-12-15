webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_attendance_attendance_component__ = __webpack_require__("../../../../../src/app/components/attendance/attendance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_countdown_timer__ = __webpack_require__("../../../../ngx-countdown-timer/ngx-countdown-timer.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_countdown_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ngx_countdown_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mobiscroll_angular_lite__ = __webpack_require__("../../../../@mobiscroll/angular-lite/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_takeattendance_takeattendance_component__ = __webpack_require__("../../../../../src/app/components/takeattendance/takeattendance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_analogical_countdown__ = __webpack_require__("../../../../ng2-analogical-countdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_genattendance_genattendance_component__ = __webpack_require__("../../../../../src/app/components/genattendance/genattendance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_members_members_component__ = __webpack_require__("../../../../../src/app/components/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_changepassword_changepassword_component__ = __webpack_require__("../../../../../src/app/components/changepassword/changepassword.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { Ng2GoogleChartsModule } from 'ng2-google-charts';








var app = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */] },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'attendance', component: __WEBPACK_IMPORTED_MODULE_12__components_attendance_attendance_component__["a" /* AttendanceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: "takeattendance", component: __WEBPACK_IMPORTED_MODULE_15__components_takeattendance_takeattendance_component__["a" /* TakeattendanceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: "genattendance", component: __WEBPACK_IMPORTED_MODULE_19__components_genattendance_genattendance_component__["a" /* GenattendanceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: "members", component: __WEBPACK_IMPORTED_MODULE_20__components_members_members_component__["a" /* MembersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: "changepassword", component: __WEBPACK_IMPORTED_MODULE_21__components_changepassword_changepassword_component__["a" /* ChangepasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_attendance_attendance_component__["a" /* AttendanceComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_takeattendance_takeattendance_component__["a" /* TakeattendanceComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_genattendance_genattendance_component__["a" /* GenattendanceComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_members_members_component__["a" /* MembersComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_changepassword_changepassword_component__["a" /* ChangepasswordComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(app),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_14__mobiscroll_angular_lite__["a" /* MbscModule */],
            //Ng2GoogleChartsModule,
            __WEBPACK_IMPORTED_MODULE_10_ngx_flash_messages__["a" /* FlashMessagesModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_countdown_timer__["CountdownTimerModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_analogical_countdown__["a" /* CountDownModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/attendance/attendance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/attendance/attendance.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t<!-- WRAPPER -->\n\t<div id=\"wrapper\" *ngIf =\"status ==1\">\n\t\t<!-- NAVBAR -->\n\t\t<nav class=\"navbar navbar-default navbar-fixed-top\">\n\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t\t<strong>GILGAL HOUSE MEDIA</strong>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<div class=\"navbar-btn\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn-toggle-fullwidth\"></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"navbar-form navbar-left\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t\n\t\t\t\t\t<div id=\"navbar-menu\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t\t<a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <span></span> <i class=\"icon-submenu lnr lnr-chevron-down\"></i></a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-user\"></i> <span>My Profile</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i> <span>Message</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-cog\"></i> <span>Settings</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-exit\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t\t\t<a class=\"update-pro\" href=\"https://www.themeineed.com/downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro\" title=\"Upgrade to Pro\" target=\"_blank\"><i class=\"fa fa-rocket\"></i> <span>UPGRADE TO PRO</span></a>\n\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t<!-- END NAVBAR -->\n\t\t<!-- LEFT SIDEBAR -->\n\t\t<div id=\"sidebar-nav\" class=\"sidebar\">\n\t\t\t<div class=\"sidebar-scroll\">\n\t\t\t\t\t<nav>\n\t\t\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/dashboard']\" class=\"\"><i class=\"lnr lnr-home\" ></i> <span>Dashboard</span></a></li>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/attendance']\" class=\"active\"><i class=\"lnr lnr-code\" ></i> <span>Attendance</span></a></li>\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/takeattendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Take Attendance</span></a></li>\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/genattendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Genattendance</span></a></li>\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/members']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Manage Members</span></a></li>\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/changepassword']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Change Password</span></a></li>\n\t\t\t\t\t\t\t<li><a href=\"\" (click)=\"logout()\" class=\"\"><i class=\"lnr lnr-cog\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- END LEFT SIDEBAR -->\n\t\t<!-- MAIN -->\n\t\t<div class=\"main\">\n\t\t\t<!-- MAIN CONTENT -->\n\t\t\t<div class=\"main-content\">\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<h3 class=\"page-title\">Attendance Section</h3>\n\t\t\t\t\t<ngx-flash-messages></ngx-flash-messages>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<!-- BASIC TABLE -->\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Create Attendance Session</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n                    <select class=\"form-control\" [(ngModel)]='serviceday' name=\"serviceday\">\n                        <option value=\"\">Select Service Day</option>\n                        <option value=\"sunday\">Sunday</option>\n                        <option value=\"monday\">Monday</option>\n\t\t\t\t\t\t<option value=\"tuesday\">Tuesday</option>\n\t\t\t\t\t\t<option value=\"wednesday\">Wednesday</option>\n\t\t\t\t\t\t<option value=\"thursday\">Thursday</option>\n\t\t\t\t\t\t<option value=\"friday\">Friday</option>\n\t\t\t\t\t\t<option value=\"saturday\">Saturday</option>\n                      \n                      </select><br>\n                      <input type=\"date\" class=\"form-control\" placeholder=\"Enter Date\"[(ngModel)]='servicedate' name=\"servicedate\"><br>\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"createattendance()\">Start Attendance</button><br><br>\n\t\t\t\t\t  <h3 class=\"panel-title\">Active Attendance Session</h3><br>\n\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Service Day</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Service Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Stop Attendance</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor = \"let items of attendance\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{items.service_day}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{items.service_date}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<td><button type=\"button\" class=\"btn btn-primary\" (click)=\"stop(items._id)\">Stop Attendance</button></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END BASIC TABLE -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<!-- TABLE NO PADDING -->\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Manage Attendance Taken</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel-body no-padding\">\n\t\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>S/N</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Service Day</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Service Date</th>\n                        <th>Start Attendance</th>\n                        <th>Delete Attendance</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor = \"let items of attendance2;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{items.service_day}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{items.service_date}}</td>\n                        <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"start(items.service_day,items.service_date)\">Start</button></td>\n                        <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"delete(items.service_day,items.service_date,items._id)\">Delete</button></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END TABLE NO PADDING -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<!-- TABLE STRIPED -->\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">View Present Students For a Service </h3>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t<div class=\"panel-body\" >\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]='serviceatt' name=\"serviceatt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"items\"  *ngFor = \"let items of attendance4\">{{items.service_day}} {{items.service_date}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t\t  </select>\n\t\t\t\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"getattendance3()\">View</button>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>S/N</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>RegNo</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>FirstName</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>SecondNames</th>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor = \"let items of attendance5;let i = index \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{items.regno}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{items.firstname}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{items.secondname}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</table>\n              \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- END TABLE STRIPED -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<!-- TABLE HOVER -->\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">View Attendance For a Member </h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\" >\n\t\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]='studentregno' name=\"studentregno\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"items.regno\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor = \"let items of student\">{{items.firstname}} {{items.secondname}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t\t\t  </select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)= \"getmemberattendance()\">View</button>\n\t\t\t\t\t\t\t\t\t</form>\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>S/N</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Service Day</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Service Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor = \"let items of attendance3;let i =index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a>{{items.service_day}}</a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{items.service_date}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"{{items.class}}\">{{items.service_status}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- END TABLE HOVER -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<!-- BORDERED TABLE -->\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- END BORDERED TABLE -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- END MAIN CONTENT -->\n\t\t</div>\n\t\t<!-- END MAIN -->\n\t\t<div class=\"clearfix\"></div>\n\t\t<footer>\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<p class=\"copyright\">&copy; 2018 . SteveInc All Rights Reserved.</p>\n\t\t\t\t</div>\n\t\t\t</footer>\n\t</div>\n\n\t\n\t\n\n \n\t<!-- END WRAPPER -->\n\t<!-- Javascript -->\n\t<script src=\"assets/vendor/jquery/jquery.min.js\"></script>\n\t<script src=\"assets/vendor/bootstrap/js/bootstrap.min.js\"></script>\n\t<script src=\"assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js\"></script>\n\t<script src=\"assets/scripts/klorofil-common.js\"></script>\n\n\t"

/***/ }),

/***/ "../../../../../src/app/components/attendance/attendance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttendanceComponent = (function () {
    function AttendanceComponent(auth, flashMessagesService, router) {
        this.auth = auth;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    AttendanceComponent.prototype.ngOnInit = function () {
        this.getsession();
        this.gettotalattendance();
        this.getstudents();
        this.getattendance2();
        this.gettoken();
    };
    //function to create attendance 
    AttendanceComponent.prototype.createattendance = function () {
        var _this = this;
        var details = ({
            service_day: this.serviceday,
            service_date: this.servicedate,
            service_status: 1
        });
        //we validate all fields to see if theyve been filled
        if (!this.auth.validatecreateattendance(details)) {
            this.flashMessagesService.show('All fields are required ', {
                classes: ['alert', 'alert-danger'],
                timeout: 1000,
            });
        }
        else {
            this.auth.createattendance(details).subscribe(function (data) {
                if (data.success == true) {
                    _this.flashMessagesService.show(data.msg, {
                        classes: ['alert', 'alert-success'],
                        timeout: 1000,
                    });
                    _this.getsession();
                }
                if (data.success == false) {
                    _this.flashMessagesService.show(data.msg, {
                        classes: ['alert', 'alert-danger'],
                        timeout: 1000,
                    });
                }
            });
        }
    };
    //function to get all active session of attendance 
    AttendanceComponent.prototype.getsession = function () {
        var _this = this;
        this.auth.getsession().subscribe(function (data) {
            _this.attendance = data;
        });
    };
    AttendanceComponent.prototype.stop = function (id) {
        var _this = this;
        var details = ({
            id: id
        });
        this.auth.stop(details).subscribe(function (data) {
            if (data.success == true) {
                _this.flashMessagesService.show(data.msg, {
                    classes: ['alert', 'alert-success'],
                    timeout: 1000,
                });
                _this.getsession();
            }
        });
        this.gettotalattendance();
    };
    AttendanceComponent.prototype.gettotalattendance = function () {
        var _this = this;
        this.auth.gettotalattendance().subscribe(function (data) {
            _this.attendance2 = data;
        });
    };
    AttendanceComponent.prototype.start = function (day, date) {
        var _this = this;
        var details = ({
            service_day: day,
            service_date: date,
            service_status: 1
        });
        this.auth.startattendance(details).subscribe(function (data) {
            if (data.success == true) {
                _this.flashMessagesService.show(data.msg, {
                    classes: ['alert', 'alert-success'],
                    timeout: 1000,
                });
                _this.getsession();
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    classes: ['alert', 'alert-danger'],
                    timeout: 1000,
                });
            }
        });
    };
    //function to get all members on datanase 
    AttendanceComponent.prototype.getstudents = function () {
        var _this = this;
        this.auth.getstudents().subscribe(function (data) {
            _this.student = data;
        });
    };
    //fuction to get attendance ater supplying the regno of the student 
    AttendanceComponent.prototype.getmemberattendance = function () {
        var _this = this;
        var details = ({
            regno: this.studentregno
        });
        if (!this.auth.validateattendance) {
            this.flashMessagesService.show('Please Select A Member ', {
                classes: ['alert', 'alert-danger'],
                timeout: 1000,
            });
            return false;
        }
        else {
            this.auth.getmemberattendance(details).subscribe(function (data) {
                _this.attendance3 = data;
            });
        }
    };
    AttendanceComponent.prototype.getattendance2 = function () {
        var _this = this;
        this.auth.getattendance2().subscribe(function (data) {
            _this.attendance4 = data;
        });
    };
    //get atteendance per service 
    AttendanceComponent.prototype.getattendance3 = function () {
        var _this = this;
        var details = ({
            service_date: this.serviceatt.service_date,
        });
        this.auth.getattendance3(details).subscribe(function (data) {
            _this.attendance5 = data.present_student;
        });
    };
    AttendanceComponent.prototype.gettoken = function () {
        var _this = this;
        var token = localStorage.getItem("token");
        this.auth.submittoken(token).subscribe(function (data) {
            // //console.log(data.attendance[0].service_date)
            _this.status = data.status;
            ////console.log(this.user.attendance)
        });
    };
    AttendanceComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return false;
    };
    //function to delete 
    AttendanceComponent.prototype.delete = function (day, date, id) {
        var _this = this;
        var details = ({
            service_day: day,
            service_date: date,
            id: id
        });
        this.auth.delete(details).subscribe(function (data) {
            if (data.success == true) {
                _this.flashMessagesService.show(data.msg, {
                    classes: ['alert', 'alert-success'],
                    timeout: 1000,
                });
            }
            _this.gettotalattendance();
        });
    };
    AttendanceComponent.prototype.upload = function () {
        var _this = this;
        var details = ({
            service_date: this.serviceatt.service_date,
            service_day: this.serviceatt.service_day,
            service_status: 1
        });
        this.auth.getattendance3(details).subscribe(function (data) {
            _this.attendance5 = data.present_student;
            var details2 = ({
                service_date: _this.serviceatt.service_date,
                service_day: _this.serviceatt.service_day,
                service_status: 1,
                present_student: data.present_student
            });
            _this.auth.upload(details2).subscribe(function (data) {
                console.log(data);
            });
        });
    };
    return AttendanceComponent;
}());
AttendanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-attendance',
        template: __webpack_require__("../../../../../src/app/components/attendance/attendance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/attendance/attendance.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AttendanceComponent);

var _a, _b, _c;
//# sourceMappingURL=attendance.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/changepassword/changepassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/changepassword/changepassword.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t<!-- WRAPPER -->\n\t<div id=\"wrapper\">\n      <!-- NAVBAR -->\n      <nav class=\"navbar navbar-default navbar-fixed-top\">\n          <div class=\"brand\">\n              <strong>GILGAL HOUSE MEDIA</strong>\n            </div>\n          <div class=\"container-fluid\">\n            <div class=\"navbar-btn\">\n              <button type=\"button\" class=\"btn-toggle-fullwidth\"></button>\n            </div>\n            <form class=\"navbar-form navbar-left\">\n              <div class=\"input-group\">\n              \n                \n              </div>\n            </form>\n            \n            <div id=\"navbar-menu\">\n              <ul class=\"nav navbar-nav navbar-right\">\n              \n                \n                <li class=\"dropdown\">\n                  <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <span></span> <i class=\"icon-submenu lnr lnr-chevron-down\"></i></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\"><i class=\"lnr lnr-user\"></i> <span>My Profile</span></a></li>\n                    <li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i> <span>Message</span></a></li>\n                    <li><a href=\"#\"><i class=\"lnr lnr-cog\"></i> <span>Settings</span></a></li>\n                    <li><a href=\"#\"><i class=\"lnr lnr-exit\"></i> <span>Logout</span></a></li>\n                  </ul>\n                </li>\n                <!-- <li>\n                  <a class=\"update-pro\" href=\"https://www.themeineed.com/downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro\" title=\"Upgrade to Pro\" target=\"_blank\"><i class=\"fa fa-rocket\"></i> <span>UPGRADE TO PRO</span></a>\n                </li> -->\n              </ul>\n            </div>\n          </div>\n        </nav>\n      <!-- END NAVBAR -->\n      <!-- LEFT SIDEBAR -->\n      <div id=\"sidebar-nav\" class=\"sidebar\">\n        <div class=\"sidebar-scroll\">\n            <nav>\n              <ul class=\"nav\">\n                <li><a [routerLink] =\"['/dashboard']\" class=\"\"><i class=\"lnr lnr-home\" ></i> <span>Dashboard</span></a></li>\n                \n                <li><a [routerLink] =\"['/attendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Attendance</span></a></li>\n                <li><a [routerLink] =\"['/takeattendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Take Attendance</span></a></li>\n                <li><a [routerLink] =\"['/genattendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Genattendance</span></a></li>\n                <li><a [routerLink] =\"['/members']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Manage Members</span></a></li>\n                <li><a [routerLink] =\"['/changepassword']\" class=\"active\"><i class=\"lnr lnr-code\" ></i> <span>Change Password</span></a></li>\n                <li><a href=\"\" (click)=\"logout()\" class=\"\"><i class=\"lnr lnr-cog\"></i> <span>Logout</span></a></li>\n                \n                \n              </ul>\n              </nav>\n        </div>\n      </div>\n      <!-- END LEFT SIDEBAR -->\n      <!-- MAIN -->\n      <div class=\"main\">\n        <!-- MAIN CONTENT -->\n        <div class=\"main-content\">\n          <div class=\"container-fluid\">\n            <h3 class=\"page-title\">Change Password</h3>\n            <ngx-flash-messages></ngx-flash-messages>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <!-- BASIC TABLE -->\n                <div class=\"panel\">\n                  <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">Change Password</h3>\n                  </div>\n                  \n                  <div class=\"panel-body\">\n                     \n                      <div class=\"form-group\">\n                          <label for=\"signin-password\" class=\"control-label sr-only\">Registration Number</label>\n                          <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"password\" name=\"password\" value=\"\" placeholder=\"Password\">\n                        </div>\n                        <br>\n                        <div class=\"form-group\">\n                            <label for=\"signin-password\" class=\"control-label sr-only\">Registration Number</label>\n                            <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"npassword1\" name=\"npassword1\" value=\"\" placeholder=\"Enter New Password \">\n                          </div>\n                          <br>\n                          <div class=\"form-group\">\n                              <label for=\"signin-password\" class=\"control-label sr-only\">Registration Number</label>\n                              <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"npassword2\" name=\"npassword2\" value=\"\" placeholder=\"Enter New Password Again\">\n                            </div>\n                        \n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\" change()\">Change Password</button><br><br>\n             \n             \n                   \n                  </div>\n                </div>\n                <!-- END BASIC TABLE -->\n              </div>\n              \n            </div>\n            \n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <!-- BORDERED TABLE -->\n                \n                <!-- END BORDERED TABLE -->\n              </div>\n              \n            </div>\n          </div>\n        </div>\n        <!-- END MAIN CONTENT -->\n      </div>\n      <!-- END MAIN -->\n      <div class=\"clearfix\"></div>\n      <footer>\n          <div class=\"container-fluid\">\n            <p class=\"copyright\">&copy; 2018 . SteveInc All Rights Reserved.</p>\n          </div>\n        </footer>\n    </div>\n  \n    \n    \n  \n   \n    <!-- END WRAPPER -->\n    <!-- Javascript -->\n    <script src=\"assets/vendor/jquery/jquery.min.js\"></script>\n    <script src=\"assets/vendor/bootstrap/js/bootstrap.min.js\"></script>\n    <script src=\"assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js\"></script>\n    <script src=\"assets/scripts/klorofil-common.js\"></script>\n  \n    "

/***/ }),

/***/ "../../../../../src/app/components/changepassword/changepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangepasswordComponent = (function () {
    function ChangepasswordComponent(auth, flashMessagesService) {
        this.auth = auth;
        this.flashMessagesService = flashMessagesService;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.gettoken();
    };
    ChangepasswordComponent.prototype.change = function () {
        var _this = this;
        var details = ({
            password: this.password,
            npassword1: this.npassword1,
            npassword2: this.npassword2
        });
        var details1 = ({
            password: this.password,
            npassword: this.npassword1,
            regno: this.regno,
            id: this.id
        });
        console.log(details1);
        if (!this.auth.validatechange(details)) {
            this.flashMessagesService.show('All fields are required ', {
                classes: ['alert', 'alert-danger'],
                timeout: 1000,
            });
            return false;
        }
        else {
            //we compare the two password entered if they are the same 
            if (details.npassword1 == details.npassword2) {
                this.auth.changepassword(details1).subscribe(function (data) {
                    if (data.success == true) {
                        _this.flashMessagesService.show(data.msg, {
                            classes: ['alert', 'alert-success'],
                            timeout: 1000,
                        });
                        _this.password = null;
                        _this.npassword1 = null;
                        _this.npassword2 = null;
                    }
                    if (data.success == false) {
                        _this.flashMessagesService.show(data.msg, {
                            classes: ['alert', 'alert-danger'],
                            timeout: 1000,
                        });
                    }
                });
            }
            else {
                this.flashMessagesService.show(' Password Doesnt Match ', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 1000,
                });
            }
        }
    };
    ChangepasswordComponent.prototype.gettoken = function () {
        var _this = this;
        var token = localStorage.getItem("token");
        this.auth.submittoken(token).subscribe(function (data) {
            // //console.log(data.attendance[0].service_date)
            _this.regno = data.regno;
            _this.id = data._id;
            ////console.log(this.user.attendance)
        });
    };
    return ChangepasswordComponent;
}());
ChangepasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-changepassword',
        template: __webpack_require__("../../../../../src/app/components/changepassword/changepassword.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/changepassword/changepassword.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _b || Object])
], ChangepasswordComponent);

var _a, _b;
//# sourceMappingURL=changepassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"statuss == 1; then admin\"></div>\n                  <div *ngIf= \"statuss == 0; then member\"></div>\n                  <ng-template #admin>   \n\t<!-- WRAPPER -->\n\t<div id=\"wrapper\" *ngIf = \"user\">\n\t\t<!-- NAVBAR -->\n\t\t<nav class=\"navbar navbar-default navbar-fixed-top\">\n\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t\t<strong>GILGAL HOUSE MEDIA</strong>\n\t\t\t\t\t</div>\n\t\t\t<div class=\"container-fluid\">\n\n\n\t\t\t\t<div class=\"navbar-btn\">\n\t\t\t\t\t<button type=\"button\" class=\"btn-toggle-fullwidth\"></button>\n\t\t\t\t</div>\n\t\t\t\t<form class=\"navbar-form navbar-left\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t\n\t\t\t\t<div id=\"navbar-menu\">\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t<a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <span>{{user.firstname}} {{user.secondname}}</span> <i class=\"icon-submenu lnr lnr-chevron-down\"></i></a>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-user\"></i> <span>My Profile</span></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i> <span>Message</span></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-cog\"></i> <span>Settings</span></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-exit\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t\t<a class=\"update-pro\" href=\"https://www.themeineed.com/downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro\" title=\"Upgrade to Pro\" target=\"_blank\"><i class=\"fa fa-rocket\"></i> <span>UPGRADE TO PRO</span></a>\n\t\t\t\t\t\t</li> -->\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t\t<!-- END NAVBAR -->\n\t\t<!-- LEFT SIDEBAR -->\n\t\t<div id=\"sidebar-nav\" class=\"sidebar\">\n\t\t\t<div class=\"sidebar-scroll\">\n\t\t\t\t<nav>\n\t\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t\t<li><a [routerLink] =\"['/dashboard']\" class=\"active\"><i class=\"lnr lnr-home\" ></i> <span>Dashboard</span></a></li>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<li><a [routerLink] =\"['/attendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Attendance</span></a></li>\n\t\t\t\t\t\t<li><a [routerLink] =\"['/takeattendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Take Attendance</span></a></li>\n\t\t\t\t\t\t<li><a [routerLink] =\"['/genattendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Genattendance</span></a></li>\n\t\t\t\t\t\t<li><a [routerLink] =\"['/members']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Manage Members</span></a></li>\n\t\t\t\t\t\t<li><a [routerLink] =\"['/changepassword']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Change Password</span></a></li>\n\t\t\t\t\t\t<li><a href=\"\" (click)=\"logout()\" class=\"\"><i class=\"lnr lnr-cog\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- END LEFT SIDEBAR -->\n\t\t<!-- MAIN -->\n\t\t<div class=\"main\">\n\t\t\t<!-- MAIN CONTENT -->\n\t\t\t<div class=\"main-content\">\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<!-- OVERVIEW -->\n\t\t\t\t\t<div class=\"panel panel-headline\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">Attendance Overview</h3>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\"><i class=\"fa fa-download\"></i></span>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"number\">{{Total}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"title\">Total Attendance</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\"><i class=\"fa fa-shopping-bag\"></i></span>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"number\">{{absent}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"title\">Times Absent</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\"><i class=\"fa fa-eye\"></i></span>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"number\">{{Present}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"title\">Times Present</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\"><i class=\"fa fa-eye\"></i></span>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"number\">{{percentage}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"title\">Percentage</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- END OVERVIEW -->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<!-- RECENT PURCHASES -->\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Total Attendance For {{user.firstname}} {{user.secondname}} </h3>\n\t\t\t\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel-body no-padding\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Service Day</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Service Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor = \"let items of attendance3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a>{{items.service_day}}</a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{items.service_date}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"{{items.class}}\">{{items.service_status}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END RECENT PURCHASES -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<!-- MULTI CHARTS -->\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Chart for attendance goes here</h3>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<div id=\"visits-trends-chart\" class=\"ct-chart\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END MULTI CHARTS -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- END MAIN CONTENT -->\n\t\t</div>\n\t\t<!-- END MAIN -->\n\t\t<div class=\"clearfix\"></div>\n\t\t<footer>\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<p class=\"copyright\">&copy; 2018 . SteveInc All Rights Reserved.</p>\n\t\t\t</div>\n\t\t</footer>\n\t</div>\n\t<!-- END WRAPPER -->\n\t<!-- Javascript -->\n\t<script src=\"assets/vendor/jquery/jquery.min.js\"></script>\n\t<script src=\"assets/vendor/bootstrap/js/bootstrap.min.js\"></script>\n\t<script src=\"assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js\"></script>\n\t<script src=\"assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js\"></script>\n\t<script src=\"assets/vendor/chartist/js/chartist.min.js\"></script>\n\t<script src=\"assets/scripts/klorofil-common.js\"></script>\n\t</ng-template>\n\n\t<ng-template #member>\n\t\t\t<div id=\"wrapper\" *ngIf = \"user\">\n\t\t\t\t\t<!-- NAVBAR -->\n\t\t\t\t\t<nav class=\"navbar navbar-default navbar-fixed-top\">\n\t\t\t\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t\t\t\t\t<strong>GILGAL HOUSE MEDIA</strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t<div class=\"navbar-btn\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-toggle-fullwidth\"></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<form class=\"navbar-form navbar-left\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div id=\"navbar-menu\">\n\t\t\t\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t<a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <span>{{user.firstname}} {{user.secondname}}</span> <i class=\"icon-submenu lnr lnr-chevron-down\"></i></a>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-user\"></i> <span>My Profile</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i> <span>Message</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-cog\"></i> <span>Settings</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-exit\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t\t\t\t\t<a class=\"update-pro\" href=\"https://www.themeineed.com/downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro\" title=\"Upgrade to Pro\" target=\"_blank\"><i class=\"fa fa-rocket\"></i> <span>UPGRADE TO PRO</span></a>\n\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</nav>\n\t\t\t\t\t<!-- END NAVBAR -->\n\t\t\t\t\t<!-- LEFT SIDEBAR -->\n\t\t\t\t\t<div id=\"sidebar-nav\" class=\"sidebar\">\n\t\t\t\t\t\t<div class=\"sidebar-scroll\">\n\t\t\t\t\t\t\t<nav>\n\t\t\t\t\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t\t\t\t\t<li><a [routerLink] =\"['/dashboard']\" class=\"active\"><i class=\"lnr lnr-home\" ></i> <span>Dashboard</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink] =\"['/profile']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Profile</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink] =\"['/changepassword']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Change Password</span></a></li>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<li><a href=\"\" (click) = \"logout()\"class=\"\"><i class=\"lnr lnr-cog\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- END LEFT SIDEBAR -->\n\t\t\t\t\t<!-- MAIN -->\n\t\t\t\t\t<div class=\"main\">\n\t\t\t\t\t\t<!-- MAIN CONTENT -->\n\t\t\t\t\t\t<div class=\"main-content\">\n\t\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t\t<!-- OVERVIEW -->\n\t\t\t\t\t\t\t\t<div class=\"panel panel-headline\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Attendance Overview</h3>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon\"><i class=\"fa fa-download\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"number\">{{Total}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"title\">Total Attendance</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon\"><i class=\"fa fa-shopping-bag\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"number\">{{absent}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"title\">Times Absent</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon\"><i class=\"fa fa-eye\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"number\">{{Present}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"title\">Times Present</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon\"><i class=\"fa fa-eye\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"number\">{{percentage}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"title\">Percentage</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- END OVERVIEW -->\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<!-- RECENT PURCHASES -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Total Attendance For {{user.firstname}} {{user.secondname}} </h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body no-padding\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Service Day</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Service Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor = \"let items of attendance3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a>{{items.service_day}}</a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{items.service_date}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"{{items.class}}\">{{items.service_status}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- END RECENT PURCHASES -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<!-- MULTI CHARTS -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Chart for attendance goes here</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"visits-trends-chart\" class=\"ct-chart\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- END MULTI CHARTS -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<!-- TASKS -->\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- END TASKS -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- END MAIN CONTENT -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- END MAIN -->\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t<footer>\n\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t<p class=\"copyright\">&copy; 2018 . SteveInc All Rights Reserved.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</footer>\n\t\t\t\t</div>\n\t\t\t\t<!-- END WRAPPER -->\n\t\t\t\t<!-- Javascript -->\n\t\t\t\t<script src=\"assets/vendor/jquery/jquery.min.js\"></script>\n\t\t\t\t<script src=\"assets/vendor/bootstrap/js/bootstrap.min.js\"></script>\n\t\t\t\t<script src=\"assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js\"></script>\n\t\t\t\t<script src=\"assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js\"></script>\n\t\t\t\t<script src=\"assets/vendor/chartist/js/chartist.min.js\"></script>\n\t\t\t\t<script src=\"assets/scripts/klorofil-common.js\"></script>\n\t</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(auth, flashMessagesService, router) {
        this.auth = auth;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.gettoken();
        //console.log(this.absentee)
    };
    DashboardComponent.prototype.gettoken = function () {
        var _this = this;
        var k = 0;
        var i;
        var p = 0;
        var m = 0;
        var token = localStorage.getItem("token");
        this.auth.submittoken(token).subscribe(function (data) {
            // //console.log(data.attendance[0].service_date)
            _this.user = data;
            ////console.log(data.status)
            ////console.log(this.user.attendance)
            _this.statuss = data.status;
            _this.Total = data.attendance.length;
            _this.stephen = _this.Total - 1;
            for (i = 0; i <= _this.stephen; i++) {
                if (data.attendance[i].service_status == "Absent") {
                    ++p;
                }
                if (data.attendance[i].service_status == "present") {
                    ++k;
                }
                _this.Present = k;
                _this.absentee = k;
                _this.absent = p;
                var Total2 = _this.Present + _this.absent;
                _this.percentage = Math.round((_this.Present / Total2) * 100);
            }
            _this.regno = data.regno;
            var details = ({
                regno: _this.regno
            });
            _this.auth.getmemberattendance(details).subscribe(function (data) {
                _this.attendance3 = data;
                console.log(_this.attendance3);
            });
        });
        //console.log(this.Present)
    };
    //function to log out user 
    DashboardComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return false;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/genattendance/genattendance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/genattendance/genattendance.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t<!-- WRAPPER -->\n\t<div id=\"wrapper\" *ngIf = \"status ==1\">\n\t\t<!-- NAVBAR -->\n\t\t<nav class=\"navbar navbar-default navbar-fixed-top\">\n\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t\t<strong>GILGAL HOUSE MEDIA</strong>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<div class=\"navbar-btn\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn-toggle-fullwidth\"></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"navbar-form navbar-left\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t\n\t\t\t\t\t<div id=\"navbar-menu\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t\t<a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <span></span> <i class=\"icon-submenu lnr lnr-chevron-down\"></i></a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-user\"></i> <span>My Profile</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i> <span>Message</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-cog\"></i> <span>Settings</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-exit\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t\t\t<a class=\"update-pro\" href=\"https://www.themeineed.com/downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro\" title=\"Upgrade to Pro\" target=\"_blank\"><i class=\"fa fa-rocket\"></i> <span>UPGRADE TO PRO</span></a>\n\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t<!-- END NAVBAR -->\n\t\t<!-- LEFT SIDEBAR -->\n\t\t<div id=\"sidebar-nav\" class=\"sidebar\">\n\t\t\t<div class=\"sidebar-scroll\">\n\t\t\t\t\t<nav>\n\t\t\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/dashboard']\" class=\"\"><i class=\"lnr lnr-home\" ></i> <span>Dashboard</span></a></li>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/attendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Attendance</span></a></li>\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/takeattendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Take Attendance</span></a></li>\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/genattendance']\" class=\"active\"><i class=\"lnr lnr-code\" ></i> <span>Genattendance</span></a></li>\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/members']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Manage Members</span></a></li>\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/changepassword']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Change Password</span></a></li>\n\t\t\t\t\t\t\t<li><a href=\"\" (click)=\"logout()\" class=\"\"><i class=\"lnr lnr-cog\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- END LEFT SIDEBAR -->\n\t\t<!-- MAIN -->\n\t\t<div  class=\"main\">\n\t\t\t<!-- MAIN CONTENT -->\n\t\t\t<div id=\"print-section\" class=\"main-content\">\n\t\t\t\t<div class=\"container-fluid\">\n            \n          <table class=\"table table-striped\">\n             \n         <caption align = \"center\">Developed By SteveInc</caption> \n            <thead>\n              <tr >\n                <td></td>\n\t\t\t\t\n\t\t\t\t\n                <th *ngFor = \"let items of attendance3\"scope=\"col\">{{items.service_day}} {{items.service_date}}</th>\n                <th>Attendance Percentage</th>\n                 \n\t\t\t  </tr>\n\t\t\t \n            </thead>\n            <tbody>\n\t\t\t\t\t\n              <tr *ngFor =\"let items of attendance; let i = index\">\n\n                <th style=\"text-transform: uppercase;\">{{i+1}}) {{items.firstname}} {{items.secondname}}</th>\n\t\t\t\t\n\t\t\t\t<td *ngFor = \"let newval of items.attendance\">{{newval.service_status}}</td>\n\t\t\t\t<th >{{items.percentage}}%</th>\n\t\t\t  </tr>\n\t\t\t  \n\t\t\t  \n\t\t\t  \n             \n              \n           </tbody>\n           </table>\n           \n      </div>\n\t\t\t<!-- END MAIN CONTENT -->\n\t\t</div>\n\t\t<button type=\"button\"  class=\"btn btn-primary\" (click)=\"print()\">Print</button>\n\t\t<!-- END MAIN -->\n\t\t<div class=\"clearfix\"></div>\n\t\t<footer>\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<p class=\"copyright\">&copy; 2018 <a href=\"\" target=\"_blank\">SteveInc</a>. All Rights Reserved.</p>\n\t\t\t</div>\n\t\t</footer>\n\t</div>\n\t\n\n\t\n\t\n\n \n\t<!-- END WRAPPER -->\n\t<!-- Javascript -->\n\t<script src=\"assets/vendor/jquery/jquery.min.js\"></script>\n\t<script src=\"assets/vendor/bootstrap/js/bootstrap.min.js\"></script>\n\t<script src=\"assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js\"></script>\n\t<script src=\"assets/scripts/klorofil-common.js\"></script>\n\n\t"

/***/ }),

/***/ "../../../../../src/app/components/genattendance/genattendance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenattendanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenattendanceComponent = (function () {
    function GenattendanceComponent(auth) {
        this.auth = auth;
    }
    GenattendanceComponent.prototype.ngOnInit = function () {
        this.getattendancestat();
        this.gettoken();
    };
    GenattendanceComponent.prototype.getattendancestat = function () {
        var _this = this;
        var details = ({
            regno: 1401018
        });
        this.auth.getmemberattendance(details).subscribe(function (data) {
            _this.attendance3 = data;
            console.log(data);
        });
        this.auth.getmembers().subscribe(function (data) {
            //console.log(data[0].attendance[0&&1].service_status)
            _this.attendance = data;
            //   console.log(data)
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                data[i].presentCount = 0;
                data[i].percentage = 0;
                data[i].absentCount = 0;
                for (var j = 0; j < data[i].attendance.length; j++) {
                    // i == 1 ? //console.log(data[i].attendance[j].service_status) : //console.log("syntax error");
                    if (data[i].attendance[j].service_status == "present") {
                        data[i].presentCount += 1;
                    }
                    if (data[i].attendance[j].service_status == "Absent") {
                        data[i].absentCount += 1;
                    }
                    ;
                    _this.present = data[i].presentCount;
                    _this.absent = data[i].absentCount;
                    _this.total = _this.present + _this.absent;
                    // console.log(data)
                    _this.percent = Math.round((_this.present / _this.total) * 100);
                    data[i].percentage = _this.percent;
                }
                // arr.push(this.percent)
            }
            // this.percentage =   arr
            // //console.log(this.percentage)
            //arr.push(percentage)
            //  //console.log(arr)
            //  arr.push(percentage)
            // //console.log(arr)
            //function to ccalculate percentage for each user
            // //console.log(data[i]);
            //      const present = data[i].presentCount
            //      const total =  this.length
            //      const percentage  = (present/ total) * 100
            //      this.percent 
            //      var percent = new Array()
            //   const a =  percent.push(percentage)
            //  //console.log(percentage)
            //  this.Attendance4 =data.attendance
            //  //console.log(data[1].attendance[0].service_status)
            //   j
            //      //console.log(count);
            //   //console.log(count)
            //  var a
            //  var b
            //   for (a=0; a<=data.length; a++) {
            //     for (b=0; b<=4; b++) {
            //       //console.log(data[a].attendance[b].service_status);
            //       //console.log(data[0].attendance[4].service_status);
            //     }
            //   }
            //  //console.log(data);
        });
    };
    GenattendanceComponent.prototype.regno = function (regno) {
        var details = ({
            regno: regno
        });
        //console.log(details)
    };
    //geting user token 
    GenattendanceComponent.prototype.gettoken = function () {
        var _this = this;
        var token = localStorage.getItem("token");
        this.auth.submittoken(token).subscribe(function (data) {
            // //console.log(data.attendance[0].service_date)
            _this.status = data.status;
            ////console.log(this.user.attendance)
        });
    };
    GenattendanceComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>General Attendance generated by GHM Attendance Application(Developed by SteveInc)</title>\n         \n          <link rel=\"stylesheet\" type:\"text/css\" href=\"assets/css/bootstrap.min.css\">\n          \n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    return GenattendanceComponent;
}());
GenattendanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-genattendance',
        template: __webpack_require__("../../../../../src/app/components/genattendance/genattendance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/genattendance/genattendance.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], GenattendanceComponent);

var _a;
//# sourceMappingURL=genattendance.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n\n\n\t<!-- WRAPPER -->\n\t<div id=\"wrapper\">\n\t\t<div class=\"vertical-align-wrap\">\n\t\t\t<div class=\"vertical-align-middle\">\n\t\t\t\t<div class=\"auth-box \">\n\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t\t\t<div class=\"logo text-center\"><img src=\"assets/img/logo-dark1.png\" alt=\"Klorofil Logo\"></div>\n\t\t\t\t\t\t\t\t<p class=\"lead\">Login to your account</p>\n\t\t\t\t\t\t\t\t<ngx-flash-messages></ngx-flash-messages>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<form class=\"form-auth-small\" action=\"index.php\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"signin-password\" class=\"control-label sr-only\">Registration Number</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  [(ngModel)]=\"regno\" name=\"regno\" value=\"\" placeholder=\"Registration Number\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"signin-password\" class=\"control-label sr-only\">password</label>\n\t\t\t\t\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"passsword\" class=\"form-control\" value=\"\" placeholder=\"password\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"login()\" class=\"btn btn-primary btn-lg btn-block\">Login</button>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"content text\">\n\t\t\t\t\t\t\t<h1 class=\"heading\">GHM Attendance Apllication</h1>\n\t\t\t\t\t\t\t<p>by SteveInc</p>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\tLinks<br>\n               <p><a [routerLink] =\"['/register']\" > <span colour=#fffff>Register</span></a></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- END WRAPPER -->\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(auth, flashMessagesService, router) {
        this.auth = auth;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var details = ({
            regno: this.regno,
            password: this.password
        });
        if (!this.auth.validateatelogin(details)) {
            this.flashMessagesService.show('All fields are required ', {
                classes: ['alert', 'alert-danger'],
                timeout: 1000,
            });
            return false;
        }
        else {
            this.auth.login(details).subscribe(function (data) {
                if (data.success == true) {
                    _this.flashMessagesService.show('You Are Now Logged In ', {
                        classes: ['alert', 'alert-success'],
                        timeout: 1000,
                    });
                    localStorage.setItem("token", data.token);
                    _this.router.navigate(['/dashboard']);
                }
                if (data.success == false) {
                    _this.flashMessagesService.show(data.msg, {
                        classes: ['alert', 'alert-danger'],
                        timeout: 1000,
                    });
                }
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/members/members.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/members/members.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t<!-- WRAPPER -->\n\t<div id=\"wrapper\" *ngIf = \"status==1\">\n\t\t<!-- NAVBAR -->\n\t\t<nav class=\"navbar navbar-default navbar-fixed-top\">\n\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t\t<strong>GILGAL HOUSE MEDIA</strong>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<div class=\"navbar-btn\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn-toggle-fullwidth\"></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"navbar-form navbar-left\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t\n\t\t\t\t\t<div id=\"navbar-menu\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t\t<a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <span></span> <i class=\"icon-submenu lnr lnr-chevron-down\"></i></a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-user\"></i> <span>My Profile</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i> <span>Message</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-cog\"></i> <span>Settings</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-exit\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t\t\t<a class=\"update-pro\" href=\"https://www.themeineed.com/downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro\" title=\"Upgrade to Pro\" target=\"_blank\"><i class=\"fa fa-rocket\"></i> <span>UPGRADE TO PRO</span></a>\n\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t<!-- END NAVBAR -->\n\t\t<!-- LEFT SIDEBAR -->\n\t\t<div id=\"sidebar-nav\" class=\"sidebar\">\n\t\t\t<div class=\"sidebar-scroll\">\n\t\t\t\t\t<nav>\n\t\t\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/dashboard']\" class=\"\"><i class=\"lnr lnr-home\" ></i> <span>Dashboard</span></a></li>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/attendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Attendance</span></a></li>\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/takeattendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Take Attendance</span></a></li>\n\t\t\t\t\t\t\t<li><a [routerLink] =\"['/genattendance']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Genattendance</span></a></li>\n              <li><a [routerLink] =\"['/members']\" class=\"active\"><i class=\"lnr lnr-code\" ></i> <span>Manage Members</span></a></li>\n              <li><a [routerLink] =\"['/changepassword']\" class=\"\"><i class=\"lnr lnr-code\" ></i> <span>Change Password</span></a></li>\n\t\t\t\t\t\t\t<li><a href=\"\" (click)=\"logout()\" class=\"\"><i class=\"lnr lnr-cog\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- END LEFT SIDEBAR -->\n\t\t<!-- MAIN -->\n\t\t<div class=\"main\">\n\t\t\t<!-- MAIN CONTENT -->\n\t\t\t<div class=\"main-content\">\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<h3 class=\"page-title\">Members Section</h3>\n\t\t\t\t\t<ngx-flash-messages></ngx-flash-messages>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<!-- BASIC TABLE -->\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Manage Members Base On level</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n                    <select class=\"form-control\" [(ngModel)]='level' name=\"level\">\n                        \n                        <option value=\"1\">100-200 Level Students</option>\n                        <option value=\"2\">300-500 Level Students</option>\n\t\t\t\t\t\n                      \n                      </select><br>\n                      \n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\" getdetails()\">Get Members</button><br><br>\n\t\t\t\t\t \n\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t<div id=\"print-section\">\n                      <table class=\"table\">\n                          <thead>\n                            <tr >\n                            \n                              <th>S/N</th>\n                              <th>Firstname</th>\n                              <th>SecondName</th>\n                              <th>RegNo</th>\n                              <th>Email Address</th>\n                              <th>SubUnit</th>\n                              <th>Delete</th>\n                              \n                          \n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor = \"let items of members;let i = index\">\n                            \n                              <td>{{i+1}}</td>\n                              <td style=\"text-transform: uppercase;\">{{items.firstname}}</td>\n                              <td style=\"text-transform: uppercase;\">{{items.secondname}}</td>\n                              <td>{{items.regno}}</td>\n                              <td>{{items.email}}</td>\n                              <td>{{items.unit}}</td>\n                              <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"delete(items._id)\">Delete</button></td>\n                              \n                              \n                            </tr>\n                            \n                    \n                          </tbody>\n                        </table>\n                  </div>\n                  <button type=\"button\"  class=\"btn btn-primary\" (click)=\"print()\">Print</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END BASIC TABLE -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<!-- BORDERED TABLE -->\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- END BORDERED TABLE -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- END MAIN CONTENT -->\n\t\t</div>\n\t\t<!-- END MAIN -->\n\t\t<div class=\"clearfix\"></div>\n\t\t<footer>\n        <div class=\"container-fluid\">\n          <p class=\"copyright\">&copy; 2018 . SteveInc All Rights Reserved.</p>\n        </div>\n      </footer>\n\t</div>\n\n\t\n\t\n\n \n\t<!-- END WRAPPER -->\n\t<!-- Javascript -->\n\t<script src=\"assets/vendor/jquery/jquery.min.js\"></script>\n\t<script src=\"assets/vendor/bootstrap/js/bootstrap.min.js\"></script>\n\t<script src=\"assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js\"></script>\n\t<script src=\"assets/scripts/klorofil-common.js\"></script>\n\n\t"

/***/ }),

/***/ "../../../../../src/app/components/members/members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MembersComponent = (function () {
    function MembersComponent(api, flashMessagesService) {
        this.api = api;
        this.flashMessagesService = flashMessagesService;
    }
    MembersComponent.prototype.ngOnInit = function () {
        this.gettoken();
    };
    MembersComponent.prototype.getdetails = function () {
        var _this = this;
        var details = ({
            level: this.level
        });
        console.log(details);
        this.api.getmemberlevel(details).subscribe(function (data) {
            _this.members = data;
            console.log(_this.members);
        });
    };
    MembersComponent.prototype.delete = function (id) {
        var _this = this;
        var details = ({
            id: id
        });
        console.log(details);
        this.api.deletemember(details).subscribe(function (data) {
            if (data.success == 'true') {
                _this.flashMessagesService.show(data.msg, {
                    classes: ['alert', 'alert-success'],
                    timeout: 1000,
                });
            }
        });
        this.getdetails();
    };
    MembersComponent.prototype.gettoken = function () {
        var _this = this;
        var token = localStorage.getItem("token");
        this.api.submittoken(token).subscribe(function (data) {
            // //console.log(data.attendance[0].service_date)
            _this.status = data.status;
            ////console.log(this.user.attendance)
        });
    };
    MembersComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n        <html>\n          <head>\n            <title>GHM DataBase(Developed by SteveInc)</title>\n           \n            <link rel=\"stylesheet\" type:\"text/css\" href=\"assets/css/bootstrap.min.css\">\n            \n          </head>\n      <body onload=\"window.print();window.close()\">" + printContents + "</body>\n        </html>");
        popupWin.document.close();
    };
    return MembersComponent;
}());
MembersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-members',
        template: __webpack_require__("../../../../../src/app/components/members/members.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/members/members.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _b || Object])
], MembersComponent);

var _a, _b;
//# sourceMappingURL=members.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t<!-- WRAPPER -->\n\t<div id=\"wrapper\" *ngIf = \"user\">\n\t\t<!-- NAVBAR -->\n\t\t<nav class=\"navbar navbar-default navbar-fixed-top\">\n\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t<strong>GILGAL HOUSE MEDIA</strong>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<div class=\"navbar-btn\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn-toggle-fullwidth\"></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"navbar-form navbar-left\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t\n\t\t\t\t\t<div id=\"navbar-menu\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t\t<a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <span>{{user.firstname}} {{user.secondname}}</span> <i class=\"icon-submenu lnr lnr-chevron-down\"></i></a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-user\"></i> <span>My Profile</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i> <span>Message</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-cog\"></i> <span>Settings</span></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"lnr lnr-exit\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t\t\t<a class=\"update-pro\" href=\"https://www.themeineed.com/downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro\" title=\"Upgrade to Pro\" target=\"_blank\"><i class=\"fa fa-rocket\"></i> <span>UPGRADE TO PRO</span></a>\n\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t<!-- END NAVBAR -->\n\t\t<!-- LEFT SIDEBAR -->\n\t\t<div id=\"sidebar-nav\" class=\"sidebar\">\n\t\t\t<div class=\"sidebar-scroll\">\n\t\t\t\t<nav>\n\t\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t\t<li><a [routerLink] =\"['/dashboard']\" class=\"\"><i class=\"lnr lnr-home\" ></i> <span>Dashboard</span></a></li>\n\t\t\t\t\t\t<li><a [routerLink] =\"['/profile']\" class=\"active\"><i class=\"lnr lnr-code\" ></i> <span>Profile</span></a></li>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<li><a href=\"\" (click)=\"logout\" class=\"\"><i class=\"lnr lnr-cog\"></i> <span>Logout</span></a></li>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- END LEFT SIDEBAR -->\n\t\t<!-- MAIN -->\n\t\t<div class=\"main\">\n\t\t\t<!-- MAIN CONTENT -->\n\t\t\t<div class=\"main-content\">\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<div class=\"panel panel-profile\">\n\t\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t\t<!-- LEFT COLUMN -->\n\t\t\t\t\t\t\t<div class=\"profile-left\">\n\t\t\t\t\t\t\t\t<!-- PROFILE HEADER -->\n\t\t\t\t\t\t\t\t<div class=\"profile-header\">\n\t\t\t\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"profile-main\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/user-medium.png\" class=\"img-circle\" alt=\"Avatar\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"name\">{{user.firstname}} {{user.secondname}}</h3>\n\t\t\t\t\t\t\t\t\t\t<span class=\"online-status status-available\">Available</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"profile-stat\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 stat-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{Total}} <span>Total Attendance</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 stat-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{Present}} <span>Total Present</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 stat-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{absent}} <span>Total Absent\n\n                        </span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- END PROFILE HEADER -->\n\t\t\t\t\t\t\t\t<!-- PROFILE DETAIL -->\n\t\t\t\t\t\t\t\t<div class=\"profile-detail\">\n\t\t\t\t\t\t\t\t\t<div class=\"profile-info\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"heading\">Basic Info</h4>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled list-justify\">\n\t\t\t\t\t\t\t\t\t\t\t<li>FullName <span>{{user.firstname}} {{user.secondname}}</span></li>\n\t\t\t\t\t\t\t\t\t\t\t<li>Sub-Unit <span>{{user.unit}}</span></li>\n\t\t\t\t\t\t\t\t\t\t\t<li>Email <span>{{user.email}}</span></li>\n\t\t\t\t\t\t\t\t\t\t\t<li>Reg No <span>{{user.regno}}</span></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- END PROFILE DETAIL -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END LEFT COLUMN -->\n\t\t\t\t\t\t\t<!-- RIGHT COLUMN -->\n\t\t\t\t\t\t\t<div class=\"profile-right\">\n\t\t\t\t\t\t\t\t<h4 class=\"heading\">Name Awards</h4>\n\t\t\t\t\t\t\t\t<!-- AWARDS -->\n\t\t\t\t\t\t\t\t<div class=\"awards\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"award-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"hexagon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"lnr lnr-sun award-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Most Bright Idea</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"award-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"hexagon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"lnr lnr-clock award-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Most On-Time</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"award-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"hexagon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"lnr lnr-magic-wand award-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Problem Solver</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"award-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"hexagon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"lnr lnr-heart award-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Most Loved</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- END AWARDS -->\n\t\t\t\t\t\t\t\t<!-- TABBED CONTENT -->\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- END TABBED CONTENT -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END RIGHT COLUMN -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- END MAIN CONTENT -->\n\t\t</div>\n\t\t<footer>\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<p class=\"copyright\">&copy; 2018 . SteveInc All Rights Reserved.</p>\n\t\t\t\t</div>\n\t\t\t</footer>\n\t<!-- END WRAPPER -->\n\t<!-- Javascript -->\n\t<script src=\"assets/vendor/jquery/jquery.min.js\"></script>\n\t<script src=\"assets/vendor/bootstrap/js/bootstrap.min.js\"></script>\n\t<script src=\"assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js\"></script>\n\t<script src=\"assets/scripts/klorofil-common.js\"></script>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.gettoken();
    };
    ProfileComponent.prototype.gettoken = function () {
        var _this = this;
        var k = 0;
        var i;
        var m = 0;
        var token = localStorage.getItem("token");
        this.auth.submittoken(token).subscribe(function (data) {
            // //console.log(data.attendance[0].service_date)
            _this.user = data;
            //console.log(data.status)
            ////console.log(this.user.attendance)
            _this.statuss = data.status;
            _this.Total = data.attendance.length;
            _this.stephen = _this.Total - 1;
            for (i = 0; i <= _this.stephen; i++) {
                if (data.attendance[i].service_status == "present") {
                    ++k;
                    _this.Present = k;
                    _this.absent = _this.Total - _this.Present;
                }
                else {
                }
            }
            _this.regno = data.regno;
            var details = ({
                regno: _this.regno
            });
            _this.auth.getmemberattendance(details).subscribe(function (data) {
                _this.attendance3 = data;
                //console.log(this.attendance3)
            });
        });
    };
    ProfileComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return false;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br>\n\t<!-- WRAPPER -->\n\t<div id=\"wrapper\">\n\t\t<div class=\"vertical-align-wrap\">\n\t\t\t<div class=\"vertical-align-middle\">\n\t\t\t\t<div class=\"auth-box \">\n\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t\t\t<div class=\"logo text-center\"></div>\n\t\t\t\t\t\t\t\t<p class=\"lead\">Register A New Member</p>\n\t\t\t\t\t\t\t\t<ngx-flash-messages></ngx-flash-messages>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<form class=\"form-auth-small\" action=\"index.php\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"signin-email\" class=\"control-label sr-only\">FirstName</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)] = \"firstname\" name=\"firstname\" class=\"form-control\"  placeholder=\"FirstName\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"signin-password\" class=\"control-label sr-only\">SecondName</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)] = \"secondname\" name=\"secondname\"class=\"form-control\"  placeholder=\"SecondName\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"signin-password\"  class=\"control-label sr-only\">Level</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)] = \"level\" name=\"level\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"cheese\">Level</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">100 Level</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">200 Level</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">300 Level</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">400 Level</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">500 Level</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"signin-password\"  class=\"control-label sr-only\">Unit</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\"[(ngModel)]=\"unit\" name=\"unit\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Sub-Unit</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Audio\" >Audio</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Visual\">Visual</option>\n\t\t\t\t\t\t\t\t\t</select>\n                </div>\n                \n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"signin-password\" class=\"control-label sr-only\">Email</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)] = \"email\" name=\"email\"class=\"form-control\"   placeholder=\"Email\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"signin-password\" class=\"control-label sr-only\">RegistrationNumber</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)] = \"regno\" name=\"regno\"class=\"form-control\"   placeholder=\"Registration Number\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n                <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"signin-password\" class=\"control-label sr-only\">Register As</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)] = \"status\" name=\"status\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Admin</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Member</option>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" (click)='register()'>Register</button>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"content text\">\n\t\t\t\t\t\t\t<h1 class=\"heading\">GHM Attendance Apllication</h1>\n\t\t\t\t\t\t\t<p>by SteveInc</p>\n\t\t\t\t\t\t\t<br>\n               <p><a [routerLink] =\"['/login']\" > <span colour=#fffff>Login</span></a></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- END WRAPPER -->\n\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(Auth, flashMessagesService) {
        this.Auth = Auth;
        this.flashMessagesService = flashMessagesService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var details = ({
            firstname: this.firstname,
            secondname: this.secondname,
            unit: this.unit,
            level: this.level,
            email: this.email,
            regno: this.regno,
            password: "password",
            status: this.status,
            attendance: []
        });
        if (!this.Auth.validateregister(details)) {
            this.flashMessagesService.show('All fields are required ', {
                classes: ['alert', 'alert-danger'],
                timeout: 1000,
            });
        }
        else {
            this.Auth.register(details).subscribe(function (data) {
                if (data.success == true) {
                    _this.flashMessagesService.show(data.msg, {
                        classes: ['alert', 'alert-success'],
                        timeout: 1000,
                    });
                    _this.firstname = null;
                    _this.secondname = null;
                    _this.unit = null;
                    _this.level = null;
                    _this.email = null;
                    _this.regno = null;
                    _this.password = null,
                        _this.status = null;
                }
                else {
                    _this.flashMessagesService.show(data.msg, {
                        classes: ['alert', 'alert-warning'],
                        timeout: 1000,
                    });
                }
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/takeattendance/takeattendance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/takeattendance/takeattendance.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n\n\n\t<!-- WRAPPER -->\n\t<div id=\"wrapper\" *ngIf = \"statuss == 1\">\n\t\t<div class=\"vertical-align-wrap\">\n\t\t\t<div class=\"vertical-align-middle\">\n\t\t\t\t<div class=\"auth-box \">\n\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<div class=\"header\">\n                 \n                <div class=\"logo text-center\"><img src=\"assets/img/logo-dark1.png\" alt=\"Klorofil Logo\"></div>\n                \n\t\t\t\t\t\t\t\t<p class=\"lead\"></p>\n\t\t\t\t\t\t\t\t<ngx-flash-messages></ngx-flash-messages>\n              </div>\n              <div *ngIf= \"status == 0; then yes\"></div>\n              <div *ngIf= \"status == 1; then no\"></div>\n              <ng-template #yes>  \n\t\t\t\t\t\t\t<form class=\"form-auth-small\" action=\"index.php\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"signin-password\" class=\"control-label sr-only\">Registration Number</label>\n\t\t\t\t\t\t\t\t\tCheck Back Later There Is No Attendance Session\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n              </form>\n              </ng-template>\n              <ng-template #no>  \n                  <form class=\"form-auth-small\" action=\"index.php\">\n                    \n                    <div class=\"form-group\">\n                      <label for=\"signin-password\" class=\"control-label sr-only\">Registration Number</label>\n                      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"regno\" name=\"regno\" value=\"\" placeholder=\"Registration Number\">\n                    </div>\n                  \n                    <button type=\"submit\" (click)=\"takeattendance()\" class=\"btn btn-primary btn-lg btn-block\">Submit</button>\n                  \n                  </form>\n                  </ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"right\">\n            \n            <div class=\"overlay\"></div>\n          \n\t\t\t\t\t\t<div class=\"content text\">\n                <analogical-countdown *ngIf =\"status == 1\" [time]=\"900000\" (beep)=\"stop()\"></analogical-countdown>\n\t\t\t\t\t\t\t<h1 class=\"heading\">GHM Attendance Apllication</h1>\n              <p>by SteveInc</p>\n              <br>\n              Links\n              <br>\n\t\t\t\t\t\t\t <p><a [routerLink] =\"['/login']\" > <span colour=#fffff>Login</span></a></p\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<p><a [routerLink] =\"['/dashboard']\" > <span colour=#fffff>Dashboard</span></a></p>\n               \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- END WRAPPER -->\n"

/***/ }),

/***/ "../../../../../src/app/components/takeattendance/takeattendance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeattendanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mobiscroll_angular_lite__ = __webpack_require__("../../../../@mobiscroll/angular-lite/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






__WEBPACK_IMPORTED_MODULE_3__mobiscroll_angular_lite__["b" /* mobiscroll */].settings = {
    theme: 'ios',
    lang: 'fr',
};
var TakeattendanceComponent = (function () {
    function TakeattendanceComponent(auth, flashMessagesService) {
        this.auth = auth;
        this.flashMessagesService = flashMessagesService;
    }
    TakeattendanceComponent.prototype.ngOnInit = function () {
        this.gettoken();
        this.getactiveseeion();
        this.calling();
    };
    TakeattendanceComponent.prototype.takeattendance = function () {
        var _this = this;
        var details = ({
            regno: this.regno
        });
        if (!this.auth.validateattendance(details)) {
            this.flashMessagesService.show('All fields are required ', {
                classes: ['alert', 'alert-danger'],
                timeout: 1000,
            });
        }
        else {
            this.auth.takeattendance(details).subscribe(function (data) {
                if (data.success == true) {
                    _this.flashMessagesService.show(data.msg, {
                        classes: ['alert', 'alert-success'],
                        timeout: 1000,
                    });
                    _this.regno = null;
                }
                if (data.success == false) {
                    _this.flashMessagesService.show(data.msg, {
                        classes: ['alert', 'alert-danger'],
                        timeout: 1000,
                    });
                }
            });
        }
    };
    //get if there is an active attendance in database
    TakeattendanceComponent.prototype.getactiveseeion = function () {
        var _this = this;
        this.auth.getattendancesession().subscribe(function (data) {
            if (data.success == true) {
                _this.status = 1;
                _this.id = data.msg._id;
            }
            if (data.success == false) {
                _this.status = 0;
            }
        });
    };
    TakeattendanceComponent.prototype.calling = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].interval(1000)
            .subscribe(function (val) {
            _this.getactiveseeion();
        });
    };
    TakeattendanceComponent.prototype.stop = function () {
        var details = ({
            id: this.id
        });
        this.auth.stop(details).subscribe(function (data) {
            if (data.success == true) {
            }
        });
    };
    TakeattendanceComponent.prototype.gettoken = function () {
        var _this = this;
        var token = localStorage.getItem("token");
        this.auth.submittoken(token).subscribe(function (data) {
            // //console.log(data.attendance[0].service_date)
            _this.statuss = data.status;
            //console.log(this.statuss)
            ////console.log(this.user.attendance)
        });
    };
    return TakeattendanceComponent;
}());
TakeattendanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-takeattendance',
        template: __webpack_require__("../../../../../src/app/components/takeattendance/takeattendance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/takeattendance/takeattendance.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _b || Object])
], TakeattendanceComponent);

var _a, _b;
//# sourceMappingURL=takeattendance.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
// auth-guard.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    //validate take attendance 
    //validate get attendance field
    AuthService.prototype.validateattendance = function (details) {
        if (details.regno == null) {
            return false;
        }
        else {
            return true;
        }
    };
    //validate login 
    AuthService.prototype.validateatelogin = function (details) {
        if (details.regno == null || details.password == null) {
            return false;
        }
        else {
            return true;
        }
    };
    //validate change password
    AuthService.prototype.validatechange = function (details) {
        if (details.password == null || details.npassword1 == null || details.npassword2 == null) {
            return false;
        }
        else {
            return true;
        }
    };
    //validate register fields 
    AuthService.prototype.validatecreateattendance = function (details) {
        if (details.service_day == null || details.service_date == null || details.service_status == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.validateregister = function (details) {
        if (details.firstname == null || details.secondname == null || details.unit == null || details.email == null || details.regno == null || details.level == null || details.password == null || details.status == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.register = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/register', details, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.createattendance = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/startattendance', details, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getsession = function () {
        return this.http.get('http://localhost:8080/api/getsession')
            .map(function (res) { return res.json().attendance; });
    };
    AuthService.prototype.stop = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/stopattendance', details, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.gettotalattendance = function () {
        return this.http.get('http://localhost:8080/api/gettotal')
            .map(function (res) { return res.json().attendance; });
    };
    AuthService.prototype.startattendance = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/continue', details, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getstudents = function () {
        return this.http.get('http://localhost:8080/api/getstudents')
            .map(function (res) { return res.json().student; });
    };
    //get student attendance by supplying the registration nuber 
    AuthService.prototype.getmemberattendance = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/getstudentattendance', details, { headers: headers })
            .map(function (res) { return res.json().student; });
    };
    //function to get total attendance in database 
    AuthService.prototype.getattendance2 = function () {
        return this.http.get('http://localhost:8080/api/getattendance2')
            .map(function (res) { return res.json().student; });
    };
    AuthService.prototype.getattendance3 = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/getitfromtotal', details, { headers: headers })
            .map(function (res) { return res.json().student; });
    };
    AuthService.prototype.login = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/login', details, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.submittoken = function (details) {
        //console.log(details)
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', details);
        return this.http.get('http://localhost:8080/api/profile', { headers: headers })
            .map(function (res) { return res.json().user; });
    };
    //route to tak eattendance by inputing the reg no
    AuthService.prototype.takeattendance = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/takeattendance', details, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //route to get active attendance
    AuthService.prototype.getattendancesession = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get('http://localhost:8080/api/getactiveattendance', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('token');
    };
    AuthService.prototype.delete = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/delete', details, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //this get all attendance for all user and all their details
    AuthService.prototype.getmembers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get('http://localhost:8080/api/allmembers', { headers: headers })
            .map(function (res) { return res.json().users; });
    };
    AuthService.prototype.getmemberlevel = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/getmemberslevel', details, { headers: headers })
            .map(function (res) { return res.json().users; });
    };
    AuthService.prototype.deletemember = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/deletemember', details, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.changepassword = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/changepassword', details, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.upload = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/upload', details, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.changedatabase = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        return this.http.get('http://localhost:8080/api/changedb', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map