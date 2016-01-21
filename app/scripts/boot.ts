import {bootstrap} from 'angular2/platform/browser';
import {LotteryListService} from './services/lottery-list.svc';
import {LotteryComp} from './lottery-dropdown.comp';
//import {LotteryLuckynumComp} from './lottery-luckynums.comp';

bootstrap(LotteryComp, [
  LotteryListService
  
]);


//bootstrap(LotteryLuckynumComp);
// bootstrap(LotteryListService);