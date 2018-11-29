webpackJsonp([1],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Ask" tabIcon="help-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Q/A" tabIcon="chatbubbles"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, afAuth, toastCtrl, platform, gplus) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.gplus = gplus;
        this.mData = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref();
        this.tech_disp = [];
        this.buss_disp = [];
        this.lm_disp = [];
        this.techSelect = [];
        this.bussSelect = [];
        this.totalTag = [];
        this.initTag = [];
        this.initTagId = [];
        this.lmSelect = [];
        this.flag = false;
        this.dname = this.afAuth.auth.currentUser.displayName;
        this.tech = {
            "5": ".NET",
            "6": "Angular",
            "7": "Couchbase",
            "8": "SQL Server",
            "9": "Elastic Search",
            "10": "Docker",
            "11": "RabbitMQ"
        };
        this.lm = {
            "1_a": "Order Management",
            "1_b": "Route Management",
            "1_c": "Account Management",
            "1_d": "Claims Management",
            "1_e": "Zone Management",
            "1_f": "Location Management",
            "1_g": "User Management",
            "1_h": "Facility Management"
        };
        this.tech_disp = [
            { id: "5", name: ".NET" },
            { id: "6", name: "Angular" },
            { id: "7", name: "Couchbase" },
            { id: "8", name: "SQL Server" },
            { id: "9", name: "Elastic Search" },
            { id: "10", name: "Docker" },
            { id: "11", name: "RabbitMQ" },
        ];
        this.lm_disp = [
            { id: "1_a", name: "Order Management" },
            { id: "1_b", name: "Route Management" },
            { id: "1_c", name: "Account Management" },
            { id: "1_d", name: "Claims Management" },
            { id: "1_e", name: "Zone Management" },
            { id: "1_f", name: "Location Management" },
            { id: "1_g", name: "User Management" },
            { id: "1_h", name: "Facility Management" }
        ];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.mData.child("users").child(this.afAuth.auth.currentUser.uid)
            .child("tags").once("value").then(function (snapshot) {
            _this.initTagId = snapshot.val();
        });
        setTimeout(function () {
            _this.techSelect = [];
            _this.lmSelect = [];
            if (_this.initTagId != null) {
                for (var i = 0; i < _this.initTagId.length; i++) {
                    if (isNaN(_this.initTagId[i])) {
                        if (_this.lm[_this.initTagId[i]] != null)
                            _this.lmSelect.push(_this.initTagId[i]);
                    }
                    else {
                        if (_this.tech[_this.initTagId[i]] != null)
                            _this.techSelect.push(_this.initTagId[i]);
                    }
                }
            }
        }, 500);
    };
    HomePage.prototype.enable = function () {
        this.flag = true;
    };
    HomePage.prototype.saveChanges = function () {
        if (this.techSelect == null)
            this.totalTag = this.lmSelect;
        else if (this.lmSelect == null)
            this.totalTag = this.techSelect;
        else
            this.totalTag = this.techSelect.concat(this.lmSelect);
        this.mData.child("users").child(this.afAuth.auth.currentUser.uid)
            .child("tags").set(this.totalTag);
        this.flag = false;
        for (var i in this.totalTag) {
            if (this.initTag == null || !this.initTagId.includes(this.totalTag[i])) {
                this.mData.child("tag_user").child(this.totalTag[i]).child(this.afAuth.auth.currentUser.uid).set(true);
            }
        }
        for (var i in this.initTagId) {
            if (this.totalTag == null || !this.totalTag.includes(this.initTagId[i])) {
                this.mData.child("tag_user").child(this.initTagId[i]).child(this.afAuth.auth.currentUser.uid).set(null);
            }
        }
        this.initTagId = this.totalTag;
        this.presentToast();
    };
    HomePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Tags updated successfully',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    HomePage.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        if (this.platform.is('cordova')) {
            this.gplus.logout();
        }
        var toast = this.toastCtrl.create({
            message: 'You are signed out',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>Profile</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only name="logout" (tap) = "signOut()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome {{dname}}</h2>\n\n  <ion-list>\n\n    <ion-list-header>View and Edit your Tags here.</ion-list-header>\n\n  </ion-list>\n\n  <ion-item>\n\n    <ion-label>Technology</ion-label>\n\n    <ion-select [(ngModel)]="techSelect" multiple="true" (ionChange)="enable()">\n\n      <ion-option *ngFor = "let item of tech_disp" [value]="item.id">{{item.name}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Business</ion-label>\n\n    <ion-select [(ngModel)]="lmSelect" multiple="true" (ionChange)="enable()">\n\n      <ion-option *ngFor = "let item of lm_disp" [value]="item.id">{{item.name}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <button ion-button block round *ngIf="flag" (click)="saveChanges()">Save Changes</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["AngularFireAuth"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		702,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, afAuth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.mData = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref();
        this.tech = [];
        this.buss = [];
        this.lm = [];
        this.techSelect = [];
        this.bussSelect = [];
        this.totalTag = [];
        this.initTag = [];
        this.initTagId = [];
        this.lmSelect = [];
        this.query = {
            question: null,
            explanation: null
        };
        this.dname = this.afAuth.auth.currentUser.displayName;
        this.tech = [
            { id: "5", name: ".NET" },
            { id: "6", name: "Angular" },
            { id: "7", name: "Couchbase" },
            { id: "8", name: "SQL Server" },
            { id: "9", name: "Elastic Search" },
            { id: "10", name: "Docker" },
            { id: "11", name: "RabbitMQ" },
        ];
        this.lm = [
            { id: "1_a", name: "Order Management" },
            { id: "1_b", name: "Route Management" },
            { id: "1_c", name: "Account Management" },
            { id: "1_d", name: "Claims Management" },
            { id: "1_e", name: "Zone Management" },
            { id: "1_f", name: "Location Management" },
            { id: "1_g", name: "User Management" },
            { id: "1_h", name: "Facility Management" },
            { id: "4", name: "General" }
        ];
    }
    AboutPage.prototype.saveChanges = function () {
        if (this.lmSelect == null || this.lmSelect.length == 0) {
            var toast = this.toastCtrl.create({
                message: 'Please select atleast one business tag',
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            if (this.techSelect == null)
                this.totalTag = this.lmSelect;
            else if (this.lmSelect == null)
                this.totalTag = this.techSelect;
            else
                this.totalTag = this.techSelect.concat(this.lmSelect);
            var ts = new Date().toISOString();
            ts = ts.replace(/[^0-9]/g, "");
            this.mData.child("questions").child(ts).child("tags").set(this.totalTag);
            this.mData.child("questions").child(ts).child('question').set(this.query.question);
            this.mData.child("questions").child(ts).child('explanation').set(this.query.explanation);
            this.mData.child("questions").child(ts).child('last_timestamp').set(ts);
            this.mData.child("questions").child(ts).child('flag_answered').set('false');
            this.mData.child("questions").child(ts).child("asked_by").child('user').set(this.afAuth.auth.currentUser.uid);
            this.mData.child("questions").child(ts).child("asked_by").child('timestamp').set(ts);
            this.mData.child("users").child(this.afAuth.auth.currentUser.uid).child("asked").push(ts);
            this.presentToast();
        }
    };
    AboutPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Query posted successfully',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\pages\about\about.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>Ask</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <form #askForm="ngForm" (ngSubmit)="saveChanges(); myNgForm.resetForm()" #myNgForm="ngForm">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Query (in one line)</ion-label>\n\n          <ion-input type="text" [(ngModel)]="query.question" name="question" required></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label floating>Explain your problem</ion-label>\n\n          <ion-textarea type="text" [(ngModel)]="query.explanation" name="explanation" required></ion-textarea>\n\n        </ion-item>\n\n      </ion-list>\n\n  \n\n      <ion-list>\n\n        <ion-list-header>Select appropriate tags</ion-list-header>\n\n        \n\n        <ion-item>\n\n          <ion-label>Technology</ion-label>\n\n          <ion-select [(ngModel)]="techSelect" multiple="true" name="Technology">\n\n            <ion-option *ngFor = "let item of tech" [value]="item.id">{{item.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      \n\n      \n\n        <ion-item>\n\n          <ion-label>Business</ion-label>\n\n          <ion-select [(ngModel)]="lmSelect" multiple="true" name="Business">\n\n            <ion-option *ngFor = "let item of lm" [value]="item.id">{{item.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n  \n\n      <button [disabled]="!askForm.form.valid" ion-button block round type="submit">Ask</button>\n\n    </form>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.mData = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref();
        this.tech = [];
        this.lm = [];
        this.questions = [];
        this.tech = [
            { id: "5", name: ".NET" },
            { id: "6", name: "Angular" },
            { id: "7", name: "Couchbase" },
            { id: "8", name: "SQL Server" },
            { id: "9", name: "Elastic Search" },
            { id: "10", name: "Docker" },
            { id: "11", name: "RabbitMQ" },
        ];
        this.lm = [
            { id: "1_a", name: "Order Management" },
            { id: "1_b", name: "Route Management" },
            { id: "1_c", name: "Account Management" },
            { id: "1_d", name: "Claims Management" },
            { id: "1_e", name: "Zone Management" },
            { id: "1_f", name: "Location Management" },
            { id: "1_g", name: "User Management" },
            { id: "1_h", name: "Facility Management" }
        ];
    }
    ContactPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.afAuth.auth.currentUser;
        this.mData.child("users").child(this.user.uid).child("asked").once("value").then(function (snapshot) {
            _this.asked = snapshot.val();
            for (var i in _this.asked) {
                _this.mData.child("questions").child(_this.asked[i.toString()]).once("value").then(function (snapshot) {
                    _this.questions.push(snapshot.val());
                });
            }
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Q/A\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Questions asked</ion-list-header>\n\n    <ion-item *ngFor="let i of questions">\n\n      <h2>{{i["question"]}}</h2>\n\n      <p>{{i["explanation"]}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["AngularFireAuth"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_google_login_google_login__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var firebaseConfig = {
    apiKey: "AIzaSyAzXJj9P4jtNwLaLtNtAfUOnfyBlHyFaT4",
    authDomain: "test-app-base.firebaseapp.com",
    databaseURL: "https://test-app-base.firebaseio.com",
    projectId: "test-app-base",
    storageBucket: "test-app-base.appspot.com",
    messagingSenderId: "1006688015933"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_google_login_google_login__["a" /* GoogleLoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuthModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_google_login_google_login__["a" /* GoogleLoginComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (afAuth.authState != null)
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            else
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

//import * as firebase from 'firebase/app';






/**
 * Generated class for the GoogleLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GoogleLoginComponent = /** @class */ (function () {
    function GoogleLoginComponent(afAuth, navCtrl, gplus, loadingCtrl, platform) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.gplus = gplus;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.mData = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref();
        this.Uname = null;
        this.text = 'Hello World';
        this.user = this.afAuth.authState;
        //if(this.user != null){
        //this.Uname = this.afAuth.auth.currentUser.displayName;
        //}
    }
    GoogleLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            if (_this.afAuth.auth.currentUser != null)
                _this.goAnOtherPage();
            loading.dismiss();
        }, 3000);
    };
    GoogleLoginComponent.prototype.goAnOtherPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    GoogleLoginComponent.prototype.googleLogin = function () {
        if (this.platform.is('cordova')) {
            this.nativeGoogleLogin();
            //this.afAuth.authState
        }
        else {
            this.webGoogleLogin();
        }
    };
    GoogleLoginComponent.prototype.nativeGoogleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var gplusUser, credential, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.gplus.login({
                                'webClientId': '314946282716-6hv1nmv4a8gcntnh0cl72a51mctoqkqh.apps.googleusercontent.com',
                                'offline': true,
                                'scopes': 'profile email'
                            })];
                    case 1:
                        gplusUser = _a.sent();
                        return [4 /*yield*/, this.afAuth.auth.signInAndRetrieveDataWithCredential(__WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].GoogleAuthProvider.credential(gplusUser.idToken)).then(function (result) {
                                //console.log(this.afAuth.auth.currentUser.uid);
                                if (result.additionalUserInfo.isNewUser) {
                                    _this.us = {
                                        uid: _this.afAuth.auth.currentUser.getIdToken(),
                                        name: _this.afAuth.auth.currentUser.displayName
                                    };
                                    _this.mData.child("users").child(_this.afAuth.auth.currentUser.uid).child("name").set(_this.afAuth.auth.currentUser.displayName);
                                    // this.db.list('Users').push(this.site);
                                }
                                _this.goAnOtherPage();
                            })];
                    case 2:
                        credential = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoogleLoginComponent.prototype.webGoogleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var provider, credential, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].GoogleAuthProvider();
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)
                                .then(function (result) {
                                //console.log(this.afAuth.auth.currentUser.uid);
                                if (result.additionalUserInfo.isNewUser) {
                                    _this.us = {
                                        uid: _this.afAuth.auth.currentUser.getIdToken(),
                                        name: _this.afAuth.auth.currentUser.displayName
                                    };
                                    _this.mData.child("users").child(_this.afAuth.auth.currentUser.uid).child("name").set(_this.afAuth.auth.currentUser.displayName);
                                    // this.db.list('Users').push(this.site);
                                }
                                _this.goAnOtherPage();
                            })];
                    case 1:
                        credential = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GoogleLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'google-login',template:/*ion-inline-start:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\components\google-login\google-login.html"*/'<div *ngIf="(user | async) || {} as user">\n\n\n\n  <button ion-button block round\n\n        *ngIf="!user.uid"\n\n        (tap)="googleLogin()">\n\n     Login with Google\n\n  </button>\n\n\n\n      <div *ngIf="user.uid">\n\n        <!-- <h2> Welcome {{user.displayName}} </h2>\n\n        \n\n        <ion-buttons>\n\n            <button ion-button (click)="goAnOtherPage()">Home </button>\n\n          </ion-buttons>\n\n        \n\n        <button ion-button (tap) = "signOut()">\n\n          Signout\n\n        </button> -->\n\n      </div>\n\n     \n\n</div>'/*ion-inline-end:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\components\google-login\google-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Platform */]])
    ], GoogleLoginComponent);
    return GoogleLoginComponent;
}());

//# sourceMappingURL=google-login.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<google-login></google-login>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gokul\Documents\Ionic\QueryHome\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[358]);
//# sourceMappingURL=main.js.map