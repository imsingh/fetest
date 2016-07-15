"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var im_tabs_1 = require('./components/im-tabs/im-tabs');
var im_tab_1 = require('./components/im-tab/im-tab');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.topSelection = null;
        this.leftSelection = null;
        this.reset = null;
        this.data = [
            { "top": "Eva", "left": ["write mail to Eva", 'get contact details', 'visit profile'] },
            { "top": "Bob", "left": ["write mail to Bob"] },
            { "top": "Gui", "left": ["write mail to Gui", 'visit profile', 'ask for help'] }
        ];
    }
    AppComponent.prototype.selectTop = function (index) {
        if (this.topSelection !== index) {
            this.reset = !this.reset;
            this.leftSelection = null;
        }
        this.topSelection = index;
        this.leftData = this.data[index].left;
    };
    AppComponent.prototype.selectLeft = function (index) {
        this.leftSelection = index;
        var top = this.data[this.topSelection].top;
        var left = this.data[this.topSelection].left[index];
        this.getContent(top, left);
    };
    AppComponent.prototype.getContent = function (top, left) {
        var _this = this;
        this.http.get("https://x2-server.herokuapp.com/api/contexts?top=" + top + "&left=" + left)
            .map(function (value) { return value.json(); })
            .subscribe(function (value) {
            _this.content = value.content;
            console.log(value);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            directives: [im_tabs_1.ImTabs, im_tab_1.ImTab]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map