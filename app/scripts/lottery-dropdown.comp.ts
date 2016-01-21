import {Component} from 'angular2/core';
import {LotteryListService} from './services/lottery-list.svc';
import {LottaryItem}  from './services/lottery-list.svc';
import {LotteryInfo}  from './lottery-info';
import {ILottery} from './models/lottery.mdl'

@Component({
  selector: 'lottery-dropdown',
  template: `
        <select (change)="onSelect($event.target.value)" >
           <option  *ngFor="#loterry of loterryList" [value]="loterry.id">{{loterry.name}}</option>
        </select>
        <div *ngIf="lotteryInfo">
           {{ lotteryInfo.name }}
        
           <input *ngIf="lotteryInfo.hasLetter" [(ngModel)]="letter" placeholder="Letter"/>
           <input *ngIf="lotteryInfo.hasZodiac" [(ngModel)]="zodiacsign" placeholder="Zodiacsign"/>
          <input *ngFor="#number of numbers; #i = index" [(ngModel)]="inputNumbers[i]"  placeholder="Number" id="lucky-num-{{i}}" />
         
         <button (click)="addToList()" >Add to que</button>
         <button (click)="checkNow()" >Check now</button>
         
        </div>
        
        <span>{{letter}}</span>  <span>{{Zodiacsign}}</span>  
     <div *ngFor="#number of inputNumbers" >{{number}}</div>
    
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
     var lotteryObject : ILottery;
     lotteryObject = new ILottery();
     
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
