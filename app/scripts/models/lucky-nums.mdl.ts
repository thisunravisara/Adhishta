export interface ILuckyNumbers {
  
  numberOfNumbers: number;
  isSeq: boolean;
  isRepeating: boolean;
  hasLetter: boolean;
  hasZodiac: boolean;
  
  
  
}

export class LuckyNumbers implements ILuckyNumbers {
  numberOfNumbers: number;
  isSeq: boolean;
  isRepeating: boolean;
  hasLetter: boolean;
  hasZodiac: boolean; 
  
  zodiacSign: string;
  numbers: Array<number>;
  letter: string;
    
}
