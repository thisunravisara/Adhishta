import {Component} from 'angular2/core';
import {LotteryListService} from './services/lottery-list.svc';
import {LottaryItem}  from './services/lottery-list.svc';
import {LotteryInfo}  from './lottery-info';
import {ILottery} from './models/lottery.mdl'

@Component({
  selector: 'lottery-list',
  template: `
        
    
  `,
  providers: [LotteryListService]
})
export class LotteryListComp {
     
}
