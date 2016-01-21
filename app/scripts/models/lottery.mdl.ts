import {LuckyNumbers} from './lucky-nums.mdl'


export class Lottery {
  
  id: string;
  type: string; //NLB, DLB
  name: string;
  drawNumber: string;
  img1Url: string;
  img2url: string;
  letter: string;
  zodiacsign: string;
  luckyNums: Array<number>;
  barcode: string;
  status: number; // 0 for pending, 1 for won , 2 for loss
  jackpot: number;
  
}