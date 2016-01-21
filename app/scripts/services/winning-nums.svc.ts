import {Injectable} from 'angular2/core';
import {Lottery} from '../models/lottery.mdl'

export interface LottaryItem{
    id: string;
    name:string;
    
}


@Injectable()
export class WinningNums {
	getList() {
        //return Promise.resolve(['govisetha','mahajanasampatha','wasanasampatha']);
      .//  return Promise.resolve(LottaryItems);
    } 
}

export var winningLottery = [
   {"drawNumber":"321","id":"mahajanasampatha","name":"Mahajana Sampatha","luckyNums":["1","2","2","3","1","2"],"letter":"A","type":"nlb","status":0,"jackpot":4}
];



