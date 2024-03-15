import { Item } from "./item";

export class ItemService {

    shoes: Item[] = [];
    shirts: Item[] = [];
    trousers: Item[] = [];

    totalItems: Item[] = [];


    addShoe(shoe: Item) {
        this.shoes.push(shoe);
    }
    
    addShirts(shirt: Item) {
        this.shirts.push(shirt);
    }

    addTrousers(trouser: Item) {
        this.trousers.push(trouser);
    }
}