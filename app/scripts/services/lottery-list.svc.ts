import {Injectable} from 'angular2/core';

export interface LottaryItem{
    id: string;
    name:string;
    
}


@Injectable()
export class LotteryListService {
	getList() {
        //return Promise.resolve(['govisetha','mahajanasampatha','wasanasampatha']);
        return Promise.resolve(LottaryItems);
    } 
}

export var LottaryItems: LottaryItem[] = [
	{"id":"govisetha", "name":"Govi Setha"},
    {"id":"wasanasampatha", "name":"Wasana Sampatha"},
    {"id":"mahajanasampatha", "name":"Mahajana Sampatha"},
    {"id":"lagnawasanawa", "name":"Lagna Wasanawa"},
];



