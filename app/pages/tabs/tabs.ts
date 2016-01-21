import {Page} from 'ionic-framework/ionic';
import {CheckLottery} from '../check-lottery/check-lottery';
import {LotteryList} from '../lottery-list/lottery-list';
import {Page3} from '../page3/page3';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: Type = CheckLottery;
  tab2Root: Type = LotteryList;
  tab3Root: Type = Page3;

  constructor() {

  }
}
