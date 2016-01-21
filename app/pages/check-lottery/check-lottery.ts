import {Page} from 'ionic-framework/ionic';
import {Component, Directive} from 'angular2/core';

import {LotteryListService, LottaryItem} from '../../scripts/services/lottery-list.svc'
import {LotteryInfo}  from '../../scripts/lottery-info'
import {Lottery} from '../../scripts/models/lottery.mdl'
import {GoviSetha} from '../../scripts/models/nlb-govi-setha'
import {MahajanaSampatha} from '../../scripts/models/nlb-maha-sam'
import {Http, Headers} from 'angular2/http'
 


@Component({
  selector: 'lottery-dropdown',
  template: `
        <div class="row">
        <label class="frm-lbl"> Enter lottery type </label>
        <div class="frm-opt-wrp">
        <select (click)="onSelect($event.target.value)" class="frm-opt">
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
  public lotteryObject : Lottery;
  constructor(private _lotteryList:LotteryListService, private http:Http ){};
  
   ngOnInit() {
      this._lotteryList.getList().then(list => this.loterryList = list);
    
  }
  
  onSelect(item) {
      
      this.lotteryInfo = new LotteryInfo(item);
      
    this.numbers = new Array(this.lotteryInfo.numberOfNumbers);
    this.inputNumbers = new Array(this.lotteryInfo.numberOfNumbers);
    
  }
  
    createLotteryObject() {
     this.lotteryObject = new Lottery();
     this.lotteryObject.drawNumber =  this.drawNumber;
     this.lotteryObject.id = this.lotteryInfo.id;
     this.lotteryObject.name = this.lotteryInfo.name;
     this.lotteryObject.luckyNums = this.inputNumbers;
     this.lotteryObject.letter = this.letter;
     this.lotteryObject.zodiacsign = this.zodiacsign;
     this.lotteryObject.type = this.lotteryInfo.type;
     this.lotteryObject.status = 0;
     this.lotteryObject.jackpot = localStorage.length;
      
  }
  
  addToList(){
     
     this.createLotteryObject();
     alert( this.lotteryObject.id );
      
    localStorage.setItem( localStorage.length.toString() , JSON.stringify(this.lotteryObject) );
      
  }
  

  
  checkNow() {
      
      var result : JSON;
     this.http.get( 'http://192.168.0.102:8400/restexample/helloWorld/lottery' ).subscribe(
         data => result = data.json(),
         err => console.log( err.text() )
     )
      
      console.log(result);
      
    this.createLotteryObject();
      
      if(this.lotteryInfo.id == "govisetha") {
          var calc : GoviSetha = new GoviSetha(this.lotteryObject); 
          console.log( this.lotteryObject );
         // calc.calculateWinnings(this.lotteryObject);
          console.log( calc.calculateWinnings(this.lotteryObject) );
      }
      if(this.lotteryInfo.id == "mahajanasampatha") {
          var calcx : MahajanaSampatha = new MahajanaSampatha(this.lotteryObject); 
          console.log( this.lotteryObject );
         // calc.calculateWinnings(this.lotteryObject);
          console.log( calcx.calculateWinnings( this.lotteryObject ) );
      }
      
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



