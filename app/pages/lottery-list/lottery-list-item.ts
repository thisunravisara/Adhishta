//import {Page} from 'ionic-framework/ionic';
import {Component,Directive} from 'angular2/core';

import {LotteryListService, LottaryItem} from '../../scripts/services/lottery-list.svc';
import {LotteryInfo}  from '../../scripts/lottery-info';
import {Lottery} from '../../scripts/models/lottery.mdl'
import {LotteryListComp} from './lottery-list'

@Component({
  selector: 'lottery-list-item',
  template: `
      <div padding class="row">
      <div class="nt-item-info">
        <span class="nti-txt-prim"> {{lottery.name}} </span>
        <span *ngFor="#num of lottery.luckyNums" class="nti-txt-scnd"> {{num}} </span>
        <span *ngIf="lottery.letter"> - {{lottery.letter}}</span> 
        <span *ngIf="lottery.zodiacsign"> - {{lottery.zodiacsign}}</span>
        <span class="nti-txt-teri"> {{lottery.drawNumber}}</span>
    </div>
 
    <div class="nt-item-actions">
       <button (click)="editLottery()" class="ntia-edit"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/edit.png" /></button>
   
      <button (click)="removeLottery()" class="ntia-del"><img src="http://megaicons.net/static/img/icons_sizes/8/178/512/editing-delete-icon.png" /></button>
    </div>
    </div>
 
   `,
   inputs : ['lottery']
   })     
export class LotteryListItemComp{
    
    public lottery:Lottery; 
    constructor(){
    }
    
    removeLottery(){  
        
        localStorage.removeItem(this.lottery.jackpot.toString());
        alert('removed' + this.lottery.jackpot );
        
    }
    
      ngOnInit() {
    }
  
    
}


