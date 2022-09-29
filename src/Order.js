export default class Order {
    constructor(items = []) {
        this.items = items;
    }

    addItem(item) {
        this.items.push(item);
    }

    getTotal() {
        return this.items.reduce((prev, curr) => prev + curr.price, 0);
    }

    getTaxes() {
        const getTaxes = this.items.reduce((prev, curr) => prev + curr.getTax() , 0);
        return getTaxes;
    }
}