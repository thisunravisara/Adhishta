import { Lottery } from './lottery.mdl';

export class GoviSetha{
    winningNumber : Lottery;
    jackpot : number = 10000000;
    letterCorrectWinning : number = 20;
    numberOnlyWinningAmount : Array<number> = [ 0, 20, 100, 2000, 1000000 ];
    numberWithLetterWinningAmount : Array<number> = [ 20, 40, 1000, 20000, 40000000 ];
    
    constructor( winningNumber : Lottery ){
        this.winningNumber = winningNumber;
    }
    
    calculateWinnings( ticketNumber : Lottery ){
        
        if( ticketNumber && ticketNumber != null ){
            
            if( ticketNumber.drawNumber == this.winningNumber.drawNumber ){
                
                var matched : number = 0;
                for( var index : number = 0 ; index < 4 ; index++ ){
                    
                    for( var j = 0; j < 4; j++ ){
                        
                        if( ticketNumber.luckyNums[ index ] == this.winningNumber.luckyNums[ j ] ){
                            
                            matched++;
                        }
                    }
                }
                
                if( ticketNumber.letter == this.winningNumber.letter ){
                    
                    return this.numberWithLetterWinningAmount[ matched ];
                } else {
                    
                    return this.numberOnlyWinningAmount[ matched ];
                }
            }
        }
        
        return 0;
    }
}