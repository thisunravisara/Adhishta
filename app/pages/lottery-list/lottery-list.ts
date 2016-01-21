import {Page,App} from 'ionic-framework/ionic'
import {Component, Directive,View} from 'angular2/core'


import {LotteryListService, LottaryItem} from '../../scripts/services/lottery-list.svc'
import {LotteryInfo}  from '../../scripts/lottery-info'
import {Lottery} from '../../scripts/models/lottery.mdl'
import {LotteryListItemComp} from './lottery-list-item'

@Component({
  selector: 'lottery-list',
    
})
@View ( {
    directives: [LotteryListItemComp],
     template: `
       <lottery-list-item  *ngFor="#lot of lotteryList"  [lottery]="lot" > </lottery-list-item>
       
  `
})
export class LotteryListComp{
    
    public title:string;
    public lotteryList : Array<Lottery> ;
    
    constructor(){
        
        this.lotteryList = new Array(localStorage.length);
        for( var i = 0 ; i < localStorage.length ; i++ ) {
            
             var retrievedObject = JSON.parse( localStorage.getItem(localStorage.key(i)) );
             var lotter : Lottery = new Lottery();
             if( retrievedObject['id'] != "" ){
                lotter.jackpot = i;
                lotter.name = retrievedObject['name'] ;
                lotter.drawNumber = retrievedObject['drawNumber'] ;
                lotter.id = retrievedObject['id'] ;
                lotter.letter = retrievedObject['letter'] ;
                lotter.luckyNums = retrievedObject['luckyNums'] ;
                lotter.status = retrievedObject['status'] ;
                lotter.type = retrievedObject['type'] ;
                lotter.zodiacsign = retrievedObject['zodiacsign'] ;
                this.lotteryList[i] = lotter;
             }
             console.log(retrievedObject['id']);
         }
          
    }
    
    removeLottery(){  
    }
    
    editLotery(){
    }
    
}


@Page({
  templateUrl: 'build/pages/lottery-list/lottery-list.html',
  directives: [LotteryListComp]
})
export class LotteryList {
  constructor() {
  }
}
