import {Component, ElementRef, EventEmitter, Output, Renderer, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'im-tab',
	template:`<ng-content></ng-content>`,
	encapsulation: ViewEncapsulation.None,
})
export class ImTab {
	@Output() clicked = new EventEmitter();
	constructor(private _renderer: Renderer, private _elementRef:ElementRef) {
		let elm = this._elementRef.nativeElement;
		elm.addEventListener('click', ()=> {
			this.clicked.emit({});
		});
	}
}