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
var ImTab = (function () {
    function ImTab(_renderer, _elementRef) {
        var _this = this;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.clicked = new core_1.EventEmitter();
        var elm = this._elementRef.nativeElement;
        elm.addEventListener('click', function () {
            _this.clicked.emit({});
        });
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImTab.prototype, "clicked", void 0);
    ImTab = __decorate([
        core_1.Component({
            selector: 'im-tab',
            template: "<ng-content></ng-content>",
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], ImTab);
    return ImTab;
}());
exports.ImTab = ImTab;
//# sourceMappingURL=im-tab.js.map