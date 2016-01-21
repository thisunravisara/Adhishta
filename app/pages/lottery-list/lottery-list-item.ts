//import {Page} from 'ionic-framework/ionic';
import {Component,Directive} from 'angular2/core';

import {LotteryListService, LottaryItem} from '../../scripts/services/lottery-list.svc';
import {LotteryInfo}  from '../../scripts/lottery-info';
import {Lottery} from '../../scripts/models/lottery.mdl'
import {LotteryListComp} from './lottery-list'

@Component({
  selector: 'lottery-list-item',
  template: `
  
    <div> {{lottery.name}} </div>
    
    <div> <span *ngFor="#num of lottery.luckyNums" > {{num}} </span> </div>
    
    <div *ngIf="lottery.letter"> {{lottery.letter}}</div>
    
    <div *ngIf="lottery.zodiacsign"> {{lottery.zodiacsign}}</div>
     <div> {{lottery.drawNumber}}</div>
     
      <div> {{lottery.jackpot}}</div>
 
 
     <button (click)="editLottery()" >Edit</button>
       <button (click)="removeLottery()" >Remove</button>
 
   `,
   inputs : ['lottery']
   })     
export class LotteryListItemComp{
    
    public lottery:Lottery; 
    constructor(){
    }
    
    removeLottery(){  
        alert('removed');
        localStorage.removeItem(this.lottery.jackpot.toString());
    }
    
      ngOnInit() {
    }
  
    
}


