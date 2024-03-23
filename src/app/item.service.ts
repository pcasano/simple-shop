
import { InventoryItem } from "./inventoryItem";
import { Item } from "./item";

export class ItemService {

    shoes: Item[] = [];
    shirts: Item[] = [];
    trousers: Item[] = [];

    totalCartItems: Item[] = [];

    sentOrders: InventoryItem[] = [];

    inventoryTotalPrice: number = 0;
    cartTotalPrice: number = 0;

    orderId: number = 0;


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
