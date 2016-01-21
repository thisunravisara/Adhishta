import { Lottery } from './lottery.mdl'

export interface Winnings{
    calculateWinnings( ticketNumber : Lottery );
}

export class MahajanaSampatha{
    winningNumber : Lottery;
    jackpot : number = 10000000;
    letterCorrectWinning : number = 20;
    backwordWinningAmount : Array<number> = [ 0, 20, 100, 10000, 100000, 2000000 ];
    forwardWinningAmount : Array<number> = [ 0, 0, 50, 100, 10000, 10000 ];
    constructor( winningNumber : Lottery ){
        this.winningNumber = winningNumber;
    }
    
    calculateWinnings( ticketNumber : Lottery ){
        
        if( ticketNumber && ticketNumber != null ){
            
            if( ticketNumber.drawNumber == this.winningNumber.drawNumber ){
                
                var index : number = 0;
                for( index = 0 ; index < 6 ; index++ ){
                    
                    if( ticketNumber.luckyNums[ index ] != this.winningNumber.luckyNums[ index ] ){
                        break;
                    }
                }
                
                var backIndex : number = 0;
                for( backIndex = 0 ; backIndex < 6 ; backIndex++ ){
                    
                    if( ticketNumber.luckyNums[ 5 - backIndex ] != this.winningNumber.luckyNums[ 5 - backIndex ] ){
                        break;
                    }
                }
                
                if( backIndex == 6 ){
                    
                    if( ticketNumber.letter == this.winningNumber.drawNumber ){
                        return this.jackpot;
                    } else {
                        return this.backwordWinningAmount[ backIndex - 1  ];
                    }
                }
                
                var winngingAmount : number = 0;
                winngingAmount = this.backwordWinningAmount[ backIndex ] + this.forwardWinningAmount[ index ];
                
                if( winngingAmount == 0 && ticketNumber.letter == this.winningNumber.letter ){
                    return this.letterCorrectWinning;
                }
                
                return winngingAmount;
            }
        }
        
        return 0;
    }
}