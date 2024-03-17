
import { InventoryItem } from "./inventoryItem";
import { Item } from "./item";

export class ItemService {

    shoes: Item[] = [];
    shirts: Item[] = [];
    trousers: Item[] = [];

    totalCartItems: Item[] = [];

    shoeInCart1S: Item;
    shoeInCart1M: Item;
    shoeInCart1L: Item;

    shoeInCart2S: Item;
    shoeInCart2M: Item;
    shoeInCart2L: Item;

    shoeInCart3S: Item;
    shoeInCart3M: Item;
    shoeInCart3L: Item;


    shirtInCart1S: Item;
    shirtInCart1M: Item;
    shirtInCart1L: Item;

    shirtInCart2S: Item;
    shirtInCart2M: Item;
    shirtInCart2L: Item;

    shirtInCart3S: Item;
    shirtInCart3M: Item;
    shirtInCart3L: Item;

    sentOrders: InventoryItem[] = [];

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
