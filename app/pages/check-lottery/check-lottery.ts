import {Page} from 'ionic-framework/ionic';
import {Component, Directive} from 'angular2/core';

import {LotteryListService, LottaryItem} from '../../scripts/services/lottery-list.svc';
import {LotteryInfo}  from '../../scripts/lottery-info';
import {Lottery} from '../../scripts/models/lottery.mdl'
 


@Component({
  selector: 'lottery-dropdown',
  template: `
        <div class="row">
        <label class="frm-lbl"> Enter lottery type </label>
        <div class="frm-opt-wrp">
        <select (change)="onSelect($event.target.value)" class="frm-opt">
           <option  *ngFor="#loterry of loterryList" [value]="loterry.id">{{loterry.name}}</option>
        </select>
        </div>
        </div>
        <div *ngIf="lotteryInfo">
        
        <div class="row">
        <label class="frm-lbl"> Enter lottery number </label>
        <div class="frm-lott-nums">
            <input *ngFor="#number of numbers; #i = index" [(ngModel)]="inputNumbers[i]"  placeholder="Number" id="lucky-num-{{i}}" class="frm-txt" />
            <input *ngIf="lotteryInfo.hasLetter" [(ngModel)]="letter" placeholder="Letter" class="frm-txt" />
        </div>
        </div>
         
         
        <div *ngIf="lotteryInfo.hasZodiac" class="row">
        <label class="frm-lbl"> Select Zodiac Sign </label>
        <input  [(ngModel)]="zodiacsign" placeholder="Zodiacsign"/>
        </div>

         <div class="row">
            <label class="frm-lbl"> Enter draw number </label>
            <input class="frm-txt" [(ngModel)]="drawNumber" placeholder="Draw Number"/>
        </div>
         
         <button (click)="addToList()" class="frm-btn-primary">Add to que</button>
         <button (click)="checkNow()" class="frm-btn-secondary">Check now</button>
         
        </div>
        
 
    
  `,
    providers: [LotteryListService]

})                     

export class LotteryComp {
  
    public letter:string;
    public zodiacsign:string;
    public numbers : Array<number>;
    public inputNumbers : Array<number>;
    public drawNumber:string;
    
    
  public title = 'Lottery List';
  public loterryList: Array<LottaryItem>;
  public lotteryInfo: LotteryInfo;
  constructor(private _lotteryList:LotteryListService){};
  
   ngOnInit() {
      this._lotteryList.getList().then(list => this.loterryList = list);
    
  }
  
  onSelect(item) {
      
      this.lotteryInfo = new LotteryInfo(item);
      
    this.numbers = new Array(this.lotteryInfo.numberOfNumbers);
    this.inputNumbers = new Array(this.lotteryInfo.numberOfNumbers);
    
  }
  
  addToList(){
     var lotteryObject : Lottery;
     lotteryObject = new Lottery();
     lotteryObject.drawNumber =  this.drawNumber;
     lotteryObject.id = this.lotteryInfo.id;
     lotteryObject.name = this.lotteryInfo.name;
     lotteryObject.luckyNums = this.inputNumbers;
     lotteryObject.letter = this.letter;
     lotteryObject.zodiacsign = this.zodiacsign;
     lotteryObject.type = this.lotteryInfo.type;
     lotteryObject.status = 0;
     alert( lotteryObject.id );
      
    localStorage.setItem( localStorage.length.toString() , JSON.stringify(lotteryObject) );
      
  }
  
  checkNow() {
      
  }
}

@Page({
  templateUrl: 'build/pages/check-lottery/check-lottery.html',
   directives: [LotteryComp]
})

export class CheckLottery {
  constructor() {

  }
}



