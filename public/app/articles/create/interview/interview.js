"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InterviewComponent = (function () {
    function InterviewComponent() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
        this.autoTicks = false;
        this.invert = false;
        this.max = 5;
        this.min = 0;
        this.showTicks = true;
        this.step = 1;
        this.thumbLabel = true;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
    }
    Object.defineProperty(InterviewComponent.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : null;
        },
        set: function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    return InterviewComponent;
}());
InterviewComponent = __decorate([
    core_1.Component({
        templateUrl: './interview.html',
    })
], InterviewComponent);
exports.InterviewComponent = InterviewComponent;
//# sourceMappingURL=interview.js.map