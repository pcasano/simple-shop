
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

    consolidateItem(items: Item[]): Item[] {
        const consolidated: { [key: string]: Item } = {};
    
        items.forEach(item => {
            const key = `${item.type}_${item.model}_${item.size}`;
            if (consolidated[key]) {
                consolidated[key].number += item.number;
            } else {
                consolidated[key] = { ...item };
            }
        });
    
        return Object.values(consolidated);
    }
}
