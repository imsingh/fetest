import {Component, Input,OnInit, ContentChildren, OnChanges,ElementRef, Renderer, ViewEncapsulation} from '@angular/core';
import {ImTab} from '../im-tab/im-tab';
@Component({
	selector: 'im-tabs',
	template:`<ng-content></ng-content>`,
	styleUrls: ['app/components/im-tabs/im-tabs.css'],
	encapsulation: ViewEncapsulation.None,

})
export class ImTabs {
	@Input() tabClicked:number;
	@Input() reset:Boolean;
	@Input() selectClass:string;
	colorClass:String;
	@ContentChildren(ImTab) tabList;
	constructor(private _renderer: Renderer, private _elementRef:ElementRef) {
	
	}

	ngOnInit() {
		console.log(this.selectClass);
		this.colorClass = this.selectClass || 'im-tab-activated';
	}

	ngOnChanges() {
		if(this.reset !== null) {
			this.resetTabs();
		}

		if(this.tabClicked !== null) {
			let tab = this.tabList['_results'][this.tabClicked];
			let elm = tab['_elementRef'].nativeElement;
			tab['_renderer'].setElementClass(elm, this.colorClass, true);
		}
	}



	resetTabs() {
		if(this.tabList) {
			let tabs = this.tabList['_results'];
			tabs.forEach((tab, index) => {
				let elm = tab['_elementRef'].nativeElement;
				tab['_renderer'].setElementClass(elm, this.colorClass, false);
			});
		}
	}

}