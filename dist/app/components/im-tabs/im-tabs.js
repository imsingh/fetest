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
var im_tab_1 = require('../im-tab/im-tab');
var ImTabs = (function () {
    function ImTabs(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    ImTabs.prototype.ngOnInit = function () {
        console.log(this.selectClass);
        this.colorClass = this.selectClass || 'im-tab-activated';
    };
    ImTabs.prototype.ngOnChanges = function () {
        if (this.reset !== null) {
            this.resetTabs();
        }
        if (this.tabClicked !== null) {
            var tab = this.tabList['_results'][this.tabClicked];
            var elm = tab['_elementRef'].nativeElement;
            tab['_renderer'].setElementClass(elm, this.colorClass, true);
        }
    };
    ImTabs.prototype.resetTabs = function () {
        var _this = this;
        if (this.tabList) {
            var tabs = this.tabList['_results'];
            tabs.forEach(function (tab, index) {
                var elm = tab['_elementRef'].nativeElement;
                tab['_renderer'].setElementClass(elm, _this.colorClass, false);
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ImTabs.prototype, "tabClicked", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ImTabs.prototype, "reset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImTabs.prototype, "selectClass", void 0);
    __decorate([
        core_1.ContentChildren(im_tab_1.ImTab), 
        __metadata('design:type', Object)
    ], ImTabs.prototype, "tabList", void 0);
    ImTabs = __decorate([
        core_1.Component({
            selector: 'im-tabs',
            template: "<ng-content></ng-content>",
            styleUrls: ['app/components/im-tabs/im-tabs.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], ImTabs);
    return ImTabs;
}());
exports.ImTabs = ImTabs;
//# sourceMappingURL=im-tabs.js.map