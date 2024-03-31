
import { InventoryItem } from "./inventoryItem";
import { Item } from "./item";

export class ItemService {

    items: Item[] = [];

    totalCartItems: Item[] = [];

    sentOrders: InventoryItem[] = [];

    inventoryTotalPrice: number = 0;
    cartTotalPrice: number = 0;

    orderId: number = 0;

    itemType: any;

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
