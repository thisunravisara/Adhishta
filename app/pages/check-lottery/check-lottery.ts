import {Page} from 'ionic-framework/ionic';
import {Component, Directive} from 'angular2/core';

import {LotteryListService, LottaryItem} from '../../scripts/services/lottery-list.svc';
import {LotteryInfo}  from '../../scripts/lottery-info';
import {Lottery} from '../../scripts/models/lottery.mdl'
 

// @Directive({
//   selector: 'my-dir'
// })                     
// class MyDir {
//   constructor(){ console.log("I'm alive!"); }
// }


@Component({
  selector: 'lottery-dropdown',
  template: `
        <select (change)="onSelect($event.target.value)" >
           <option  *ngFor="#loterry of loterryList" [value]="loterry.id">{{loterry.name}}</option>
        </select>
        <div *ngIf="lotteryInfo">
        
        <input *ngFor="#number of numbers; #i = index" [(ngModel)]="inputNumbers[i]"  placeholder="Number" id="lucky-num-{{i}}" />
         <input *ngIf="lotteryInfo.hasLetter" [(ngModel)]="letter" placeholder="Letter"/>
         <input *ngIf="lotteryInfo.hasZodiac" [(ngModel)]="zodiacsign" placeholder="Zodiacsign"/>
         <input  [(ngModel)]="drawNumber" placeholder="Draw Number"/>
          
         <button (click)="addToList()" >Add to que</button>
         <button (click)="checkNow()" >Check now</button>
         
        </div>
        
        <span>{{letter}}</span>  <span>{{Zodiacsign}}</span>  
     <div *ngFor="#number of inputNumbers" >{{number}}</div>
    
  `,
    providers: [LotteryListService]

})                     

class LotteryComp {
  
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



