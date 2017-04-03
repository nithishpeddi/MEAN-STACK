import { Component } from '@angular/core';


@Component({

    templateUrl: './interview.html',
})
export class InterviewComponent {
    color = 'accent';
    checked = false;
    disabled = false;
    autoTicks = false;

    invert = false;
    max = 5;
    min = 0;
    showTicks = true;
    step = 1;
    thumbLabel = true;
    value = 0;
    vertical = false;

    get tickInterval(): number | 'auto' {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : null;
    }
    set tickInterval(v) {
        this._tickInterval = Number(v);
    }
    private _tickInterval = 1;


}