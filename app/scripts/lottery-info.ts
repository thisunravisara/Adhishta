export interface iLoteryInfo {
    id:string
    type: string ;
    name: string;
    numberOfNumbers: number;
    isSeq: boolean;
    isRepeating: boolean;
    hasLetter: boolean;
    hasZodiac: boolean;
}

export class LotteryInfo implements iLoteryInfo {
    id:string;
    type: string ;
    name: string;
    numberOfNumbers: number;
    isSeq: boolean;
    isRepeating: boolean;
    hasLetter: boolean;
    hasZodiac: boolean;
    
    constructor(name:string){
        
        if(name=="govisetha"){
            
            this.id = "govisetha";
            this.type ='nlb';
            this.name = 'Govi Setha';
            this.numberOfNumbers = 4;
            this.isSeq = false;
            this.isRepeating = false;
            this.hasLetter = true;
            this.hasZodiac = false;
            
        }
        
        else if(name=="wasanasampatha"){
            
            this.id = "wasanasampatha";
            this.type ='nlb';
            this.name = 'Wasana Sampatha';
            this.numberOfNumbers = 4;
            this.isSeq = false;
            this.isRepeating = false;
            this.hasLetter = true;
            this.hasZodiac = false;
        }
        
        else if(name=="mahajanasampatha"){
            
            this.id = "mahajanasampatha";
            this.type ='nlb';
            this.name = 'Mahajana Sampatha';
            this.numberOfNumbers = 6;
            this.isSeq = true;
            this.isRepeating = true;
            this.hasLetter = true;
            this.hasZodiac = false;
            
        }
        
         else if(name=="lagnawasanawa"){
            this.type ='nlb';
            this.name = 'Lagna Wasanawa';
            this.numberOfNumbers = 4;
            this.isSeq = false;
            this.isRepeating = false;
            this.hasLetter = false;
            this.hasZodiac = true;
            
        }
        
        
    }
    
     
    getList() {
        //return Promise.resolve(['govisetha','mahajanasampatha','wasanasampatha']);
        return Promise.resolve(this);
    } 
    
    
    
}